import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/sections/ProjectCard";
import { projects } from "@/data/projects";

/**
 * Featured projects — exactly three, in verified order, alternating layout.
 */
export default function Projects() {
  return (
    <Section id="projects" tone="paper">
      <SectionHeading
        index="03"
        label="Projects"
        title="Selected"
        accent="projects"
        description="Three projects that reflect my work across AI applications, full-stack web development, and serverless platforms."
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
