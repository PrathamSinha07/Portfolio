import { ArrowUpRight, Mail } from "lucide-react";

import Section from "@/components/ui/Section";
import SocialIcon from "@/components/ui/SocialIcon";
import { siteConfig } from "@/config/site";

export default function Contact() {
  return (
    <Section id="contact" tone="paper">
      <div className="grid gap-10 border-t border-rule-light pt-14 lg:grid-cols-12 lg:gap-16 lg:pt-16">
        <div className="min-w-0 lg:col-span-8">
          <p className="flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-accent-600">
            <span className="h-px w-8 bg-accent-500" aria-hidden="true" />
            06 — Contact
          </p>

          <h2 className="mt-6 text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.04] tracking-[-0.04em] text-balance text-ink-950">
            {siteConfig.contact.headline}
          </h2>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-600 sm:text-lg">
            {siteConfig.contact.subheading}
          </p>

          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="group mt-9 inline-flex max-w-full items-center gap-3 border-b-2 border-accent-500/60 pb-2 text-[clamp(1.05rem,4vw,1.75rem)] font-medium tracking-tight text-ink-950 transition-colors duration-300 hover:border-accent-600 hover:text-accent-600"
          >
            <Mail
              className="h-5 w-5 shrink-0 text-accent-500"
              aria-hidden="true"
            />
            <span className="min-w-0 wrap-anywhere">
              {siteConfig.contact.email}
            </span>
          </a>
        </div>

        <div className="min-w-0 lg:col-span-3 lg:col-start-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-400">
            Elsewhere
          </p>

          <ul className="mt-4 border-t border-rule-light">
            {siteConfig.socials.map((social) => (
              <li key={social.id}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex items-center justify-between gap-4 border-b border-rule-light py-4 text-sm font-medium text-ink-800 transition-colors duration-300 hover:text-accent-600"
                >
                  <span className="flex items-center gap-3">
                    <SocialIcon id={social.id} className="h-4 w-4" />
                    {social.label}
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 text-ink-300 motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover/link:-translate-y-0.5 motion-safe:group-hover/link:translate-x-0.5 motion-safe:group-hover/link:text-accent-600"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}

            <li>
              <a
                href={siteConfig.resume.href}
                download={siteConfig.resume.fileName}
                className="group/link flex items-center justify-between gap-4 border-b border-rule-light py-4 text-sm font-medium text-ink-800 transition-colors duration-300 hover:text-accent-600"
              >
                <span className="flex items-center gap-3">
                  {siteConfig.resume.label}
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-400">
                    PDF
                  </span>
                </span>
                <ArrowUpRight
                  className="h-4 w-4 text-ink-300 motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover/link:-translate-y-0.5 motion-safe:group-hover/link:translate-x-0.5 motion-safe:group-hover/link:text-accent-600"
                  aria-hidden="true"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
