import type { Metadata } from "next";
import Link from "next/link";
import PrintButton from "./PrintButton";

export const metadata: Metadata = {
  title: "Vinicius Rodrigues — Resume | Revenue Systems & GTM Automation Engineer",
  description:
    "Resume of Vinicius Rodrigues, Revenue Systems & GTM Automation Engineer — GoHighLevel & n8n, CRM, attribution and AI agents.",
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-7 mb-3 border-b border-gray-300 pb-1 text-[11px] font-bold uppercase tracking-[0.12em] text-gray-500">
      {children}
    </h2>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2 text-[13px] leading-relaxed text-gray-700">
      <span className="mt-[2px] select-none text-[#009ffb]">•</span>
      <span>{children}</span>
    </li>
  );
}

function Role({
  company,
  title,
  dates,
  children,
}: {
  company: string;
  title: string;
  dates: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-4 first:mt-0 break-inside-avoid">
      <div className="flex flex-wrap items-baseline justify-between gap-x-3">
        <h3 className="text-[14px] font-semibold text-gray-900">{company}</h3>
        <span className="text-[12px] text-gray-500">{dates}</span>
      </div>
      <p className="text-[13px] font-medium text-[#009ffb]">{title}</p>
      <ul className="mt-2 space-y-1.5">{children}</ul>
    </div>
  );
}

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 print:bg-white print:py-0 dark:bg-neutral-900 dark:print:bg-white">
      {/* Controls (hidden on print) */}
      <div className="mx-auto mb-6 flex max-w-3xl items-center justify-between px-4 print:hidden">
        <Link
          href="/"
          className="text-sm font-medium text-gray-600 transition hover:text-[#009ffb] dark:text-gray-300"
        >
          ← Back to portfolio
        </Link>
        <PrintButton />
      </div>

      {/* Resume sheet */}
      <article className="mx-auto max-w-3xl bg-white px-10 py-10 text-gray-900 shadow-sm print:max-w-none print:px-0 print:py-0 print:shadow-none">
        {/* Header */}
        <header>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Vinicius Rodrigues
          </h1>
          <p className="mt-1 text-[15px] font-semibold text-[#009ffb]">
            Revenue Systems &amp; GTM Automation Engineer
          </p>
          <p className="mt-0.5 text-[12px] text-gray-600">
            GoHighLevel &amp; n8n | CRM, Attribution &amp; AI Agents | Full-Stack
            (TypeScript, Java, Cloud)
          </p>
          <p className="mt-2 text-[12px] text-gray-600">
            <a href="https://www.viniciusysrodrigues.com" className="hover:text-[#009ffb]">
              viniciusysrodrigues.com
            </a>{" "}
            |{" "}
            <a href="mailto:viniciusysrodrigues@gmail.com" className="hover:text-[#009ffb]">
              viniciusysrodrigues@gmail.com
            </a>{" "}
            |{" "}
            <a href="tel:+639668413876" className="hover:text-[#009ffb]">
              +63 966 841 3876
            </a>{" "}
            |{" "}
            <a
              href="https://www.linkedin.com/in/viniciusysrodrigues/"
              className="hover:text-[#009ffb]"
            >
              linkedin.com/in/viniciusysrodrigues
            </a>{" "}
            |{" "}
            <a href="https://github.com/viniciusyr" className="hover:text-[#009ffb]">
              github.com/viniciusyr
            </a>{" "}
            | Remote | US time-zone overlap
          </p>
        </header>

        {/* Summary */}
        <SectionTitle>Summary</SectionTitle>
        <p className="text-[13px] leading-relaxed text-gray-700">
          Revenue systems engineer with a rare blend: real full-stack
          development (TypeScript, Java, cloud) plus hands-on marketing and paid
          traffic. Builds GoHighLevel and CRM automation, attribution, AI
          agents, and the backend integrations behind them for agencies and
          SMBs, connecting ad spend, lead capture, follow-up and booking to
          measurable revenue.
        </p>

        {/* Skills */}
        <SectionTitle>Skills</SectionTitle>
        <div className="space-y-1.5 text-[13px] leading-relaxed text-gray-700">
          <p>
            <span className="font-semibold text-gray-900">
              Growth &amp; Automation:
            </span>{" "}
            GoHighLevel, CRM &amp; marketing automation, lead pipelines,
            Zapier, n8n, attribution (Google Tag Manager, GA4), paid traffic
            (Meta Ads, Google Ads), Salesforce, HubSpot integration, applied AI / GenAI
            (Claude, OpenAI).
          </p>
          <p>
            <span className="font-semibold text-gray-900">Engineering:</span>{" "}
            TypeScript / Node.js, Java / Spring Boot, React / Next.js, Python /
            FastAPI, REST APIs &amp; webhooks, SQL (PostgreSQL, Supabase), AWS,
            Google Cloud, Docker, CI/CD.
          </p>
        </div>

        {/* Experience */}
        <SectionTitle>Experience</SectionTitle>

        <Role
          company="Freelancer"
          title="Revenue Systems &amp; GTM Automation Engineer"
          dates="Jan 2025 – Present"
        >
          <Bullet>
            Built a custom ad-to-booking attribution platform for Click
            Hospitality Group (12 US hotels): rebuilt the site, SEO and
            conversion tracking; GA4-tracked revenue rose from a $1.9K baseline
            to a $13K peak.
          </Bullet>
          <Bullet>
            Built a GoHighLevel lead-automation system unifying 12+ listing
            platforms into one pipeline (~20 leads/day): a tag-driven workflow
            state machine with automated appointment booking and SMS + email
            follow-up and reminders.
          </Bullet>
          <Bullet>
            Lead developer on a production-grade SBA loan-automation platform:
            AI document intake and scoring behind a cryptographically-enforced
            human-approval gate.
          </Bullet>
          <Bullet>
            Built an AI phone agent (Twilio, Deepgram, OpenAI, Cartesia on Cloud
            Run) handling guest calls, a booking funnel, and complaint routing
            across 12 hotels.
          </Bullet>
          <Bullet>
            Shipped a multi-tenant AI bookkeeping agent automating 80%+ of
            transaction coding, and replaced a paid PMS integration across 12
            hotels (~$1.2K/month saved).
          </Bullet>
          <Bullet>
            Automated and consolidated operations for SMBs with Zapier and
            Salesforce, cutting recurring software costs and removing manual data
            entry between disconnected tools; built and managed their WordPress
            websites.
          </Bullet>
        </Role>

        <Role
          company="First Orient International Ventures Corp."
          title="Marketing Manager"
          dates="Aug 2023 – May 2024"
        >
          <Bullet>
            Scaled the marketing department from 30 to 150+ employees in one
            year, training and managing multicultural teams.
          </Bullet>
          <Bullet>
            Ran paid-traffic campaigns (Meta Ads, Google Ads); designed new
            operating procedures and a performance-based bonus system; led
            internal and external audits.
          </Bullet>
        </Role>

        <Role
          company="ANOC99 Corporation"
          title="CSR Supervisor / Marketing Manager"
          dates="Jan 2023 – Aug 2023"
        >
          <Bullet>
            Grew a customer-facing team from 5 to 50+ agents; built
            methodologies, scripts, onboarding and a KPI-based bonus system;
            ensured compliance during external audits.
          </Bullet>
        </Role>

        <Role
          company="ISMA Ltda"
          title="Senior Quality Control Inspector"
          dates="Jan 2016 – Oct 2022"
        >
          <Bullet>
            Led internal improvements through process automation with VBA,
            process mapping, 5S continuous improvement and risk management;
            supported the implementation of ISO 9001:2015.
          </Bullet>
        </Role>

        {/* Projects */}
        <SectionTitle>Selected Projects</SectionTitle>
        <div className="break-inside-avoid text-[13px] leading-relaxed text-gray-700">
          <p>
            <a
              href="https://hifit.app"
              className="font-semibold text-gray-900 hover:text-[#009ffb]"
            >
              HiFit
            </a>{" "}
            <span className="text-gray-500">(hifit.app)</span> — SaaS for online
            personal trainers. TypeScript monorepo: a Next.js web dashboard and
            an Expo / React Native mobile app sharing a
            Supabase backend, with MercadoPago payments and an automations
            engine.
          </p>
        </div>

        {/* Education */}
        <SectionTitle>Education</SectionTitle>
        <div className="break-inside-avoid">
          <div className="flex flex-wrap items-baseline justify-between gap-x-3">
            <h3 className="text-[14px] font-semibold text-gray-900">
              IU International University of Applied Sciences
            </h3>
            <span className="text-[12px] text-gray-500">2024 – 2027 (expected)</span>
          </div>
          <p className="text-[13px] text-gray-700">
            B.Sc. Software Development · Germany
          </p>
        </div>
      </article>
    </div>
  );
}
