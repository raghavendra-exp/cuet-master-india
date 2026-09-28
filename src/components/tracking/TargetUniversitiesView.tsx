import React, { useState } from 'react';
import { Compass, Trash2, CheckCircle2, ExternalLink, ShieldCheck, FileText, CheckSquare, Square } from 'lucide-react';
import { useUserProgress } from '../../context/UserProgressContext';
import { universitiesData } from '../../data/universities';
import { programmesData } from '../../data/programmes';
import { TargetUniversityItem } from '../../types';

export const TargetUniversitiesView: React.FC = () => {
  const { targetList, removeTargetUniversity, updateTargetStatus, completedDocs, toggleDocCompleted } = useUserProgress();
  const [activeTab, setActiveTab] = useState<'targets' | 'documents'>('targets');

  const checklistDocs = [
    { id: 'doc-photo', name: 'Passport Size Photograph (Recent, 10kb - 200kb, White Background)' },
    { id: 'doc-sig', name: 'Candidate Signature (Clear Black Ink on White Paper, 4kb - 30kb)' },
    { id: 'doc-10th', name: 'Class 10 (Secondary) Certificate / Marksheet (DOB Proof)' },
    { id: 'doc-12th', name: 'Class 12 (Senior Secondary) Marksheet / Admit Card (if appearing)' },
    { id: 'doc-cat', name: 'Category Certificate (SC/ST/OBC-NCL/EWS issued after March 31 of admission year)' },
    { id: 'doc-pwbd', name: 'PwBD / Disability Certificate from authorized medical board (if applicable)' },
    { id: 'doc-id', name: 'Government Photo ID Proof (Aadhaar Card / Passport / Voter ID)' },
    { id: 'doc-migration', name: 'Migration / Transfer Certificate from School/College' }
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 space-y-6">
      <div className="border-b border-slate-200 dark:border-slate-800 pb-4 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>My Admission Command Center</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Target Universities & Application Tracker
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
            Track your shortlisted universities, admission portal application stages, counselling phases, and mandatory document verification checklists.
          </p>
        </div>

        <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold">
          <button
            onClick={() => setActiveTab('targets')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'targets' ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm' : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            My Target List ({targetList.length})
          </button>
          <button
            onClick={() => setActiveTab('documents')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'documents' ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm' : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            Document Checklist ({completedDocs.length}/{checklistDocs.length})
          </button>
        </div>
      </div>

      {activeTab === 'targets' && (
        <div className="space-y-4">
          {targetList.length === 0 ? (
            <div className="p-8 text-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 text-slate-400 text-xs">
              No target universities added yet. Browse the Universities Explorer or Course Finder to add institutions to your shortlist!
            </div>
          ) : (
            targetList.map((item) => {
              const univ = universitiesData.find(u => u.universityId === item.universityId);
              const prog = programmesData.find(p => p.programmeId === item.programmeId);

              if (!univ || !prog) return null;

              return (
                <div
                  key={`${item.universityId}-${item.programmeId}`}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
                          {univ.type} University
                        </span>
                        <span className="text-xs text-slate-500">{univ.city}, {univ.state}</span>
                      </div>
                      <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
                        {univ.name} ({univ.shortName}) — {prog.name}
                      </h3>
                      <div className="text-xs text-blue-600 dark:text-blue-400 font-semibold mt-0.5">
                        Required CUET: {item.requiredSubjects.join('; ')}
                      </div>
                    </div>

                    <button
                      onClick={() => removeTargetUniversity(item.universityId, item.programmeId)}
                      className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                      title="Remove from target list"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Application Process Tracker Stages */}
                  <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
                    <span className="font-bold text-slate-700 dark:text-slate-300 block">
                      University Admission Pipeline Status:
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                      {(['Not Started', 'Registered', 'Applied', 'Counselling', 'Admitted'] as const).map((st) => {
                        const isCurrent = item.applicationStatus === st;
                        return (
                          <button
                            key={st}
                            onClick={() => updateTargetStatus(item.universityId, item.programmeId, st)}
                            className={`p-2 rounded-xl text-center text-xs font-semibold border transition-all ${
                              isCurrent
                                ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                                : 'bg-slate-50 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-blue-400'
                            }`}
                          >
                            {st}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center justify-between text-xs text-slate-500">
                    <span className="text-[11px]">Counselling Portal: {univ.admissionPortal}</span>
                    <a
                      href={univ.admissionPortal}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 dark:text-blue-400 font-bold hover:underline flex items-center gap-1"
                    >
                      Open University Portal ↗
                    </a>
                  </div>
                </div>
              );
            })
          )}
        </div>
      )}

      {activeTab === 'documents' && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              Mandatory Admission Documents Checklist
            </h3>
            <span className="text-xs font-mono font-bold text-blue-600">
              {completedDocs.length} / {checklistDocs.length} Ready
            </span>
          </div>

          <div className="p-3 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-300 dark:border-amber-800 text-[11px] text-amber-900 dark:text-amber-200">
            <strong>OFFICIAL ADVISORY:</strong> Always check the latest official university prospectus instructions. OBC-NCL and EWS certificates must be in the central format issued on or after the prescribed cutoff date.
          </div>

          <div className="space-y-2.5 pt-2">
            {checklistDocs.map((doc) => {
              const isChecked = completedDocs.includes(doc.id);
              return (
                <div
                  key={doc.id}
                  onClick={() => toggleDocCompleted(doc.id)}
                  className={`p-3 rounded-xl border flex items-center gap-3 cursor-pointer select-none transition-all ${
                    isChecked
                      ? 'bg-emerald-50/50 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800/80 text-emerald-950 dark:text-emerald-200'
                      : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50'
                  }`}
                >
                  {isChecked ? (
                    <CheckSquare className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  ) : (
                    <Square className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  )}
                  <span className={`text-xs font-medium ${isChecked ? 'line-through opacity-70' : ''}`}>
                    {doc.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
