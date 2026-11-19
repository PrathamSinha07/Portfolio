import type { LucideIcon } from "lucide-react";
import { Brain, Braces, Cloud, Database, Server, Sparkles } from "lucide-react";

import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { skillCategories, type SkillIcon } from "@/data/skills";

const icons: Record<SkillIcon, LucideIcon> = {
  code: Braces,
  sparkles: Sparkles,
  brain: Brain,
  server: Server,
  database: Database,
  cloud: Cloud,
};

/**
 * Editorial skills grid — grouped categories, technology labels only.
 * No percentages, ratings or progress bars anywhere.
 */
export default function Skills() {
  return (
    <Section id="skills" tone="alt">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="min-w-0 lg:col-span-4">
          <SectionHeading
            index="03"
            label="Skills"
            title="Skills &"
            accent="tooling"
            description="The technologies and concepts I work with across generative AI, backend engineering, databases, cloud and web development."
          />

          <p className="mt-8 hidden border-l-2 border-accent-500/50 pl-4 text-sm leading-relaxed text-ink-400 lg:block">
            Grouped by domain. No ratings and no percentages — just the tools
            and ideas I use, listed plainly.
          </p>
        </div>

        <div className="min-w-0 lg:col-span-7 lg:col-start-6">
          <ul className="grid gap-4 sm:grid-cols-2">
            {skillCategories.map((category, index) => {
              const Icon = icons[category.icon];

              return (
                <li key={category.id} className="h-full">
                  <article className="group flex h-full flex-col border border-rule-light bg-white p-5 shadow-[0_1px_2px_rgba(8,12,24,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-ink-950/20 hover:shadow-[0_1px_2px_rgba(8,12,24,0.04),0_18px_40px_-30px_rgba(25,24,19,0.6)] sm:p-6">
                    <header className="flex items-start justify-between gap-3">
                      <span className="flex items-center gap-3">
                        <span
                          className="inline-flex h-9 w-9 shrink-0 items-center justify-center border border-rule-light bg-paper-50 text-ink-400 transition-colors duration-300 group-hover:border-accent-500/40 group-hover:text-accent-600"
                          aria-hidden="true"
                        >
                          <Icon className="h-4 w-4" strokeWidth={1.75} />
                        </span>
                        <h3 className="text-[0.95rem] font-semibold leading-snug tracking-tight text-ink-900 sm:text-base">
                          {category.label}
                        </h3>
                      </span>

                      <span
                        className="mt-0.5 shrink-0 font-mono text-[10px] tracking-[0.14em] text-ink-400"
                        aria-hidden="true"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </header>

                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {category.skills.map((skill) => (
                        <li
                          key={skill}
                          className="border border-rule-light bg-paper-50 px-2.5 py-1 text-[12.5px] leading-snug text-ink-700"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </article>
                </li>
              );
            })}
          </ul>

          <p className="mt-6 border-l-2 border-accent-500/50 pl-4 text-sm leading-relaxed text-ink-400 sm:hidden">
            Grouped by domain. No ratings and no percentages — just the tools
            and ideas I use, listed plainly.
          </p>
        </div>
      </div>
    </Section>
  );
}
