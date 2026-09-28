import React, { useState } from 'react';
import { Sparkles, CheckCircle2, AlertCircle, XCircle, HelpCircle, ExternalLink, ArrowRight, RotateCcw } from 'lucide-react';
import { universitiesData } from '../../data/universities';
import { programmesData } from '../../data/programmes';
import { useLanguage } from '../../context/LanguageContext';
import { useUserProgress } from '../../context/UserProgressContext';

interface EvaluationResult {
  status: 'ELIGIBLE' | 'POTENTIALLY ELIGIBLE' | 'NOT ELIGIBLE' | 'VERIFY OFFICIAL RULE';
  reasons: string[];
  warnings: string[];
}

export const SubjectSelectionWizard: React.FC = () => {
  const { t } = useLanguage();
  const { addTargetUniversity } = useUserProgress();

  const [selectedDegree, setSelectedDegree] = useState<string>('');
  const [selectedUniversityId, setSelectedUniversityId] = useState<string>('');
  const [selectedProgrammeId, setSelectedProgrammeId] = useState<string>('');
  const [class12Subjects, setClass12Subjects] = useState<string[]>([]);
  const [cuetSubjectsChosen, setCuetSubjectsChosen] = useState<string[]>([]);
  const [class12Marks, setClass12Marks] = useState<string>('75');
  const [resultCalculated, setResultCalculated] = useState<boolean>(false);

  const availableDegrees = Array.from(new Set(programmesData.map(p => p.degree)));

  const filteredProgrammes = programmesData.filter(p => {
    if (selectedDegree && p.degree !== selectedDegree) return false;
    if (selectedUniversityId && p.universityId !== selectedUniversityId) return false;
    return true;
  });

  const selectedProgramme = programmesData.find(p => p.programmeId === selectedProgrammeId);
  const selectedUniversity = universitiesData.find(u => u.universityId === selectedUniversityId);

  const standardClass12List = [
    "English", "Hindi", "Mathematics / Applied Mathematics", "Physics", "Chemistry", "Biology / Biotechnology",
    "Accountancy", "Business Studies", "Economics", "History", "Political Science", "Geography",
    "Sociology", "Psychology", "Computer Science / IP", "Physical Education"
  ];

  const handleToggle12Subject = (subj: string) => {
    setClass12Subjects(prev =>
      prev.includes(subj) ? prev.filter(s => s !== subj) : [...prev, subj]
    );
    setResultCalculated(false);
  };

  const handleToggleCuetSubject = (subj: string) => {
    setCuetSubjectsChosen(prev =>
      prev.includes(subj) ? prev.filter(s => s !== subj) : [...prev, subj]
    );
    setResultCalculated(false);
  };

  // Evaluation logic according to strict official university rules!
  const evaluateEligibility = (): EvaluationResult | null => {
    if (!selectedProgramme || !selectedUniversity) return null;

    let status: 'ELIGIBLE' | 'POTENTIALLY ELIGIBLE' | 'NOT ELIGIBLE' | 'VERIFY OFFICIAL RULE' = 'POTENTIALLY ELIGIBLE';
    const reasons: string[] = [];
    const warnings: string[] = [];

    // DU SPECIFIC RULE AUDIT
    if (selectedUniversity.shortName === 'DU') {
      // Check if chosen CUET subjects were studied in Class 12
      const cuetNon12 = cuetSubjectsChosen.filter(s => !class12Subjects.includes(s) && s !== "General Test (GAT)");
      if (cuetNon12.length > 0) {
        status = 'NOT ELIGIBLE';
        reasons.push(`CRITICAL DU VIOLATION: You chose CUET subject(s) [${cuetNon12.join(', ')}] that you did NOT pass in Class 12. University of Delhi mandates that candidates appear only in Class 12 passed subjects.`);
      }

      // Check Maths requirement for Eco Hons / BMS / CS Hons
      if (selectedProgramme.requiredClass12Subjects?.some(r => r.toLowerCase().includes('mathematics'))) {
        const has12Maths = class12Subjects.some(s => s.toLowerCase().includes('mathematics'));
        const hasCuetMaths = cuetSubjectsChosen.some(s => s.toLowerCase().includes('mathematics'));
        if (!has12Maths) {
          status = 'NOT ELIGIBLE';
          reasons.push(`Mathematics is strictly compulsory in Class 12 for ${selectedProgramme.name}.`);
        } else if (!hasCuetMaths) {
          status = 'NOT ELIGIBLE';
          reasons.push(`Mathematics / Applied Mathematics must be chosen in CUET test papers.`);
        }
      }
    }

    // GAT Requirement check
    if (selectedProgramme.isGatRequired) {
      const hasGat = cuetSubjectsChosen.some(s => s.toLowerCase().includes('general test') || s.toLowerCase().includes('gat'));
      if (!hasGat) {
        status = 'NOT ELIGIBLE';
        reasons.push(`General Test (Section III: GAT) is compulsory for ${selectedProgramme.name}.`);
      }
    }

    // Minimum marks check
    const marksNum = parseFloat(class12Marks);
    if (!isNaN(marksNum) && selectedProgramme.minimumClass12Marks) {
      if (selectedProgramme.minimumClass12Marks.includes('50%') && marksNum < 50) {
        status = 'NOT ELIGIBLE';
        reasons.push(`Your Class 12 aggregate (${marksNum}%) is below the minimum required 50% for this programme.`);
      }
    }

    // If no disqualifications, determine if fully eligible or potentially eligible
    if (status !== 'NOT ELIGIBLE') {
      if (cuetSubjectsChosen.length >= (selectedProgramme.cuetSubjectsRequired?.length || 3)) {
        status = 'ELIGIBLE';
        reasons.push("Your Class 12 subjects and selected CUET combination align with the official admission guidelines of this programme.");
      } else {
        status = 'POTENTIALLY ELIGIBLE';
        reasons.push("You appear academically eligible, but please ensure you select all required CUET domain & language papers during NTA registration.");
      }
    }

    // Always append university counselling advisory
    warnings.push(`CUET Exam result is NOT final admission. You must separately apply on ${selectedUniversity.name} admission portal (${selectedUniversity.admissionPortal}) during the counselling window.`);

    return { status, reasons, warnings };
  };

  const evaluation = resultCalculated ? evaluateEligibility() : null;

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 space-y-6">
      {/* Title & Introduction */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-sky-700 text-white p-6 rounded-2xl shadow-lg relative overflow-hidden">
        <div className="relative z-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/20 text-xs font-semibold backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Official Rules Evaluation Engine</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Subject Selection Wizard
          </h1>
          <p className="text-blue-100 text-xs sm:text-sm max-w-2xl">
            Input your target university, programme, and Class 12 subjects to test compliance with official university-specific admission ordinances.
          </p>
        </div>
      </div>

      {/* Step 1: Target Course & University */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
        <h2 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">1</span>
          Select Target Degree & University
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
              Target Degree
            </label>
            <select
              value={selectedDegree}
              onChange={(e) => {
                setSelectedDegree(e.target.value);
                setSelectedProgrammeId('');
                setResultCalculated(false);
              }}
              className="w-full text-xs p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
            >
              <option value="">All Degrees (BA, BSc, BCom, etc.)</option>
              {availableDegrees.map(deg => (
                <option key={deg} value={deg}>{deg}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
              Target University
            </label>
            <select
              value={selectedUniversityId}
              onChange={(e) => {
                setSelectedUniversityId(e.target.value);
                setSelectedProgrammeId('');
                setResultCalculated(false);
              }}
              className="w-full text-xs p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
            >
              <option value="">Select University...</option>
              {universitiesData.map(u => (
                <option key={u.universityId} value={u.universityId}>
                  {u.name} ({u.shortName})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
              Target Programme
            </label>
            <select
              value={selectedProgrammeId}
              onChange={(e) => {
                setSelectedProgrammeId(e.target.value);
                setResultCalculated(false);
              }}
              disabled={filteredProgrammes.length === 0}
              className="w-full text-xs p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white disabled:opacity-50"
            >
              <option value="">Select Programme...</option>
              {filteredProgrammes.map(p => (
                <option key={p.programmeId} value={p.programmeId}>
                  {p.name} ({p.degree})
                </option>
              ))}
            </select>
          </div>
        </div>

        {selectedProgramme && (
          <div className="p-3.5 bg-blue-50/80 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-900 text-xs space-y-1.5">
            <div className="font-semibold text-blue-900 dark:text-blue-300 flex items-center justify-between">
              <span>Official CUET Requirement for {selectedProgramme.name}:</span>
              <a
                href={selectedProgramme.officialSource}
                target="_blank"
                rel="noreferrer"
                className="text-[11px] text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
              >
                Prospectus Rule ↗
              </a>
            </div>
            <p className="text-slate-700 dark:text-slate-300">{selectedProgramme.eligibilityText}</p>
            <div className="text-[11px] text-slate-600 dark:text-slate-400">
              <span className="font-semibold">Required CUET Subjects:</span> {selectedProgramme.cuetSubjectsRequired.join('; ')}
            </div>
          </div>
        )}
      </div>

      {/* Step 2: What are your Class 12 Subjects & Aggregate? */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
        <h2 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">2</span>
          What are your Class 12 Subjects & Marks?
        </h2>

        <div>
          <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-2">
            Select the subjects you studied and passed in Class 12 (Select all that apply):
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {standardClass12List.map(subj => {
              const isSelected = class12Subjects.includes(subj);
              return (
                <button
                  key={subj}
                  type="button"
                  onClick={() => handleToggle12Subject(subj)}
                  className={`text-left text-xs p-2 rounded-xl border transition-all ${
                    isSelected
                      ? 'bg-blue-50 dark:bg-blue-950/60 border-blue-500 text-blue-700 dark:text-blue-300 font-semibold'
                      : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {subj}
                </button>
              );
            })}
          </div>
        </div>

        <div className="max-w-xs">
          <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
            Class 12 Overall Percentage (%)
          </label>
          <input
            type="number"
            min="0"
            max="100"
            value={class12Marks}
            onChange={(e) => {
              setClass12Marks(e.target.value);
              setResultCalculated(false);
            }}
            className="w-full text-xs p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
          />
        </div>
      </div>

      {/* Step 3: Which CUET Subjects Do You Plan to Appear in? */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
        <h2 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">3</span>
          Which CUET Subjects Are You Appearing In?
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {[
            "English", "Hindi", "Mathematics / Applied Mathematics", "Physics", "Chemistry", "Biology",
            "Accountancy", "Business Studies", "Economics", "History", "Political Science", "Geography",
            "General Test (GAT)", "Computer Science / IP", "Psychology", "Sociology"
          ].map(subj => {
            const isSelected = cuetSubjectsChosen.includes(subj);
            return (
              <button
                key={subj}
                type="button"
                onClick={() => handleToggleCuetSubject(subj)}
                className={`text-left text-xs p-2 rounded-xl border transition-all ${
                  isSelected
                    ? 'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-500 text-indigo-700 dark:text-indigo-300 font-semibold'
                    : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                }`}
              >
                {subj}
              </button>
            );
          })}
        </div>

        <button
          onClick={() => setResultCalculated(true)}
          disabled={!selectedProgrammeId || class12Subjects.length === 0 || cuetSubjectsChosen.length === 0}
          className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          <Sparkles className="w-4 h-4" />
          Verify Official Eligibility
        </button>
      </div>

      {/* Output Card: ELIGIBLE / POTENTIALLY ELIGIBLE / NOT ELIGIBLE / VERIFY OFFICIAL RULE */}
      {evaluation && (
        <div className={`p-6 rounded-2xl border transition-all animate-in fade-in duration-200 space-y-4 ${
          evaluation.status === 'ELIGIBLE'
            ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800'
            : evaluation.status === 'POTENTIALLY ELIGIBLE'
            ? 'bg-blue-50 dark:bg-blue-950/40 border-blue-300 dark:border-blue-800'
            : evaluation.status === 'NOT ELIGIBLE'
            ? 'bg-rose-50 dark:bg-rose-950/40 border-rose-300 dark:border-rose-800'
            : 'bg-amber-50 dark:bg-amber-950/40 border-amber-300 dark:border-amber-800'
        }`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              {evaluation.status === 'ELIGIBLE' && <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />}
              {evaluation.status === 'POTENTIALLY ELIGIBLE' && <HelpCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />}
              {evaluation.status === 'NOT ELIGIBLE' && <XCircle className="w-6 h-6 text-rose-600 dark:text-rose-400" />}
              {evaluation.status === 'VERIFY OFFICIAL RULE' && <AlertCircle className="w-6 h-6 text-amber-600 dark:text-amber-400" />}
              <div>
                <span className="text-[10px] uppercase tracking-wider font-extrabold text-slate-500 dark:text-slate-400 block">
                  Eligibility Evaluation Result
                </span>
                <span className={`text-lg font-black ${
                  evaluation.status === 'ELIGIBLE' ? 'text-emerald-700 dark:text-emerald-300' :
                  evaluation.status === 'POTENTIALLY ELIGIBLE' ? 'text-blue-700 dark:text-blue-300' :
                  evaluation.status === 'NOT ELIGIBLE' ? 'text-rose-700 dark:text-rose-300' :
                  'text-amber-700 dark:text-amber-300'
                }`}>
                  {evaluation.status}
                </span>
              </div>
            </div>

            {selectedProgramme && (
              <button
                onClick={() => addTargetUniversity({
                  universityId: selectedProgramme.universityId,
                  programmeId: selectedProgramme.programmeId,
                  requiredSubjects: selectedProgramme.cuetSubjectsRequired,
                  applicationStatus: 'Not Started'
                })}
                className="text-xs bg-white dark:bg-slate-800 text-slate-800 dark:text-white px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 font-semibold shadow-sm hover:bg-slate-50"
              >
                + Add to My Target List
              </button>
            )}
          </div>

          <div className="space-y-2 text-xs">
            <div className="font-semibold text-slate-800 dark:text-slate-200">Rule Analysis:</div>
            <ul className="space-y-1 text-slate-700 dark:text-slate-300 list-disc list-inside">
              {evaluation.reasons.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </div>

          {evaluation.warnings.length > 0 && (
            <div className="p-3 bg-white/80 dark:bg-slate-900/80 rounded-xl border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-1">
              <span className="font-bold text-slate-800 dark:text-slate-200 block">Official Advisory:</span>
              {evaluation.warnings.map((w, i) => (
                <p key={i}>{w}</p>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
