import type { Metadata } from "next";
import { ContactBand } from "@/components/ContactBand";
import { MethodologyJourney } from "@/components/MethodologyJourney";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Methodology for implementing artificial intelligence",
  description: "Double Diamond, Lean, CRISP-DM, Agile, NIST AI RMF, and change management in one practical implementation route.",
  alternates: { canonical: "/en/methodology", languages: { "es-CO": "/metodologia", "en-US": "/en/methodology" } },
};

export default function EnglishMethodologyPage() {
  return (
    <>
      <PageIntro
        eyebrow="Methodology"
        summary="We understand the process, prioritize, work with your data, pilot, control risks, and support adoption."
        title="A route to prove value before scaling."
      />
      <section className="method-statement">
        <div className="shell method-statement-grid">
          <p>We find where the company is losing time, money, or information. We use its information and knowledge to design a solution.</p>
          <p>We test it on a small scale, measure the result, and only then decide whether it should be expanded.</p>
        </div>
      </section>
      <MethodologyJourney compact locale="en" />
      <section className="method-principles">
        <div className="shell method-principles-grid">
          <h2>What remains throughout the project</h2>
          <div>
            <article><h3>Human oversight</h3><p>Responsibility is never delegated to a tool.</p></article>
            <article><h3>Visible evidence</h3><p>Every result must be reviewable and explainable.</p></article>
            <article><h3>Real adoption</h3><p>The solution is designed with the people who will use it.</p></article>
          </div>
        </div>
      </section>
      <ContactBand locale="en" />
    </>
  );
}
