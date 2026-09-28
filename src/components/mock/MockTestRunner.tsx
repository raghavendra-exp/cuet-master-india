import React, { useState, useEffect } from 'react';
import { Clock, CheckCircle2, AlertCircle, Bookmark, ChevronLeft, ChevronRight, RotateCcw, BarChart3, AlertTriangle } from 'lucide-react';
import { questionsData } from '../../data/questionsData';
import { Question, ExamType, MockTestResult } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { useUserProgress } from '../../context/UserProgressContext';

interface MockRunnerProps {
  examType: ExamType;
  subjectFilter?: string;
  onFinish?: (result: MockTestResult) => void;
}

export const MockTestRunner: React.FC<MockRunnerProps> = ({
  examType,
  subjectFilter,
  onFinish
}) => {
  const { language } = useLanguage();
  const { recordMockResult, addErrorLog } = useUserProgress();

  // Test setup
  const isUg = examType === 'CUET-UG';
  const totalQuestions = isUg ? 40 : 75;
  const initialDurationSeconds = isUg ? 45 * 60 : 105 * 60;
  const marksPerCorrect = isUg ? 5 : 4;
  const negativeMarking = 1;

  // Filter relevant questions for this mock
  const [mockQuestions] = useState<Question[]>(() => {
    let pool = questionsData.filter(q => q.exam === examType);
    if (subjectFilter) {
      const subjectPool = pool.filter(q => q.subject.toLowerCase().includes(subjectFilter.toLowerCase()));
      if (subjectPool.length >= 10) pool = subjectPool;
    }
    // Shuffle & take required count
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(totalQuestions, shuffled.length));
  });

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [markedForReview, setMarkedForReview] = useState<Record<number, boolean>>({});
  const [timeLeft, setTimeLeft] = useState<number>(initialDurationSeconds);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [mockResult, setMockResult] = useState<MockTestResult | null>(null);

  // Timer countdown
  useEffect(() => {
    if (isSubmitted) return;
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          handleSubmitTest();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isSubmitted]);

  const currentQ = mockQuestions[currentIndex];

  const handleSelectOption = (optIndex: number) => {
    if (isSubmitted) return;
    setSelectedAnswers(prev => ({ ...prev, [currentIndex]: optIndex }));
  };

  const handleClearResponse = () => {
    setSelectedAnswers(prev => {
      const copy = { ...prev };
      delete copy[currentIndex];
      return copy;
    });
  };

  const handleToggleReview = () => {
    setMarkedForReview(prev => ({
      ...prev,
      [currentIndex]: !prev[currentIndex]
    }));
  };

  const handleSubmitTest = () => {
    if (isSubmitted) return;
    setIsSubmitted(true);

    let correctCount = 0;
    let incorrectCount = 0;
    let unattemptedCount = 0;
    let totalScore = 0;
    const subjectStats: Record<string, { correct: number; incorrect: number; score: number }> = {};
    const weakTopics: string[] = [];

    mockQuestions.forEach((q, idx) => {
      const userAns = selectedAnswers[idx];
      const subj = q.subject || "General";

      if (!subjectStats[subj]) {
        subjectStats[subj] = { correct: 0, incorrect: 0, score: 0 };
      }

      if (userAns === undefined) {
        unattemptedCount++;
      } else if (userAns === q.answer) {
        correctCount++;
        totalScore += marksPerCorrect;
        subjectStats[subj].correct++;
        subjectStats[subj].score += marksPerCorrect;
      } else {
        incorrectCount++;
        totalScore -= negativeMarking;
        subjectStats[subj].incorrect++;
        subjectStats[subj].score -= negativeMarking;
        if (!weakTopics.includes(q.topic)) {
          weakTopics.push(q.topic);
        }

        // Automatically log into Error Notebook for review!
        addErrorLog({
          questionId: q.id,
          questionText: q.question,
          subject: q.subject,
          topic: q.topic,
          userAnswer: userAns,
          correctAnswer: q.answer,
          explanation: q.explanation,
          mistakeType: "Concept gap"
        });
      }
    });

    const attempted = correctCount + incorrectCount;
    const accuracy = attempted > 0 ? (correctCount / attempted) * 100 : 0;
    const maxScore = mockQuestions.length * marksPerCorrect;

    const res: MockTestResult = {
      id: `MOCK-${Date.now()}`,
      mockId: `NTA-${examType}-FULL`,
      exam: examType,
      title: `${examType} Official Pattern Simulation Mock`,
      timestamp: new Date().toISOString(),
      totalQuestions: mockQuestions.length,
      attempted,
      correct: correctCount,
      incorrect: incorrectCount,
      unattempted: unattemptedCount,
      score: totalScore,
      maxScore,
      accuracy: Math.round(accuracy * 10) / 10,
      timeSpentSeconds: initialDurationSeconds - timeLeft,
      subjectBreakdown: subjectStats,
      weakTopics: weakTopics.slice(0, 5)
    };

    setMockResult(res);
    recordMockResult(res);
    if (onFinish) onFinish(res);
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${String(mins).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  // If already submitted, display Analytics Dashboard
  if (isSubmitted && mockResult) {
    return (
      <div className="max-w-4xl mx-auto p-4 sm:p-6 space-y-6">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center font-bold">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
            Mock Test Submitted Successfully!
          </h2>
          <p className="text-xs text-slate-500">
            {mockResult.title} • Completed in {Math.round(mockResult.timeSpentSeconds / 60)} minutes
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
            <div className="p-3 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-900">
              <span className="text-[10px] font-bold text-blue-600 uppercase">Total Score</span>
              <div className="text-2xl font-black text-blue-700 dark:text-blue-300">
                {mockResult.score} <span className="text-xs font-normal text-slate-500">/ {mockResult.maxScore}</span>
              </div>
            </div>

            <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-900">
              <span className="text-[10px] font-bold text-emerald-600 uppercase">Accuracy</span>
              <div className="text-2xl font-black text-emerald-700 dark:text-emerald-300">
                {mockResult.accuracy}%
              </div>
            </div>

            <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
              <span className="text-[10px] font-bold text-slate-600 uppercase">Correct / Wrong</span>
              <div className="text-2xl font-black text-slate-800 dark:text-slate-200">
                <span className="text-emerald-600">{mockResult.correct}</span>
                <span className="text-slate-400 text-sm"> / </span>
                <span className="text-rose-600">{mockResult.incorrect}</span>
              </div>
            </div>

            <div className="p-3 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-900">
              <span className="text-[10px] font-bold text-amber-600 uppercase">Unattempted</span>
              <div className="text-2xl font-black text-amber-700 dark:text-amber-300">
                {mockResult.unattempted}
              </div>
            </div>
          </div>
        </div>

        {/* Weak Topics Analysis & Auto-logged in Error Notebook */}
        {mockResult.weakTopics.length > 0 && (
          <div className="bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/60 rounded-2xl p-5 space-y-2">
            <div className="flex items-center gap-2 text-rose-700 dark:text-rose-300 font-bold text-sm">
              <AlertTriangle className="w-4 h-4" />
              <span>Identified Weak Topics (Auto-Saved to Error Notebook):</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Your incorrect questions have been automatically logged to your <strong>Error Notebook</strong> with mistake diagnostics for revision.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {mockResult.weakTopics.map((topic, i) => (
                <span key={i} className="text-xs font-semibold px-2.5 py-1 rounded-full bg-rose-100 dark:bg-rose-900/50 text-rose-800 dark:text-rose-200 border border-rose-300 dark:border-rose-800">
                  {topic}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Detailed Solutions Review */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white">
            Complete Solutions & Explanations Review
          </h3>
          <div className="space-y-3">
            {mockQuestions.map((q, qIdx) => {
              const userAns = selectedAnswers[qIdx];
              const isCorrect = userAns === q.answer;
              const isAttempted = userAns !== undefined;

              return (
                <div
                  key={q.id}
                  className={`p-4 rounded-2xl border text-xs space-y-2 ${
                    !isAttempted
                      ? 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800'
                      : isCorrect
                      ? 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800'
                      : 'bg-rose-50/50 dark:bg-rose-950/20 border-rose-300 dark:border-rose-800'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-bold text-slate-500">Q{qIdx + 1} • {q.subject} ({q.topic})</span>
                    <span className={`font-bold px-2 py-0.5 rounded text-[10px] ${
                      !isAttempted
                        ? 'bg-slate-200 text-slate-700'
                        : isCorrect
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-rose-100 text-rose-800'
                    }`}>
                      {!isAttempted ? 'Unattempted (0 Marks)' : isCorrect ? `+${marksPerCorrect} Marks` : `-${negativeMarking} Negative`}
                    </span>
                  </div>

                  <p className="font-semibold text-slate-900 dark:text-white text-sm">
                    {language === 'hi' && q.hindiQuestion ? q.hindiQuestion : q.question}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    {q.options.map((opt, oIdx) => {
                      const isOptionCorrect = oIdx === q.answer;
                      const isOptionUser = oIdx === userAns;
                      return (
                        <div
                          key={oIdx}
                          className={`p-2 rounded-xl border text-xs ${
                            isOptionCorrect
                              ? 'bg-emerald-100/70 dark:bg-emerald-950/60 border-emerald-400 font-bold text-emerald-900 dark:text-emerald-200'
                              : isOptionUser
                              ? 'bg-rose-100/70 dark:bg-rose-950/60 border-rose-400 text-rose-900 dark:text-rose-200 font-semibold'
                              : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                          }`}
                        >
                          <span className="font-mono mr-1.5">{String.fromCharCode(65 + oIdx)}.</span>
                          {language === 'hi' && q.hindiOptions?.[oIdx] ? q.hindiOptions[oIdx] : opt}
                          {isOptionCorrect && <span className="ml-2 text-emerald-600 font-bold">✓ (Correct)</span>}
                          {isOptionUser && !isOptionCorrect && <span className="ml-2 text-rose-600 font-bold">✗ (Your Choice)</span>}
                        </div>
                      );
                    })}
                  </div>

                  <div className="p-3 bg-white/80 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 mt-2">
                    <span className="font-bold text-blue-600 dark:text-blue-400 block mb-0.5">Explanation:</span>
                    {q.explanation}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  if (!currentQ) {
    return (
      <div className="p-8 text-center text-slate-500">
        Loading exam simulation questions...
      </div>
    );
  }

  // Active Test Simulation Screen
  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 space-y-4">
      {/* Top Test Header: Exam Title & Countdown Timer */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
            {examType} Official Simulation
          </div>
          <h2 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
            {currentQ.subject} • Question {currentIndex + 1} of {mockQuestions.length}
          </h2>
        </div>

        <div className="flex items-center gap-4">
          <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono text-sm font-bold border ${
            timeLeft < 300
              ? 'bg-rose-50 text-rose-600 border-rose-200 animate-pulse'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white border-slate-300 dark:border-slate-700'
          }`}>
            <Clock className="w-4 h-4" />
            <span>{formatTime(timeLeft)}</span>
          </div>

          <button
            onClick={handleSubmitTest}
            className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-all"
          >
            Submit Test
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Question Area */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-5">
            <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-100 dark:border-slate-800">
              <span className="font-semibold text-slate-500">
                Marking: <strong className="text-emerald-600">+{marksPerCorrect}</strong> / <strong className="text-rose-600">-{negativeMarking}</strong>
              </span>
              <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 px-2 py-0.5 rounded text-[10px] font-semibold">
                {currentQ.sourceType}
              </span>
            </div>

            <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-relaxed">
              {language === 'hi' && currentQ.hindiQuestion ? currentQ.hindiQuestion : currentQ.question}
            </div>

            {/* Options */}
            <div className="space-y-2.5">
              {currentQ.options.map((optionText, optIdx) => {
                const isSelected = selectedAnswers[currentIndex] === optIdx;
                const displayText = language === 'hi' && currentQ.hindiOptions?.[optIdx]
                  ? currentQ.hindiOptions[optIdx]
                  : optionText;

                return (
                  <button
                    key={optIdx}
                    onClick={() => handleSelectOption(optIdx)}
                    className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-blue-50 dark:bg-blue-950/60 border-blue-600 text-blue-900 dark:text-blue-200 shadow-sm'
                        : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center font-mono text-xs font-bold ${
                        isSelected
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                      }`}>
                        {String.fromCharCode(65 + optIdx)}
                      </span>
                      <span>{displayText}</span>
                    </div>
                    {isSelected && <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />}
                  </button>
                );
              })}
            </div>

            {/* Bottom Controls */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <button
                  onClick={handleToggleReview}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-all ${
                    markedForReview[currentIndex]
                      ? 'bg-purple-600 text-white border-purple-600'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700'
                  }`}
                >
                  <Bookmark className="w-3.5 h-3.5 inline mr-1" />
                  {markedForReview[currentIndex] ? 'Marked for Review' : 'Mark for Review'}
                </button>

                <button
                  onClick={handleClearResponse}
                  disabled={selectedAnswers[currentIndex] === undefined}
                  className="px-3 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-rose-600 transition-colors disabled:opacity-40"
                >
                  Clear Response
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                  disabled={currentIndex === 0}
                  className="px-3 py-2 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white disabled:opacity-40 flex items-center gap-1"
                >
                  <ChevronLeft className="w-4 h-4" /> Previous
                </button>

                <button
                  onClick={() => setCurrentIndex(prev => Math.min(mockQuestions.length - 1, prev + 1))}
                  disabled={currentIndex === mockQuestions.length - 1}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-40 flex items-center gap-1 shadow-sm"
                >
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Col: NTA Question Palette */}
        <div className="space-y-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              NTA Question Palette
            </h3>

            {/* Legend */}
            <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-emerald-500"></span>
                <span>Answered</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-purple-500"></span>
                <span>Marked for Review</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-blue-500"></span>
                <span>Current Question</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-slate-200 dark:bg-slate-700"></span>
                <span>Not Visited / Skipped</span>
              </div>
            </div>

            {/* Numbers Grid */}
            <div className="grid grid-cols-5 sm:grid-cols-6 gap-1.5 max-h-[360px] overflow-y-auto p-1 scrollbar-thin">
              {mockQuestions.map((_, idx) => {
                const isCurrent = idx === currentIndex;
                const isAnswered = selectedAnswers[idx] !== undefined;
                const isMarked = markedForReview[idx];

                let bgClass = "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300";
                if (isCurrent) {
                  bgClass = "ring-2 ring-blue-500 bg-blue-600 text-white font-bold";
                } else if (isMarked) {
                  bgClass = "bg-purple-600 text-white font-bold";
                } else if (isAnswered) {
                  bgClass = "bg-emerald-600 text-white font-bold";
                }

                return (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-8 rounded-lg text-xs font-mono transition-transform hover:scale-105 ${bgClass}`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
