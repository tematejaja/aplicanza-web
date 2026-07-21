import { chromium } from "@playwright/test";

const sites = [
  ["hatchworks", "https://hatchworks.com/"],
  ["plain-concepts", "https://www.plainconcepts.com/es/"],
  ["addepto", "https://addepto.com/"],
  ["sngular", "https://www.sngular.com/es/"],
  ["thoughtworks", "https://www.thoughtworks.com/what-we-do/enterprise-ai"],
  ["accenture", "https://www.accenture.com/us-en/services/data-ai"],
  ["quantumblack", "https://www.mckinsey.com/capabilities/quantumblack/how-we-help-clients"],
];

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 1440, height: 1000 },
  userAgent:
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0 Safari/537.36",
});

for (const [name, url] of sites) {
  const page = await context.newPage();
  try {
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 45000 });
    await page.waitForTimeout(3500);

    for (const label of [/accept all/i, /aceptar todo/i, /^accept$/i, /^aceptar$/i, /reject all/i, /rechazar/i]) {
      const candidate = page.getByRole("button", { name: label }).first();
      if (await candidate.isVisible().catch(() => false)) {
        await candidate.click().catch(() => {});
        break;
      }
    }

    await page.screenshot({
      animations: "disabled",
      path: `test-results/benchmark-${name}.png`,
    });
    console.log(`${name}: ${page.url()}`);
  } catch (error) {
    console.error(`${name}: ${error instanceof Error ? error.message : String(error)}`);
  } finally {
    await page.close();
  }
}

await context.close();
await browser.close();
