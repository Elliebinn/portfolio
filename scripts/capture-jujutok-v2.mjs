import { chromium } from 'playwright';
import path from 'path';

const BASE = 'http://localhost:5174';
const OUT = path.resolve('public/assets/projects/jujutok');

const MOBILE = { width: 390, height: 844 };
const DESKTOP = { width: 1280, height: 800 };

const captures = [
  // Mobile captures (mockup에 들어갈 메인 스크린샷)
  { name: 'v2-home-mobile', url: '/', viewport: MOBILE, waitFor: 3000 },
  { name: 'v2-stock-overview', url: '/stock/AAPL', viewport: MOBILE, waitFor: 3000 },
  { name: 'v2-stock-analysis', url: '/stock/AAPL', viewport: MOBILE, waitFor: 3000, clickText: 'AI 분석' },
  { name: 'v2-stock-debate', url: '/stock/AAPL', viewport: MOBILE, waitFor: 3000, clickText: '토론' },
  { name: 'v2-debate-page', url: '/stock/AAPL/debate', viewport: MOBILE, waitFor: 3000 },
  { name: 'v2-research', url: '/research', viewport: MOBILE, waitFor: 3000 },
  { name: 'v2-portfolio', url: '/portfolio', viewport: MOBILE, waitFor: 3000 },
  // Desktop captures
  { name: 'v2-home-desktop', url: '/', viewport: DESKTOP, waitFor: 3000 },
  { name: 'v2-stock-desktop', url: '/stock/AAPL', viewport: DESKTOP, waitFor: 3000 },
  { name: 'v2-research-desktop', url: '/research', viewport: DESKTOP, waitFor: 3000 },
];

async function capture() {
  const browser = await chromium.launch({ headless: true });

  for (const pg of captures) {
    const context = await browser.newContext({
      viewport: pg.viewport,
      colorScheme: 'dark',
    });
    const page = await context.newPage();

    try {
      await page.goto(`${BASE}${pg.url}`, { waitUntil: 'domcontentloaded', timeout: 15000 });
      await page.waitForTimeout(pg.waitFor);

      if (pg.clickText) {
        const tab = page.locator('button, [role="tab"]').filter({ hasText: pg.clickText }).first();
        if (await tab.isVisible().catch(() => false)) {
          await tab.click();
          await page.waitForTimeout(2000);
        }
      }

      const file = path.join(OUT, `${pg.name}.png`);
      await page.screenshot({ path: file, fullPage: false });
      console.log(`✅ ${pg.name}`);
    } catch (e) {
      console.log(`❌ ${pg.name}: ${e.message}`);
    }

    await context.close();
  }

  await browser.close();
  console.log('\n📸 Done! Screenshots saved to', OUT);
}

capture();
