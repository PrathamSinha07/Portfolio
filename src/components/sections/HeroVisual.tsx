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

const CORE = { x: 240, y: 230 } as const;

const CHIP = { width: 92, height: 36 } as const;

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

/**
 * Lightweight, decorative architecture graphic for the desktop hero.
 * Conveys the stack (Java · APIs · Web · AI around a core) without
 * inventing metrics, statistics, or imagery.
 */
export default function HeroVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none">
      {/* Translucent panel shell */}
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)] backdrop-blur-[2px]">
        <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-3 sm:px-5">
          <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.26em] text-ink-300">
            <span
              className="h-1.5 w-1.5 rounded-full bg-accent-400"
              aria-hidden="true"
            />
            System architecture
          </span>
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
          </span>
        </div>

        <svg
          viewBox="0 0 480 460"
          className="block w-full"
          role="img"
          aria-label="Abstract system architecture diagram linking Java, APIs, web, and AI around a central core."
        >
          <defs>
            <radialGradient id="hero-core-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#2f66f0" stopOpacity="0.35" />
              <stop offset="60%" stopColor="#2f66f0" stopOpacity="0.1" />
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
            className="fill-white/[0.02] stroke-white/[0.05]"
          />
          <rect
            x="78"
            y="96"
            width="324"
            height="268"
            rx="16"
            transform="rotate(4 240 230)"
            className="fill-white/[0.02] stroke-white/[0.06]"
          />

          {/* Engineering corner brackets */}
          <path
            d="M20 58 V34 Q20 26 28 26 H52"
            className="fill-none stroke-white/20"
            strokeWidth="1.5"
          />
          <path
            d="M428 26 H452 Q460 26 460 34 V58"
            className="fill-none stroke-white/20"
            strokeWidth="1.5"
          />
          <path
            d="M20 402 V426 Q20 434 28 434 H52"
            className="fill-none stroke-white/20"
            strokeWidth="1.5"
          />
          <path
            d="M428 434 H452 Q460 434 460 426 V402"
            className="fill-none stroke-white/20"
            strokeWidth="1.5"
          />

          {/* Restrained glow behind the core */}
          <motion.circle
            cx={CORE.x}
            cy={CORE.y}
            r={132}
            fill="url(#hero-core-glow)"
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
              className="stroke-accent-400/45 hero-line-flow"
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
            className="stroke-accent-400/35 hero-line-flow"
          />
          <circle
            cx={CORE.x}
            cy={CORE.y}
            r={52}
            strokeWidth="1.5"
            className="fill-ink-950/70 stroke-accent-400/60"
          />
          <text
            x={CORE.x + 2}
            y={CORE.y + 4}
            textAnchor="middle"
            className="fill-white font-mono text-[13px] tracking-[0.3em]"
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
                className="fill-ink-900/85 stroke-white/15"
              />
              <text
                x={node.x}
                y={node.y + 4.5}
                textAnchor="middle"
                className="fill-ink-100 font-mono text-[12px] tracking-[0.14em]"
              >
                {node.label}
              </text>
            </motion.g>
          ))}

          {/* Micro labels */}
          <text
            x="30"
            y="76"
            className="fill-ink-400 font-mono text-[9px] tracking-[0.24em]"
          >
            stack.map
          </text>
          <text
            x="450"
            y="446"
            textAnchor="end"
            className="fill-ink-400 font-mono text-[9px] tracking-[0.24em]"
          >
            core ↔ edge
          </text>
        </svg>
      </div>
    </div>
  );
}