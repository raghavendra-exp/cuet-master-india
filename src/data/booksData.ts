import { BookResource } from '../types';

export const booksData: BookResource[] = [
  {
    id: "BOOK-NCERT-ALL",
    title: "NCERT Class 12 Textbooks (Official Curriculum)",
    author: "National Council of Educational Research and Training (NCERT)",
    publisher: "NCERT (Government of India)",
    edition: "Latest Rationalised Edition",
    year: 2026,
    exam: "CUET-UG",
    subject: "All Domain Subjects",
    syllabusCoverage: "100% of Domain Subjects (Domain subjects in CUET-UG strictly follow NCERT Class 12 syllabus)",
    pyqCoverage: "Foundational concepts and exemplar questions reflected in 90%+ CUET domain questions",
    practiceQuestionsCount: "Chapter-end exercises + NCERT Exemplar",
    difficulty: "Beginner",
    intendedLearner: "Every CUET-UG candidate (Mandatory foundation before touching any private guide)",
    officialPublisherLink: "https://ncert.nic.in/textbook.php",
    legitimateBuyLinks: [
      { platform: "NCERT Official Publication Portal", url: "https://ncertbooks.prabandh.gov.in" },
      { platform: "Amazon India", url: "https://www.amazon.in/s?k=ncert+class+12" }
    ],
    ncertAlternative: {
      title: "ePathshala / DIKSHA Free Government Digital Portal",
      url: "https://epathshala.nic.in",
      isFreeGovernmentResource: true
    },
    evaluationSummary: "The single most indispensable source for CUET-UG domain subjects. NTA explicitly formulates domain questions from Class 12 NCERT lines, definitions, diagrams, and summary tables. Free PDFs legally provided by NCERT."
  },
  {
    id: "BOOK-OSWAAL-UG-ENG",
    title: "Oswaal NTA CUET (UG) Question Bank English",
    author: "Oswaal Editorial Board",
    publisher: "Oswaal Books",
    edition: "2026 Exam Edition",
    year: 2026,
    exam: "CUET-UG",
    subject: "English",
    syllabusCoverage: "Comprehensive coverage of Reading Comprehension, Grammar rules, Vocabulary roots, Para Jumbles",
    pyqCoverage: "Includes fully solved 2022, 2023, 2024, and 2025 CUET question papers with answer keys",
    practiceQuestionsCount: "1,500+ Chapter-wise MCQs with detailed explanations",
    difficulty: "Comprehensive",
    intendedLearner: "Students preparing for CUET Language section seeking extensive question variety",
    officialPublisherLink: "https://oswaalbooks.com",
    legitimateBuyLinks: [
      { platform: "Oswaal Books Store", url: "https://oswaalbooks.com/collections/cuet-ug-books" },
      { platform: "Amazon India", url: "https://www.amazon.in/s?k=oswaal+cuet+english" },
      { platform: "Flipkart", url: "https://www.flipkart.com/search?q=oswaal+cuet+english" }
    ],
    evaluationSummary: "High-quality compilation of chapter-wise practice and actual previous exam shifts. Offers 'Mind Maps' and 'On Tips Notes' for quick revision."
  },
  {
    id: "BOOK-ARIHANT-GAT",
    title: "Arihant Master Guide CUET (UG) General Test (Section III)",
    author: "Sanjeev Joon & Arihant Experts",
    publisher: "Arihant Publications",
    edition: "2026 Edition",
    year: 2026,
    exam: "CUET-UG",
    subject: "General Test",
    syllabusCoverage: "Complete coverage of GK, Current Affairs, Numerical Ability, Reasoning & GMA",
    pyqCoverage: "30+ Solved official NTA papers and shift papers",
    practiceQuestionsCount: "3,000+ Practice MCQs across sections + 5 Full Length Practice Sets",
    difficulty: "Comprehensive",
    intendedLearner: "Candidates targeting courses requiring Section III (GAT) like BBA, BMS, BJMC, Law, and BHU/AU Arts",
    officialPublisherLink: "https://www.arihantbooks.com",
    legitimateBuyLinks: [
      { platform: "Arihant Official Store", url: "https://www.arihantbooks.com" },
      { platform: "Amazon India", url: "https://www.amazon.in/s?k=arihant+cuet+general+test" }
    ],
    evaluationSummary: "Extremely thorough division of quantitative arithmetic and logical reasoning tricks. Strong historical questions bank."
  },
  {
    id: "BOOK-DISHA-ECO",
    title: "Disha Go To Guide for CUET (UG) Economics / Business Economics",
    author: "Disha Experts",
    publisher: "Disha Publication",
    edition: "4th Edition",
    year: 2026,
    exam: "CUET-UG",
    subject: "Economics",
    syllabusCoverage: "Microeconomics, Macroeconomics, and Indian Economic Development aligned with NCERT",
    pyqCoverage: "Past years solved papers (2022 to 2025) categorized topic-wise",
    practiceQuestionsCount: "1,200+ Multiple Choice Questions with NCERT Page References",
    difficulty: "Comprehensive",
    intendedLearner: "Commerce and Arts students targeting BA (Hons) Economics and B.Com (Hons) at DU, BHU, AUD",
    officialPublisherLink: "https://dishapublication.com",
    legitimateBuyLinks: [
      { platform: "Disha Publication Store", url: "https://dishapublication.com" },
      { platform: "Amazon India", url: "https://www.amazon.in/s?k=disha+cuet+economics" }
    ],
    evaluationSummary: "Includes unique assertion-reason questions and case-study passage-based questions modeled on latest NTA test interface."
  },
  {
    id: "BOOK-EDUCART-PHY",
    title: "Educart NTA CUET (UG) Physics One-Shot Practice & Mock Papers",
    author: "Educart Editorial Board",
    publisher: "Agrawal Group / Educart",
    edition: "2026 Edition",
    year: 2026,
    exam: "CUET-UG",
    subject: "Physics",
    syllabusCoverage: "Full Class 12 Physics syllabus with formula cheat sheets",
    pyqCoverage: "Complete analysis of tricky calculation questions from 2023-2025 shifts",
    practiceQuestionsCount: "800+ Questions + 10 Full NTA Mock Tests with OMR sheets",
    difficulty: "Advanced",
    intendedLearner: "Science aspirants targeting B.Sc (Hons) Physics/Maths/CS and B.Tech seats",
    officialPublisherLink: "https://www.educart.co",
    legitimateBuyLinks: [
      { platform: "Educart Official Store", url: "https://www.educart.co" },
      { platform: "Amazon India", url: "https://www.amazon.in/s?k=educart+cuet+physics" }
    ],
    evaluationSummary: "Focused on speed solving techniques, graph interpretations, and formula substitution questions."
  },
  {
    id: "BOOK-ARIHANT-COQP11",
    title: "Arihant CUET-PG COQP11 General Paper / LLB Entrance Guide",
    author: "Arihant Experts",
    publisher: "Arihant Publications",
    edition: "2026 Exam Edition",
    year: 2026,
    exam: "CUET-PG",
    subject: "COQP11 General Paper",
    syllabusCoverage: "Full coverage of Legal Awareness, Computer Basics, English Comprehension, and Reasoning",
    pyqCoverage: "Past solved papers of DU LLB, BHU LLB, and CUET-PG COQP11",
    practiceQuestionsCount: "2,500+ Practice Questions + 5 Mock Tests",
    difficulty: "Comprehensive",
    intendedLearner: "Postgraduate aspirants targeting DU LLB, BHU LLB, B.Ed, and MA Mass Communication",
    officialPublisherLink: "https://www.arihantbooks.com",
    legitimateBuyLinks: [
      { platform: "Arihant Official Store", url: "https://www.arihantbooks.com" },
      { platform: "Amazon India", url: "https://www.amazon.in/s?k=cuet+pg+coqp11" }
    ],
    evaluationSummary: "Dedicated legal awareness and computer concepts section addressing the unique 75-question domain pattern of COQP11."
  }
];
