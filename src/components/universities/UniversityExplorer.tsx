import React, { useState } from 'react';
import { Building2, Search, MapPin, ExternalLink, ShieldCheck, BookmarkPlus, ArrowRight, X } from 'lucide-react';
import { universitiesData } from '../../data/universities';
import { programmesData } from '../../data/programmes';
import { University, InstitutionType } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { useUserProgress } from '../../context/UserProgressContext';

export const UniversityExplorer: React.FC = () => {
  const { language } = useLanguage();
  const { addTargetUniversity } = useUserProgress();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedState, setSelectedState] = useState<string>('All');
  const [selectedUniversity, setSelectedUniversity] = useState<University | null>(null);

  const states = Array.from(new Set(universitiesData.map(u => u.state))).sort();

  const filteredUniversities = universitiesData.filter(u => {
    if (selectedType !== 'All' && u.type !== selectedType) return false;
    if (selectedState !== 'All' && u.state !== selectedState) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return (
        u.name.toLowerCase().includes(q) ||
        u.shortName.toLowerCase().includes(q) ||
        u.city.toLowerCase().includes(q) ||
        u.state.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 space-y-6">
      <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-2">
          <Building2 className="w-3.5 h-3.5" />
          <span>Institutions Database</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          CUET Participating Universities
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
          Explore premier Central, State, Deemed, and Private universities with official counselling portals and degree requirements.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search university name, city, acronym..."
            className="w-full text-xs pl-9 pr-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
          />
        </div>

        <div>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full text-xs p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
          >
            <option value="All">All Types (Central, State, Deemed)</option>
            <option value="Central">Central Universities</option>
            <option value="State">State Universities</option>
            <option value="Deemed">Deemed Universities</option>
            <option value="Private">Private Universities</option>
          </select>
        </div>

        <div>
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="w-full text-xs p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
          >
            <option value="All">All States / UTs</option>
            {states.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Universities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredUniversities.map((u) => {
          const progs = programmesData.filter(p => p.universityId === u.universityId);

          return (
            <div
              key={u.universityId}
              className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-blue-400 transition-all flex flex-col justify-between space-y-4 group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] uppercase font-bold tracking-wide px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
                    {u.type} University
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-400" /> {u.city}
                  </span>
                </div>

                <h3 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {u.name} ({u.shortName})
                </h3>
                {language === 'hi' && u.hindiName && (
                  <div className="text-xs text-slate-500 font-medium mt-0.5">{u.hindiName}</div>
                )}

                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                  {u.description}
                </p>

                <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-500">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">{progs.length} Programmes</span>
                  <span>•</span>
                  <span>CUET Since {u.participatingSince}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <button
                  onClick={() => setSelectedUniversity(u)}
                  className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                >
                  View Profile & Rules <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={u.admissionPortal}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[11px] text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center gap-1"
                >
                  Portal <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* University Comprehensive Profile Modal */}
      {selectedUniversity && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white dark:bg-slate-900 w-full max-w-3xl rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden max-h-[85vh] flex flex-col">
            {/* Modal Header */}
            <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-start justify-between bg-slate-50 dark:bg-slate-800/60">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-600 text-white">
                    {selectedUniversity.type}
                  </span>
                  <span className="text-xs text-slate-500">
                    {selectedUniversity.city}, {selectedUniversity.state}
                  </span>
                </div>
                <h2 className="text-lg font-black text-slate-900 dark:text-white mt-1">
                  {selectedUniversity.name} ({selectedUniversity.shortName})
                </h2>
              </div>
              <button
                onClick={() => setSelectedUniversity(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-xs scrollbar-thin">
              {/* Special Rules */}
              <div className="p-3.5 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-300 dark:border-amber-800 text-amber-950 dark:text-amber-200 space-y-1.5">
                <span className="font-bold flex items-center gap-1.5 text-xs text-amber-900 dark:text-amber-300">
                  <ShieldCheck className="w-4 h-4 text-amber-600" />
                  Mandatory University Specific Admission Rules:
                </span>
                <ul className="list-disc list-inside space-y-1 text-[11px] leading-relaxed">
                  {selectedUniversity.specialRules.map((rule, idx) => (
                    <li key={idx}>{rule}</li>
                  ))}
                </ul>
              </div>

              {/* Reservation Breakdown */}
              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px]">
                  Reservation Distribution & Quotas
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <span className="text-[10px] text-slate-500 font-semibold">OBC-NCL</span>
                    <div className="font-bold text-slate-900 dark:text-white mt-0.5">{selectedUniversity.reservationPolicy.obc_ncl}</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <span className="text-[10px] text-slate-500 font-semibold">SC Category</span>
                    <div className="font-bold text-slate-900 dark:text-white mt-0.5">{selectedUniversity.reservationPolicy.sc}</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <span className="text-[10px] text-slate-500 font-semibold">ST Category</span>
                    <div className="font-bold text-slate-900 dark:text-white mt-0.5">{selectedUniversity.reservationPolicy.st}</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <span className="text-[10px] text-slate-500 font-semibold">EWS Pool</span>
                    <div className="font-bold text-slate-900 dark:text-white mt-0.5">{selectedUniversity.reservationPolicy.ews}</div>
                  </div>
                </div>
              </div>

              {/* Programmes Offered Through CUET */}
              <div className="space-y-3">
                <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px]">
                  CUET Degree Programmes Offered
                </h4>
                <div className="space-y-2">
                  {programmesData.filter(p => p.universityId === selectedUniversity.universityId).map(p => (
                    <div
                      key={p.programmeId}
                      className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 space-y-1"
                    >
                      <div className="flex items-center justify-between font-bold text-slate-900 dark:text-white text-xs">
                        <span>{p.name} ({p.degree})</span>
                        <span className="text-[10px] font-normal text-slate-500">{p.durationYears} Years</span>
                      </div>
                      <div className="text-[11px] text-slate-600 dark:text-slate-400">
                        <span className="font-semibold text-blue-600">CUET Subject Combination:</span> {p.cuetSubjectsRequired.join('; ')}
                      </div>
                      {p.tuitionFeePerYear && (
                        <div className="text-[10px] text-slate-500">
                          Annual Tuition Fee: {p.tuitionFeePerYear}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Official Portals Links */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={selectedUniversity.admissionPortal}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-colors flex items-center gap-1.5"
                >
                  Official Admission Portal <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href={selectedUniversity.officialWebsite}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white font-semibold transition-colors flex items-center gap-1.5"
                >
                  University Website <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
