import type { Metadata, Viewport } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { siteConfig } from "@/config/site";

import "./globals.css";

/**
 * Canonical origin for social previews. Optional: when it is not configured
 * (local builds, first checkout) the Open Graph image falls back to the copy
 * committed in the repository, so the metadata never points at localhost or at
 * a host that does not exist. Set SITE_URL when deploying, e.g.
 * SITE_URL=https://example.com npm run build
 */
const siteUrl = process.env.SITE_URL?.trim().replace(/\/+$/, "");

const socialImage = siteUrl
  ? new URL("/images/og.png", siteUrl).toString()
  : "https://raw.githubusercontent.com/PrathamSinha07/Portfolio/main/public/images/og.png";

export const metadata: Metadata = {
  title: {
    default: siteConfig.meta.title,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.meta.description,
  keywords: siteConfig.meta.keywords,
  authors: [{ name: siteConfig.name }],
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  openGraph: {
    title: siteConfig.meta.title,
    description: siteConfig.meta.description,
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        alt: "Pratham Sinha — AI Engineer and Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.meta.title,
    description: siteConfig.meta.description,
    images: [socialImage],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#faf8f2",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: "AI Engineer",
  email: `mailto:${siteConfig.contact.email}`,
  url: siteConfig.socials[1].href,
  sameAs: siteConfig.socials.map((social) => social.href),
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "MIT World Peace University, Pune",
  },
  knowsAbout: [
    "Software Engineering",
    "AI Integration",
    "Generative AI",
    "Backend Development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="bg-paper-50 font-sans text-ink-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-ink-950 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-paper-50 focus:shadow-lg"
        >
          Skip to content
        </a>

        <Navbar />

        <main id="main-content">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
