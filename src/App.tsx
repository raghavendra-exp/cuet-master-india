import React, { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { DesktopSidebar } from './components/layout/DesktopSidebar';
import { MobileBottomNav } from './components/layout/MobileBottomNav';
import { Breadcrumbs, BreadcrumbItem } from './components/layout/Breadcrumbs';
import { Footer } from './components/layout/Footer';
import { GlobalSearchModal } from './components/common/GlobalSearchModal';

// Engines & Dashboards
import { HomeHub } from './components/dashboard/HomeHub';
import { UgDashboard } from './components/dashboard/UgDashboard';
import { PgDashboard } from './components/dashboard/PgDashboard';
import { SubjectSelectionWizard } from './components/wizard/SubjectSelectionWizard';
import { EligibilityChecker } from './components/wizard/EligibilityChecker';
import { WhereCanIApply } from './components/wizard/WhereCanIApply';
import { UniversityExplorer } from './components/universities/UniversityExplorer';
import { UniversityComparison } from './components/universities/UniversityComparison';
import { CourseExplorer } from './components/courses/CourseExplorer';
import { SyllabusExplorer } from './components/syllabus/SyllabusExplorer';
import { PracticeEngine } from './components/practice/PracticeEngine';
import { PyqMaster } from './components/pyq/PyqMaster';
import { MockTestsPage } from './components/mock/MockTestsPage';
import { BookLibraryView } from './components/info/BookLibraryView';
import { FlashcardsAndNotes } from './components/learning/FlashcardsAndNotes';
import { CurrentAffairsView } from './components/info/CurrentAffairsView';
import { NotificationsAndDatesView } from './components/info/NotificationsAndDatesView';
import { ScholarshipsView } from './components/info/ScholarshipsView';
import { CareerDiscoveryView } from './components/info/CareerDiscoveryView';
import { AdmissionProcessTrackerView } from './components/tracking/AdmissionProcessTrackerView';
import { TargetUniversitiesView } from './components/tracking/TargetUniversitiesView';
import { ErrorNotebookView } from './components/learning/ErrorNotebookView';
import { ScoreTrackerView } from './components/tracking/ScoreTrackerView';
import { ZeroToCuetRoadmapView } from './components/planner/ZeroToCuetRoadmapView';

import { ExamType } from './types';
import { LanguageProvider } from './context/LanguageContext';
import { UserProgressProvider } from './context/UserProgressContext';

export function AppContent() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [activeExam, setActiveExam] = useState<ExamType | 'Both'>('Both');
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  // Scroll to top on tab change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentTab]);

  // Compute dynamic clickable breadcrumbs as per Requirement #22 and #61
  const getBreadcrumbs = (): BreadcrumbItem[] => {
    switch (currentTab) {
      case 'home':
        return [];
      case 'ug-dashboard':
        return [{ label: "CUET-UG", tab: "ug-dashboard" }, { label: "2026 Dashboard" }];
      case 'pg-dashboard':
        return [{ label: "CUET-PG", tab: "pg-dashboard" }, { label: "2026 Dashboard" }];
      case 'subject-wizard':
        return [{ label: "CUET", tab: "home" }, { label: "Subject Selection Wizard" }];
      case 'eligibility-checker':
        return [{ label: "CUET", tab: "home" }, { label: "Eligibility Checker" }];
      case 'where-can-i-apply':
        return [{ label: "CUET", tab: "home" }, { label: "Where Can I Apply?" }];
      case 'universities':
        return [{ label: "CUET", tab: "home" }, { label: "Universities Explorer" }];
      case 'courses':
        return [{ label: "CUET", tab: "home" }, { label: "Course Discovery" }];
      case 'compare-universities':
        return [{ label: "Universities", tab: "universities" }, { label: "Compare Universities" }];
      case 'syllabus':
        return [{ label: "CUET", tab: "home" }, { label: "Syllabus & NCERT Mapping" }];
      case 'practice':
        return [{ label: "CUET", tab: "home" }, { label: "Practice Engine" }];
      case 'pyq-master':
        return [{ label: "CUET", tab: "home" }, { label: "PYQ Master & Trends" }];
      case 'mock-tests':
        return [{ label: "CUET", tab: "home" }, { label: "NTA Mock Test Center" }];
      case 'books':
        return [{ label: "CUET", tab: "home" }, { label: "Book Library & NCERT" }];
      case 'flashcards-notes':
        return [{ label: "Learning", tab: "home" }, { label: "Flashcards & Notes" }];
      case 'current-affairs':
        return [{ label: "CUET-UG", tab: "ug-dashboard" }, { label: "Section III: Current Affairs" }];
      case 'important-dates':
      case 'notifications':
        return [{ label: "Official", tab: "home" }, { label: "Notifications & Deadlines" }];
      case 'scholarships':
        return [{ label: "Admission", tab: "home" }, { label: "Scholarships & Schemes" }];
      case 'career-discovery':
        return [{ label: "Guidance", tab: "home" }, { label: "What Can I Do After Class 12?" }];
      case 'admissions-tracker':
        return [{ label: "Admission", tab: "home" }, { label: "Counselling & Process Tracker" }];
      case 'target-universities':
        return [{ label: "Workspace", tab: "home" }, { label: "My Target Universities" }];
      case 'error-notebook':
        return [{ label: "Workspace", tab: "home" }, { label: "Error Notebook" }];
      case 'score-tracker':
        return [{ label: "Workspace", tab: "home" }, { label: "Score Analytics" }];
      case 'zero-to-cuet':
        return [{ label: "Milestones", tab: "home" }, { label: "Zero-to-CUET Roadmap" }];
      default:
        return [{ label: currentTab }];
    }
  };

  const renderActiveView = () => {
    switch (currentTab) {
      case 'home':
        return <HomeHub setCurrentTab={setCurrentTab} setActiveExam={setActiveExam} />;
      case 'ug-dashboard':
        return <UgDashboard setCurrentTab={setCurrentTab} />;
      case 'pg-dashboard':
        return <PgDashboard setCurrentTab={setCurrentTab} />;
      case 'subject-wizard':
        return <SubjectSelectionWizard />;
      case 'eligibility-checker':
        return <EligibilityChecker />;
      case 'where-can-i-apply':
        return <WhereCanIApply />;
      case 'universities':
        return <UniversityExplorer />;
      case 'compare-universities':
        return <UniversityComparison />;
      case 'courses':
        return <CourseExplorer />;
      case 'syllabus':
        return <SyllabusExplorer onStartTopicPractice={() => setCurrentTab('practice')} />;
      case 'practice':
        return <PracticeEngine />;
      case 'pyq-master':
        return <PyqMaster />;
      case 'mock-tests':
        return <MockTestsPage />;
      case 'books':
        return <BookLibraryView />;
      case 'flashcards-notes':
        return <FlashcardsAndNotes />;
      case 'current-affairs':
        return <CurrentAffairsView />;
      case 'important-dates':
      case 'notifications':
        return <NotificationsAndDatesView />;
      case 'scholarships':
        return <ScholarshipsView />;
      case 'career-discovery':
        return <CareerDiscoveryView setCurrentTab={setCurrentTab} />;
      case 'admissions-tracker':
        return <AdmissionProcessTrackerView />;
      case 'target-universities':
        return <TargetUniversitiesView />;
      case 'error-notebook':
        return <ErrorNotebookView />;
      case 'score-tracker':
        return <ScoreTrackerView />;
      case 'zero-to-cuet':
        return <ZeroToCuetRoadmapView setCurrentTab={setCurrentTab} />;
      default:
        return <HomeHub setCurrentTab={setCurrentTab} setActiveExam={setActiveExam} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors selection:bg-blue-600 selection:text-white">
      {/* Header */}
      <Header
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        activeExam={activeExam}
        setActiveExam={setActiveExam}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Clickable Breadcrumbs */}
      <Breadcrumbs items={getBreadcrumbs()} setCurrentTab={setCurrentTab} />

      {/* Main Body with Sidebar + Dynamic View */}
      <div className="flex-1 flex max-w-7xl w-full mx-auto">
        <DesktopSidebar currentTab={currentTab} setCurrentTab={setCurrentTab} />
        <main className="flex-1 overflow-x-hidden min-w-0 pb-16 md:pb-10">
          {renderActiveView()}
        </main>
      </div>

      {/* Mobile Bottom Navigation Bar */}
      <MobileBottomNav currentTab={currentTab} setCurrentTab={setCurrentTab} />

      {/* Global Search Modal (Ctrl + K) */}
      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        setCurrentTab={setCurrentTab}
      />

      {/* Official-First Footer */}
      <Footer setCurrentTab={setCurrentTab} />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <UserProgressProvider>
        <AppContent />
      </UserProgressProvider>
    </LanguageProvider>
  );
}
