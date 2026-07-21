import { ButtonLink } from "@/components/ButtonLink";

export function ContactBand({
  title,
  copy,
  locale = "es",
}: {
  title?: string;
  copy?: string;
  locale?: "es" | "en";
}) {
  const english = locale === "en";
  const resolvedTitle =
    title ?? (english ? "Let us start with the process, not the tool." : "Empecemos por el proceso, no por la herramienta.");
  const resolvedCopy =
    copy ??
    (english
      ? "Tell us what is holding your business back. We will help turn it into a concrete first step."
      : "Cuéntanos qué está frenando a tu empresa. Te ayudaremos a convertirlo en un primer paso concreto.");

  return (
    <section className="contact-band">
      <div className="shell contact-band-inner">
        <div>
          <h2>{resolvedTitle}</h2>
          <p>{resolvedCopy}</p>
        </div>
        <ButtonLink href={english ? "/en/contact" : "/contacto"}>
          {english ? "Request an assessment" : "Solicitar diagnóstico"}
        </ButtonLink>
      </div>
    </section>
  );
}
