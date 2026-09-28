import React, { useState } from 'react';
import { Calendar, Clock, CheckCircle2, BookOpen, BarChart3, RotateCcw, Sparkles } from 'lucide-react';
import { universitiesData } from '../../data/universities';
import { programmesData } from '../../data/programmes';
import { ExamType } from '../../types';

export const StudyPlannerView: React.FC = () => {
  const [targetExam, setTargetExam] = useState<ExamType>('CUET-UG');
  const [dailyHours, setDailyHours] = useState<number>(5);
  const [daysUntilExam, setDaysUntilExam] = useState<number>(60);
  const [activePlanTab, setActivePlanTab] = useState<'daily' | 'weekly' | 'pyq' | 'mock'>('daily');

  // Dynamic daily hour allocation
  const domainHours = Math.round(dailyHours * 0.5 * 10) / 10;
  const languageHours = Math.round(dailyHours * 0.2 * 10) / 10;
  const gatHours = Math.round(dailyHours * 0.2 * 10) / 10;
  const revisionHours = Math.round(dailyHours * 0.1 * 10) / 10;

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 space-y-6">
      <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-2">
          <Calendar className="w-3.5 h-3.5" />
          <span>Personalized Study Architecture</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          CUET Daily & Weekly Study Planner
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
          Automated time allocation for domain mastery, language aptitude, general test, PYQ drills, and spaced revision.
        </p>
      </div>

      {/* Target Parameters Bar */}
      <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
            Target Exam
          </label>
          <select
            value={targetExam}
            onChange={(e) => setTargetExam(e.target.value as ExamType)}
            className="w-full text-xs p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold"
          >
            <option value="CUET-UG">CUET-UG 2026</option>
            <option value="CUET-PG">CUET-PG 2026</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
            Daily Study Capacity (Hours)
          </label>
          <input
            type="number"
            min="2"
            max="14"
            value={dailyHours}
            onChange={(e) => setDailyHours(Math.max(1, Number(e.target.value)))}
            className="w-full text-xs p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
            Days Remaining Until Exam
          </label>
          <input
            type="number"
            min="5"
            max="365"
            value={daysUntilExam}
            onChange={(e) => setDaysUntilExam(Number(e.target.value))}
            className="w-full text-xs p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-mono"
          />
        </div>
      </div>

      {/* Plan Navigation Tabs */}
      <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold">
        {[
          { id: 'daily', label: 'Daily Time Allocation' },
          { id: 'weekly', label: 'Weekly Milestone Plan' },
          { id: 'pyq', label: 'PYQ Drill Schedule' },
          { id: 'mock', label: 'Full Mock Test Schedule' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActivePlanTab(tab.id as any)}
            className={`flex-1 py-2 rounded-lg transition-all ${
              activePlanTab === tab.id
                ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Daily Allocation Plan */}
      {activePlanTab === 'daily' && (
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white">
            Recommended Daily Routine ({dailyHours} Hours Total)
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 space-y-1">
              <span className="font-bold text-blue-900 dark:text-blue-200 flex items-center justify-between">
                <span>Domain Subjects (NCERT Concepts)</span>
                <span>{domainHours} hrs</span>
              </span>
              <p className="text-slate-600 dark:text-slate-400">
                Focus on deep reading of Class 12 NCERT textbook lines, tables, examples, and solving end-of-chapter exemplar problems.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900 space-y-1">
              <span className="font-bold text-indigo-900 dark:text-indigo-200 flex items-center justify-between">
                <span>Language & Reading Comprehension</span>
                <span>{languageHours} hrs</span>
              </span>
              <p className="text-slate-600 dark:text-slate-400">
                2 reading comprehension passages daily, 15 vocabulary flashcards, and sentence rearrangement (para-jumbles) exercises.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 space-y-1">
              <span className="font-bold text-emerald-900 dark:text-emerald-200 flex items-center justify-between">
                <span>General Test / Quantitative & Reasoning</span>
                <span>{gatHours} hrs</span>
              </span>
              <p className="text-slate-600 dark:text-slate-400">
                20 speed-maths drills (percentages, ratios, time & work) + 15 logical reasoning puzzles + daily current affairs digest.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-amber-50/70 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900 space-y-1">
              <span className="font-bold text-amber-900 dark:text-amber-200 flex items-center justify-between">
                <span>Error Notebook & Active Revision</span>
                <span>{revisionHours} hrs</span>
              </span>
              <p className="text-slate-600 dark:text-slate-400">
                Review all wrong answers logged in your Error Notebook and flip 20 active recall flashcards before sleeping.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Weekly Milestone Plan */}
      {activePlanTab === 'weekly' && (
        <div className="space-y-3">
          {[
            { week: "Week 1 - 2", focus: "Foundation & Core Syllabus Mapping", target: "Complete 40% of Domain NCERT Class 12 chapters + Language grammar rules" },
            { week: "Week 3 - 4", focus: "Full Syllabus Coverage & Chapter Quizzes", target: "Reach 80% syllabus completion + 25-question topic tests daily" },
            { week: "Week 5 - 6", focus: "Intensive Official PYQ Solving", target: "Solve past 2022, 2023, 2024 shift papers under timed conditions" },
            { week: "Week 7 - 8", focus: "Full Length Mock Simulations & Error Elimination", target: "Take 2 full mocks every week + revise Error Notebook daily" }
          ].map((w, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 text-xs space-y-1">
              <div className="flex items-center justify-between font-bold text-slate-900 dark:text-white">
                <span className="text-blue-600">{w.week}: {w.focus}</span>
                <span className="text-slate-400 font-mono text-[10px]">Phase {idx + 1}</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400">{w.target}</p>
            </div>
          ))}
        </div>
      )}

      {/* PYQ Drill Schedule */}
      {activePlanTab === 'pyq' && (
        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 text-xs space-y-3">
          <h4 className="font-bold text-slate-900 dark:text-white">PYQ Mastery Milestones</h4>
          <p className="text-slate-600 dark:text-slate-400">
            Official papers from NTA CUET 2022, 2023, 2024 should be attempted shift-by-shift. Ensure that you record every incorrect question directly into the Error Notebook.
          </p>
          <div className="space-y-2 pt-1">
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-between">
              <span>NTA CUET 2024 Official Shift Papers</span>
              <span className="font-bold text-emerald-600">Available in PYQ Master</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-between">
              <span>NTA CUET 2023 Official Shift Papers</span>
              <span className="font-bold text-emerald-600">Available in PYQ Master</span>
            </div>
          </div>
        </div>
      )}

      {/* Mock Schedule */}
      {activePlanTab === 'mock' && (
        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 text-xs space-y-3">
          <h4 className="font-bold text-slate-900 dark:text-white">NTA Real-Time Mock Test Protocol</h4>
          <p className="text-slate-600 dark:text-slate-400">
            Take full-length timed mocks in the same time slots as the actual NTA shifts (Morning: 9:00 AM - 11:15 AM; Afternoon: 3:00 PM - 5:15 PM) to synchronize your cognitive alertness.
          </p>
        </div>
      )}
    </div>
  );
};
