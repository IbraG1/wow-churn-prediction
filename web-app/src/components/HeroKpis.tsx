import React from 'react';
import { Users, TrendingDown, Target, Award, Database, Clock, Sparkles, Shield, ChevronRight } from 'lucide-react';
import { KPIs } from '../types/metrics';
import { getAssetUrl } from '../utils/assets';

interface HeroKpisProps {
  kpis: KPIs;
  onExploreSimulator: () => void;
}

export const HeroKpis: React.FC<HeroKpisProps> = ({ kpis, onExploreSimulator }) => {
  return (
    <section id="kpis" className="wow-masthead pt-8 pb-16 relative overflow-hidden border-b border-[#3b2d18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Official Logo Banner */}
        <div className="flex flex-col items-center justify-center mb-6">
          <img
            src={getAssetUrl('assets/Logo-wow-NA.avif')}
            alt="World of Warcraft"
            className="h-24 sm:h-32 w-auto object-contain filter drop-shadow-[0_10px_30px_rgba(0,0,0,0.95)] mb-3"
          />
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0a0e1c]/90 border border-[#8a6229]/80 text-[#ffe27d] shadow-2xl text-xs font-serif uppercase tracking-widest backdrop-blur-md">
            <span className="text-[#f8b700]">⚜️</span>
            <span>Wrath of the Lich King Era (2008) • Telemetría Masiva de Servidores</span>
            <span className="text-[#f8b700]">⚜️</span>
          </div>
        </div>

        {/* Hero Title */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black uppercase tracking-wider text-white leading-tight filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
            Predicción de Abandono en{' '}
            <span className="wow-gold-text block sm:inline">
              Azeroth
            </span>
          </h1>

          {/* Ornate Divider Asset */}
          <div className="w-full flex items-center justify-center my-4 select-none pointer-events-none">
            <img
              src={getAssetUrl('assets/Border.webp_Homepage.png')}
              alt="divider"
              className="max-w-lg w-full h-auto object-contain opacity-85"
            />
          </div>

          <p className="text-base sm:text-lg text-slate-200 font-sans leading-relaxed max-w-3xl mx-auto drop-shadow-md">
            Análisis de retención y comportamiento sobre{' '}
            <span className="text-[#ffe27d] font-semibold">10,826,734 eventos de telemetría</span> del dataset oficial{' '}
            <span className="text-white font-medium">World of Warcraft Avatar History</span>. 
            El modelo XGBoost fue transpilado a JavaScript estático puro, permitiendo predecir la deserción de jugadores en tiempo real{' '}
            <span className="text-[#f8b700] font-medium">directamente en el navegador sin intermediación de servidores</span>.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs font-serif tracking-wider uppercase">
            <span className="flex items-center gap-2 bg-[#0c101d]/90 px-3.5 py-1.5 rounded border border-[#694e1d] text-slate-300 shadow">
              <Database className="w-3.5 h-3.5 text-[#f8b700]" />
              10.8M Registros Crudos
            </span>
            <span className="flex items-center gap-2 bg-[#0c101d]/90 px-3.5 py-1.5 rounded border border-[#694e1d] text-slate-300 shadow">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              Ventana Churn: 30 Días
            </span>
            <span className="flex items-center gap-2 bg-[#0c101d]/90 px-3.5 py-1.5 rounded border border-[#694e1d] text-slate-300 shadow">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              Inferencia 100% Client-Side
            </span>
          </div>
        </div>

        {/* 4 Executive KPI Tablets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Tablet 1: Total Avatars */}
          <div className="wow-card p-6 rounded-xl relative group hover:border-[#f8b700]/70 transition-all">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-serif font-bold uppercase tracking-widest text-[#ffe27d]/80">
                Población de Avatares
              </span>
              <div className="w-8 h-8 rounded bg-[#172038] border border-[#3b4c74] flex items-center justify-center text-blue-400 shadow-inner">
                <Users className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl sm:text-4xl font-serif font-black text-white tracking-tight">
              {kpis.total_players.toLocaleString()}
            </div>
            <div className="mt-2 text-xs text-slate-300 flex items-center justify-between font-sans">
              <span>Personajes únicos en muestra</span>
              <span className="text-blue-400 font-semibold">100% evaluados</span>
            </div>
            <div className="mt-3 w-full bg-[#080b14] rounded-full h-1.5 overflow-hidden border border-slate-800">
              <div className="bg-gradient-to-r from-blue-600 to-blue-400 h-full rounded-full w-full"></div>
            </div>
          </div>

          {/* Tablet 2: Churn Rate */}
          <div className="wow-card p-6 rounded-xl relative group hover:border-[#f8b700]/70 transition-all">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-serif font-bold uppercase tracking-widest text-red-300/80">
                Tasa de Churn Global
              </span>
              <div className="w-8 h-8 rounded bg-[#2b0e0e] border border-[#782323] flex items-center justify-center text-red-400 shadow-inner">
                <TrendingDown className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl sm:text-4xl font-serif font-black text-red-400 tracking-tight">
              {(kpis.churn_rate * 100).toFixed(1)}%
            </div>
            <div className="mt-2 text-xs text-slate-300 flex items-center justify-between font-sans">
              <span>Retención observada:</span>
              <span className="text-emerald-400 font-bold">{(kpis.retention_rate * 100).toFixed(1)}%</span>
            </div>
            <div className="mt-3 w-full bg-[#080b14] rounded-full h-1.5 overflow-hidden border border-slate-800">
              <div
                className="bg-gradient-to-r from-red-600 to-red-400 h-full rounded-full"
                style={{ width: `${kpis.churn_rate * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Tablet 3: ROC-AUC */}
          <div className="wow-card p-6 rounded-xl relative group hover:border-[#f8b700]/70 transition-all">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-serif font-bold uppercase tracking-widest text-amber-300/80">
                Poder Predictivo (ROC-AUC)
              </span>
              <div className="w-8 h-8 rounded bg-[#2b1f09] border border-[#78551b] flex items-center justify-center text-[#f8b700] shadow-inner">
                <Target className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl sm:text-4xl font-serif font-black wow-gold-text tracking-tight">
              {kpis.roc_auc.toFixed(4)}
            </div>
            <div className="mt-2 text-xs text-slate-300 flex items-center justify-between font-sans">
              <span>Capacidad discriminativa</span>
              <span className="text-[#ffe27d] font-bold">Sobresaliente</span>
            </div>
            <div className="mt-3 w-full bg-[#080b14] rounded-full h-1.5 overflow-hidden border border-slate-800">
              <div
                className="bg-gradient-to-r from-[#b8860b] to-[#f8b700] h-full rounded-full"
                style={{ width: `${kpis.roc_auc * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Tablet 4: F1 Score & Exactitud */}
          <div className="wow-card p-6 rounded-xl relative group hover:border-[#f8b700]/70 transition-all">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-serif font-bold uppercase tracking-widest text-emerald-300/80">
                F1-Score / Exactitud
              </span>
              <div className="w-8 h-8 rounded bg-[#0b2416] border border-[#1b683d] flex items-center justify-center text-emerald-400 shadow-inner">
                <Award className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl sm:text-4xl font-serif font-black text-emerald-400 tracking-tight">
              {kpis.f1_score.toFixed(4)}
            </div>
            <div className="mt-2 text-xs text-slate-300 flex items-center justify-between font-sans">
              <span>Exactitud global (Accuracy):</span>
              <span className="text-emerald-300 font-bold">{(kpis.accuracy * 100).toFixed(1)}%</span>
            </div>
            <div className="mt-3 w-full bg-[#080b14] rounded-full h-1.5 overflow-hidden border border-slate-800">
              <div
                className="bg-gradient-to-r from-emerald-600 to-emerald-400 h-full rounded-full"
                style={{ width: `${kpis.f1_score * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Call to Action Banner */}
        <div className="mt-8 wow-card rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 border border-[#694e1d]/70">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#f8b700] animate-ping"></div>
            <div>
              <p className="text-sm font-serif font-bold text-white uppercase tracking-wider">
                Oráculo de Retención en Tiempo Real
              </p>
              <p className="text-xs text-slate-300 font-sans">
                Prueba cualquier combinación de nivel, horas y gremio para evaluar el destino del avatar.
              </p>
            </div>
          </div>
          <button
            onClick={onExploreSimulator}
            className="w-full sm:w-auto px-6 py-2.5 rounded wow-button-gold text-xs font-serif font-black tracking-widest uppercase flex items-center justify-center gap-2 shadow-lg"
          >
            <span>Consultar Oráculo</span>
            <ChevronRight className="w-4 h-4 text-[#ffe27d]" />
          </button>
        </div>
      </div>
    </section>
  );
};
