import type { Metadata } from "next";
import { ContactBand } from "@/components/ContactBand";
import { MethodologyJourney } from "@/components/MethodologyJourney";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Metodología para implementar inteligencia artificial",
  description:
    "Double Diamond, Lean, CRISP-DM, Agile, NIST AI RMF y gestión del cambio integrados en una ruta práctica de implementación.",
  alternates: {
    canonical: "/metodologia",
    languages: { "es-CO": "/metodologia", "en-US": "/en/methodology" },
  },
};

export default function MethodologyPage() {
  return (
    <>
      <PageIntro
        eyebrow="Metodología"
        summary="Comprendemos el proceso, priorizamos, trabajamos con sus datos, pilotamos, controlamos riesgos y acompañamos la adopción."
        title="Una ruta para demostrar valor antes de ampliar."
      />

      <section className="method-statement">
        <div className="shell method-statement-grid">
          <p>
            Encontramos dónde la empresa está perdiendo tiempo, dinero o información. Utilizamos su
            información y su conocimiento para diseñar una solución.
          </p>
          <p>
            La probamos en pequeño, medimos el resultado y solo entonces decidimos si conviene
            ampliarla.
          </p>
        </div>
      </section>

      <MethodologyJourney compact />

      <section className="method-principles">
        <div className="shell method-principles-grid">
          <h2>Lo que permanece durante todo el proyecto</h2>
          <div>
            <article>
              <h3>Supervisión humana</h3>
              <p>La responsabilidad no se delega a una herramienta.</p>
            </article>
            <article>
              <h3>Evidencia visible</h3>
              <p>Cada resultado debe poder revisarse y explicarse.</p>
            </article>
            <article>
              <h3>Adopción real</h3>
              <p>La solución se diseña con las personas que la usarán.</p>
            </article>
          </div>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
