import type { Metadata } from "next";
import { ArrowUpRight, Buildings, MapPin, UserFocus } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { ContactBand } from "@/components/ContactBand";
import { PageIntro } from "@/components/PageIntro";
import { founderProfileEn, siteConfigEn } from "@/content/site-en";
import { publicAsset } from "@/lib/public-asset";

export const metadata: Metadata = {
  title: "Aplicanza and Nicolás Álvarez",
  description: "Meet Nicolás Álvarez, an economist with studies in project management, AI for social projects, and data science with R.",
  alternates: { canonical: "/en/about", languages: { "es-CO": "/nosotros", "en-US": "/en/about" } },
};

export default function EnglishAboutPage() {
  return (
    <>
      <PageIntro eyebrow="About" summary="Aplicanza works as a team while maintaining direct contact with the people who know each process." title="Close enough to understand. Methodical enough to implement." />
      <section className="about-founder">
        <div className="shell about-founder-grid">
          <figure className="founder-portrait about-portrait">
            <Image
              alt="Nicolás Álvarez, founder of Aplicanza"
              fill
              priority
              sizes="(max-width: 767px) 12rem, (max-width: 1023px) 18rem, 22rem"
              src={publicAsset("/images/nicolas-alvarez.png")}
            />
          </figure>
          <div>
            <h2>{founderProfileEn.name}</h2>
            <p className="about-role">{founderProfileEn.role}</p>
            <p>{founderProfileEn.summary}</p>
            <p>{founderProfileEn.experience}</p>
            <div className="about-credentials">
              <h3>Relevant education</h3>
              <ul>{founderProfileEn.credentials.map((credential) => <li key={credential}>{credential}</li>)}</ul>
            </div>
            <a className="about-linkedin" href={siteConfigEn.linkedin} rel="noreferrer" target="_blank">
              View public LinkedIn profile
              <ArrowUpRight aria-hidden="true" size={18} weight="bold" />
            </a>
          </div>
        </div>
      </section>
      <section className="about-principles">
        <div className="shell about-principles-grid">
          <article><UserFocus aria-hidden="true" size={28} weight="duotone" /><h2>Close collaboration</h2><p>Decisions are made with the team that lives the process, not from an abstract presentation.</p></article>
          <article><Buildings aria-hidden="true" size={28} weight="duotone" /><h2>Business focus</h2><p>Technology is evaluated by its effect on sales, costs, information, and adaptability.</p></article>
          <article><MapPin aria-hidden="true" size={28} weight="duotone" /><h2>In person and virtual</h2><p>In-person service in Bogota, with virtual support in other cities.</p></article>
        </div>
      </section>
      <section className="about-team">
        <div className="shell about-team-grid">
          <h2>A company with one clear point of contact.</h2>
          <div>
            <p>Nicolás leads the assessment and scope decisions. According to the project, Aplicanza brings in specialists in data, automation, development, and adoption.</p>
            <p>The client keeps one responsible lead, a visible plan, and agreed criteria for deciding whether to scale.</p>
          </div>
        </div>
      </section>
      <ContactBand locale="en" />
    </>
  );
}
