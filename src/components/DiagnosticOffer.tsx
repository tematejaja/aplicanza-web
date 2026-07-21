import { CheckCircle } from "@phosphor-icons/react/dist/ssr";

const content = {
  es: {
    eyebrow: "Diagnóstico inicial",
    title: "Una decisión útil antes de invertir en desarrollo.",
    summary:
      "Trabajamos un proceso acotado, revisamos la información disponible y definimos qué piloto tiene mejores condiciones para demostrar valor.",
    duration: "Duración orientativa",
    durationValue: "10 días hábiles",
    scope: "Alcance",
    scopeValue: "Un proceso o área claramente acotada",
    groups: [
      {
        title: "Comprender la situación",
        items: ["Mapa del proceso actual", "Revisión de datos y conocimiento interno", "Línea base del problema"],
      },
      {
        title: "Tomar una decisión",
        items: ["Matriz de oportunidades", "Piloto recomendado", "Indicadores y hoja de ruta"],
      },
    ],
    note: "El diagnóstico no incluye el desarrollo completo. Su resultado es una decisión de inversión mejor sustentada.",
  },
  en: {
    eyebrow: "Initial assessment",
    title: "A useful decision before investing in development.",
    summary:
      "We work on one scoped process, review the available information, and define which pilot has the best conditions to prove value.",
    duration: "Indicative duration",
    durationValue: "10 business days",
    scope: "Scope",
    scopeValue: "One clearly scoped process or area",
    groups: [
      {
        title: "Understand the situation",
        items: ["Current process map", "Data and internal knowledge review", "Problem baseline"],
      },
      {
        title: "Make a decision",
        items: ["Opportunity matrix", "Recommended pilot", "Indicators and roadmap"],
      },
    ],
    note: "The assessment does not include full development. Its result is a better-supported investment decision.",
  },
};

export function DiagnosticOffer({ locale = "es" }: { locale?: "es" | "en" }) {
  const copy = content[locale];

  return (
    <section className="diagnostic-offer" id={locale === "en" ? "assessment" : "diagnostico"}>
      <div className="shell diagnostic-offer-grid">
        <div className="diagnostic-offer-copy">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2>{copy.title}</h2>
          <p>{copy.summary}</p>
          <dl>
            <div>
              <dt>{copy.duration}</dt>
              <dd>{copy.durationValue}</dd>
            </div>
            <div>
              <dt>{copy.scope}</dt>
              <dd>{copy.scopeValue}</dd>
            </div>
          </dl>
        </div>

        <div className="diagnostic-deliverables">
          {copy.groups.map((group) => (
            <div key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>
                    <CheckCircle aria-hidden="true" size={20} weight="duotone" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <p className="diagnostic-note">{copy.note}</p>
        </div>
      </div>
    </section>
  );
}
