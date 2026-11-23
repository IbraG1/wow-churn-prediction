#!/usr/bin/env python3
"""
WoW Churn Prediction - Data Pipeline & Model Training Script
Parses 10M+ rows of World of Warcraft Avatar History data, extracts player-level
features, trains a lightweight gradient boosted classification model, and exports:
  1. Pure JavaScript model for client-side scoring via m2cgen (ES Module).
  2. Aggregated metrics and visualizations data in JSON for the static dashboard.
"""

import os
import json
import time
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.metrics import (
    accuracy_score,
    f1_score,
    roc_auc_score,
    confusion_matrix
)
import xgboost as xgb
import m2cgen as m2c

# -----------------------------------------------------------------------------
# Configuration & Paths
# -----------------------------------------------------------------------------
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_PATH = os.path.join(BASE_DIR, "data", "wowah_data.csv")
MODEL_EXPORT_PATH = os.path.join(BASE_DIR, "web-app", "src", "model", "churnModel.js")
METRICS_EXPORT_PATH = os.path.join(BASE_DIR, "web-app", "public", "data", "dashboard_metrics.json")

SESSION_GAP_SECONDS = 1800  # 30 min inactivity threshold for new session
MINUTES_PER_RECORD = 10.0   # Each snapshot is ~10 min
PREDICTION_WINDOW_DAYS = 30 # Churn definition: inactive in last 30 days

FEATURE_NAMES = [
    "total_sessions",
    "avg_session_minutes",
    "max_level",
    "level_velocity",
    "has_guild",
    "days_active_span",
    "recency_days"
]

def load_and_preprocess_data(csv_path: str):
    """
    Reads the raw wowah_data.csv memory-efficiently using optimized data types
    and columns selection, stripping extra whitespaces and parsing timestamps.
    """
    print(f"[*] Loading data from: {csv_path}")
    t0 = time.time()
    
    # Read only needed columns: char (0), level (1), guild (5), timestamp (6)
    usecols = [0, 1, 5, 6]
    dtype_dict = {0: "int32", 1: "int8", 5: "int32"}
    
    df = pd.read_csv(csv_path, usecols=usecols, dtype=dtype_dict)
    df.columns = df.columns.str.strip()
    
    # Parse timestamp format MM/DD/YY HH:MM:SS
    df["timestamp"] = pd.to_datetime(df["timestamp"], format="%m/%d/%y %H:%M:%S")
    
    load_time = time.time() - t0
    print(f"[+] Loaded {len(df):,} records in {load_time:.2f}s ({df.memory_usage().sum() / 1e6:.1f} MB)")
    return df

