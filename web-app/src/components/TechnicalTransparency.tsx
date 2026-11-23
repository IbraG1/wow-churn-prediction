import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell
} from 'recharts';
import { Cpu, Layers, GitBranch, CheckCircle, Database, Code2, Globe, ShieldCheck } from 'lucide-react';
import { FeatureImportanceItem, ConfusionMatrix } from '../types/metrics';

interface TechnicalTransparencyProps {
  featureImportance: FeatureImportanceItem[];
  confusionMatrix: ConfusionMatrix;
}

const FEATURE_LABELS_MAP: Record<string, string> = {
  recency_days: 'Días Inactivo (Recency)',
  total_sessions: 'Total de Sesiones',
  days_active_span: 'Vida del Avatar (Span)',
  max_level: 'Nivel Máximo (Max Level)',
  level_velocity: 'Velocidad Leveo (Lvl/h)',
  avg_session_minutes: 'Duración Media Sesión',
  has_guild: 'Hermandad (Guild)'
};

export const TechnicalTransparency: React.FC<TechnicalTransparencyProps> = ({
  featureImportance,
  confusionMatrix,
}) => {
  const chartData = [...featureImportance]
    .reverse()
    .map((item) => ({
      feature: item.feature,
      name: FEATURE_LABELS_MAP[item.feature] || item.feature,
      importance: item.importance * 100,
    }));

  return (
    <section id="technical" className="py-14 border-t border-[#3b2d18] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-serif font-bold text-[#f8b700] uppercase tracking-widest mb-2">
            <Cpu className="w-4 h-4" />
            <span>Explicabilidad & Alta Ingeniería</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-black uppercase tracking-wider text-white">
            Grimorio Técnico del Pipeline
          </h2>
          <p className="mt-2 text-sm text-slate-300 font-sans leading-relaxed">
            Arquitectura Serverless Machine Learning, pesos de decisión del modelo
            y validación rigurosa sobre el conjunto de prueba independiente.
          </p>
        </div>

        {/* 2 Columns: Feature Importance & Confusion Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Feature Importance (7 cols) */}
          <div className="lg:col-span-7 wow-card p-6 sm:p-7 rounded-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-serif font-bold text-base sm:text-lg text-white uppercase tracking-wider flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#f8b700]" />
                  Pesos de Decisión (Feature Importance)
                </h3>
                <span className="text-xs font-mono font-bold text-[#f8b700]">XGBoost Gain</span>
              </div>
              <p className="text-xs text-slate-400 font-sans mb-6 leading-relaxed">
                El tiempo transcurrido desde la última conexión (<code className="text-[#ffe27d]">recency_days</code>)
                y el volumen histórico de sesiones (<code className="text-[#ffe27d]">total_sessions</code>) dominan el 73.5%
                del poder predictivo del clasificador.
              </p>

              <div className="h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    layout="vertical"
                    data={chartData}
                    margin={{ top: 5, right: 30, left: 140, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" horizontal={false} />
                    <XAxis type="number" stroke="#9ca3af" tick={{ fill: '#9ca3af', fontSize: 11 }} unit="%" domain={[0, 60]} />
                    <YAxis
                      dataKey="name"
                      type="category"
                      stroke="#9ca3af"
                      tick={{ fill: '#d1d5db', fontSize: 11, fontFamily: 'Cinzel' }}
                      width={135}
                    />
                    <Tooltip
                      formatter={(val: any) => [`${parseFloat(val).toFixed(1)}%`, 'Importancia']}
                      contentStyle={{
                        backgroundColor: '#0c101d',
                        borderColor: '#694e1d',
                        borderRadius: '0.5rem',
                        fontSize: '12px',
                        fontFamily: 'Cinzel'
                      }}
                    />
                    <Bar dataKey="importance" radius={[0, 4, 4, 0]}>
                      {chartData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={
                            entry.importance > 40
                              ? '#f8b700'
                              : entry.importance > 15
                              ? '#d97706'
                              : '#64748b'
                          }
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#3e2c14] text-xs font-serif uppercase tracking-wider text-slate-400 flex items-center justify-between">
              <span>7 Atributos Vectorizados</span>
              <span className="text-[#ffe27d] font-bold">Recency + Sesiones = 73.5%</span>
            </div>
          </div>

          {/* Confusion Matrix Tablet (5 cols) */}
          <div className="lg:col-span-5 wow-card p-6 sm:p-7 rounded-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-serif font-bold text-base sm:text-lg text-white uppercase tracking-wider flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  Matriz de Confusión (7,034 Casos)
                </h3>
                <span className="text-xs font-mono font-bold text-emerald-400">Acc: 91.9%</span>
              </div>
              <p className="text-xs text-slate-400 font-sans mb-6 leading-relaxed">
                Evaluación sobre el 20% estratificado de validación. Detección masiva del 97.1% de casos de churn real.
              </p>

              {/* 2x2 Ornate Stone Grid */}
              <div className="grid grid-cols-2 gap-3 text-center font-sans">
                {/* True Negative */}
                <div className="bg-[#080b15] border border-[#1b683d]/60 p-4 rounded-xl">
                  <span className="text-[10px] font-serif font-bold uppercase tracking-wider text-emerald-300 block mb-1">
                    Verdaderos Negativos (TN)
                  </span>
                  <span className="text-2xl sm:text-3xl font-serif font-black text-emerald-400">
                    {confusionMatrix.true_negatives.toLocaleString()}
                  </span>
                  <span className="text-[11px] text-slate-400 block mt-1">
                    Retenidos salvados ({((confusionMatrix.true_negatives / (confusionMatrix.true_negatives + confusionMatrix.false_positives)) * 100).toFixed(1)}%)
                  </span>
                </div>

                {/* False Positive */}
                <div className="bg-[#080b15] border border-[#3e2c14] p-4 rounded-xl">
                  <span className="text-[10px] font-serif font-bold uppercase tracking-wider text-amber-300 block mb-1">
                    Falsos Positivos (FP)
                  </span>
                  <span className="text-2xl sm:text-3xl font-serif font-black text-amber-400">
                    {confusionMatrix.false_positives.toLocaleString()}
                  </span>
                  <span className="text-[11px] text-slate-400 block mt-1">
                    Retenidos predichos como churn
                  </span>
                </div>

                {/* False Negative */}
                <div className="bg-[#080b15] border border-[#3e2c14] p-4 rounded-xl">
                  <span className="text-[10px] font-serif font-bold uppercase tracking-wider text-blue-300 block mb-1">
                    Falsos Negativos (FN)
                  </span>
                  <span className="text-2xl sm:text-3xl font-serif font-black text-blue-400">
                    {confusionMatrix.false_negatives.toLocaleString()}
                  </span>
                  <span className="text-[11px] text-slate-400 block mt-1">
                    Churn no detectado (2.9%)
                  </span>
                </div>

                {/* True Positive */}
                <div className="bg-[#080b15] border border-[#782323]/60 p-4 rounded-xl">
                  <span className="text-[10px] font-serif font-bold uppercase tracking-wider text-red-300 block mb-1">
                    Verdaderos Positivos (TP)
                  </span>
                  <span className="text-2xl sm:text-3xl font-serif font-black text-red-400">
                    {confusionMatrix.true_positives.toLocaleString()}
                  </span>
                  <span className="text-[11px] text-slate-400 block mt-1">
                    Churn anticipado ({((confusionMatrix.true_positives / (confusionMatrix.false_negatives + confusionMatrix.true_positives)) * 100).toFixed(1)}%)
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#3e2c14] text-xs font-serif uppercase tracking-wider text-slate-400 flex items-center justify-between">
              <span>Sensibilidad (Recall): <strong>97.1%</strong></span>
              <span>F1-Score: <strong>0.9524</strong></span>
            </div>
          </div>
        </div>

        {/* Serverless ML Architecture Blueprint */}
        <div className="wow-card rounded-xl p-6 sm:p-8 border-2 border-[#694e1d]">
          <div className="flex items-center gap-3.5 mb-6">
            <div className="w-10 h-10 rounded bg-[#2b1f09] border border-[#78551b] flex items-center justify-center text-[#f8b700]">
              <GitBranch className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-white uppercase tracking-wider">
                Arquitectura Serverless Edge ML
              </h3>
              <p className="text-xs text-slate-400 font-sans">
                De 10.8 millones de filas crudas a inferencia estática sin costo de infraestructura.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Step 1 */}
            <div className="bg-[#080b16] p-4 rounded-lg border border-[#2b1f09]">
              <div className="w-7 h-7 rounded bg-[#172038] text-blue-400 flex items-center justify-center font-serif font-bold text-xs mb-2">
                I
              </div>
              <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-white flex items-center gap-1.5 mb-1">
                <Database className="w-3.5 h-3.5 text-blue-400" /> Ingesta Masiva
              </h4>
              <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
                Carga de 10.8M logs con dtypes optimizados en &lt;11 segundos (&lt;190 MB RAM).
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-[#080b16] p-4 rounded-lg border border-[#2b1f09]">
              <div className="w-7 h-7 rounded bg-[#2b1f09] text-[#f8b700] flex items-center justify-center font-serif font-bold text-xs mb-2">
                II
              </div>
              <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-white flex items-center gap-1.5 mb-1">
                <Layers className="w-3.5 h-3.5 text-[#f8b700]" /> Forja de Atributos
              </h4>
              <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
                Extracción de sesiones por saltos de inactividad &gt;30m y agregación de 35,169 personajes sin NaNs.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-[#080b16] p-4 rounded-lg border border-[#2b1f09]">
              <div className="w-7 h-7 rounded bg-[#2b0e0e] text-red-400 flex items-center justify-center font-serif font-bold text-xs mb-2">
                III
              </div>
              <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-white flex items-center gap-1.5 mb-1">
                <Code2 className="w-3.5 h-3.5 text-red-400" /> XGBoost & m2cgen
              </h4>
              <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
                Modelo entrenado (50 estimadores, ROC-AUC 0.9369) transpilado a JavaScript puro (198 KB).
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-[#080b16] p-4 rounded-lg border border-[#2b1f09]">
              <div className="w-7 h-7 rounded bg-[#0b2416] text-emerald-400 flex items-center justify-center font-serif font-bold text-xs mb-2">
                IV
              </div>
              <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-white flex items-center gap-1.5 mb-1">
                <Globe className="w-3.5 h-3.5 text-emerald-400" /> 100% GitHub Pages
              </h4>
              <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
                Despliegue estático sin servidor backend ni costo de nube. Inferencia instantánea en cualquier cliente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
