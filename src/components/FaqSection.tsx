import { CaretDown } from "@phosphor-icons/react/dist/ssr";

const questions = {
  es: [
    {
      question: "¿Necesitamos saber de inteligencia artificial para trabajar con Aplicanza?",
      answer: "No. Empezamos por el proceso, el problema y la información disponible. La herramienta se explica cuando ya existe una razón concreta para usarla.",
    },
    {
      question: "¿Por dónde comienza un proyecto?",
      answer: "Por una conversación de descubrimiento y, cuando existe encaje, un diagnóstico de un proceso claramente acotado.",
    },
    {
      question: "¿Qué entrega el diagnóstico?",
      answer: "Un mapa del proceso, revisión de datos, oportunidades priorizadas, línea base, piloto recomendado, indicadores y hoja de ruta.",
    },
    {
      question: "¿Cuánto tarda el diagnóstico?",
      answer: "Alrededor de 10 días hábiles. El plazo depende del acceso a las personas que conocen el proceso y a una muestra útil de información.",
    },
    {
      question: "¿Los datos deben estar organizados antes de empezar?",
      answer: "No. Parte del trabajo consiste en evaluar su calidad, identificar vacíos y decidir si son suficientes para el objetivo.",
    },
    {
      question: "¿Cómo controlan los riesgos y la información sensible?",
      answer: "Definimos fuentes autorizadas, permisos mínimos, límites, supervisión humana y evidencia. Aplicamos NIST AI RMF de forma proporcional al caso.",
    },
    {
      question: "¿Trabajan con las herramientas que ya usa la empresa?",
      answer: "Sí. El enfoque es mixto y puede integrar herramientas comerciales u open source cuando son compatibles con el proceso, el riesgo y el presupuesto.",
    },
    {
      question: "¿Qué ocurre si el piloto no demuestra el resultado esperado?",
      answer: "Se documenta el aprendizaje y se decide si conviene ajustar, cambiar el alcance o detener. Probar en pequeño evita escalar un costo sin evidencia.",
    },
    {
      question: "¿El acompañamiento puede ser presencial?",
      answer: "Sí. Aplicanza trabaja presencialmente en Bogotá, virtualmente en otras ciudades y puede evaluar traslados según el proyecto.",
    },
    {
      question: "¿Cómo iniciamos la conversación?",
      answer: "Completa el formulario breve. Revisaremos el proceso descrito y continuaremos por WhatsApp para confirmar el siguiente paso.",
    },
  ],
  en: [
    {
      question: "Do we need to understand artificial intelligence before working with Aplicanza?",
      answer: "No. We start with the process, the problem, and the available information. The tool is explained once there is a concrete reason to use it.",
    },
    {
      question: "How does a project begin?",
      answer: "With a discovery conversation and, when there is a fit, an assessment of one clearly scoped process.",
    },
    {
      question: "What does the assessment deliver?",
      answer: "A process map, data review, prioritized opportunities, baseline, recommended pilot, indicators, and roadmap.",
    },
    {
      question: "How long does the assessment take?",
      answer: "Around 10 business days. Timing depends on access to the people who know the process and a useful sample of information.",
    },
    {
      question: "Does our data need to be organized before we begin?",
      answer: "No. Part of the work is to assess quality, identify gaps, and decide whether the information is sufficient for the objective.",
    },
    {
      question: "How do you control risks and sensitive information?",
      answer: "We define authorized sources, minimum permissions, boundaries, human oversight, and evidence. NIST AI RMF is applied proportionally to each case.",
    },
    {
      question: "Can you work with the tools our company already uses?",
      answer: "Yes. The approach is mixed and can integrate commercial or open-source tools when they fit the process, risk, and budget.",
    },
    {
      question: "What happens if the pilot does not prove the expected result?",
      answer: "We document what was learned and decide whether to adjust, rescope, or stop. Testing small prevents scaling cost without evidence.",
    },
    {
      question: "Can support be provided in person?",
      answer: "Yes. Aplicanza works in person in Bogota, virtually elsewhere, and can assess travel according to the project.",
    },
    {
      question: "How do we start the conversation?",
      answer: "Complete the short form. We will review the process you describe and continue on WhatsApp to confirm the next step.",
    },
  ],
};

export function FaqSection({ locale = "es" }: { locale?: "es" | "en" }) {
  const english = locale === "en";
  const items = questions[locale];

  return (
    <section className="faq-section">
      <div className="shell faq-grid">
        <div className="faq-intro">
          <h2>{english ? "Questions that should be resolved before starting." : "Preguntas que conviene resolver antes de empezar."}</h2>
          <p>
            {english
              ? "Clear scope and expectations are part of a responsible implementation."
              : "Un alcance y unas expectativas claras también forman parte de una implementación responsable."}
          </p>
        </div>
        <div className="faq-list">
          {items.map((item) => (
            <details key={item.question}>
              <summary>
                <span>{item.question}</span>
                <CaretDown aria-hidden="true" size={20} weight="bold" />
              </summary>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
