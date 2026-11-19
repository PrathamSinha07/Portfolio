type SectionHeadingProps = {
  /** Two-digit section index, e.g. "01". */
  index?: string;
  /** Small uppercase eyebrow label, e.g. "About". */
  label?: string;
  title: string;
  /**
   * Optional trailing word set in the display serif italic — the recurring
   * editorial accent that gives each section its own voice.
   */
  accent?: string;
  description?: string;
  /** "dark" is for use on the near-black surfaces. */
  tone?: "light" | "dark";
  className?: string;
};

/**
 * Editorial section heading: index + eyebrow rule, title with a serif accent
 * word, optional summary.
 */
export default function SectionHeading({
  index,
  label,
  title,
  accent,
  description,
  tone = "light",
  className = "",
}: SectionHeadingProps) {
  const isDark = tone === "dark";

  const eyebrowColor = isDark ? "text-accent-300" : "text-accent-600";
  const titleColor = isDark ? "text-white" : "text-ink-950";
  const descriptionColor = isDark ? "text-ink-300" : "text-ink-400";
  const ruleColor = isDark ? "bg-accent-400" : "bg-accent-500";
  const accentColor = isDark ? "text-accent-300" : "text-accent-600";

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
        className={`mt-5 text-[clamp(1.9rem,3.6vw,2.9rem)] font-semibold leading-[1.06] tracking-[-0.035em] text-balance ${titleColor}`}
      >
        {title}
        {accent ? (
          <>
            {" "}
            <em
              className={`font-serif text-[1.06em] font-normal italic tracking-[-0.015em] ${accentColor}`}
            >
              {accent}
            </em>
          </>
        ) : null}
      </h2>

      {description ? (
        <p
          className={`mt-5 max-w-2xl text-base leading-relaxed text-pretty sm:text-lg ${descriptionColor}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
