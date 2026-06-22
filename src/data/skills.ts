export interface Skill {
  name: string;
  featured?: boolean;
}

export interface SkillGroup {
  id: number;
  label: string;
  caption: string;
  lead: boolean;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: 1,
    label: "Growth & Automation",
    caption:
      "The systems that turn marketing into revenue — any GoHighLevel automation, built end to end.",
    lead: true,
    skills: [
      { name: "GoHighLevel", featured: true },
      { name: "Automation & Integrations (APIs, Webhooks, Zapier, n8n)" },
      { name: "Applied AI / GenAI" },
      { name: "Paid Traffic (Meta Ads, Google Ads)" },
      { name: "Analytics & Tracking (GTM, GA4)" },
      { name: "CRM & CMS (Salesforce, WordPress)" },
    ],
  },
  {
    id: 2,
    label: "Deep Technical Capability",
    caption: "The full-stack engineering that makes it all real.",
    lead: false,
    skills: [
      { name: "Java" },
      { name: "Spring Boot" },
      { name: "TypeScript" },
      { name: "React / Next.js" },
      { name: "AWS & Cloud" },
      { name: "Docker" },
      { name: "CI/CD" },
    ],
  },
];
