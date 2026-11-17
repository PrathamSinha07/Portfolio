import { Mail } from "lucide-react";

import Panel from "@/components/ui/Panel";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import SocialIcon from "@/components/ui/SocialIcon";
import { siteConfig } from "@/config/site";

export default function Contact() {
  return (
    <Section id="contact" tone="paper">
      <SectionHeading
        index="05"
        label="Contact"
        title="Get in touch"
        description="Open to Software Engineer and Java Full-Stack opportunities, collaborations, and interesting problems."
      />

      <Panel className="mt-12 px-5 py-8 sm:px-8 sm:py-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-600">
          Currently
        </p>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-700 sm:text-xl">
          {siteConfig.contact.availability}
        </p>

        <a
          href={`mailto:${siteConfig.contact.email}`}
          className="mt-8 inline-flex max-w-full items-center gap-3 text-xl font-semibold tracking-tight text-ink-950 transition-colors hover:text-accent-600 sm:text-3xl lg:text-4xl"
        >
          <Mail
            className="h-5 w-5 shrink-0 text-accent-500 sm:h-6 sm:w-6"
            aria-hidden="true"
          />
          <span className="break-words">{siteConfig.contact.email}</span>
        </a>

        <div className="mt-8 flex items-center gap-3 border-t border-rule-light pt-6">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink-400">
            Elsewhere
          </span>
          <span
            className="h-px w-6 bg-rule-light"
            aria-hidden="true"
          />
          {siteConfig.socials.map((social) => (
            <a
              key={social.id}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-rule-light text-ink-700 transition-colors hover:border-accent-500 hover:text-accent-600"
            >
              <SocialIcon id={social.id} className="h-4 w-4" />
            </a>
          ))}
        </div>
      </Panel>
    </Section>
  );
}
