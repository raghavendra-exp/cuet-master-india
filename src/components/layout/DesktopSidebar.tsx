import React from 'react';
import {
  LayoutDashboard,
  GraduationCap,
  BookOpen,
  FileCheck2,
  HelpCircle,
  Clock,
  Building2,
  Layers,
  Sparkles,
  Library,
  Newspaper,
  CalendarDays,
  BellRing,
  Award,
  Milestone,
  AlertTriangle,
  BarChart3,
  Scale,
  Compass,
  Briefcase
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface SidebarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
}

interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
  highlight?: boolean;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

export const DesktopSidebar: React.FC<SidebarProps> = ({ currentTab, setCurrentTab }) => {
  const { t } = useLanguage();

  const navSections: NavSection[] = [
    {
      title: "Exams & Dashboards",
      items: [
        { id: "home", label: t('navHome'), icon: LayoutDashboard },
        { id: "ug-dashboard", label: "CUET-UG 2026", icon: GraduationCap, badge: "UG" },
        { id: "pg-dashboard", label: "CUET-PG 2026", icon: GraduationCap, badge: "PG" },
        { id: "zero-to-cuet", label: t('navRoadmap'), icon: Milestone }
      ]
    },
    {
      title: "Subject & University Engines",
      items: [
        { id: "subject-wizard", label: t('navWizard'), icon: Sparkles, highlight: true },
        { id: "eligibility-checker", label: t('navEligibility'), icon: FileCheck2 },
        { id: "where-can-i-apply", label: t('navWhereApply'), icon: Compass },
        { id: "universities", label: t('navUniversities'), icon: Building2 },
        { id: "courses", label: t('navCourses'), icon: Layers },
        { id: "compare-universities", label: t('navCompare'), icon: Scale },
        { id: "career-discovery", label: t('navCareer'), icon: Briefcase }
      ]
    },
    {
      title: "Preparation & Testing",
      items: [
        { id: "syllabus", label: t('navSyllabus'), icon: BookOpen },
        { id: "practice", label: t('navPractice'), icon: HelpCircle },
        { id: "pyq-master", label: t('navPyq'), icon: BarChart3 },
        { id: "mock-tests", label: t('navMockTests'), icon: Clock },
        { id: "books", label: t('navBooks'), icon: Library },
        { id: "flashcards-notes", label: t('navFlashcards'), icon: BookOpen }
      ]
    },
    {
      title: "Admissions, Dates & Updates",
      items: [
        { id: "admissions-tracker", label: t('navAdmissions'), icon: Building2 },
        { id: "important-dates", label: "Important Dates", icon: CalendarDays },
        { id: "notifications", label: t('navNotifications'), icon: BellRing },
        { id: "current-affairs", label: t('navCurrentAffairs'), icon: Newspaper },
        { id: "scholarships", label: "Scholarships", icon: Award }
      ]
    },
    {
      title: "Personal Workspace",
      items: [
        { id: "target-universities", label: t('navTargetList'), icon: Compass },
        { id: "error-notebook", label: t('navErrorNotebook'), icon: AlertTriangle },
        { id: "score-tracker", label: t('navScoreTracker'), icon: BarChart3 }
      ]
    }
  ];

  return (
    <aside className="w-64 flex-shrink-0 hidden md:block bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 h-[calc(100vh-85px)] sticky top-[85px] overflow-y-auto px-3 py-4 scrollbar-thin">
      <div className="space-y-6">
        {navSections.map((section, sIdx) => (
          <div key={sIdx}>
            <div className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider px-3 mb-2">
              {section.title}
            </div>
            <div className="space-y-1">
              {section.items.map((item) => {
                const Icon = item.icon;
                const isActive = currentTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setCurrentTab(item.id)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                        : item.highlight
                        ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50/70 dark:bg-indigo-950/40 hover:bg-indigo-100/70'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      <Icon className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-white' : item.highlight ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-400'}`} />
                      <span className="truncate">{item.label}</span>
                    </div>
                    {item.badge && (
                      <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${
                        isActive ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};
