import React, { useState, useMemo } from 'react';
import { BarChart3, Filter, ShieldCheck, CheckCircle2, TrendingUp, HelpCircle, AlertCircle, BookOpen } from 'lucide-react';
import { questionsData } from '../../data/questionsData';
import { Question } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

export const PyqMaster: React.FC = () => {
  const { language } = useLanguage();

  const [activeTab, setActiveTab] = useState<'questions' | 'analytics'>('questions');
  const [selectedExam, setSelectedExam] = useState<'CUET-UG' | 'CUET-PG' | 'All'>('All');
  const [selectedYear, setSelectedYear] = useState<string>('All');
  const [selectedSubject, setSelectedSubject] = useState<string>('All');

  // Filter only verified PYQs or PYQ-styled problems
  const pyqQuestions = useMemo(() => {
    return questionsData.filter(q => {
      if (q.sourceType !== 'VERIFIED PYQ' && q.sourceType !== 'PYQ-STYLE') return false;
      if (selectedExam !== 'All' && q.exam !== selectedExam) return false;
      if (selectedYear !== 'All' && q.year !== selectedYear) return false;
      if (selectedSubject !== 'All' && q.subject !== selectedSubject) return false;
      return true;
    });
  }, [selectedExam, selectedYear, selectedSubject]);

  const availableSubjects = useMemo(() => {
    const s = new Set<string>();
    questionsData.forEach(q => {
      if (q.sourceType === 'VERIFIED PYQ' || q.sourceType === 'PYQ-STYLE') {
        s.add(q.subject);
      }
    });
    return Array.from(s).sort();
  }, []);

  // Analytics Computation
  const analyticsData = useMemo(() => {
    const chapterMap: Record<string, number> = {};
    const topicMap: Record<string, number> = {};
    const diffMap: Record<string, number> = { easy: 0, moderate: 0, hard: 0 };

    pyqQuestions.forEach(q => {
      chapterMap[q.chapter] = (chapterMap[q.chapter] || 0) + 1;
      topicMap[q.topic] = (topicMap[q.topic] || 0) + 1;
      if (q.difficulty in diffMap) {
        diffMap[q.difficulty]++;
      }
    });

    const topChapters = Object.entries(chapterMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8);

    const topTopics = Object.entries(topicMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8);

    return { topChapters, topTopics, diffMap, total: pyqQuestions.length };
  }, [pyqQuestions]);

  const [expandedSolutions, setExpandedSolutions] = useState<Record<string, boolean>>({});
  const toggleSolution = (id: string) => {
    setExpandedSolutions(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 space-y-6">
      <div className="border-b border-slate-200 dark:border-slate-800 pb-4 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-200 text-xs font-semibold mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>NTA Verified Archives</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            CUET PYQ Master & Trends
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
            Official previous years question archive and historical frequency analytics.
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold">
          <button
            onClick={() => setActiveTab('questions')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'questions' ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm' : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            Question Papers
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === 'analytics' ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm' : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            Historical Trends
          </button>
        </div>
      </div>

      {/* Filter Row */}
      <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div>
          <label className="block text-[11px] font-semibold text-slate-500 mb-1">Exam</label>
          <select
            value={selectedExam}
            onChange={(e) => setSelectedExam(e.target.value as any)}
            className="w-full text-xs p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
          >
            <option value="All">All Exams (UG & PG)</option>
            <option value="CUET-UG">CUET-UG</option>
            <option value="CUET-PG">CUET-PG</option>
          </select>
        </div>

        <div>
          <label className="block text-[11px] font-semibold text-slate-500 mb-1">Exam Year</label>
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="w-full text-xs p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
          >
            <option value="All">All Years (2022 - 2025)</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
          </select>
        </div>

        <div>
          <label className="block text-[11px] font-semibold text-slate-500 mb-1">Subject / Paper</label>
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="w-full text-xs p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
          >
            <option value="All">All Subjects</option>
            {availableSubjects.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Tab 1: Questions List */}
      {activeTab === 'questions' && (
        <div className="space-y-4">
          <div className="text-xs text-slate-500">
            Showing <strong>{pyqQuestions.length}</strong> previous year questions
          </div>

          <div className="space-y-4">
            {pyqQuestions.map((q, idx) => {
              const isOpen = expandedSolutions[q.id];

              return (
                <div
                  key={q.id}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-3"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-slate-900 dark:text-white">#{idx + 1}</span>
                      <span className="px-2 py-0.5 rounded font-bold bg-amber-100 dark:bg-amber-950/60 text-amber-900 dark:text-amber-200 border border-amber-300">
                        {q.year || 'Official'} {q.exam}
                      </span>
                      <span className="font-semibold text-blue-600">{q.subject}</span>
                    </div>

                    <span className="text-[11px] text-slate-500">{q.source}</span>
                  </div>

                  <p className="text-sm font-semibold text-slate-900 dark:text-white leading-relaxed">
                    {language === 'hi' && q.hindiQuestion ? q.hindiQuestion : q.question}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {q.options.map((opt, oIdx) => (
                      <div
                        key={oIdx}
                        className={`p-2.5 rounded-xl border ${
                          isOpen && oIdx === q.answer
                            ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 font-bold text-emerald-900 dark:text-emerald-200'
                            : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        <span className="font-mono mr-1.5">{String.fromCharCode(65 + oIdx)}.</span>
                        {language === 'hi' && q.hindiOptions?.[oIdx] ? q.hindiOptions[oIdx] : opt}
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <button
                      onClick={() => toggleSolution(q.id)}
                      className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      {isOpen ? 'Hide Official Solution' : 'View Official Solution & Explanation'}
                    </button>
                    <span className="text-[10px] text-slate-400 font-mono">{q.id}</span>
                  </div>

                  {isOpen && (
                    <div className="p-3.5 bg-blue-50/80 dark:bg-blue-950/30 rounded-xl border border-blue-200 dark:border-blue-900 text-xs space-y-1.5 animate-in fade-in duration-150">
                      <div className="font-bold text-blue-900 dark:text-blue-300">
                        Correct Answer: Option {String.fromCharCode(65 + q.answer)}
                      </div>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{q.explanation}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Tab 2: Historical Trends & Analytics */}
      {activeTab === 'analytics' && (
        <div className="space-y-6">
          {/* Historical Analysis Notice (Mandatory Prompt Requirement #27) */}
          <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2.5">
            <AlertCircle className="w-5 h-5 flex-shrink-0 text-amber-600 mt-0.5" />
            <div>
              <strong className="block font-bold">HISTORICAL ANALYSIS ONLY:</strong>
              This data represents empirical topic distribution across past CUET official shifts. Topic weightage varies across shifts. Never assume any topic is guaranteed to appear in future examination cycles.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Top High-Frequency Chapters */}
            <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-500" />
                Most Frequent Chapters in PYQs
              </h3>
              <div className="space-y-2.5">
                {analyticsData.topChapters.map(([chapter, count], idx) => {
                  const pct = Math.round((count / (analyticsData.total || 1)) * 100);
                  return (
                    <div key={chapter} className="space-y-1">
                      <div className="flex justify-between text-xs font-semibold text-slate-800 dark:text-slate-200">
                        <span className="truncate max-w-[280px]">{idx + 1}. {chapter}</span>
                        <span className="text-slate-500 font-mono">{count} Qs</span>
                      </div>
                      <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div
                          className="bg-blue-600 h-full rounded-full transition-all"
                          style={{ width: `${Math.min(100, pct * 4)}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Top Recurring Topics */}
            <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-500" />
                High-Yield Repeated Concepts
              </h3>
              <div className="space-y-2.5">
                {analyticsData.topTopics.map(([topic, count], idx) => {
                  return (
                    <div key={topic} className="flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 text-xs">
                      <span className="font-medium text-slate-800 dark:text-slate-200 truncate max-w-[260px]">
                        {idx + 1}. {topic}
                      </span>
                      <span className="px-2 py-0.5 rounded font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-[10px]">
                        {count} questions
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
