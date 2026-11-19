import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  educationEntries,
  experienceEntries,
} from "@/data/experience";

export default function Experience() {
  return (
    <Section id="experience" tone="paper">
      <SectionHeading
        index="04"
        label="Experience"
        title="Experience"
        accent="& education"
        description="Work and study so far — an internship at Canspirit.ai alongside an electronics and communication engineering degree."
      />

      <ol className="mt-12 sm:mt-14 lg:mt-16">
        {experienceEntries.map((entry) => (
          <li
            key={entry.id}
            className="grid gap-5 border-t border-rule-light py-9 lg:grid-cols-12 lg:gap-14 lg:py-11"
          >
            <div className="min-w-0 lg:col-span-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-600">
                {entry.duration}
              </p>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-400">
                {entry.location}
              </p>
            </div>

            <div className="min-w-0 lg:col-span-8">
              <h3 className="text-[1.5rem] font-semibold leading-tight tracking-[-0.03em] text-ink-950 sm:text-[1.9rem]">
                {entry.role}
                <span className="text-ink-400">, </span>
                <span className="font-serif italic">{entry.company}</span>
              </h3>

              <ul className="mt-5 border-t border-rule-light">
                {entry.responsibilities.map((line) => (
                  <li
                    key={line}
                    className="flex gap-4 border-b border-rule-light py-3"
                  >
                    <span
                      className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rotate-45 bg-accent-500"
                      aria-hidden="true"
                    />
                    <span className="text-sm leading-relaxed text-ink-700 sm:text-[0.95rem]">
                      {line}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-10 border-t border-rule-light pt-9 lg:pt-11">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-400">
          Education
        </p>

        <ul className="mt-5">
          {educationEntries.map((entry) => (
            <li
              key={entry.id}
              className="grid gap-2 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-6"
            >
              <span>
                <span className="block text-base font-medium text-ink-950 sm:text-lg">
                  {entry.degree}
                </span>
                <span className="mt-1 block text-sm text-ink-600">
                  {entry.school}
                </span>
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-400">
                {entry.detail}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
