import type { CTA } from "../types";

export const ayurvedaHero: {
  eyebrow: string;
  headline: string;
  supporting: string[];
  note: string;
  cta: CTA;
} = {
  eyebrow: "Personalized Ayurvedic Wellness Counseling",
  headline: "Come Back To Yourself",
  supporting: [
    "I support capable, ambitious women who are used to holding everything together uncover what your body is asking for, make meaningful changes, and help you feel more connected to yourself again.",
  ],
  note: "Complimentary 20 minute conversation. You do not need to know your dosha or have everything figured out before we talk.",
  cta: { label: "Book a Discovery Call", href: "https://calendar.app.google/7z7nWXgTYaoJVVVv6" },
};

export const accessibleIntro = {
  eyebrow: "A Personalized Approach to Wellness",
  heading: "Tired of one size fits all wellness advice?",
  paragraphs: [
    "Maybe you have tried the diets, supplements, routines, and health advice that seemed to work for someone else. But your energy is still low, your digestion feels unpredictable, your hormones feel off, or you keep being told everything looks normal when you know you do not feel like yourself.",
    "Ayurveda starts with a simple idea: different bodies need different things. The same food, routine, or wellness practice can support one person and leave another feeling bloated, anxious, sluggish, or depleted. Even the same symptom can have a different root cause from person to person.",
    "That is why we look at the whole picture, including your food, digestion, sleep, stress, cycle, routines, and current season of life. From there, we figure out which recommendations matter most for you and what you can realistically put into practice.",
  ],
  featuredStatement: "Your body is giving you information. Ayurveda helps you understand what it is asking for.",
};

export const whoMorganHelps = {
  heading: "You are doing your best, but something still feels off.",
  lead: "You are doing your best, but something still feels off.",
  intro:
    "You may be capable, productive, and used to holding a lot together. From the outside, you probably look like you are doing fine. But your body may be telling a different story.",
  now: {
    heading: "Where you may be now",
    items: [
      "You are tired more often than you think you should be, even when you are trying to take care of yourself.",
      "Stress, travel, irregular meals, or a busy schedule quickly show up as bloating, gas, constipation, cravings, or unpredictable digestion.",
      "Your hormones or cycle feel off, but you are not sure what your body is asking for.",
      "You have tried advice that worked for someone else, but it did not work the same way for you.",
      "You have been told everything looks normal, even though you know you do not feel fine.",
      "You want to feel better, but you do not have hours every day to follow a perfect wellness routine.",
    ],
  },
  together: {
    heading: "What we can build together",
    items: [
      "A clearer understanding of what your symptoms may be responding to.",
      "Food and meal rhythms that support your digestion, energy, and hormones.",
      "Simple routines that fit your actual schedule and capacity.",
      "More awareness of how stress, sleep, food, movement, travel, and your cycle affect one another.",
      "A personalized plan for helping your body return to a steadier place.",
      "More confidence in knowing what your body needs and how to respond.",
    ],
  },
  closing:
    "The goal is not perfect balance. It is knowing yourself well enough to recognize what is happening, understand what your body is asking for, and find your way back with more confidence and grace.",
};

export interface ServicePackage {
  eyebrow: string;
  tagline: string;
  title: string;
  price: string;
  priceNote?: string;
  minimumTerm?: string;
  description: string;
  features: string[];
  bestFor: string;
  recommended?: boolean;
}

