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
  Code2
} from 'lucide-react';

export const PgDashboard: React.FC<{ setCurrentTab: (tab: string) => void }> = ({ setCurrentTab }) => {
  const cards = [
    { id: "notifications", title: "Latest Notification", desc: "NTA CUET (PG) public notices, city slip, admit card releases.", icon: BellRing, badge: "NTA" },
    { id: "important-dates", title: "Application Window", desc: "Online application submission, exam shifts, answer key challenges.", icon: Calendar },
    { id: "eligibility-checker", title: "Eligibility Rules", desc: "Bachelor's degree minimum marks and discipline prerequisites.", icon: FileCheck2 },
    { id: "syllabus", title: "Question Paper Codes", desc: "COQP (Common), SCQP (Science), HUQP (Humanities), LAQP (Languages).", icon: Code2, highlight: true },
    { id: "syllabus", title: "Domain Subjects & Syllabus", desc: "75-question domain syllabus for MCA, LLB, MBA, M.Sc, M.A.", icon: BookOpen },
    { id: "universities", title: "Participating Universities", desc: "JNU, DU, BHU, UoH, Central Universities, TISS Mumbai.", icon: Building2 },
    { id: "courses", title: "Postgraduate Programmes", desc: "MA, M.Sc, M.Com, MCA, MBA, LL.B, M.Ed, LL.M.", icon: Layers },
    { id: "books", title: "Recommended Books Library", desc: "Subject domain guides and question banks for CUET-PG papers.", icon: Library },
    { id: "pyq-master", title: "Verified PYQs & Paper Sets", desc: "Past year questions categorized by paper codes (COQP11, SCQP09).", icon: BarChart3 },
    { id: "practice", title: "Subject Practice Sets", desc: "Practice domain MCQs with instant solution explanations.", icon: HelpCircle },
    { id: "mock-tests", title: "CUET-PG Mock Tests", desc: "105-minute CBT simulation with 75 domain questions (+4 / -1).", icon: Clock, highlight: true },
    { id: "admissions-tracker", title: "University Admission & Counselling", desc: "Postgraduate CSAS-PG, JNU e-counselling, BHU CAP portals.", icon: Building2 }
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 space-y-6">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-indigo-800 via-purple-800 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-2xl space-y-3">
          <span className="px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
            Postgraduate Engine
          </span>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
            CUET-PG 2026/27 Master Dashboard
          </h1>
          <p className="text-indigo-100 text-xs sm:text-sm leading-relaxed">
            All-in-one platform for Master's admissions across India: Question Paper Codes (COQP, SCQP, HUQP, LAQP), 75-question domain tests, and premier research universities.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={() => setCurrentTab('syllabus')}
              className="px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs shadow-md transition-all flex items-center gap-1.5"
            >
              <Code2 className="w-4 h-4" />
              Explore Paper Codes (COQP, SCQP)
            </button>
            <button
              onClick={() => setCurrentTab('mock-tests')}
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs backdrop-blur-sm border border-white/20 transition-all flex items-center gap-1.5"
            >
              <Clock className="w-4 h-4" />
              Take CUET-PG Mock (75 Qs)
            </button>
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div>
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">
          CUET-PG Master Navigation Cards
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
                    ? 'bg-gradient-to-br from-purple-50/70 to-indigo-50/70 dark:from-purple-950/40 dark:to-indigo-950/40 border-purple-300 dark:border-purple-800'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-indigo-400'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                      card.highlight
                        ? 'bg-purple-600 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 group-hover:bg-indigo-600 group-hover:text-white transition-colors'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    {card.badge && (
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300">
                        {card.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
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
