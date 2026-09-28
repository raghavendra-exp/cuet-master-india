import React, { useState } from 'react';
import { Briefcase, ArrowRight, ShieldCheck, GraduationCap, Building2 } from 'lucide-react';
import { careerPathsData } from '../../data/careerPathsData';

export const CareerDiscoveryView: React.FC<{ setCurrentTab: (tab: string) => void }> = ({ setCurrentTab }) => {
  const [selectedStream, setSelectedStream] = useState<string>('Science');

  const streams = ['Science', 'Commerce', 'Arts/Humanities', 'Vocational'];

  const filteredPaths = careerPathsData.filter(c => c.stream === selectedStream);

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 space-y-6">
      <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-2">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Post-12th & Postgraduate Guidance</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          What Can I Do After Class 12?
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
          Explore degree options, required CUET test combinations, premier universities, and career pathways corresponding to your school background.
        </p>
      </div>

      {/* Stream Tabs */}
      <div className="flex gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
        {streams.map(st => (
          <button
            key={st}
            onClick={() => setSelectedStream(st)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedStream === st
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-blue-400'
            }`}
          >
            {st} Stream
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {filteredPaths.map((path) => (
          <div
            key={path.id}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4"
          >
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300">
                {path.stream} Background
              </span>
              <h2 className="text-lg font-black text-slate-900 dark:text-white mt-1">
                {path.degree}
              </h2>
            </div>

            {/* CUET Subjects & Universities */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700/80 space-y-1">
                <span className="font-bold text-slate-900 dark:text-white block">Required CUET Subjects:</span>
                <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-0.5">
                  {path.requiredCuetSubjects.map((sub, i) => (
                    <li key={i}>{sub}</li>
                  ))}
                </ul>
              </div>

              <div className="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700/80 space-y-1">
                <span className="font-bold text-slate-900 dark:text-white block">Premier Participating Universities:</span>
                <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-0.5">
                  {path.popularUniversities.map((u, i) => (
                    <li key={i}>{u}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Career Opportunities */}
            <div className="space-y-1.5 text-xs">
              <span className="font-bold text-slate-900 dark:text-white">Representative Career Opportunities:</span>
              <div className="flex flex-wrap gap-1.5">
                {path.careerOpportunities.map((op, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200 border border-blue-200 dark:border-blue-900 font-medium">
                    {op}
                  </span>
                ))}
              </div>
            </div>

            {/* Further Studies */}
            <div className="space-y-1 text-xs">
              <span className="font-bold text-slate-900 dark:text-white">Higher Studies / Postgraduate Scope:</span>
              <div className="text-slate-600 dark:text-slate-400">
                {path.furtherStudies.join(' • ')}
              </div>
            </div>

            <div className="p-2.5 bg-slate-100 dark:bg-slate-800 text-[11px] text-slate-500 rounded-xl">
              <strong>Notice:</strong> {path.informationalNotice}
            </div>

            <div className="pt-2 flex items-center justify-between">
              <button
                onClick={() => setCurrentTab('subject-wizard')}
                className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
              >
                Check Subject Combinations in Wizard <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
