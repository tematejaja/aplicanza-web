"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function SkipLink() {
  const pathname = usePathname();
  const english = pathname.startsWith("/en");

  useEffect(() => {
    document.documentElement.lang = english ? "en" : "es";
  }, [english]);

  return (
    <a className="skip-link" href="#contenido-principal">
      {english ? "Skip to content" : "Saltar al contenido"}
    </a>
  );
}
