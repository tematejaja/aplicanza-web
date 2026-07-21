"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const ContactForm = dynamic(() =>
  import("@/components/ContactForm").then((module) => module.ContactForm),
);

export function DeferredContactForm({ locale = "es" }: { locale?: "es" | "en" }) {
  const root = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const element = root.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setReady(true);
        observer.disconnect();
      },
      { rootMargin: "500px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="contact-form-slot" ref={root}>
      {ready ? <ContactForm locale={locale} /> : <div aria-hidden="true" className="contact-form-placeholder" />}
    </div>
  );
}