export const servicePackages: {
  heading: string;
  supporting: string;
  packages: ServicePackage[];
  sharedCta: { supporting: string; cta: CTA };
  mealCompanion: { eyebrow: string; heading: string; description: string; examples: string[] };
} = {
  heading: "Choose the support that meets you where you are.",
  supporting: "You may only need help understanding one concern. You may want a complete personalized plan. Or you may know that receiving a plan is not the same as actually putting it into practice. You do not need to know which option is right before we talk. That is what the discovery call is for.",
  packages: [
    {
      eyebrow: "Focused insight into your body and current patterns",
      tagline: "Comprehensive Ayurvedic Consultation",
      title: "One private 90 minute session",
      price: "Introductory rate: $135",
      priceNote: "Normally $155",
      description: "This consultation gives us space to explore your health history, digestion, energy, sleep, stress, hormones, routines, lifestyle, and whatever has been making you feel like something is off.\n\nYou will leave with a clearer understanding of what your body may be responding to and specific recommendations for your next steps.",
      features: [
        "Comprehensive health and lifestyle intake",
        "Dosha and current imbalance assessment",
        "One private 90 minute consultation",
        "Personalized Ayurvedic recommendations",
        "Access to your Ayurvedic Meal Planning Companion",
      ],
      bestFor: "Best for someone who is new to Ayurveda or wants focused guidance around a specific concern.",
    },
    {
      eyebrow: "A complete assessment, personalized plan, and support putting it into practice",
      tagline: "Founding Client Package",
      title: "Three private sessions",
      price: "Introductory rate: $330",
      priceNote: "Normally $550",
      description: "Sometimes one conversation is enough to create clarity. But meaningful change often needs more space.\n\nThis package gives us time to understand your patterns, create a personalized food, lifestyle, and routine plan, and support you as you begin putting it into practice.\n\nWe will identify what matters most, introduce changes in a thoughtful order, and adjust the plan based on how your body responds.",
      features: [
        "Comprehensive health and lifestyle intake",
        "Dosha and current imbalance assessment",
        "One private 90 minute consultation",
        "One personalized recommendations session",
        "One follow up session for support and refinement",
        "Personalized food, lifestyle, and daily routine plan",
        "Access to your Ayurvedic Meal Planning Companion",
      ],
      bestFor: "Best for someone who wants a clear, personalized plan and help making it work in real life.",
      recommended: true,
    },
    {
      eyebrow: "Consistent support as you create meaningful changes week by week",
      tagline: "Ongoing Ayurvedic Coaching",
      title: "Rebuild Your Foundations",
      price: "Introductory rate: $550/month",
      priceNote: "Normally $850/month",
      minimumTerm: "Three-month minimum",
      description: "We begin with a comprehensive consultation and personalized plan, then meet weekly to help you put your recommendations into practice. Together, we notice what is changing, troubleshoot what is not working, and adapt your plan as your body and life evolve.",
      features: [
        "Comprehensive consultation and personalized plan",
        "Weekly private coaching sessions",
        "Support with food, sleep, boundaries, and meditation",
        "Movement, stress, and cycle support",
        "Step by step implementation support",
        "Adjustments as your needs, symptoms, and schedule change",
        "Troubleshooting, accountability, and encouragement",
        "Access to your Ayurvedic Meal Planning Companion",
      ],
      bestFor: "Best for someone who wants consistent, personalized support and accountability.",
    },
  ],
  sharedCta: {
    supporting: "Not sure where to begin? That is completely okay. Tell me what has been going on, and we will talk through which level of support makes the most sense.",
    cta: { label: "Book a Discovery Call", href: "https://calendar.app.google/7z7nWXgTYaoJVVVv6" },
  },
  mealCompanion: {
    eyebrow: "Included With Every Paid Service",
    heading: "Your Ayurvedic Meal Planning Companion",
    description: "Knowing which foods support you is helpful. Figuring out what to make for dinner on a random Tuesday is a different challenge.\n\nYour Ayurvedic Meal Planning Companion is a personalized ChatGPT resource created around your individual food recommendations. Use it for realistic meal ideas, recipes, grocery lists, substitutions, and weekly plans based on your schedule and what you already have at home.",
    examples: [
      "What can I make with what I already have?",
      "Is this meal good for my dosha?",
    ],
  },
};

export const consultationDetail = {
  eyebrow: "Your First Consultation",
  heading: "A whole person consultation, not a quick dosha quiz.",
  paragraphs: [
    "A real Ayurvedic consultation goes much deeper than taking a short quiz and being told to drink warm water.",
    "We talk about your health history, digestion, bowel movements, appetite, cravings, sleep, energy, cycle, hormones, stress, routines, medications, coping habits, and what your life actually looks like.",
    "I want the honest version, not the version you think sounds healthy enough. The more honestly we can look at what is happening, the better we can understand what your body may be responding to and where change could make the biggest difference.",
  ],
  pullQuote:
    "You are always welcome to pause, ask why something is relevant, or choose not to discuss something you are not comfortable sharing. You remain in control of what you share.",
  topics: [
    {
      title: "Your health story",
      description:
        "Your current concerns, family history, diagnoses, surgeries, medications, treatments, and what you have already tried.",
    },
    {
      title: "Digestion and elimination",
      description:
        "Your appetite, cravings, bloating, gas, bowel movements, and how your digestion changes with stress, travel, your cycle, or irregular routines. Yes, we talk about poop.",
    },
    {
      title: "Hormones and menstrual health",
      description: "Your cycle, periods, PMS, hormonal patterns, fertility, and reproductive history when relevant. Yes, we talk about periods too.",
    },
    {
      title: "Energy, sleep, and stress",
      description: "Your energy throughout the day, how you sleep, what stress feels like in your body, and what tends to drain or restore you.",
    },
    {
      title: "Your actual life",
      description:
        "Your work, travel, meals, movement, rest, relationships, responsibilities, and what you realistically have the capacity to change.",
    },
    {
      title: "Coping habits",
      description:
        "Caffeine, alcohol, cannabis, nicotine, emotional eating, scrolling, and the things you reach for when life feels like a lot. There is no moral judgment here. We are simply looking at the whole picture.",
    },
  ],
  whatThisIsNot: {
    heading: "What This Is Not",
    items: [
      "This is not a medical diagnosis or replacement for care from a licensed provider.",
      "This is not the same plan copied and pasted for every person.",
      "This is not an expectation that you change your entire life overnight.",
      "This is not about blaming you for your symptoms. It is a space to understand your patterns, explore what may be contributing to how you feel, and create a more supportive way forward.",
    ],
  },
};

