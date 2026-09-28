import React, { useState } from 'react';
import { Newspaper, Calendar, CheckCircle2, HelpCircle } from 'lucide-react';
import { currentAffairsData } from '../../data/currentAffairsData';
import { useLanguage } from '../../context/LanguageContext';

export const CurrentAffairsView: React.FC = () => {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeQuestionId, setActiveQuestionId] = useState<string | null>(null);

  const categories = [
    'All', 'National', 'International', 'Economy', 'Science & Tech', 'Sports', 'Government'
  ];

  const filteredItems = currentAffairsData.filter(item =>
    selectedCategory === 'All' ? true : item.category === selectedCategory
  );

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 space-y-6">
      <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-2">
          <Newspaper className="w-3.5 h-3.5" />
          <span>CUET General Test (GAT) Digest</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          Current Affairs & General Awareness
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
          High-yield monthly & yearly current affairs categorized for Section III (General Test) with sample exam questions.
        </p>
      </div>

      {/* Category Filter Chips */}
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
              selectedCategory === cat
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Current Affairs Feed */}
      <div className="space-y-4">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-3"
          >
            <div className="flex items-center justify-between text-xs">
              <span className="px-2 py-0.5 rounded font-bold bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 text-[10px]">
                {item.category}
              </span>
              <span className="text-slate-400 flex items-center gap-1">
                <Calendar className="w-3 h-3" /> {item.date}
              </span>
            </div>

            <h3 className="font-bold text-base text-slate-900 dark:text-white leading-snug">
              {language === 'hi' && item.hindiTitle ? item.hindiTitle : item.title}
            </h3>

            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {language === 'hi' && item.hindiSummary ? item.hindiSummary : item.summary}
            </p>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 text-[11px] text-slate-600 dark:text-slate-400">
              <strong className="text-blue-600 dark:text-blue-400 font-semibold block mb-0.5">Exam Relevance:</strong>
              {item.examRelevance}
            </div>

            {/* Interactive Sample MCQ */}
            {item.sampleQuestion && (
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => setActiveQuestionId(activeQuestionId === item.id ? null : item.id)}
                  className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1.5"
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                  {activeQuestionId === item.id ? 'Hide Sample CUET Question' : 'Practice Sample CUET Question on this Event'}
                </button>

                {activeQuestionId === item.id && (
                  <div className="mt-3 p-4 rounded-xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900 text-xs space-y-2.5 animate-in fade-in duration-150">
                    <p className="font-semibold text-slate-900 dark:text-white">
                      {item.sampleQuestion.question}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {item.sampleQuestion.options.map((opt, oIdx) => (
                        <div
                          key={oIdx}
                          className={`p-2 rounded-lg border text-xs ${
                            oIdx === item.sampleQuestion?.answer
                              ? 'bg-emerald-100 dark:bg-emerald-950/60 border-emerald-400 font-bold text-emerald-900 dark:text-emerald-200'
                              : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                          }`}
                        >
                          <span className="font-mono mr-1.5">{String.fromCharCode(65 + oIdx)}.</span>
                          {opt}
                          {oIdx === item.sampleQuestion?.answer && <span className="ml-2 text-emerald-600 font-bold">✓ (Correct)</span>}
                        </div>
                      ))}
                    </div>
                    <div className="text-[11px] text-slate-600 dark:text-slate-400 pt-1">
                      <span className="font-bold">Explanation:</span> {item.sampleQuestion.explanation}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
