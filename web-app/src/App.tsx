import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroKpis } from './components/HeroKpis';
import { ExploratoryAnalysis } from './components/ExploratoryAnalysis';
import { RiskSimulator } from './components/RiskSimulator';
import { TechnicalTransparency } from './components/TechnicalTransparency';
import { Footer } from './components/Footer';
import { DashboardMetrics } from './types/metrics';
import { getAssetUrl } from './utils/assets';

// Fallback import so app works offline or with zero-config
import staticMetrics from './data/dashboard_metrics.json';

const SectionDivider: React.FC = () => (
  <div className="w-full flex items-center justify-center my-4 select-none pointer-events-none px-4">
    <img
      src={getAssetUrl('assets/Border.webp_Homepage.png')}
      alt="divider"
      className="max-w-xl w-full h-auto object-contain opacity-75"
    />
  </div>
);

export function App() {
  const [metrics, setMetrics] = useState<DashboardMetrics>(staticMetrics as DashboardMetrics);
  const [activeSection, setActiveSection] = useState<string>('kpis');

  useEffect(() => {
    async function fetchMetrics() {
      try {
        const metricsUrl = getAssetUrl('data/dashboard_metrics.json');
        const response = await fetch(metricsUrl);
        if (response.ok) {
          const data = await response.json();
          setMetrics(data);
        }
      } catch (err) {
        console.warn('Using bundled static metrics data.');
      }
    }
    fetchMetrics();
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#05070d] text-slate-100 font-sans selection:bg-amber-600 selection:text-white">
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      <main className="flex-1">
        <HeroKpis
          kpis={metrics.kpis}
          onExploreSimulator={() => handleNavigate('simulator')}
        />

        <SectionDivider />

        <ExploratoryAnalysis
          churnByGuild={metrics.churn_by_guild}
          levelBrackets={metrics.churn_by_level_bracket}
          hoursDistribution={metrics.hours_played_distribution}
        />

        <SectionDivider />

        <RiskSimulator />

        <SectionDivider />

        <TechnicalTransparency
          featureImportance={metrics.feature_importance}
          confusionMatrix={metrics.confusion_matrix}
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;
