// src/db/services.ts

export type Benefit = { title: string; description: string };
export type CardColor = "light-green" | "light-pink" | "light-orange";
export type Card = { title: string; tag: string; color: CardColor; image: string; href: string };

export const SERVICE_HEADLINE = {
  title: "I handle your product design, so you can focus on what matters.",
  subtitle: "I handle your product design so you can focus on what matters.",
  description:
    "For 12,000 DKK/month, get up to 20 hours of expert product, UX & UI design. Start with a free discovery call to set priorities, then focus on what matters each month.",
} as const;

export const SERVICE_FEATURES_DESIGN_SUPPORT: string[] = [
  "UI & UX Design. Interfaces that make sense.",
  "Website Design. Site that look great & drive results.",
  "Product Design. Simplifying complex software.",
  "Mobile App Design. Clean, intuitive apps.",
  "Branding. A clear, consistent voice with typography, colors, and icons that stick.",
  "Project management & Weekly Updates",
];

export const SERVICE_FEATURES_BENEFITS: Benefit[] = [
  { title: "We set priorities together", description: "Focus on what matters." },
  { title: "Fast turnaround", description: "Tasks completed within 48 hours." },
  { title: "Cancel anytime", description: "No hiring hassle, no long contracts." },
  { title: "One trusted partner", description: "From audits to dev handoffs." },
];

export const SERVICE_FEATURES_CTA_CARD: Card = {
  title: "Building a Scalable Design System for an SEO SaaS Platform",
  tag: "Case study",
  color: "light-green",
  image: "/images/seosaas.png",
  href: "/work/designsystemseo",
};

export const SERVICE_RIGHT_FIT: string[] = [
  "You’re a startup or small-to-medium company without a big in-house design team",
  "Hiring a full-time designer feels too costly, slow, or rigid for your current needs.",
  "Your company has developers but lacks design resources, and you want to avoid handoff headaches.",
  "You’re looking for a reliable, mid-level designer who delivers great results efficiently.",
];

export const SERVICE_WRONG_FIT: string[] = [
  "You already have a medium in-house design team (10+ designers).",
  "You need a full-time, on-site senior designer every day.",
  "You prefer large agencies or enterprise vendors.",
  "You want only face-to-face or synchronous communication.",
  "You’re specifically looking for a Danish-speaking UX designer.",
];

export const SERVICE_FIT_CTA_CARD: Card = {
  title: "Chatform: Designing an AI-Powered Help Desk MVP",
  tag: "Case study",
  color: "light-pink",
  image: "/images/chat1.png",
  href: "/work/chatform",
};

export const SERVICE_STEPS: Benefit[] = [
  { title: "Monthly planning", description: "Focus on what matters." },
  { title: "Discovery call", description: "Tasks completed within 48 hours." },
  { title: "Transparent", description: "No hiring hassle, no long contracts." },
  { title: "Ongoing review", description: "From audits to dev handoffs." },
];

export const SERVICE_STEPS_CTA_CARD: Card = {
  title: "From Concept to MVP: UX/UI Design for an AI Audio Generation",
  tag: "Case study",
  color: "light-orange",
  image: "/images/fisheye.png",
  href: "/work/aiaudio",
};

export const FAQ: Benefit[] = [
  {
    title: "How does this work?",
    description:
      "Each month starts with a short discovery call to set priorities. From there, I deliver designs on a rolling basis. Most tasks are completed within 48 hours, with weekly updates to keep everything on track.",
  },
  {
    title: "How long does it take to see results?",
    description:
      "Quick tasks (like landing pages or UI fixes) are ready in 1–2 days. Bigger projects (like design systems or product flows) are broken into weekly milestones so you see progress without waiting months.",
  },
  {
    title: "How much does it cost?",
    description:
      "Plans start at 12,000 DKK/month for 20 hours of design support. That’s a fraction of a full-time hire—no contracts, no overhead. If you need more hours, the plan scales with you.",
  },
  {
    title: "Can I cancel anytime?",
    description:
      "Yes. Everything is month-to-month, completely flexible. You can pause or cancel whenever your priorities shift.",
  },
  {
    title: "How do we communicate?",
    description:
      "We keep it async-friendly: email, Loom, Figma, and Notion. Weekly check-ins ensure alignment, and I’m available for quick questions when needed—no endless meetings.",
  },
  {
    title: "Do you work with developers directly?",
    description:
      "Absolutely. I provide developer-ready specs, walkthrough videos, and join technical calls if needed. The goal is smooth handoffs, so your devs can focus on building, not guessing.",
  },
  {
    title: "Who do you typically work with?",
    description:
      "Startups, SaaS companies, and SMEs—usually teams with developers but no dedicated design resources. If you need quality design without the cost of a full-time hire or agency, this model is built for you.",
  },
  {
    title: "How is this different from hiring an agency or full-time designer?",
    description:
      "Agencies are often expensive and slow. Full-time hires cost 40–60k DKK/month plus overhead. With this setup, you get senior-level design at a predictable monthly cost, delivered fast and flexibly—without the hiring hassle.",
  },
];
