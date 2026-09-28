import React, { useState } from 'react';
import { BookOpen, Sparkles, RotateCw, Check, X, Bookmark, FileText } from 'lucide-react';
import { flashcardsData } from '../../data/flashcardsData';
import { quickNotesData } from '../../data/quickNotesData';
import { useLanguage } from '../../context/LanguageContext';
import { useUserProgress } from '../../context/UserProgressContext';

export const FlashcardsAndNotes: React.FC = () => {
  const { language } = useLanguage();
  const { knownCards, unknownCards, markCardKnown, markCardUnknown } = useUserProgress();

  const [activeTab, setActiveTab] = useState<'flashcards' | 'notes'>('flashcards');
  const [selectedSubject, setSelectedSubject] = useState<string>('All');
  const [currentCardIdx, setCurrentCardIdx] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const subjects = ['All', ...Array.from(new Set(flashcardsData.map(f => f.subject)))];

  const filteredCards = flashcardsData.filter(f =>
    selectedSubject === 'All' ? true : f.subject === selectedSubject
  );

  const currentCard = filteredCards[currentCardIdx] || filteredCards[0];

  const handleNextCard = () => {
    setIsFlipped(false);
    setCurrentCardIdx(prev => (prev + 1) % filteredCards.length);
  };

  const handlePrevCard = () => {
    setIsFlipped(false);
    setCurrentCardIdx(prev => (prev - 1 + filteredCards.length) % filteredCards.length);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 space-y-6">
      <div className="border-b border-slate-200 dark:border-slate-800 pb-4 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Spaced Repetition & Revision</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Flashcards & Quick Notes
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
            Rapid formula revision, key definitions, legal maxims, and high-yield summary cheat sheets.
          </p>
        </div>

        <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold">
          <button
            onClick={() => setActiveTab('flashcards')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'flashcards' ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm' : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            Flashcards
          </button>
          <button
            onClick={() => setActiveTab('notes')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'notes' ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm' : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            Formula Sheets & Notes
          </button>
        </div>
      </div>

      {activeTab === 'flashcards' && currentCard && (
        <div className="space-y-6">
          {/* Subject Filter */}
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin">
            {subjects.map(s => (
              <button
                key={s}
                onClick={() => {
                  setSelectedSubject(s);
                  setCurrentCardIdx(0);
                  setIsFlipped(false);
                }}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedSubject === s
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Flashcard Component with Flip Animation */}
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>Card {currentCardIdx + 1} of {filteredCards.length}</span>
              <span className="font-semibold text-blue-600">{currentCard.subject} • {currentCard.category}</span>
            </div>

            <div
              onClick={() => setIsFlipped(prev => !prev)}
              className="min-h-[260px] bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-850 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-md flex flex-col justify-between cursor-pointer select-none transition-all hover:shadow-lg relative overflow-hidden group"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
                  {isFlipped ? 'Answer / Solution' : 'Question / Concept'}
                </span>
                <span className="text-[11px] text-slate-400 flex items-center gap-1">
                  <RotateCw className="w-3 h-3 group-hover:rotate-180 transition-transform duration-300" /> Click to Flip
                </span>
              </div>

              <div className="py-6 text-center space-y-2">
                <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-relaxed">
                  {isFlipped
                    ? (language === 'hi' && currentCard.hindiBack ? currentCard.hindiBack : currentCard.back)
                    : (language === 'hi' && currentCard.hindiFront ? currentCard.hindiFront : currentCard.front)}
                </div>
                {isFlipped && (
                  <p className="text-xs text-slate-500 font-mono">
                    {currentCard.chapter} • {currentCard.topic}
                  </p>
                )}
              </div>

              <div className="text-center text-[11px] text-slate-400">
                {isFlipped ? "Showing verified explanation" : "Click anywhere on the card to flip"}
              </div>
            </div>

            {/* Actions: Known / Unknown / Nav */}
            <div className="flex items-center justify-between pt-2">
              <button
                onClick={handlePrevCard}
                className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs"
              >
                Previous Card
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    markCardUnknown(currentCard.id);
                    handleNextCard();
                  }}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-900 font-bold text-xs hover:bg-rose-100"
                >
                  <X className="w-4 h-4" /> Need Revision
                </button>
                <button
                  onClick={() => {
                    markCardKnown(currentCard.id);
                    handleNextCard();
                  }}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900 font-bold text-xs hover:bg-emerald-100"
                >
                  <Check className="w-4 h-4" /> Mastered It
                </button>
              </div>

              <button
                onClick={handleNextCard}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-sm"
              >
                Next Card
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'notes' && (
        <div className="space-y-4">
          {quickNotesData.map((note) => (
            <div
              key={note.id}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-3"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
                  {note.subject} • {note.category}
                </span>
                <span className="text-xs text-slate-400 font-mono">{note.exam}</span>
              </div>

              <h3 className="font-bold text-base text-slate-900 dark:text-white">
                {language === 'hi' && note.hindiTitle ? note.hindiTitle : note.title}
              </h3>

              <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl border border-slate-200 dark:border-slate-700/80 text-xs text-slate-700 dark:text-slate-300 whitespace-pre-line font-sans leading-relaxed">
                {language === 'hi' && note.hindiContent ? note.hindiContent : note.content}
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {note.tags.map((t, idx) => (
                  <span key={idx} className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-500 px-2 py-0.5 rounded">
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
