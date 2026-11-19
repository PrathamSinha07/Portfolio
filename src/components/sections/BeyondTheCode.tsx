import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

/**
 * Interests outside the brief's project and role sections. Every line here is
 * something visible on this site or in the linked repositories — no invented
 * hobbies, awards or statistics.
 */
const items = [
  {
    title: "Learning in the open",
    body: "Every repository I publish ships with documentation covering setup and architecture. Writing it down is how I check that I actually understood it.",
  },
  {
    title: "Data, told clearly",
    body: "Dashboards are a side interest: turning raw order records into something that can be read at a glance, whether in Power BI or a React table.",
  },
  {
    title: "Intelligent systems, studied",
    body: "Outside of project work I read about retrieval, agents and the Model Context Protocol — the patterns behind the AI features I build.",
  },
  {
    title: "End to end, not one layer",
    body: "Schema, API, interface, deployment. I like following a build through every layer rather than stopping at whichever part I started with.",
  },
];

const exploring = [
  "Retrieval-Augmented Generation",
  "Model Context Protocol",
  "AI agents",
];

export default function BeyondTheCode() {
  return (
    <Section id="beyond" tone="alt">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="min-w-0 lg:col-span-4">
          <SectionHeading
            index="05"
            label="Beyond the Code"
            title="Beyond the"
            accent="code"
            description="What keeps me curious when I'm not shipping a feature."
          />

          <p className="mt-8 hidden border-l-2 border-accent-500/50 pl-4 text-sm leading-relaxed text-ink-400 lg:block">
            The habit behind the work: read widely, write it down, then build
            the smallest version that proves the idea.
          </p>
        </div>

        <div className="min-w-0 lg:col-span-7 lg:col-start-6">
          <ol className="border-t border-rule-light">
            {items.map((item, index) => (
              <li
                key={item.title}
                className="grid gap-3 border-b border-rule-light py-7 sm:grid-cols-[3rem_1fr] sm:gap-6"
              >
                <span
                  className="font-mono text-[11px] leading-6 tracking-[0.14em] text-accent-600"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h3 className="font-serif text-[1.15rem] italic leading-snug text-ink-950 sm:text-[1.3rem]">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-600 sm:text-[0.95rem]">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-400">
              Currently exploring
            </span>
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {exploring.map((topic) => (
                <li
                  key={topic}
                  className="border-l-2 border-accent-500/60 pl-3 text-sm text-ink-700"
                >
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
