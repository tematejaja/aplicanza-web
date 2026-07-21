"use client";

import { ArrowRight, CheckCircle, WarningCircle } from "@phosphor-icons/react";
import { StaticLink as Link } from "@/components/StaticLink";
import { FormEvent, useState } from "react";
import { buildWhatsAppMessage, contactSchema, type ContactInput } from "@/lib/contact";

type FieldErrors = Partial<Record<keyof ContactInput, string>>;

const englishErrors: Partial<Record<keyof ContactInput, string>> = {
  name: "Enter your full name.",
  company: "Enter your company name.",
  email: "Enter a valid email address.",
  area: "Select the main problem.",
  process: "Tell us a little more about the process.",
  consent: "We need your authorization to contact you.",
};

const whatsappOnly = process.env.NEXT_PUBLIC_CONTACT_MODE === "whatsapp";

export function ContactForm({ locale = "es" }: { locale?: "es" | "en" }) {
  const english = locale === "en";
  const [errors, setErrors] = useState<FieldErrors>({});
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [whatsappUrl, setWhatsappUrl] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setMessage(english ? "Sending your request..." : "Enviando tu solicitud...");
    setErrors({});
    setWhatsappUrl("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const candidate = {
      name: formData.get("name"),
      company: formData.get("company"),
      email: formData.get("email"),
      area: formData.get("area"),
      process: formData.get("process"),
      consent: formData.get("consent") === "on",
      website: formData.get("website"),
    };

    const parsed = contactSchema.safeParse(candidate);
    if (!parsed.success) {
      const nextErrors: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const field = issue.path[0] as keyof ContactInput | undefined;
        if (field && !nextErrors[field]) {
          nextErrors[field] = english ? englishErrors[field] : issue.message;
        }
      }
      setErrors(nextErrors);
      setState("error");
      setMessage(
        english ? "Review the highlighted fields before continuing." : "Revisa los campos indicados antes de continuar.",
      );
      const firstInvalid = form.querySelector<HTMLElement>("[aria-invalid='true']");
      firstInvalid?.focus();
      return;
    }

    const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "573002968009";
    const whatsapp = `https://wa.me/${number}?text=${encodeURIComponent(buildWhatsAppMessage(parsed.data, locale))}`;

    if (whatsappOnly) {
      window.location.assign(whatsapp);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        body: JSON.stringify(parsed.data),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      });

      const result = (await response.json()) as { message?: string };
      if (!response.ok) {
        throw new Error(
          english ? "We could not send your request. Please try again." : result.message ?? "No pudimos enviar la solicitud.",
        );
      }

      setState("success");
      setWhatsappUrl(whatsapp);
      setMessage(
        english
          ? "Request successfully sent by email. We will contact you shortly."
          : "Solicitud enviada por correo correctamente. Te contactaremos pronto.",
      );
      form.reset();
    } catch (error) {
      setState("error");
      setWhatsappUrl(whatsapp);
      setMessage(
        english
          ? error instanceof Error
            ? error.message
            : "Email is unavailable. Please try again or continue on WhatsApp."
          : error instanceof Error
            ? error.message
            : "El correo no está disponible. Intenta de nuevo o continúa por WhatsApp.",
      );
    }
  }

  function describedBy(field: keyof ContactInput) {
    return errors[field] ? `${field}-error` : undefined;
  }

  return (
    <form className="contact-form" noValidate onSubmit={handleSubmit}>
      <div className="form-grid">
        <FormField error={errors.name} id="name" label={english ? "Full name" : "Nombre y apellido"}>
          <input
            aria-describedby={describedBy("name")}
            aria-invalid={Boolean(errors.name)}
            autoComplete="name"
            id="name"
            name="name"
            required
          />
        </FormField>

        <FormField error={errors.company} id="company" label={english ? "Company" : "Empresa"}>
          <input
            aria-describedby={describedBy("company")}
            aria-invalid={Boolean(errors.company)}
            autoComplete="organization"
            id="company"
            name="company"
            required
          />
        </FormField>

        <FormField error={errors.email} id="email" label={english ? "Email" : "Correo electrónico"}>
          <input
            aria-describedby={describedBy("email")}
            aria-invalid={Boolean(errors.email)}
            autoComplete="email"
            id="email"
            name="email"
            required
            type="email"
          />
        </FormField>

        <FormField error={errors.area} id="area" label={english ? "Main problem" : "Problema principal"}>
          <select
            aria-describedby={describedBy("area")}
            aria-invalid={Boolean(errors.area)}
            defaultValue=""
            id="area"
            name="area"
            required
          >
            <option disabled value="">
              {english ? "Select the closest option" : "Selecciona la opción más cercana"}
            </option>
            <option value="Datos e indicadores">{english ? "Data and indicators" : "Datos e indicadores"}</option>
            <option value="Tareas repetitivas">{english ? "Repetitive tasks" : "Tareas repetitivas"}</option>
            <option value="Ventas y seguimiento">{english ? "Sales and follow-up" : "Ventas y seguimiento"}</option>
            <option value="Atención al cliente">{english ? "Customer service" : "Atención al cliente"}</option>
            <option value="Conocimiento interno">{english ? "Internal knowledge" : "Conocimiento interno"}</option>
            <option value="Otro">{english ? "Other" : "Otro"}</option>
          </select>
        </FormField>

        <FormField
          className="form-field-wide"
          error={errors.process}
          id="process"
          label={english ? "Which process do you want to improve?" : "¿Qué proceso quieres optimizar?"}
        >
          <textarea
            aria-describedby={describedBy("process")}
            aria-invalid={Boolean(errors.process)}
            id="process"
            maxLength={400}
            name="process"
            placeholder={
              english
                ? "Briefly describe what happens today and what you would like to improve."
                : "Describe brevemente qué ocurre hoy y qué te gustaría mejorar."
            }
            required
            rows={5}
          />
        </FormField>
      </div>

      <div className="honeypot" aria-hidden="true">
        <label htmlFor="website">{english ? "Website" : "Sitio web"}</label>
        <input autoComplete="off" id="website" name="website" tabIndex={-1} />
      </div>

      <div className="consent-row">
        <input
          aria-describedby={describedBy("consent")}
          aria-invalid={Boolean(errors.consent)}
          id="consent"
          name="consent"
          required
          type="checkbox"
        />
        <label htmlFor="consent">
          {english
            ? "I authorize Aplicanza to use this information to respond to my request. Read the "
            : "Autorizo a Aplicanza para usar esta información con el fin de responder mi solicitud. Lee la "}
          <Link href={english ? "/en/privacy" : "/privacidad"}>
            {english ? "privacy policy" : "política de privacidad"}
          </Link>
          .
        </label>
      </div>
      {errors.consent && (
        <p className="field-error" id="consent-error">
          {errors.consent}
        </p>
      )}

      <div className="form-submit-row">
        <button className="submit-button" disabled={state === "sending"} type="submit">
          <span>
            {state === "sending"
              ? english
                ? "Sending"
                : "Enviando"
              : english
                ? "Request an assessment"
                : "Solicitar diagnóstico"}
          </span>
          <ArrowRight aria-hidden="true" size={18} weight="bold" />
        </button>

        <div
          aria-live="polite"
          className="form-status"
          data-state={state}
          role="status"
        >
          {state === "success" && <CheckCircle aria-hidden="true" size={20} weight="fill" />}
          {state === "error" && <WarningCircle aria-hidden="true" size={20} weight="fill" />}
          <span>{message}</span>
          {whatsappUrl && (
            <a className="form-whatsapp-fallback" href={whatsappUrl}>
              {state === "success"
                ? english
                  ? "Continue on WhatsApp (optional)"
                  : "Continuar por WhatsApp (opcional)"
                : english
                  ? "Continue on WhatsApp"
                  : "Continuar por WhatsApp"}
            </a>
          )}
        </div>
      </div>
    </form>
  );
}

function FormField({
  children,
  className,
  error,
  id,
  label,
}: {
  children: React.ReactNode;
  className?: string;
  error?: string;
  id: string;
  label: string;
}) {
  return (
    <div className={className ? `form-field ${className}` : "form-field"}>
      <label htmlFor={id}>{label}</label>
      {children}
      {error && (
        <p className="field-error" id={`${id}-error`}>
          {error}
        </p>
      )}
    </div>
  );
}
