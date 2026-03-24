import { chromium } from 'playwright';
import path from 'path';

const BASE = 'http://localhost:5174';
const OUT = path.resolve('public/assets/projects/jujutok');

const pages = [
  { name: 'home', url: '/', waitFor: 3000 },
  { name: 'home-dark', url: '/', waitFor: 3000, dark: true },
  { name: 'debate', url: '/stock/AAPL', waitFor: 3000, clickTab: 'Debate' },
  { name: 'debate-dark', url: '/stock/AAPL', waitFor: 3000, clickTab: 'Debate', dark: true },
];

async function capture() {
  const browser = await chromium.launch();

  for (const pg of pages) {
    const context = await browser.newContext({
      viewport: { width: 1440, height: 900 },
      colorScheme: pg.dark ? 'dark' : 'light',
    });
    const page = await context.newPage();

    try {
      await page.goto(`${BASE}${pg.url}`, { waitUntil: 'domcontentloaded', timeout: 15000 });
      await page.waitForTimeout(pg.waitFor);
      if (pg.clickTab) {
        const tab = await page.locator(`text=${pg.clickTab}`).first();
        if (await tab.isVisible()) {
          await tab.click();
          await page.waitForTimeout(2000);
        }
      }
      const file = path.join(OUT, `${pg.name}.png`);
      await page.screenshot({ path: file, fullPage: false });
      console.log(`✅ ${pg.name} → ${file}`);
    } catch (e) {
      console.log(`❌ ${pg.name}: ${e.message}`);
    }

    await context.close();
  }

  // Sidebar expanded screenshot
  try {
    const ctx = await browser.newContext({
      viewport: { width: 1440, height: 900 },
      colorScheme: 'dark',
    });
    const page = await ctx.newPage();
    await page.goto(`${BASE}/`, { waitUntil: 'networkidle', timeout: 15000 });
    await page.waitForTimeout(2000);

    // Try to find and capture sidebar
    const sidebar = await page.$('[data-sidebar]');
    if (sidebar) {
      const file = path.join(OUT, 'sidebar.png');
      await sidebar.screenshot({ path: file });
      console.log(`✅ sidebar → ${file}`);
    }
    await ctx.close();
  } catch (e) {
    console.log(`❌ sidebar: ${e.message}`);
  }

  await browser.close();
  console.log('\n📸 Done! Screenshots saved to', OUT);
}

capture();
