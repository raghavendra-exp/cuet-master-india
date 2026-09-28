import React, { useState } from 'react';
import { BookOpen, ExternalLink, ChevronDown, ChevronRight, Sparkles, FileText, CheckCircle2 } from 'lucide-react';
import { syllabusData } from '../../data/syllabusData';
import { SyllabusSubject, SyllabusTopic } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

export const SyllabusExplorer: React.FC<{ onStartTopicPractice?: (subject: string, topic: string) => void }> = ({
  onStartTopicPractice
}) => {
  const { language } = useLanguage();
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>(syllabusData[0]?.id || '');
  const [expandedTopics, setExpandedTopics] = useState<Record<string, boolean>>({
    [syllabusData[0]?.topics[0]?.id || '']: true
  });

  const activeSubject = syllabusData.find(s => s.id === selectedSubjectId) || syllabusData[0];

  const toggleTopic = (topicId: string) => {
    setExpandedTopics(prev => ({ ...prev, [topicId]: !prev[topicId] }));
  };

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 space-y-6">
      <div className="border-b border-slate-200 dark:border-slate-800 pb-4 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>NTA Official Syllabus & NCERT Linkage</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            CUET Official Syllabus Engine
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
            Topic-by-topic breakdowns, Class 11-12 NCERT chapters, key concepts, formulas, and verified PYQ frequencies.
          </p>
        </div>

        {activeSubject && (
          <a
            href={activeSubject.officialPdfUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-blue-50 dark:bg-blue-950/60 hover:bg-blue-100 text-blue-700 dark:text-blue-300 text-xs font-bold border border-blue-200 dark:border-blue-900 transition-colors"
          >
            <FileText className="w-4 h-4" /> Download Official NTA PDF ↗
          </a>
        )}
      </div>

      {/* Subject Selector Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
        {syllabusData.map((subj) => {
          const isSelected = subj.id === activeSubject.id;
          return (
            <button
              key={subj.id}
              onClick={() => {
                setSelectedSubjectId(subj.id);
                if (subj.topics[0]) {
                  setExpandedTopics({ [subj.topics[0].id]: true });
                }
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                isSelected
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-blue-400'
              }`}
            >
              <span>{subj.name}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-500'
              }`}>
                {subj.code}
              </span>
            </button>
          );
        })}
      </div>

      {/* Subject Overview Card */}
      {activeSubject && (
        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
                  {activeSubject.exam} • {activeSubject.category}
                </span>
                <span className="text-xs text-slate-500 font-mono">Code: {activeSubject.code}</span>
              </div>
              <h2 className="text-xl font-black text-slate-900 dark:text-white">
                {activeSubject.name} {language === 'hi' && activeSubject.hindiName ? `(${activeSubject.hindiName})` : ''}
              </h2>
            </div>
            <div className="text-xs text-slate-500">
              Last Verified: {activeSubject.lastVerified}
            </div>
          </div>

          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-200 dark:border-slate-700/80">
            {activeSubject.description}
          </p>

          {/* Topics Accordion List */}
          <div className="space-y-3 pt-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Official Topics & Core Concepts ({activeSubject.topics.length} Chapters)
            </h3>

            {activeSubject.topics.map((topic, tIdx) => {
              const isExpanded = expandedTopics[topic.id];

              return (
                <div
                  key={topic.id}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-white dark:bg-slate-900 transition-all"
                >
                  <button
                    onClick={() => toggleTopic(topic.id)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center text-xs font-mono font-bold">
                        {tIdx + 1}
                      </span>
                      <div>
                        <div className="text-sm font-bold text-slate-900 dark:text-white">
                          {topic.name}
                        </div>
                        {topic.ncertChapter && (
                          <div className="text-[11px] text-blue-600 dark:text-blue-400">
                            NCERT Mapping: {topic.ncertChapter}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                        topic.pyqFrequency === 'High' ? 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-200' : 'bg-slate-100 text-slate-700'
                      }`}>
                        {topic.pyqFrequency} PYQ Weight
                      </span>
                      {isExpanded ? <ChevronDown className="w-4 h-4 text-slate-400" /> : <ChevronRight className="w-4 h-4 text-slate-400" />}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="p-4 pt-0 border-t border-slate-100 dark:border-slate-800 space-y-4 text-xs">
                      {/* Subtopics */}
                      <div>
                        <span className="font-semibold text-slate-500 block mb-1.5 text-[11px]">Subtopics Covered:</span>
                        <div className="flex flex-wrap gap-1.5">
                          {topic.subtopics.map((sub, i) => (
                            <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">
                              {sub}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Concepts and Formulas */}
                      <div className="space-y-3">
                        <span className="font-semibold text-slate-500 block text-[11px]">Core Concepts & Important Formulas:</span>
                        {topic.concepts.map((concept) => (
                          <div key={concept.id} className="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700/80 space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-slate-900 dark:text-white text-xs">
                                {concept.name}
                              </span>
                              {concept.ncertReference && (
                                <span className="text-[10px] text-slate-400">{concept.ncertReference}</span>
                              )}
                            </div>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                              {concept.summary}
                            </p>
                            {concept.importantFormulasOrFacts.length > 0 && (
                              <div className="space-y-1 bg-white dark:bg-slate-900 p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 font-mono text-[11px] text-blue-700 dark:text-blue-300">
                                {concept.importantFormulasOrFacts.map((formula, fIdx) => (
                                  <div key={fIdx}>• {formula}</div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
