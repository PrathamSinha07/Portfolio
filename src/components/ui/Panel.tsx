import type { ReactNode } from "react";

type PanelProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Hairline-bordered surface used for supporting and placeholder content.
 */
export default function Panel({ children, className = "" }: PanelProps) {
  return (
    <div
      className={`rounded-lg border border-rule-light bg-white/70 shadow-[0_1px_2px_rgba(8,12,24,0.04)] ${className}`}
    >
      {children}
    </div>
  );
}
