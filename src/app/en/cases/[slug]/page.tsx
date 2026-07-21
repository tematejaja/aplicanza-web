import type { Metadata } from "next";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { ContactBand } from "@/components/ContactBand";
import { caseBySlugEn, caseLocalePairsEn, casesEn } from "@/content/site-en";

type CasePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return casesEn.map((caseStudy) => ({ slug: caseStudy.slug }));
}

export async function generateMetadata({ params }: CasePageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = caseBySlugEn[slug];
  if (!caseStudy) return {};
  return {
    title: `${caseStudy.name} case`,
    description: caseStudy.summary,
    alternates: {
      canonical: `/en/cases/${caseStudy.slug}`,
      languages: {
        "es-CO": `/casos/${caseLocalePairsEn[caseStudy.slug]}`,
        "en-US": `/en/cases/${caseStudy.slug}`,
      },
    },
    openGraph: {
      title: `${caseStudy.name} case`,
      description: caseStudy.summary,
      images: [{ alt: caseStudy.imageAlt, url: caseStudy.image }],
      url: `/en/cases/${caseStudy.slug}`,
    },
  };
}

export default async function EnglishCasePage({ params }: CasePageProps) {
  const { slug } = await params;
  const caseStudy = caseBySlugEn[slug];
  if (!caseStudy) notFound();
  return (
    <>
      <section className="case-hero">
        <div className="shell case-hero-grid">
          <div className="case-hero-copy">
            <p className="eyebrow">{caseStudy.category}</p>
            <h1>{caseStudy.name}</h1>
            <p>{caseStudy.summary}</p>
            <ButtonLink external href={caseStudy.externalUrl} variant="secondary">{caseStudy.externalLabel}</ButtonLink>
          </div>
          <div className="case-hero-image">
            <Image alt={caseStudy.imageAlt} fill priority sizes="(max-width: 767px) 100vw, 52vw" src={caseStudy.image} />
          </div>
        </div>
      </section>
      <section className="case-detail-section">
        <div className="shell case-detail-grid">
          <article className="case-challenge"><p className="eyebrow">The challenge</p><h2>{caseStudy.challenge}</h2></article>
          <div className="case-intervention">
            <h2>Intervention</h2>
            <ul>{caseStudy.intervention.map((item) => <li key={item}><CheckCircle aria-hidden="true" size={22} weight="duotone" /><span>{item}</span></li>)}</ul>
          </div>
          <div className="case-evidence"><h2>Available evidence</h2><div>{caseStudy.evidence.map((item) => <p key={item}>{item}</p>)}</div></div>
        </div>
      </section>
      <ContactBand
        locale="en"
        copy="We can assess whether a similar intervention makes sense for your process and data."
        title="Your project does not need to resemble this one. It needs to address your problem."
      />
    </>
  );
}
