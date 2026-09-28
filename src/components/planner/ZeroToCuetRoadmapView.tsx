import React from 'react';
import { Milestone, CheckCircle2, Circle, ArrowRight, ShieldCheck } from 'lucide-react';
import { useUserProgress } from '../../context/UserProgressContext';

export const ZeroToCuetRoadmapView: React.FC<{ setCurrentTab: (tab: string) => void }> = ({ setCurrentTab }) => {
  const { activeLevel, setActiveLevel } = useUserProgress();

  const levels = [
    {
      level: 0,
      title: "LEVEL 0: Understand the CUET Architecture",
      desc: "Understand the hybrid examination model, Section IA/IB Languages, Section II Domains, and Section III General Test. Grasp the critical distinction between CUET exam score and university-specific admissions.",
      actionTab: "home",
      actionText: "Read Exam Overview"
    },
    {
      level: 1,
      title: "LEVEL 1: Choose Target Programme & Degree",
      desc: "Explore degrees (BA Economics, B.Com Hons, B.Sc, BMS, BCA, LLB, MCA) across participating Central, State, and Deemed universities.",
      actionTab: "courses",
      actionText: "Open Course Explorer"
    },
    {
      level: 2,
      title: "LEVEL 2: Identify Required CUET Subject Combinations",
      desc: "Run the Subject Selection Wizard to ensure your Class 12 passed subjects precisely align with university rules (e.g. University of Delhi Class 12 matching rule).",
      actionTab: "subject-wizard",
      actionText: "Launch Subject Wizard"
    },
    {
      level: 3,
      title: "LEVEL 3: Build Subject Foundation with NCERT",
      desc: "Deeply study Class 12 NCERT line-by-line for your domain subjects. Build core conceptual clarity across definitions, diagrams, and summary tables.",
      actionTab: "syllabus",
      actionText: "Inspect NCERT Chapters"
    },
    {
      level: 4,
      title: "LEVEL 4: Complete the Official Syllabus Topics",
      desc: "Go through every NTA listed topic, subtopic, and formula sheet. Ensure zero blind spots in your domain and language preparation.",
      actionTab: "syllabus",
      actionText: "Check Syllabus Progress"
    },
    {
      level: 5,
      title: "LEVEL 5: Adaptive Question Practice",
      desc: "Practice topic tests and chapter quizzes with 10, 25, 50, and 100 questions. Diagnose your accuracy and speed under test conditions.",
      actionTab: "practice",
      actionText: "Start Practice Session"
    },
    {
      level: 6,
      title: "LEVEL 6: Master Previous Year Questions (PYQs)",
      desc: "Solve verified official 2022, 2023, 2024, and 2025 shift questions. Study the empirical frequency distribution of recurring exam concepts.",
      actionTab: "pyq-master",
      actionText: "Solve Verified PYQs"
    },
    {
      level: 7,
      title: "LEVEL 7: Sectional Tests & Time Management",
      desc: "Time yourself strictly under the 45-minute (standard domain) and 60-minute (Maths/Accounts/Physics/GAT) constraints.",
      actionTab: "practice",
      actionText: "Practice Timed Sets"
    },
    {
      level: 8,
      title: "LEVEL 8: Take Full-Length Realistic Mocks",
      desc: "Simulate real NTA testing with live timer, question palette, negative marking (+5 / -1), and instant automated error logging.",
      actionTab: "mock-tests",
      actionText: "Take Full Mock Test"
    },
    {
      level: 9,
      title: "LEVEL 9: Intensive Revision & Error Notebook",
      desc: "Revise flashcards, formula cheat sheets, and resolve all logged mistakes in your Error Notebook to avoid repeated marks deduction.",
      actionTab: "error-notebook",
      actionText: "Open Error Notebook"
    },
    {
      level: 10,
      title: "LEVEL 10: University Admission & Counselling Portals",
      desc: "Register on university-specific portals (DU CSAS, BHU CAP, JNU e-counselling) once scorecards are released. Lock preferences and track seat allocations!",
      actionTab: "admissions-tracker",
      actionText: "Track University Admissions"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 space-y-6">
      <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-2">
          <Milestone className="w-3.5 h-3.5" />
          <span>Complete Step-by-Step Pathway</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          Zero-to-CUET Master Roadmap
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
          A structured 11-stage preparation and university admission journey from initial exam comprehension to final seat allocation.
        </p>
      </div>

      <div className="space-y-4">
        {levels.map((item) => {
          const isDone = item.level < activeLevel;
          const isCurrent = item.level === activeLevel;

          return (
            <div
              key={item.level}
              className={`p-5 rounded-2xl border transition-all space-y-3 ${
                isCurrent
                  ? 'bg-blue-50/60 dark:bg-blue-950/30 border-blue-500 shadow-md ring-2 ring-blue-500/20'
                  : isDone
                  ? 'bg-white dark:bg-slate-900 border-emerald-300 dark:border-emerald-800/80 opacity-90'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 opacity-60'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <button
                    onClick={() => setActiveLevel(item.level + (isDone ? 0 : 1))}
                    className="mt-0.5"
                  >
                    {isDone ? (
                      <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                    ) : isCurrent ? (
                      <div className="w-6 h-6 rounded-full border-2 border-blue-600 flex items-center justify-center text-blue-600 font-bold text-xs">
                        ●
                      </div>
                    ) : (
                      <Circle className="w-6 h-6 text-slate-300 dark:text-slate-600" />
                    )}
                  </button>

                  <div>
                    <h3 className={`font-bold text-sm sm:text-base ${
                      isCurrent ? 'text-blue-900 dark:text-blue-200' : 'text-slate-900 dark:text-white'
                    }`}>
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed max-w-2xl">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setCurrentTab(item.actionTab)}
                  className={`flex-shrink-0 px-3 py-1.5 rounded-xl text-xs font-bold transition-colors flex items-center gap-1 ${
                    isCurrent
                      ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600'
                  }`}
                >
                  <span>{item.actionText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
