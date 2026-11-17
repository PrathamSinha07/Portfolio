type SectionHeadingProps = {
  /** Two-digit section index, e.g. "01". */
  index?: string;
  /** Small uppercase eyebrow label, e.g. "About". */
  label?: string;
  title: string;
  description?: string;
  /** "dark" is for use on the near-black surfaces. */
  tone?: "light" | "dark";
  className?: string;
};

/**
 * Editorial section heading: index + eyebrow rule, title, optional summary.
 */
export default function SectionHeading({
  index,
  label,
  title,
  description,
  tone = "light",
  className = "",
}: SectionHeadingProps) {
  const isDark = tone === "dark";

  const eyebrowColor = isDark ? "text-accent-300" : "text-accent-600";
  const titleColor = isDark ? "text-white" : "text-ink-950";
  const descriptionColor = isDark ? "text-ink-300" : "text-ink-400";
  const ruleColor = isDark ? "bg-accent-400" : "bg-accent-500";

  const eyebrow = [index, label].filter(Boolean).join(" — ");

  return (
    <div className={className}>
      {eyebrow ? (
        <p
          className={`flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.28em] ${eyebrowColor}`}
        >
          <span className={`h-px w-8 ${ruleColor}`} aria-hidden="true" />
          {eyebrow}
        </p>
      ) : null}

      <h2
        className={`mt-5 text-3xl font-semibold tracking-[-0.03em] text-balance sm:text-4xl lg:text-[2.75rem] ${titleColor}`}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={`mt-5 max-w-2xl text-base leading-relaxed sm:text-lg ${descriptionColor}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
