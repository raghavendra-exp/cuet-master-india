import React, { createContext, useContext, useState, useEffect } from 'react';
import { LanguageCode } from '../types';

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: (key: string) => string;
}

const translations: Record<LanguageCode, Record<string, string>> = {
  en: {
    // Header & Navigation
    siteTitle: "CUET UNIVERSITY MASTER INDIA",
    siteSubtitle: "CUET-UG • CUET-PG — Complete Syllabus, Subjects, Books, PYQs, Practice, Mock Tests, Universities, Courses, Eligibility, Admissions & Counselling",
    navHome: "Home",
    navUg: "CUET-UG",
    navPg: "CUET-PG",
    navSyllabus: "Syllabus",
    navPractice: "Practice",
    navPyq: "PYQs",
    navMockTests: "Mock Tests",
    navUniversities: "Universities",
    navCourses: "Courses",
    navEligibility: "Eligibility Checker",
    navWizard: "Subject Wizard",
    navWhereApply: "Where Can I Apply?",
    navBooks: "Books Library",
    navCurrentAffairs: "Current Affairs",
    navAdmissions: "Admission Tracker",
    navNotifications: "Notifications",
    navFlashcards: "Flashcards & Notes",
    navPlanner: "Study Planner",
    navRoadmap: "CUET Roadmap",
    navTargetList: "Target Universities",
    navErrorNotebook: "Error Notebook",
    navScoreTracker: "Score Analytics",
    navCompare: "Compare Universities",
    navCareer: "Career Discovery",

    // Common Buttons & Actions
    searchPlaceholder: "Search universities, subjects, syllabus, PYQs, books...",
    searchShortKey: "Press Ctrl + K to search",
    btnStartPractice: "Start Practice",
    btnTakeMock: "Take Mock Test",
    btnCheckEligibility: "Check Eligibility",
    btnExploreUniversities: "Explore Universities",
    btnViewSyllabus: "View Syllabus",
    btnBookmark: "Bookmark",
    btnSave: "Save",
    btnSubmit: "Submit Test",
    btnNext: "Next Question",
    btnPrevious: "Previous Question",
    btnClearResponse: "Clear Response",
    btnMarkReview: "Mark for Review",
    btnOfficialSource: "Official Source",
    btnVisitPortal: "Visit Official Portal",
    btnVerifyRule: "Verify Official Rule",

    // Status & Labels
    labelVerifiedPyq: "VERIFIED PYQ",
    labelOriginal: "ORIGINAL PRACTICE",
    labelPyqStyle: "PYQ-STYLE MODEL",
    labelEligible: "ELIGIBLE",
    labelPotentiallyEligible: "POTENTIALLY ELIGIBLE",
    labelNotEligible: "NOT ELIGIBLE",
    labelVerifyRule: "VERIFY OFFICIAL RULE",
    labelUpcoming: "Upcoming",
    labelToday: "Today",
    labelExpired: "Expired",
    labelUpdated: "Updated",
    labelImportant: "Important",
    labelDeadlineSoon: "Deadline Soon",
    labelNew: "New",
    labelInformation: "Information",

    // Dashboard Cards
    cardNotificationTitle: "Latest Official Notification",
    cardAppWindow: "Application & Correction Window",
    cardExamPattern: "Exam Pattern & Scheme",
    cardSubjectSelection: "Subject Selection Wizard",
    cardSyllabusHub: "Syllabus & NCERT Mapping",
    cardPyqBank: "PYQ Master & Trend Analytics",
    cardMockCenter: "NTA Realistic Mock Tests",
    cardAdaptivePractice: "Adaptive Topic Practice",
    cardUniversityCatalog: "Participating Universities",
    cardCourseDiscovery: "Course & Degree Explorer",
    cardAdmissionProcess: "Admission vs CUET Exam",
    cardCounsellingPortals: "University Counselling Portals",

    // Disclaimers
    disclaimerExamVsAdmission: "CRITICAL DISTINCTION: Appearing in or qualifying the CUET examination does NOT automatically guarantee admission to any participating university. Each university conducts its own separate admission and seat allocation process (e.g. DU CSAS, BHU CAP) with distinct subject matching rules and merit calculations.",
    officialSourceGuarantee: "All eligibility conditions, combinations, and syllabus entries are mapped to official NTA information bulletins and university admission prospectuses."
  },
  hi: {
    // Header & Navigation
    siteTitle: "सीयूईटी यूनिवर्सिटी मास्टर इंडिया",
    siteSubtitle: "CUET-UG • CUET-PG — संपूर्ण पाठ्यक्रम, विषय, पुस्तकें, पिछले वर्षों के प्रश्न (PYQs), अभ्यास, मॉक टेस्ट, विश्वविद्यालय, पाठ्यक्रम, पात्रता, प्रवेश और काउंसलिंग",
    navHome: "होम",
    navUg: "सीयूईटी-यूजी",
    navPg: "सीयूईटी-पीजी",
    navSyllabus: "पाठ्यक्रम (Syllabus)",
    navPractice: "अभ्यास (Practice)",
    navPyq: "पिछले वर्ष के प्रश्न (PYQ)",
    navMockTests: "मॉक टेस्ट",
    navUniversities: "विश्वविद्यालय",
    navCourses: "पाठ्यक्रम (Courses)",
    navEligibility: "पात्रता जाँच (Eligibility)",
    navWizard: "विषय चयन विज़ार्ड",
    navWhereApply: "मैं कहाँ आवेदन कर सकता हूँ?",
    navBooks: "पुस्तक पुस्तकालय",
    navCurrentAffairs: "करेंट अफेयर्स",
    navAdmissions: "प्रवेश ट्रैकर",
    navNotifications: "अधिसूचनाएँ",
    navFlashcards: "फ्लैशकार्ड और नोट्स",
    navPlanner: "अध्ययन योजनाकार",
    navRoadmap: "सीयूईटी रोडमैप",
    navTargetList: "लक्षित विश्वविद्यालय",
    navErrorNotebook: "त्रुटि नोटबुक (गलतियाँ)",
    navScoreTracker: "स्कोर एनालिटिक्स",
    navCompare: "विश्वविद्यालय तुलना",
    navCareer: "करियर डिस्कवरी",

    // Common Buttons & Actions
    searchPlaceholder: "विश्वविद्यालय, विषय, पाठ्यक्रम, प्रश्न, पुस्तकें खोजें...",
    searchShortKey: "खोजने के लिए Ctrl + K दबाएं",
    btnStartPractice: "अभ्यास शुरू करें",
    btnTakeMock: "मॉक टेस्ट दें",
    btnCheckEligibility: "पात्रता जांचें",
    btnExploreUniversities: "विश्वविद्यालय देखें",
    btnViewSyllabus: "पाठ्यक्रम देखें",
    btnBookmark: "बुकमार्क करें",
    btnSave: "सहेजें",
    btnSubmit: "टेस्ट सबमिट करें",
    btnNext: "अगला प्रश्न",
    btnPrevious: "पिछला प्रश्न",
    btnClearResponse: "उत्तर साफ़ करें",
    btnMarkReview: "समीक्षा के लिए चिह्नित करें",
    btnOfficialSource: "आधिकारिक स्रोत",
    btnVisitPortal: "आधिकारिक पोर्टल पर जाएं",
    btnVerifyRule: "आधिकारिक नियम सत्यापित करें",

    // Status & Labels
    labelVerifiedPyq: "सत्यापित PYQ",
    labelOriginal: "मौलिक अभ्यास प्रश्न",
    labelPyqStyle: "PYQ-शैली मॉडल प्रश्न",
    labelEligible: "पात्र (ELIGIBLE)",
    labelPotentiallyEligible: "संभावित रूप से पात्र",
    labelNotEligible: "पात्र नहीं (NOT ELIGIBLE)",
    labelVerifyRule: "आधिकारिक नियम सत्यापित करें",
    labelUpcoming: "आगामी",
    labelToday: "आज",
    labelExpired: "समाप्त",
    labelUpdated: "अपडेटेड",
    labelImportant: "महत्वपूर्ण",
    labelDeadlineSoon: "अंतिम तिथि शीघ्र",
    labelNew: "नया",
    labelInformation: "सूचना",

    // Dashboard Cards
    cardNotificationTitle: "नवीनतम आधिकारिक अधिसूचना",
    cardAppWindow: "आवेदन और सुधार विंडो",
    cardExamPattern: "परीक्षा पैटर्न और योजना",
    cardSubjectSelection: "विषय चयन विज़ार्ड",
    cardSyllabusHub: "पाठ्यक्रम और एनसीईआरटी मैपिंग",
    cardPyqBank: "PYQ मास्टर और ट्रेंड विश्लेषण",
    cardMockCenter: "एनटीए वास्तविक मॉक टेस्ट",
    cardAdaptivePractice: "अनुकूली विषय अभ्यास",
    cardUniversityCatalog: "भागीदार विश्वविद्यालय",
    cardCourseDiscovery: "कोर्स और डिग्री एक्सप्लोरर",
    cardAdmissionProcess: "प्रवेश प्रक्रिया बनाम सीयूईटी परीक्षा",
    cardCounsellingPortals: "विश्वविद्यालय काउंसलिंग पोर्टल",

    // Disclaimers
    disclaimerExamVsAdmission: "महत्वपूर्ण भेद: सीयूईटी परीक्षा में उपस्थित होने या उत्तीर्ण होने से किसी भी भागीदार विश्वविद्यालय में स्वतः प्रवेश की गारंटी नहीं मिलती है। प्रत्येक विश्वविद्यालय अपनी अलग प्रवेश और सीट आवंटन प्रक्रिया (जैसे डीयू सीएसएएस, बीएचयू सीएपी) विशिष्ट विषय नियमों के साथ संचालित करता है।",
    officialSourceGuarantee: "सभी पात्रता शर्तें, विषय संयोजन और पाठ्यक्रम प्रविष्टियाँ आधिकारिक एनटीए सूचना विवरणिका और विश्वविद्यालय प्रवेश प्रॉस्पेक्टस से ली गई हैं।"
  }
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<LanguageCode>(() => {
    const saved = localStorage.getItem('cuet_master_lang');
    return (saved === 'hi' || saved === 'en') ? saved : 'en';
  });

  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang);
    localStorage.setItem('cuet_master_lang', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
