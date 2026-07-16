import type { NavLink } from "./types";

export const siteTitle = "Morgan Storm";

export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Web", href: "/web" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Résumé", href: "/resume" },
  { label: "Ayurveda", href: "/ayurveda" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
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

/**
 * Configuration placeholders: `null` means Morgan hasn't supplied this yet.
 * Never invent a value here — consuming components must handle the `null`
 * case explicitly rather than rendering a fabricated link.
 */
export const contactEmail: string | null = null;
export const linkedInUrl: string | null = null;
export const substackUrl: string | null = null;
