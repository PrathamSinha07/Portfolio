"use client";

import { motion, useReducedMotion } from "motion/react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type Line = {
  /** `cmd` lines are commands, `out` lines are their output. */
  kind: "cmd" | "out";
  text: string;
  /** Lime highlight for the single line that carries the status. */
  accent?: boolean;
};

/**
 * The transcript below repeats only facts stated elsewhere on the page —
 * name, role, stack and availability. Nothing is measured or invented.
 */
const TRANSCRIPT: Line[] = [
  { kind: "cmd", text: "whoami" },
  { kind: "out", text: "pratham sinha — ai engineer, software developer" },
  { kind: "cmd", text: "cat stack.txt" },
  { kind: "out", text: "java · spring boot · postgresql · next.js · gemini" },
  { kind: "cmd", text: "status" },
  { kind: "out", text: "open to opportunities", accent: true },
];

/**
 * Subtle animated visual for the hero: a quiet terminal transcript set on a
 * charcoal plate, so the light editorial page keeps one point of contrast.
 * Lines arrive in sequence and end on a blinking caret.
 */
export default function HeroTerminal() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.figure
      initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: reduceMotion ? 0 : 0.9,
        delay: reduceMotion ? 0 : 0.35,
        ease: EASE,
      }}
      className="relative w-full"
    >
      {/* Restrained glow so the plate does not read as a flat block. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-6 -z-10 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(146,189,0,0.16),transparent_70%)]"
      />

      {/* Inset plate on the dark hero: lifts a hair on hover, with a lime
          border glow — no tilt, no drama. */}
      <div className="relative overflow-hidden border border-white/10 bg-ink-950 shadow-[0_40px_80px_-56px_rgba(0,0,0,0.85)] transition-[transform,border-color,box-shadow] duration-300 hover:border-accent-400/40 hover:shadow-[0_48px_90px_-52px_rgba(0,0,0,0.95)] motion-safe:hover:-translate-y-1">
        {/* Window chrome */}
        <div className="flex items-center justify-between border-b border-rule-dark px-4 py-3">
          <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.24em] text-ink-300">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-400" aria-hidden="true" />
            pratham@portfolio — zsh
          </span>
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
          </span>
        </div>

        <div className="px-4 py-5 sm:px-6 sm:py-7">
          <p
            role="img"
            aria-label="Terminal transcript: whoami, stack list, and an open-to-opportunities status."
            className="space-y-3 font-mono text-[12.5px] leading-relaxed sm:text-[13.5px]"
          >
            {TRANSCRIPT.map((line, index) => (
              <motion.span
                key={line.text}
                initial={{ opacity: reduceMotion ? 1 : 0, x: reduceMotion ? 0 : -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.45,
                  delay: reduceMotion ? 0 : 0.7 + index * 0.32,
                  ease: EASE,
                }}
                className="block"
              >
                {line.kind === "cmd" ? (
                  <>
                    <span className="mr-2 text-accent-400" aria-hidden="true">
                      $
                    </span>
                    <span className="text-paper-200">{line.text}</span>
                  </>
                ) : (
                  <span
                    className={`block pl-4 ${line.accent ? "text-accent-400" : "text-ink-300"}`}
                  >
                    {line.text}
                  </span>
                )}
              </motion.span>
            ))}

            {/* Live caret — the transcript never "finishes". */}
            <motion.span
              initial={{ opacity: reduceMotion ? 1 : 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: reduceMotion ? 0 : 0.3, delay: reduceMotion ? 0 : 2.7 }}
              className="block"
              aria-hidden="true"
            >
              <span className="mr-2 text-accent-400">$</span>
              <span className="terminal-caret inline-block h-[1.05em] w-[0.55em] translate-y-[0.2em] bg-accent-400" />
            </motion.span>
          </p>
        </div>
      </div>

      <figcaption className="mt-3 flex items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-300">
        <span>Terminal</span>
        <span>Available for work</span>
      </figcaption>
    </motion.figure>
  );
}
