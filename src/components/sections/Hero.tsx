"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";

import Container from "@/components/ui/Container";
import HeroTerminal from "@/components/sections/HeroTerminal";
import SocialIcon from "@/components/ui/SocialIcon";
import { siteConfig } from "@/config/site";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Practice areas — the same domains the rest of the page documents. */
const FOCUS_AREAS = ["Generative AI", "Backend systems", "Full-stack web"];

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const duration = reduceMotion ? 0 : 0.75;

  const rise = (delay: number) => ({
    initial: { opacity: 0, y: reduceMotion ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration, delay: reduceMotion ? 0 : delay, ease: EASE },
  });

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden border-b border-rule-light bg-paper-50"
    >
      {/* Fine engineering grid behind the editorial copy. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hero-grid"
      />

      <Container className="relative">
        <div className="grid gap-12 pb-12 pt-14 sm:pt-16 lg:grid-cols-12 lg:items-center lg:gap-10 lg:pb-16 lg:pt-24">
          {/* Editorial copy */}
          <div className="min-w-0 lg:col-span-7 lg:pr-8">
            <motion.p
              {...rise(0.05)}
              className="flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.3em] text-accent-600"
            >
              <span className="h-px w-10 bg-accent-500" aria-hidden="true" />
              {siteConfig.positioning}
            </motion.p>

            <motion.h1
              {...rise(0.15)}
              className="mt-7 text-[clamp(2.75rem,9.5vw,6.5rem)] font-semibold uppercase leading-[0.88] tracking-[-0.045em]"
            >
              <span className="block">Pratham</span>
              <span className="block">
                Sinha
                <span className="text-accent-500" aria-hidden="true">
                  .
                </span>
              </span>
            </motion.h1>

            <motion.p
              {...rise(0.3)}
              className="mt-8 max-w-2xl text-[clamp(1.3rem,2.4vw,1.95rem)] leading-[1.25] tracking-[-0.02em] text-ink-800"
            >
              <span className="block">{siteConfig.hero.headline[0]}</span>
              <span className="block font-serif italic text-ink-600">
                {siteConfig.hero.headline[1]}
              </span>
            </motion.p>

            <motion.p
              {...rise(0.4)}
              className="mt-6 max-w-xl text-base leading-relaxed text-ink-600 sm:text-lg"
            >
              {siteConfig.hero.summary}
            </motion.p>

            <motion.p
              {...rise(0.5)}
              className="mt-7 flex items-center gap-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-ink-700"
            >
              <span
                className="motion-safe:animate-pulse h-2 w-2 rounded-full bg-accent-500"
                aria-hidden="true"
              />
              {siteConfig.hero.status}
            </motion.p>

            <motion.div {...rise(0.6)} className="mt-9 flex flex-wrap gap-3">
              <a
                href={siteConfig.hero.primaryCta.href}
                className="group inline-flex items-center gap-2.5 border border-ink-950 bg-ink-950 px-6 py-3.5 text-sm font-medium text-paper-50 transition-colors duration-300 hover:border-accent-500 hover:bg-accent-500 hover:text-ink-950 sm:px-7"
              >
                {siteConfig.hero.primaryCta.label}
                <ArrowUpRight
                  className="h-4 w-4 motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
              <a
                href={siteConfig.hero.secondaryCta.href}
                className="group inline-flex items-center gap-2.5 border border-ink-950/25 px-6 py-3.5 text-sm font-medium text-ink-950 transition-colors duration-300 hover:border-ink-950 hover:bg-ink-950 hover:text-paper-50 sm:px-7"
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
              className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-rule-light pt-6"
            >
              {siteConfig.socials.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-ink-700 transition-colors duration-300 hover:text-accent-600"
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
                className="group/link inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-ink-700 transition-colors duration-300 hover:text-accent-600"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                {siteConfig.resume.label}
              </a>
            </motion.nav>
          </div>

          {/* Animated visual — stacks below the copy on mobile. */}
          <div className="min-w-0 lg:col-span-5">
            <HeroTerminal />
          </div>
        </div>

        {/* Hero footer strip */}
        <motion.div
          {...rise(0.85)}
          className="flex flex-col gap-4 border-t border-rule-light py-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {FOCUS_AREAS.map((area) => (
              <li
                key={area}
                className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-400"
              >
                {area}
              </li>
            ))}
          </ul>

          <a
            href="#about"
            className="group inline-flex w-fit items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-400 transition-colors duration-300 hover:text-ink-950"
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
