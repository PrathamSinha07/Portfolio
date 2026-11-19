"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, ExternalLink } from "lucide-react";

import DeliveryFlow from "@/components/sections/DeliveryFlow";
import ProjectGallery from "@/components/sections/ProjectGallery";
import SocialIcon from "@/components/ui/SocialIcon";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  /** Odd split rows place the preview on the right for an alternating rhythm. */
  reversed?: boolean;
};

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Preview: the genuine screenshot, or the documented-behaviour diagram. */
function Preview({ project }: { project: Project }) {
  if (project.visual === "delivery-flow") {
    return <DeliveryFlow />;
  }

  if (project.image) {
    return (
      <ProjectGallery projectName={project.name} images={[project.image]} />
    );
  }

  return null;
}

function Eyebrow({ project }: { project: Project }) {
  return (
    <p className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
      <span className="font-mono text-base font-medium tracking-[0.12em] text-accent-600">
        {project.number}
      </span>
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-400">
        {project.category}
      </span>
    </p>
  );
}

function Stack({ project }: { project: Project }) {
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="Technologies used">
      {project.stack.map((tech) => (
        <li
          key={tech}
          className="border border-rule-light bg-white px-2.5 py-1 font-mono text-[11px] leading-snug tracking-[0.04em] text-ink-700"
        >
          {tech}
        </li>
      ))}
    </ul>
  );
}

function Highlights({ project }: { project: Project }) {
  return (
    <ol className="border-t border-rule-light">
      {project.highlights.map((highlight, index) => (
        <li key={highlight} className="flex gap-4 border-b border-rule-light py-3">
          <span
            className="shrink-0 font-mono text-[11px] leading-6 text-ink-400"
            aria-hidden="true"
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-sm leading-relaxed text-ink-700">
            {highlight}
          </span>
        </li>
      ))}
    </ol>
  );
}

function Links({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group/link inline-flex items-center gap-2 border-b border-ink-950/20 pb-1 text-[11px] font-medium uppercase tracking-[0.16em] text-ink-950 transition-colors duration-300 hover:border-accent-500 hover:text-accent-600"
      >
        <SocialIcon id="github" className="h-3.5 w-3.5" />
        GitHub
        <ArrowUpRight
          className="h-3.5 w-3.5 motion-safe:transition-transform motion-safe:group-hover/link:-translate-y-0.5 motion-safe:group-hover/link:translate-x-0.5"
          aria-hidden="true"
        />
      </a>

      {project.liveUrl ? (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link inline-flex items-center gap-2 border-b border-accent-500/60 pb-1 text-[11px] font-medium uppercase tracking-[0.16em] text-accent-600 transition-colors duration-300 hover:border-accent-600"
        >
          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          Live Demo
          <ArrowUpRight
            className="h-3.5 w-3.5 motion-safe:transition-transform motion-safe:group-hover/link:-translate-y-0.5 motion-safe:group-hover/link:translate-x-0.5"
            aria-hidden="true"
          />
        </a>
      ) : null}
    </div>
  );
}

const label = "mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-400";

/**
 * Editorial case-study row with three treatments so the four projects never
 * read as one repeated template: a featured opener, alternating splits and a
 * wide closing entry.
 */
export default function ProjectCard({
  project,
  reversed = false,
}: ProjectCardProps) {
  const reduceMotion = useReducedMotion();

  const reveal = {
    initial: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" } as const,
    transition: { duration: reduceMotion ? 0 : 0.75, ease: EASE },
  };

  /* ---------------------------------------------------------- featured -- */
  if (project.layout === "featured") {
    return (
      <motion.article {...reveal}>
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-14">
          <div className="min-w-0 lg:col-span-7">
            <Eyebrow project={project} />
            <h3 className="mt-4 text-[clamp(2.2rem,5vw,3.5rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-ink-950">
              {project.name}
            </h3>
          </div>
          <div className="min-w-0 lg:col-span-4 lg:col-start-9">
            <p className={label}>Stack</p>
            <div className="mt-3">
              <Stack project={project} />
            </div>
          </div>
        </div>

        <div className="mt-9 lg:mt-11">
          <Preview project={project} />
        </div>

        <div className="mt-9 grid gap-8 lg:grid-cols-12 lg:gap-14">
          <div className="min-w-0 lg:col-span-7">
            <p className="text-base leading-relaxed text-pretty text-ink-600 sm:text-[1.05rem]">
              {project.description}
            </p>
            <p className={label}>Engineering highlights</p>
            <div className="mt-3">
              <Highlights project={project} />
            </div>
          </div>
          <div className="min-w-0 lg:col-span-4 lg:col-start-9">
            <Links project={project} />
          </div>
        </div>
      </motion.article>
    );
  }

  /* ------------------------------------------------------------- wide -- */
  if (project.layout === "wide") {
    return (
      <motion.article {...reveal}>
        <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4 border-b border-rule-light pb-5">
          <div className="min-w-0">
            <Eyebrow project={project} />
            <h3 className="mt-3 text-[clamp(1.9rem,4vw,2.75rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-ink-950">
              {project.name}
            </h3>
          </div>
          <div className="min-w-0 max-w-full">
            <Stack project={project} />
          </div>
        </div>

        <div className="mt-8 lg:mt-10">
          <Preview project={project} />
        </div>

        <div className="mt-9 grid gap-8 lg:grid-cols-12 lg:gap-14">
          <div className="min-w-0 lg:col-span-5">
            <p className="text-base leading-relaxed text-pretty text-ink-600 sm:text-[1.05rem]">
              {project.description}
            </p>
          </div>
          <div className="min-w-0 lg:col-span-6 lg:col-start-7">
            <p className={label}>Engineering highlights</p>
            <div className="mt-3">
              <Highlights project={project} />
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-rule-light pt-6">
          <Links project={project} />
        </div>
      </motion.article>
    );
  }

  /* ------------------------------------------------------------ split -- */
  return (
    <motion.article
      {...reveal}
      className="grid items-start gap-8 lg:grid-cols-12 lg:gap-14"
    >
      <div className={`min-w-0 lg:col-span-7 ${reversed ? "lg:order-2" : ""}`}>
        <Preview project={project} />
      </div>

      <div className={`min-w-0 lg:col-span-5 ${reversed ? "lg:order-1" : ""}`}>
        <Eyebrow project={project} />

        <h3 className="mt-4 text-[1.7rem] font-semibold leading-[1.08] tracking-[-0.03em] text-ink-950 sm:text-[2.1rem]">
          {project.name}
        </h3>

        <p className="mt-4 text-base leading-relaxed text-pretty text-ink-600 sm:text-[1.02rem]">
          {project.description}
        </p>

        <p className={label}>Stack</p>
        <div className="mt-3">
          <Stack project={project} />
        </div>

        <p className={label}>Engineering highlights</p>
        <div className="mt-3">
          <Highlights project={project} />
        </div>

        <div className="mt-7">
          <Links project={project} />
        </div>
      </div>
    </motion.article>
  );
}
