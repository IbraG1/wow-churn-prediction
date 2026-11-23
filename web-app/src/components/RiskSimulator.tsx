import React, { useState, useMemo } from 'react';
import {
  Sliders,
  AlertTriangle,
  CheckCircle2,
  AlertCircle,
  Zap,
  RotateCcw,
  Sparkles,
  Shield,
  Users,
  Flame,
  Award,
  Clock,
  TrendingUp,
  Skull
} from 'lucide-react';
import { PlayerFeatures, predictChurn, PredictionResult } from '../model/predict';

interface PresetProfile {
  name: string;
  badge: string;
  characterTitle: string;
  description: string;
  features: PlayerFeatures;
}

const PRESET_PROFILES: PresetProfile[] = [
  {
    name: 'Paladín de la Cruzada',
    badge: 'Retención Absoluta',
    characterTitle: 'Nivel 80 • Hermandad Mítica • Rasganorte',
    description: 'Raider diario con más de 200 sesiones registradas y actividad en las últimas 24 horas.',
    features: {
      total_sessions: 220,
      avg_session_minutes: 85,
      max_level: 80,
      level_velocity: 0.05,
      has_guild: 1,
      days_active_span: 280,
      recency_days: 1.2
    }
  },
  {
    name: 'Chamán de Terrallende',
    badge: 'Retención Favorable',
    characterTitle: 'Nivel 68 • Hermandad Casual • The Burning Crusade',
    description: 'Conexión 2 a 3 veces por semana, progresión constante en zonas de Outland.',
    features: {
      total_sessions: 65,
      avg_session_minutes: 50,
      max_level: 68,
      level_velocity: 0.12,
      has_guild: 1,
      days_active_span: 120,
      recency_days: 3.5
    }
  },
  {
    name: 'Guerrero en los Baldíos',
    badge: 'Peligro Inminente',
    characterTitle: 'Nivel 34 • Solitario • Valle de Leveo',
    description: 'Sin hermandad, 12 días sin loguear tras sufrir fatiga en misiones repetitivas.',
    features: {
      total_sessions: 18,
      avg_session_minutes: 22,
      max_level: 34,
      level_velocity: 0.25,
      has_guild: 0,
      days_active_span: 40,
      recency_days: 12.0
    }
  },
  {
    name: 'Pícaro Huérfano en Tirisfal',
    badge: 'Abandono Total',
    characterTitle: 'Nivel 14 • Sin Gremio • Personaje Secundario',
    description: 'Avatar secundario probado una sola tarde y abandonado hace más de 2 meses.',
    features: {
      total_sessions: 4,
      avg_session_minutes: 15,
      max_level: 14,
      level_velocity: 0.40,
      has_guild: 0,
      days_active_span: 3,
      recency_days: 65.0
    }
  }
];

