import type { Metadata } from "next";
import { CaseCard } from "@/components/CaseCard";
import { ContactBand } from "@/components/ContactBand";
import { PageIntro } from "@/components/PageIntro";
import { cases } from "@/content/site";

export const metadata: Metadata = {
  title: "Casos de datos, automatización y desarrollo web",
  description:
    "Proyectos de Aplicanza en presencia digital, contratación pública y analítica del mercado laboral.",
  alternates: {
    canonical: "/casos",
    languages: { "es-CO": "/casos", "en-US": "/en/cases" },
  },
};

export default function CasesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Casos"
        summary="No presentamos promesas abstractas. Mostramos productos públicos, fuentes visibles y el tipo de intervención realizada."
        title="Trabajo que se puede abrir, recorrer y verificar."
      />

      <section className="case-directory-section">
        <div className="shell cases-grid">
          <CaseCard caseStudy={cases[0]} featured headingLevel="h2" />
          <CaseCard caseStudy={cases[1]} headingLevel="h2" />
          <CaseCard caseStudy={cases[2]} headingLevel="h2" />
        </div>
      </section>

      <ContactBand
        copy="Cada empresa tiene un proceso distinto. El siguiente caso puede empezar con una conversación sobre el tuyo."
        title="Construyamos evidencia para tu decisión."
      />
    </>
  );
}
