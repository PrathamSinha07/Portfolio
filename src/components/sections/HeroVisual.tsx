"use client";

import { motion, useReducedMotion } from "motion/react";

type DiagramNode = {
  id: string;
  label: string;
  x: number;
  y: number;
  /** Stagger for the gentle floating loop. */
  delay: number;
};

type HeroVisualProps = {
  /** "dark" suits the near-black hero, "light" the editorial paper sections. */
  tone?: "dark" | "light";
  /** Header label of the plate. */
  label?: string;
  className?: string;
};

const CORE = { x: 240, y: 230 } as const;

const CHIP = { width: 96, height: 38 } as const;

/**
 * Satellite nodes of the abstract system-architecture diagram.
 * Positions live in the SVG viewBox (480 × 460) coordinate space.
 */
const NODES: DiagramNode[] = [
  { id: "java", label: "JAVA", x: 78, y: 114, delay: 0 },
  { id: "apis", label: "APIs", x: 402, y: 114, delay: 0.6 },
  { id: "web", label: "WEB", x: 78, y: 346, delay: 1.2 },
  { id: "ai", label: "AI", x: 402, y: 346, delay: 1.8 },
];

/** Class maps per surface — one diagram, two editorial tones. */
const tones = {
  dark: {
    shell: "border-white/[0.08] bg-white/[0.02] shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)] backdrop-blur-[2px]",
    header: "border-white/[0.07]",
    headerText: "text-ink-300",
    dot: "bg-accent-400",
    traffic: "bg-white/20",
    panelA: "fill-white/[0.02] stroke-white/[0.05]",
    panelB: "fill-white/[0.02] stroke-white/[0.06]",
    bracket: "stroke-white/20",
    glow: "url(#architecture-glow-dark)",
    connector: "stroke-accent-400/45",
    ring: "stroke-accent-400/35",
    core: "fill-ink-950/70 stroke-accent-400/60",
    coreText: "fill-white",
    chip: "fill-ink-900/85 stroke-white/15",
    chipText: "fill-ink-100",
  },
  light: {
    shell: "border-rule-light bg-white shadow-[0_1px_2px_rgba(8,12,24,0.04),0_28px_56px_-36px_rgba(8,12,24,0.35)]",
    header: "border-rule-light",
    headerText: "text-ink-400",
    dot: "bg-accent-500",
    traffic: "bg-paper-300",
    panelA: "fill-ink-950/[0.015] stroke-ink-950/[0.05]",
    panelB: "fill-ink-950/[0.015] stroke-ink-950/[0.06]",
    bracket: "stroke-ink-950/25",
    glow: "url(#architecture-glow-light)",
    connector: "stroke-accent-500/45",
    ring: "stroke-accent-500/35",
    core: "fill-white stroke-accent-500/60",
    coreText: "fill-ink-950",
    chip: "fill-white stroke-ink-950/10",
    chipText: "fill-ink-800",
  },
} as const;

/**
 * Lightweight architecture graphic for the system plate: Java · APIs · web · AI
 * around a shared core. Conveys the stack without inventing metrics,
 * statistics, or imagery.
 */