def extract_features_and_labels(df: pd.DataFrame):
    """
    Splits data into pre-cutoff observation window and post-cutoff prediction window.
    Builds aggregated player features and target variable is_churn.
    """
    max_date = df["timestamp"].max()
    cutoff_date = max_date - pd.Timedelta(days=PREDICTION_WINDOW_DAYS)
    print(f"[*] Timeline range: {df['timestamp'].min()} to {max_date}")
    print(f"[*] Cutoff date for churn evaluation: {cutoff_date}")
    
    t0 = time.time()
    # Observation window (pre-cutoff)
    df_pre = df[df["timestamp"] < cutoff_date].sort_values(["char", "timestamp"]).reset_index(drop=True)
    
    # Prediction window (post-cutoff)
    df_post = df[df["timestamp"] >= cutoff_date]
    active_characters_post = set(df_post["char"].unique())
    print(f"[+] Unique characters active pre-cutoff: {df_pre['char'].nunique():,}")
    print(f"[+] Unique characters active post-cutoff: {len(active_characters_post):,}")
    
    # Vectorized session boundary detection
    char_vals = df_pre["char"].values
    ts_vals = df_pre["timestamp"].values
    n = len(df_pre)
    
    is_new_char = np.empty(n, dtype=bool)
    is_new_char[0] = True
    is_new_char[1:] = (char_vals[1:] != char_vals[:-1])
    
    is_gap = np.empty(n, dtype=bool)
    is_gap[0] = False
    dt_sec = (ts_vals[1:] - ts_vals[:-1]) / np.timedelta64(1, "s")
    is_gap[1:] = (dt_sec > SESSION_GAP_SECONDS) & (~is_new_char[1:])
    
    df_pre["is_session"] = (is_new_char | is_gap).astype(np.int32)
    df_pre["is_in_guild"] = (df_pre["guild"] > 0).astype(np.int8)
    
    # Aggregation at character level
    print("[*] Aggregating character-level metrics...")
    grouped = df_pre.groupby("char").agg(
        total_records=("level", "count"),
        total_sessions=("is_session", "sum"),
        max_level=("level", "max"),
        min_level=("level", "min"),
        has_guild=("is_in_guild", "max"),
        min_time=("timestamp", "min"),
        max_time=("timestamp", "max")
    ).reset_index()
    
    # Derive specified features
    grouped["avg_session_minutes"] = (grouped["total_records"] * MINUTES_PER_RECORD) / grouped["total_sessions"]
    grouped["total_hours_played"] = (grouped["total_records"] * MINUTES_PER_RECORD) / 60.0
    
    # Level velocity (levels gained / hours played)
    levels_gained = np.maximum(0, grouped["max_level"] - grouped["min_level"])
    grouped["level_velocity"] = levels_gained / grouped["total_hours_played"]
    
    # Days active span (days between first and last connection in window)
    grouped["days_active_span"] = (grouped["max_time"] - grouped["min_time"]).dt.total_seconds() / 86400.0
    
    # Recency days (days from last connection to cutoff date)
    grouped["recency_days"] = (cutoff_date - grouped["max_time"]).dt.total_seconds() / 86400.0
    
    # Churn target: 1 if NOT appeared in last 30 days, 0 if appeared
    grouped["is_churn"] = (~grouped["char"].isin(active_characters_post)).astype(int)
    
    # Ensure no NaN or Inf values
    null_counts = grouped[FEATURE_NAMES + ["is_churn"]].isnull().sum().sum()
    inf_counts = np.isinf(grouped[FEATURE_NAMES].values).sum()
    if null_counts > 0 or inf_counts > 0:
        raise ValueError(f"Found {null_counts} NaNs and {inf_counts} Infs in extracted features!")
        
    print(f"[+] Feature extraction completed in {time.time() - t0:.2f}s with 0 NaNs and 0 Infs.")
    print(f"[+] Final dataset: {len(grouped):,} player samples. Churn rate: {grouped['is_churn'].mean():.4f}")
    return grouped

def train_model(df_features: pd.DataFrame):
    """
    Trains a compact XGBoost classification model (max_depth=5, n_estimators=50).
    """
    X = df_features[FEATURE_NAMES].values
    y = df_features["is_churn"].values
    
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.20, random_state=42, stratify=y
    )
    
    print(f"[*] Training XGBoost classifier on {len(X_train):,} train samples...")
    model = xgb.XGBClassifier(
        n_estimators=50,
        max_depth=5,
        learning_rate=0.1,
        base_score=0.5,
        random_state=42,
        eval_metric="logloss"
    )
    model.fit(X_train, y_train)
    
    # Evaluation
    y_pred = model.predict(X_test)
    y_prob = model.predict_proba(X_test)[:, 1]
    
    acc = float(accuracy_score(y_test, y_pred))
    f1 = float(f1_score(y_test, y_pred))
    roc_auc = float(roc_auc_score(y_test, y_prob))
    cm = confusion_matrix(y_test, y_pred).tolist()
    
    print(f"[+] Model Evaluation Metrics (Test Set):")
    print(f"    - Accuracy:  {acc:.4f}")
    print(f"    - F1-Score:  {f1:.4f}")
    print(f"    - ROC-AUC:   {roc_auc:.4f}")
    print(f"    - Confusion Matrix (TN, FP / FN, TP):\n      {cm}")
    
    return model, {
        "accuracy": acc,
        "f1_score": f1,
        "roc_auc": roc_auc,
        "confusion_matrix": cm
    }

