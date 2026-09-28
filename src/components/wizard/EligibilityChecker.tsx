import React, { useState } from 'react';
import { FileCheck2, ExternalLink, AlertTriangle, ShieldCheck, CheckCircle2, BookmarkPlus } from 'lucide-react';
import { universitiesData } from '../../data/universities';
import { programmesData } from '../../data/programmes';
import { useLanguage } from '../../context/LanguageContext';
import { useUserProgress } from '../../context/UserProgressContext';

export const EligibilityChecker: React.FC = () => {
  const { t } = useLanguage();
  const { addTargetUniversity } = useUserProgress();

  const [selectedUnivId, setSelectedUnivId] = useState<string>(universitiesData[0]?.universityId || '');
  const [selectedProgId, setSelectedProgId] = useState<string>('');
  const [candidateCategory, setCandidateCategory] = useState<string>('General');
  const [candidate12Marks, setCandidate12Marks] = useState<string>('82');
  const [candidateCuetScore, setCandidateCuetScore] = useState<string>('680');

  const univProgrammes = programmesData.filter(p => p.universityId === selectedUnivId);
  const currentProg = programmesData.find(p => p.programmeId === selectedProgId) || univProgrammes[0];
  const currentUniv = universitiesData.find(u => u.universityId === selectedUnivId);

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 space-y-6">
      <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-2">
          <FileCheck2 className="w-3.5 h-3.5" />
          <span>Official University Ordinances Engine</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          CUET Eligibility Checker
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
          Detailed breakdown of official subject requirements, language thresholds, reservation matrices, and admissions portals.
        </p>
      </div>

      {/* Input Selector Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
            Participating University
          </label>
          <select
            value={selectedUnivId}
            onChange={(e) => {
              setSelectedUnivId(e.target.value);
              setSelectedProgId('');
            }}
            className="w-full text-xs p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
          >
            {universitiesData.map(u => (
              <option key={u.universityId} value={u.universityId}>
                {u.name} ({u.shortName})
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
            Target Programme
          </label>
          <select
            value={selectedProgId || currentProg?.programmeId || ''}
            onChange={(e) => setSelectedProgId(e.target.value)}
            className="w-full text-xs p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
          >
            {univProgrammes.map(p => (
              <option key={p.programmeId} value={p.programmeId}>
                {p.name} ({p.degree})
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
            Social Category
          </label>
          <select
            value={candidateCategory}
            onChange={(e) => setCandidateCategory(e.target.value)}
            className="w-full text-xs p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
          >
            <option value="General">UR / Unreserved (General)</option>
            <option value="OBC-NCL">OBC-NCL (Central List)</option>
            <option value="EWS">Economically Weaker Section (EWS)</option>
            <option value="SC">Scheduled Caste (SC)</option>
            <option value="ST">Scheduled Tribe (ST)</option>
            <option value="PwBD">PwBD (Persons with Benchmark Disabilities)</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
            Class 12 Marks (%)
          </label>
          <input
            type="number"
            value={candidate12Marks}
            onChange={(e) => setCandidate12Marks(e.target.value)}
            className="w-full text-xs p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
          />
        </div>
      </div>

      {/* Output Comprehensive Matrix */}
      {currentProg && currentUniv && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
          {/* Header */}
          <div className="p-5 bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs px-2 py-0.5 rounded font-bold bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
                  {currentProg.level}
                </span>
                <span className="text-xs text-slate-500">{currentProg.department}</span>
              </div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                {currentProg.name}
              </h2>
              <div className="text-xs text-slate-500">
                {currentUniv.name} • {currentUniv.city}, {currentUniv.state}
              </div>
            </div>

            <button
              onClick={() => addTargetUniversity({
                universityId: currentUniv.universityId,
                programmeId: currentProg.programmeId,
                requiredSubjects: currentProg.cuetSubjectsRequired,
                applicationStatus: 'Not Started'
              })}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors shadow-sm"
            >
              <BookmarkPlus className="w-4 h-4" />
              Save to My Target List
            </button>
          </div>

          {/* Details Table */}
          <div className="divide-y divide-slate-100 dark:divide-slate-800 text-xs">
            <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
              <span className="font-semibold text-slate-500 dark:text-slate-400">Official Eligibility Text:</span>
              <span className="sm:col-span-2 text-slate-900 dark:text-slate-100 leading-relaxed font-medium">
                {currentProg.eligibilityText}
              </span>
            </div>

            <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-2 bg-blue-50/30 dark:bg-blue-950/10">
              <span className="font-semibold text-blue-800 dark:text-blue-300">Required CUET Subjects:</span>
              <div className="sm:col-span-2 space-y-1">
                {currentProg.cuetSubjectsRequired.map((sub, i) => (
                  <div key={i} className="flex items-start gap-1.5 font-semibold text-slate-900 dark:text-white">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>{sub}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
              <span className="font-semibold text-slate-500 dark:text-slate-400">Class 12 Prerequisite:</span>
              <span className="sm:col-span-2 text-slate-800 dark:text-slate-200">
                {currentProg.requiredClass12Subjects?.join(', ') || 'Any recognized stream pass in 10+2'} (Min Marks: {currentProg.minimumClass12Marks || 'Passing marks'})
              </span>
            </div>

            <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
              <span className="font-semibold text-slate-500 dark:text-slate-400">General Aptitude Test (GAT):</span>
              <span className="sm:col-span-2">
                {currentProg.isGatRequired ? (
                  <span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-bold">
                    YES - Section III (GAT) Compulsory
                  </span>
                ) : (
                  <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    Not Required for this Programme
                  </span>
                )}
              </span>
            </div>

            <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
              <span className="font-semibold text-slate-500 dark:text-slate-400">Special University Rules:</span>
              <ul className="sm:col-span-2 space-y-1 list-disc list-inside text-slate-700 dark:text-slate-300">
                {currentUniv.specialRules.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>

            <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
              <span className="font-semibold text-slate-500 dark:text-slate-400">Reservation Quota ({candidateCategory}):</span>
              <span className="sm:col-span-2 text-slate-800 dark:text-slate-200">
                {candidateCategory === 'OBC-NCL' && `OBC-NCL Central Pool: ${currentUniv.reservationPolicy.obc_ncl}`}
                {candidateCategory === 'SC' && `SC Central Pool: ${currentUniv.reservationPolicy.sc}`}
                {candidateCategory === 'ST' && `ST Central Pool: ${currentUniv.reservationPolicy.st}`}
                {candidateCategory === 'EWS' && `EWS Pool: ${currentUniv.reservationPolicy.ews}`}
                {candidateCategory === 'PwBD' && `PwBD Quota: ${currentUniv.reservationPolicy.pwbd}`}
                {candidateCategory === 'General' && 'Unreserved / Open Merit Pool (All candidates eligible)'}
                <span className="block text-[11px] text-slate-500 mt-1">{currentUniv.reservationPolicy.officialNotes}</span>
              </span>
            </div>

            <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
              <span className="font-semibold text-slate-500 dark:text-slate-400">Admission Process:</span>
              <span className="sm:col-span-2 text-slate-700 dark:text-slate-300">
                {currentProg.admissionProcess}
              </span>
            </div>

            <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-2 bg-slate-50 dark:bg-slate-950/30">
              <span className="font-semibold text-slate-500 dark:text-slate-400">Official Prospectus & Source:</span>
              <div className="sm:col-span-2 flex flex-wrap items-center gap-3">
                <a
                  href={currentProg.officialSource}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                >
                  Official Prospectus Document <ExternalLink className="w-3 h-3" />
                </a>
                <span className="text-slate-400">•</span>
                <a
                  href={currentUniv.admissionPortal}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                >
                  University Admission Portal <ExternalLink className="w-3 h-3" />
                </a>
                <span className="text-slate-400">•</span>
                <span className="text-slate-500">Last Verified: {currentProg.lastVerified}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
