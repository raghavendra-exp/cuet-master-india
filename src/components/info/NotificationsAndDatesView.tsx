import React, { useState } from 'react';
import { BellRing, CalendarDays, ExternalLink, AlertCircle, Clock, CheckCircle2 } from 'lucide-react';
import { notificationsData, importantDatesData } from '../../data/notificationsData';
import { useLanguage } from '../../context/LanguageContext';

export const NotificationsAndDatesView: React.FC = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'notifications' | 'dates'>('notifications');

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 space-y-6">
      <div className="border-b border-slate-200 dark:border-slate-800 pb-4 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-2">
            <BellRing className="w-3.5 h-3.5" />
            <span>NTA & University Official Circulars</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Official Notifications & Important Dates
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
            Real-time tracking of NTA application windows, admit cards, answer keys, university CSAS/CAP registrations, and seat allocation rounds.
          </p>
        </div>

        <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold">
          <button
            onClick={() => setActiveTab('notifications')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'notifications' ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm' : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            Notifications Center
          </button>
          <button
            onClick={() => setActiveTab('dates')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'dates' ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm' : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            Important Dates & Deadlines
          </button>
        </div>
      </div>

      {/* Notifications Tab */}
      {activeTab === 'notifications' && (
        <div className="space-y-4">
          {notificationsData.map((notif) => {
            const isImportant = notif.statusType === 'IMPORTANT';
            const isDeadline = notif.statusType === 'DEADLINE SOON';
            const isNew = notif.statusType === 'NEW';

            return (
              <div
                key={notif.id}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-2">
                    <span className={`w-2.5 h-2.5 rounded-full ${
                      isImportant ? 'bg-rose-500' :
                      isDeadline ? 'bg-amber-500' :
                      isNew ? 'bg-emerald-500' : 'bg-blue-500'
                    }`}></span>
                    <span className={`px-2 py-0.5 rounded font-extrabold text-[10px] uppercase tracking-wide ${
                      isImportant ? 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-200' :
                      isDeadline ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-200' :
                      isNew ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200' :
                      'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-200'
                    }`}>
                      {notif.statusType}
                    </span>
                    <span className="font-semibold text-slate-500">{notif.authority}</span>
                  </div>

                  <span className="text-[11px] text-slate-400">Published: {notif.publishDate}</span>
                </div>

                <h3 className="font-bold text-base text-slate-900 dark:text-white">
                  {language === 'hi' && notif.hindiTitle ? notif.hindiTitle : notif.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {notif.description}
                </p>

                <div className="pt-2 flex items-center justify-between text-xs">
                  {notif.deadlineDate ? (
                    <span className="text-rose-600 dark:text-rose-400 font-semibold flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> Deadline: {notif.deadlineDate}
                    </span>
                  ) : <span></span>}

                  <a
                    href={notif.officialSourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 font-bold hover:underline"
                  >
                    {notif.actionText || 'Read Official Notice'} <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Dates Tab */}
      {activeTab === 'dates' && (
        <div className="space-y-3">
          {importantDatesData.map((d) => (
            <div
              key={d.id}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm flex flex-wrap items-center justify-between gap-3 text-xs"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-0.5 rounded font-bold text-[10px] ${
                    d.status === 'Upcoming' ? 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-200' :
                    d.status === 'Today' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200 animate-pulse' :
                    'bg-slate-100 text-slate-600'
                  }`}>
                    {d.status}
                  </span>
                  <span className="font-semibold text-slate-500">{d.category}</span>
                </div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                  {d.title}
                </h4>
                <div className="text-slate-500">{d.event}</div>
              </div>

              <div className="text-right">
                <div className="font-mono font-bold text-slate-900 dark:text-white">
                  {d.startDate} {d.endDate ? `to ${d.endDate}` : ''}
                </div>
                <a
                  href={d.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 dark:text-blue-400 font-semibold hover:underline inline-flex items-center gap-1 mt-1 text-[11px]"
                >
                  Verify Portal <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
