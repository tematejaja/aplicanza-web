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
import { founderProfileEn, servicesEn, siteConfigEn } from "@/content/site-en";

export const metadata: Metadata = {
  title: { absolute: "AI consulting for small businesses | Aplicanza" },
  description: siteConfigEn.description,
  alternates: {
    canonical: "/en",
    languages: { "es-CO": "/", "en-US": "/en" },
  },
  openGraph: {
    title: "AI consulting for small businesses | Aplicanza",
    description: siteConfigEn.description,
    locale: "en_US",
    url: "/en",
  },
};

export default function EnglishHome() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    name: siteConfigEn.name,
    description: siteConfigEn.description,
    url: `${siteUrl}/en`,
    logo: `${siteUrl}/brand/aplicanza-logo.svg`,
    email: siteConfigEn.email,
    telephone: siteConfigEn.whatsappLabel,
    sameAs: [siteConfigEn.linkedin],
    areaServed: ["Bogota", "Virtual service"],
    founder: {
      "@type": "Person",
      name: founderProfileEn.name,
      jobTitle: founderProfileEn.role,
      sameAs: siteConfigEn.linkedin,
      knowsAbout: ["Economics", "Project management", "Artificial intelligence", "Data science"],
      hasCredential: founderProfileEn.credentials.map((name) => ({
        "@type": "EducationalOccupationalCredential",
        name,
      })),
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI implementation services",
      itemListElement: servicesEn.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.intro,
          url: `${siteUrl}/en/services/${service.slug}`,
        },
      })),
    },
  };

  return (
    <>
      <Hero locale="en" />
      <ValueStory locale="en" />
      <ServicesOverview locale="en" />
      <MethodologyJourney locale="en" />
      <DiagnosticOffer locale="en" />
      <CaseShowcase locale="en" />
      <FounderTrust locale="en" />
      <FaqSection locale="en" />
      <section className="home-contact" id="contact-assessment">
        <div className="shell home-contact-grid">
          <div className="home-contact-copy">
            <h2>Tell us which process is holding your business back.</h2>
            <p>We will make an initial assessment and continue the conversation on WhatsApp.</p>
          </div>
          <DeferredContactForm locale="en" />
        </div>
      </section>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replaceAll("<", "\\u003c") }}
        type="application/ld+json"
      />
    </>
  );
}
