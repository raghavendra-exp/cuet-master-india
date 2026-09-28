import React, { createContext, useContext, useState, useEffect } from 'react';
import { TargetUniversityItem, ErrorLogItem, MockTestResult } from '../types';

interface UserProgressContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  targetList: TargetUniversityItem[];
  addTargetUniversity: (item: TargetUniversityItem) => void;
  removeTargetUniversity: (universityId: string, programmeId: string) => void;
  updateTargetStatus: (universityId: string, programmeId: string, status: TargetUniversityItem['applicationStatus']) => void;
  bookmarks: string[];
  toggleBookmark: (questionId: string) => void;
  isBookmarked: (questionId: string) => boolean;
  errorLogs: ErrorLogItem[];
  addErrorLog: (item: Omit<ErrorLogItem, 'id' | 'dateAdded' | 'revised'>) => void;
  markErrorRevised: (errorId: string) => void;
  removeErrorLog: (errorId: string) => void;
  mockHistory: MockTestResult[];
  recordMockResult: (result: MockTestResult) => void;
  knownCards: string[];
  unknownCards: string[];
  markCardKnown: (cardId: string) => void;
  markCardUnknown: (cardId: string) => void;
  completedDocs: string[];
  toggleDocCompleted: (docId: string) => void;
  activeLevel: number;
  setActiveLevel: (level: number) => void;
}

const UserProgressContext = createContext<UserProgressContextType | null>(null);

