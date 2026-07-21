"use client";

import { useEffect, useRef } from "react";

type HeroVisualProps = {
  locale?: "es" | "en";
};

const content = {
  es: {
    system: "Sistema de implementación",
    stages: ["01 · Señales", "02 · Implementación", "03 · Evidencia"],
    inputs: ["Tiempo", "Dinero", "Información"],
    diagnosis: "Diagnóstico",
    pilot: ["Piloto", "medible"],
    result: "Resultado",
    outcomes: ["Menos costo", "Más capacidad", "Mejores decisiones"],
    caption:
      "Mapa del método de Aplicanza: las pérdidas de tiempo, dinero e información convergen en un diagnóstico, se prueban en un piloto medible y terminan en resultados verificables.",
  },
  en: {
    system: "Implementation system",
    stages: ["01 · Signals", "02 · Implementation", "03 · Evidence"],
    inputs: ["Time", "Money", "Information"],
    diagnosis: "Assessment",
    pilot: ["Measurable", "pilot"],
    result: "Result",
    outcomes: ["Lower cost", "More capacity", "Better decisions"],
    caption:
      "Aplicanza method map: losses in time, money, and information converge in an assessment, are tested through a measurable pilot, and end in verifiable results.",
  },
};

export function HeroVisual({ locale = "es" }: HeroVisualProps) {
  const root = useRef<HTMLElement>(null);
  const copy = content[locale];

  useEffect(() => {
    const element = root.current;

    if (!element) return;

    let cancelled = false;
    let matchMedia: gsap.MatchMedia | null = null;

    void import("gsap").then(({ default: gsap }) => {
      if (cancelled || !element) return;

      matchMedia = gsap.matchMedia();
      matchMedia.add(
        { reduceMotion: "(prefers-reduced-motion: reduce)" },
        (context: gsap.Context) => {
          const reduceMotion = Boolean(context.conditions?.reduceMotion);
          const paths = gsap.utils.toArray<SVGPathElement>("[data-map-path]", element);
          const nodes = gsap.utils.toArray<SVGElement>("[data-map-node]", element);
          const labels = gsap.utils.toArray<SVGElement | HTMLElement>("[data-map-label]", element);
          const pulse = element.querySelector<SVGPathElement>("[data-map-pulse]");

          if (reduceMotion) {
            gsap.set(element, { clearProps: "opacity,transform,visibility" });
            gsap.set(paths, { strokeDasharray: "none", strokeDashoffset: 0 });
            gsap.set([...nodes, ...labels], { clearProps: "opacity,transform,visibility" });
            gsap.set(pulse, { autoAlpha: 0 });
            return;
          }

          gsap.set(element, { autoAlpha: 0, y: 14 });
          gsap.set(paths, { strokeDasharray: 1, strokeDashoffset: 1 });
          gsap.set(nodes, { autoAlpha: 0, scale: 0.96, transformOrigin: "50% 50%" });
          gsap.set(labels, { autoAlpha: 0, y: 5 });
          gsap.set(pulse, {
            autoAlpha: 0,
            strokeDasharray: "0.055 0.945",
            strokeDashoffset: 1,
          });

          const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

          timeline
            .to(element, { autoAlpha: 1, y: 0, duration: 0.68 }, 0)
            .to(paths, { strokeDashoffset: 0, duration: 0.9, stagger: 0.06 }, 0.12)
            .to(nodes, { autoAlpha: 1, scale: 1, duration: 0.38, stagger: 0.05 }, 0.56)
            .to(labels, { autoAlpha: 1, y: 0, duration: 0.34, stagger: 0.04 }, 0.58)
            .set(pulse, { autoAlpha: 1 }, 1.06)
            .to(pulse, { strokeDashoffset: -0.95, duration: 0.72, ease: "power2.inOut" }, 1.06)
            .to(pulse, { autoAlpha: 0, duration: 0.12 }, 1.72);

          return () => timeline.kill();
        },
      );
    });

    return () => {
      cancelled = true;
      matchMedia?.revert();
    };
  }, [locale]);

  return (
    <figure className="hero-map" ref={root}>
      <div className="hero-map-header" data-map-label>
        <span>{copy.system}</span>
        <span aria-hidden="true">APZ / 01—03</span>
      </div>

      <div className="hero-map-canvas">
        <svg aria-hidden="true" fill="none" viewBox="0 0 720 500">
          <g className="hero-map-stages" data-map-label>
            <text x="50" y="48">{copy.stages[0]}</text>
            <text x="282" y="48">{copy.stages[1]}</text>
            <text x="560" y="48">{copy.stages[2]}</text>
          </g>

          <g className="hero-map-inputs" data-map-label>
            <text x="50" y="130">{copy.inputs[0]}</text>
            <text x="50" y="246">{copy.inputs[1]}</text>
            <text x="50" y="362">{copy.inputs[2]}</text>
          </g>

          <path
            className="hero-map-path hero-map-path-input"
            d="M52 154H154C224 154 226 246 294 246"
            data-map-path
            pathLength="1"
          />
          <path
            className="hero-map-path hero-map-path-input"
            d="M52 270H294"
            data-map-path
            pathLength="1"
          />
          <path
            className="hero-map-path hero-map-path-input"
            d="M52 386H154C224 386 226 294 294 294"
            data-map-path
            pathLength="1"
          />

          <g className="hero-map-diagnostic" data-map-node transform="translate(286 207) scale(1.25)">
            <path className="hero-map-a" d="M9 67 33.1 14.8a7.5 7.5 0 0 1 13.7 0L71 67H56.8L40 29.7 23.2 67H9Z" />
            <path className="hero-map-arrow" d="M20 47h25v-8l17 13-17 13v-8H20V47Z" />
            <circle cx="20" cy="52" fill="currentColor" r="4" />
          </g>
          <text className="hero-map-node-label" data-map-label textAnchor="middle" x="336" y="326">
            {copy.diagnosis}
          </text>

          <path
            className="hero-map-path hero-map-path-output"
            d="M384 270H672"
            data-map-path
            pathLength="1"
          />
          <path
            className="hero-map-pulse"
            d="M384 270H672"
            data-map-pulse
            pathLength="1"
          />

          <g className="hero-map-pilot" data-map-node>
            <rect height="82" rx="4" width="126" x="444" y="229" />
            <text textAnchor="middle" x="507" y="263">{copy.pilot[0]}</text>
            <text textAnchor="middle" x="507" y="286">{copy.pilot[1]}</text>
          </g>

          <g className="hero-map-result" data-map-node>
            <circle cx="672" cy="270" r="30" />
            <circle className="hero-map-result-core" cx="672" cy="270" r="8" />
          </g>
          <text className="hero-map-node-label" data-map-label textAnchor="end" x="700" y="327">
            {copy.result}
          </text>

          <g className="hero-map-coordinates" aria-hidden="true">
            <path d="M24 82v-20h20M696 82v-20h-20M24 418v20h20M696 418v20h-20" />
            <text x="50" y="457">INPUT / 00.00</text>
            <text textAnchor="end" x="670" y="457">OUTPUT / 01.00</text>
          </g>
        </svg>
      </div>

      <div className="hero-map-outcomes" data-map-label>
        {copy.outcomes.map((outcome, index) => (
          <span key={outcome}>
            <b>{String(index + 1).padStart(2, "0")}</b>
            {outcome}
          </span>
        ))}
      </div>
      <figcaption className="sr-only">{copy.caption}</figcaption>
    </figure>
  );
}
