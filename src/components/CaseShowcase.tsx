import { CaseCard } from "@/components/CaseCard";
import { cases } from "@/content/site";
import { casesEn } from "@/content/site-en";

export function CaseShowcase({ locale = "es" }: { locale?: "es" | "en" }) {
  const english = locale === "en";
  const items = english ? casesEn : cases;

  return (
    <section className="cases-section">
      <div className="shell">
        <div className="section-heading cases-heading">
          <p className="eyebrow">{english ? "Work you can verify" : "Trabajo verificable"}</p>
          <h2>{english ? "Evidence before promises." : "Evidencia antes que promesas."}</h2>
          <p>
            {english
              ? "Public products show how we work with data, information architecture, and decisions in different contexts."
              : "Productos públicos muestran cómo trabajamos datos, arquitectura de información y decisiones en contextos distintos."}
          </p>
        </div>
        <div className="cases-grid">
          <CaseCard caseStudy={items[0]} featured locale={locale} />
          <CaseCard caseStudy={items[1]} locale={locale} />
          <CaseCard caseStudy={items[2]} locale={locale} />
        </div>
      </div>
    </section>
  );
}
