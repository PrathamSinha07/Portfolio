"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Download, Menu, X } from "lucide-react";

import Container from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

const MOBILE_LINK_CLASSES =
  "flex items-center justify-between gap-4 border-b border-rule-light py-3.5 text-base font-medium transition-colors";

/**
 * Minimal sticky navigation: the PS wordmark, the five section links and a
 * resume download. The bar is always the warm paper surface — the page has no
 * dark hero to sit against.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const reduceMotion = useReducedMotion();

  /* Hairline appears once the page has moved. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Highlight the section currently in view. */
  useEffect(() => {
    const sections: HTMLElement[] = [];
    for (const item of siteConfig.nav) {
      const el = document.querySelector<HTMLElement>(item.href);
      if (el) sections.push(el);
    }
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  /* Dismiss the mobile menu with Escape. */
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const duration = reduceMotion ? 0 : 0.25;

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-paper-50/85 backdrop-blur-md transition-[border-color,box-shadow] duration-300 ${
        scrolled
          ? "border-rule-light shadow-[0_1px_0_rgba(25,24,19,0.04),0_16px_32px_-28px_rgba(25,24,19,0.5)]"
          : "border-rule-light/60"
      }`}
    >
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-[4.5rem]">
        <a
          href="#home"
          className="group flex shrink-0 items-center gap-3 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-ink-950 sm:text-sm sm:tracking-[0.2em]"
        >
          <span
            aria-hidden="true"
            className="flex h-7 w-7 items-center justify-center border border-ink-950/25 font-mono text-[10px] font-medium tracking-[0.04em] transition-colors duration-300 group-hover:border-accent-500 group-hover:bg-accent-500/10"
          >
            PS
          </span>
          <span>{siteConfig.brand}</span>
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-0.5">
            {siteConfig.nav.map((item) => {
              const isActive = activeId === item.href.slice(1);
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative block px-3 py-2 text-sm transition-colors duration-300 ${
                      isActive
                        ? "text-ink-950"
                        : "text-ink-400 hover:text-ink-950"
                    }`}
                  >
                    {item.label}
                    {isActive ? (
                      <span
                        className="absolute inset-x-3 -bottom-0.5 h-px bg-accent-500"
                        aria-hidden="true"
                      />
                    ) : null}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={siteConfig.resume.href}
            download={siteConfig.resume.fileName}
            className="hidden items-center gap-2 border border-ink-950/20 px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-ink-950 transition-colors duration-300 hover:border-ink-950 hover:bg-ink-950 hover:text-paper-50 lg:inline-flex"
          >
            <Download className="h-3.5 w-3.5" aria-hidden="true" />
            {siteConfig.resume.label}
          </a>

          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center border border-ink-950/15 text-ink-950 transition-colors duration-300 hover:border-ink-950/40 hover:bg-ink-950/5 lg:hidden"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.nav
            id="mobile-navigation"
            aria-label="Mobile"
            key="mobile-navigation"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration, ease: [0.25, 1, 0.5, 1] }}
            className="overflow-hidden border-t border-rule-light bg-paper-50 lg:hidden"
          >
            <Container className="py-4">
              <ul>
                {siteConfig.nav.map((item) => {
                  const isActive = activeId === item.href.slice(1);
                  return (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        aria-current={isActive ? "true" : undefined}
                        onClick={() => setOpen(false)}
                        className={`${MOBILE_LINK_CLASSES} ${
                          isActive
                            ? "text-ink-950"
                            : "text-ink-600 hover:text-ink-950"
                        }`}
                      >
                        {item.label}
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            isActive ? "bg-accent-500" : "bg-transparent"
                          }`}
                          aria-hidden="true"
                        />
                      </a>
                    </li>
                  );
                })}
              </ul>

              <a
                href={siteConfig.resume.href}
                download={siteConfig.resume.fileName}
                onClick={() => setOpen(false)}
                className="mt-5 inline-flex items-center gap-2 border border-ink-950/20 px-4 py-2.5 text-xs font-medium uppercase tracking-[0.14em] text-ink-950 transition-colors duration-300 hover:border-ink-950 hover:bg-ink-950 hover:text-paper-50"
              >
                <Download className="h-3.5 w-3.5" aria-hidden="true" />
                {siteConfig.resume.label}
              </a>
            </Container>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
