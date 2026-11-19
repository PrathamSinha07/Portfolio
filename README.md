# Pratham Sinha — Portfolio

A single-page editorial portfolio for **Pratham Sinha — AI Engineer · Software
Developer · AI Integration**. A warm charcoal hero over warm ivory paper,
charcoal typography, a restrained lime accent, large display type and a strict
hairline grid.

Built with **Next.js 16 (App Router) · TypeScript · Tailwind CSS 4 · Motion**.

## Sections

| # | Section | Source |
| --- | --- | --- |
| — | Hero — warm charcoal band: name, headline, status, CTAs, cursor spotlight, animated terminal | `src/components/sections/Hero.tsx` |
| 01 | About | `src/components/sections/About.tsx` |
| 02 | Featured projects (4, three distinct layouts) | `src/components/sections/Projects.tsx` |
| 03 | Skills (6 categories, no proficiency levels) | `src/components/sections/Skills.tsx` |
| 04 | Experience & education | `src/components/sections/Experience.tsx` |
| 05 | Beyond the Code | `src/components/sections/BeyondTheCode.tsx` |
| 06 | Contact | `src/components/sections/Contact.tsx` |

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

Quality gates — all three must pass:

```bash
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit
npm run build      # production build
```

## Where the content lives

Everything a visitor reads is data, not markup:

- `src/config/site.ts` — positioning, hero copy, about, contact details, nav,
  social profiles, resume path, footer line.
- `src/data/projects.ts` — the four projects: description, verified
  highlights, stack, GitHub link, live deployment and preview asset.
- `src/data/skills.ts` — the six skill categories (plain technology names only,
  never percentages or ratings).
- `src/data/experience.ts` — internship and education entries.

Project previews are genuine screenshots in `public/images/projects/`, except
Smart Delivery Tracking System, whose repository contains no screenshots — it
gets `DeliveryFlow.tsx`, a diagram built strictly from the behaviour documented
in that repository's README (status workflow, REST endpoints, persistence).

## Resume

`public/resume/Pratham-Sinha-Resume.pdf` is generated — not hand-edited — from
the same profile data shown on the site:

```bash
npm run resume
```

The generator (`scripts/generate-resume.mjs`) is dependency-free and writes a
plain PDF 1.4 file using the base-14 Helvetica fonts. Every nav, hero, contact
and footer resume link downloads this file.

## Configuration

| Variable | Purpose |
| --- | --- |
| `SITE_URL` | Canonical origin used for Open Graph / Twitter image URLs. When unset, metadata points at the copy committed in this repository, so builds never reference `localhost` or a host that does not exist. |

```bash
SITE_URL=https://example.com npm run build
```

## Design system

Defined once in `src/app/globals.css`:

- **Paper** `#faf8f2 → #ded9c9` — page surfaces
- **Ink** `#191813 → #c7c4b4` — warm charcoal type scale (the hero and footer
  are the deliberately dark surfaces)
- **Accent** `#d9f18f → #567a0d` — a restrained lime for rules, indices, links
  and the status marker
- Hairline rules instead of pills and drop shadows; rectangular controls; the
  display serif italic is reserved for accent words in section titles.

## Accessibility & behaviour

- Semantic landmarks (`header`, `nav`, `main`, `footer`), one `h1`, ordered
  headings, skip link, visible focus rings.
- All screenshots carry descriptive `alt` text; decorative marks are
  `aria-hidden`.
- `prefers-reduced-motion` disables entrance animation, blinking caret, pulse
  and smooth scrolling.
- Mobile navigation opens with `aria-expanded`, traps nothing, and closes on
  Escape.
- Verified at 360 px, 768 px and 1440 px, with no console errors, failed
  requests or broken external links.