export const UserProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    try {
      const saved = localStorage.getItem('cuet_theme');
      if (saved === 'dark' || saved === 'light') return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } catch {
      return 'light';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('cuet_theme', theme);
    } catch (e) {}

    const isDark = theme === 'dark';
    
    // Apply to both documentElement and body for absolute certainty
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
      document.body.setAttribute('data-theme', 'light');
    }

    // Synchronize browser theme-color meta tag
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', isDark ? '#020617' : '#1d4ed8');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  // Target list
  const [targetList, setTargetList] = useState<TargetUniversityItem[]>(() => {
    try {
      const saved = localStorage.getItem('cuet_target_list');
      return saved ? JSON.parse(saved) : [
        {
          universityId: "UNI-DU-001",
          programmeId: "PROG-DU-001",
          requiredSubjects: ["Language from List A", "Mathematics", "Two domains"],
          targetScore: 780,
          applicationStatus: "Registered"
        },
        {
          universityId: "UNI-BHU-002",
          programmeId: "PROG-BHU-001",
          requiredSubjects: ["Language (English/Hindi)", "General Test (GAT)"],
          targetScore: 320,
          applicationStatus: "Not Started"
        }
      ];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('cuet_target_list', JSON.stringify(targetList));
  }, [targetList]);

  const addTargetUniversity = (item: TargetUniversityItem) => {
    setTargetList(prev => {
      const exists = prev.some(p => p.universityId === item.universityId && p.programmeId === item.programmeId);
      if (exists) return prev;
      return [...prev, item];
    });
  };

  const removeTargetUniversity = (universityId: string, programmeId: string) => {
    setTargetList(prev => prev.filter(p => !(p.universityId === universityId && p.programmeId === programmeId)));
  };

  const updateTargetStatus = (universityId: string, programmeId: string, status: TargetUniversityItem['applicationStatus']) => {
    setTargetList(prev => prev.map(p => {
      if (p.universityId === universityId && p.programmeId === programmeId) {
        return { ...p, applicationStatus: status };
      }
      return p;
    }));
  };

  // Bookmarks
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('cuet_bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const toggleBookmark = (qId: string) => {
    setBookmarks(prev => {
      const next = prev.includes(qId) ? prev.filter(id => id !== qId) : [...prev, qId];
      localStorage.setItem('cuet_bookmarks', JSON.stringify(next));
      return next;
    });
  };

  const isBookmarked = (qId: string) => bookmarks.includes(qId);

  // Error Notebook
  const [errorLogs, setErrorLogs] = useState<ErrorLogItem[]>(() => {
    try {
      const saved = localStorage.getItem('cuet_error_logs');
      return saved ? JSON.parse(saved) : [
        {
          id: "ERR-001",
          questionId: "CUET-UG-ECO-0004",
          questionText: "Primary Deficit in a government budget is calculated by subtracting which item from Fiscal Deficit?",
          subject: "Economics",
          topic: "Deficits",
          userAnswer: 0,
          correctAnswer: 1,
          explanation: "Primary Deficit = Fiscal Deficit - Interest Payments.",
          mistakeType: "Concept gap",
          dateAdded: "2026-03-22",
          revised: false
        }
      ];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('cuet_error_logs', JSON.stringify(errorLogs));
  }, [errorLogs]);

  const addErrorLog = (item: Omit<ErrorLogItem, 'id' | 'dateAdded' | 'revised'>) => {
    const newEntry: ErrorLogItem = {
      ...item,
      id: `ERR-${Date.now()}`,
      dateAdded: new Date().toISOString().split('T')[0],
      revised: false
    };
    setErrorLogs(prev => [newEntry, ...prev]);
  };

  const markErrorRevised = (id: string) => {
    setErrorLogs(prev => prev.map(e => e.id === id ? { ...e, revised: !e.revised } : e));
  };

  const removeErrorLog = (id: string) => {
    setErrorLogs(prev => prev.filter(e => e.id !== id));
  };

  // Mock test history
  const [mockHistory, setMockHistory] = useState<MockTestResult[]>(() => {
    try {
      const saved = localStorage.getItem('cuet_mock_history');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const recordMockResult = (res: MockTestResult) => {
    setMockHistory(prev => {
      const next = [res, ...prev];
      localStorage.setItem('cuet_mock_history', JSON.stringify(next));
      return next;
    });
  };

  // Flashcards mastery
  const [knownCards, setKnownCards] = useState<string[]>(() => {
    try {
      const s = localStorage.getItem('cuet_known_cards');
      return s ? JSON.parse(s) : [];
    } catch {
      return [];
    }
  });

  const [unknownCards, setUnknownCards] = useState<string[]>(() => {
    try {
      const s = localStorage.getItem('cuet_unknown_cards');
      return s ? JSON.parse(s) : [];
    } catch {
      return [];
    }
  });

  const markCardKnown = (cardId: string) => {
    setKnownCards(prev => Array.from(new Set([...prev, cardId])));
    setUnknownCards(prev => prev.filter(id => id !== cardId));
  };

  const markCardUnknown = (cardId: string) => {
    setUnknownCards(prev => Array.from(new Set([...prev, cardId])));
    setKnownCards(prev => prev.filter(id => id !== cardId));
  };

  // Documents
  const [completedDocs, setCompletedDocs] = useState<string[]>(() => {
    try {
      const s = localStorage.getItem('cuet_completed_docs');
      return s ? JSON.parse(s) : ["doc-photo", "doc-sig"];
    } catch {
      return [];
    }
  });

  const toggleDocCompleted = (docId: string) => {
    setCompletedDocs(prev => {
      const next = prev.includes(docId) ? prev.filter(d => d !== docId) : [...prev, docId];
      localStorage.setItem('cuet_completed_docs', JSON.stringify(next));
      return next;
    });
  };

  // Roadmap level
  const [activeLevel, setActiveLevel] = useState<number>(() => {
    const s = localStorage.getItem('cuet_roadmap_level');
    return s ? parseInt(s, 10) : 3;
  });

  useEffect(() => {
    localStorage.setItem('cuet_roadmap_level', String(activeLevel));
  }, [activeLevel]);

  return (
    <UserProgressContext.Provider value={{
      theme,
      toggleTheme,
      targetList,
      addTargetUniversity,
      removeTargetUniversity,
      updateTargetStatus,
      bookmarks,
      toggleBookmark,
      isBookmarked,
      errorLogs,
      addErrorLog,
      markErrorRevised,
      removeErrorLog,
      mockHistory,
      recordMockResult,
      knownCards,
      unknownCards,
      markCardKnown,
      markCardUnknown,
      completedDocs,
      toggleDocCompleted,
      activeLevel,
      setActiveLevel
    }}>
      {children}
    </UserProgressContext.Provider>
  );
};

export const useUserProgress = () => {
  const ctx = useContext(UserProgressContext);
  if (!ctx) throw new Error("useUserProgress must be used within UserProgressProvider");
  return ctx;
};
