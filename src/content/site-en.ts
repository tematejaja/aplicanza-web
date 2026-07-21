import type { CaseStudy, Service } from "@/content/site";

import { publicAsset } from "@/lib/public-asset";

export const siteConfigEn = {
  name: "Aplicanza",
  descriptor: "Applied AI for small and mid-sized businesses.",
  claim: "We implement AI so your business can move forward.",
  tagline: "From possibility to implementation.",
  description:
    "Aplicanza implements artificial intelligence, automation, and analytics for small and mid-sized businesses. We diagnose, pilot, and measure before scaling.",
  email: "nicolasalvarezbernal@gmail.com",
  whatsapp: "573002968009",
  whatsappLabel: "+57 300 296 8009",
  locations: "Bogota. Virtual support in other cities.",
  linkedin: "https://www.linkedin.com/in/nicolas-alvarez-6864a0200/",
};

export const founderProfileEn = {
  name: "Nicolás Álvarez",
  role: "Economist and founder of Aplicanza",
  summary:
    "He combines economic judgment, project management, and data analysis to turn business needs into measurable implementations.",
  experience:
    "His background includes experience at Colombia's National Land Agency and work with public information, projects, and digital products.",
  credentials: [
    "Economist",
    "Postgraduate studies in Project Management",
    "Artificial Intelligence for Social Project Management, Universidad de los Andes",
    "Data Science: Foundations using R Specialization, Coursera",
  ],
};

export const servicesEn: Service[] = [
  {
    slug: "ai-assessment-roadmap",
    title: "AI opportunity assessment for small businesses",
    shortTitle: "AI opportunity assessment",
    intro:
      "We find where time, money, or information is being lost and define the first pilot worth measuring.",
    problem:
      "The company wants to use AI but does not know where to start or which initiative can create measurable value.",
    result:
      "A clear decision on what to test first, with a baseline, scope, risks, data requirements, and roadmap.",
    includes: [
      "Map of one clearly scoped process",
      "Review of data sources, quality, and availability",
      "Prioritized problems and opportunities",
      "Impact, feasibility, and risk matrix",
      "Recommended pilot with success indicators",
      "Roadmap for the next decision",
    ],
    forWhom:
      "Small and mid-sized businesses exploring AI, weighing several ideas, or reviewing an attempt that did not move forward.",
    duration: "Around 10 business days, depending on access to people and information.",
  },
  {
    slug: "data-analytics",
    title: "Data analysis for small businesses",
    shortTitle: "Applied data and analytics",
    intro:
      "We organize files, systems, and internal knowledge to create indicators, analysis, and dashboards that support a decision.",
    problem:
      "Data is fragmented, inconsistent, or unable to answer the questions management needs to address.",
    result:
      "Reliable information for decisions, baseline measurement, and evidence-based automation or assistants.",
    includes: [
      "Source inventory and assessment",
      "Cleaning, integration, and quality rules",
      "Indicators tied to decisions",
      "Dashboards and analysis with visible methodology",
      "Validation, documentation, and handoff",
    ],
    forWhom:
      "Businesses that produce information but still decide through fragmented, delayed, or hard-to-verify reports.",
    duration: "Defined by the number of sources, their quality, and the business question.",
  },
  {
    slug: "process-automation",
    title: "Process automation for small businesses",
    shortTitle: "Process automation",
    intro:
      "We reduce repetitive tasks and connect tools with rules, exceptions, and human oversight.",
    problem:
      "The team repeatedly searches, classifies, answers, prepares documents, or moves information between systems.",
    result:
      "A faster, traceable workflow that frees time without losing control over exceptions or sensitive decisions.",
    includes: [
      "Current workflow and volume map",
      "Rules, exceptions, and control-point design",
      "Integration with existing tools",
      "Pilot with users and agreed indicators",
      "Documentation, training, and follow-up",
    ],
    forWhom:
      "Sales, operations, administration, and customer service teams with frequent manual workloads.",
    duration: "A pilot usually takes 3 to 8 weeks, depending on integrations and data.",
  },
  {
    slug: "business-ai-assistants",
    title: "AI assistants for businesses",
    shortTitle: "Business AI assistants",
    intro:
      "We build assistants that consult authorized sources, support specific tasks, and make human intervention explicit.",
    problem:
      "Knowledge is spread across documents, emails, and people, so finding context and responding takes too long.",
    result:
      "Faster access to internal knowledge, with boundaries, evaluation, traceability, and oversight defined from the pilot.",
    includes: [
      "Source and permission selection",
      "Question, answer, and boundary design",
      "Accuracy and failure-case testing",
      "Human oversight and escalation",
      "Training and improvement through real use",
    ],
    forWhom:
      "Businesses that need to support sales, service, operations, or internal consultation without building a generic chatbot.",
    duration: "The pilot is estimated according to sources, permissions, and integration needs.",
  },
];

