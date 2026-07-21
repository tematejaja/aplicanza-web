import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { StaticLink as Link } from "@/components/StaticLink";
import { founderProfile, siteConfig } from "@/content/site";
import { founderProfileEn, siteConfigEn } from "@/content/site-en";
import { publicAsset } from "@/lib/public-asset";

export function FounderTrust({ locale = "es" }: { locale?: "es" | "en" }) {
  const english = locale === "en";
  const profile = english ? founderProfileEn : founderProfile;
  const config = english ? siteConfigEn : siteConfig;

  return (
    <section className="founder-section">
      <div className="shell founder-grid">
        <figure className="founder-portrait">
          <Image
            alt={english ? "Nicolás Álvarez, founder of Aplicanza" : "Nicolás Álvarez, fundador de Aplicanza"}
            fill
            sizes="(max-width: 767px) 12rem, (max-width: 1023px) 18rem, 22rem"
            src={publicAsset("/images/nicolas-alvarez.png")}
          />
        </figure>
        <div>
          <h2>{english ? "Every implementation has a visible lead." : "Cada implementación tiene un responsable visible."}</h2>
          <p>{profile.summary}</p>
          <ul className="founder-credentials">
            {profile.credentials.map((credential) => (
              <li key={credential}>{credential}</li>
            ))}
          </ul>
          <div className="founder-actions">
            <Link href={english ? "/en/about" : "/nosotros"}>
              {english ? "Meet Aplicanza" : "Conocer Aplicanza"}
              <ArrowRight aria-hidden="true" size={18} weight="bold" />
            </Link>
            <a href={config.linkedin} rel="noreferrer" target="_blank">
              LinkedIn <ArrowUpRight aria-hidden="true" size={18} weight="bold" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
