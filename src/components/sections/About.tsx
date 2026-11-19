"use client";

import { motion, useReducedMotion } from "motion/react";

import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/config/site";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function About() {
  const reduceMotion = useReducedMotion();

  const reveal = (delay: number) => ({
    initial: { opacity: 0, y: reduceMotion ? 0 : 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" } as const,
    transition: {
      duration: reduceMotion ? 0 : 0.7,
      delay: reduceMotion ? 0 : delay,
      ease: EASE,
    },
  });

  return (
    <Section id="about" tone="paper">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <motion.div {...reveal(0)} className="lg:col-span-4">
          <SectionHeading
            index="01"
            label="About"
            title="A little about"
            accent="me."
          />
        </motion.div>

        <motion.div
          {...reveal(0.08)}
          className="lg:col-span-7 lg:col-start-6"
        >
          <p className="text-lg leading-relaxed text-pretty text-ink-800 sm:text-xl">
            {siteConfig.about.intro}
          </p>

          <p className="mt-6 border-l-2 border-accent-500/40 pl-5 text-base leading-relaxed text-ink-600 sm:text-lg">
            {siteConfig.about.approach}
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-rule-light bg-rule-light">
            {siteConfig.about.facts.map((fact) => (
              <div key={fact.label} className="bg-paper-50 p-4 sm:p-5">
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-400 sm:text-[11px]">
                  {fact.label}
                </dt>
                <dd className="mt-2 text-sm leading-snug text-ink-900 sm:text-[0.95rem]">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>

          <p className="mt-9 font-mono text-[11px] uppercase tracking-[0.22em] text-accent-600">
            Interested in
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {siteConfig.about.interests.map((interest) => (
              <li
                key={interest}
                className="border border-rule-light bg-white px-3.5 py-1.5 text-sm text-ink-700"
              >
                {interest}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
}