"use client";

import { useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";

import Container from "@/components/ui/Container";
import HeroTerminal from "@/components/sections/HeroTerminal";
import SocialIcon from "@/components/ui/SocialIcon";
import { siteConfig } from "@/config/site";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Practice areas — the same domains the rest of the page documents. */
const FOCUS_AREAS = ["Generative AI", "Backend systems", "Full-stack web"];

/**
 * Warm charcoal hero: the one dark band on the page. The sticky navbar sits
 * above it in flow, so the section is floored at the viewport height minus
 * the navbar (h-16 / sm:h-[4.5rem] plus its 1px rule) — the fold cuts exactly
 * on the hero's bottom edge and the focus strip never spills past it.
 */
export default function Hero() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [spotEngaged, setSpotEngaged] = useState(false);

  const duration = reduceMotion ? 0 : 0.75;

  const rise = (delay: number) => ({
    initial: { opacity: 0, y: reduceMotion ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration, delay: reduceMotion ? 0 : delay, ease: EASE },
  });

  /* A quiet pool of light follows the pointer. Mouse only, and never under
     reduced motion — the hero stays fully readable without it. */
  const trackSpotlight = (event: ReactPointerEvent<HTMLElement>) => {
    if (reduceMotion || event.pointerType !== "mouse") return;
    const section = sectionRef.current;
    if (!section) return;
    const bounds = section.getBoundingClientRect();
    section.style.setProperty("--spot-x", `${event.clientX - bounds.left}px`);
    section.style.setProperty("--spot-y", `${event.clientY - bounds.top}px`);
  };

  const engageSpotlight = (event: ReactPointerEvent<HTMLElement>) => {
    if (reduceMotion || event.pointerType !== "mouse") return;
    setSpotEngaged(true);
  };

  const spotVisible = spotEngaged && !reduceMotion;

  return (
    <section
      id="home"
      ref={sectionRef}
      onPointerMove={trackSpotlight}
      onPointerEnter={engageSpotlight}
      onPointerLeave={() => setSpotEngaged(false)}
      className="relative isolate flex min-h-[calc(100svh_-_4rem_-_1px)] flex-col overflow-hidden bg-[linear-gradient(180deg,var(--color-ink-850),var(--color-ink-900)_55%,var(--color-ink-950))] text-paper-100 sm:min-h-[calc(100svh_-_4.5rem_-_1px)]"
    >
      {/* Fine engineering grid, recoloured for the dark plate. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hero-grid"
      />

      {/* Cursor spotlight — a slow radial illumination, constrained here. */}
      <div
        aria-hidden="true"
        data-spot=""
        className={`pointer-events-none absolute inset-0 transition-opacity duration-700 ${
          spotVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background:
            "radial-gradient(640px circle at var(--spot-x, 50%) var(--spot-y, 28%), rgba(255,251,238,0.06), rgba(146,189,0,0.045) 45%, transparent 72%)",
        }}
      />

      <Container className="relative flex flex-1 flex-col pt-10 sm:pt-12">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-10">
          {/* Editorial copy */}
          <div className="min-w-0 lg:col-span-7 lg:pr-8">
            <motion.p
              {...rise(0.05)}
              className="flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.3em] text-accent-400"
            >
              <span className="h-px w-10 bg-accent-400" aria-hidden="true" />
              {siteConfig.positioning}
            </motion.p>

            <motion.h1
              {...rise(0.15)}
              className="mt-6 text-[clamp(2.75rem,9.5vw,6.5rem)] font-semibold uppercase leading-[0.88] tracking-[-0.045em] text-paper-50"
            >
              <span className="block">Pratham</span>
              <span className="block">
                Sinha
                <span className="text-accent-400" aria-hidden="true">
                  .
                </span>
              </span>
            </motion.h1>

            <motion.p
              {...rise(0.3)}
              className="mt-7 max-w-2xl text-[clamp(1.3rem,2.4vw,1.95rem)] leading-[1.25] tracking-[-0.02em] text-paper-100"
            >
              <span className="block">{siteConfig.hero.headline[0]}</span>
              <span className="block font-serif italic text-ink-300">
                {siteConfig.hero.headline[1]}
              </span>
            </motion.p>

            <motion.p
              {...rise(0.4)}
              className="mt-5 max-w-xl text-base leading-relaxed text-ink-200 sm:text-lg"
            >
              {siteConfig.hero.summary}
            </motion.p>

            <motion.p
              {...rise(0.5)}
              className="mt-6 flex items-center gap-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-ink-200"
            >
              <span
                className="motion-safe:animate-pulse h-2 w-2 rounded-full bg-accent-400"
                aria-hidden="true"
              />
              {siteConfig.hero.status}
            </motion.p>

            <motion.div {...rise(0.6)} className="mt-8 flex flex-wrap gap-3">
              <a
                href={siteConfig.hero.primaryCta.href}
                className="group inline-flex items-center gap-2.5 border border-paper-50 bg-paper-50 px-6 py-3.5 text-sm font-medium text-ink-950 transition-colors duration-300 hover:border-accent-400 hover:bg-accent-400 sm:px-7"
              >
                {siteConfig.hero.primaryCta.label}
                <ArrowUpRight
                  className="h-4 w-4 motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
              <a
                href={siteConfig.hero.secondaryCta.href}
                className="group inline-flex items-center gap-2.5 border border-paper-50/35 px-6 py-3.5 text-sm font-medium text-paper-100 transition-colors duration-300 hover:border-paper-50 hover:bg-paper-50 hover:text-ink-950 sm:px-7"
              >
                {siteConfig.hero.secondaryCta.label}
                <ArrowUpRight
                  className="h-4 w-4 motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            </motion.div>

            {/* Profiles + resume, kept as text links rather than badges. */}
            <motion.nav
              {...rise(0.7)}
              aria-label="Profiles"
              className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-rule-dark pt-6"
            >
              {siteConfig.socials.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-ink-300 transition-colors duration-300 hover:text-accent-400"
                >
                  <SocialIcon id={social.id} className="h-4 w-4" />
                  {social.label}
                  <ArrowUpRight
                    className="h-3.5 w-3.5 opacity-60 motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover/link:-translate-y-0.5 motion-safe:group-hover/link:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              ))}

              <a
                href={siteConfig.resume.href}
                download={siteConfig.resume.fileName}
                className="group/link inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-ink-300 transition-colors duration-300 hover:text-accent-400"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                {siteConfig.resume.label}
              </a>
            </motion.nav>
          </div>

          {/* Terminal — stacks below the copy on mobile. */}
          <div className="min-w-0 lg:col-span-5">
            <HeroTerminal />
          </div>
        </div>

        {/* Hero footer strip — anchored to the fold edge. */}
        <motion.div
          {...rise(0.85)}
          className="mt-auto flex flex-col gap-4 border-t border-rule-dark pb-6 pt-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {FOCUS_AREAS.map((area) => (
              <li
                key={area}
                className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-300"
              >
                {area}
              </li>
            ))}
          </ul>

          <a
            href="#about"
            className="group inline-flex w-fit items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-300 transition-colors duration-300 hover:text-paper-50"
          >
            Scroll
            <ArrowDown
              className="h-3.5 w-3.5 motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
