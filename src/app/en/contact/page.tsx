import type { Metadata } from "next";
import { Envelope, MapPin, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { ContactForm } from "@/components/ContactForm";
import { PageIntro } from "@/components/PageIntro";
import { siteConfigEn } from "@/content/site-en";

export const metadata: Metadata = {
  title: "Request an artificial intelligence assessment",
  description: "Tell us which process you want to improve and request an initial assessment from Aplicanza.",
  alternates: { canonical: "/en/contact", languages: { "es-CO": "/contacto", "en-US": "/en/contact" } },
};

export default function EnglishContactPage() {
  return (
    <>
      <PageIntro eyebrow="Contact" summary="Briefly describe the situation. We will receive the information by email and continue with you on WhatsApp." title="A good project starts with a concrete question." />
      <section className="contact-page-section">
        <div className="shell contact-page-grid">
          <aside className="contact-details" aria-label="Contact information">
            <h2>You can also contact us directly</h2>
            <a href={`https://wa.me/${siteConfigEn.whatsapp}`}><WhatsappLogo aria-hidden="true" size={23} weight="duotone" /><span>{siteConfigEn.whatsappLabel}</span></a>
            <a href={`mailto:${siteConfigEn.email}`}><Envelope aria-hidden="true" size={23} weight="duotone" /><span>{siteConfigEn.email}</span></a>
            <p><MapPin aria-hidden="true" size={23} weight="duotone" /><span>{siteConfigEn.locations}</span></p>
          </aside>
          <ContactForm locale="en" />
        </div>
      </section>
    </>
  );
}
