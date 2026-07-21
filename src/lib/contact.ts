import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(3, "Escribe tu nombre completo.").max(100),
  company: z.string().trim().min(2, "Escribe el nombre de tu empresa.").max(120),
  email: z.email("Escribe un correo válido."),
  area: z.enum([
    "Datos e indicadores",
    "Tareas repetitivas",
    "Ventas y seguimiento",
    "Atención al cliente",
    "Conocimiento interno",
    "Otro",
  ]),
  process: z
    .string()
    .trim()
    .min(15, "Cuéntanos un poco más sobre el proceso.")
    .max(400, "Usa máximo 400 caracteres."),
  consent: z.literal(true, { error: "Necesitamos tu autorización para contactarte." }),
  website: z.string().max(0).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;

export function buildWhatsAppMessage(data: ContactInput, locale: "es" | "en" = "es") {
  if (locale === "en") {
    const areaLabels: Record<ContactInput["area"], string> = {
      "Datos e indicadores": "Data and indicators",
      "Tareas repetitivas": "Repetitive tasks",
      "Ventas y seguimiento": "Sales and follow-up",
      "Atención al cliente": "Customer service",
      "Conocimiento interno": "Internal knowledge",
      Otro: "Other",
    };

    return [
      "Hello, Aplicanza. I requested an assessment through the website.",
      `Name: ${data.name}`,
      `Company: ${data.company}`,
      `Main problem: ${areaLabels[data.area]}`,
      `Process: ${data.process}`,
    ].join("\n");
  }

  return [
    "Hola, Aplicanza. Solicité un diagnóstico desde la web.",
    `Nombre: ${data.name}`,
    `Empresa: ${data.company}`,
    `Problema principal: ${data.area}`,
    `Proceso: ${data.process}`,
  ].join("\n");
}
