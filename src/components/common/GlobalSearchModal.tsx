import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Building2, BookOpen, Layers, HelpCircle, Library, Newspaper, BellRing, ArrowRight } from 'lucide-react';
import { universitiesData } from '../../data/universities';
import { programmesData } from '../../data/programmes';
import { syllabusData } from '../../data/syllabusData';
import { questionsData } from '../../data/questionsData';
import { booksData } from '../../data/booksData';
import { currentAffairsData } from '../../data/currentAffairsData';
import { notificationsData } from '../../data/notificationsData';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  setCurrentTab: (tab: string) => void;
  onSelectUniversity?: (id: string) => void;
  onSelectProgramme?: (id: string) => void;
  onSelectSubject?: (id: string) => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  setCurrentTab,
  onSelectUniversity,
  onSelectProgramme,
  onSelectSubject
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open handled by parent or state
        }
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.trim().toLowerCase();

  // Search results
  const matchedUniversities = q ? universitiesData.filter(u =>
    u.name.toLowerCase().includes(q) || u.shortName.toLowerCase().includes(q) || u.city.toLowerCase().includes(q) || u.state.toLowerCase().includes(q)
  ).slice(0, 4) : [];

  const matchedProgrammes = q ? programmesData.filter(p =>
    p.name.toLowerCase().includes(q) || p.degree.toLowerCase().includes(q) || p.department.toLowerCase().includes(q)
  ).slice(0, 4) : [];

  const matchedSubjects = q ? syllabusData.filter(s =>
    s.name.toLowerCase().includes(q) || s.code.toLowerCase().includes(q) || s.topics.some(t => t.name.toLowerCase().includes(q))
  ).slice(0, 4) : [];

  const matchedQuestions = q ? questionsData.filter(qu =>
    qu.question.toLowerCase().includes(q) || qu.topic.toLowerCase().includes(q) || qu.chapter.toLowerCase().includes(q)
  ).slice(0, 4) : [];

  const matchedBooks = q ? booksData.filter(b =>
    b.title.toLowerCase().includes(q) || b.subject.toLowerCase().includes(q) || b.publisher.toLowerCase().includes(q)
  ).slice(0, 3) : [];

  const matchedNews = q ? currentAffairsData.filter(c =>
    c.title.toLowerCase().includes(q) || c.summary.toLowerCase().includes(q)
  ).slice(0, 3) : [];

  const hasAnyResults = matchedUniversities.length > 0 || matchedProgrammes.length > 0 || matchedSubjects.length > 0 || matchedQuestions.length > 0 || matchedBooks.length > 0 || matchedNews.length > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200 dark:border-slate-800 gap-3">
          <Search className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search universities, courses, syllabus, PYQs, books, current affairs..."
            className="w-full bg-transparent border-none outline-none text-slate-900 dark:text-white placeholder:text-slate-400 text-sm"
          />
          {query && (
            <button onClick={() => setQuery('')} className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md">
              <X className="w-4 h-4 text-slate-400" />
            </button>
          )}
          <kbd className="hidden sm:inline-block bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-[10px] font-mono text-slate-500 border border-slate-300 dark:border-slate-700">
            ESC
          </kbd>
        </div>

        {/* Results Container */}
        <div className="overflow-y-auto p-4 space-y-5 scrollbar-thin">
          {!q && (
            <div className="text-center py-8 text-slate-400">
              <p className="text-xs">Type anything to explore universities, degree criteria, syllabus topics, or PYQs.</p>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {['Delhi University', 'Economics', 'COQP11', 'Banaras Hindu University', 'Physics', 'B.Com Hons', 'National Income'].map((s) => (
                  <button
                    key={s}
                    onClick={() => setQuery(s)}
                    className="text-xs bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-950 text-slate-700 dark:text-slate-300 hover:text-blue-600 px-2.5 py-1 rounded-full transition-colors border border-slate-200 dark:border-slate-700"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {q && !hasAnyResults && (
            <div className="text-center py-8 text-slate-400 text-xs">
              No matching records found for "{query}". Try checking subject spelling or university acronyms (e.g. DU, BHU, JNU).
            </div>
          )}

          {/* Universities */}
          {matchedUniversities.length > 0 && (
            <div>
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-blue-500" /> Universities
              </div>
              <div className="space-y-1">
                {matchedUniversities.map((u) => (
                  <button
                    key={u.universityId}
                    onClick={() => {
                      if (onSelectUniversity) onSelectUniversity(u.universityId);
                      setCurrentTab('universities');
                      onClose();
                    }}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-left transition-colors group"
                  >
                    <div>
                      <div className="text-xs font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        {u.name} ({u.shortName})
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">
                        {u.city}, {u.state} • {u.type} University
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Programmes */}
          {matchedProgrammes.length > 0 && (
            <div>
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-indigo-500" /> Courses & Programmes
              </div>
              <div className="space-y-1">
                {matchedProgrammes.map((p) => (
                  <button
                    key={p.programmeId}
                    onClick={() => {
                      if (onSelectProgramme) onSelectProgramme(p.programmeId);
                      setCurrentTab('courses');
                      onClose();
                    }}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-left transition-colors group"
                  >
                    <div>
                      <div className="text-xs font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                        {p.name}
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">
                        {p.level} • {p.degree} • {p.durationYears} Years
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Syllabus */}
          {matchedSubjects.length > 0 && (
            <div>
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-emerald-500" /> Syllabus & NCERT
              </div>
              <div className="space-y-1">
                {matchedSubjects.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      if (onSelectSubject) onSelectSubject(s.id);
                      setCurrentTab('syllabus');
                      onClose();
                    }}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-left transition-colors group"
                  >
                    <div>
                      <div className="text-xs font-semibold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                        {s.name} (Code: {s.code})
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">
                        {s.exam} • {s.category} • {s.topics.length} Key Chapters
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Questions */}
          {matchedQuestions.length > 0 && (
            <div>
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5 text-amber-500" /> Questions & PYQs
              </div>
              <div className="space-y-1">
                {matchedQuestions.map((qItem) => (
                  <button
                    key={qItem.id}
                    onClick={() => {
                      setCurrentTab('practice');
                      onClose();
                    }}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-left transition-colors group"
                  >
                    <div className="pr-4">
                      <div className="text-xs font-medium text-slate-900 dark:text-white line-clamp-1 group-hover:text-amber-600">
                        {qItem.question}
                      </div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400 flex items-center gap-2 mt-0.5">
                        <span className="font-semibold text-blue-600">{qItem.subject}</span>
                        <span>•</span>
                        <span>{qItem.sourceType}</span>
                        <span>•</span>
                        <span className="capitalize">{qItem.difficulty}</span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-slate-50 dark:bg-slate-950/60 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500">
          <span>Search covers 15+ universities, 25+ programmes, 1,000+ questions & full syllabus.</span>
          <span className="font-mono">CUET Master Index</span>
        </div>
      </div>
    </div>
  );
};