export default function HeroVisual({
  tone = "dark",
  label = "System architecture",
  className = "",
}: HeroVisualProps) {
  const reduceMotion = useReducedMotion();
  const c = tones[tone];

  return (
    <div className={`relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none ${className}`}>
      {/* Plate shell */}
      <div className={`relative overflow-hidden rounded-xl border ${c.shell}`}>
        <div className={`flex items-center justify-between border-b px-4 py-3 sm:px-5 ${c.header}`}>
          <span
            className={`flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.26em] ${c.headerText}`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${c.dot}`} aria-hidden="true" />
            {label}
          </span>
          <span className="flex gap-1.5" aria-hidden="true">
            <span className={`h-1.5 w-1.5 rounded-full ${c.traffic}`} />
            <span className={`h-1.5 w-1.5 rounded-full ${c.traffic}`} />
            <span className={`h-1.5 w-1.5 rounded-full ${c.traffic}`} />
          </span>
        </div>

        <svg
          viewBox="0 0 480 460"
          className="block w-full"
          role="img"
          aria-label="Abstract system architecture diagram linking Java, APIs, web, and AI around a central core."
        >
          <defs>
            <radialGradient id="architecture-glow-dark" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#2f66f0" stopOpacity="0.35" />
              <stop offset="60%" stopColor="#2f66f0" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#2f66f0" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="architecture-glow-light" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#2f66f0" stopOpacity="0.18" />
              <stop offset="60%" stopColor="#2f66f0" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#2f66f0" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Layered translucent panels */}
          <rect
            x="58"
            y="76"
            width="364"
            height="308"
            rx="18"
            transform="rotate(-5 240 230)"
            className={c.panelA}
          />
          <rect
            x="78"
            y="96"
            width="324"
            height="268"
            rx="16"
            transform="rotate(4 240 230)"
            className={c.panelB}
          />

          {/* Engineering corner brackets */}
          <path d="M20 58 V34 Q20 26 28 26 H52" className={`fill-none ${c.bracket}`} strokeWidth="1.5" />
          <path d="M428 26 H452 Q460 26 460 34 V58" className={`fill-none ${c.bracket}`} strokeWidth="1.5" />
          <path d="M20 402 V426 Q20 434 28 434 H52" className={`fill-none ${c.bracket}`} strokeWidth="1.5" />
          <path d="M428 434 H452 Q460 434 460 426 V402" className={`fill-none ${c.bracket}`} strokeWidth="1.5" />

          {/* Restrained glow behind the core */}
          <motion.circle
            cx={CORE.x}
            cy={CORE.y}
            r={132}
            fill={c.glow}
            animate={reduceMotion ? undefined : { opacity: [1, 0.7, 1] }}
            transition={
              reduceMotion
                ? undefined
                : { duration: 7, repeat: Infinity, ease: "easeInOut" }
            }
          />

          {/* Connectors — slow data flow via CSS dash animation */}
          {NODES.map((node) => (
            <line
              key={node.id}
              x1={CORE.x}
              y1={CORE.y}
              x2={node.x}
              y2={node.y}
              strokeWidth="1.5"
              strokeDasharray="5 9"
              className={`${c.connector} hero-line-flow`}
            />
          ))}

          {/* Core ring and label */}
          <circle
            cx={CORE.x}
            cy={CORE.y}
            r={70}
            fill="none"
            strokeWidth="1.25"
            strokeDasharray="4 10"
            className={`${c.ring} hero-line-flow`}
          />
          <circle
            cx={CORE.x}
            cy={CORE.y}
            r={54}
            strokeWidth="1.5"
            className={c.core}
          />
          <text
            x={CORE.x + 2}
            y={CORE.y + 5}
            textAnchor="middle"
            className={`${c.coreText} font-mono text-[15px] tracking-[0.3em]`}
          >
            CORE
          </text>

          {/* Node chips with a gentle float */}
          {NODES.map((node) => (
            <motion.g
              key={node.id}
              animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
              transition={
                reduceMotion
                  ? undefined
                  : {
                      duration: 6,
                      delay: node.delay,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
              }
            >
              <rect
                x={node.x - CHIP.width / 2}
                y={node.y - CHIP.height / 2}
                width={CHIP.width}
                height={CHIP.height}
                rx="9"
                className={c.chip}
              />
              <text
                x={node.x}
                y={node.y + 5}
                textAnchor="middle"
                className={`${c.chipText} font-mono text-[14px] tracking-[0.14em]`}
              >
                {node.label}
              </text>
            </motion.g>
          ))}

          {/* Micro labels */}
          <text x="30" y="76" className={`fill-ink-400 font-mono text-[11px] tracking-[0.24em]`}>
            stack.map
          </text>
          <text
            x="450"
            y="446"
            textAnchor="end"
            className={`fill-ink-400 font-mono text-[11px] tracking-[0.24em]`}
          >
            core ↔ edge
          </text>
        </svg>
      </div>
    </div>
  );
}
