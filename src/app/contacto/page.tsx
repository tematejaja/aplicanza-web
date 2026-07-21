import type { Metadata } from "next";
import { Envelope, MapPin, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { ContactForm } from "@/components/ContactForm";
import { PageIntro } from "@/components/PageIntro";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Solicitar diagnóstico de inteligencia artificial",
  description:
    "Cuéntanos qué proceso quieres optimizar y solicita un diagnóstico inicial con Aplicanza.",
  alternates: {
    canonical: "/contacto",
    languages: { "es-CO": "/contacto", "en-US": "/en/contact" },
  },
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contacto"
        summary="Describe brevemente la situación. Recibiremos la información por correo y continuaremos contigo por WhatsApp."
        title="Un buen proyecto empieza con una pregunta concreta."
      />

      <section className="contact-page-section">
        <div className="shell contact-page-grid">
          <aside className="contact-details" aria-label="Información de contacto">
            <h2>También puedes escribir directamente</h2>
            <a href={`https://wa.me/${siteConfig.whatsapp}`}>
              <WhatsappLogo aria-hidden="true" size={23} weight="duotone" />
              <span>{siteConfig.whatsappLabel}</span>
            </a>
            <a href={`mailto:${siteConfig.email}`}>
              <Envelope aria-hidden="true" size={23} weight="duotone" />
              <span>{siteConfig.email}</span>
            </a>
            <p>
              <MapPin aria-hidden="true" size={23} weight="duotone" />
              <span>{siteConfig.locations}</span>
            </p>
          </aside>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
