import { ScholarshipItem, CareerPathItem } from '../types';

export const scholarshipsData: ScholarshipItem[] = [
  {
    id: "SCH-001",
    name: "Central Sector Scheme of Scholarship for College and University Students (CSSS)",
    provider: "Government of India",
    eligibility: "Top 80th percentile of successful candidates in relevant stream in Class 12 from state/central board with family annual income up to ₹4.5 lakh.",
    benefits: "₹12,000 per annum for graduation (1st to 3rd year) and ₹20,000 per annum at postgraduate level.",
    category: "Merit-cum-Means",
    applicationPortal: "https://scholarships.gov.in",
    lastVerified: "2026-03-15"
  },
  {
    id: "SCH-002",
    name: "Post-Matric Scholarship Scheme for SC / ST / OBC Students",
    provider: "Government of India",
    eligibility: "SC, ST, and OBC students pursuing undergraduate and postgraduate degree courses with family income threshold limits per central/state guidelines.",
    benefits: "Full reimbursement of compulsory non-refundable fees plus monthly academic maintenance allowance.",
    category: "SC/ST",
    applicationPortal: "https://scholarships.gov.in",
    lastVerified: "2026-03-15"
  },
  {
    id: "SCH-003",
    name: "PG Indira Gandhi Scholarship for Single Girl Child",
    provider: "UGC",
    eligibility: "Single girl child of her parents admitted to any regular, full-time 1st year Master's degree programme in any designated university.",
    benefits: "₹36,200 per annum for two-year Master's degree course.",
    category: "Single Girl Child",
    applicationPortal: "https://scholarships.gov.in",
    lastVerified: "2026-03-15"
  },
  {
    id: "SCH-004",
    name: "University of Delhi Vice Chancellor's Financial Support Scheme (VCFSS)",
    provider: "University",
    eligibility: "Full-time bonafide undergraduate/postgraduate students of DU with family annual income less than ₹4 lakh (up to 100% fee waiver) or ₹4-8 lakh (up to 50% waiver).",
    benefits: "Fee waiver up to 100% of college and university tuition fees.",
    category: "Merit-cum-Means",
    applicationPortal: "https://www.du.ac.in",
    lastVerified: "2026-03-15"
  }
];

export const careerPathsData: CareerPathItem[] = [
  {
    id: "CAREER-SCI-01",
    stream: "Science",
    degree: "B.Sc. (Hons.) Physics / Chemistry / Mathematics / Computer Science",
    requiredCuetSubjects: ["Language (English)", "Physics", "Chemistry", "Mathematics"],
    popularUniversities: ["University of Delhi", "Banaras Hindu University", "Central University of Rajasthan", "Pondicherry University"],
    careerOpportunities: [
      "Data Science & Quantitative Analytics",
      "Software Development & Algorithm Engineering",
      "Scientific Research & R&D Laboratories (ISRO, DRDO, BARC)",
      "Financial Quantitative Analyst / Actuarial Analyst",
      "Civil Services (IAS, IFS, IPS) and State Administrative Services"
    ],
    furtherStudies: ["M.Sc. / Integrated Ph.D.", "MCA", "MBA / MS Analytics", "M.Tech via GATE"],
    informationalNotice: "Career pathways are illustrative based on typical industry outcomes. Admission to postgraduate institutes or corporate placements depends on individual academic performance."
  },
  {
    id: "CAREER-COM-01",
    stream: "Commerce",
    degree: "B.Com. (Hons.) / BMS / BBA (FIA)",
    requiredCuetSubjects: ["Language (English)", "Mathematics OR Accountancy", "Business Studies", "Economics / General Test"],
    popularUniversities: ["SRCC (DU)", "Hindu College (DU)", "Hansraj College (DU)", "BHU", "AUD Delhi"],
    careerOpportunities: [
      "Investment Banking & Financial Advisory",
      "Chartered Accountancy (CA) & Corporate Audit",
      "Management Consulting & Strategy (Big 4 / MBB)",
      "Corporate Finance, Treasury & Risk Management",
      "Fintech, Venture Capital & Entrepreneurship"
    ],
    furtherStudies: ["MBA from IIMs/FMS/XLRI", "M.Com", "CFA (Chartered Financial Analyst)", "Law (LL.B.)"],
    informationalNotice: "Professional roles often require supplementary certifications such as CA, CFA, or competitive postgrad degrees."
  },
  {
    id: "CAREER-ART-01",
    stream: "Arts/Humanities",
    degree: "B.A. (Hons.) Economics / Political Science / History / Psychology / Sociology",
    requiredCuetSubjects: ["Language (English/Hindi)", "Two to Three Domain Subjects (e.g. Political Science, History, Economics)", "General Test (for BHU/JNU/AU)"],
    popularUniversities: ["St. Stephen's / LSR / Miranda House (DU)", "JNU", "BHU", "TISS Mumbai", "AUD Delhi"],
    careerOpportunities: [
      "Public Policy, Governance & Think Tanks (NITI Aayog, CPR, ORF)",
      "Civil Services Examination (UPSC CSE / State PSCs)",
      "Journalism, Investigative Media & Publishing",
      "Human Resource Management & Organizational Behaviour",
      "Diplomacy, Foreign Affairs & International Development (UN, World Bank)"
    ],
    furtherStudies: ["M.A. in specialized discipline", "LL.B. (3-Year Law)", "Masters in Public Policy (MPP)", "MBA in HR / General Management"],
    informationalNotice: "Humanities degrees offer versatile foundation for civil services, law, media, corporate communications, and public administration."
  },
  {
    id: "CAREER-VOC-01",
    stream: "Vocational",
    degree: "B.Voc. / BCA / BJMC (Bachelor of Journalism and Mass Communication)",
    requiredCuetSubjects: ["Language (English)", "General Test (GAT)", "Optional Domain (Mass Media / Computer Science)"],
    popularUniversities: ["Guru Gobind Singh Indraprastha University (GGSIPU)", "DSEU Delhi", "BBAU Lucknow", "Central Universities"],
    careerOpportunities: [
      "Digital Media Production, Broadcasting & PR",
      "Application & Web Development, Software Quality Assurance",
      "E-commerce Operations & Supply Chain Logistics",
      "Content Strategy, Technical Writing & Digital Marketing"
    ],
    furtherStudies: ["MCA", "MA Mass Communication", "MBA in Digital Business / Operations"],
    informationalNotice: "Skill-oriented programmes emphasize practical internships and industry certifications."
  }
];
