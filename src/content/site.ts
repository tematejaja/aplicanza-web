import { publicAsset } from "@/lib/public-asset";

export const siteConfig = {
  name: "Aplicanza",
  descriptor: "IA aplicada para pymes.",
  claim: "Implementamos inteligencia artificial para que tu empresa avance.",
  tagline: "De la posibilidad a la implementación.",
  description:
    "Aplicanza implementa inteligencia artificial, automatización y analítica para pymes. Diagnosticamos, pilotamos y medimos antes de ampliar.",
  email: "nicolasalvarezbernal@gmail.com",
  whatsapp: "573002968009",
  whatsappLabel: "+57 300 296 8009",
  locations: "Bogotá. Acompañamiento virtual en otras ciudades.",
  linkedin: "https://www.linkedin.com/in/nicolas-alvarez-6864a0200/",
};

export const founderProfile = {
  name: "Nicolás Álvarez",
  role: "Economista y fundador de Aplicanza",
  summary:
    "Combina criterio económico, gestión de proyectos y análisis de datos para convertir necesidades de negocio en implementaciones medibles.",
  experience:
    "Su trayectoria incluye experiencia en la Agencia Nacional de Tierras y trabajo con información pública, proyectos y productos digitales.",
  credentials: [
    "Economista",
    "Estudios de posgrado en Gerencia de Proyectos",
    "Inteligencia artificial para la gestión de proyectos sociales, Universidad de los Andes",
    "Programa especializado Data Science: Foundations using R, Coursera",
  ],
};

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  intro: string;
  problem: string;
  result: string;
  includes: string[];
  forWhom: string;
  duration: string;
};

export const services: Service[] = [
  {
    slug: "diagnostico-y-hoja-de-ruta",
    title: "Diagnóstico de oportunidades de IA para pymes",
    shortTitle: "Diagnóstico de oportunidades de IA",
    intro:
      "Encontramos dónde se pierde tiempo, dinero o información y definimos el primer piloto que vale la pena medir.",
    problem:
      "La empresa quiere usar IA, pero no sabe por dónde comenzar ni qué iniciativa puede producir valor real.",
    result:
      "Una decisión clara sobre qué probar primero, con línea base, alcance, riesgos, datos necesarios y hoja de ruta.",
    includes: [
      "Mapa de un proceso claramente acotado",
      "Revisión de fuentes, calidad y disponibilidad de datos",
      "Problemas y oportunidades priorizados",
      "Matriz de impacto, viabilidad y riesgo",
      "Piloto recomendado con indicadores de éxito",
      "Hoja de ruta para decidir el siguiente paso",
    ],
    forWhom:
      "Pymes que están explorando IA, tienen varias ideas sin prioridad o necesitan revisar un intento que no avanzó.",
    duration: "Alrededor de 10 días hábiles, según el acceso a personas e información.",
  },
  {
    slug: "datos-y-analitica",
    title: "Análisis de datos para pymes",
    shortTitle: "Datos y analítica aplicada",
    intro:
      "Organizamos archivos, sistemas y conocimiento interno para crear indicadores, análisis y tableros que sirven a una decisión.",
    problem:
      "Los datos están dispersos, tienen inconsistencias o no responden las preguntas que necesita la dirección.",
    result:
      "Información confiable para decidir, medir una línea base y sostener automatizaciones o asistentes con evidencia.",
    includes: [
      "Inventario y evaluación de fuentes",
      "Limpieza, integración y reglas de calidad",
      "Indicadores vinculados con decisiones",
      "Tableros y análisis con metodología visible",
      "Validación, documentación y transferencia",
    ],
    forWhom:
      "Pymes que producen información, pero todavía deciden con reportes fragmentados, tardíos o difíciles de verificar.",
    duration: "Se define por el número de fuentes, su calidad y la pregunta de negocio.",
  },
  {
    slug: "automatizacion-y-agentes",
    title: "Automatización de procesos para pymes",
    shortTitle: "Automatización de procesos",
    intro:
      "Reducimos tareas repetitivas y conectamos herramientas con reglas, excepciones y supervisión humana.",
    problem:
      "El equipo repite búsquedas, clasificaciones, respuestas, documentos o movimientos de información entre sistemas.",
    result:
      "Un flujo más rápido y trazable que libera tiempo sin perder control sobre las excepciones ni las decisiones sensibles.",
    includes: [
      "Mapa del flujo y volumen actual",
      "Diseño de reglas, excepciones y puntos de control",
      "Integración con las herramientas existentes",
      "Piloto con usuarios e indicadores acordados",
      "Documentación, formación y seguimiento",
    ],
    forWhom:
      "Equipos de ventas, operaciones, administración o servicio al cliente con cargas manuales frecuentes.",
    duration: "Un piloto suele requerir entre 3 y 8 semanas, según integraciones y datos.",
  },
  {
    slug: "asistentes-empresariales",
    title: "Asistentes de inteligencia artificial para empresas",
    shortTitle: "Asistentes empresariales",
    intro:
      "Creamos asistentes que consultan fuentes autorizadas, apoyan tareas concretas y dejan claro cuándo debe intervenir una persona.",
    problem:
      "El conocimiento está repartido entre documentos, correos y personas, por lo que responder y encontrar contexto toma demasiado tiempo.",
    result:
      "Acceso más rápido al conocimiento interno, con límites, evaluación, trazabilidad y supervisión definidos desde el piloto.",
    includes: [
      "Selección de fuentes y permisos",
      "Diseño de preguntas, respuestas y límites",
      "Pruebas de precisión y casos de fallo",
      "Supervisión humana y escalamiento",
      "Formación y mejora con uso real",
    ],
    forWhom:
      "Empresas que necesitan apoyar ventas, servicio, operaciones o consulta interna sin crear un chatbot genérico.",
    duration: "El piloto se estima según las fuentes, los permisos y el nivel de integración.",
  },
];

