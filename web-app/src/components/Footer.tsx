import React from 'react';
import { ExternalLink } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

export const Footer: React.FC = () => {
  const footerBg = getAssetUrl('assets/Footer_BG_2600.webp');

  return (
    <footer
      className="relative text-xs text-slate-400 font-sans pt-12 pb-14 border-t border-[#3b2d18]"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(5, 7, 13, 0.75) 0%, rgba(3, 4, 8, 0.95) 100%), url('${footerBg}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top'
      }}
    >
      {/* Official Footer Ornate Border Top Asset */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none">
        <img
          src={getAssetUrl('assets/Footer_Border.webp')}
          alt="footer border"
          className="w-full h-4 sm:h-5 object-cover opacity-90"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <img
            src={getAssetUrl('assets/Logo-wow-NA.avif')}
            alt="World of Warcraft"
            className="h-10 w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
          />
          <div>
            <p className="font-serif font-bold text-slate-200 uppercase tracking-widest text-xs">
              World of Warcraft • Churn Prediction & Retention Engine
            </p>
            <p className="text-[11px] text-slate-400 font-sans mt-0.5">
              Portafolio de Data Science & Machine Learning con arte oficial de Blizzard Entertainment.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-5 text-xs font-serif uppercase tracking-wider">
          <a
            href="https://worldofwarcraft.blizzard.com/es-es/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-slate-300 hover:text-[#ffe27d] transition-colors"
          >
            <span>Sitio Oficial WoW</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <span className="text-slate-600">|</span>
          <a
            href="https://www.kaggle.com/code/servietsky/world-of-warcraft-data-analysis"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-slate-300 hover:text-[#ffe27d] transition-colors"
          >
            <span>Kaggle WoWAH</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <span className="text-slate-600">|</span>
          <span className="text-[#ffe27d]/70 font-mono text-[11px]">
            React 18 + Vite + Tailwind + Recharts + XGBoost + m2cgen
          </span>
        </div>
      </div>
    </footer>
  );
};
