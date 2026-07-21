import type { Metadata } from "next";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { StaticLink as Link } from "@/components/StaticLink";
import { ContactBand } from "@/components/ContactBand";
import { PageIntro } from "@/components/PageIntro";
import { complementaryServicesEn, servicesEn } from "@/content/site-en";

export const metadata: Metadata = {
  title: "AI implementation services for small businesses",
  description: "Assessment, data, automation, and business AI assistants with measurable pilots, oversight, and team adoption.",
  alternates: { canonical: "/en/services", languages: { "es-CO": "/servicios", "en-US": "/en/services" } },
};

export default function EnglishServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Services"
        summary="Data, automation, and assistants share one assessment, a measurable pilot, and team adoption."
        title="Four capabilities that move a decision into implementation."
      />
      <section className="service-list-section">
        <div className="shell service-directory">
          {servicesEn.map((service) => (
            <Link href={`/en/services/${service.slug}`} key={service.slug}>
              <div>
                <h2>{service.shortTitle}</h2>
                <p>{service.intro}</p>
              </div>
              <ArrowRight aria-hidden="true" size={24} weight="bold" />
            </Link>
          ))}
        </div>
      </section>
      <section className="capability-note">
        <div className="shell capability-note-grid">
          <div>
            <h2>Adoption is not a separate service.</h2>
            <p>Training, protocols, ownership, and change management begin with the pilot so the solution can become part of daily work.</p>
          </div>
          <Link href={`/en/services/${complementaryServicesEn[0].slug}`}>
            <span>Complementary capability</span>
            <strong>{complementaryServicesEn[0].shortTitle}</strong>
            <ArrowRight aria-hidden="true" size={22} weight="bold" />
          </Link>
        </div>
      </section>
      <ContactBand locale="en" />
    </>
  );
}
