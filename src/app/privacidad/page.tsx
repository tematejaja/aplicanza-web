import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: "Tratamiento de la información enviada a Aplicanza mediante el formulario de contacto.",
  alternates: {
    canonical: "/privacidad",
    languages: { "es-CO": "/privacidad", "en-US": "/en/privacy" },
  },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <PageIntro
        eyebrow="Privacidad"
        summary="Explicamos qué información recibimos, para qué la usamos y cómo puedes solicitar su eliminación."
        title="Tu información se usa para responderte."
      />

      <section className="privacy-section">
        <div className="shell privacy-copy">
          <article>
            <h2>Responsable</h2>
            <p>
              Aplicanza es responsable de la información enviada mediante este sitio. Puedes
              contactarnos en <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
            </p>
          </article>
          <article>
            <h2>Información que recibimos</h2>
            <p>
              El formulario solicita nombre, empresa, correo, problema principal y una descripción del
              proceso que deseas optimizar.
            </p>
          </article>
          <article>
            <h2>Finalidad</h2>
            <p>
              Usamos estos datos únicamente para revisar tu solicitud, contactarte y preparar una
              conversación inicial sobre los servicios de Aplicanza.
            </p>
          </article>
          <article>
            <h2>Conservación y proveedores</h2>
            <p>
              La solicitud puede entregarse por correo electrónico y WhatsApp. El envío puede utilizar
              proveedores especializados para estos canales. No vendemos ni publicamos la información recibida.
            </p>
          </article>
          <article>
            <h2>Tus decisiones</h2>
            <p>
              Puedes pedir acceso, corrección o eliminación escribiendo al correo indicado. Atenderemos
              la solicitud después de verificar que se relaciona con tus datos.
            </p>
          </article>
          <p className="privacy-update">Última actualización: julio de 2026.</p>
        </div>
      </section>
    </>
  );
}
