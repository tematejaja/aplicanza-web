import type { Metadata } from "next";
import { ArrowUpRight, Buildings, MapPin, UserFocus } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { ContactBand } from "@/components/ContactBand";
import { PageIntro } from "@/components/PageIntro";
import { founderProfile, siteConfig } from "@/content/site";
import { publicAsset } from "@/lib/public-asset";

export const metadata: Metadata = {
  title: "Aplicanza y Nicolás Álvarez",
  description:
    "Conoce a Nicolás Álvarez, economista con estudios de gerencia de proyectos, IA para proyectos sociales y ciencia de datos con R.",
  alternates: {
    canonical: "/nosotros",
    languages: { "es-CO": "/nosotros", "en-US": "/en/about" },
  },
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="Nosotros"
        summary="Aplicanza trabaja como equipo y mantiene un acompañamiento directo con las personas que conocen cada proceso."
        title="Cercanía para comprender. Método para implementar."
      />

      <section className="about-founder">
        <div className="shell about-founder-grid">
          <figure className="founder-portrait about-portrait">
            <Image
              alt="Nicolás Álvarez, fundador de Aplicanza"
              fill
              priority
              sizes="(max-width: 767px) 12rem, (max-width: 1023px) 18rem, 22rem"
              src={publicAsset("/images/nicolas-alvarez.png")}
            />
          </figure>
          <div>
            <h2>{founderProfile.name}</h2>
            <p className="about-role">{founderProfile.role}</p>
            <p>{founderProfile.summary}</p>
            <p>{founderProfile.experience}</p>
            <div className="about-credentials">
              <h3>Formación relevante</h3>
              <ul>
                {founderProfile.credentials.map((credential) => (
                  <li key={credential}>{credential}</li>
                ))}
              </ul>
            </div>
            <a className="about-linkedin" href={siteConfig.linkedin} rel="noreferrer" target="_blank">
              Consultar perfil público en LinkedIn
              <ArrowUpRight aria-hidden="true" size={18} weight="bold" />
            </a>
          </div>
        </div>
      </section>

      <section className="about-principles">
        <div className="shell about-principles-grid">
          <article>
            <UserFocus aria-hidden="true" size={28} weight="duotone" />
            <h2>Trabajo cercano</h2>
            <p>Las decisiones se toman con el equipo que vive el proceso, no desde una presentación abstracta.</p>
          </article>
          <article>
            <Buildings aria-hidden="true" size={28} weight="duotone" />
            <h2>Enfoque de empresa</h2>
            <p>La tecnología se evalúa por su efecto en ventas, costos, información y capacidad de adaptación.</p>
          </article>
          <article>
            <MapPin aria-hidden="true" size={28} weight="duotone" />
            <h2>Presencial y virtual</h2>
            <p>Atención presencial en Bogotá y acompañamiento virtual en otras ciudades.</p>
          </article>
        </div>
      </section>

      <section className="about-team">
        <div className="shell about-team-grid">
          <h2>Una empresa con un punto de contacto claro.</h2>
          <div>
            <p>
              Nicolás lidera el diagnóstico y las decisiones de alcance. Según el proyecto, Aplicanza integra especialistas en datos, automatización, desarrollo y adopción.
            </p>
            <p>
              El cliente mantiene una persona responsable, un plan visible y criterios acordados para decidir si conviene ampliar.
            </p>
          </div>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
