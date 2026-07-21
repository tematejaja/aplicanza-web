import type { Metadata } from "next";
import { siteConfigEn } from "@/content/site-en";

export const metadata: Metadata = {
  title: { absolute: "AI consulting for small businesses | Aplicanza" },
  description: siteConfigEn.description,
  alternates: {
    canonical: "/en",
    languages: { "es-CO": "/", "en-US": "/en" },
  },
  openGraph: {
    locale: "en_US",
    title: "Aplicanza | AI implementation for small and mid-sized businesses",
    description: siteConfigEn.description,
    url: "/en",
  },
};

export default function EnglishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div lang="en">{children}</div>;
}
