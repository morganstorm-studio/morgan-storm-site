import type { CTA } from "../types";

export const ayurvedaHero: {
  eyebrow: string;
  headline: string;
  supporting: string;
  cta: CTA;
} = {
  eyebrow: "Personalized Ayurvedic Counseling",
  headline: "Create a way of living that truly supports you.",
  supporting:
    "Ayurvedic counseling helps you understand your body's unique needs and make personalized changes to your food, routines, sleep, stress, and lifestyle.",
  cta: { label: "Book a Discovery Call", href: "/coming-soon" },
};

export const accessibleIntro = {
  eyebrow: "A Different Way to Understand Wellness",
  heading: "What if your well-being didn't begin with another set of rules?",
  paragraphs: [
    "Ayurveda is a traditional system of holistic wellness built around a simple idea: different people need different kinds of support. Your natural constitution, digestion, sleep, stress, environment, routines, and current stage of life all affect what helps you feel balanced. Instead of following a generic wellness plan, Ayurvedic counseling helps you notice your individual patterns and make thoughtful changes that fit your real life.",
    "Recommendations may include food, meal timing, daily rhythms, movement, rest, meditation, breathwork, and other supportive practices.",
  ],
};

export const whoMorganHelps = {
  transition: "You're capable of holding a lot. Your body may be asking for a steadier way to do it.",
  now: {
    heading: "Where you may be now",
    items: [
      "You are tired more often than you think you should be—even when you are doing your best to take care of yourself.",
      "Stress, travel, irregular meals, or a busy schedule quickly show up as bloating, constipation, discomfort, or unpredictable digestion.",
      "You want supportive routines, but you do not have hours each morning to cook, journal, meditate, exercise, and do everything “right.”",
      "Your mind and schedule rarely slow down, and you are craving more grounding, consistency, and ease.",
    ],
  },
  together: {
    heading: "What we can build together",
    items: [
      "More stable energy that supports your work and life without relying on constant pushing.",
      "Meals and food rhythms that help you feel nourished and comfortable—even during busy weeks or travel.",
      "Simple routines that calm your system without taking over your day.",
      "A steadier, more grounded relationship with your body, so you know how to respond when life gets demanding.",
    ],
  },
  closing:
    "The goal is not to make your life smaller. It is to help your body feel supported within the full life you are building.",
};

export interface ServicePackage {
  eyebrow: string;
  tagline: string;
  title: string;
  price: string;
  priceNote?: string;
  description: string;
  features: string[];
  bestFor: string;
  cta: CTA;
  recommended?: boolean;
}

export const servicePackages: {
  heading: string;
  supporting: string;
  packages: ServicePackage[];
  mealCompanion: { eyebrow: string; heading: string; description: string; example: string };
} = {
  heading: "Choose the support that meets you where you are.",
  supporting: "Personalized insight, a clear plan, or weekly support integrating it into your life.",
  packages: [
    {
      eyebrow: "Comprehensive Ayurvedic Consultation",
      tagline: "Personalized insight into how you feel.",
      title: "One private 90-minute session",
      price: "$135",
      description: "A focused introduction to your constitution, patterns, and what may help.",
      features: [
        "Health & lifestyle intake, dosha assessment",
        "Private 90-minute consultation",
        "Personalized Ayurvedic recommendations",
        "Access to the Meal Planning Companion",
      ],
      bestFor: "Best for: new to Ayurveda, or want focused insight.",
      cta: { label: "Book a Discovery Call", href: "/coming-soon" },
    },
    {
      eyebrow: "Founding Client Package",
      tagline: "Insight, plus a clear plan.",
      title: "Three private sessions",
      price: "Introductory offer: $330",
      priceNote: "Normally $550",
      description: "A full assessment, a personalized plan, and support putting it into practice.",
      features: [
        "Consultation + two follow-up sessions",
        "Health & lifestyle intake, dosha assessment",
        "Personalized food, lifestyle & routine plan",
        "Meal Planning Companion access",
      ],
      bestFor: "Best for: want a clear plan and support using it.",
      cta: { label: "Choose the Three-Session Package", href: "/coming-soon" },
      recommended: true,
    },
    {
      eyebrow: "Ongoing Ayurvedic Coaching",
      tagline: "A plan, integrated week by week.",
      title: "Rebuild Your Foundations",
      price: "$550/month introductory rate",
      priceNote: "Normally $850/month · 3-mo minimum",
      description:
        "Includes your initial consultation and plan, plus weekly support integrating it into your meals, routines, work, travel, and daily life.",
      features: [
        "Initial consultation & personalized plan",
        "Weekly private coaching sessions",
        "Step-by-step implementation",
        "Ongoing troubleshooting as life changes",
      ],
      bestFor: "Best for: want consistent support making it last.",
      cta: { label: "Book a Discovery Call", href: "/coming-soon" },
    },
  ],
  mealCompanion: {
    eyebrow: "Included with Every Paid Service",
    heading: "Your Ayurvedic Meal Planning Companion",
    description:
      "A personalized ChatGPT resource that helps turn your recommendations into realistic meal ideas, grocery lists, recipes, and weekly plans.",
    example: "“What can I make with what's in my fridge?”",
  },
};

