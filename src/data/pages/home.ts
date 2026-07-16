import type { CTA } from "../types";

export const hero: {
  eyebrow: string;
  headline: string;
  supporting: string;
  ctas: CTA[];
} = {
  eyebrow: "Strategic Communications · Digital Strategy · Ayurvedic Wellness",
  headline: "I turn complex ideas into clear, grounded paths forward.",
  supporting:
    "I work across digital strategy and Ayurvedic wellness, helping people create more clarity, alignment, and momentum in their work and lives.",
  ctas: [
    { label: "Explore Ayurvedic Wellness", href: "/ayurveda", variant: "primary" },
    { label: "Explore Web & Strategy", href: "/web", variant: "secondary" },
  ],
};

export const sharedThread = {
  heading: "Different paths. The same way of working.",
  supporting:
    "Whether I'm shaping a website or helping someone understand their body, my work begins with listening closely, finding what matters, and creating a grounded way forward.",
};

export const workingMethod = {
  steps: [
    {
      number: "01",
      title: "See the whole picture",
      description:
        "I look beyond the immediate task to understand the people, goals, systems, and context surrounding it.",
    },
    {
      number: "02",
      title: "Find the pattern",
      description: "I identify what is creating confusion, friction, or disconnection.",
    },
    {
      number: "03",
      title: "Build the path",
      description:
        "I translate insight into clear strategy, structure, communication, and practical next steps.",
    },
    {
      number: "04",
      title: "Carry it through",
      description: "I do not stop at ideas. I help implement, refine, and bring the work to completion.",
    },
  ],
};

export const pathForward = {
  caption: "Finding the path is only the beginning. Building it is the work.",
};

export const pathways: {
  web: { heading: string; supporting: string; cta: CTA };
  ayurveda: { heading: string; supporting: string; cta: CTA };
} = {
  web: {
    heading: "Bring the idea into form.",
    supporting:
      "Strategic websites, communications, and digital systems that help meaningful work become clearer, more usable, and easier to move forward.",
    cta: { label: "Explore Web & Strategy", href: "/web" },
  },
  ayurveda: {
    heading: "Align your life with the wisdom of your body.",
    supporting:
      "Personalized Ayurvedic guidance for entrepreneurial, growth-oriented women who want to work with their bodies rather than continually overriding them.",
    cta: { label: "Explore Ayurvedic Wellness", href: "/ayurveda" },
  },
};

export const introduction: {
  heading: string;
  copy: string;
  cta: CTA;
} = {
  heading: "I've always been drawn to the place where insight becomes action.",
  copy:
    "My path has moved through communications, leadership, web strategy, entrepreneurship, yoga, coaching, and Ayurveda. Across each chapter, I've been doing the same kind of work: listening closely, making sense of complexity, and helping meaningful ideas take form.",
  cta: { label: "More About Me", href: "/about" },
};

export const credibility = {
  items: [
    "8+ years across communications, implementation, operations, and organizational leadership",
    "600-hour Ayurvedic Wellness Counselor training",
    "200-hour registered yoga-teacher training",
    "Certified life-coaching background",
    "Experience building and refining 10+ websites",
  ],
};

export const awayBack: {
  heading: string;
  description: string;
  themes: string[];
  cta: CTA;
} = {
  heading: "A Way Back",
  description:
    "Writing on Ayurveda, yoga philosophy, body intelligence, transition, and finding a more grounded way to live.",
  themes: [
    "Ayurveda",
    "Yoga and Samkhya philosophy",
    "Body intelligence",
    "Seasonal rhythm",
    "Rest and sustainable energy",
    "Identity and transition",
  ],
  cta: { label: "Explore A Way Back", href: "/ayurveda" },
};

export const finalCTA: {
  heading: string;
  supporting: string;
  cta: CTA;
} = {
  heading: "Ready to find your next step?",
  supporting:
    "Whether you're building something meaningful or looking for a more grounded way forward, I'd love to hear what you're working through.",
  cta: { label: "Get in Touch", href: "/contact" },
};
