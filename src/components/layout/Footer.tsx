import { ArrowUpRight } from "lucide-react";

import Container from "@/components/ui/Container";
import SocialIcon from "@/components/ui/SocialIcon";
import { siteConfig } from "@/config/site";

/**
 * Charcoal closing plate — the one dark surface in the composition, carrying
 * the name, section links, email, the year and the closing line.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-rule-dark bg-ink-950 text-paper-100">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="min-w-0 lg:col-span-6">
            <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em]">
              <span
                className="flex h-7 w-7 items-center justify-center border border-white/25 font-mono text-[10px] font-medium tracking-[0.04em]"
                aria-hidden="true"
              >
                PS
              </span>
              {siteConfig.brand}
            </p>

            <p className="mt-5 max-w-md font-serif text-lg italic leading-relaxed text-ink-200">
              {siteConfig.footer.closing}
            </p>

            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="mt-6 inline-flex items-center gap-2 border-b border-white/25 pb-1 text-sm text-paper-100 transition-colors duration-300 hover:border-accent-400 hover:text-accent-400"
            >
              {siteConfig.contact.email}
            </a>
          </div>

          <nav aria-label="Footer" className="min-w-0 lg:col-span-3 lg:col-start-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-ink-400">
              Sections
            </p>
            <ul className="mt-4 space-y-2.5">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-ink-200 transition-colors duration-300 hover:text-accent-400"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="min-w-0 lg:col-span-2 lg:col-start-11">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-ink-400">
              Profiles
            </p>
            <ul className="mt-4 space-y-2.5">
              {siteConfig.socials.map((social) => (
                <li key={social.id}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-2 text-sm text-ink-200 transition-colors duration-300 hover:text-accent-400"
                  >
                    <SocialIcon id={social.id} className="h-4 w-4" />
                    {social.label}
                    <ArrowUpRight
                      className="h-3.5 w-3.5 opacity-60 motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover/link:-translate-y-0.5 motion-safe:group-hover/link:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={siteConfig.resume.href}
                  download={siteConfig.resume.fileName}
                  className="inline-flex items-center gap-2 text-sm text-ink-200 transition-colors duration-300 hover:text-accent-400"
                >
                  {siteConfig.resume.label}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-rule-dark pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink-300">
            © {year} {siteConfig.name}. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <p className="text-xs text-ink-300">
              Built with Next.js, TypeScript and Tailwind CSS.
            </p>
            <a
              href="#home"
              className="inline-flex items-center gap-2 text-xs text-ink-200 transition-colors duration-300 hover:text-accent-400"
            >
              Back to top
              <ArrowUpRight
                className="h-3.5 w-3.5 -rotate-45"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
