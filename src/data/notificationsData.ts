import { NotificationItem, ImportantDateItem } from '../types';

export const notificationsData: NotificationItem[] = [
  {
    id: "NOTIF-NTA-001",
    title: "NTA Public Notice: Schedule for Common University Entrance Test CUET (UG) 2026",
    hindiTitle: "एनटीए सार्वजनिक सूचना: सीयूईटी (यूजी) 2026 परीक्षा कार्यक्रम",
    authority: "NTA/CUET",
    exam: "CUET-UG",
    statusType: "IMPORTANT",
    publishDate: "2026-03-01",
    deadlineDate: "2026-04-05",
    description: "National Testing Agency invites online applications for Common University Entrance Test (UG) 2026 for admission to undergraduate programmes in Central, State, Deemed, and Private Participating Universities.",
    officialSourceUrl: "https://exams.nta.ac.in/CUET-UG/",
    isActionable: true,
    actionText: "Visit NTA CUET-UG Portal"
  },
  {
    id: "NOTIF-NTA-002",
    title: "CUET (PG) 2026 Admit Card and Advanced City Intimation Slip Live",
    hindiTitle: "सीयूईटी (पीजी) 2026 प्रवेश पत्र और परीक्षा शहर सूचना पर्ची जारी",
    authority: "NTA/CUET",
    exam: "CUET-PG",
    statusType: "NEW",
    publishDate: "2026-03-10",
    deadlineDate: "2026-03-28",
    description: "Candidates can download their Advance Intimation Slip for Allotment of Exam City and Admit Cards from the official website using Application Number and Date of Birth.",
    officialSourceUrl: "https://exams.nta.ac.in/CUET-PG/",
    isActionable: true,
    actionText: "Download Admit Card"
  },
  {
    id: "NOTIF-DU-001",
    title: "University of Delhi: CSAS (UG) 2026 Information Bulletin Released",
    hindiTitle: "दिल्ली विश्वविद्यालय: सीएसएएस (यूजी) 2026 सूचना विवरणिका जारी",
    authority: "University",
    exam: "CUET-UG",
    universityId: "UNI-DU-001",
    statusType: "IMPORTANT",
    publishDate: "2026-03-15",
    deadlineDate: "2026-06-25",
    description: "University of Delhi has published its Bulletin of Information for UG admissions. Reminder: Candidates must choose only those CUET subjects which they studied and passed in Class 12.",
    officialSourceUrl: "https://admission.uod.ac.in",
    isActionable: true,
    actionText: "Read DU CSAS Bulletin"
  },
  {
    id: "NOTIF-BHU-001",
    title: "BHU Central Admission Portal (CAP) Pre-Registration Notice",
    hindiTitle: "बीएचयू केंद्रीय प्रवेश पोर्टल (CAP) पूर्व-पंजीकरण सूचना",
    authority: "University",
    exam: "Both",
    universityId: "UNI-BHU-002",
    statusType: "INFORMATION",
    publishDate: "2026-03-18",
    description: "Banaras Hindu University notifies that all applicants wishing to seek admission in BHU for session 2026-27 must register on bhuonline.in after appearing in CUET.",
    officialSourceUrl: "https://www.bhuonline.in",
    isActionable: true,
    actionText: "Visit BHU Online"
  },
  {
    id: "NOTIF-UGC-001",
    title: "UGC Advisory on Single-Window Fee Refund Policy for 2026-27",
    hindiTitle: "यूजीसी सलाह: 2026-27 के लिए शुल्क वापसी नीति",
    authority: "UGC",
    exam: "Both",
    statusType: "INFORMATION",
    publishDate: "2026-03-05",
    description: "University Grants Commission issues mandatory fee refund rules for higher education institutions: 100% refund up to specified date with maximum processing deduction of ₹1,000.",
    officialSourceUrl: "https://www.ugc.gov.in",
    isActionable: false
  }
];

export const importantDatesData: ImportantDateItem[] = [
  {
    id: "DATE-001",
    title: "CUET-UG 2026 Online Application Window",
    event: "Online Registration & Submission of Application Form",
    exam: "CUET-UG",
    startDate: "2026-02-27",
    endDate: "2026-04-05",
    status: "Upcoming",
    sourceUrl: "https://exams.nta.ac.in/CUET-UG/",
    category: "Application"
  },
  {
    id: "DATE-002",
    title: "CUET-UG 2026 Correction Window",
    event: "Application Form Correction Facility",
    exam: "CUET-UG",
    startDate: "2026-04-06",
    endDate: "2026-04-08",
    status: "Upcoming",
    sourceUrl: "https://exams.nta.ac.in/CUET-UG/",
    category: "Correction"
  },
  {
    id: "DATE-003",
    title: "CUET-UG 2026 Examination Dates",
    event: "Pen & Paper (OMR) and Computer Based Test (CBT) Conduct",
    exam: "CUET-UG",
    startDate: "2026-05-15",
    endDate: "2026-05-31",
    status: "Upcoming",
    sourceUrl: "https://exams.nta.ac.in/CUET-UG/",
    category: "Exam"
  },
  {
    id: "DATE-004",
    title: "CUET-PG 2026 Examination Window",
    event: "National Testing Agency CBT Shifts",
    exam: "CUET-PG",
    startDate: "2026-03-11",
    endDate: "2026-03-28",
    status: "Today",
    sourceUrl: "https://exams.nta.ac.in/CUET-PG/",
    category: "Exam"
  },
  {
    id: "DATE-005",
    title: "DU CSAS (UG) Phase 1 Registration",
    event: "University of Delhi Common Seat Allocation System Registration",
    exam: "University",
    universityName: "University of Delhi",
    startDate: "2026-05-25",
    endDate: "2026-06-30",
    status: "Upcoming",
    sourceUrl: "https://ugadmission.uod.ac.in",
    category: "Counselling"
  },
  {
    id: "DATE-006",
    title: "BHU CAP UG Registration",
    event: "Banaras Hindu University Central Admission Process Registration",
    exam: "University",
    universityName: "Banaras Hindu University",
    startDate: "2026-06-01",
    endDate: "2026-07-05",
    status: "Upcoming",
    sourceUrl: "https://www.bhuonline.in",
    category: "Admission"
  }
];
