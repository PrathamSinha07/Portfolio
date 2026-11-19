import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/sections/ProjectCard";
import { projects } from "@/data/projects";

/**
 * Featured projects — four entries, each with its own editorial treatment.
 */
export default function Projects() {
  return (
    <Section id="projects" tone="paper">
      <SectionHeading
        index="02"
        label="Projects"
        title="Featured"
        accent="projects"
        description="Four builds across AI applications, backend systems, full-stack platforms and data analytics — with the repository and live deployment for each."
      />

      <div className="mt-12 sm:mt-14 lg:mt-16">
        {projects.map((project, index) => (
          <div
            key={project.slug}
            className={
              index === 0
                ? ""
                : "mt-16 border-t border-rule-light pt-16 sm:mt-20 sm:pt-20 lg:mt-24 lg:pt-24"
            }
          >
            <ProjectCard project={project} reversed={index % 2 === 1} />
          </div>
        ))}
      </div>
    </Section>
  );
}
