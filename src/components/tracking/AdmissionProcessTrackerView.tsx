import React, { useState } from 'react';
import { Building2, ArrowRight, ShieldCheck, CheckCircle2, AlertTriangle, ExternalLink } from 'lucide-react';
import { universitiesData } from '../../data/universities';

export const AdmissionProcessTrackerView: React.FC = () => {
  const [selectedUnivId, setSelectedUnivId] = useState<string>(universitiesData[0]?.universityId || '');
  const selectedUniv = universitiesData.find(u => u.universityId === selectedUnivId) || universitiesData[0];

  const cuetExamStages = [
    { title: "Registration & Application", desc: "Online application on exams.nta.ac.in/CUET-UG or CUET-PG", status: "Active" },
    { title: "Application Correction", desc: "Limited window to correct personal info, subjects & universities", status: "Upcoming" },
    { title: "City Intimation & Admit Card", desc: "Download advanced city slip and admit card with shift timings", status: "Upcoming" },
    { title: "Exam Conduct", desc: "Hybrid (OMR Pen-Paper / CBT) shifts nationwide", status: "Upcoming" },
    { title: "Provisional Answer Key", desc: "Key challenge window with ₹200 fee per questioned item", status: "Upcoming" },
    { title: "Final NTA Scorecard", desc: "NTA publishes percentile and normalized scores (No direct admission)", status: "Upcoming" }
  ];

  const universityStages = [
    { title: "Stage 1: University Portal Registration", desc: `Register separately on ${selectedUniv.shortName} portal (${selectedUniv.admissionPortal}) using CUET Application Number`, status: "Mandatory" },
    { title: "Stage 2: Programme & College Preference Locking", desc: "Select and rank eligible academic programmes and constituent colleges", status: "Mandatory" },
    { title: "Stage 3: Merit Generation & Document Check", desc: `University verifies subject matching rules (e.g. ${selectedUniv.shortName} Class 12 passed subjects rule)`, status: "Evaluation" },
    { title: "Stage 4: Multi-Round Seat Allocation", desc: "Centralized counselling rounds (Round 1, Round 2, Mop-Up / Spot Admissions)", status: "Allocation" },
    { title: "Stage 5: Admission Acceptance & Fee Payment", desc: "Accept allocated seat online and pay semester tuition fee to freeze admission", status: "Final Admission" }
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 space-y-6">
      <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-2">
          <Building2 className="w-3.5 h-3.5" />
          <span>Two-Stage Pipeline Tracker</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          Admission Process & Counselling Tracker
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
          Distinguish between the <strong>NTA CUET Examination Phase</strong> and the independent <strong>University Admission / Seat Allocation Phase</strong>.
        </p>
      </div>

      {/* University Selector for Process 2 */}
      <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-wrap items-center justify-between gap-3">
        <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">
          Select University to View Specific Counselling Workflow:
        </div>
        <select
          value={selectedUnivId}
          onChange={(e) => setSelectedUnivId(e.target.value)}
          className="text-xs p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold"
        >
          {universitiesData.map(u => (
            <option key={u.universityId} value={u.universityId}>
              {u.name} ({u.shortName})
            </option>
          ))}
        </select>
      </div>

      {/* Side-by-Side Two Pipeline Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Pipeline 1: NTA CUET Exam */}
        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <div>
              <span className="text-[10px] uppercase font-bold text-blue-600">Phase 1</span>
              <h3 className="font-extrabold text-sm text-slate-900 dark:text-white">NTA CUET Examination</h3>
            </div>
            <span className="text-xs font-mono text-slate-400">Scorecard Only</span>
          </div>

          <div className="space-y-3">
            {cuetExamStages.map((st, i) => (
              <div key={i} className="flex items-start gap-3 text-xs">
                <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-200 flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <div className="font-bold text-slate-800 dark:text-slate-200">{st.title}</div>
                  <div className="text-slate-500 text-[11px] leading-relaxed">{st.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 text-[11px] text-slate-600 dark:text-slate-400">
            NTA's responsibility ends after declaration of CUET scorecards. NTA does not allocate college seats.
          </div>
        </div>

        {/* Pipeline 2: University Admission */}
        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-blue-300 dark:border-blue-900 shadow-sm space-y-4 ring-1 ring-blue-500/20">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <div>
              <span className="text-[10px] uppercase font-bold text-emerald-600">Phase 2 (Crucial)</span>
              <h3 className="font-extrabold text-sm text-slate-900 dark:text-white">{selectedUniv.shortName} Admission & CSAS</h3>
            </div>
            <a
              href={selectedUniv.admissionPortal}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-blue-600 hover:underline flex items-center gap-1 font-semibold"
            >
              Portal <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="space-y-3">
            {universityStages.map((st, i) => (
              <div key={i} className="flex items-start gap-3 text-xs">
                <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-200 flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <div className="font-bold text-slate-800 dark:text-slate-200">{st.title}</div>
                  <div className="text-slate-500 text-[11px] leading-relaxed">{st.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 text-[11px] text-amber-950 dark:text-amber-200">
            <strong>CRITICAL:</strong> Missing {selectedUniv.shortName}'s separate admission registration deadline means you cannot participate in seat allocation, regardless of your CUET score!
          </div>
        </div>
      </div>
    </div>
  );
};
