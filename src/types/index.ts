export type ExamType = 'CUET-UG' | 'CUET-PG';

export type LanguageCode = 'en' | 'hi';

export interface ExamPatternConfig {
  exam: ExamType;
  year: number;
  duration: string;
  subjects: string[];
  questionCount: string;
  markingScheme: string;
  mode: string;
  eligibility: string;
  maxSubjectLimit?: number;
  officialSource: string;
  lastVerified: string;
  sections?: {
    name: string;
    description: string;
    questionsTotal: number;
    questionsToAttempt: number;
    durationMinutes: number;
    marksPerQuestion: number;
    negativeMarking: number;
  }[];
}

export type InstitutionType = 'Central' | 'State' | 'Deemed' | 'Private' | 'Other';

export interface University {
  universityId: string;
  name: string;
  hindiName?: string;
  shortName: string;
  type: InstitutionType;
  state: string;
  city: string;
  officialWebsite: string;
  admissionPortal: string;
  counsellingPortal?: string;
  prospectusUrl: string;
  cuetParticipation: boolean;
  participatingSince: number;
  ugParticipation: boolean;
  pgParticipation: boolean;
  description: string;
  reservationPolicy: {
    sc: string;
    st: string;
    obc_ncl: string;
    ews: string;
    pwbd: string;
    cw_defence?: string;
    sports_eca?: string;
    kashmiriMigrant?: string;
    officialNotes: string;
  };
  specialRules: string[];
  contactEmail: string;
  helpline: string;
  lastVerified: string;
  coordinates?: { lat: number; lng: number };
}

export interface Programme {
  programmeId: string;
  universityId: string;
  name: string;
  hindiName?: string;
  degree: string;
  level: 'UG' | 'PG';
  department: string;
  durationYears: number;
  intakeSeats?: number;
  tuitionFeePerYear?: string;
  eligibilityText: string;
  requiredClass12Subjects?: string[];
  minimumClass12Marks?: string;
  cuetSubjectsRequired: string[];
  cuetSubjectsAccepted?: string[];
  cuetPaperCode?: string; // For PG, e.g. COQP11, SCQP09
  isGatRequired: boolean;
  languageRequirement?: string;
  additionalConditions: string[];
  admissionProcess: string;
  officialSource: string;
  lastVerified: string;
}

export interface TopicConcept {
  id: string;
  name: string;
  hindiName?: string;
  summary: string;
  hindiSummary?: string;
  importantFormulasOrFacts: string[];
  ncertReference?: string;
  pyqFrequency: 'High' | 'Medium' | 'Low';
}

export interface SyllabusTopic {
  id: string;
  name: string;
  hindiName?: string;
  classLinkage?: 'Class 11' | 'Class 12' | 'General' | 'UG Degree';
  ncertChapter?: string;
  concepts: TopicConcept[];
  subtopics: string[];
  pyqFrequency: 'High' | 'Medium' | 'Low';
}

export interface SyllabusSubject {
  id: string;
  exam: ExamType;
  category: 'Language' | 'Domain' | 'General Test' | 'PG Paper';
  code: string;
  name: string;
  hindiName: string;
  description: string;
  officialPdfUrl: string;
  lastVerified: string;
  topics: SyllabusTopic[];
}

export type QuestionSourceType = 'VERIFIED PYQ' | 'ORIGINAL' | 'PYQ-STYLE';

export interface Question {
  id: string;
  exam: ExamType;
  year?: string;
  subject: string;
  paperCode?: string;
  chapter: string;
  topic: string;
  difficulty: 'easy' | 'moderate' | 'hard' | 'very hard';
  type: 'MCQ';
  question: string;
  hindiQuestion?: string;
  options: string[];
  hindiOptions?: string[];
  answer: number; // 0-based index
  explanation: string;
  hindiExplanation?: string;
  sourceType: QuestionSourceType;
  source: string;
  tags: string[];
  lastVerified: string;
}

