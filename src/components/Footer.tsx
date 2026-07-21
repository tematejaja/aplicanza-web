"use client";

import { StaticLink as Link } from "@/components/StaticLink";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/content/site";
import { siteConfigEn } from "@/content/site-en";

export function Footer() {
  const pathname = usePathname();
  const english = pathname.startsWith("/en");
  const config = english ? siteConfigEn : siteConfig;
  const prefix = english ? "/en" : "";

  return (
    <footer className="site-footer" lang={english ? "en" : "es"}>
      <div className="shell footer-grid">
        <div>
          <Link className="footer-brand" href={english ? "/en" : "/"}>
            Aplicanza
          </Link>
          <p>{config.tagline}</p>
        </div>

        <div className="footer-links" aria-label="Enlaces del sitio">
          <Link href={`${prefix}/${english ? "services" : "servicios"}`}>{english ? "Services" : "Servicios"}</Link>
          <Link href={`${prefix}/${english ? "methodology" : "metodologia"}`}>{english ? "Methodology" : "Metodología"}</Link>
          <Link href={`${prefix}/${english ? "cases" : "casos"}`}>{english ? "Cases" : "Casos"}</Link>
          <Link href={`${prefix}/${english ? "about" : "nosotros"}`}>{english ? "About" : "Nosotros"}</Link>
          <Link href={`${prefix}/${english ? "privacy" : "privacidad"}`}>{english ? "Privacy" : "Privacidad"}</Link>
        </div>

        <div className="footer-contact">
          <a href={`mailto:${config.email}`}>{config.email}</a>
          <a href={`https://wa.me/${config.whatsapp}`}>{config.whatsappLabel}</a>
          <p>{config.locations}</p>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} Aplicanza</span>
        <span>{config.descriptor}</span>
      </div>
    </footer>
  );
}
