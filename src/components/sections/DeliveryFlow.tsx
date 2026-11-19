"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** REST surface documented in the repository README. */
const ENDPOINTS = [
  { path: "/api/track/{orderId}", note: "status and prediction data for one shipment" },
  { path: "/api/all", note: "every registered shipment node" },
  { path: "/api/dashboard", note: "aggregated delivery analytics" },
];

function BlockLabel({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-400">
      {children}
    </p>
  );
}

/**
 * Stand-in preview for Smart Delivery Tracking System — the repository ships
 * without screenshots, so instead of a stock image this plate draws only what
 * the project documentation describes: the status workflow, the REST surface
 * and the persistence layer.
 */
export default function DeliveryFlow() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    initial: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" } as const,
    transition: {
      duration: reduceMotion ? 0 : 0.7,
      ease: EASE,
    },
  };

  return (
    <motion.figure
      {...reveal}
      className="overflow-hidden border border-rule-light bg-white shadow-[0_2px_4px_rgba(8,12,24,0.04),0_32px_64px_-36px_rgba(8,12,24,0.4)]"
    >
      <div className="flex items-center justify-between border-b border-rule-light px-4 py-3 sm:px-5">
        <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-400">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-500" aria-hidden="true" />
          Shipment tracking
        </span>
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-1.5 w-1.5 rounded-full bg-paper-300" />
          <span className="h-1.5 w-1.5 rounded-full bg-paper-300" />
          <span className="h-1.5 w-1.5 rounded-full bg-paper-300" />
        </span>
      </div>

      <div className="space-y-7 px-4 py-6 sm:px-6 sm:py-7">
        {/* Status workflow */}
        <div>
          <BlockLabel>Status workflow</BlockLabel>
          <div className="mt-4 flex items-start gap-3 sm:gap-4">
            <span className="flex flex-col items-center gap-2">
              <span
                className="h-2.5 w-2.5 rotate-45 border border-ink-950/40 bg-accent-500"
                aria-hidden="true"
              />
              <span className="whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.14em] text-ink-700">
                Order Placed
              </span>
            </span>

            <span
              className="relative mt-[4.5px] h-px flex-1 bg-rule-light"
              aria-hidden="true"
            >
              <motion.span
                className="absolute -top-[3.5px] left-0 h-[8px] w-[8px] rounded-full bg-accent-500"
                animate={reduceMotion ? undefined : { left: ["0%", "100%"] }}
                transition={
                  reduceMotion
                    ? undefined
                    : { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }
                style={reduceMotion ? { left: "50%" } : undefined}
              />
            </span>

            <span className="flex flex-col items-center gap-2">
              <span
                className="h-2.5 w-2.5 rotate-45 border border-ink-950/40 bg-ink-950"
                aria-hidden="true"
              />
              <span className="whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.14em] text-ink-700">
                Delivered
              </span>
            </span>
          </div>
          <p className="mt-3 text-[13px] leading-relaxed text-ink-400">
            Package states are tracked dynamically between the two milestones.
          </p>
        </div>

        {/* REST surface */}
        <div>
          <BlockLabel>REST endpoints</BlockLabel>
          <ul className="mt-2">
            {ENDPOINTS.map((endpoint) => (
              <li
                key={endpoint.path}
                className="grid gap-1 border-t border-rule-light py-3 last:border-b sm:grid-cols-[minmax(0,15rem)_1fr] sm:items-baseline sm:gap-5"
              >
                <code className="whitespace-nowrap font-mono text-[12px] text-ink-950">
                  <span className="text-accent-600">GET</span> {endpoint.path}
                </code>
                <span className="text-[13px] leading-snug text-ink-400">
                  {endpoint.note}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Persistence */}
        <div>
          <BlockLabel>Persistence</BlockLabel>
          <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border border-rule-light bg-paper-100 px-4 py-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-400">
              Database &amp; ORM
            </span>
            <span className="text-sm text-ink-800">
              PostgreSQL + Spring Data JPA
            </span>
          </div>
        </div>
      </div>

      <figcaption className="border-t border-rule-light px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-400 sm:px-5">
        Diagram — behaviour described in the project documentation
      </figcaption>
    </motion.figure>
  );
}
