import { ArrowRight, ChartLineUp, Clock, Coins, Database } from "@phosphor-icons/react/dist/ssr";
import { StaticLink as Link } from "@/components/StaticLink";

const content = {
  es: {
    proofLabel: "Proyectos públicos que puedes verificar",
    proofLinks: [
      { href: "/casos/radarsecop", label: "RadarSECOP" },
      { href: "/casos/observatorio-geih", label: "Observatorio GEIH" },
      { href: "/casos/unidad-endogastro-del-tolima", label: "Unidad Endogastro" },
    ],
    lossTitle: "La IA solo importa cuando recupera valor.",
    lossCopy:
      "Partimos de pérdidas que la empresa ya reconoce y las convertimos en una intervención que se puede probar.",
    pains: [
      {
        icon: Clock,
        title: "Tiempo que se repite",
        copy: "Tareas manuales que ocupan al equipo sin mejorar la decisión ni el servicio.",
      },
      {
        icon: Coins,
        title: "Costos que se acumulan",
        copy: "Errores, reprocesos y demoras que reducen la rentabilidad de cada operación.",
      },
      {
        icon: Database,
        title: "Información que no circula",
        copy: "Datos dispersos que llegan tarde o no se convierten en una acción concreta.",
      },
      {
        icon: ChartLineUp,
        title: "Ventas que no avanzan",
        copy: "Oportunidades que se enfrían por falta de seguimiento, contexto o velocidad.",
      },
    ],
    dataTitle: "Antes de automatizar, entendemos tus datos.",
    dataCopy:
      "La información define qué puede medirse, qué conviene automatizar y dónde una respuesta de IA necesita supervisión.",
    dataLink: "Evaluar el potencial de tus datos",
    dataHref: "/servicios/datos-y-analitica",
    dataStages: [
      {
        title: "Ordenar",
        copy: "Identificamos fuentes, responsables, vacíos y reglas de calidad.",
      },
      {
        title: "Interpretar",
        copy: "Relacionamos indicadores y análisis con una decisión real del negocio.",
      },
      {
        title: "Medir",
        copy: "Definimos una línea base para saber si el piloto produjo valor.",
      },
    ],
  },
  en: {
    proofLabel: "Public projects you can verify",
    proofLinks: [
      { href: "/en/cases/radarsecop", label: "RadarSECOP" },
      { href: "/en/cases/geih-observatory", label: "GEIH Observatory" },
      { href: "/en/cases/unidad-endogastro-del-tolima", label: "Unidad Endogastro" },
    ],
    lossTitle: "AI only matters when it recovers value.",
    lossCopy:
      "We start with losses the business already recognizes and turn them into an intervention that can be tested.",
    pains: [
      {
        icon: Clock,
        title: "Time spent twice",
        copy: "Manual tasks keep the team busy without improving decisions or service.",
      },
      {
        icon: Coins,
        title: "Costs that accumulate",
        copy: "Errors, rework, and delays reduce the profitability of every operation.",
      },
      {
        icon: Database,
        title: "Information that does not flow",
        copy: "Fragmented data arrives late or never becomes a concrete action.",
      },
      {
        icon: ChartLineUp,
        title: "Sales that stall",
        copy: "Opportunities go cold because follow-up, context, or speed is missing.",
      },
    ],
    dataTitle: "Before we automate, we understand your data.",
    dataCopy:
      "Information defines what can be measured, what is worth automating, and where an AI response needs oversight.",
    dataLink: "Assess the potential of your data",
    dataHref: "/en/services/data-analytics",
    dataStages: [
      {
        title: "Organize",
        copy: "We identify sources, ownership, gaps, and quality rules.",
      },
      {
        title: "Interpret",
        copy: "We connect indicators and analysis to a real business decision.",
      },
      {
        title: "Measure",
        copy: "We define a baseline to determine whether the pilot created value.",
      },
    ],
  },
};

export function ValueStory({ locale = "es" }: { locale?: "es" | "en" }) {
  const copy = content[locale];

  return (
    <>
      <section aria-label={copy.proofLabel} className="proof-strip">
        <div className="shell proof-strip-inner">
          <p>{copy.proofLabel}</p>
          <nav aria-label={copy.proofLabel}>
            {copy.proofLinks.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <section className="loss-section">
        <div className="shell">
          <div className="section-heading">
            <h2>{copy.lossTitle}</h2>
            <p>{copy.lossCopy}</p>
          </div>
          <div className="loss-grid">
            {copy.pains.map((pain, index) => {
              const Icon = pain.icon;
              return (
                <article className={`loss-item loss-item-${index + 1}`} key={pain.title}>
                  <Icon aria-hidden="true" size={26} weight="duotone" />
                  <h3>{pain.title}</h3>
                  <p>{pain.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="data-foundation">
        <div className="shell data-foundation-grid">
          <div className="data-foundation-copy">
            <h2>{copy.dataTitle}</h2>
            <p>{copy.dataCopy}</p>
            <Link href={copy.dataHref}>
              {copy.dataLink} <ArrowRight aria-hidden="true" size={18} weight="bold" />
            </Link>
          </div>
          <div className="data-foundation-list">
            {copy.dataStages.map((stage) => (
              <article key={stage.title}>
                <h3>{stage.title}</h3>
                <p>{stage.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
