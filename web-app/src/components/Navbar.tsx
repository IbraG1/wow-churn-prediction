import React from 'react';
import { Activity, Sparkles, Sliders, Cpu, ExternalLink } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

interface NavbarProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const navItems = [
    { id: 'kpis', label: 'Métricas del Reino', icon: Activity },
    { id: 'eda', label: 'Análisis de Población', icon: Sparkles },
    { id: 'simulator', label: 'Oráculo de Abandono', icon: Sliders },
    { id: 'technical', label: 'Grimorio Técnico', icon: Cpu },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#060812]/95 backdrop-blur-md border-b border-[#3b2d18] shadow-2xl transition-all">
      {/* Top golden filigree divider line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#f8b700] to-transparent opacity-90"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 py-2">
          {/* Logo & WoW Official Brand Asset */}
          <div
            className="flex items-center space-x-4 cursor-pointer group"
            onClick={() => onNavigate('hero')}
          >
            <div className="relative flex items-center justify-center">
              <img
                src={getAssetUrl('assets/Logo-wow-NA.avif')}
                alt="World of Warcraft"
                className="h-11 sm:h-12 w-auto object-contain filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)] group-hover:scale-105 transition-transform"
              />
            </div>

            <div className="border-l border-[#3b2d18] pl-3.5 hidden sm:block">
              <div className="flex items-center gap-2">
                <span className="font-serif font-black tracking-wider text-sm sm:text-base wow-gold-text uppercase">
                  Churn Analytics
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-serif font-bold uppercase tracking-wider bg-red-950/90 text-red-300 border border-red-700/60 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mr-1.5 animate-pulse"></span>
                  Horda 2008
                </span>
              </div>
              <p className="text-[10px] font-serif tracking-widest text-[#ffe27d]/60 uppercase">
                Predictive User Retention Engine • Serverless ML
              </p>
            </div>
          </div>

          {/* Navigation Links (Blizzard Style) */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`flex items-center space-x-2 px-3.5 py-2 rounded text-xs font-serif font-bold tracking-widest uppercase transition-all ${
                    isActive
                      ? 'bg-gradient-to-b from-[#2a1d0c] to-[#120d06] text-[#ffd100] border border-[#f8b700]/70 shadow-[0_0_15px_rgba(248,183,0,0.25)]'
                      : 'text-slate-300 hover:text-[#ffe27d] hover:bg-[#151c2f]/60'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#f8b700]' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Action Link */}
          <div className="flex items-center space-x-3">
            <a
              href="https://www.kaggle.com/code/servietsky/world-of-warcraft-data-analysis"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-serif font-bold uppercase tracking-wider px-3.5 py-2 rounded wow-button-gold text-[#ffe27d] border border-[#f8b700]/60 shadow-sm transition-all"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span className="hidden sm:inline">Kaggle WoWAH</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
