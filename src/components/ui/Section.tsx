import type { ReactNode } from "react";
import Container from "./Container";

type SectionProps = {
  id: string;
  children: ReactNode;
  /** Surface tone — drives the section background and text colour. */
  tone?: "paper" | "alt" | "dark";
  className?: string;
};

const tones: Record<NonNullable<SectionProps["tone"]>, string> = {
  paper: "bg-paper-50 text-ink-900",
  alt: "bg-paper-100 text-ink-900",
  dark: "bg-ink-950 text-white",
};

/**
 * Single source of truth for section anchors and vertical spacing.
 */
export default function Section({
  id,
  children,
  tone = "paper",
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 py-20 sm:py-24 lg:py-32 ${tones[tone]} ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}
