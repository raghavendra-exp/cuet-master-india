import React, { useState } from 'react';
import { Scale, CheckCircle2, ExternalLink, ShieldCheck } from 'lucide-react';
import { universitiesData } from '../../data/universities';
import { programmesData } from '../../data/programmes';
import { University } from '../../types';

export const UniversityComparison: React.FC = () => {
  const [univAId, setUnivAId] = useState<string>(universitiesData[0]?.universityId || '');
  const [univBId, setUnivBId] = useState<string>(universitiesData[1]?.universityId || '');

  const univA = universitiesData.find(u => u.universityId === univAId) || universitiesData[0];
  const univB = universitiesData.find(u => u.universityId === univBId) || universitiesData[1];

  const progsA = programmesData.filter(p => p.universityId === univA.universityId);
  const progsB = programmesData.filter(p => p.universityId === univB.universityId);

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 space-y-6">
      <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-2">
          <Scale className="w-3.5 h-3.5" />
          <span>Factual Side-by-Side Comparison</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          University & Admission Policy Comparison
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
          Compare institutions factually on location, governance type, admission rules, reservation matrices, and counselling systems.
        </p>
      </div>

      <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-slate-800/80 text-xs text-slate-600 dark:text-slate-300">
        <strong>FACTUAL COMPARISON POLICY:</strong> We present strictly verified administrative parameters and do not publish arbitrary or subjective "best university" rank metrics.
      </div>

      {/* Selectors Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
            Select University A
          </label>
          <select
            value={univAId}
            onChange={(e) => setUnivAId(e.target.value)}
            className="w-full text-xs p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold"
          >
            {universitiesData.map(u => (
              <option key={u.universityId} value={u.universityId}>
                {u.name} ({u.shortName})
              </option>
            ))}
          </select>
        </div>

        <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
            Select University B
          </label>
          <select
            value={univBId}
            onChange={(e) => setUnivBId(e.target.value)}
            className="w-full text-xs p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold"
          >
            {universitiesData.map(u => (
              <option key={u.universityId} value={u.universityId}>
                {u.name} ({u.shortName})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Side-by-Side Comparison Table */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm text-xs">
        <div className="grid grid-cols-2 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 p-4 font-black text-sm text-slate-900 dark:text-white">
          <div className="pr-4 border-r border-slate-200 dark:border-slate-800">
            {univA.name} ({univA.shortName})
          </div>
          <div className="pl-4">
            {univB.name} ({univB.shortName})
          </div>
        </div>

        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          {/* Institution Type & Location */}
          <div className="grid grid-cols-2 p-4">
            <div className="pr-4 border-r border-slate-100 dark:border-slate-800 space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Type & Location</span>
              <div className="font-semibold text-slate-800 dark:text-slate-200">{univA.type} University</div>
              <div className="text-slate-500">{univA.city}, {univA.state}</div>
            </div>
            <div className="pl-4 space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Type & Location</span>
              <div className="font-semibold text-slate-800 dark:text-slate-200">{univB.type} University</div>
              <div className="text-slate-500">{univB.city}, {univB.state}</div>
            </div>
          </div>

          {/* Admission / Counselling Portal */}
          <div className="grid grid-cols-2 p-4">
            <div className="pr-4 border-r border-slate-100 dark:border-slate-800 space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Admission & Counselling System</span>
              <div className="font-semibold text-blue-600 dark:text-blue-400">{univA.counsellingPortal || univA.admissionPortal}</div>
              <div className="text-[11px] text-slate-500">Must register separately after CUET results</div>
            </div>
            <div className="pl-4 space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Admission & Counselling System</span>
              <div className="font-semibold text-blue-600 dark:text-blue-400">{univB.counsellingPortal || univB.admissionPortal}</div>
              <div className="text-[11px] text-slate-500">Must register separately after CUET results</div>
            </div>
          </div>

          {/* Critical University Rules */}
          <div className="grid grid-cols-2 p-4 bg-slate-50/50 dark:bg-slate-800/30">
            <div className="pr-4 border-r border-slate-100 dark:border-slate-800 space-y-1">
              <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400 uppercase">Critical Specific Rules</span>
              <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
                {univA.specialRules.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
            <div className="pl-4 space-y-1">
              <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400 uppercase">Critical Specific Rules</span>
              <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
                {univB.specialRules.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Reservation Policy */}
          <div className="grid grid-cols-2 p-4">
            <div className="pr-4 border-r border-slate-100 dark:border-slate-800 space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Reservation Roster</span>
              <div className="text-slate-700 dark:text-slate-300">
                OBC: {univA.reservationPolicy.obc_ncl} | SC: {univA.reservationPolicy.sc} | ST: {univA.reservationPolicy.st} | EWS: {univA.reservationPolicy.ews}
              </div>
            </div>
            <div className="pl-4 space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Reservation Roster</span>
              <div className="text-slate-700 dark:text-slate-300">
                OBC: {univB.reservationPolicy.obc_ncl} | SC: {univB.reservationPolicy.sc} | ST: {univB.reservationPolicy.st} | EWS: {univB.reservationPolicy.ews}
              </div>
            </div>
          </div>

          {/* Programmes Count */}
          <div className="grid grid-cols-2 p-4">
            <div className="pr-4 border-r border-slate-100 dark:border-slate-800">
              <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">CUET Programmes Listed</span>
              <span className="font-bold text-slate-800 dark:text-slate-200">{progsA.length} Programmes</span>
            </div>
            <div className="pl-4">
              <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">CUET Programmes Listed</span>
              <span className="font-bold text-slate-800 dark:text-slate-200">{progsB.length} Programmes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
