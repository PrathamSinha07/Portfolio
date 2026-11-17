import Panel from "@/components/ui/Panel";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <Section id="projects" tone="paper">
      <SectionHeading
        index="03"
        label="Projects"
        title="Selected projects"
        description="Three projects that reflect how I approach building reliable software."
      />

      <Panel className="mt-12 overflow-hidden">
        <ol>
          {projects.map((project, index) => (
            <li
              key={project.slug}
              className="border-b border-rule-light px-5 py-6 last:border-b-0 sm:px-7 sm:py-7"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                <div className="flex items-baseline gap-4">
                  <span
                    className="font-mono text-[11px] text-accent-600"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-semibold tracking-tight text-ink-950 sm:text-xl">
                    {project.name}
                  </h3>
                </div>
                <p className="text-sm text-ink-400 sm:max-w-[50%] sm:text-right">
                  {project.category}
                </p>
              </div>
              <p className="mt-3 pl-0 text-sm leading-relaxed text-ink-400 sm:pl-8">
                {project.description}
              </p>
            </li>
          ))}
        </ol>
      </Panel>
    </Section>
  );
}
