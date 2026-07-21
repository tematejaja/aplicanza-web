import type { MetadataRoute } from "next";
import { allServices, cases } from "@/content/site";
import { allServicesEn, casesEn } from "@/content/site-en";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const staticRoutes = ["", "/servicios", "/metodologia", "/casos", "/nosotros", "/contacto", "/privacidad"];
  const serviceRoutes = allServices.map((service) => `/servicios/${service.slug}`);
  const caseRoutes = cases.map((caseStudy) => `/casos/${caseStudy.slug}`);
  const englishStaticRoutes = ["/en", "/en/services", "/en/methodology", "/en/cases", "/en/about", "/en/contact", "/en/privacy"];
  const englishServiceRoutes = allServicesEn.map((service) => `/en/services/${service.slug}`);
  const englishCaseRoutes = casesEn.map((caseStudy) => `/en/cases/${caseStudy.slug}`);

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...caseRoutes,
    ...englishStaticRoutes,
    ...englishServiceRoutes,
    ...englishCaseRoutes,
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date("2026-07-18"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" || route === "/en" ? 1 : route === "/contacto" || route === "/en/contact" ? 0.9 : 0.7,
  }));
}