export interface BookResource {
  id: string;
  title: string;
  author: string;
  publisher: string;
  edition: string;
  year: number;
  exam: ExamType;
  subject: string;
  syllabusCoverage: string;
  pyqCoverage: string;
  practiceQuestionsCount: string;
  difficulty: 'Beginner' | 'Comprehensive' | 'Advanced';
  intendedLearner: string;
  officialPublisherLink: string;
  legitimateBuyLinks: {
    platform: string;
    url: string;
  }[];
  ncertAlternative?: {
    title: string;
    url: string;
    isFreeGovernmentResource: boolean;
  };
  evaluationSummary: string;
}

export interface CurrentAffairItem {
  id: string;
  title: string;
  hindiTitle: string;
  category: 'National' | 'International' | 'Economy' | 'Science & Tech' | 'Sports' | 'Government' | 'Environment' | 'Awards & Honors' | 'Reports & Indexes';
  date: string;
  timeframe: 'Daily' | 'Weekly' | 'Monthly' | 'Yearly';
  summary: string;
  hindiSummary: string;
  examRelevance: string; // How GAT or domain questions ask this
  sampleQuestion?: {
    question: string;
    options: string[];
    answer: number;
    explanation: string;
  };
}

export interface NotificationItem {
  id: string;
  title: string;
  hindiTitle?: string;
  authority: 'NTA/CUET' | 'University' | 'UGC' | 'Government';
  exam?: ExamType | 'Both';
  universityId?: string;
  statusType: 'IMPORTANT' | 'DEADLINE SOON' | 'NEW' | 'INFORMATION';
  publishDate: string;
  deadlineDate?: string;
  description: string;
  officialSourceUrl: string;
  isActionable: boolean;
  actionText?: string;
}

export interface ImportantDateItem {
  id: string;
  title: string;
  event: string;
  exam: ExamType | 'University';
  universityName?: string;
  startDate: string;
  endDate?: string;
  status: 'Upcoming' | 'Today' | 'Expired' | 'Updated';
  sourceUrl: string;
  category: 'Application' | 'Correction' | 'Admit Card' | 'Exam' | 'Answer Key' | 'Result' | 'Counselling' | 'Admission';
}

export interface ScholarshipItem {
  id: string;
  name: string;
  provider: 'Government of India' | 'State Government' | 'University' | 'UGC';
  eligibility: string;
  benefits: string;
  category: 'All' | 'SC/ST' | 'OBC' | 'Minority' | 'Merit-cum-Means' | 'Single Girl Child';
  applicationPortal: string;
  lastVerified: string;
}

export interface CareerPathItem {
  id: string;
  stream: 'Science' | 'Commerce' | 'Arts/Humanities' | 'Vocational';
  degree: string;
  requiredCuetSubjects: string[];
  popularUniversities: string[];
  careerOpportunities: string[];
  furtherStudies: string[];
  informationalNotice: string;
}

export interface Flashcard {
  id: string;
  subject: string;
  chapter: string;
  topic: string;
  front: string;
  back: string;
  hindiFront?: string;
  hindiBack?: string;
  category: 'Formula' | 'Definition' | 'Fact' | 'Vocabulary' | 'Date';
}

export interface ErrorLogItem {
  id: string;
  questionId: string;
  questionText: string;
  subject: string;
  topic: string;
  userAnswer: number;
  correctAnswer: number;
  explanation: string;
  mistakeType: 'Concept gap' | 'Misread' | 'Calculation' | 'Guess' | 'Memory' | 'Time pressure' | 'Careless mistake';
  dateAdded: string;
  revised: boolean;
}

export interface TargetUniversityItem {
  universityId: string;
  programmeId: string;
  requiredSubjects: string[];
  targetScore?: number;
  applicationStatus: 'Not Started' | 'Registered' | 'Applied' | 'Counselling' | 'Admitted';
  notes?: string;
}

export interface MockTestResult {
  id: string;
  mockId: string;
  exam: ExamType;
  title: string;
  timestamp: string;
  totalQuestions: number;
  attempted: number;
  correct: number;
  incorrect: number;
  unattempted: number;
  score: number;
  maxScore: number;
  accuracy: number;
  timeSpentSeconds: number;
  subjectBreakdown: {
    [subject: string]: {
      correct: number;
      incorrect: number;
      score: number;
    };
  };
  weakTopics: string[];
}