def export_model_to_javascript(model, output_path: str):
    """
    Exports the trained model to pure standalone JavaScript using m2cgen,
    formatting as an ES Module with detailed JSDoc documentation.
    """
    print(f"[*] Exporting model to JavaScript via m2cgen...")
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    
    raw_js = m2c.export_to_javascript(model)
    
    # Replace standard function declaration with ES Module export
    es_module_export = "export function score(input)"
    if "function score(input)" in raw_js:
        js_code = raw_js.replace("function score(input)", es_module_export, 1)
    else:
        js_code = raw_js
        
    docstring = f"""/**
 * Churn Prediction Model for World of Warcraft (WoW) Avatars.
 * Generated with m2cgen from XGBoost (n_estimators=50, max_depth=5).
 * 100% pure client-side JavaScript execution (zero external dependencies).
 * 
 * Input feature array order:
 *   [0] total_sessions (number): Total distinct play sessions
 *   [1] avg_session_minutes (number): Average session duration in minutes
 *   [2] max_level (number): Maximum level reached (1 - 80)
 *   [3] level_velocity (number): Levels gained per hour played
 *   [4] has_guild (number): Guild membership flag (1 = yes, 0 = no)
 *   [5] days_active_span (number): Days between first and last connection in window
 *   [6] recency_days (number): Days since last connection to cutoff date
 * 
 * @param {{number[]}} input - Array of exactly 7 numerical features in the order above.
 * @returns {{number[]}} [prob_retained, prob_churn]
 */
"""
    full_js = docstring + js_code
    
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(full_js)
        
    file_size_bytes = os.path.getsize(output_path)
    print(f"[+] Saved JavaScript model to: {output_path}")
    print(f"[+] Model file size: {file_size_bytes:,} bytes ({file_size_bytes / 1024:.1f} KB)")
    return file_size_bytes

