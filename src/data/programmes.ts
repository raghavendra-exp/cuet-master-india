import { Programme } from '../types';

export const programmesData: Programme[] = [
  // UNIVERSITY OF DELHI (DU) - UG
  {
    programmeId: "PROG-DU-001",
    universityId: "UNI-DU-001",
    name: "B.A. (Hons.) Economics",
    hindiName: "बी.ए. (ऑनर्स) अर्थशास्त्र",
    degree: "B.A. (Hons.)",
    level: "UG",
    department: "Department of Economics / Constituent Colleges (SRCC, St. Stephen's, Hindu, Hansraj, LSR)",
    durationYears: 4,
    intakeSeats: 2650,
    tuitionFeePerYear: "₹18,000 - ₹32,000 (varies by college)",
    eligibilityText: "Candidates must have passed Class XII from a recognized board. Mathematics is strictly compulsory in Class XII and in CUET.",
    requiredClass12Subjects: ["Mathematics / Applied Mathematics"],
    minimumClass12Marks: "Pass in Class 12",
    cuetSubjectsRequired: [
      "Any one Language from List A",
      "Mathematics / Applied Mathematics",
      "Any two subjects out of which at least one should be from List B1"
    ],
    cuetSubjectsAccepted: ["English", "Hindi", "Mathematics", "Applied Mathematics", "Economics", "Accountancy", "Physics", "Chemistry", "Political Science", "History"],
    isGatRequired: false,
    languageRequirement: "Any one Language from List A (English/Hindi/etc.)",
    additionalConditions: [
      "Candidate MUST have passed Mathematics/Applied Mathematics in Class XII.",
      "Candidate MUST appear in CUET in Mathematics/Applied Mathematics.",
      "All subjects chosen in CUET must match the subjects studied and passed in Class 12."
    ],
    admissionProcess: "CUET (UG) -> DU CSAS Portal Registration -> Preference Filling of Colleges -> Merit Calculation based on best CUET score combination -> Multi-round Seat Allocation.",
    officialSource: "https://admission.uod.ac.in/userfiles/downloads/DU-UG-BOI-2026.pdf",
    lastVerified: "2026-03-20"
  },
  {
    programmeId: "PROG-DU-002",
    universityId: "UNI-DU-001",
    name: "B.Com. (Hons.)",
    hindiName: "बी.कॉम. (ऑनर्स)",
    degree: "B.Com. (Hons.)",
    level: "UG",
    department: "Faculty of Commerce (SRCC, Hindu, Hansraj, Ramjas, LSR, KMC)",
    durationYears: 4,
    intakeSeats: 8900,
    tuitionFeePerYear: "₹15,000 - ₹35,000",
    eligibilityText: "Class XII pass with either Mathematics/Applied Mathematics OR Accountancy/Book Keeping.",
    requiredClass12Subjects: ["Mathematics OR Accountancy"],
    minimumClass12Marks: "Pass in Class 12",
    cuetSubjectsRequired: [
      "Combination 1: Any one Language from List A + Mathematics/Applied Mathematics + Any two subjects (at least one from B1)",
      "OR Combination 2: Any one Language from List A + Accountancy/Book Keeping + Any two subjects (at least one from B1)"
    ],
    cuetSubjectsAccepted: ["English", "Hindi", "Accountancy", "Mathematics", "Business Studies", "Economics", "Computer Science"],
    isGatRequired: false,
    languageRequirement: "One language from List A",
    additionalConditions: [
      "Candidates who did not have Mathematics in 12th can qualify via Accountancy combination.",
      "All CUET test papers must have been studied in Class 12."
    ],
    admissionProcess: "CUET (UG) -> DU CSAS -> College preference ranking -> Centralized allocation rounds.",
    officialSource: "https://admission.uod.ac.in",
    lastVerified: "2026-03-20"
  },
  {
    programmeId: "PROG-DU-003",
    universityId: "UNI-DU-001",
    name: "B.Sc. (Hons.) Computer Science",
    hindiName: "बी.एससी. (ऑनर्स) कंप्यूटर साइंस",
    degree: "B.Sc. (Hons.)",
    level: "UG",
    department: "Department of Computer Science / Colleges (Hansraj, Miranda House, SSCBS, ARSD)",
    durationYears: 4,
    intakeSeats: 1150,
    tuitionFeePerYear: "₹25,000 - ₹50,000",
    eligibilityText: "Class XII with Mathematics and any two science/domain subjects.",
    requiredClass12Subjects: ["Mathematics / Applied Mathematics"],
    minimumClass12Marks: "Pass in Class 12 with minimum 50% in Mathematics",
    cuetSubjectsRequired: [
      "Any one Language from List A",
      "Mathematics / Applied Mathematics",
      "Any two subjects from List B1 (e.g. Physics, Chemistry, Computer Science)"
    ],
    cuetSubjectsAccepted: ["English", "Mathematics", "Physics", "Chemistry", "Computer Science"],
    isGatRequired: false,
    languageRequirement: "Any one Language from List A",
    additionalConditions: [
      "Candidates must have studied and passed Mathematics in Class 12."
    ],
    admissionProcess: "CUET (UG) -> DU CSAS portal -> Merit generation based on Language + Maths + 2 domains.",
    officialSource: "https://admission.uod.ac.in",
    lastVerified: "2026-03-20"
  },
  {
    programmeId: "PROG-DU-004",
    universityId: "UNI-DU-001",
    name: "Bachelor of Management Studies (BMS) / BBA (FIA)",
    hindiName: "बैचलर ऑफ मैनेजमेंट स्टडीज (BMS)",
    degree: "BMS / BBA",
    level: "UG",
    department: "Shaheed Sukhdev College of Business Studies (SSCBS), Deen Dayal Upadhyaya College",
    durationYears: 4,
    intakeSeats: 980,
    tuitionFeePerYear: "₹25,000 - ₹35,000",
    eligibilityText: "Class XII pass with Mathematics as a compulsory subject.",
    requiredClass12Subjects: ["Mathematics / Applied Mathematics"],
    minimumClass12Marks: "Pass in Class 12",
    cuetSubjectsRequired: [
      "Any one Language from List A",
      "Mathematics / Applied Mathematics",
      "Section III - General Test (GAT)"
    ],
    isGatRequired: true,
    languageRequirement: "Compulsory Language from List A",
    additionalConditions: [
      "Score calculated strictly on Language + Mathematics + General Test (GAT)."
    ],
    admissionProcess: "CUET (UG) -> DU CSAS Portal -> Allocation based on 3-part composite score.",
    officialSource: "https://admission.uod.ac.in",
    lastVerified: "2026-03-20"
  },
  {
    programmeId: "PROG-DU-005",
    universityId: "UNI-DU-001",
    name: "B.A. (Hons.) Political Science",
    hindiName: "बी.ए. (ऑनर्स) राजनीति विज्ञान",
    degree: "B.A. (Hons.)",
    level: "UG",
    department: "Colleges (Hindu, Miranda House, LSR, Ramjas, Kirori Mal, KMC)",
    durationYears: 4,
    intakeSeats: 3800,
    tuitionFeePerYear: "₹12,000 - ₹24,000",
    eligibilityText: "Class XII pass from recognized board.",
    minimumClass12Marks: "Pass in Class 12",
    cuetSubjectsRequired: [
      "Any one Language from List A",
      "Any three subjects out of which at least two should be from List B1"
    ],
    cuetSubjectsAccepted: ["Political Science", "History", "Sociology", "Economics", "Geography", "Legal Studies"],
    isGatRequired: false,
    languageRequirement: "Any one language from List A",
    additionalConditions: [
      "Candidate can choose Political Science + any two other Class 12 subjects.",
      "Science and Commerce students in 12th can apply using their 12th board subjects!"
    ],
    admissionProcess: "CUET (UG) -> DU CSAS Portal -> Subject combination score ranking.",
    officialSource: "https://admission.uod.ac.in",
    lastVerified: "2026-03-20"
  },

  // BANARAS HINDU UNIVERSITY (BHU) - UG
  {
    programmeId: "PROG-BHU-001",
    universityId: "UNI-BHU-002",
    name: "B.A. (Hons.) Social Sciences",
    hindiName: "बी.ए. (ऑनर्स) सामाजिक विज्ञान",
    degree: "B.A. (Hons.)",
    level: "UG",
    department: "Faculty of Social Sciences, BHU Main Campus & MMV",
    durationYears: 3,
    intakeSeats: 573,
    tuitionFeePerYear: "₹3,500 - ₹5,000",
    eligibilityText: "Passed 10+2 or equivalent with minimum 50% marks in aggregate.",
    minimumClass12Marks: "50% for General, 45% for OBC, Pass for SC/ST",
    cuetSubjectsRequired: [
      "Section IA: Language Test (English or Hindi)",
      "Section III: General Test (GAT)"
    ],
    isGatRequired: true,
    languageRequirement: "English or Hindi (50% of language score + General Test score)",
    additionalConditions: [
      "Merit calculated using 50% weightage of Language Test + 100% weightage of General Test score.",
      "Candidate must register on BHU CAP portal after CUET result."
    ],
    admissionProcess: "CUET (UG) -> BHU Online Portal Registration -> Choice of Major Subject -> CAP Seat Counselling.",
    officialSource: "https://www.bhuonline.in",
    lastVerified: "2026-03-20"
  },
  {
    programmeId: "PROG-BHU-002",
    universityId: "UNI-BHU-002",
    name: "B.Sc. (Hons.) Mathematics Group",
    hindiName: "बी.एससी. (ऑनर्स) गणित समूह",
    degree: "B.Sc. (Hons.)",
    level: "UG",
    department: "Institute of Science, BHU",
    durationYears: 3,
    intakeSeats: 573,
    tuitionFeePerYear: "₹4,200 - ₹6,500",
    eligibilityText: "Passed 10+2 with Physics, Mathematics, and Chemistry/Statistics/Geology/Computer Science with minimum 50% marks.",
    requiredClass12Subjects: ["Physics", "Mathematics", "Chemistry / Computer Science"],
    minimumClass12Marks: "50% aggregate in science subjects",
    cuetSubjectsRequired: [
      "Section II: Physics",
      "Section II: Chemistry",
      "Section II: Mathematics"
    ],
    isGatRequired: false,
    additionalConditions: [
      "Composite merit based on Physics + Chemistry + Mathematics CUET scores.",
      "General Test and Language are not required for this programme."
    ],
    admissionProcess: "CUET (UG) PCM subjects -> BHU CAP Portal -> Category Ranks -> Seat Allocation.",
    officialSource: "https://www.bhuonline.in",
    lastVerified: "2026-03-20"
  },
  {
    programmeId: "PROG-BHU-003",
    universityId: "UNI-BHU-002",
    name: "B.Com. (Hons.)",
    hindiName: "बी.कॉम. (ऑनर्स)",
    degree: "B.Com. (Hons.)",
    level: "UG",
    department: "Faculty of Commerce, Main Campus / DAV / RGSC",
    durationYears: 3,
    intakeSeats: 486,
    tuitionFeePerYear: "₹3,800 - ₹5,500",
    eligibilityText: "Passed 10+2 or equivalent with Commerce / Economics / Maths / CS / Finance with minimum 50% marks.",
    minimumClass12Marks: "50% marks in 10+2",
    cuetSubjectsRequired: [
      "Section II: Accountancy",
      "Section II: Business Studies",
      "Section III: General Test (GAT)"
    ],
    isGatRequired: true,
    additionalConditions: [
      "Merit calculated based on Accountancy + Business Studies + General Test."
    ],
    admissionProcess: "CUET (UG) -> BHU CAP registration -> Preference locking -> Allotment.",
    officialSource: "https://www.bhuonline.in",
    lastVerified: "2026-03-20"
  },

  // JAWAHARLAL NEHRU UNIVERSITY (JNU) - UG
  {
    programmeId: "PROG-JNU-001",
    universityId: "UNI-JNU-003",
    name: "B.A. (Hons.) Foreign Languages (French / German / Spanish / Japanese / Korean / Russian)",
    hindiName: "बी.ए. (ऑनर्स) विदेशी भाषाएँ",
    degree: "B.A. (Hons.)",
    level: "UG",
    department: "School of Language, Literature and Culture Studies (SLL&CS)",
    durationYears: 3,
    intakeSeats: 442,
    tuitionFeePerYear: "₹350 - ₹500 (Heavily subsidized central university fee)",
    eligibilityText: "Senior School Certificate (10+2) or equivalent with minimum 45% marks.",
    minimumClass12Marks: "45% aggregate in 10+2",
    cuetSubjectsRequired: [
      "Section IA: English",
      "Section III: General Test (GAT)"
    ],
    isGatRequired: true,
    languageRequirement: "Section IA: English is mandatory",
    additionalConditions: [
      "Candidates must choose English + General Test in CUET.",
      "Deprivation Points (up to 12 points) added to raw score for candidates from backward district quartiles and female/transgender candidates."
    ],
    admissionProcess: "CUET (UG) English + GAT -> JNU Admission Portal Registration -> Deprivation Points calculation -> Publication of Cutoffs -> Verification.",
    officialSource: "https://jnuee.jnu.ac.in",
    lastVerified: "2026-03-20"
  },

  // DR. B.R. AMBEDKAR UNIVERSITY DELHI (AUD) - UG
  {
    programmeId: "PROG-AUD-001",
    universityId: "UNI-AUD-009",
    name: "B.A. (Hons.) Economics",
    hindiName: "बी.ए. (ऑनर्स) अर्थशास्त्र",
    degree: "B.A. (Hons.)",
    level: "UG",
    department: "School of Undergraduate Studies, Kashmere Gate Campus",
    durationYears: 4,
    intakeSeats: 120,
    tuitionFeePerYear: "₹45,000 - ₹60,000",
    eligibilityText: "10+2 with minimum 50% marks (45% for reserved categories). Mathematics in 10+2 is compulsory.",
    requiredClass12Subjects: ["Mathematics"],
    minimumClass12Marks: "50% in Class 12",
    cuetSubjectsRequired: [
      "Any one Language",
      "Mathematics / Applied Mathematics",
      "Best two other domain subjects"
    ],
    isGatRequired: false,
    additionalConditions: [
      "85% seats reserved for NCT of Delhi candidates.",
      "15% seats for candidates from outside Delhi."
    ],
    admissionProcess: "CUET (UG) -> AUD Samarth portal -> Delhi domicile quota verification -> Merit list.",
    officialSource: "https://aud.delhi.gov.in",
    lastVerified: "2026-03-20"
  },

  // UNIVERSITY OF ALLAHABAD (AU) - UG
  {
    programmeId: "PROG-AU-001",
    universityId: "UNI-AU-007",
    name: "B.A. (Bachelor of Arts)",
    hindiName: "बी.ए. (कला स्नातक)",
    degree: "B.A.",
    level: "UG",
    department: "Faculty of Arts & Affiliated Colleges",
    durationYears: 3,
    intakeSeats: 4600,
    tuitionFeePerYear: "₹3,900 - ₹5,500",
    eligibilityText: "Passed Intermediate (10+2) examination or equivalent.",
    minimumClass12Marks: "Pass in 10+2",
    cuetSubjectsRequired: [
      "Language: English or Hindi",
      "At least 2 Domain Subjects (History, Political Science, Geography, Economics, etc.)",
      "Section III: General Test (GAT)"
    ],
    isGatRequired: true,
    languageRequirement: "English or Hindi",
    additionalConditions: [
      "AU computes merit on Language + 2 Domain Subjects + General Test.",
      "Must register on AU Counselling Portal."
    ],
    admissionProcess: "CUET (UG) -> AU Portal Registration -> Cutoff declarations in rounds -> Document verification.",
    officialSource: "https://www.allduniv.ac.in",
    lastVerified: "2026-03-20"
  },

  // TATA INSTITUTE OF SOCIAL SCIENCES (TISS) - UG
  {
    programmeId: "PROG-TISS-001",
    universityId: "UNI-TISS-013",
    name: "B.A. in Social Sciences",
    hindiName: "बी.ए. सामाजिक विज्ञान",
    degree: "B.A.",
    level: "UG",
    department: "School of Rural Development, Tuljapur Campus / Guwahati Campus",
    durationYears: 3,
    intakeSeats: 60,
    tuitionFeePerYear: "₹45,000 - ₹70,000",
    eligibilityText: "Passed 12th Class or Intermediate in any subject stream from a recognized board.",
    minimumClass12Marks: "Pass in Class 12",
    cuetSubjectsRequired: [
      "Section IA: English",
      "Section III: General Test (GAT)"
    ],
    isGatRequired: true,
    languageRequirement: "Section IA: English is compulsory",
    additionalConditions: [
      "TISS admission based purely on English + General Test score in CUET.",
      "Separate registration required on TISS admission portal."
    ],
    admissionProcess: "CUET (UG) English + GAT -> TISS Online Application -> Allotment based on composite cutoff.",
    officialSource: "https://admissions.tiss.edu",
    lastVerified: "2026-03-20"
  },

  // -------------------------------------------------------------
  // POSTGRADUATE PROGRAMMES (CUET-PG)
  // -------------------------------------------------------------
  {
    programmeId: "PROG-DU-PG-001",
    universityId: "UNI-DU-001",
    name: "M.A. Political Science",
    hindiName: "एम.ए. राजनीति विज्ञान",
    degree: "M.A.",
    level: "PG",
    department: "Department of Political Science, Faculty of Social Sciences",
    durationYears: 2,
    intakeSeats: 640,
    tuitionFeePerYear: "₹10,000 - ₹15,000",
    eligibilityText: "Bachelor's degree in any discipline with at least 50% marks from a recognized university.",
    minimumClass12Marks: "Graduation: 50% (45% for SC/ST/PwBD)",
    cuetSubjectsRequired: ["HUQP18 - Political Science"],
    cuetPaperCode: "HUQP18",
    isGatRequired: false,
    additionalConditions: [
      "Admission strictly through score obtained in CUET-PG Paper HUQP18.",
      "DU CSAS-PG registration is mandatory."
    ],
    admissionProcess: "CUET-PG HUQP18 -> DU CSAS (PG) Portal -> Merit Allocation across North & South campus colleges.",
    officialSource: "https://admission.uod.ac.in",
    lastVerified: "2026-03-20"
  },
  {
    programmeId: "PROG-DU-PG-002",
    universityId: "UNI-DU-001",
    name: "Master of Computer Applications (MCA)",
    hindiName: "मास्टर ऑफ कंप्यूटर एप्लीकेशन (MCA)",
    degree: "MCA",
    level: "PG",
    department: "Department of Computer Science, Faculty of Mathematical Sciences",
    durationYears: 2,
    intakeSeats: 110,
    tuitionFeePerYear: "₹20,000 - ₹28,000",
    eligibilityText: "Bachelor's degree with Mathematics at 10+2 level or at graduation level with minimum 60% marks.",
    minimumClass12Marks: "Graduation: 60% marks with Mathematics",
    cuetSubjectsRequired: ["SCQP09 - Computer Science / IT / Computer Application"],
    cuetPaperCode: "SCQP09",
    isGatRequired: false,
    additionalConditions: [
      "Candidate must have studied Mathematics for at least one year during graduation or at 10+2 level.",
      "100% merit from CUET-PG SCQP09 score."
    ],
    admissionProcess: "CUET-PG SCQP09 -> DU CSAS-PG Portal -> Centralized document verification and seat allocation.",
    officialSource: "https://admission.uod.ac.in",
    lastVerified: "2026-03-20"
  },
  {
    programmeId: "PROG-DU-PG-003",
    universityId: "UNI-DU-001",
    name: "LL.B. (3-Year Bachelor of Laws)",
    hindiName: "एलएल.बी. (3-वर्षीय विधि स्नातक)",
    degree: "LL.B.",
    level: "PG",
    department: "Faculty of Law (Campus Law Centre, Law Centre-I, Law Centre-II)",
    durationYears: 3,
    intakeSeats: 3300,
    tuitionFeePerYear: "₹8,000 - ₹12,000",
    eligibilityText: "Graduate or Postgraduate degree with at least 50% marks for General, 45% for OBC, 40% for SC/ST.",
    minimumClass12Marks: "Graduation: 50% for Gen/EWS, 45% OBC, 40% SC/ST",
    cuetSubjectsRequired: ["COQP11 - General LLB Paper (English Comprehension, Legal Awareness, GK, Computer Basics, Analytical Reasoning)"],
    cuetPaperCode: "COQP11",
    isGatRequired: false,
    additionalConditions: [
      "Admissions determined solely by score in COQP11 General Paper.",
      "Ranked choice of Law Centres (CLC, LC-1, LC-2) in CSAS PG."
    ],
    admissionProcess: "CUET-PG COQP11 -> DU CSAS-PG Portal -> Law Centre Allocation Rounds.",
    officialSource: "https://admission.uod.ac.in",
    lastVerified: "2026-03-20"
  },
  {
    programmeId: "PROG-JNU-PG-001",
    universityId: "UNI-JNU-003",
    name: "M.A. in International Relations & Area Studies",
    hindiName: "एम.ए. अंतर्राष्ट्रीय संबंध",
    degree: "M.A.",
    level: "PG",
    department: "School of International Studies (SIS)",
    durationYears: 2,
    intakeSeats: 180,
    tuitionFeePerYear: "₹380",
    eligibilityText: "Bachelor's degree in any discipline under 10+2+3 pattern with at least 50% marks.",
    minimumClass12Marks: "Graduation: 50% marks",
    cuetSubjectsRequired: ["HUQP18 - Political Science"],
    cuetPaperCode: "HUQP18",
    isGatRequired: false,
    additionalConditions: [
      "JNU considers only the subject domain test score (75 questions) for PG merit.",
      "Deprivation points policy applies to eligible candidates from backward quartiles."
    ],
    admissionProcess: "CUET-PG HUQP18 -> JNU PG Portal Registration -> Deprivation Points -> Merit List.",
    officialSource: "https://jnuee.jnu.ac.in",
    lastVerified: "2026-03-20"
  },
  {
    programmeId: "PROG-BHU-PG-001",
    universityId: "UNI-BHU-002",
    name: "Master of Business Administration (MBA / MBA-IB)",
    hindiName: "एम.बी.ए. (मास्टर ऑफ बिजनेस एडमिनिस्ट्रेशन)",
    degree: "MBA",
    level: "PG",
    department: "Institute of Management Studies (FMS BHU)",
    durationYears: 2,
    intakeSeats: 120,
    tuitionFeePerYear: "₹48,000 - ₹95,000",
    eligibilityText: "Bachelor's degree with minimum 50% marks in any stream (45% for SC/ST).",
    minimumClass12Marks: "Graduation: 50%",
    cuetSubjectsRequired: ["COQP12 - General Management / MBA"],
    cuetPaperCode: "COQP12",
    isGatRequired: false,
    additionalConditions: [
      "Merit calculated using CUET-PG COQP12 score followed by Group Discussion and Personal Interview (GD-PI) conducted by FMS BHU."
    ],
    admissionProcess: "CUET-PG COQP12 -> BHU CAP Registration -> Shortlisting for GD-PI -> Final Merit Offer.",
    officialSource: "https://www.bhuonline.in",
    lastVerified: "2026-03-20"
  },
  {
    programmeId: "PROG-TISS-PG-001",
    universityId: "UNI-TISS-013",
    name: "M.A. in Human Resources Management & Labour Relations (HRM & LR)",
    hindiName: "एम.ए. मानव संसाधन प्रबंधन (HRM & LR)",
    degree: "M.A.",
    level: "PG",
    department: "School of Management and Labour Studies, Mumbai Campus",
    durationYears: 2,
    intakeSeats: 68,
    tuitionFeePerYear: "₹1,40,000",
    eligibilityText: "Bachelor's degree of minimum 3 or 4 years duration in any discipline with minimum 50% marks.",
    minimumClass12Marks: "Graduation: 50%",
    cuetSubjectsRequired: ["COQP12 - General Management"],
    cuetPaperCode: "COQP12",
    isGatRequired: false,
    additionalConditions: [
      "TISS admission is based on CUET-PG COQP12 score + Online Personal Interview (OPI).",
      "CUET-PG Score weightage: 75%; Online Assessment / PI weightage: 25%."
    ],
    admissionProcess: "CUET-PG COQP12 -> TISS Online Application -> Shortlist for Online Personal Interview -> Composite Merit.",
    officialSource: "https://admissions.tiss.edu",
    lastVerified: "2026-03-20"
  }
];
