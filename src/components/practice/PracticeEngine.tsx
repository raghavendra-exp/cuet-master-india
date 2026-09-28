import React, { useState, useMemo } from 'react';
import { HelpCircle, Filter, CheckCircle2, XCircle, Sparkles, Bookmark, RotateCcw, AlertTriangle, ArrowRight } from 'lucide-react';
import { questionsData } from '../../data/questionsData';
import { Question, ExamType } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { useUserProgress } from '../../context/UserProgressContext';

export const PracticeEngine: React.FC = () => {
  const { language, t } = useLanguage();
  const { bookmarks, toggleBookmark, addErrorLog } = useUserProgress();

  const [selectedExam, setSelectedExam] = useState<ExamType | 'All'>('CUET-UG');
  const [selectedSubject, setSelectedSubject] = useState<string>('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [selectedSourceType, setSelectedSourceType] = useState<string>('All');
  const [questionCountLimit, setQuestionCountLimit] = useState<number>(25);

  const [activeAnswers, setActiveAnswers] = useState<Record<string, number>>({});
  const [revealedSolutions, setRevealedSolutions] = useState<Record<string, boolean>>({});

  const availableSubjects = useMemo(() => {
    const subs = new Set<string>();
    questionsData.forEach(q => {
      if (selectedExam === 'All' || q.exam === selectedExam) {
        subs.add(q.subject);
      }
    });
    return Array.from(subs).sort();
  }, [selectedExam]);

  const filteredQuestions = useMemo(() => {
    return questionsData.filter(q => {
      if (selectedExam !== 'All' && q.exam !== selectedExam) return false;
      if (selectedSubject !== 'All' && q.subject !== selectedSubject) return false;
      if (selectedDifficulty !== 'All' && q.difficulty !== selectedDifficulty) return false;
      if (selectedSourceType !== 'All' && q.sourceType !== selectedSourceType) return false;
      return true;
    }).slice(0, questionCountLimit);
  }, [selectedExam, selectedSubject, selectedDifficulty, selectedSourceType, questionCountLimit]);

  const handleSelectAnswer = (q: Question, optionIdx: number) => {
    setActiveAnswers(prev => ({ ...prev, [q.id]: optionIdx }));
    setRevealedSolutions(prev => ({ ...prev, [q.id]: true }));

    // If incorrect, automatically give option to log or auto-log to error notebook
    if (optionIdx !== q.answer) {
      addErrorLog({
        questionId: q.id,
        questionText: q.question,
        subject: q.subject,
        topic: q.topic,
        userAnswer: optionIdx,
        correctAnswer: q.answer,
        explanation: q.explanation,
        mistakeType: "Concept gap"
      });
    }
  };

  const handleResetSession = () => {
    setActiveAnswers({});
    setRevealedSolutions({});
  };

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 space-y-6">
      <div className="border-b border-slate-200 dark:border-slate-800 pb-4 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Practice & Question Bank</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Adaptive Subject Practice
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
            Over 1,000+ curated questions with immediate explanations, authentic source classifications, and error notebook tracking.
          </p>
        </div>

        <button
          onClick={handleResetSession}
          className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 text-xs font-semibold transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" /> Reset Session
        </button>
      </div>

      {/* Adaptive Filters Bar */}
      <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm grid grid-cols-2 sm:grid-cols-5 gap-3">
        <div>
          <label className="block text-[11px] font-semibold text-slate-500 mb-1">Exam</label>
          <select
            value={selectedExam}
            onChange={(e) => {
              setSelectedExam(e.target.value as any);
              setSelectedSubject('All');
            }}
            className="w-full text-xs p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
          >
            <option value="All">All Exams</option>
            <option value="CUET-UG">CUET-UG</option>
            <option value="CUET-PG">CUET-PG</option>
          </select>
        </div>

        <div>
          <label className="block text-[11px] font-semibold text-slate-500 mb-1">Subject</label>
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

        <div>
          <label className="block text-[11px] font-semibold text-slate-500 mb-1">Difficulty</label>
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="w-full text-xs p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
          >
            <option value="All">All Difficulties</option>
            <option value="easy">Easy</option>
            <option value="moderate">Moderate</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        <div>
          <label className="block text-[11px] font-semibold text-slate-500 mb-1">Source Type</label>
          <select
            value={selectedSourceType}
            onChange={(e) => setSelectedSourceType(e.target.value)}
            className="w-full text-xs p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
          >
            <option value="All">All Sources</option>
            <option value="VERIFIED PYQ">Verified PYQ</option>
            <option value="ORIGINAL">Original Practice</option>
            <option value="PYQ-STYLE">PYQ-Style Model</option>
          </select>
        </div>

        <div>
          <label className="block text-[11px] font-semibold text-slate-500 mb-1">Question Count</label>
          <select
            value={questionCountLimit}
            onChange={(e) => setQuestionCountLimit(Number(e.target.value))}
            className="w-full text-xs p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold text-blue-600"
          >
            <option value={10}>10 Questions</option>
            <option value={25}>25 Questions</option>
            <option value={50}>50 Questions</option>
            <option value={100}>100 Questions</option>
          </select>
        </div>
      </div>

      {/* Questions Stream */}
      <div className="space-y-5">
        <div className="text-xs text-slate-500 flex items-center justify-between">
          <span>Showing <strong>{filteredQuestions.length}</strong> questions</span>
          <span>Click any option to reveal instantaneous explanation</span>
        </div>

        {filteredQuestions.map((q, idx) => {
          const userSelected = activeAnswers[q.id];
          const isRevealed = revealedSolutions[q.id];
          const isBookmarked = bookmarks.includes(q.id);

          return (
            <div
              key={q.id}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-slate-900 dark:text-white">#{idx + 1}</span>
                  <span className="px-2 py-0.5 rounded font-bold bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300">
                    {q.subject}
                  </span>
                  <span className="text-slate-500">{q.chapter} • {q.topic}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    q.sourceType === 'VERIFIED PYQ' ? 'bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-200 border border-amber-300' :
                    q.sourceType === 'ORIGINAL' ? 'bg-emerald-100 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-200' :
                    'bg-indigo-100 text-indigo-900 dark:bg-indigo-950 dark:text-indigo-200'
                  }`}>
                    {q.sourceType}
                  </span>
                  <button
                    onClick={() => toggleBookmark(q.id)}
                    className={`p-1.5 rounded-lg border transition-colors ${
                      isBookmarked
                        ? 'bg-amber-50 border-amber-400 text-amber-600'
                        : 'border-slate-200 text-slate-400 hover:text-slate-600'
                    }`}
                    title="Bookmark"
                  >
                    <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-amber-500' : ''}`} />
                  </button>
                </div>
              </div>

              {/* Question Text */}
              <div className="text-sm font-semibold text-slate-900 dark:text-white leading-relaxed">
                {language === 'hi' && q.hindiQuestion ? q.hindiQuestion : q.question}
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {q.options.map((opt, oIdx) => {
                  const isCorrect = oIdx === q.answer;
                  const isSelected = userSelected === oIdx;

                  let optClass = "border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200";
                  if (isRevealed) {
                    if (isCorrect) {
                      optClass = "bg-emerald-100/70 dark:bg-emerald-950/60 border-emerald-500 font-bold text-emerald-900 dark:text-emerald-200";
                    } else if (isSelected) {
                      optClass = "bg-rose-100/70 dark:bg-rose-950/60 border-rose-500 font-bold text-rose-900 dark:text-rose-200";
                    }
                  }

                  const optDisplay = language === 'hi' && q.hindiOptions?.[oIdx] ? q.hindiOptions[oIdx] : opt;

                  return (
                    <button
                      key={oIdx}
                      disabled={isRevealed}
                      onClick={() => handleSelectAnswer(q, oIdx)}
                      className={`text-left p-3 rounded-xl border text-xs font-medium transition-all flex items-center justify-between ${optClass}`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-mono text-[11px] font-bold text-slate-600 dark:text-slate-400">
                          {String.fromCharCode(65 + oIdx)}
                        </span>
                        <span>{optDisplay}</span>
                      </div>
                      {isRevealed && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />}
                      {isRevealed && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />}
                    </button>
                  );
                })}
              </div>

              {/* Explanation & Source Transparency */}
              {isRevealed && (
                <div className="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700/80 text-xs space-y-2 animate-in fade-in duration-150">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-blue-600 dark:text-blue-400">Concept & Explanation:</span>
                    <span className="text-[10px] text-slate-500 font-medium">Source: {q.source}</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{q.explanation}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
