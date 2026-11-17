import { ArrowUp } from "lucide-react";

import Container from "@/components/ui/Container";
import SocialIcon from "@/components/ui/SocialIcon";
import { siteConfig } from "@/config/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] bg-ink-950 text-white">
      <Container className="py-14 sm:py-16">
        <div className="flex flex-col gap-10 border-b border-white/[0.06] pb-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md">
            <p className="flex items-center gap-2.5 text-sm font-semibold uppercase tracking-[0.2em]">
              <span
                className="h-1.5 w-1.5 rounded-full bg-accent-500"
                aria-hidden="true"
              />
              {siteConfig.brand}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-300">
              {siteConfig.tagline}
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-ink-300 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            {siteConfig.socials.map((social) => (
              <a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-ink-200 transition-colors hover:border-accent-400 hover:text-white"
              >
                <SocialIcon id={social.id} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink-400">
            © {year} {siteConfig.name}. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <p className="text-xs text-ink-400">
              Built with Next.js, TypeScript, and Tailwind CSS.
            </p>
            <a
              href="#home"
              className="inline-flex items-center gap-2 text-xs text-ink-300 transition-colors hover:text-white"
            >
              Back to top
              <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
