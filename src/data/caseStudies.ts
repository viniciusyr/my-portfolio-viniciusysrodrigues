// Source of truth: case-studies.md (final copy) + client-confirmed additions.
// Numbers, client descriptors and stacks are copied VERBATIM. Do not round,
// embellish or de-anonymize. Display order follows the recommended order:
// 1) hotel attribution, 2) GHL rental system, 3) SBA platform,
// 4) AI bookkeeper, 5) Agoda automation, then Labs/R&D.
//
// Row copy (eyebrow / headline / teaser / metric) is the short, scannable
// summary shown collapsed; problem / built / result hold the full STAR detail
// revealed on expand.

export interface Workflow {
  title: string;
  detail: string;
}

export interface CaseStudy {
  id: number;
  eyebrow: string;
  headline: string;
  teaser: string;
  metricValue: string;
  metricLabel: string;
  client: string;
  role: string;
  problem: string;
  built: string[];
  workflows?: Workflow[];
  builtClosing?: string;
  result: string;
  proof?: string;
  stack: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    eyebrow: "Attribution Platform · Click Hospitality Group",
    headline: "Made a 12-hotel group's ad spend traceable to bookings",
    teaser:
      "Rebuilt the funnel and built custom attribution joining ad clicks to real bookings.",
    metricValue: "$1.9K → $13K",
    metricLabel: "tracked monthly revenue",
    client: "Click Hospitality Group (12 hotels, US)",
    role: "Sole developer",
    problem: `The group ran ads across 12 properties on Google and Meta but had no reliable way to see which sources actually produced bookings: ad data lived in Google and Meta, bookings in the PMS (BookingCenter), and web traffic in GA4, with no bridge between them. The site and tracking captured very little: in February, GA4 recorded just 4 purchases and $1.9K in revenue across the whole portfolio.`,
    built: [
      `Reconfigured Google Tag Manager and conversion tracking, and rebuilt the website and its SEO from the ground up.`,
      `Built a custom attribution platform: HMAC-signed short links inject a click ID into the booking flow, a nightly sync pulls completed bookings back from BookingCenter's API, and a matching engine joins each click session to its booking to produce per-hotel, per-platform ROAS.`,
      `Owner-scoped dashboards so each property owner sees only their own numbers, with ad credentials stored encrypted.`,
    ],
    result: `After I rebuilt the site, SEO and conversion tracking (starting Feb 25), GA4-tracked purchase revenue rose from the $1.9K February baseline to $7.4K in March, then peaked at $13K in April (46 bookings), and has continued in the mid-four to low-five-figure range since (May $4.8K, understated, as the booking engine was down ~1.5 weeks and revenue went untracked during that window; June $4.7K through the 18th, on pace for ~$7.8K), with bookings now attributable to specific traffic sources for the first time.`,
    proof: `Backed by month-by-month GA4 screenshots, Feb–Jun 2026, and corroborated in the property's PMS.`,
    stack: [
      "Next.js",
      "Supabase (Postgres + row-level security)",
      "Google Ads / Meta / GA4 APIs",
      "BookingCenter SOAP",
      "custom WordPress theme + tracking plugin",
      "Google Tag Manager",
      "technical SEO",
    ],
  },
  {
    id: 6,
    eyebrow: "AI Voice Agent · Click Hospitality Group",
    headline: "An AI phone agent answering guests across 12 hotels",
    teaser:
      "A real-time voice agent that takes guest calls, captures booking intent, logs complaints, and routes each one to the right hotel's front desk.",
    metricValue: "12 hotels",
    metricLabel: "live, AI-answered guest calls",
    client: "Click Hospitality Group (12 hotels, US)",
    role: "Sole developer",
    problem: `Guest calls across the group's hotels tied up front-desk staff with repetitive questions, and there was no consistent way to capture booking interest or complaints, or to make sure each one reached the right property. Coverage depended on whoever happened to pick up the phone.`,
    built: [
      `A real-time inbound phone agent that talks to guests in natural speech: Twilio streams the call audio, Deepgram transcribes it live, OpenAI drives the conversation, and Cartesia speaks the reply back, with barge-in so guests can interrupt naturally.`,
      `Answers the common questions (hours, check-in/out, amenities, directions) from a per-hotel knowledge base, so each property's agent speaks with its own name and details.`,
      `Acts as front-of-funnel for bookings: it qualifies reservation intent and captures the lead instead of letting the call ring out.`,
      `Records guest complaints and routes each one to the specific hotel's front desk, so issues reach the right property instead of getting lost.`,
    ],
    result: `Live and handling guest calls across all 12 hotels, giving the group 24/7 first-line phone coverage, consistent answers per property, captured booking intent, and a complaint trail that actually reaches the right front desk, without adding front-desk headcount.`,
    stack: [
      "Python / FastAPI",
      "Pipecat (voice orchestration)",
      "Twilio Media Streams (telephony)",
      "Deepgram Nova-3 (streaming STT)",
      "OpenAI (LLM)",
      "Cartesia Sonic (streaming TTS)",
      "Google Cloud Run + Docker",
    ],
  },
  {
    id: 5,
    eyebrow: "GoHighLevel · Lead Automation",
    headline: "One lead system across every rental platform",
    teaser:
      "Custom lead parsing plus a five-workflow state machine: nothing missed, nothing over-messaged.",
    metricValue: "12+ sources",
    metricLabel: "unified into one pipeline",
    client: "A US property rental / leasing company",
    role: "GoHighLevel specialist & developer",
    problem: `Rental leads arrived from a dozen listing platforms (Apartments.com, Zillow, Hotels.com, and others) as scattered emails, with no shared system to capture, classify, or follow up on them. Each platform was worked manually and inconsistently, follow-up was slow, and prospects fell through the cracks. There was also no structured way to keep older, unconverted leads or referral partners warm over time.`,
    built: [
      `A custom intake pipeline (Gmail → Zapier → GHL) that parses each incoming lead email, extracts the contact details, and classifies the lead before it reaches the CRM, so leads from every platform land in one normalized place.`,
      `Five GHL workflows covering the full lead lifecycle as a tag-driven state machine:`,
    ],
    workflows: [
      {
        title: "New Rental Lead – 5-day follow-up:",
        detail: `validates the lead, then runs a 3-touch email sequence over 5 days if there's an email, creates call/text tasks for the leasing team if there's only a phone, and exits cleanly if there's neither.`,
      },
      {
        title: "Reply detection:",
        detail: `when a lead replies, it's flagged as hot, the "no-response" tag is removed, a task is created for the team, and the lead is pulled out of the automated sequence, so no one gets a robotic message after they've engaged.`,
      },
      {
        title: "Old-lead monthly drip:",
        detail: `keeps unconverted/unresponsive leads warm with a monthly email so the company stays top-of-mind for future rentals.`,
      },
      {
        title: "Case-worker monthly drip:",
        detail: `a separate professional nurture track for case workers, housing coordinators, social workers, and assistance-program partners, the referral sources that drive future placements.`,
      },
      {
        title: "Status-change suppression:",
        detail: `removes a lead from nurture the moment they're marked hot, dead, application-submitted, or property-selected, so no one receives irrelevant follow-up.`,
      },
    ],
    builtClosing: `Every lead has clear entry and exit conditions, so the system never over-messages and never drops anyone.`,
    result: `Replaced manual, per-platform follow-up with one shared lead-management system across every rental source. Leads are now captured, classified, and nurtured automatically; replies and status changes stop the wrong messages from going out; and old leads and referral partners stay warm with zero manual effort, so leads stop slipping through the cracks.`,
    stack: [
      "GoHighLevel (workflows, tags, pipelines, email/SMS, calendars)",
      "Zapier",
      "Gmail",
      "custom lead parsing & classification logic",
      "multi-platform lead sources (Apartments.com, Zillow, Hotels.com, etc.)",
    ],
  },
  {
    id: 2,
    eyebrow: "Fintech · SBA Lending",
    headline: "A production-grade loan-automation platform",
    teaser:
      "AI intake and scoring with a cryptographically-enforced human-approval gate.",
    metricValue: "Production-grade",
    metricLabel: "pre-launch · waitlist building",
    client: "A US commercial-lending firm (SBA 7(a) / 504 and USDA financing)",
    role: "Lead developer",
    problem: `SBA loan distribution is manual, fragmented, and slow: brokers chase lenders by hand, with no scoring, no tracking, and no automated way to collect the documents a deal needs. The firm wanted to automate the whole path from deal intake to lender distribution, without ever letting an unreviewed deal reach a lender.`,
    built: [
      `Automated intake and document collection (with follow-up cadencing), OCR via AWS Textract, and AI field extraction (Claude with forced tool-use and strict schemas).`,
      `A deterministic 8-factor deal-scoring engine: the AI extracts the fields, but a pure function computes the score, so there is zero AI in the number itself.`,
      `An 8-factor lender-matching engine plus a behavioral lender-scoring model (responsiveness, speed, close rate, reliability) with time decay.`,
      `A provably-enforced human-approval gate: distribution is authorized by a single-use cryptographic token, so no deal can reach any lender until a person approves it, and the system is architecturally unable to send before that.`,
      `Role-based access across 7 roles, multi-factor authentication, and an immutable audit log of every action.`,
    ],
    result: `The core pipeline (intake → extraction → scoring → matching → approval-gated distribution) is built and running as designed, with a waitlist of firms forming ahead of launch. A production-grade financial workflow, not a prototype.`,
    stack: [
      "TypeScript (Fastify, BullMQ workers, Redis)",
      "Supabase/Postgres",
      "AWS Textract + S3",
      "Anthropic Claude (structured extraction)",
      "SendGrid",
      "CRM/storage integrations (Centrex, Egnyte)",
      "installable PWA frontend",
      "contract-first testing (Vitest, Playwright)",
    ],
  },
  {
    id: 3,
    eyebrow: "AI Agent · Bookkeeping",
    headline: "Automated a bookkeeping team's transaction coding",
    teaser:
      "An AI agent codes every transaction against each client's own rules.",
    metricValue: "80%+",
    metricLabel: "now automatic",
    client: "A US bookkeeping practice",
    role: "Sole developer",
    problem: `The firm's principals coded every bank transaction by hand into their chart of accounts: repetitive, error-prone work, repeated for every statement, every month.`,
    built: [
      `A multi-tenant web app where you drop in a bank statement (CSV or PDF, or route it automatically via email forwarding or a connected Google Drive folder), and an AI agent codes every transaction against that workspace's own rules. The rules are learned automatically by the agent and can also be set manually by the user. The system writes the coded ledger into a per-year Google Sheet, produces a monthly summary, and, importantly, flags only the uncertain rows for human review instead of silently mis-coding anything.`,
    ],
    result: `At least 80% of transaction coding is now automatic for each user's rules; the user only touches the remaining ~20%, and those patterns are being folded into automation in upcoming releases. Work that used to be 100% manual is now mostly hands-off.`,
    stack: [
      "Next.js",
      "AI structured-output classification (Zod-constrained)",
      "durable processing pipeline (Inngest)",
      "PostgreSQL/Prisma",
      "Google Sheets & Drive APIs",
      "multi-tenant auth",
      "audit logging",
    ],
  },
  {
    id: 4,
    eyebrow: "Automation · Click Hospitality Group",
    headline: "Replaced a paid PMS integration across 12 hotels",
    teaser:
      "A custom Agoda-to-PMS sync, with a human queue for anything ambiguous.",
    metricValue: "~$1.2K/mo",
    metricLabel: "recurring cost removed",
    client: "Click Hospitality Group (12 hotels, US)",
    role: "Sole developer",
    problem: `The group's PMS (BookingCenter) charges $100+ per hotel for its native Agoda integration, a recurring cost across 12 properties. Without it, front-desk staff manually transcribed every Agoda booking and cancellation email into the PMS, one by one.`,
    built: [
      `A system that monitors each hotel's inbox for Agoda booking emails and automatically creates or cancels the reservation in the PMS via its API, with fingerprint-based idempotency so retries never double-book. Anything ambiguous or risky is routed to a human review queue rather than processed blindly. Day to day it runs itself. Front desk only needs to keep an eye on it during high-occupancy periods, and the app proactively alerts them when that matters.`,
    ],
    result: `Replaced a recurring $100+/hotel/month PMS feature subscription across all 12 properties (roughly $1,200+/month eliminated) while removing the manual data entry entirely and keeping a human in control of every edge case.`,
    stack: [
      "Node.js/TypeScript",
      "Gmail API + Pub/Sub ingestion",
      "BookingCenter OTA SOAP",
      "Next.js operator dashboard",
      "Google Cloud Run + Cloud Scheduler",
      "Supabase Postgres",
    ],
  },
];

export interface LabsEntry {
  title: string;
  status: string;
  description: string;
  stack: string[];
  image?: string;
}

export const labsEntry: LabsEntry = {
  title: "HiFit — SaaS for online personal trainers",
  status: "Launching July 2026",
  image: "/projects/hifit-dashboard.png",
  description: `A SaaS platform where online personal trainers manage their students, build drag-and-drop workout programs (sets, supersets, protocols), automate check-ins and reminders, run client intake forms and fitness assessments, and collect payments, paired with a companion mobile app where students follow and log their training. Built as a TypeScript monorepo: a Next.js web dashboard and an Expo / React Native app sharing one Supabase backend, with AI-assisted workout generation on the near-term roadmap.`,
  stack: [
    "Next.js 15 / React 19",
    "Expo / React Native",
    "Supabase (Postgres, RLS, Edge Functions)",
    "MercadoPago (payments)",
    "TypeScript monorepo (Turborepo)",
    "Tailwind CSS",
  ],
};
