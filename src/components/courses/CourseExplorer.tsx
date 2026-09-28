import React, { useState } from 'react';
import { Layers, Search, Building2, CheckCircle2, BookmarkPlus, ExternalLink, ArrowRight } from 'lucide-react';
import { programmesData } from '../../data/programmes';
import { universitiesData } from '../../data/universities';
import { useLanguage } from '../../context/LanguageContext';
import { useUserProgress } from '../../context/UserProgressContext';

export const CourseExplorer: React.FC = () => {
  const { language } = useLanguage();
  const { addTargetUniversity } = useUserProgress();

  const [selectedDiscipline, setSelectedDiscipline] = useState<string>('All');
  const [levelFilter, setLevelFilter] = useState<'UG' | 'PG' | 'All'>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const disciplines = [
    "All", "Economics", "Commerce", "Computer Science", "Management", "Political Science",
    "Physics", "Law", "Social Sciences", "Foreign Languages"
  ];

  const filteredProgrammes = programmesData.filter(p => {
    if (levelFilter !== 'All' && p.level !== levelFilter) return false;
    if (selectedDiscipline !== 'All') {
      const d = selectedDiscipline.toLowerCase();
      if (!p.name.toLowerCase().includes(d) && !p.department.toLowerCase().includes(d)) return false;
    }
    if (searchTerm) {
      const q = searchTerm.toLowerCase();
      return p.name.toLowerCase().includes(q) || p.degree.toLowerCase().includes(q) || p.department.toLowerCase().includes(q);
    }
    return true;
  });

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 space-y-6">
      <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs font-semibold mb-2">
          <Layers className="w-3.5 h-3.5" />
          <span>Course Discovery Engine</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          Course & Degree Discovery
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
          Explore programmes across Arts, Science, Commerce, Law, Management and see exactly which CUET subjects and universities match your aspirations.
        </p>
      </div>

      {/* Discipline Quick Filter Chips */}
      <div className="space-y-2">
        <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
          "I want..." Quick Discovery:
        </div>
        <div className="flex flex-wrap gap-2">
          {disciplines.map(disc => (
            <button
              key={disc}
              onClick={() => setSelectedDiscipline(disc)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedDiscipline === disc
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-blue-400'
              }`}
            >
              {disc === 'All' ? 'All Disciplines' : disc}
            </button>
          ))}
        </div>
      </div>

      {/* Search & Level Filters */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="sm:col-span-2 relative">
          <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Type course name (e.g. B.Com Hons, MCA, BA Economics)..."
            className="w-full text-xs pl-9 pr-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
          />
        </div>

        <div>
          <select
            value={levelFilter}
            onChange={(e) => setLevelFilter(e.target.value as any)}
            className="w-full text-xs p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold"
          >
            <option value="All">All Levels (UG + PG)</option>
            <option value="UG">Undergraduate (CUET-UG)</option>
            <option value="PG">Postgraduate (CUET-PG)</option>
          </select>
        </div>
      </div>

      {/* Programmes List */}
      <div className="space-y-4">
        <div className="text-xs text-slate-500">
          Found <strong>{filteredProgrammes.length}</strong> matching courses
        </div>

        <div className="space-y-3">
          {filteredProgrammes.map(prog => {
            const univ = universitiesData.find(u => u.universityId === prog.universityId);
            if (!univ) return null;

            return (
              <div
                key={prog.programmeId}
                className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-blue-400 transition-all space-y-3"
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                        prog.level === 'UG' ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300' : 'bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300'
                      }`}>
                        {prog.level}
                      </span>
                      <span className="text-xs font-semibold text-slate-500">{prog.degree}</span>
                      <span className="text-xs text-slate-400">• {prog.durationYears} Years</span>
                    </div>
                    <h3 className="font-bold text-base text-slate-900 dark:text-white">
                      {prog.name}
                    </h3>
                    <div className="text-xs text-slate-600 dark:text-slate-400">
                      Offered by: <strong className="text-blue-600 dark:text-blue-400">{univ.name} ({univ.shortName})</strong> • {univ.city}, {univ.state}
                    </div>
                  </div>

                  <button
                    onClick={() => addTargetUniversity({
                      universityId: univ.universityId,
                      programmeId: prog.programmeId,
                      requiredSubjects: prog.cuetSubjectsRequired,
                      applicationStatus: 'Not Started'
                    })}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-950 text-slate-700 dark:text-slate-300 hover:text-blue-600 text-xs font-semibold transition-colors"
                  >
                    <BookmarkPlus className="w-3.5 h-3.5" />
                    + Target List
                  </button>
                </div>

                <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700/80 text-xs space-y-1.5">
                  <div className="font-semibold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                    <span>CUET Required Subject Combination:</span>
                  </div>
                  <div className="text-slate-700 dark:text-slate-300 pl-5">
                    {prog.cuetSubjectsRequired.join('; ')}
                  </div>
                  <div className="text-slate-500 pl-5 text-[11px]">
                    Eligibility: {prog.eligibilityText}
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs pt-1">
                  <div className="text-slate-500">
                    {prog.tuitionFeePerYear ? `Approx. Tuition: ${prog.tuitionFeePerYear}` : 'Fees as per official bulletin'}
                  </div>
                  <a
                    href={univ.admissionPortal}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 dark:text-blue-400 font-semibold hover:underline flex items-center gap-1"
                  >
                    Official Portal <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
