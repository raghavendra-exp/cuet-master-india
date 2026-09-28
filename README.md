# CUET UNIVERSITY MASTER INDIA

### Subtitle
**CUET-UG • CUET-PG — Complete Syllabus, Subjects, Books, PYQs, Practice, Mock Tests, Universities, Courses, Eligibility, Admissions & Counselling**

[![Validate Datasets](https://github.com/raghavendra-exp/cuet-master-india/actions/workflows/validate-data.yml/badge.svg)](https://github.com/raghavendra-exp/cuet-master-india/actions/workflows/validate-data.yml)
[![Deploy to GitHub Pages](https://github.com/raghavendra-exp/cuet-master-india/actions/workflows/deploy.yml/badge.svg)](https://github.com/raghavendra-exp/cuet-master-india/actions/workflows/deploy.yml)

Live Platform: [https://raghavendra-exp.github.io/cuet-master-india/](https://raghavendra-exp.github.io/cuet-master-india/)

---

## 🏛️ Core Objective & Architectural Philosophy

**CUET UNIVERSITY MASTER INDIA** is a comprehensive, responsive, bilingual (**English + हिन्दी**) single-page platform uniting:
```text
CUET
↓
UG / PG
↓
Exam Information
↓
Eligibility
↓
Universities
↓
Courses
↓
Subject Requirements
↓
Syllabus
↓
Books
↓
Concepts
↓
PYQs
↓
Practice
↓
Mock Tests
↓
Score
↓
University/Programme Eligibility
↓
Admission
↓
Counselling
↓
Final Admission
```

### ⚠️ Critical Official Rule Distinction
The platform maintains strict fidelity to official regulations and enforces the fundamental distinction:
* **CUET Examination (NTA)**: Conducts the standardized test and issues a normalized scorecard/percentile.
* **University Admission / CSAS / Counselling**: Each participating university (DU, BHU, JNU, AUD, etc.) runs an independent, post-result seat allocation process with distinct subject matching rules (e.g. DU's mandatory rule requiring candidates to appear only in Class 12 passed subjects).

---

## 🚀 Key Modules & Features

1. **Dual Independent Engines**:
   - **CUET-UG 2026/27**: Sections IA & IB (Languages), Section II (29 Domain Subjects), Section III (General Aptitude Test - GAT).
   - **CUET-PG 2026/27**: Specialized 75-question domain tests categorized by Question Paper Codes (COQP, SCQP, HUQP, LAQP, MTQP, ACQP).
2. **Subject Selection Wizard**:
   - Tests student's Class 12 passed subjects against target degrees and specific university ordinances.
   - Evaluates: `ELIGIBLE` / `POTENTIALLY ELIGIBLE` / `NOT ELIGIBLE` / `VERIFY OFFICIAL RULE`.
3. **University-Programme Eligibility Checker**:
   - Detailed matrix of minimum qualifying marks, category reservation roster (SC, ST, OBC-NCL, EWS, PwBD), and mandatory prospectus citations.
4. **"Where Can I Apply?" Tool**:
   - Matches candidate's intended CUET papers and state preferences to all eligible degree programmes.
5. **Question Bank (1,000+ Questions)**:
   - Categorized by `VERIFIED PYQ`, `ORIGINAL PRACTICE`, and `PYQ-STYLE MODEL`.
   - Scalable architecture designed for 10,000+ to 50,000+ questions.
6. **Realistic NTA Mock Test Center**:
   - Live countdown timer, official question palette (Answered, Marked for Review, Unattempted), negative marking calculation (+5/-1 for UG, +4/-1 for PG), and automated weak-topic logging into Error Notebook.
7. **Adaptive Practice Engine**:
   - Quick 10, 25, 50, and 100 question bursts with instantaneous solution reveals.
8. **PYQ Master & Historical Trend Analytics**:
   - Solved 2022-2024 shift papers with empirical topic frequency distributions.
9. **Curated Book Library & Legal Resources**:
   - Direct links to authentic publishers and free legal government repositories (NCERT, ePathshala, DIKSHA). Zero pirated PDFs.
10. **Error Notebook**:
    - Automatic and manual logging of mistakes tagged by diagnostic types (*Concept Gap*, *Calculation*, *Misread*, *Memory*, *Time Pressure*).
11. **Zero-to-CUET Roadmap & Study Planner**:
    - 11-stage progressive milestone tracker (Level 0 to Level 10) with daily time allocation breakdowns.
12. **Bilingual English + हिन्दी Interface**:
    - Instant reactive language toggle persisted in browser local storage.
13. **Progressive Web App (PWA)**:
    - Installable on mobile and desktop devices with offline caching support.

---

## 📂 Versioned Exam Configuration

To adapt to annual NTA updates without code rewrites, exam patterns are versioned:
```text
public/data/exams/cuet-ug/
    2024.json
    2025.json
    2026.json
    latest.json

public/data/exams/cuet-pg/
    2024.json
    2025.json
    2026.json
    latest.json
```

---

## 🛠️ Technology Stack

* **Framework**: React 19 + TypeScript
* **Build Tool**: Vite 8
* **Styling**: Tailwind CSS v4 with custom responsive design tokens and dark mode support
* **Icons**: Lucide React
* **State Management**: React Context + LocalStorage persistence
* **CI/CD**: GitHub Actions for automated dataset validation and GitHub Pages deployment

---

## 💻 Local Development

```bash
# Clone the repository
git clone https://github.com/raghavendra-exp/cuet-master-india.git
cd cuet-master-india

# Install dependencies
npm install

# Run automated dataset validation
node scripts/validateData.cjs

# Start development server
npm run dev

# Build for production
npm run build
```

---

## 📜 Official Source Transparency

Every university criteria, syllabus entry, and notification is grounded in official government and university publications:
* **NTA CUET-UG Portal**: [https://exams.nta.ac.in/CUET-UG/](https://exams.nta.ac.in/CUET-UG/)
* **NTA CUET-PG Portal**: [https://exams.nta.ac.in/CUET-PG/](https://exams.nta.ac.in/CUET-PG/)
* **University of Delhi Admission Portal**: [https://admission.uod.ac.in](https://admission.uod.ac.in)
* **Banaras Hindu University Online**: [https://www.bhuonline.in](https://www.bhuonline.in)
* **Jawaharlal Nehru University**: [https://jnuee.jnu.ac.in](https://jnuee.jnu.ac.in)
* **University Grants Commission (UGC)**: [https://www.ugc.gov.in](https://www.ugc.gov.in)
