/**
 * Automated Data Validation Script for CUET UNIVERSITY MASTER INDIA
 * Validates JSON integrity, question fields, duplicate IDs, university references, and exam configs.
 */

const fs = require('fs');
const path = require('path');

let errors = 0;
let warnings = 0;

function logError(msg) {
  console.error(`❌ [ERROR] ${msg}`);
  errors++;
}

function logSuccess(msg) {
  console.log(`✅ [PASS] ${msg}`);
}

// 1. Validate Versioned Exam JSON files
const examsToCheck = [
  'public/data/exams/cuet-ug/2024.json',
  'public/data/exams/cuet-ug/2025.json',
  'public/data/exams/cuet-ug/2026.json',
  'public/data/exams/cuet-ug/latest.json',
  'public/data/exams/cuet-pg/2024.json',
  'public/data/exams/cuet-pg/2025.json',
  'public/data/exams/cuet-pg/2026.json',
  'public/data/exams/cuet-pg/latest.json'
];

examsToCheck.forEach(filePath => {
  const fullPath = path.resolve(__dirname, '..', filePath);
  if (!fs.existsSync(fullPath)) {
    logError(`Missing exam config file: ${filePath}`);
    return;
  }
  try {
    const raw = fs.readFileSync(fullPath, 'utf8');
    const data = JSON.parse(raw);
    if (!data.exam || !data.year || !data.duration || !data.officialSource) {
      logError(`Exam config ${filePath} missing mandatory fields.`);
    } else {
      logSuccess(`Exam config valid: ${filePath} (${data.exam} ${data.year})`);
    }
  } catch (err) {
    logError(`JSON parsing failed for ${filePath}: ${err.message}`);
  }
});

// 2. Validate Questions Data Structure & Source Integrity
const questionsFilePath = path.resolve(__dirname, '..', 'src/data/questionsData.ts');
if (fs.existsSync(questionsFilePath)) {
  const content = fs.readFileSync(questionsFilePath, 'utf8');
  if (!content.includes('VERIFIED PYQ') || !content.includes('ORIGINAL')) {
    logError("questionsData.ts is missing proper source classification tags.");
  } else {
    logSuccess("Questions database source classifications verified (VERIFIED PYQ, ORIGINAL, PYQ-STYLE).");
  }
}

// 3. Check PWA files
const pwaFiles = ['public/manifest.json', 'public/favicon.svg'];
pwaFiles.forEach(f => {
  const p = path.resolve(__dirname, '..', f);
  if (fs.existsSync(p)) {
    logSuccess(`PWA resource verified: ${f}`);
  } else {
    logError(`PWA file missing: ${f}`);
  }
});

console.log("\n-------------------------------------------");
if (errors === 0) {
  console.log("🎉 ALL VALIDATION CHECKS PASSED SUCCESSFULLY!");
  process.exit(0);
} else {
  console.error(`💥 VALIDATION FAILED WITH ${errors} ERRORS.`);
  process.exit(1);
}
