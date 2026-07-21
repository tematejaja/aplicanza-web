import type { Metadata } from "next";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { notFound } from "next/navigation";
import { ContactBand } from "@/components/ContactBand";
import { PageIntro } from "@/components/PageIntro";
import { allServices, serviceBySlug, serviceLocalePairs, siteConfig } from "@/content/site";

type ServicePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return allServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug[slug];
  if (!service) return {};

  return {
    title: service.title,
    description: service.intro,
    alternates: {
      canonical: `/servicios/${service.slug}`,
      languages: {
        "es-CO": `/servicios/${service.slug}`,
        "en-US": `/en/services/${serviceLocalePairs[service.slug]}`,
      },
    },
    openGraph: {
      title: service.title,
      description: service.intro,
      url: `/servicios/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = serviceBySlug[slug];
  if (!service) notFound();

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.intro,
    provider: { "@type": "Organization", name: siteConfig.name, url: siteUrl },
    areaServed: ["Colombia", "Estados Unidos", "Atención virtual"],
  };

  return (
    <>
      <PageIntro eyebrow="Servicio" summary={service.intro} title={service.title} />

      <section className="service-detail">
        <div className="shell service-detail-grid">
          <article className="service-problem">
            <p className="eyebrow">El problema</p>
            <h2>{service.problem}</h2>
          </article>

          <div className="service-scope">
            <h2>Qué incluye</h2>
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
            <p className="service-detail-label">Resultado esperado</p>
            <p>{service.result}</p>
          </article>

          <article className="service-audience">
            <p className="service-detail-label">Para quién es</p>
            <p>{service.forWhom}</p>
          </article>
        </div>
      </section>

      <ContactBand
        copy="Revisaremos el proceso, la información disponible y el primer resultado que vale la pena demostrar."
        title="Convirtamos este servicio en un piloto concreto."
      />

      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replaceAll("<", "\\u003c") }}
        type="application/ld+json"
      />
    </>
  );
}