export const complementaryServices: Service[] = [
  {
    slug: "web-y-conversion",
    title: "Web y conversión conectada al negocio",
    shortTitle: "Web y conversión",
    intro:
      "Diseñamos experiencias digitales que explican el valor, captan oportunidades y se conectan con el proceso comercial.",
    problem:
      "La presencia digital informa, pero no genera confianza, contactos útiles ni continuidad con ventas y servicio.",
    result:
      "Una web rápida, clara y medible que convierte visitas en conversaciones relevantes.",
    includes: [
      "Arquitectura, contenido y diseño de conversión",
      "Desarrollo responsive y accesible",
      "Integración con formularios, WhatsApp y analítica",
      "SEO técnico y preparación para publicar",
    ],
    forWhom:
      "Empresas que necesitan una presencia digital útil como parte de un proyecto comercial o de información más amplio.",
    duration: "Se estima después de definir contenidos, integraciones y alcance técnico.",
  },
  {
    slug: "adopcion-y-formacion",
    title: "Adopción y formación práctica",
    shortTitle: "Adopción y formación",
    intro:
      "Integramos formación, responsables y protocolos para que cada solución pase de la prueba al trabajo cotidiano.",
    problem:
      "Una herramienta puede funcionar técnicamente y aun así fracasar porque el equipo no confía en ella o no sabe usarla.",
    result:
      "Personas preparadas, responsables definidos y una forma segura de mejorar la solución con el uso.",
    includes: [
      "Mapa de personas afectadas por el cambio",
      "Formación basada en situaciones del trabajo real",
      "Protocolos de uso, revisión y escalamiento",
      "Acompañamiento durante la adopción",
    ],
    forWhom:
      "Organizaciones que necesitan que una implementación pase de la demostración al uso cotidiano.",
    duration: "Acompaña el piloto y la implementación, según el número de equipos involucrados.",
  },
];

export const allServices = [...services, ...complementaryServices];

export const serviceBySlug = Object.fromEntries(
  allServices.map((service) => [service.slug, service]),
) as Record<string, Service>;

export const serviceLocalePairs: Record<string, string> = {
  "diagnostico-y-hoja-de-ruta": "ai-assessment-roadmap",
  "datos-y-analitica": "data-analytics",
  "automatizacion-y-agentes": "process-automation",
  "asistentes-empresariales": "business-ai-assistants",
  "web-y-conversion": "web-conversion",
  "adopcion-y-formacion": "adoption-training",
};

export type CaseStudy = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  challenge: string;
  intervention: string[];
  evidence: string[];
  image: string;
  imageAlt: string;
  externalUrl: string;
  externalLabel: string;
};

