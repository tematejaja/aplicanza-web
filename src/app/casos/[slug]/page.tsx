import type { Metadata } from "next";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { ContactBand } from "@/components/ContactBand";
import { caseBySlug, caseLocalePairs, cases } from "@/content/site";

type CasePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return cases.map((caseStudy) => ({ slug: caseStudy.slug }));
}

export async function generateMetadata({ params }: CasePageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = caseBySlug[slug];
  if (!caseStudy) return {};

  return {
    title: `Caso ${caseStudy.name}`,
    description: caseStudy.summary,
    alternates: {
      canonical: `/casos/${caseStudy.slug}`,
      languages: {
        "es-CO": `/casos/${caseStudy.slug}`,
        "en-US": `/en/cases/${caseLocalePairs[caseStudy.slug]}`,
      },
    },
    openGraph: {
      title: `Caso ${caseStudy.name}`,
      description: caseStudy.summary,
      images: [{ alt: caseStudy.imageAlt, url: caseStudy.image }],
      url: `/casos/${caseStudy.slug}`,
    },
  };
}

export default async function CasePage({ params }: CasePageProps) {
  const { slug } = await params;
  const caseStudy = caseBySlug[slug];
  if (!caseStudy) notFound();

  return (
    <>
      <section className="case-hero">
        <div className="shell case-hero-grid">
          <div className="case-hero-copy">
            <p className="eyebrow">{caseStudy.category}</p>
            <h1>{caseStudy.name}</h1>
            <p>{caseStudy.summary}</p>
            <ButtonLink external href={caseStudy.externalUrl} variant="secondary">
              {caseStudy.externalLabel}
            </ButtonLink>
          </div>
          <div className="case-hero-image">
            <Image
              alt={caseStudy.imageAlt}
              fill
              priority
              sizes="(max-width: 767px) 100vw, 52vw"
              src={caseStudy.image}
            />
          </div>
        </div>
      </section>

      <section className="case-detail-section">
        <div className="shell case-detail-grid">
          <article className="case-challenge">
            <p className="eyebrow">El reto</p>
            <h2>{caseStudy.challenge}</h2>
          </article>

          <div className="case-intervention">
            <h2>Intervención</h2>
            <ul>
              {caseStudy.intervention.map((item) => (
                <li key={item}>
                  <CheckCircle aria-hidden="true" size={22} weight="duotone" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="case-evidence">
            <h2>Evidencia disponible</h2>
            <div>
              {caseStudy.evidence.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactBand
        copy="Podemos revisar si una intervención similar tiene sentido para tu proceso y tus datos."
        title="Tu proyecto no necesita parecerse a este. Debe responder a tu problema."
      />
    </>
  );
}