def export_dashboard_metrics(df_features: pd.DataFrame, eval_metrics: dict, model, output_path: str):
    """
    Computes and exports aggregated metrics for the dashboard JSON:
      - Global KPIs
      - Confusion matrix
      - Feature importances
      - Churn rate by guild affiliation
      - Churn rate by level brackets (1-20, 21-40, 41-60, 61-70, 71-80)
      - Hours played distribution (churned vs retained)
    """
    print(f"[*] Aggregating dashboard metrics...")
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    
    total_players = int(len(df_features))
    overall_churn_rate = float(df_features["is_churn"].mean())
    
    # Feature importance sorted descending
    importances = model.feature_importances_
    feat_imp = [
        {"feature": name, "importance": round(float(imp), 4)}
        for name, imp in zip(FEATURE_NAMES, importances)
    ]
    feat_imp.sort(key=lambda x: x["importance"], reverse=True)
    
    # Guild comparison
    guild_churn = {}
    for has_g, label in [(1, "with_guild"), (0, "without_guild")]:
        sub = df_features[df_features["has_guild"] == has_g]
        total_sub = int(len(sub))
        churned_sub = int(sub["is_churn"].sum())
        rate = float(sub["is_churn"].mean()) if total_sub > 0 else 0.0
        guild_churn[label] = {
            "total_players": total_sub,
            "churned_players": churned_sub,
            "retained_players": total_sub - churned_sub,
            "churn_rate": round(rate, 4),
            "retention_rate": round(1.0 - rate, 4)
        }
        
    # Level bracket analysis: 1-20, 21-40, 41-60, 61-70, 71-80
    brackets = [
        ("1-20", 1, 20),
        ("21-40", 21, 40),
        ("41-60", 41, 60),
        ("61-70", 61, 70),
        ("71-80", 71, 80)
    ]
    level_bracket_metrics = []
    for label, min_l, max_l in brackets:
        sub = df_features[(df_features["max_level"] >= min_l) & (df_features["max_level"] <= max_l)]
        total_b = int(len(sub))
        churned_b = int(sub["is_churn"].sum())
        rate = float(sub["is_churn"].mean()) if total_b > 0 else 0.0
        level_bracket_metrics.append({
            "bracket": label,
            "min_level": min_l,
            "max_level": max_l,
            "total_players": total_b,
            "churned_players": churned_b,
            "retained_players": total_b - churned_b,
            "churn_rate": round(rate, 4)
        })
        
    # Hours played distribution (churned vs retained)
    churned_hours = df_features[df_features["is_churn"] == 1]["total_hours_played"]
    retained_hours = df_features[df_features["is_churn"] == 0]["total_hours_played"]
    
    hours_distribution = {
        "churned": {
            "mean_hours": round(float(churned_hours.mean()), 2),
            "median_hours": round(float(churned_hours.median()), 2),
            "p25_hours": round(float(churned_hours.quantile(0.25)), 2),
            "p75_hours": round(float(churned_hours.quantile(0.75)), 2),
            "max_hours": round(float(churned_hours.max()), 2)
        },
        "retained": {
            "mean_hours": round(float(retained_hours.mean()), 2),
            "median_hours": round(float(retained_hours.median()), 2),
            "p25_hours": round(float(retained_hours.quantile(0.25)), 2),
            "p75_hours": round(float(retained_hours.quantile(0.75)), 2),
            "max_hours": round(float(retained_hours.max()), 2)
        }
    }
    
    cm = eval_metrics["confusion_matrix"]
    tn, fp = cm[0]
    fn, tp = cm[1]
    
    dashboard_data = {
        "metadata": {
            "dataset": "World of Warcraft Avatar History (WoWAH 2008)",
            "model_type": "XGBoost Classifier (n_estimators=50, max_depth=5)",
            "observation_cutoff_date": "2008-12-01 23:50:18",
            "prediction_window_days": PREDICTION_WINDOW_DAYS,
            "features_order": FEATURE_NAMES
        },
        "kpis": {
            "total_players": total_players,
            "churn_rate": round(overall_churn_rate, 4),
            "retention_rate": round(1.0 - overall_churn_rate, 4),
            "accuracy": round(eval_metrics["accuracy"], 4),
            "f1_score": round(eval_metrics["f1_score"], 4),
            "roc_auc": round(eval_metrics["roc_auc"], 4)
        },
        "confusion_matrix": {
            "matrix": cm,
            "true_negatives": int(tn),
            "false_positives": int(fp),
            "false_negatives": int(fn),
            "true_positives": int(tp),
            "tn_pct": round(float(tn / (tn + fp)), 4),
            "tp_pct": round(float(tp / (fn + tp)), 4)
        },
        "feature_importance": feat_imp,
        "churn_by_guild": guild_churn,
        "churn_by_level_bracket": level_bracket_metrics,
        "hours_played_distribution": hours_distribution
    }
    
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(dashboard_data, f, indent=2)
        
    print(f"[+] Saved dashboard metrics JSON to: {output_path}")
    return dashboard_data

def main():
    print("=" * 65)
    print("WoW Churn Prediction - ML Pipeline & Static Export")
    print("=" * 65)
    
    if not os.path.exists(DATA_PATH):
        raise FileNotFoundError(f"Dataset not found at {DATA_PATH}")
        
    # 1. Load and Preprocess
    df_raw = load_and_preprocess_data(DATA_PATH)
    
    # 2. Extract Features & Labels
    df_features = extract_features_and_labels(df_raw)
    
    # 3. Train Model
    model, eval_metrics = train_model(df_features)
    
    # 4. Export pure JS model (ES Module)
    js_size = export_model_to_javascript(model, MODEL_EXPORT_PATH)
    
    # 5. Export dashboard metrics JSON
    dashboard_data = export_dashboard_metrics(df_features, eval_metrics, model, METRICS_EXPORT_PATH)
    
    print("=" * 65)
    print("Pipeline Execution Completed Successfully!")
    print(f"JS Model: {MODEL_EXPORT_PATH} ({js_size / 1024:.1f} KB)")
    print(f"Metrics JSON: {METRICS_EXPORT_PATH}")
    print("=" * 65)

if __name__ == "__main__":
    main()
