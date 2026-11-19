"use client";

import { useCallback, useId, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import type { ProjectImage } from "@/data/projects";

type ProjectGalleryProps = {
  projectName: string;
  /** Primary screenshot first, then any additional genuine screenshots. */
  images: ProjectImage[];
};

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/**
 * Reusable project screenshot gallery.
 *
 * One image renders as a plain, prominent preview; anything more becomes a
 * full gallery with previous/next controls, thumbnail navigation, a segmented
 * position indicator, captions and keyboard support (←/→/Home/End).
 */
export default function ProjectGallery({
  projectName,
  images,
}: ProjectGalleryProps) {
  const total = images.length;
  const hasGallery = total > 1;
  const [index, setIndex] = useState(0);

  const active = images[Math.min(index, total - 1)];
  const portrait = active.height > active.width;
  const reduceMotion = useReducedMotion();

  const hintId = useId();
  const statusId = useId();

  const goTo = useCallback(
    (next: number) => setIndex(((next % total) + total) % total),
    [total]
  );

  /* Arrow keys work from the preview or from any thumbnail button. */
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!hasGallery) return;
    switch (event.key) {
      case "ArrowRight":
        event.preventDefault();
        goTo(index + 1);
        break;
      case "ArrowLeft":
        event.preventDefault();
        goTo(index - 1);
        break;
      case "Home":
        event.preventDefault();
        setIndex(0);
        break;
      case "End":
        event.preventDefault();
        setIndex(total - 1);
        break;
      default:
        break;
    }
  };

  return (
    <div onKeyDown={handleKeyDown}>
      <figure className="group overflow-hidden border border-rule-light bg-white shadow-[0_2px_4px_rgba(8,12,24,0.04),0_32px_64px_-36px_rgba(8,12,24,0.4)]">
        <div
          className="relative w-full overflow-hidden bg-paper-100"
          style={{ aspectRatio: `${active.width} / ${active.height}` }}
          role={hasGallery ? "group" : undefined}
          aria-roledescription={hasGallery ? "carousel" : undefined}
          aria-label={hasGallery ? `${projectName} screenshots` : undefined}
          aria-describedby={hasGallery ? hintId : undefined}
          tabIndex={hasGallery ? 0 : undefined}
        >
          {hasGallery ? (
            <p id={hintId} className="sr-only">
              Screenshot gallery. Use the left and right arrow keys to move
              between screenshots, Home for the first and End for the last.
              Thumbnail buttons are listed below the preview.
            </p>
          ) : null}

          <AnimatePresence initial={false}>
            <motion.div
              key={active.src}
              className="absolute inset-0"
              initial={{ opacity: reduceMotion ? 1 : 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: reduceMotion ? 0 : 0.35,
                ease: EASE,
              }}
            >
              <Image
                src={active.src}
                alt={active.alt}
                fill
                sizes="(max-width: 1024px) 92vw, 1056px"
                className={
                  portrait
                    ? "object-contain p-4 sm:p-8"
                    : "object-cover object-top"
                }
              />
            </motion.div>
          </AnimatePresence>

          {hasGallery ? (
            <>
              <button
                type="button"
                onClick={() => goTo(index - 1)}
                aria-label="Previous screenshot"
                className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-rule-light bg-white/92 text-ink-700 shadow-[0_6px_18px_-10px_rgba(8,12,24,0.5)] transition-colors duration-300 hover:border-ink-950/30 hover:text-ink-950"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => goTo(index + 1)}
                aria-label="Next screenshot"
                className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-rule-light bg-white/92 text-ink-700 shadow-[0_6px_18px_-10px_rgba(8,12,24,0.5)] transition-colors duration-300 hover:border-ink-950/30 hover:text-ink-950"
              >
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </>
          ) : null}
        </div>

        <figcaption className="flex items-center justify-between gap-3 border-t border-rule-light bg-white px-4 py-2.5">
          <span className="truncate font-mono text-[10px] uppercase tracking-[0.18em] text-ink-400">
            {projectName} — {active.label}
          </span>
          {hasGallery ? (
            <span
              className="shrink-0 font-mono text-[10px] tracking-[0.16em] text-ink-400"
              aria-hidden="true"
            >
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </span>
          ) : null}
        </figcaption>
      </figure>

      {hasGallery ? (
        <p id={statusId} className="sr-only" aria-live="polite" aria-atomic="true">
          {`Screenshot ${index + 1} of ${total}: ${active.label}`}
        </p>
      ) : null}

      {/* Segmented position indicator — one segment per screenshot. */}
      {hasGallery ? (
        <ol className="mt-3 flex gap-1.5" aria-hidden="true">
          {images.map((image, imageIndex) => (
            <li
              key={image.src}
              className={`h-[3px] flex-1 transition-colors duration-300 ${
                imageIndex === index ? "bg-accent-500" : "bg-rule-light"
              }`}
            />
          ))}
        </ol>
      ) : null}

      {/* Thumbnail navigation */}
      {hasGallery ? (
        <ul
          className="mt-3 flex gap-2 overflow-x-auto pb-1"
          aria-label={`${projectName} screenshot thumbnails`}
        >
          {images.map((image, imageIndex) => {
            const isActive = imageIndex === index;
            return (
              <li key={image.src} className="shrink-0">
                <button
                  type="button"
                  onClick={() => setIndex(imageIndex)}
                  aria-current={isActive ? "true" : undefined}
                  aria-label={`Show screenshot ${imageIndex + 1} of ${total}: ${image.label}`}
                  className={`relative block h-14 w-24 overflow-hidden border transition-all duration-300 sm:h-16 sm:w-28 ${
                    isActive
                      ? "border-accent-500 opacity-100 ring-2 ring-accent-500/25"
                      : "border-rule-light opacity-65 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt=""
                    aria-hidden="true"
                    fill
                    sizes="112px"
                    className="object-cover"
                  />
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
