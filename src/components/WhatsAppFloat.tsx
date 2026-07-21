"use client";

import { WhatsappLogo } from "@phosphor-icons/react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/content/site";
import { siteConfigEn } from "@/content/site-en";

export function WhatsAppFloat() {
  const pathname = usePathname();
  const english = pathname.startsWith("/en");
  const config = english ? siteConfigEn : siteConfig;
  const label = english ? "Chat on WhatsApp" : "Hablar por WhatsApp";
  const message = english
    ? "Hello, I would like to learn how Aplicanza can help my business."
    : "Hola, quiero conocer cómo Aplicanza puede ayudar a mi empresa.";
  const url = `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <a
      aria-label={label}
      className="whatsapp-float"
      href={url}
      rel="noreferrer"
      target="_blank"
    >
      <WhatsappLogo aria-hidden="true" size={25} weight="fill" />
      <span>WhatsApp</span>
    </a>
  );
}
