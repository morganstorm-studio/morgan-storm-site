import type { SEODefaults } from "./types";

/**
 * `defaultImage` points at a file that does not exist yet
 * (`public/og-default.jpg` is a still-missing asset — see plan §14).
 * Left as a configured path rather than omitted so `SEO.astro` has a
 * single, obvious place to source it from once the image is supplied.
 */
export const seoDefaults: SEODefaults = {
  titleTemplate: "%s — Morgan Storm",
  defaultTitle: "Morgan Storm",
  defaultDescription:
    "Morgan Storm — strategic communications, digital strategy, and Ayurvedic wellness.",
  defaultImage: "/og-default.jpg",
  siteName: "Morgan Storm",
};
