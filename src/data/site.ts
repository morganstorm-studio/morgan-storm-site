import type { NavLink } from "./types";

export const siteTitle = "Morgan Storm";

/**
 * Portfolio and Résumé are reachable as nested children of Web & Strategy
 * and About, rather than as separate top-level items — keeps the primary
 * nav to four entries while still surfacing both routes directly.
 */
export const primaryNav: NavLink[] = [
  { label: "Web & Strategy", href: "/coming-soon", children: [{ label: "Portfolio", href: "/coming-soon" }] },
  { label: "Ayurveda", href: "/ayurveda" },
  { label: "About", href: "/coming-soon", children: [{ label: "Résumé", href: "/coming-soon" }] },
  { label: "Contact", href: "/coming-soon" },
];

export const footerNav: NavLink[] = primaryNav;

export const legalEntityLine = "Morgan Storm is a brand of Dhi Sangha LLC.";

/**
 * Centralized so an SVG replacement can be substituted later without
 * touching the components that consume it.
 */
export const logos = {
  primaryLockup: "/logos/morgan-storm-ahc-lockup.png",
  dhiSanghaMark: "/logos/dhi_sangha_mark.png",
};

export const contactEmail = "hello@morgan-storm.com";

/**
 * Configuration placeholders: `null` means Morgan hasn't supplied this yet.
 * Never invent a value here — consuming components must handle the `null`
 * case explicitly (omit the link entirely) rather than rendering a
 * fabricated URL or "coming soon" text.
 */
export const linkedInUrl: string | null = null;
export const substackUrl: string | null = null;
