import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { StaticLink as Link } from "@/components/StaticLink";
import type { CaseStudy } from "@/content/site";
import { cx } from "@/lib/cx";

export function CaseCard({
  caseStudy,
  featured = false,
  headingLevel = "h3",
  locale = "es",
}: {
  caseStudy: CaseStudy;
  featured?: boolean;
  headingLevel?: "h2" | "h3";
  locale?: "es" | "en";
}) {
  const Heading = headingLevel;

  return (
    <Link
      className={cx("case-card", featured && "case-card-featured")}
      href={locale === "en" ? `/en/cases/${caseStudy.slug}` : `/casos/${caseStudy.slug}`}
    >
      <div className="case-card-image">
        <Image
          alt={caseStudy.imageAlt}
          fill
          sizes={featured ? "(max-width: 767px) 100vw, 62vw" : "(max-width: 767px) 100vw, 36vw"}
          src={caseStudy.image}
        />
      </div>
      <div className="case-card-copy">
        <p>{caseStudy.category}</p>
        <Heading>{caseStudy.name}</Heading>
        <span>
          {locale === "en" ? "View case" : "Ver caso"}{" "}
          <ArrowUpRight aria-hidden="true" size={18} weight="bold" />
        </span>
      </div>
    </Link>
  );
}
