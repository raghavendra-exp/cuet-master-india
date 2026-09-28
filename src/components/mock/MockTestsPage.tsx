import React, { useState } from 'react';
import { Clock, CheckCircle2, Play, Award, RotateCcw, AlertTriangle, ArrowRight } from 'lucide-react';
import { MockTestRunner } from './MockTestRunner';
import { ExamType, MockTestResult } from '../../types';
import { useUserProgress } from '../../context/UserProgressContext';

export const MockTestsPage: React.FC = () => {
  const { mockHistory } = useUserProgress();
  const [activeTest, setActiveTest] = useState<{ exam: ExamType; subject?: string; title: string } | null>(null);

  if (activeTest) {
    return (
      <div className="space-y-4">
        <div className="max-w-6xl mx-auto px-4 pt-4">
          <button
            onClick={() => setActiveTest(null)}
            className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
          >
            ← Exit to Mock Test Catalog
          </button>
        </div>
        <MockTestRunner
          examType={activeTest.exam}
          subjectFilter={activeTest.subject}
          onFinish={() => {}}
        />
      </div>
    );
  }

  const testCatalog = [
    {
      id: "MOCK-UG-FULL",
      title: "CUET-UG 2026 Full Model Simulation",
      exam: "CUET-UG" as ExamType,
      duration: "45 Minutes",
      questionsCount: 40,
      marksScheme: "+5 / -1 Negative",
      desc: "Comprehensive examination simulation across Domain subjects and Section IA Language aligned with latest NTA pattern.",
      highlight: true
    },
    {
      id: "MOCK-UG-GAT",
      title: "CUET-UG Section III: General Test (GAT) Mock",
      exam: "CUET-UG" as ExamType,
      subject: "General Test",
      duration: "60 Minutes",
      questionsCount: 50,
      marksScheme: "+5 / -1 Negative",
      desc: "Full General Test simulation covering GK, Current Affairs, Mental Ability, Numerical Ability and Logical Reasoning."
    },
    {
      id: "MOCK-UG-ECO",
      title: "CUET-UG Economics Domain Sectional Mock",
      exam: "CUET-UG" as ExamType,
      subject: "Economics",
      duration: "45 Minutes",
      questionsCount: 40,
      marksScheme: "+5 / -1 Negative",
      desc: "Targeted domain test on Microeconomics, Macroeconomics and Indian Economic Development."
    },
    {
      id: "MOCK-UG-ENG",
      title: "CUET-UG Section IA: English Language Mock",
      exam: "CUET-UG" as ExamType,
      subject: "English",
      duration: "45 Minutes",
      questionsCount: 40,
      marksScheme: "+5 / -1 Negative",
      desc: "Reading Comprehension passages, literary vocabulary, sentence rearrangement and verbal ability."
    },
    {
      id: "MOCK-PG-COQP11",
      title: "CUET-PG COQP11 General Paper / LLB Full Mock",
      exam: "CUET-PG" as ExamType,
      subject: "COQP11",
      duration: "105 Minutes",
      questionsCount: 75,
      marksScheme: "+4 / -1 Negative",
      desc: "75 questions domain test on Legal Awareness, Computer Basics, English and Analytical Reasoning.",
      highlight: true
    },
    {
      id: "MOCK-PG-SCQP09",
      title: "CUET-PG SCQP09 Computer Science & IT Mock",
      exam: "CUET-PG" as ExamType,
      subject: "SCQP09",
      duration: "105 Minutes",
      questionsCount: 75,
      marksScheme: "+4 / -1 Negative",
      desc: "Data Structures, Algorithms, Operating Systems, DBMS and Networks 75-question simulation."
    }
  ];

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 space-y-6">
      <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-200 text-xs font-semibold mb-2">
          <Clock className="w-3.5 h-3.5" />
          <span>Real-Time Exam Simulation</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          NTA Realistic Mock Test Center
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
          Simulate the exact NTA interface with countdown timer, question palette, review tags, negative marking, and diagnostic performance analytics.
        </p>
      </div>

      {/* Catalog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {testCatalog.map((test) => (
          <div
            key={test.id}
            className={`p-6 rounded-2xl border transition-all flex flex-col justify-between space-y-4 ${
              test.highlight
                ? 'bg-gradient-to-br from-blue-50/70 to-indigo-50/70 dark:from-blue-950/40 dark:to-indigo-950/40 border-blue-300 dark:border-blue-800 shadow-sm'
                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800'
            }`}
          >
            <div>
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="px-2 py-0.5 rounded font-bold bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
                  {test.exam}
                </span>
                <span className="font-mono text-slate-500">{test.duration} • {test.questionsCount} Questions</span>
              </div>
              <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
                {test.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                {test.desc}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
              <span className="text-[11px] font-mono font-semibold text-slate-500">
                Marking: {test.marksScheme}
              </span>
              <button
                onClick={() => setActiveTest({ exam: test.exam, subject: test.subject, title: test.title })}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-sm flex items-center gap-1.5 transition-all"
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                Start Simulation
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Past Mock Test Attempts History */}
      {mockHistory.length > 0 && (
        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white">
            Past Mock Test Attempts ({mockHistory.length})
          </h3>
          <div className="divide-y divide-slate-100 dark:divide-slate-800 text-xs">
            {mockHistory.map((res) => (
              <div key={res.id} className="py-3 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">{res.title}</div>
                  <div className="text-[11px] text-slate-400">{new Date(res.timestamp).toLocaleDateString()}</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <span className="text-[10px] text-slate-500 block">Score:</span>
                    <span className="font-bold text-blue-600 text-sm">{res.score} / {res.maxScore}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-500 block">Accuracy:</span>
                    <span className="font-bold text-emerald-600 text-sm">{res.accuracy}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
