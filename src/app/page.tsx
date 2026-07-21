import type { Metadata } from "next";
import { CaseShowcase } from "@/components/CaseShowcase";
import { DeferredContactForm } from "@/components/DeferredContactForm";
import { DiagnosticOffer } from "@/components/DiagnosticOffer";
import { FaqSection } from "@/components/FaqSection";
import { FounderTrust } from "@/components/FounderTrust";
import { Hero } from "@/components/Hero";
import { MethodologyJourney } from "@/components/MethodologyJourney";
import { ServicesOverview } from "@/components/ServicesOverview";
import { ValueStory } from "@/components/ValueStory";
import { founderProfile, services, siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: { absolute: "Consultoría de IA para pymes en Colombia | Aplicanza" },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
    languages: { "es-CO": "/", "en-US": "/en" },
  },
  openGraph: {
    title: "Consultoría de IA para pymes en Colombia | Aplicanza",
    description: siteConfig.description,
    locale: "es_CO",
    url: "/",
  },
};

export default function Home() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteUrl,
    logo: `${siteUrl}/brand/aplicanza-logo.svg`,
    email: siteConfig.email,
    telephone: siteConfig.whatsappLabel,
    sameAs: [siteConfig.linkedin],
    areaServed: ["Bogotá", "Atención virtual"],
    founder: {
      "@type": "Person",
      name: founderProfile.name,
      jobTitle: founderProfile.role,
      sameAs: siteConfig.linkedin,
      knowsAbout: ["Economía", "Gerencia de proyectos", "Inteligencia artificial", "Ciencia de datos"],
      hasCredential: founderProfile.credentials.map((name) => ({
        "@type": "EducationalOccupationalCredential",
        name,
      })),
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de implementación de IA",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.intro,
          url: `${siteUrl}/servicios/${service.slug}`,
        },
      })),
    },
  };

  return (
    <>
      <Hero />
      <ValueStory />
      <ServicesOverview />
      <MethodologyJourney />
      <DiagnosticOffer />
      <CaseShowcase />
      <FounderTrust />
      <FaqSection />
      <section className="home-contact" id="contacto-diagnostico">
        <div className="shell home-contact-grid">
          <div className="home-contact-copy">
            <h2>Cuéntanos qué proceso está frenando a tu empresa.</h2>
            <p>
              Haremos una primera lectura de la situación y continuaremos la conversación por WhatsApp.
            </p>
          </div>
          <DeferredContactForm />
        </div>
      </section>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replaceAll("<", "\\u003c") }}
        type="application/ld+json"
      />
    </>
  );
}
