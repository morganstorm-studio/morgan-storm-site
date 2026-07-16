export interface PlaceholderProject {
  name: string;
  category: string;
  description: string;
  placeholder: true;
}

/**
 * Development-stage placeholders only — no real client names, metrics, or
 * outcomes. Replace each entry with real project data when it's available.
 */
export const portfolioPlaceholders: PlaceholderProject[] = [
  {
    name: "Project One",
    category: "Website Strategy",
    description: "Full case study coming soon.",
    placeholder: true,
  },
  {
    name: "Project Two",
    category: "Digital Implementation",
    description: "Full case study coming soon.",
    placeholder: true,
  },
  {
    name: "Project Three",
    category: "Strategic Communications",
    description: "Full case study coming soon.",
    placeholder: true,
  },
];
