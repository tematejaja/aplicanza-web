import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/contact";

const requests = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;

function isRateLimited(key: string) {
  const now = Date.now();
  const recent = (requests.get(key) ?? []).filter((timestamp) => now - timestamp < WINDOW_MS);
  recent.push(now);
  requests.set(key, recent);
  return recent.length > MAX_REQUESTS;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

/**
 * Optional Node-hosting handler retained for a future deployment with a server.
 * The Hostinger shared-hosting release uses WhatsApp only and does not publish this handler.
 */
export async function handleContactRequest(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const key = forwarded || "local";

  if (isRateLimited(key)) {
    return NextResponse.json(
      { message: "Recibimos varios intentos. Espera unos minutos antes de volver a enviar." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "La solicitud no tiene un formato válido." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ message: "Revisa la información del formulario." }, { status: 400 });
  }

  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? "nicolasalvarezbernal@gmail.com";
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !from) {
    return NextResponse.json(
      { message: "El canal de correo aún no está configurado. Escríbenos directamente por WhatsApp." },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);
  const data = parsed.data;
  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: data.email,
    subject: `Nuevo diagnóstico de ${data.company}`,
    html: `
      <h1>Nueva solicitud de diagnóstico</h1>
      <p><strong>Nombre:</strong> ${escapeHtml(data.name)}</p>
      <p><strong>Empresa:</strong> ${escapeHtml(data.company)}</p>
      <p><strong>Correo:</strong> ${escapeHtml(data.email)}</p>
      <p><strong>Problema principal:</strong> ${escapeHtml(data.area)}</p>
      <p><strong>Proceso:</strong></p>
      <p>${escapeHtml(data.process).replaceAll("\n", "<br>")}</p>
    `,
  });

  if (error) {
    return NextResponse.json(
      { message: "No pudimos enviar la solicitud. Intenta de nuevo o usa WhatsApp." },
      { status: 502 },
    );
  }

  return NextResponse.json({ delivery: "email", ok: true });
}
