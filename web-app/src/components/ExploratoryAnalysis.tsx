import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell
} from 'recharts';
import { Shield, Flame, Clock3, Users2, Info, Crown, Skull } from 'lucide-react';
import { ChurnByGuild, LevelBracketItem, HoursPlayedDistribution } from '../types/metrics';

interface ExploratoryAnalysisProps {
  churnByGuild: ChurnByGuild;
  levelBrackets: LevelBracketItem[];
  hoursDistribution: HoursPlayedDistribution;
}

// Custom WoW Themed Tooltip
const WowCustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#0b0f1c] border-2 border-[#8a6229] p-3.5 rounded shadow-2xl text-xs backdrop-blur-md">
        <div className="flex items-center gap-1.5 border-b border-[#3e2c14] pb-1.5 mb-2">
          <span className="text-[#f8b700] text-sm">⚜️</span>
          <p className="font-serif font-bold text-[#ffe27d] uppercase tracking-wider">{label}</p>
        </div>
        {payload.map((entry: any, index: number) => (
          <div key={`item-${index}`} className="flex items-center justify-between gap-5 py-0.5 font-sans">
            <span className="flex items-center gap-2 text-slate-300">
              <span className="w-2.5 h-2.5 rounded-sm border border-black/40" style={{ backgroundColor: entry.color }}></span>
              {entry.name}:
            </span>
            <span className="font-bold text-white font-mono">
              {typeof entry.value === 'number'
                ? entry.unit === '%'
                  ? `${entry.value.toFixed(1)}%`
                  : entry.value.toLocaleString()
                : entry.value}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export const ExploratoryAnalysis: React.FC<ExploratoryAnalysisProps> = ({
  churnByGuild,
  levelBrackets,
  hoursDistribution,
}) => {
  // Guild Data
  const guildChartData = [
    {
      name: 'En Hermandad',
      churnRate: churnByGuild.with_guild.churn_rate * 100,
      retentionRate: churnByGuild.with_guild.retention_rate * 100,
      total: churnByGuild.with_guild.total_players,
      churned: churnByGuild.with_guild.churned_players,
      retained: churnByGuild.with_guild.retained_players,
    },
    {
      name: 'Sin Hermandad',
      churnRate: churnByGuild.without_guild.churn_rate * 100,
      retentionRate: churnByGuild.without_guild.retention_rate * 100,
      total: churnByGuild.without_guild.total_players,
      churned: churnByGuild.without_guild.churned_players,
      retained: churnByGuild.without_guild.retained_players,
    },
  ];

  // Level Data
  const levelChartData = levelBrackets.map((b) => ({
    name: `Lvl ${b.bracket}`,
    bracket: b.bracket,
    churnRate: b.churn_rate * 100,
    retentionRate: (1 - b.churn_rate) * 100,
    total: b.total_players,
    churned: b.churned_players,
    retained: b.retained_players,
  }));

  // Hours Comparison Data
  const hoursChartData = [
    {
      metric: 'Horas Promedio',
      'Avatares Retenidos': hoursDistribution.retained.mean_hours,
      'Avatares en Churn': hoursDistribution.churned.mean_hours,
    },
    {
      metric: 'Mediana de Horas',
      'Avatares Retenidos': hoursDistribution.retained.median_hours,
      'Avatares en Churn': hoursDistribution.churned.median_hours,
    },
    {
      metric: 'Percentil 75 (P75)',
      'Avatares Retenidos': hoursDistribution.retained.p75_hours,
      'Avatares en Churn': hoursDistribution.churned.p75_hours,
    },
  ];

  return (
    <section id="eda" className="py-14 border-t border-[#3b2d18] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-serif font-bold text-[#f8b700] uppercase tracking-widest mb-2">
              <Users2 className="w-4 h-4" />
              <span>Códice Demográfico de los Reinos</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-black uppercase tracking-wider text-white">
              Análisis Exploratorio de Deserción
            </h2>
            <p className="mt-2 text-sm text-slate-300 font-sans max-w-2xl leading-relaxed">
              Descubriendo los catalizadores sociales y de progresión que definen la supervivencia
              o el abandono de los héroes en el mundo de Azeroth.
            </p>
          </div>
          <div className="text-xs font-serif tracking-wider uppercase text-[#ffe27d]/80 bg-[#0d1222] px-4 py-2.5 rounded border border-[#694e1d] flex items-center gap-2">
            <Info className="w-4 h-4 text-[#f8b700] shrink-0" />
            <span>Muestra congelada: 01 de Diciembre, 2008</span>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Card 1: Guild vs Non-Guild */}
          <div className="wow-card p-6 sm:p-7 rounded-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded bg-[#2b1f09] border border-[#78551b] flex items-center justify-center text-[#f8b700]">
                    <Shield className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif font-bold text-base sm:text-lg text-white uppercase tracking-wider">
                    El Poder de la Hermandad (Gremios)
                  </h3>
                </div>
                <span className="text-[10px] font-serif font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#0b2416] text-emerald-400 border border-[#1b683d]">
                  +4.5x Supervivencia
                </span>
              </div>
              <p className="text-xs text-slate-400 font-sans mb-6 leading-relaxed">
                Pertenecer a una hermandad reduce el abandono del 92.4% al 65.6%,
                multiplicando la tasa de retención activa del 7.6% al 34.4%.
              </p>

              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={guildChartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                    <XAxis dataKey="name" stroke="#9ca3af" tick={{ fill: '#d1d5db', fontSize: 12, fontFamily: 'Cinzel' }} />
                    <YAxis stroke="#9ca3af" tick={{ fill: '#9ca3af', fontSize: 12 }} unit="%" domain={[0, 100]} />
                    <Tooltip content={<WowCustomTooltip />} />
                    <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px', fontFamily: 'Cinzel' }} />
                    <Bar dataKey="churnRate" name="Tasa de Abandono (%)" fill="#991b1b" radius={[4, 4, 0, 0]} unit="%" />
                    <Bar dataKey="retentionRate" name="Tasa de Retención (%)" fill="#f8b700" radius={[4, 4, 0, 0]} unit="%" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-[#3e2c14] grid grid-cols-2 gap-4 text-xs">
              <div className="bg-[#080b15] p-3 rounded border border-[#2b1f09]">
                <span className="text-[#ffe27d] font-serif uppercase tracking-wider text-[11px] block mb-1">
                  ⚔️ En Hermandad
                </span>
                <p className="text-white font-bold text-base">
                  {churnByGuild.with_guild.total_players.toLocaleString()}
                </p>
                <p className="text-emerald-400 text-[11px] font-sans">
                  Retención: {(churnByGuild.with_guild.retention_rate * 100).toFixed(1)}%
                </p>
              </div>
              <div className="bg-[#080b15] p-3 rounded border border-[#2b1f09]">
                <span className="text-red-400 font-serif uppercase tracking-wider text-[11px] block mb-1">
                  ☠️ Sin Hermandad
                </span>
                <p className="text-white font-bold text-base">
                  {churnByGuild.without_guild.total_players.toLocaleString()}
                </p>
                <p className="text-red-400 text-[11px] font-sans">
                  Abandono: {(churnByGuild.without_guild.churn_rate * 100).toFixed(1)}%
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Churn by Level Bracket */}
          <div className="wow-card p-6 sm:p-7 rounded-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded bg-[#2b0e0e] border border-[#782323] flex items-center justify-center text-red-400">
                    <Flame className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif font-bold text-base sm:text-lg text-white uppercase tracking-wider">
                    La Curva de Mortalidad por Nivel
                  </h3>
                </div>
                <span className="text-[10px] font-serif font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#172038] text-blue-400 border border-[#3b4c74]">
                  Valle de Leveo
                </span>
              </div>
              <p className="text-xs text-slate-400 font-sans mb-6 leading-relaxed">
                El 94.6% de los avatares en niveles 1–20 son abandonados. Al alcanzar el nivel 80 (endgame de Rasganorte),
                el abandono se desploma a un mínimo histórico del 2.5%.
              </p>

              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={levelChartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                    <XAxis dataKey="name" stroke="#9ca3af" tick={{ fill: '#d1d5db', fontSize: 11, fontFamily: 'Cinzel' }} />
                    <YAxis stroke="#9ca3af" tick={{ fill: '#9ca3af', fontSize: 12 }} unit="%" domain={[0, 100]} />
                    <Tooltip content={<WowCustomTooltip />} />
                    <Bar dataKey="churnRate" name="Tasa de Churn (%)" radius={[4, 4, 0, 0]} unit="%">
                      {levelChartData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={
                            entry.bracket === '71-80'
                              ? '#f8b700'
                              : entry.bracket === '61-70'
                              ? '#3b82f6'
                              : entry.bracket === '41-60'
                              ? '#d97706'
                              : '#991b1b'
                          }
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-[#3e2c14] flex flex-wrap items-center justify-between text-xs font-serif tracking-wider uppercase text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-sm bg-red-700"></span> 1–20: 94.6% Churn (Tier Inicial)
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-sm bg-[#f8b700]"></span> 71–80: 2.5% Churn (Lich King Raid)
              </span>
            </div>
          </div>
        </div>

        {/* Card 3: Hours Comparison */}
        <div className="wow-card p-6 sm:p-7 rounded-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded bg-[#172038] border border-[#3b4c74] flex items-center justify-center text-blue-400">
                <Clock3 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-base sm:text-lg text-white uppercase tracking-wider">
                  Inversión Temporal de Vida (Horas en Azeroth)
                </h3>
                <p className="text-xs text-slate-400 font-sans">
                  Los avatares fidelizados acumulan 8.5 veces más horas de juego que aquellos que abandonan.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-xs font-serif uppercase tracking-wider">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-[#f8b700]"></span>
                <span className="text-[#ffe27d]">Retenidos (Media: 182.1h)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-red-700"></span>
                <span className="text-red-300">Desertores (Media: 21.4h)</span>
              </div>
            </div>
          </div>

          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={hoursChartData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="metric" stroke="#9ca3af" tick={{ fill: '#d1d5db', fontSize: 12, fontFamily: 'Cinzel' }} />
                <YAxis stroke="#9ca3af" tick={{ fill: '#9ca3af', fontSize: 12 }} unit=" h" />
                <Tooltip content={<WowCustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px', fontFamily: 'Cinzel' }} />
                <Bar dataKey="Avatares Retenidos" fill="#f8b700" radius={[4, 4, 0, 0]} unit=" h" />
                <Bar dataKey="Avatares en Churn" fill="#991b1b" radius={[4, 4, 0, 0]} unit=" h" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};