export const cases: CaseStudy[] = [
  {
    slug: "unidad-endogastro-del-tolima",
    name: "Unidad Endogastro del Tolima",
    category: "Presencia digital y conversión",
    summary:
      "Creación integral de la página web de una institución de salud digestiva en Ibagué.",
    challenge:
      "Organizar un portafolio médico amplio, comunicar confianza y facilitar que un paciente encuentre servicios, especialistas y canales de contacto.",
    intervention: [
      "Arquitectura completa de contenidos",
      "Diseño y desarrollo responsive",
      "Presentación de servicios, equipo médico y contacto",
      "Optimización para búsqueda y consulta desde móvil",
    ],
    evidence: [
      "Sitio público navegable",
      "Información de servicios y especialistas centralizada",
      "Rutas claras para agendar y contactar",
    ],
    image: publicAsset("/images/cases/endogastro.webp"),
    imageAlt: "Página principal de Unidad Endogastro del Tolima",
    externalUrl: "https://unidadendogastro.com/",
    externalLabel: "Visitar Unidad Endogastro",
  },
  {
    slug: "radarsecop",
    name: "RadarSECOP",
    category: "Datos, producto digital e IA",
    summary:
      "Producto para detectar oportunidades y analizar contratación pública con evidencia verificable de SECOP.",
    challenge:
      "Convertir grandes volúmenes de contratación pública en búsquedas comprensibles para proponentes, analistas y equipos de control.",
    intervention: [
      "Búsqueda por objeto, entidad, territorio, monto y fecha",
      "Consulta dedicada por número de proceso o contrato",
      "Filtros visibles y resultados explicables",
      "Continuidad de búsqueda y trazabilidad hasta la fuente oficial",
    ],
    evidence: [
      "Aplicación pública operativa",
      "Fuentes oficiales SECOP I y SECOP II",
      "Resultados vinculados con su evidencia",
    ],
    image: publicAsset("/images/cases/radarsecop.webp"),
    imageAlt: "Página principal de RadarSECOP",
    externalUrl: "https://midnightblue-wallaby-609420.hostingersite.com/",
    externalLabel: "Abrir RadarSECOP",
  },
  {
    slug: "observatorio-geih",
    name: "Observatorio GEIH",
    category: "Ingeniería de datos y analítica",
    summary:
      "Microdatos del DANE convertidos en un observatorio interactivo del mercado laboral colombiano.",
    challenge:
      "Hacer comparables indicadores laborales complejos sin ocultar las decisiones metodológicas ni los límites de precisión.",
    intervention: [
      "Procesamiento y armonización de microdatos GEIH",
      "Indicadores de empleo, ingresos y calidad laboral",
      "Comparación por periodo y dominio territorial",
      "Controles de precisión y metodología trazable",
    ],
    evidence: [
      "Aplicación pública interactiva",
      "Fuente DANE identificada",
      "Variables, fórmulas y advertencias metodológicas visibles",
    ],
    image: publicAsset("/images/cases/geih.webp"),
    imageAlt: "Panel Pulso Laboral del Observatorio GEIH",
    externalUrl: "https://dashboardgeih-01.streamlit.app/#pulso-laboral",
    externalLabel: "Abrir Observatorio GEIH",
  },
];

export const caseBySlug = Object.fromEntries(
  cases.map((caseStudy) => [caseStudy.slug, caseStudy]),
) as Record<string, CaseStudy>;

export const caseLocalePairs: Record<string, string> = {
  "unidad-endogastro-del-tolima": "unidad-endogastro-del-tolima",
  radarsecop: "radarsecop",
  "observatorio-geih": "geih-observatory",
};

export const methodology = [
  {
    verb: "Comprender",
    framework: "Double Diamond",
    copy: "Observamos el proceso con quienes lo conocen y definimos el problema antes de hablar de herramientas.",
  },
  {
    verb: "Priorizar",
    framework: "Lean",
    copy: "Ordenamos las oportunidades por impacto, esfuerzo, información disponible y riesgo.",
  },
  {
    verb: "Trabajar los datos",
    framework: "CRISP-DM",
    copy: "Preparamos y validamos la información que sostiene la solución y sus decisiones.",
  },
  {
    verb: "Pilotear",
    framework: "Agile",
    copy: "Construimos una versión acotada, la probamos en el trabajo real y aprendemos rápido.",
  },
  {
    verb: "Controlar",
    framework: "NIST AI RMF",
    copy: "Definimos responsables, supervisión, límites y evidencias para operar con confianza.",
  },
  {
    verb: "Adoptar",
    framework: "Gestión del cambio",
    copy: "Acompañamos a las personas para que la solución se convierta en una capacidad de la empresa.",
  },
];
