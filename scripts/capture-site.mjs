import { chromium } from "@playwright/test";

const browser = await chromium.launch({ headless: true });
const viewports = [
  { name: "desktop", width: 1440, height: 1000 },
  { name: "mobile", width: 390, height: 844 },
];
const locales = [
  { name: "es", path: "/" },
  { name: "en", path: "/en" },
];

for (const locale of locales) {
  for (const viewport of viewports) {
    const page = await browser.newPage({
      deviceScaleFactor: 1,
      viewport: { width: viewport.width, height: viewport.height },
    });

    await page.goto(`http://localhost:3000${locale.path}`, { waitUntil: "networkidle" });
    await page.locator(".cases-section").scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await page.locator(".home-contact").scrollIntoViewIfNeeded();
    await page.locator(".contact-form").waitFor({ state: "visible" });
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(1200);
    await page.screenshot({
      fullPage: true,
      path: `test-results/home-${locale.name}-${viewport.name}-final.png`,
    });
    await page.close();
  }
}

await browser.close();
