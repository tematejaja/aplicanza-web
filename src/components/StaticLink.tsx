import type { AnchorHTMLAttributes } from "react";
import { publicAsset } from "@/lib/public-asset";

type StaticLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
};

export function StaticLink({ href, ...props }: StaticLinkProps) {
  if (!href.startsWith("/")) {
    return <a href={href} {...props} />;
  }

  const [path, suffix = ""] = href.split(/(?=[?#])/u, 2);
  const directoryPath = path === "/" || path.endsWith("/") || path.includes(".") ? path : `${path}/`;
  return <a href={`${publicAsset(directoryPath)}${suffix}`} {...props} />;
}
