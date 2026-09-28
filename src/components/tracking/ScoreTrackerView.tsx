import React from 'react';
import { BarChart3, TrendingUp, Target, Award, Clock, AlertTriangle } from 'lucide-react';
import { useUserProgress } from '../../context/UserProgressContext';

export const ScoreTrackerView: React.FC = () => {
  const { mockHistory, errorLogs, targetList } = useUserProgress();

  const totalMocks = mockHistory.length;
  const avgAccuracy = totalMocks > 0
    ? Math.round(mockHistory.reduce((acc, m) => acc + m.accuracy, 0) / totalMocks)
    : 0;

  const totalErrors = errorLogs.length;
  const revisedErrors = errorLogs.filter(e => e.revised).length;

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 space-y-6">
      <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-2">
          <BarChart3 className="w-3.5 h-3.5" />
          <span>Performance Analytics</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          CUET Score & Accuracy Tracker
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
          Monitor your score trajectory, accuracy trends, speed per question, and diagnostic error reduction.
        </p>
      </div>

      {/* Highlights Metrics Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Mocks Taken</span>
          <div className="text-2xl font-black text-blue-600">{totalMocks}</div>
          <span className="text-[11px] text-slate-400">Total Simulations</span>
        </div>

        <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Average Accuracy</span>
          <div className="text-2xl font-black text-emerald-600">{avgAccuracy}%</div>
          <span className="text-[11px] text-slate-400">Target: 85%+</span>
        </div>

        <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Error Logs</span>
          <div className="text-2xl font-black text-rose-600">{totalErrors}</div>
          <span className="text-[11px] text-slate-400">{revisedErrors} Revised</span>
        </div>

        <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Target Shortlist</span>
          <div className="text-2xl font-black text-indigo-600">{targetList.length}</div>
          <span className="text-[11px] text-slate-400">Programmes Tracked</span>
        </div>
      </div>

      {/* Visual Mock Trajectory Bar Chart */}
      <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-blue-500" />
          Mock Test Performance History
        </h3>

        {totalMocks === 0 ? (
          <div className="text-center py-10 text-slate-400 text-xs">
            No mock tests completed yet. Take a realistic mock test to see your score trajectory and accuracy curves!
          </div>
        ) : (
          <div className="space-y-3">
            {mockHistory.map((m) => (
              <div key={m.id} className="space-y-1 text-xs">
                <div className="flex items-center justify-between text-slate-700 dark:text-slate-300">
                  <span className="font-semibold truncate max-w-xs">{m.title}</span>
                  <span className="font-mono font-bold text-blue-600">{m.score} / {m.maxScore} ({m.accuracy}%)</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                  <div
                    className="bg-blue-600 h-full rounded-full transition-all"
                    style={{ width: `${Math.max(5, Math.min(100, (m.score / m.maxScore) * 100))}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
