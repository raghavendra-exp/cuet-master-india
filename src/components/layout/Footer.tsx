import React from 'react';
import { ShieldCheck, ExternalLink, GitBranch, Heart, Sun, Moon } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useUserProgress } from '../../context/UserProgressContext';

export const Footer: React.FC<{ setCurrentTab: (tab: string) => void }> = ({ setCurrentTab }) => {
  const { t } = useLanguage();
  const { theme, toggleTheme } = useUserProgress();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 py-12 px-4 text-xs mt-16 mb-12 md:mb-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        {/* Col 1: Brand & Official-First Philosophy */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-base text-white tracking-tight">
              CUET UNIVERSITY MASTER <span className="text-blue-400">INDIA</span>
            </span>
          </div>
          <p className="text-slate-400 leading-relaxed">
            The comprehensive, official-source-first knowledge platform uniting CUET-UG & CUET-PG syllabus, subject wizardry, university discovery, eligibility checks, and real-time admission tracking.
          </p>
          <div className="flex items-center gap-2 text-emerald-400 font-medium">
            <ShieldCheck className="w-4 h-4" />
            <span>Strictly Grounded in Official NTA & Prospectuses</span>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">Core Engines</h4>
          <ul className="space-y-2 text-slate-400">
            <li>
              <button onClick={() => setCurrentTab('subject-wizard')} className="hover:text-white transition-colors">
                Subject Selection Wizard
              </button>
            </li>
            <li>
              <button onClick={() => setCurrentTab('eligibility-checker')} className="hover:text-white transition-colors">
                University Eligibility Checker
              </button>
            </li>
            <li>
              <button onClick={() => setCurrentTab('where-can-i-apply')} className="hover:text-white transition-colors">
                "Where Can I Apply?" Tool
              </button>
            </li>
            <li>
              <button onClick={() => setCurrentTab('universities')} className="hover:text-white transition-colors">
                Participating Universities Explorer
              </button>
            </li>
            <li>
              <button onClick={() => setCurrentTab('mock-tests')} className="hover:text-white transition-colors">
                NTA Realistic Mock Test Center
              </button>
            </li>
            <li>
              <button onClick={() => setCurrentTab('pyq-master')} className="hover:text-white transition-colors">
                Verified PYQ Master & Trends
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Official Portals */}
        <div>
          <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">Primary Official Portals</h4>
          <ul className="space-y-2 text-slate-400">
            <li>
              <a href="https://exams.nta.ac.in/CUET-UG/" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-white transition-colors">
                NTA CUET-UG Official Portal <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </li>
            <li>
              <a href="https://exams.nta.ac.in/CUET-PG/" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-white transition-colors">
                NTA CUET-PG Official Portal <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </li>
            <li>
              <a href="https://ugadmission.uod.ac.in" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-white transition-colors">
                DU CSAS Admission Portal <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </li>
            <li>
              <a href="https://www.bhuonline.in" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-white transition-colors">
                BHU CAP Admission Portal <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </li>
            <li>
              <a href="https://jnuee.jnu.ac.in" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-white transition-colors">
                JNU Admission Portal <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </li>
            <li>
              <a href="https://www.ugc.gov.in" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-white transition-colors">
                University Grants Commission (UGC) <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </li>
          </ul>
        </div>

        {/* Col 4: Legal & Copyright Safety */}
        <div>
          <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">Copyright & Accuracy</h4>
          <p className="text-slate-400 leading-relaxed mb-3">
            Zero Pirated Material. Practice questions are strictly original and past year problems are curated from verified public notifications. Textbooks reference legal open sources (NCERT / DIKSHA).
          </p>
          <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300">
            <span className="text-[10px] block font-mono text-amber-300 font-bold mb-1">DISCLAIMER</span>
            CUET score does not guarantee admission. Seat allocation is conducted separately by each participating university.
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
        <div>
          © {new Date().getFullYear()} CUET UNIVERSITY MASTER INDIA. Open Source Public Education Initiative.
        </div>
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={toggleTheme}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-750 text-slate-300 hover:text-white border border-slate-700 transition-colors"
          >
            {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-indigo-400" />}
            <span className="capitalize">{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
          <span>•</span>
          <a
            href="https://github.com/raghavendra-exp/cuet-master-india"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
          >
            <GitBranch className="w-3.5 h-3.5" />
            <span>GitHub Repository</span>
          </a>
          <span>•</span>
          <span>Last Verified: March 2026</span>
        </div>
      </div>
    </footer>
  );
};
