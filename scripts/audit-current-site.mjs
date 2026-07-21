import AxeBuilder from "@axe-core/playwright";
import { chromium } from "@playwright/test";

const baseUrl = process.env.AUDIT_BASE_URL ?? "http://localhost:3000";
const routes = [
  "/",
  "/servicios",
  "/servicios/diagnostico-y-hoja-de-ruta",
  "/servicios/datos-y-analitica",
  "/metodologia",
  "/casos",
  "/nosotros",
  "/contacto",
  "/en",
];

const browser = await chromium.launch({ headless: true });
const report = { baseUrl, generatedAt: new Date().toISOString(), pages: [], mobile: {} };

for (const route of routes) {
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  const page = await context.newPage();
  const response = await page.goto(`${baseUrl}${route}`, { waitUntil: "networkidle" });

  const lazyImageSection = page.locator(".cases-section");
  if (await lazyImageSection.count()) {
    await lazyImageSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(250);
  }

  const data = await page.evaluate(() => {
    const description = document.querySelector('meta[name="description"]')?.getAttribute("content") ?? null;
    const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute("href") ?? null;
    const headings = [...document.querySelectorAll("h1, h2, h3, h4, h5, h6")].map((node) => ({
      level: Number(node.tagName.slice(1)),
      text: node.textContent?.trim() ?? "",
    }));
    const images = [...document.images].map((image) => ({
      alt: image.getAttribute("alt"),
      naturalWidth: image.naturalWidth,
      src: image.currentSrc || image.src,
    }));
    const internalLinks = [...document.querySelectorAll("a[href]")].filter((link) => {
      const href = link.getAttribute("href") ?? "";
      return href.startsWith("/") || href.startsWith(window.location.origin);
    }).length;
    const jsonLd = [...document.querySelectorAll('script[type="application/ld+json"]')].map((script) => {
      try {
        return JSON.parse(script.textContent ?? "{}");
      } catch {
        return { parseError: true };
      }
    });
    const navigation = performance.getEntriesByType("navigation")[0];
    const resources = performance.getEntriesByType("resource");

    return {
      title: document.title,
      titleLength: document.title.length,
      description,
      descriptionLength: description?.length ?? 0,
      canonical,
      lang: document.documentElement.lang,
      headings,
      h1Count: headings.filter((heading) => heading.level === 1).length,
      internalLinks,
      images,
      imagesMissingAlt: images.filter((image) => image.alt === null).length,
      brokenImages: images.filter((image) => image.naturalWidth === 0).length,
      jsonLd,
      jsonLdCount: jsonLd.length,
      horizontalOverflow: document.documentElement.scrollWidth - window.innerWidth,
      domNodes: document.querySelectorAll("*").length,
      transferSize: Math.round(resources.reduce((total, entry) => total + (entry.transferSize || 0), 0)),
      domContentLoaded: navigation ? Math.round(navigation.domContentLoadedEventEnd) : null,
      loadEventEnd: navigation ? Math.round(navigation.loadEventEnd) : null,
    };
  });

  const axe = await new AxeBuilder({ page }).analyze();
  report.pages.push({
    route,
    status: response?.status() ?? null,
    ...data,
    axeViolations: axe.violations.map((violation) => ({
      id: violation.id,
      impact: violation.impact,
      nodes: violation.nodes.length,
    })),
  });
  await context.close();
}

const mobileContext = await browser.newContext({ viewport: { width: 390, height: 844 } });
const mobilePage = await mobileContext.newPage();
await mobilePage.goto(`${baseUrl}/`, { waitUntil: "networkidle" });
report.mobile = await mobilePage.evaluate(() => {
  const smallTargets = [...document.querySelectorAll("a, button, input, select, textarea")]
    .map((node) => {
      const rect = node.getBoundingClientRect();
      return {
        label: node.getAttribute("aria-label") || node.textContent?.trim() || node.getAttribute("name") || "control",
        width: Math.round(rect.width),
        height: Math.round(rect.height),
      };
    })
    .filter((target) => target.width > 0 && target.height > 0 && (target.width < 24 || target.height < 24));

  return {
    horizontalOverflow: document.documentElement.scrollWidth - window.innerWidth,
    viewportWidth: window.innerWidth,
    scrollHeight: document.documentElement.scrollHeight,
    smallTargets,
  };
});

await mobileContext.close();
await browser.close();

console.log(JSON.stringify(report, null, 2));
