import type { Metadata } from "next";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { notFound } from "next/navigation";
import { ContactBand } from "@/components/ContactBand";
import { PageIntro } from "@/components/PageIntro";
import { allServicesEn, serviceBySlugEn, serviceLocalePairsEn, siteConfigEn } from "@/content/site-en";

type ServicePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return allServicesEn.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlugEn[slug];
  if (!service) return {};
  return {
    title: service.title,
    description: service.intro,
    alternates: {
      canonical: `/en/services/${service.slug}`,
      languages: {
        "es-CO": `/servicios/${serviceLocalePairsEn[service.slug]}`,
        "en-US": `/en/services/${service.slug}`,
      },
    },
    openGraph: { title: service.title, description: service.intro, url: `/en/services/${service.slug}` },
  };
}

export default async function EnglishServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = serviceBySlugEn[slug];
  if (!service) notFound();

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.intro,
    provider: { "@type": "Organization", name: siteConfigEn.name, url: siteUrl },
    areaServed: ["Colombia", "United States", "Virtual service"],
  };

  return (
    <>
      <PageIntro eyebrow="Service" summary={service.intro} title={service.title} />
      <section className="service-detail">
        <div className="shell service-detail-grid">
          <article className="service-problem">
            <p className="eyebrow">The problem</p>
            <h2>{service.problem}</h2>
          </article>
          <div className="service-scope">
            <h2>What it includes</h2>
            <p className="service-duration">{service.duration}</p>
            <ul>
              {service.includes.map((item) => (
                <li key={item}>
                  <CheckCircle aria-hidden="true" size={22} weight="duotone" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <article className="service-outcome">
            <p className="service-detail-label">Expected outcome</p>
            <p>{service.result}</p>
          </article>
          <article className="service-audience">
            <p className="service-detail-label">Who it is for</p>
            <p>{service.forWhom}</p>
          </article>
        </div>
      </section>
      <ContactBand
        locale="en"
        copy="We will review the process, the available information, and the first result worth proving."
        title="Let us turn this service into a concrete pilot."
      />
      <script dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replaceAll("<", "\\u003c") }} type="application/ld+json" />
    </>
  );
}
