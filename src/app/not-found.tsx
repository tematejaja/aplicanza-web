import { ButtonLink } from "@/components/ButtonLink";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="shell">
        <p className="eyebrow">Página no encontrada</p>
        <h1>Esta ruta no hace parte del proceso.</h1>
        <p>Vuelve al inicio para encontrar los servicios, la metodología y los casos de Aplicanza.</p>
        <ButtonLink href="/">Volver al inicio</ButtonLink>
      </div>
    </section>
  );
}
