import type { Metadata } from "next";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { StaticLink as Link } from "@/components/StaticLink";
import { ContactBand } from "@/components/ContactBand";
import { PageIntro } from "@/components/PageIntro";
import { complementaryServices, services } from "@/content/site";

export const metadata: Metadata = {
  title: "Servicios de implementación de IA para pymes",
  description:
    "Diagnóstico, datos, automatización y asistentes empresariales con pilotos medibles, supervisión y adopción del equipo.",
  alternates: {
    canonical: "/servicios",
    languages: { "es-CO": "/servicios", "en-US": "/en/services" },
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Servicios"
        summary="Datos, automatización y asistentes se conectan mediante un diagnóstico común, un piloto medible y adopción del equipo."
        title="Cuatro capacidades para llevar una decisión a la implementación."
      />

      <section className="service-list-section">
        <div className="shell service-directory">
          {services.map((service) => (
            <Link href={`/servicios/${service.slug}`} key={service.slug}>
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
            <h2>La adopción no es un servicio separado.</h2>
            <p>
              Formación, protocolos, responsables y gestión del cambio se integran desde el piloto para evitar una solución que nadie use.
            </p>
          </div>
          <Link href={`/servicios/${complementaryServices[0].slug}`}>
            <span>Capacidad complementaria</span>
            <strong>{complementaryServices[0].shortTitle}</strong>
            <ArrowRight aria-hidden="true" size={22} weight="bold" />
          </Link>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
