"use client";

import { Check } from "@phosphor-icons/react";
import { useEffect, useRef } from "react";
import { methodology } from "@/content/site";
import { methodologyEn } from "@/content/site-en";

export function MethodologyJourney({
  compact = false,
  locale = "es",
}: {
  compact?: boolean;
  locale?: "es" | "en";
}) {
  const root = useRef<HTMLElement>(null);
  const english = locale === "en";
  const steps = english ? methodologyEn : methodology;

  useEffect(() => {
    const element = root.current;

    if (
      !element ||
      !window.matchMedia("(min-width: 900px) and (prefers-reduced-motion: no-preference)")
        .matches
    ) {
      return;
    }

    let cancelled = false;
    let context: { revert: () => void } | undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        observer.disconnect();
        void Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
          ([gsapModule, scrollTriggerModule]) => {
            if (cancelled) return;

            const gsap = gsapModule.default;
            const ScrollTrigger = scrollTriggerModule.ScrollTrigger;
            gsap.registerPlugin(ScrollTrigger);
            context = gsap.context(() => {
              gsap.fromTo(
                ".journey-progress",
                { scaleY: 0 },
                {
                  scaleY: 1,
                  ease: "none",
                  scrollTrigger: {
                    trigger: element,
                    start: "top 65%",
                    end: "bottom 55%",
                    scrub: 0.6,
                  },
                },
              );
            }, element);
          },
        );
      },
      { rootMargin: "300px 0px" },
    );

    observer.observe(element);

    return () => {
      cancelled = true;
      observer.disconnect();
      context?.revert();
    };
  }, []);

  return (
    <section className={compact ? "journey journey-compact" : "journey"} ref={root}>
      <div className="shell journey-grid">
        <div className="journey-intro">
          <p className="eyebrow">{english ? "How we implement" : "Nuestra forma de implementar"}</p>
          <h2>{english ? "We test first. Then we scale." : "Primero probamos. Después ampliamos."}</h2>
          <p>
            {english
              ? "The tool comes after we understand the process. Every decision is linked to a need, evidence, and a responsible person."
              : "La herramienta llega después de comprender el proceso. Cada decisión queda ligada a una necesidad, una evidencia y una persona responsable."}
          </p>
        </div>

        <div className="journey-list">
          <div className="journey-rail" aria-hidden="true">
            <div className="journey-progress" />
          </div>
          {steps.map((step) => (
            <article className="journey-step" key={step.verb}>
              <div className="journey-check" aria-hidden="true">
                <Check size={17} weight="bold" />
              </div>
              <p className="journey-framework">{step.framework}</p>
              <h3>{step.verb}</h3>
              <p>{step.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
