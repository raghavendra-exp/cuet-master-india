import React, { useState } from 'react';
import { AlertTriangle, CheckCircle2, Trash2, Filter, RotateCcw } from 'lucide-react';
import { useUserProgress } from '../../context/UserProgressContext';
import { ErrorLogItem } from '../../types';

export const ErrorNotebookView: React.FC = () => {
  const { errorLogs, markErrorRevised, removeErrorLog } = useUserProgress();
  const [filterType, setFilterType] = useState<string>('All');
  const [filterRevised, setFilterRevised] = useState<'All' | 'Pending' | 'Revised'>('All');

  const mistakeTypes = [
    'Concept gap', 'Misread', 'Calculation', 'Guess', 'Memory', 'Time pressure', 'Careless mistake'
  ];

  const filteredLogs = errorLogs.filter(item => {
    if (filterType !== 'All' && item.mistakeType !== filterType) return false;
    if (filterRevised === 'Pending' && item.revised) return false;
    if (filterRevised === 'Revised' && !item.revised) return false;
    return true;
  });

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 space-y-6">
      <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 text-xs font-semibold mb-2">
          <AlertTriangle className="w-3.5 h-3.5" />
          <span>Mistake Diagnostics & Review</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          CUET Error Notebook
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
          Review every practice & mock mistake classified by mistake type (Concept Gap, Calculation, Misread, Memory) to eliminate repeat errors.
        </p>
      </div>

      {/* Filters Bar */}
      <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-slate-500">Mistake Type:</span>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="p-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white"
          >
            <option value="All">All Mistake Types</option>
            {mistakeTypes.map(m => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-semibold text-slate-500">Status:</span>
          <select
            value={filterRevised}
            onChange={(e) => setFilterRevised(e.target.value as any)}
            className="p-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white"
          >
            <option value="All">All Statuses ({errorLogs.length})</option>
            <option value="Pending">Pending Review ({errorLogs.filter(e => !e.revised).length})</option>
            <option value="Revised">Revised ({errorLogs.filter(e => e.revised).length})</option>
          </select>
        </div>
      </div>

      {/* Logs List */}
      {filteredLogs.length === 0 ? (
        <div className="text-center py-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-slate-400 text-xs">
          <CheckCircle2 className="w-8 h-8 mx-auto text-emerald-500 mb-2 opacity-80" />
          No errors recorded matching this filter. Incorrect questions from practice and mock tests will automatically appear here!
        </div>
      ) : (
        <div className="space-y-4">
          {filteredLogs.map((log) => (
            <div
              key={log.id}
              className={`p-5 rounded-2xl border transition-all space-y-3 ${
                log.revised
                  ? 'bg-slate-50/70 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 opacity-75'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm'
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-700 dark:text-slate-300">{log.subject}</span>
                  <span className="text-slate-400">•</span>
                  <span className="text-slate-500">{log.topic}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded font-bold text-[10px] bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-200 border border-rose-300 dark:border-rose-900">
                    {log.mistakeType}
                  </span>
                  <span className="text-[11px] text-slate-400">{log.dateAdded}</span>
                </div>
              </div>

              <div className="text-sm font-semibold text-slate-900 dark:text-white leading-relaxed">
                {log.questionText}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 text-rose-900 dark:text-rose-200">
                  <span className="font-bold block text-[10px] uppercase">Your Response:</span>
                  Option {String.fromCharCode(65 + log.userAnswer)} (Incorrect)
                </div>
                <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60 text-emerald-900 dark:text-emerald-200">
                  <span className="font-bold block text-[10px] uppercase">Official Correct Answer:</span>
                  Option {String.fromCharCode(65 + log.correctAnswer)} (Correct)
                </div>
              </div>

              <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700/80 text-xs text-slate-700 dark:text-slate-300">
                <span className="font-bold text-blue-600 dark:text-blue-400 block mb-0.5">Explanation & Concept Rule:</span>
                {log.explanation}
              </div>

              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <button
                  onClick={() => markErrorRevised(log.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-colors ${
                    log.revised
                      ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200'
                      : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {log.revised ? 'Revised ✓' : 'Mark as Revised'}
                </button>

                <button
                  onClick={() => removeErrorLog(log.id)}
                  className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  title="Remove Entry"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
