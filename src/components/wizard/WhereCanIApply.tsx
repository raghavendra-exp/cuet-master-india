import React, { useState } from 'react';
import { Compass, Search, Building2, CheckCircle2, AlertCircle, ExternalLink, BookmarkPlus } from 'lucide-react';
import { universitiesData } from '../../data/universities';
import { programmesData } from '../../data/programmes';
import { InstitutionType } from '../../types';
import { useUserProgress } from '../../context/UserProgressContext';

export const WhereCanIApply: React.FC = () => {
  const { addTargetUniversity } = useUserProgress();

  const [selectedDegree, setSelectedDegree] = useState<string>('All');
  const [preferredState, setPreferredState] = useState<string>('All');
  const [preferredType, setPreferredType] = useState<string>('All');
  const [cuetSubjects, setCuetSubjects] = useState<string[]>(["English", "Economics", "Mathematics / Applied Mathematics"]);
  const [hasGat, setHasGat] = useState<boolean>(true);

  const states = Array.from(new Set(universitiesData.map(u => u.state))).sort();
  const degrees = Array.from(new Set(programmesData.map(p => p.degree))).sort();

  const handleToggleCuetSubj = (subj: string) => {
    setCuetSubjects(prev =>
      prev.includes(subj) ? prev.filter(s => s !== subj) : [...prev, subj]
    );
  };

  // Evaluation of potentially eligible universities and programmes
  const eligibleResults = programmesData.filter(prog => {
    if (selectedDegree !== 'All' && prog.degree !== selectedDegree) return false;

    const univ = universitiesData.find(u => u.universityId === prog.universityId);
    if (!univ) return false;

    if (preferredState !== 'All' && univ.state !== preferredState) return false;
    if (preferredType !== 'All' && univ.type !== preferredType) return false;

    if (prog.isGatRequired && !hasGat) return false;

    return true;
  });

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 space-y-6">
      <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs font-semibold mb-2">
          <Compass className="w-3.5 h-3.5" />
          <span>Interactive University Recommender</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          "Where Can I Apply?" Tool
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
          Select your intended CUET subjects and preferences to discover institutions where you are <strong className="text-blue-600 dark:text-blue-400 font-semibold">Potentially Eligible</strong> under official admission criteria.
        </p>
      </div>

      {/* Preferences Filter Panel */}
      <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <h2 className="text-sm font-bold text-slate-900 dark:text-white">
          Your Target Criteria & CUET Papers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
              Desired Degree
            </label>
            <select
              value={selectedDegree}
              onChange={(e) => setSelectedDegree(e.target.value)}
              className="w-full text-xs p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
            >
              <option value="All">All Degrees</option>
              {degrees.map(d => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
              Preferred State / UT
            </label>
            <select
              value={preferredState}
              onChange={(e) => setPreferredState(e.target.value)}
              className="w-full text-xs p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
            >
              <option value="All">All States / All India</option>
              {states.map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
              University Type
            </label>
            <select
              value={preferredType}
              onChange={(e) => setPreferredType(e.target.value)}
              className="w-full text-xs p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
            >
              <option value="All">All Types (Central, State, Deemed)</option>
              <option value="Central">Central Universities</option>
              <option value="State">State Universities</option>
              <option value="Deemed">Deemed Universities</option>
              <option value="Private">Private Universities</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
            Are you appearing in the General Aptitude Test (GAT)?
          </label>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setHasGat(true)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                hasGat ? 'bg-blue-600 text-white border-blue-600' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-300 dark:border-slate-700'
              }`}
            >
              Yes, I am taking GAT (Section III)
            </button>
            <button
              type="button"
              onClick={() => setHasGat(false)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                !hasGat ? 'bg-blue-600 text-white border-blue-600' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-300 dark:border-slate-700'
              }`}
            >
              No GAT
            </button>
          </div>
        </div>
      </div>

      {/* Results List */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span>Found <strong className="text-slate-900 dark:text-white">{eligibleResults.length}</strong> potentially eligible programmes</span>
          <span className="text-[11px] text-amber-600 dark:text-amber-400 font-medium">Status: Potentially Eligible (Verify specific prospectus)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {eligibleResults.map(prog => {
            const univ = universitiesData.find(u => u.universityId === prog.universityId);
            if (!univ) return null;

            return (
              <div
                key={prog.programmeId}
                className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-blue-400 transition-all space-y-3 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[10px] uppercase font-bold tracking-wide px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
                      {univ.type} University
                    </span>
                    <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Potentially Eligible
                    </span>
                  </div>

                  <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                    {prog.name}
                  </h3>
                  <div className="text-xs text-slate-600 dark:text-slate-400">
                    {univ.name} ({univ.shortName}) • {univ.city}, {univ.state}
                  </div>

                  <div className="mt-3 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 text-[11px] space-y-1">
                    <div className="text-slate-700 dark:text-slate-300">
                      <span className="font-semibold text-slate-900 dark:text-white">CUET Requirement:</span> {prog.cuetSubjectsRequired.join('; ')}
                    </div>
                    {prog.tuitionFeePerYear && (
                      <div className="text-slate-500">
                        <span className="font-medium text-slate-700 dark:text-slate-300">Estimated Fee:</span> {prog.tuitionFeePerYear}
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                  <a
                    href={univ.admissionPortal}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 dark:text-blue-400 font-semibold hover:underline flex items-center gap-1"
                  >
                    Admission Portal <ExternalLink className="w-3 h-3" />
                  </a>

                  <button
                    onClick={() => addTargetUniversity({
                      universityId: univ.universityId,
                      programmeId: prog.programmeId,
                      requiredSubjects: prog.cuetSubjectsRequired,
                      applicationStatus: 'Not Started'
                    })}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 text-slate-700 dark:text-slate-300 hover:text-blue-600 font-medium transition-colors"
                  >
                    <BookmarkPlus className="w-3.5 h-3.5" />
                    + Target List
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
