import React from 'react';
import { Home, GraduationCap, HelpCircle, Building2, UserCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface MobileBottomNavProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ currentTab, setCurrentTab }) => {
  const { t } = useLanguage();

  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'ug-dashboard', label: 'Exams', icon: GraduationCap },
    { id: 'practice', label: 'Practice', icon: HelpCircle },
    { id: 'universities', label: 'Universities', icon: Building2 },
    { id: 'target-universities', label: 'Progress', icon: UserCheck }
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 px-2 py-1 shadow-lg">
      <div className="flex items-center justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = currentTab === tab.id || 
            (tab.id === 'ug-dashboard' && (currentTab === 'pg-dashboard' || currentTab === 'zero-to-cuet')) ||
            (tab.id === 'practice' && (currentTab === 'mock-tests' || currentTab === 'pyq-master')) ||
            (tab.id === 'universities' && (currentTab === 'courses' || currentTab === 'eligibility-checker')) ||
            (tab.id === 'target-universities' && (currentTab === 'error-notebook' || currentTab === 'score-tracker'));

          return (
            <button
              key={tab.id}
              onClick={() => setCurrentTab(tab.id)}
              className={`flex flex-col items-center py-1 px-3 rounded-lg text-[10px] font-medium transition-colors ${
                isActive
                  ? 'text-blue-600 dark:text-blue-400 font-bold'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              <Icon className={`w-5 h-5 mb-0.5 ${isActive ? 'stroke-[2.5px]' : 'stroke-[1.75px]'}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