export const complementaryServicesEn: Service[] = [
  {
    slug: "web-conversion",
    title: "Web and conversion connected to the business",
    shortTitle: "Web and conversion",
    intro:
      "We design digital experiences that explain value, capture opportunities, and connect to the sales process.",
    problem:
      "The digital presence provides information but does not generate trust, qualified contacts, or sales continuity.",
    result:
      "A fast, clear, and measurable website that turns visits into relevant conversations.",
    includes: [
      "Architecture, content, and conversion design",
      "Responsive and accessible development",
      "Forms, WhatsApp, and analytics integration",
      "Technical SEO and launch preparation",
    ],
    forWhom:
      "Companies that need a useful digital presence as part of a broader commercial or information project.",
    duration: "Estimated after defining content, integrations, and technical scope.",
  },
  {
    slug: "adoption-training",
    title: "Practical adoption and training",
    shortTitle: "Adoption and training",
    intro:
      "We integrate training, ownership, and protocols so every solution can move from testing to everyday work.",
    problem:
      "A tool can work technically and still fail because the team does not trust it or know how to use it.",
    result:
      "Prepared people, clear ownership, and a safe way to improve the solution through real use.",
    includes: [
      "A map of the people affected by the change",
      "Training based on real work situations",
      "Use, review, and escalation protocols",
      "Support throughout adoption",
    ],
    forWhom:
      "Organizations that need an implementation to move from demonstration to everyday use.",
    duration: "Runs alongside the pilot and implementation, depending on the number of teams involved.",
  },
];

export const allServicesEn = [...servicesEn, ...complementaryServicesEn];

export const serviceBySlugEn = Object.fromEntries(
  allServicesEn.map((service) => [service.slug, service]),
) as Record<string, Service>;

export const serviceLocalePairsEn: Record<string, string> = {
  "ai-assessment-roadmap": "diagnostico-y-hoja-de-ruta",
  "data-analytics": "datos-y-analitica",
  "process-automation": "automatizacion-y-agentes",
  "business-ai-assistants": "asistentes-empresariales",
  "web-conversion": "web-y-conversion",
  "adoption-training": "adopcion-y-formacion",
};

export const casesEn: CaseStudy[] = [
  {
    slug: "unidad-endogastro-del-tolima",
    name: "Unidad Endogastro del Tolima",
    category: "Digital presence and conversion",
    summary:
      "End-to-end website creation for a digestive health institution based in Ibague, Colombia.",
    challenge:
      "Organize a broad medical portfolio, communicate trust, and help patients find services, specialists, and contact channels.",
    intervention: [
      "Complete content architecture",
      "Responsive design and development",
      "Presentation of services, medical team, and contact options",
      "Search and mobile consultation optimization",
    ],
    evidence: [
      "Public website available for review",
      "Centralized service and specialist information",
      "Clear routes to book and get in touch",
    ],
    image: publicAsset("/images/cases/endogastro.webp"),
    imageAlt: "Homepage of Unidad Endogastro del Tolima",
    externalUrl: "https://unidadendogastro.com/",
    externalLabel: "Visit Unidad Endogastro",
  },
  {
    slug: "radarsecop",
    name: "RadarSECOP",
    category: "Data, digital product, and AI",
    summary:
      "A product for finding opportunities and analyzing public procurement with verifiable SECOP evidence.",
    challenge:
      "Turn large public procurement datasets into understandable searches for bidders, analysts, and oversight teams.",
    intervention: [
      "Search by subject, entity, location, value, and date",
      "Dedicated lookup by process or contract number",
      "Visible filters and explainable results",
      "Search continuity and traceability to official sources",
    ],
    evidence: [
      "Operational public application",
      "Official SECOP I and SECOP II sources",
      "Results connected to supporting evidence",
    ],
    image: publicAsset("/images/cases/radarsecop.webp"),
    imageAlt: "RadarSECOP homepage",
    externalUrl: "https://midnightblue-wallaby-609420.hostingersite.com/",
    externalLabel: "Open RadarSECOP",
  },
  {
    slug: "geih-observatory",
    name: "GEIH Observatory",
    category: "Data engineering and analytics",
    summary:
      "DANE microdata transformed into an interactive observatory of the Colombian labor market.",
    challenge:
      "Make complex labor indicators comparable without hiding methodological choices or precision limits.",
    intervention: [
      "GEIH microdata processing and harmonization",
      "Employment, income, and job-quality indicators",
      "Comparison by period and geographical domain",
      "Precision controls and traceable methodology",
    ],
    evidence: [
      "Interactive public application",
      "DANE identified as the data source",
      "Visible variables, formulas, and methodological notes",
    ],
    image: publicAsset("/images/cases/geih.webp"),
    imageAlt: "Labor Pulse panel in the GEIH Observatory",
    externalUrl: "https://dashboardgeih-01.streamlit.app/#pulso-laboral",
    externalLabel: "Open GEIH Observatory",
  },
];

export const caseBySlugEn = Object.fromEntries(
  casesEn.map((caseStudy) => [caseStudy.slug, caseStudy]),
) as Record<string, CaseStudy>;

export const caseLocalePairsEn: Record<string, string> = {
  "unidad-endogastro-del-tolima": "unidad-endogastro-del-tolima",
  radarsecop: "radarsecop",
  "geih-observatory": "observatorio-geih",
};

export const methodologyEn = [
  {
    verb: "Understand",
    framework: "Double Diamond",
    copy: "We observe the process with the people who know it and define the problem before discussing tools.",
  },
  {
    verb: "Prioritize",
    framework: "Lean",
    copy: "We rank opportunities by impact, effort, available information, and risk.",
  },
  {
    verb: "Work with data",
    framework: "CRISP-DM",
    copy: "We prepare and validate the information that supports the solution and its decisions.",
  },
  {
    verb: "Pilot",
    framework: "Agile",
    copy: "We build a focused version, test it in real work, and learn quickly.",
  },
  {
    verb: "Control",
    framework: "NIST AI RMF",
    copy: "We define ownership, oversight, boundaries, and evidence for trustworthy operation.",
  },
  {
    verb: "Adopt",
    framework: "Change management",
    copy: "We support people so the solution becomes a lasting capability of the company.",
  },
];
