import Panel from "@/components/ui/Panel";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <Section id="skills" tone="alt">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            index="02"
            label="Skills"
            title="Skills"
            description="The technologies I work with across backend engineering, web development, databases, cloud, and AI."
          />
        </div>

        <div className="lg:col-span-7">
          <Panel className="overflow-hidden">
            <ul>
              {skillCategories.map((category, index) => (
                <li
                  key={category.id}
                  className="flex items-center justify-between gap-4 border-b border-rule-light px-5 py-4 last:border-b-0 sm:px-6 sm:py-5"
                >
                  <span className="flex items-baseline gap-4">
                    <span
                      className="font-mono text-[11px] text-ink-400"
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-medium text-ink-900 sm:text-base">
                      {category.label}
                    </span>
                  </span>
                  <span className="shrink-0 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-400">
                    {category.skills.length} items
                  </span>
                </li>
              ))}
            </ul>
          </Panel>
        </div>
      </div>
    </Section>
  );
}
