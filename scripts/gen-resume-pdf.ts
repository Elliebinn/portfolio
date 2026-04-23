#!/usr/bin/env node --experimental-strip-types
/**
 * Generate tailored resume PDF from web page
 *
 * Usage:
 *   npm run gen:pdf -- --company channeltalk
 *   npm run gen:pdf -- --company tossbank
 *
 * Output:
 *   ../career-planner/companies/{company}/resume-tailored.pdf
 */

import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { existsSync, mkdirSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Parse command line arguments
const args = process.argv.slice(2);
const companyIndex = args.indexOf('--company');

if (companyIndex === -1 || !args[companyIndex + 1]) {
  console.error('❌ Error: --company parameter is required');
  console.error('Usage: npm run gen:pdf -- --company channeltalk');
  process.exit(1);
}

const company = args[companyIndex + 1];

// Paths
const portfolioRoot = resolve(__dirname, '..');
const careerPlannerRoot = resolve(__dirname, '../../career-planner');
const outputDir = resolve(careerPlannerRoot, 'companies', company);
const outputPath = resolve(outputDir, `${company}_resume.pdf`);

console.log('📄 Generating tailored resume PDF...\n');
console.log(`Company: ${company}`);
console.log(`Output: ${outputPath}\n`);

// Ensure output directory exists
if (!existsSync(outputDir)) {
  console.log(`Creating directory: ${outputDir}`);
  mkdirSync(outputDir, { recursive: true });
}

// Generate PDF
async function generatePDF() {
  const browser = await chromium.launch({
    headless: true,
  });

  try {
    const page = await browser.newPage();

    // Navigate to the tailored resume page
    const url = `http://localhost:4330/ko/resume?company=${company}`;
    console.log(`📡 Loading: ${url}`);

    await page.goto(url, {
      waitUntil: 'networkidle',
      timeout: 30000,
    });

    // Wait a bit for any animations/fonts to load
    await page.waitForTimeout(1000);

    console.log('🖨️  Generating PDF...');

    // Generate PDF with print-optimized settings
    await page.pdf({
      path: outputPath,
      format: 'A4',
      printBackground: true,
      margin: {
        top: '0.5in',
        right: '0.5in',
        bottom: '0.5in',
        left: '0.5in',
      },
      preferCSSPageSize: false,
    });

    console.log(`\n✅ PDF generated successfully!`);
    console.log(`📍 Location: ${outputPath}`);

  } catch (error) {
    console.error('\n❌ Error generating PDF:', error);
    throw error;
  } finally {
    await browser.close();
  }
}

// Check if dev server is running
async function checkDevServer() {
  try {
    const response = await fetch('http://localhost:4330/ko/resume');
    if (response.ok) {
      return true;
    }
  } catch (error) {
    return false;
  }
  return false;
}

// Main execution
(async () => {
  try {
    // Check if dev server is running
    const serverRunning = await checkDevServer();

    if (!serverRunning) {
      console.error('❌ Error: Dev server is not running!');
      console.error('Please start the dev server first:');
      console.error('  npm run dev');
      process.exit(1);
    }

    await generatePDF();
    process.exit(0);
  } catch (error) {
    console.error('Failed to generate PDF');
    process.exit(1);
  }
})();
