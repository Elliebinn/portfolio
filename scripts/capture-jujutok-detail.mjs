import { chromium } from 'playwright';
import path from 'path';

const BASE = 'http://localhost:5174';
const OUT = path.resolve('public/assets/projects/jujutok');

async function capture() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    colorScheme: 'dark',
  });
  const page = await context.newPage();

  // 1. Navigate to home
  await page.goto(BASE, { waitUntil: 'domcontentloaded', timeout: 15000 });
  await page.waitForTimeout(3000);

  // 2. Type a ticker and start analysis
  const searchInput = page.locator('input[type="text"]').first();
  if (await searchInput.isVisible()) {
    await searchInput.fill('TSLA');
    await page.waitForTimeout(500);

    // Click analyze button
    const analyzeBtn = page.locator('button').filter({ hasText: /분석|Analyze/ }).first();
    if (await analyzeBtn.isVisible()) {
      await analyzeBtn.click();
      await page.waitForTimeout(3000);

      // Capture streaming in progress
      await page.screenshot({ path: path.join(OUT, 'analysis-streaming.png'), fullPage: false });
      console.log('✅ analysis-streaming');

      // Wait for more content
      await page.waitForTimeout(8000);
      await page.screenshot({ path: path.join(OUT, 'analysis-progress.png'), fullPage: false });
      console.log('✅ analysis-progress');

      // Wait for completion
      await page.waitForTimeout(15000);
      await page.screenshot({ path: path.join(OUT, 'analysis-result.png'), fullPage: false });
      console.log('✅ analysis-result');
    }
  }

  // 3. Try to navigate to stock page with existing report
  await page.goto(`${BASE}/stock/AAPL`, { waitUntil: 'domcontentloaded', timeout: 15000 });
  await page.waitForTimeout(3000);

  // Full page screenshot of stock analysis
  await page.screenshot({ path: path.join(OUT, 'stock-detail-full.png'), fullPage: true });
  console.log('✅ stock-detail-full');

  // 4. Try clicking debate tab
  const debateTab = page.locator('button, [role="tab"]').filter({ hasText: /토론|Debate/ }).first();
  if (await debateTab.isVisible().catch(() => false)) {
    await debateTab.click();
    await page.waitForTimeout(3000);
    await page.screenshot({ path: path.join(OUT, 'debate-view.png'), fullPage: false });
    console.log('✅ debate-view');
  } else {
    console.log('⚠️ debate tab not found, trying link');
    // Try sidebar or other navigation
    const debateLink = page.locator('a').filter({ hasText: /토론|Debate/ }).first();
    if (await debateLink.isVisible().catch(() => false)) {
      await debateLink.click();
      await page.waitForTimeout(3000);
      await page.screenshot({ path: path.join(OUT, 'debate-view.png'), fullPage: false });
      console.log('✅ debate-view (via link)');
    }
  }

  // 5. Capture My Research page if exists
  await page.goto(`${BASE}/`, { waitUntil: 'domcontentloaded', timeout: 15000 });
  await page.waitForTimeout(2000);
  const researchLink = page.locator('a').filter({ hasText: /My Research|리서치/ }).first();
  if (await researchLink.isVisible().catch(() => false)) {
    await researchLink.click();
    await page.waitForTimeout(2000);
    await page.screenshot({ path: path.join(OUT, 'my-research.png'), fullPage: false });
    console.log('✅ my-research');
  }

  // 6. Notes page
  const notesLink = page.locator('a').filter({ hasText: /노트|Notes/ }).first();
  if (await notesLink.isVisible().catch(() => false)) {
    await notesLink.click();
    await page.waitForTimeout(2000);
    await page.screenshot({ path: path.join(OUT, 'notes.png'), fullPage: false });
    console.log('✅ notes');
  }

  await browser.close();
  console.log('\n📸 Done! Check', OUT);
}

capture();
