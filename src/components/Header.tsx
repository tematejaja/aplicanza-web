"use client";

import { List, X } from "@phosphor-icons/react";
import Image from "next/image";
import { StaticLink as Link } from "@/components/StaticLink";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { publicAsset } from "@/lib/public-asset";

const linksEs = [
  { href: "/servicios", label: "Servicios" },
  { href: "/metodologia", label: "Metodología" },
  { href: "/casos", label: "Casos" },
  { href: "/nosotros", label: "Nosotros" },
];

const linksEn = [
  { href: "/en/services", label: "Services" },
  { href: "/en/methodology", label: "Methodology" },
  { href: "/en/cases", label: "Cases" },
  { href: "/en/about", label: "About" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const english = pathname.startsWith("/en");
  const links = english ? linksEn : linksEs;
  const home = english ? "/en" : "/";
  const contact = english ? "/en/contact" : "/contacto";

  useEffect(() => {
    if (!open) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header className="site-header" lang={english ? "en" : "es"}>
      <div className="shell header-inner">
        <Link className="brand-link" href={home} aria-label={english ? "Aplicanza, home" : "Aplicanza, inicio"}>
          <Image
            alt="Aplicanza"
            height={44}
            priority
            src={publicAsset("/brand/aplicanza-logo.svg")}
            width={195}
          />
        </Link>

        <nav className="desktop-nav" aria-label={english ? "Main navigation" : "Navegación principal"}>
          {links.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
          <Link className="language-link" href={english ? "/" : "/en"} hrefLang={english ? "es" : "en"}>
            {english ? "ES" : "EN"}
          </Link>
        </nav>

        <Link className="header-cta" href={contact}>
          {english ? "Request assessment" : "Solicitar diagnóstico"}
        </Link>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={open}
          aria-label={
            open ? (english ? "Close menu" : "Cerrar menú") : english ? "Open menu" : "Abrir menú"
          }
          className="menu-trigger"
          onClick={() => setOpen((value) => !value)}
          ref={triggerRef}
          type="button"
        >
          {open ? <X aria-hidden="true" size={24} /> : <List aria-hidden="true" size={24} />}
        </button>
      </div>

      <div className="mobile-nav-wrap" data-open={open} id="mobile-navigation">
        <nav className="shell mobile-nav" aria-label={english ? "Mobile navigation" : "Navegación móvil"}>
          {links.map((link) => (
            <Link href={link.href} key={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link href={english ? "/" : "/en"} hrefLang={english ? "es" : "en"} onClick={() => setOpen(false)}>
            {english ? "Español" : "English"}
          </Link>
          <Link className="mobile-nav-cta" href={contact} onClick={() => setOpen(false)}>
            {english ? "Request an assessment" : "Solicitar diagnóstico"}
          </Link>
        </nav>
      </div>
    </header>
  );
}
