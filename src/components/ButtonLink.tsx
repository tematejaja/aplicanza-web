import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { StaticLink as Link } from "@/components/StaticLink";
import { cx } from "@/lib/cx";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "text";
  className?: string;
  external?: boolean;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  external = false,
}: ButtonLinkProps) {
  const styles = cx(
    "button-link",
    variant === "primary" && "button-link-primary",
    variant === "secondary" && "button-link-secondary",
    variant === "text" && "button-link-text",
    className,
  );

  if (external) {
    return (
      <a className={styles} href={href} rel="noreferrer" target="_blank">
        <span>{children}</span>
        <ArrowRight aria-hidden="true" size={18} weight="bold" />
      </a>
    );
  }

  return (
    <Link className={styles} href={href}>
      <span>{children}</span>
      <ArrowRight aria-hidden="true" size={18} weight="bold" />
    </Link>
  );
}
