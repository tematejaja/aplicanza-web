import { cx } from "@/lib/cx";

export function PageIntro({
  eyebrow,
  title,
  summary,
  className,
}: {
  eyebrow?: string;
  title: string;
  summary: string;
  className?: string;
}) {
  return (
    <section className={cx("page-intro", className)}>
      <div className="shell page-intro-inner">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        <p>{summary}</p>
      </div>
    </section>
  );
}
