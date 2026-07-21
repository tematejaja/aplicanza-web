import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { StaticLink as Link } from "@/components/StaticLink";
import { complementaryServices, services } from "@/content/site";
import { complementaryServicesEn, servicesEn } from "@/content/site-en";

export function ServicesOverview({ locale = "es" }: { locale?: "es" | "en" }) {
  const english = locale === "en";
  const items = english ? servicesEn : services;
  const complementary = english ? complementaryServicesEn : complementaryServices;
  const prefix = english ? "/en/services" : "/servicios";

  return (
    <section className="services-section">
      <div className="shell services-layout">
        <article className="service-feature">
          <p className="service-feature-label">{english ? "The starting point" : "El punto de partida"}</p>
          <h2>{items[0].shortTitle}</h2>
          <p>{items[0].intro}</p>
          <p className="service-feature-duration">{items[0].duration}</p>
          <Link href={`${prefix}/${items[0].slug}`}>
            {english ? "See the assessment" : "Conocer el diagnóstico"}
            <ArrowRight aria-hidden="true" size={18} weight="bold" />
          </Link>
        </article>

        <div className="service-index">
          <h2>{english ? "Four capabilities. One implementation path." : "Cuatro capacidades. Una ruta de implementación."}</h2>
          {items.slice(1).map((service) => (
            <Link href={`${prefix}/${service.slug}`} key={service.slug}>
              <div>
                <h3>{service.shortTitle}</h3>
                <p>{service.intro}</p>
              </div>
              <ArrowRight aria-hidden="true" size={21} weight="bold" />
            </Link>
          ))}
          <div className="service-support-note">
            <p>
              {english
                ? "Adoption, training, and change management are included throughout the work."
                : "La adopción, la formación y la gestión del cambio acompañan todo el trabajo."}
            </p>
            <Link href={`${prefix}/${complementary[0].slug}`}>
              {english ? "Complementary web and conversion capability" : "Capacidad complementaria de web y conversión"}
            </Link>
          </div>
          <Link className="service-all-link" href={prefix}>
            {english ? "Explore every capability" : "Explorar todas las capacidades"}
          </Link>
        </div>
      </div>
    </section>
  );
}