export const consultationDetail = {
  eyebrow: "Consultation",
  heading: "A whole-person consultation — not a quick dosha quiz.",
  paragraphs: [
    "Your first session is a comprehensive, private conversation about your health history, how your body functions day to day, and the life your recommendations need to work within.",
    "We go beyond a list of symptoms to understand the patterns connecting your digestion, energy, sleep, stress, routines, environment, and past experiences.",
  ],
  pullQuote:
    "These questions are not about finding something you are doing wrong. They help us understand the full context of what your body is responding to.",
  note: "You are always welcome to pause, ask why something is relevant, or choose not to discuss something you are not comfortable sharing.",
  topics: [
    {
      title: "Your health story",
      description:
        "Family history, current concerns, past diagnoses, surgeries, medications, and what you've already tried.",
    },
    {
      title: "Digestion & elimination",
      description:
        "Appetite, cravings, bloating, bowel movements, and how digestion shifts with stress, travel, or disrupted routines. Yes, we talk about poop.",
    },
    {
      title: "Hormones & menstrual health",
      description: "Cycle, periods, PMS, hormonal patterns, and reproductive history, when relevant. Yes, we talk about periods too.",
    },
    {
      title: "Energy, sleep & stress",
      description: "Daily energy, sleep quality, stress response, mood, and what drains or restores you.",
    },
    {
      title: "Your actual life",
      description:
        "Work, travel, meals, movement, rest, morning and evening routines, relationships, and realistic capacity for change.",
    },
    {
      title: "Substances & coping habits",
      description:
        "Caffeine, alcohol, cannabis, nicotine, and other coping habits — discussed without judgment, only as they relate to how you feel.",
    },
  ],
  whatThisIsNot: {
    heading: "What this is not",
    items: [
      "Not a medical diagnosis or replacement for licensed care",
      "Not a rigid protocol handed over after one conversation",
      "Not an expectation that you change everything at once",
    ],
  },
};

export const howToBegin: {
  heading: string;
  steps: { number: string; title: string; description: string }[];
  cta: CTA;
} = {
  heading: "How to begin.",
  steps: [
    {
      number: "1",
      title: "Choose how you want to begin",
      description:
        "Book a consultation or package directly, or start with a complimentary intro call if you're unsure which fits, or considering ongoing coaching.",
    },
    {
      number: "2",
      title: "Complete your forms",
      description:
        "You'll receive a health & lifestyle intake, a dosha assessment, and prep instructions — complete at least 48 hours before your appointment.",
    },
    {
      number: "3",
      title: "Meet with Morgan",
      description: "Attend your private 90-minute consultation. Recommendations and next steps depend on the service you select.",
    },
  ],
  cta: { label: "Book a Discovery Call", href: "/coming-soon" },
};

export const aboutMorganAyurveda = {
  eyebrow: "Your Counselor",
  heading: "Hi, I'm Morgan.",
  paragraphs: [
    "I came to Ayurveda after years of trying to hold a lot at once—work, healing, ambition, and the pressure to keep moving even when my body was asking for something different.",
    "Through my own experiences with illness, stress, and major life changes, I learned that feeling better did not come from more rules or more self-control. It came from understanding what my body was communicating and building support around the life I was actually living.",
    "Now, as a 600-hour Ayurvedic Wellness Counselor and 200-hour yoga teacher, I help thoughtful, high-capacity women understand the patterns behind their digestion, energy, sleep, stress, and routines—and create practical changes they can realistically sustain.",
  ],
  closing: "My approach is grounded, compassionate, and rooted in the belief that your body is not a problem to fix. It is something you can learn to understand and trust.",
};

export const ayurvedaFAQ: { heading: string; items: { question: string; answer: string }[] } = {
  heading: "Frequently asked questions",
  items: [
    {
      question: "Do I need to book an introductory call first?",
      answer:
        "No. If you already know you'd like to begin, book and pay for a consultation or package directly. The complimentary call is for new clients, coaching-curious visitors, or anyone unsure which service fits.",
    },
    {
      question: "Do I need to know my dosha?",
      answer: "No. Exploring your constitution and current patterns is part of the process.",
    },
    {
      question: "Will I need to follow a strict Ayurvedic diet?",
      answer:
        "No. Recommendations are personalized and introduced gradually — the goal is to make eating more supportive, not more stressful.",
    },
    {
      question: "Are appointments virtual or in person?",
      answer: "[Placeholder — confirm available formats]",
    },
    {
      question: "Is Ayurvedic counseling medical treatment?",
      answer:
        "No. Ayurvedic wellness counseling is educational and supportive — it does not diagnose disease, prescribe medication, or replace treatment from a licensed medical provider.",
    },
    {
      question: "Do I have to discuss everything listed in the consultation section?",
      answer:
        "No. You're welcome to pause, ask why a question is relevant, or decline to discuss something. The consultation is collaborative and consent-based.",
    },
    {
      question: "Can I begin with one consultation and move into a package later?",
      answer:
        "Yes. Many clients start with a single consultation and continue into the three-session package or ongoing coaching once they know it's a good fit.",
    },
    {
      question: "How do payment and scheduling work?",
      answer: "[Placeholder — confirm booking platform, payment flow, and scheduling details before hi-fi]",
    },
  ],
};

export const ayurvedaInvitation: {
  heading: string;
  supporting: string;
  cta: CTA;
} = {
  heading: "Ready to understand what your body needs?",
  supporting: "Start with a complimentary conversation, or book your consultation directly if you already know you'd like to begin.",
  cta: { label: "Book a Discovery Call", href: "/coming-soon" },
};
