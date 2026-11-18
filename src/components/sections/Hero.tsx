"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import Container from "@/components/ui/Container";
import HeroPortrait from "@/components/sections/HeroPortrait";
import SocialIcon from "@/components/ui/SocialIcon";
import { siteConfig } from "@/config/site";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type HeroProps = {
  /** Public path of the portrait photograph, or null while it is pending. */
  portraitSrc?: string | null;
};

export default function Hero({ portraitSrc = null }: HeroProps) {
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
      className="relative isolate flex min-h-[calc(100svh-4rem)] flex-col overflow-hidden bg-ink-950 text-white sm:min-h-[calc(100svh-4.5rem)]"
    >
      {/* Fine engineering grid + a single restrained glow. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hero-grid"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-[-15%] h-[34rem] w-[34rem] rounded-full bg-accent-500/15 blur-[140px]"
      />

      <Container className="relative flex flex-1 flex-col">
        <div className="grid flex-1 items-center gap-12 py-14 sm:py-16 lg:grid-cols-12 lg:gap-8 lg:py-20">
          {/* Editorial copy */}
          <div className="min-w-0 lg:col-span-7 lg:pr-6">
            <motion.p
              {...rise(0.05)}
              className="flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.35em] text-accent-300"
            >
              <span
                className="h-px w-10 bg-accent-400"
                aria-hidden="true"
              />
              {siteConfig.hero.eyebrow}
            </motion.p>

            <motion.h1
              {...rise(0.15)}
              className="mt-7 text-[clamp(2.75rem,8vw,5.5rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-balance"
            >
              {siteConfig.hero.name}
              <span className="text-accent-400" aria-hidden="true">
                .
              </span>
            </motion.h1>

            <motion.p
              {...rise(0.25)}
              className="mt-6 flex items-center gap-4 text-base font-medium tracking-tight text-ink-100 sm:text-lg"
            >
              <span
                className="h-px w-10 shrink-0 bg-accent-400 sm:w-14"
                aria-hidden="true"
              />
              {siteConfig.hero.role}
            </motion.p>

            <motion.p {...rise(0.3)} className="mt-5">
              <span className="inline-flex items-center rounded-full border border-accent-400/40 bg-accent-500/10 px-4 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-accent-300">
                {siteConfig.positioning}
              </span>
            </motion.p>

            <motion.p
              {...rise(0.35)}
              className="mt-7 max-w-xl text-base leading-relaxed text-ink-200 sm:text-lg"
            >
              {siteConfig.hero.summary}
            </motion.p>

            <motion.p
              {...rise(0.45)}
              className="mt-5 max-w-xl border-l-2 border-accent-400/50 pl-4 text-sm leading-relaxed text-ink-300 sm:text-base"
            >
              {siteConfig.hero.supporting}
            </motion.p>

            <motion.div {...rise(0.55)} className="mt-10 flex flex-wrap gap-3">
              <a
                href={siteConfig.hero.primaryCta.href}
                className="group inline-flex items-center gap-2 rounded-full bg-accent-500 px-6 py-3.5 text-sm font-medium text-white shadow-[0_16px_40px_-20px_rgba(47,102,240,0.9)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-600 sm:px-7"
              >
                {siteConfig.hero.primaryCta.label}
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
              <a
                href={siteConfig.hero.secondaryCta.href}
                className="group inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/45 hover:bg-white/5 sm:px-7"
              >
                {siteConfig.hero.secondaryCta.label}
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            </motion.div>

            <motion.div {...rise(0.65)} className="mt-9 flex items-center gap-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink-400">
                Find me on
              </span>
              <span
                className="h-px w-6 bg-rule-dark"
                aria-hidden="true"
              />
              {siteConfig.socials.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-ink-200 transition-colors hover:border-accent-400 hover:text-white"
                >
                  <SocialIcon id={social.id} className="h-4 w-4" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Portrait plate — stacks below the copy on mobile. */}
          <div className="flex min-w-0 justify-center lg:col-span-5 lg:justify-end">
            <HeroPortrait
              src={portraitSrc}
              name={siteConfig.hero.name}
              role={siteConfig.hero.role}
            />
          </div>
        </div>

        {/* Hero footer strip */}
        <motion.div
          {...rise(0.8)}
          className="flex flex-col gap-4 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {siteConfig.hero.focusAreas.map((area) => (
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
            className="group inline-flex w-fit items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-300 transition-colors hover:text-white"
          >
            Scroll
            <ArrowDown
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </motion.div>
      </Container>
    </section>
  );
}