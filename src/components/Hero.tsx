import { StaticLink as Link } from "@/components/StaticLink";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { HeroVisual } from "@/components/HeroVisual";

export function Hero({ locale = "es" }: { locale?: "es" | "en" }) {
  const english = locale === "en";
  const copy = english
    ? {
        eyebrow: "Applied AI for small and mid-sized businesses",
        titleLead: "We implement artificial intelligence",
        titleAccent: "so your business can move forward.",
        summary:
          "We find where time, money, or information is being lost. We design a pilot with your data and only scale what proves results.",
        primary: "Request an assessment",
        secondary: "View cases",
        presence: "Bogota · remote delivery",
      }
    : {
        eyebrow: "IA aplicada para pymes",
        titleLead: "Implementamos inteligencia artificial",
        titleAccent: "para que tu empresa avance.",
        summary:
          "Encontramos dónde pierde tiempo, dinero o información. Diseñamos un piloto con sus datos y ampliamos solo lo que demuestra resultados.",
        primary: "Solicitar diagnóstico",
        secondary: "Ver casos",
        presence: "Bogotá · atención remota",
      };

  return (
    <section aria-labelledby={`hero-title-${locale}`} className="hero">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1 id={`hero-title-${locale}`}>
            <span>{copy.titleLead}</span>{" "}
            <span className="hero-title-accent">{copy.titleAccent}</span>
          </h1>
          <p className="hero-summary">{copy.summary}</p>
          <div className="hero-actions">
            <Link className="button-link button-link-primary" href={english ? "/en/contact" : "/contacto"}>
              <span>{copy.primary}</span>
              <ArrowRight aria-hidden="true" size={18} weight="bold" />
            </Link>
            <Link className="button-link button-link-secondary" href={english ? "/en/cases" : "/casos"}>
              <span>{copy.secondary}</span>
              <ArrowRight aria-hidden="true" size={18} weight="bold" />
            </Link>
          </div>
          <p className="hero-presence">
            <span aria-hidden="true" />
            {copy.presence}
          </p>
        </div>

        <div className="hero-media">
          <HeroVisual locale={locale} />
        </div>
      </div>
    </section>
  );
}
