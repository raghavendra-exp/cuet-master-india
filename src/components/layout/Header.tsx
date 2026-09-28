import React from 'react';
import { Search, Globe, Sun, Moon, GraduationCap, Bookmark, AlertCircle, Compass } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useUserProgress } from '../../context/UserProgressContext';
import { ExamType } from '../../types';

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  activeExam: ExamType | 'Both';
  setActiveExam: (exam: ExamType | 'Both') => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  setCurrentTab,
  activeExam,
  setActiveExam,
  onOpenSearch
}) => {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme, targetList, bookmarks } = useUserProgress();

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors shadow-sm">
      {/* Top Banner: Official Source Alert & Distinction */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-sky-700 text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="bg-amber-400 text-slate-950 font-bold px-1.5 py-0.5 rounded text-[10px] uppercase tracking-wide">
              Official-First Platform
            </span>
            <span className="hidden sm:inline font-medium">
              CUET Exam ≠ University Admission: Scores do not guarantee direct seat allocation. Universities conduct individual counselling (DU CSAS, BHU CAP, etc.).
            </span>
            <span className="sm:hidden font-medium">
              CUET Score ≠ Guaranteed Admission. Universities conduct separate CSAS/CAP counselling.
            </span>
          </div>
          <div className="flex items-center gap-3 text-[11px]">
            <a
              href="https://exams.nta.ac.in/CUET-UG/"
              target="_blank"
              rel="noreferrer"
              className="hover:underline flex items-center gap-1 opacity-90 hover:opacity-100"
            >
              NTA CUET-UG ↗
            </a>
            <span className="opacity-40">|</span>
            <a
              href="https://exams.nta.ac.in/CUET-PG/"
              target="_blank"
              rel="noreferrer"
              className="hover:underline flex items-center gap-1 opacity-90 hover:opacity-100"
            >
              NTA CUET-PG ↗
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between gap-3">
        {/* Brand / Logo */}
        <div 
          onClick={() => setCurrentTab('home')}
          className="flex items-center gap-2.5 cursor-pointer select-none group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white">
                CUET MASTER <span className="text-blue-600 dark:text-blue-400">INDIA</span>
              </span>
              <span className="text-[10px] font-semibold bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 px-2 py-0.5 rounded-full">
                2026/27
              </span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 hidden md:block truncate max-w-md">
              Complete Preparation, Syllabus, PYQs, Eligibility, Universities & Counselling
            </p>
          </div>
        </div>

        {/* Exam Toggle Filter (UG / PG / Both) */}
        <div className="hidden lg:flex items-center bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold">
          <button
            onClick={() => setActiveExam('Both')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeExam === 'Both'
                ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            All Exams
          </button>
          <button
            onClick={() => {
              setActiveExam('CUET-UG');
              if (currentTab === 'pg-dashboard') setCurrentTab('ug-dashboard');
            }}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeExam === 'CUET-UG'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            CUET-UG
          </button>
          <button
            onClick={() => {
              setActiveExam('CUET-PG');
              if (currentTab === 'ug-dashboard') setCurrentTab('pg-dashboard');
            }}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeExam === 'CUET-PG'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            CUET-PG
          </button>
        </div>

        {/* Global Search Bar (Trigger) */}
        <button
          onClick={onOpenSearch}
          className="flex-1 max-w-xs hidden sm:flex items-center justify-between px-3 py-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200/70 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl transition-all"
        >
          <span className="flex items-center gap-2">
            <Search className="w-4 h-4 text-slate-400" />
            <span className="truncate">{t('searchPlaceholder')}</span>
          </span>
          <kbd className="hidden md:inline-block bg-white dark:bg-slate-700 px-1.5 py-0.5 rounded border border-slate-300 dark:border-slate-600 text-[10px] font-mono text-slate-500">
            Ctrl+K
          </kbd>
        </button>

        {/* Right Action Icons: Language, Theme, Target List, Search (Mobile) */}
        <div className="flex items-center gap-2">
          {/* Mobile search icon */}
          <button
            onClick={onOpenSearch}
            className="sm:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
            title="Search"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Bilingual Language Switcher */}
          <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-0.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-semibold">
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 rounded transition-colors ${
                language === 'en'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('hi')}
              className={`px-2 py-1 rounded transition-colors ${
                language === 'hi'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              हिन्दी
            </button>
          </div>

          {/* Target List Quick Button */}
          <button
            onClick={() => setCurrentTab('target-universities')}
            className={`p-2 rounded-lg relative text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ${
              currentTab === 'target-universities' ? 'bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400' : ''
            }`}
            title="My Target Universities"
          >
            <Compass className="w-5 h-5" />
            {targetList.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {targetList.length}
              </span>
            )}
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </header>
  );
};
