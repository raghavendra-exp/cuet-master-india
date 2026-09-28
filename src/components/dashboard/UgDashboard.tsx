import React from 'react';
import {
  Sparkles,
  BookOpen,
  Building2,
  Layers,
  FileCheck2,
  HelpCircle,
  Clock,
  BarChart3,
  Library,
  Calendar,
  BellRing,
  Award,
  Milestone,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const UgDashboard: React.FC<{ setCurrentTab: (tab: string) => void }> = ({ setCurrentTab }) => {
  const { t } = useLanguage();

  const cards = [
    { id: "notifications", title: "Latest Notification", desc: "NTA public notice, application guidelines, information bulletin.", icon: BellRing, badge: "NTA" },
    { id: "important-dates", title: "Application & Deadlines", desc: "Form filling, fee payment, correction window schedules.", icon: Calendar, badge: "2026" },
    { id: "important-dates", title: "Exam Dates & Shifts", desc: "Pen-Paper & CBT test schedule across 300+ Indian cities.", icon: Clock },
    { id: "subject-wizard", title: "Subject Selection Wizard", desc: "Find valid subject combinations matching Class 12 subjects.", icon: Sparkles, highlight: true },
    { id: "syllabus", title: "Official Syllabus & NCERT", desc: "Topic-wise syllabus, Class 12 chapter mapping, formulas.", icon: BookOpen },
    { id: "universities", title: "Participating Universities", desc: "Central, State, Deemed & Private institutions profile.", icon: Building2 },
    { id: "courses", title: "Degree & Course Explorer", desc: "BA, B.Sc, B.Com, BBA, BMS, BCA, BA LLB programmes.", icon: Layers },
    { id: "eligibility-checker", title: "University Eligibility", desc: "Check minimum marks, language rules, and domain criteria.", icon: FileCheck2 },
    { id: "books", title: "Recommended Books Library", desc: "NCERT, Arihant, Oswaal, Educart evaluated guides.", icon: Library },
    { id: "pyq-master", title: "Verified PYQs & Trends", desc: "Solved 2022-2024 shift papers with historical analytics.", icon: BarChart3 },
    { id: "practice", title: "Adaptive Practice Sets", desc: "10, 25, 50, 100 questions practice with instant feedback.", icon: HelpCircle },
    { id: "mock-tests", title: "Realistic Mock Tests", desc: "Timed simulation with NTA question palette and -1 marking.", icon: Clock, highlight: true },
    { id: "admissions-tracker", title: "University Admissions", desc: "Post-result CSAS / CAP counselling registration portal tracker.", icon: Building2 },
    { id: "where-can-i-apply", title: "Where Can I Apply?", desc: "Discover eligible programmes based on your chosen subjects.", icon: Sparkles },
    { id: "current-affairs", title: "Current Affairs & GK", desc: "Curated digest for Section III General Aptitude Test.", icon: Award },
    { id: "zero-to-cuet", title: "Zero-to-CUET Roadmap", desc: "10-stage systematic milestone planner to crack admissions.", icon: Milestone }
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 space-y-6">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-sky-700 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-2xl space-y-3">
          <span className="px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
            Undergraduate Engine
          </span>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
            CUET-UG 2026/27 Master Dashboard
          </h1>
          <p className="text-blue-100 text-xs sm:text-sm leading-relaxed">
            Complete ecosystem for Common University Entrance Test (Undergraduate): Syllabus, Subject Selection, Class 12 Matching, Mock Tests, and University Admissions.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={() => setCurrentTab('subject-wizard')}
              className="px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs shadow-md transition-all flex items-center gap-1.5"
            >
              <Sparkles className="w-4 h-4" />
              Launch Subject Wizard
            </button>
            <button
              onClick={() => setCurrentTab('mock-tests')}
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs backdrop-blur-sm border border-white/20 transition-all flex items-center gap-1.5"
            >
              <Clock className="w-4 h-4" />
              Take NTA Mock Test
            </button>
          </div>
        </div>
      </div>

      {/* Cards Grid as defined in Requirement #5 */}
      <div>
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">
          CUET-UG Master Navigation Cards
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                onClick={() => setCurrentTab(card.id)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-3 hover:shadow-md group ${
                  card.highlight
                    ? 'bg-gradient-to-br from-indigo-50/70 to-blue-50/70 dark:from-indigo-950/40 dark:to-blue-950/40 border-indigo-300 dark:border-indigo-800'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-blue-400'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                      card.highlight
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 group-hover:bg-blue-600 group-hover:text-white transition-colors'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    {card.badge && (
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
                        {card.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="text-[11px] font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Explore</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
