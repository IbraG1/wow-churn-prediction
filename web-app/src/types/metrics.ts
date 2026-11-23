export interface Metadata {
  dataset: string;
  model_type: string;
  observation_cutoff_date: string;
  prediction_window_days: number;
  features_order: string[];
}

export interface KPIs {
  total_players: number;
  churn_rate: number;
  retention_rate: number;
  accuracy: number;
  f1_score: number;
  roc_auc: number;
}

export interface ConfusionMatrix {
  matrix: number[][];
  true_negatives: number;
  false_positives: number;
  false_negatives: number;
  true_positives: number;
  tn_pct: number;
  tp_pct: number;
}

export interface FeatureImportanceItem {
  feature: string;
  importance: number;
}

export interface GuildChurnData {
  total_players: number;
  churned_players: number;
  retained_players: number;
  churn_rate: number;
  retention_rate: number;
}

export interface ChurnByGuild {
  with_guild: GuildChurnData;
  without_guild: GuildChurnData;
}

export interface LevelBracketItem {
  bracket: string;
  min_level: number;
  max_level: number;
  total_players: number;
  churned_players: number;
  retained_players: number;
  churn_rate: number;
}

export interface HoursStats {
  mean_hours: number;
  median_hours: number;
  p25_hours: number;
  p75_hours: number;
  max_hours: number;
}

export interface HoursPlayedDistribution {
  churned: HoursStats;
  retained: HoursStats;
}

export interface DashboardMetrics {
  metadata: Metadata;
  kpis: KPIs;
  confusion_matrix: ConfusionMatrix;
  feature_importance: FeatureImportanceItem[];
  churn_by_guild: ChurnByGuild;
  churn_by_level_bracket: LevelBracketItem[];
  hours_played_distribution: HoursPlayedDistribution;
}
