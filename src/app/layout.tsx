import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Manrope } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SkipLink } from "@/components/SkipLink";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { siteConfig } from "@/content/site";
import { publicAsset } from "@/lib/public-asset";

const manrope = Manrope({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-manrope",
});

const plexMono = IBM_Plex_Mono({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "500", "600"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Consultoría de IA para pymes en Colombia | Aplicanza",
    template: "%s | Aplicanza",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  category: "Consultoría de inteligencia artificial",
  alternates: {
    canonical: "/",
    languages: { "es-CO": "/", "en-US": "/en" },
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: siteConfig.name,
    title: "Consultoría de IA para pymes en Colombia | Aplicanza",
    description: siteConfig.description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Consultoría de IA para pymes en Colombia | Aplicanza",
    description: siteConfig.description,
  },
  icons: {
    icon: publicAsset("/brand/aplicanza-mark.svg"),
    apple: publicAsset("/brand/aplicanza-mark.svg"),
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#F4F7F8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className={`${manrope.variable} ${plexMono.variable}`} lang="es">
      <body>
        <SkipLink />
        <Header />
        <main id="contenido-principal">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
