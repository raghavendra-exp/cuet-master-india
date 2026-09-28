import React from 'react';
import {
  GraduationCap,
  Sparkles,
  Building2,
  FileCheck2,
  HelpCircle,
  Clock,
  BookOpen,
  Compass,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  BarChart3,
  Layers,
  Award
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { ExamType } from '../../types';

interface HomeHubProps {
  setCurrentTab: (tab: string) => void;
  setActiveExam: (exam: ExamType | 'Both') => void;
}

export const HomeHub: React.FC<HomeHubProps> = ({ setCurrentTab, setActiveExam }) => {
  const { t } = useLanguage();

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 space-y-10">
      {/* Hero Showcase */}
      <div className="text-center space-y-4 py-6 sm:py-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-bold tracking-wide">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span>India's Most Comprehensive CUET Ecosystem</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight max-w-4xl mx-auto">
          CUET UNIVERSITY MASTER <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">INDIA</span>
        </h1>

        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base font-medium max-w-3xl mx-auto leading-relaxed">
          {t('siteSubtitle')}
        </p>

        {/* Dual Primary Engine Cards (UG vs PG) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto pt-4 text-left">
          {/* CUET-UG Card */}
          <div
            onClick={() => {
              setActiveExam('CUET-UG');
              setCurrentTab('ug-dashboard');
            }}
            className="p-6 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-xl shadow-blue-500/20 cursor-pointer hover:scale-[1.02] transition-all space-y-3 group"
          >
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                Undergraduate
              </span>
              <GraduationCap className="w-6 h-6 text-blue-200" />
            </div>
            <h2 className="text-2xl font-black tracking-tight">CUET-UG 2026/27</h2>
            <p className="text-xs text-blue-100 leading-relaxed">
              Section IA/IB Languages, 29 Domain Subjects, Section III General Test, Class 12 Subject Matching, DU CSAS & BHU CAP rules.
            </p>
            <div className="pt-2 text-xs font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              <span>Open CUET-UG Engine</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* CUET-PG Card */}
          <div
            onClick={() => {
              setActiveExam('CUET-PG');
              setCurrentTab('pg-dashboard');
            }}
            className="p-6 rounded-3xl bg-gradient-to-br from-purple-700 to-slate-900 text-white shadow-xl shadow-purple-500/20 cursor-pointer hover:scale-[1.02] transition-all space-y-3 group"
          >
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                Postgraduate
              </span>
              <GraduationCap className="w-6 h-6 text-purple-200" />
            </div>
            <h2 className="text-2xl font-black tracking-tight">CUET-PG 2026/27</h2>
            <p className="text-xs text-purple-100 leading-relaxed">
              Paper Codes (COQP11 LLB, COQP12 MBA, SCQP09 MCA, HUQP18 Pol Sci), 75-question domain tests, JNU, DU, BHU & Central Universities.
            </p>
            <div className="pt-2 text-xs font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              <span>Open CUET-PG Engine</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Critical Core Pipeline Flow (Prompt Requirement #1) */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
        <div className="text-center space-y-1">
          <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            End-to-End Seamless Pipeline
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
            The Complete CUET Ecosystem Pathway
          </h2>
          <p className="text-xs text-slate-500 max-w-2xl mx-auto">
            From initial exam comprehension through domain mastery and final university seat allocation.
          </p>
        </div>

        {/* Responsive Pipeline Steps */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 text-center text-xs">
          {[
            { step: "1. Exam Info", tab: "ug-dashboard", icon: BookOpen },
            { step: "2. Subject Wizard", tab: "subject-wizard", icon: Sparkles },
            { step: "3. Syllabus", tab: "syllabus", icon: Layers },
            { step: "4. PYQs", tab: "pyq-master", icon: BarChart3 },
            { step: "5. Practice", tab: "practice", icon: HelpCircle },
            { step: "6. Mock Tests", tab: "mock-tests", icon: Clock },
            { step: "7. Eligibility", tab: "eligibility-checker", icon: FileCheck2 },
            { step: "8. Counselling", tab: "admissions-tracker", icon: Building2 }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                onClick={() => setCurrentTab(item.tab)}
                className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 hover:border-blue-400 cursor-pointer transition-all space-y-1.5 group"
              >
                <div className="w-8 h-8 rounded-xl bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 mx-auto flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="font-bold text-slate-800 dark:text-slate-200 text-[11px] truncate">
                  {item.step}
                </div>
              </div>
            );
          })}
        </div>

        {/* Critical Distinction Notice (Requirement #1) */}
        <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-2xl border border-amber-300 dark:border-amber-800 text-xs text-amber-950 dark:text-amber-200 space-y-1">
          <div className="flex items-center gap-2 font-bold text-amber-900 dark:text-amber-300 text-xs">
            <ShieldCheck className="w-4 h-4 text-amber-600" />
            <span>CRITICAL ADMISSION RULE DISTINCTION:</span>
          </div>
          <p className="leading-relaxed text-[11px]">
            The <strong>CUET Examination</strong> administered by NTA yields a standardized scorecard. It does <strong>NOT</strong> guarantee admission to any college. Participating universities (e.g. DU, BHU, JNU, AUD) have their own independent admission and seat allocation portals (DU CSAS, BHU CAP) where you must separately register post-results!
          </p>
        </div>
      </div>

      {/* Quick Launchpad Grid */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
          Featured Interactive Modules
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div
            onClick={() => setCurrentTab('subject-wizard')}
            className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 shadow-sm cursor-pointer transition-all space-y-2 group"
          >
            <Sparkles className="w-6 h-6 text-indigo-600" />
            <h4 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-blue-600">
              Subject Selection Wizard
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Verify if your chosen CUET papers match your target university's strict Class 12 requirements.
            </p>
          </div>

          <div
            onClick={() => setCurrentTab('where-can-i-apply')}
            className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 shadow-sm cursor-pointer transition-all space-y-2 group"
          >
            <Compass className="w-6 h-6 text-blue-600" />
            <h4 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-blue-600">
              "Where Can I Apply?" Tool
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Enter your subjects and dream degrees to receive a customized list of eligible universities.
            </p>
          </div>

          <div
            onClick={() => setCurrentTab('mock-tests')}
            className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 shadow-sm cursor-pointer transition-all space-y-2 group"
          >
            <Clock className="w-6 h-6 text-emerald-600" />
            <h4 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-blue-600">
              NTA Realistic Mock Test Center
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Simulate actual exam shifts with timer, question palette, negative marking, and weak-area logging.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
