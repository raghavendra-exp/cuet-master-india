import React, { useState } from 'react';
import { Library, ShieldCheck, ExternalLink, BookOpen, AlertCircle, ShoppingCart } from 'lucide-react';
import { booksData } from '../../data/booksData';
import { useLanguage } from '../../context/LanguageContext';

export const BookLibraryView: React.FC = () => {
  const { language } = useLanguage();
  const [selectedExam, setSelectedExam] = useState<string>('All');
  const [selectedSubject, setSelectedSubject] = useState<string>('All');

  const subjects = ['All', ...Array.from(new Set(booksData.map(b => b.subject)))];

  const filteredBooks = booksData.filter(b => {
    if (selectedExam !== 'All' && b.exam !== selectedExam) return false;
    if (selectedSubject !== 'All' && b.subject !== selectedSubject) return false;
    return true;
  });

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 space-y-6">
      <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-2">
          <Library className="w-3.5 h-3.5" />
          <span>Curated Legitimate Literature</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          CUET Book Library & Official Study Resources
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
          Evaluated guidebooks from established academic publishers with official syllabus mappings, legal open NCERT links, and zero pirated content.
        </p>
      </div>

      {/* Copyright Safety Notice (Prompt Requirement #49 & #68) */}
      <div className="p-4 bg-emerald-50 dark:bg-emerald-950/40 rounded-2xl border border-emerald-300 dark:border-emerald-800 text-xs text-emerald-900 dark:text-emerald-200 flex items-start gap-2.5">
        <ShieldCheck className="w-5 h-5 flex-shrink-0 text-emerald-600 mt-0.5" />
        <div>
          <strong className="block font-bold">100% LEGAL & COPYRIGHT-SAFE RESOURCE DIRECTORY:</strong>
          We never host or link to pirated PDF downloads or copyright-infringing materials. We connect students directly to authentic publishers, verified bookstore links, and free official government educational repositories (NCERT, ePathshala, DIKSHA).
        </div>
      </div>

      {/* Filter Row */}
      <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-wrap items-center gap-3">
        <div className="flex-1 min-w-[200px]">
          <label className="block text-[11px] font-semibold text-slate-500 mb-1">Exam Level</label>
          <select
            value={selectedExam}
            onChange={(e) => setSelectedExam(e.target.value)}
            className="w-full text-xs p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
          >
            <option value="All">All Exams (UG & PG)</option>
            <option value="CUET-UG">CUET-UG</option>
            <option value="CUET-PG">CUET-PG</option>
          </select>
        </div>

        <div className="flex-1 min-w-[200px]">
          <label className="block text-[11px] font-semibold text-slate-500 mb-1">Subject</label>
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="w-full text-xs p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
          >
            {subjects.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Books Catalog Cards */}
      <div className="space-y-4">
        {filteredBooks.map((book) => (
          <div
            key={book.id}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300">
                    {book.exam}
                  </span>
                  <span className="text-xs text-slate-500 font-semibold">{book.subject}</span>
                  <span className="text-xs text-slate-400">• {book.publisher}</span>
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white">
                  {book.title}
                </h3>
                <div className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                  Author/Board: {book.author} • {book.edition} ({book.year})
                </div>
              </div>

              <span className={`text-[10px] px-2.5 py-1 rounded-full font-bold ${
                book.difficulty === 'Beginner' ? 'bg-emerald-100 text-emerald-800' :
                book.difficulty === 'Comprehensive' ? 'bg-blue-100 text-blue-800' :
                'bg-purple-100 text-purple-800'
              }`}>
                {book.difficulty} Level
              </span>
            </div>

            {/* Evaluation Breakdown */}
            <div className="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700/80 text-xs space-y-2">
              <div className="font-semibold text-slate-800 dark:text-slate-200">
                Evaluation & Coverage Analysis:
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {book.evaluationSummary}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] pt-1">
                <div>
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Syllabus Coverage:</span>
                  <div className="text-slate-500">{book.syllabusCoverage}</div>
                </div>
                <div>
                  <span className="font-semibold text-slate-700 dark:text-slate-300">PYQ Inclusions:</span>
                  <div className="text-slate-500">{book.pyqCoverage}</div>
                </div>
                <div>
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Practice Problems:</span>
                  <div className="text-slate-500">{book.practiceQuestionsCount}</div>
                </div>
              </div>
            </div>

            {/* Links Row */}
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs pt-1">
              {book.ncertAlternative ? (
                <a
                  href={book.ncertAlternative.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 font-bold hover:bg-emerald-100"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  {book.ncertAlternative.title} (Free Official PDF) ↗
                </a>
              ) : (
                <a
                  href={book.officialPublisherLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 dark:text-blue-400 font-semibold hover:underline flex items-center gap-1"
                >
                  Official Publisher Catalog ↗
                </a>
              )}

              <div className="flex items-center gap-2">
                {book.legitimateBuyLinks.map((buy, bIdx) => (
                  <a
                    key={bIdx}
                    href={buy.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-800 dark:text-white font-semibold transition-colors"
                  >
                    <ShoppingCart className="w-3 h-3 text-slate-500" />
                    <span>{buy.platform} ↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
