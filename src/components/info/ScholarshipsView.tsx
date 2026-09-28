import React from 'react';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';
import { scholarshipsData } from '../../data/scholarshipsData';

export const ScholarshipsView: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 space-y-6">
      <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-2">
          <Award className="w-3.5 h-3.5" />
          <span>Financial Support & Schemes</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          University & Government Scholarships
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
          Central sector merit-cum-means schemes, UGC single girl child fellowships, and university fee waivers.
        </p>
      </div>

      <div className="space-y-4">
        {scholarshipsData.map((sch) => (
          <div
            key={sch.id}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-3"
          >
            <div className="flex items-center justify-between text-xs">
              <span className="px-2 py-0.5 rounded font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-200 text-[10px]">
                {sch.category}
              </span>
              <span className="text-slate-500 font-semibold">{sch.provider}</span>
            </div>

            <h3 className="font-bold text-base text-slate-900 dark:text-white">
              {sch.name}
            </h3>

            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80">
                <strong className="text-slate-900 dark:text-white block mb-0.5">Eligibility:</strong>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{sch.eligibility}</p>
              </div>

              <div className="p-3 rounded-xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900 text-blue-950 dark:text-blue-200">
                <strong className="block mb-0.5">Scholarship Benefits:</strong>
                <p className="leading-relaxed">{sch.benefits}</p>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between text-xs">
              <span className="text-slate-400 text-[11px]">Last Verified: {sch.lastVerified}</span>
              <a
                href={sch.applicationPortal}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 font-bold hover:underline"
              >
                Apply via National Scholarship Portal <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