export const RiskSimulator: React.FC = () => {
  const [features, setFeatures] = useState<PlayerFeatures>(PRESET_PROFILES[0].features);

  const prediction: PredictionResult = useMemo(() => {
    return predictChurn(features);
  }, [features]);

  const handleSliderChange = (key: keyof PlayerFeatures, value: number) => {
    setFeatures((prev) => ({
      ...prev,
      [key]: value
    }));
  };

  const handleApplyPreset = (preset: PresetProfile) => {
    setFeatures(preset.features);
  };

  const handleReset = () => {
    setFeatures(PRESET_PROFILES[0].features);
  };

  const churnPct = Math.round(prediction.churnProbability * 100);
  const retainedPct = Math.round(prediction.retainedProbability * 100);

  return (
    <section id="simulator" className="py-14 border-t border-[#3b2d18] bg-[#05070e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-serif font-bold text-[#f8b700] uppercase tracking-widest mb-2">
            <Sliders className="w-4 h-4" />
            <span>Oráculo de Telemetría en Vivo</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-black uppercase tracking-wider text-white">
            Simulador de Riesgo de Abandono
          </h2>
          <p className="mt-2 text-sm text-slate-300 font-sans leading-relaxed">
            Manipula los atributos de comportamiento de cualquier avatar. El modelo compilado en JavaScript puro
            evalúa el destino del jugador en tiempo real en tu navegador (&lt;1 ms).
          </p>
        </div>

        {/* Preset Archetypes */}
        <div className="mb-8">
          <div className="text-xs font-serif font-bold text-[#ffe27d]/80 uppercase tracking-widest mb-3 flex items-center justify-between">
            <span>Arquetipos de Jugador (Presets Rápidos):</span>
            <button
              onClick={handleReset}
              className="text-[#f8b700] hover:text-[#ffe27d] flex items-center gap-1 font-serif text-xs uppercase"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Restaurar
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PRESET_PROFILES.map((preset) => {
              const isSelected =
                features.max_level === preset.features.max_level &&
                features.recency_days === preset.features.recency_days;
              return (
                <button
                  key={preset.name}
                  onClick={() => handleApplyPreset(preset)}
                  className={`text-left p-4 rounded-xl border transition-all relative overflow-hidden ${
                    isSelected
                      ? 'bg-gradient-to-b from-[#2a1d0c] to-[#140e06] border-[#f8b700] shadow-[0_0_20px_rgba(248,183,0,0.25)]'
                      : 'bg-[#0a0e1c] border-[#3e2c14] hover:border-[#694e1d] hover:bg-[#111728]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-serif font-bold text-xs uppercase tracking-wider text-white">
                      {preset.name}
                    </span>
                    <span
                      className={`text-[9px] font-serif font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                        preset.badge.includes('Absoluta') || preset.badge.includes('Favorable')
                          ? 'bg-[#0b2416] text-emerald-400 border border-[#1b683d]'
                          : preset.badge.includes('Peligro')
                          ? 'bg-[#2b1f09] text-amber-400 border border-[#78551b]'
                          : 'bg-[#2b0e0e] text-red-400 border border-[#782323]'
                      }`}
                    >
                      {preset.badge}
                    </span>
                  </div>
                  <p className="text-[11px] font-serif text-[#ffe27d]/70 mb-1">{preset.characterTitle}</p>
                  <p className="text-[11px] text-slate-400 font-sans line-clamp-2 leading-relaxed">
                    {preset.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2 Columns: Controls & Result Oracle */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Altar (7 cols) */}
          <div className="lg:col-span-7 wow-card p-6 sm:p-7 rounded-xl space-y-6">
            <h3 className="font-serif font-bold text-base text-white uppercase tracking-wider flex items-center justify-between pb-3 border-b border-[#3e2c14]">
              <span className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-[#f8b700]" />
                Atributos de Telemetría del Avatar
              </span>
              <span className="text-xs text-[#ffe27d]/60 font-sans">7 métricas procesadas</span>
            </h3>

            {/* Variable 1: Recency */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-serif uppercase tracking-wider">
                <label className="text-slate-200 flex items-center gap-1.5 font-bold">
                  <Clock className="w-4 h-4 text-red-400" />
                  Días de Inactividad (Recency):
                </label>
                <span className="font-mono font-bold text-[#f8b700] bg-[#0c101d] px-2.5 py-0.5 rounded border border-[#3e2c14]">
                  {features.recency_days.toFixed(1)} días
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="120"
                step="0.5"
                value={features.recency_days}
                onChange={(e) => handleSliderChange('recency_days', parseFloat(e.target.value))}
                className="w-full accent-[#f8b700] bg-[#0c101d] h-2.5 rounded cursor-pointer border border-[#3e2c14]"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>0 d (Conectado hoy)</span>
                <span className="text-amber-500/70">30 d (Umbral de Abandono)</span>
                <span>120 d (Desconexión total)</span>
              </div>
            </div>

            {/* Variable 2: Total Sessions */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-serif uppercase tracking-wider">
                <label className="text-slate-200 flex items-center gap-1.5 font-bold">
                  <TrendingUp className="w-4 h-4 text-blue-400" />
                  Total de Sesiones en el Reino:
                </label>
                <span className="font-mono font-bold text-blue-400 bg-[#0c101d] px-2.5 py-0.5 rounded border border-[#3e2c14]">
                  {features.total_sessions} sesiones
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="400"
                step="1"
                value={features.total_sessions}
                onChange={(e) => handleSliderChange('total_sessions', parseInt(e.target.value, 10))}
                className="w-full accent-blue-500 bg-[#0c101d] h-2.5 rounded cursor-pointer border border-[#3e2c14]"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>1 sesión</span>
                <span>150</span>
                <span>400+ sesiones</span>
              </div>
            </div>

            {/* Variable 3: Days Active Span */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-serif uppercase tracking-wider">
                <label className="text-slate-200 flex items-center gap-1.5 font-bold">
                  <Clock className="w-4 h-4 text-purple-400" />
                  Amplitud de Vida del Avatar (Span de Días):
                </label>
                <span className="font-mono font-bold text-purple-400 bg-[#0c101d] px-2.5 py-0.5 rounded border border-[#3e2c14]">
                  {features.days_active_span.toFixed(0)} días
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="330"
                step="1"
                value={features.days_active_span}
                onChange={(e) => handleSliderChange('days_active_span', parseFloat(e.target.value))}
                className="w-full accent-purple-500 bg-[#0c101d] h-2.5 rounded cursor-pointer border border-[#3e2c14]"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>0 d (Día único)</span>
                <span>165 d</span>
                <span>330 d (Todo el año)</span>
              </div>
            </div>

            {/* Variable 4: Max Level */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-serif uppercase tracking-wider">
                <label className="text-slate-200 flex items-center gap-1.5 font-bold">
                  <Award className="w-4 h-4 text-[#f8b700]" />
                  Nivel Máximo Alcanzado (1 a 80):
                </label>
                <span className="font-mono font-bold text-[#ffe27d] bg-[#0c101d] px-2.5 py-0.5 rounded border border-[#3e2c14]">
                  Nivel {features.max_level} / 80
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="80"
                step="1"
                value={features.max_level}
                onChange={(e) => handleSliderChange('max_level', parseInt(e.target.value, 10))}
                className="w-full accent-[#f8b700] bg-[#0c101d] h-2.5 rounded cursor-pointer border border-[#3e2c14]"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>Lvl 1 (Novato)</span>
                <span>Lvl 60 (Clásico)</span>
                <span>Lvl 70 (TBC)</span>
                <span className="text-[#f8b700] font-bold">Lvl 80 (Lich King)</span>
              </div>
            </div>

            {/* 2-Column Row for Avg Session & Level Velocity */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-1">
              {/* Avg Session Minutes */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-serif uppercase tracking-wider">
                  <label className="text-slate-200 font-bold">Duración Sesión:</label>
                  <span className="font-mono font-bold text-slate-300 bg-[#0c101d] px-2 py-0.5 rounded border border-[#3e2c14]">
                    {features.avg_session_minutes.toFixed(0)} min
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="180"
                  step="5"
                  value={features.avg_session_minutes}
                  onChange={(e) => handleSliderChange('avg_session_minutes', parseFloat(e.target.value))}
                  className="w-full accent-slate-400 bg-[#0c101d] h-2 rounded cursor-pointer"
                />
              </div>

              {/* Level Velocity */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-serif uppercase tracking-wider">
                  <label className="text-slate-200 font-bold">Velocidad Leveo:</label>
                  <span className="font-mono font-bold text-slate-300 bg-[#0c101d] px-2 py-0.5 rounded border border-[#3e2c14]">
                    {features.level_velocity.toFixed(2)} nvl/h
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1.5"
                  step="0.02"
                  value={features.level_velocity}
                  onChange={(e) => handleSliderChange('level_velocity', parseFloat(e.target.value))}
                  className="w-full accent-slate-400 bg-[#0c101d] h-2 rounded cursor-pointer"
                />
              </div>
            </div>

            {/* Variable 7: Has Guild Toggle */}
            <div className="pt-3 border-t border-[#3e2c14] flex items-center justify-between">
              <div>
                <label className="font-serif font-bold text-xs uppercase tracking-wider text-white flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-[#f8b700]" />
                  Afiliación a Hermandad (Gremio):
                </label>
                <p className="text-[11px] text-slate-400 font-sans mt-0.5">
                  Factor social decisivo (+4.5x retención en avatares con gremio).
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleSliderChange('has_guild', features.has_guild === 1 ? 0 : 1)}
                className={`px-4 py-2 rounded text-xs font-serif font-bold uppercase tracking-wider transition-all border ${
                  features.has_guild === 1
                    ? 'wow-button-gold text-[#ffe27d] border-[#f8b700]'
                    : 'bg-[#080b15] border-[#3e2c14] text-slate-400 hover:text-white'
                }`}
              >
                {features.has_guild === 1 ? '🛡️ En Hermandad' : '☠️ Sin Hermandad'}
              </button>
            </div>
          </div>

          {/* Results Oracle Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* The Oracle Eye Tablet */}
            <div className="wow-card p-6 sm:p-7 rounded-xl relative overflow-hidden border-2 border-[#8a6229]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-serif font-bold uppercase tracking-widest text-[#ffe27d] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#f8b700]" />
                  Veredicto del Oráculo
                </span>
                <span className="text-[10px] font-mono font-bold text-emerald-400 bg-[#0b2416] px-2.5 py-0.5 rounded border border-[#1b683d]">
                  &lt; 1 ms • Client-Side
                </span>
              </div>

              {/* Big Score Percentage Display */}
              <div className="text-center my-6">
                <div
                  className="text-6xl sm:text-7xl font-serif font-black tracking-tight"
                  style={{ color: prediction.riskColor }}
                >
                  {churnPct}%
                </div>
                <div className="mt-2 text-xs font-serif font-bold uppercase tracking-widest text-slate-300 flex items-center justify-center gap-2">
                  <span>Riesgo de Deserción:</span>
                  <span
                    className="px-3 py-1 rounded text-xs font-serif font-black tracking-wider uppercase text-white shadow"
                    style={{ backgroundColor: prediction.riskColor }}
                  >
                    {prediction.riskLevel}
                  </span>
                </div>
              </div>

              {/* Dual Visual Bar */}
              <div className="space-y-1.5 my-5">
                <div className="flex justify-between text-xs font-serif uppercase tracking-wider">
                  <span className="text-red-400 font-bold">Prob. Churn: {churnPct}%</span>
                  <span className="text-[#ffe27d] font-bold">Prob. Retención: {retainedPct}%</span>
                </div>
                <div className="w-full h-3.5 rounded bg-[#080b15] flex overflow-hidden p-0.5 border border-[#3e2c14]">
                  <div
                    className="h-full bg-gradient-to-r from-red-800 to-red-600 transition-all duration-300 rounded-l"
                    style={{ width: `${churnPct}%` }}
                  ></div>
                  <div
                    className="h-full bg-gradient-to-r from-[#b8860b] to-[#f8b700] transition-all duration-300 rounded-r"
                    style={{ width: `${retainedPct}%` }}
                  ></div>
                </div>
              </div>

              {/* Status explanation */}
              <div className="p-3.5 rounded bg-[#080b16] border border-[#3e2c14] text-xs text-slate-300 flex items-start gap-3">
                {prediction.riskLevel === 'Alto' ? (
                  <Skull className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                ) : prediction.riskLevel === 'Medio' ? (
                  <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                ) : (
                  <CheckCircle2 className="w-5 h-5 text-[#f8b700] shrink-0 mt-0.5" />
                )}
                <div>
                  <strong className="text-white block font-serif uppercase tracking-wider mb-0.5">
                    {prediction.riskLevel === 'Alto'
                      ? 'Deserción inminente en los próximos 30 días.'
                      : prediction.riskLevel === 'Medio'
                      ? 'Estado volátil: Requiere intervención de retención.'
                      : 'Héroe devoto: Alta probabilidad de continuidad.'}
                  </strong>
                  <span className="text-slate-400 text-[11px] font-sans">
                    Calculado por el ensemble de 50 árboles de decisión de XGBoost.
                  </span>
                </div>
              </div>
            </div>

            {/* Prescriptive Directives / Scrolls */}
            <div className="wow-card p-6 rounded-xl border border-[#694e1d]">
              <h4 className="font-serif font-bold text-xs uppercase tracking-widest text-[#ffe27d] mb-3.5 flex items-center gap-2">
                <span>📜</span>
                Edictos de Retención Recomendados
              </h4>
              <div className="space-y-3">
                {prediction.recommendations.map((rec, i) => (
                  <div
                    key={i}
                    className="text-xs text-slate-300 bg-[#080b16] p-3 rounded border border-[#2b1f09] flex items-start gap-2.5 font-sans leading-relaxed"
                  >
                    <span className="text-[#f8b700] font-serif font-bold shrink-0">#{i + 1}</span>
                    <span>{rec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
