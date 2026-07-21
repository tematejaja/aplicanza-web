import type { Metadata } from "next";
import { CaseCard } from "@/components/CaseCard";
import { ContactBand } from "@/components/ContactBand";
import { PageIntro } from "@/components/PageIntro";
import { casesEn } from "@/content/site-en";

export const metadata: Metadata = {
  title: "Data, automation, and web development cases",
  description: "Aplicanza projects in digital presence, public procurement, and labor market analytics.",
  alternates: { canonical: "/en/cases", languages: { "es-CO": "/casos", "en-US": "/en/cases" } },
};

export default function EnglishCasesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Cases"
        summary="We do not present abstract promises. We show public products, visible sources, and the type of intervention delivered."
        title="Work you can open, explore, and verify."
      />
      <section className="case-directory-section">
        <div className="shell cases-grid">
          <CaseCard caseStudy={casesEn[0]} featured headingLevel="h2" locale="en" />
          <CaseCard caseStudy={casesEn[1]} headingLevel="h2" locale="en" />
          <CaseCard caseStudy={casesEn[2]} headingLevel="h2" locale="en" />
        </div>
      </section>
      <ContactBand
        locale="en"
        copy="Every company has a different process. The next case can start with a conversation about yours."
        title="Let us build evidence for your decision."
      />
    </>
  );
}
