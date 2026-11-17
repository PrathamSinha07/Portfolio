import Panel from "@/components/ui/Panel";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const entries = [
  {
    label: "Education",
    title: "B.Tech, Electronics and Communication Engineering",
    detail: "MIT-WPU, Pune",
  },
  {
    label: "Note",
    title: "Detailed experience entries will be published here.",
    detail: "",
  },
];

export default function Experience() {
  return (
    <Section id="experience" tone="alt">
      <SectionHeading
        index="04"
        label="Experience"
        title="Experience"
        description="Education, roles, and the work behind the projects."
      />

      <Panel className="mt-12 overflow-hidden">
        <ul>
          {entries.map((entry) => (
            <li
              key={entry.label}
              className="grid gap-1.5 border-b border-rule-light px-5 py-6 last:border-b-0 sm:grid-cols-[10rem_1fr] sm:gap-6 sm:px-7"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-400">
                {entry.label}
              </span>
              <span>
                <span className="block text-base font-medium text-ink-950">
                  {entry.title}
                </span>
                {entry.detail ? (
                  <span className="mt-1 block text-sm text-ink-400">
                    {entry.detail}
                  </span>
                ) : null}
              </span>
            </li>
          ))}
        </ul>
      </Panel>
    </Section>
  );
}