export const howToBegin: {
  heading: string;
  steps: { number: string; title: string; description: string }[];
  cta: CTA;
} = {
  heading: "Here is how we get started.",
  steps: [
    {
      number: "1",
      title: "Book a discovery call",
      description:
        "We will spend 20 minutes talking about what has been going on, what you are looking for, and whether working together feels like a good fit.",
    },
    {
      number: "2",
      title: "Choose your support",
      description:
        "After the call, I will send you the appropriate agreement, payment link, intake materials, and scheduling information.",
    },
    {
      number: "3",
      title: "Complete your consultation",
      description: "Complete your intake and dosha assessment at least 48 hours before your first session. Then we will sit down for your private 90 minute consultation.",
    },
  ],
  cta: { label: "Book a Discovery Call", href: "https://calendar.app.google/7z7nWXgTYaoJVVVv6" },
};

export const aboutMorganAyurveda = {
  eyebrow: "Meet Your Counselor",
  heading: "Hi, I'm Morgan.",
  paragraphs: [
    "I know what it feels like to keep pushing while quietly knowing something is not right. Leaving law school, navigating chronic stress, and facing thyroid cancer changed the course of my life. What once felt like everything falling apart became the beginning of learning how to listen to my body and build a life that felt more like my own.",
    "I set off to complete my yoga teacher training, life coach certification, and 600 hour Ayurvedic Wellness Counselor training. Ayurveda teaches that balance is not something we achieve once and keep forever. Life happens. We lose our rhythm. What matters is learning to recognize what your body needs and knowing how to return.",
    "Now, I support capable, ambitious women who are used to holding everything together. I help them understand their bodies, make meaningful changes, and feel more connected to themselves again.",
  ],
  cta: { label: "Let Me Support You", href: "https://calendar.app.google/7z7nWXgTYaoJVVVv6" },
  closing: "",
};

export const ayurvedaFAQ: { heading: string; items: { question: string; answer: string }[] } = {
  heading: "Frequently asked questions",
  items: [
    {
      question: "Do I need to book a discovery call first?",
      answer:
        "Yes. New clients begin with a complimentary discovery call so we can talk about what has been going on, answer your questions, and decide which service feels like the best fit.",
    },
    {
      question: "Do I need to know my dosha?",
      answer: "Not at all. Exploring your constitution and current patterns is part of the intake and consultation process.",
    },
    {
      question: "Will I need to follow a strict Ayurvedic diet?",
      answer:
        "You may receive specific food recommendations, and depending on what is happening, they may be fairly comprehensive. But they will be personalized to you. We will focus on what matters most and what you can realistically put into practice. You do not have to do everything perfectly for the work to help.",
    },
    {
      question: "Are appointments virtual or in person?",
      answer: "Appointments are currently offered virtually, so you can join from the comfort and privacy of your home.",
    },
    {
      question: "Is Ayurvedic counseling medical treatment?",
      answer:
        "No. Ayurvedic wellness counseling is educational and supportive. It does not diagnose disease, prescribe medication, or replace treatment from a licensed healthcare professional. It can be used alongside the care you already receive.",
    },
    {
      question: "Do I have to discuss everything listed in the consultation section?",
      answer:
        "No. You are always welcome to pause, ask why a question matters, or choose not to discuss something. I will invite honesty, but you remain in control of what you share.",
    },
    {
      question: "Can I begin with one consultation and receive more support later?",
      answer:
        "Yes. You can begin with a single consultation and decide later whether the three session package or ongoing coaching would be helpful.",
    },
    {
      question: "How do payment and scheduling work?",
      answer: "After your discovery call, I will send the appropriate agreement and payment link. Once those are completed, you will receive your intake materials and scheduling link. Your forms should be submitted at least 48 hours before your first appointment.",
    },
  ],
};

export const ayurvedaInvitation: {
  heading: string;
  supporting: string;
  cta: CTA;
} = {
  heading: "You do not have to keep guessing about what your body needs.",
  supporting: "Maybe you already know something feels off. Maybe you are moving through a major transition and need help staying connected to yourself. Or maybe you are simply ready to understand your body in a deeper and more personal way. Come talk to me. Tell me what has been going on. We will figure out the next step together.",
  cta: { label: "Book a Discovery Call", href: "https://calendar.app.google/7z7nWXgTYaoJVVVv6" },
};
