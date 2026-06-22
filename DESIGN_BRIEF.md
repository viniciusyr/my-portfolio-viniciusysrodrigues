# Design brief — Portfolio redesign for an AI & Automation / Growth Engineer

> Paste this into Claude Design (or any design tool) to generate a better visual design.
> It describes who the site is for, the current implementation, the information
> architecture to keep, and the design direction. Keep all copy in English.

## Who it's for
Vinicius Rodrigues — an **AI & Automation Engineer / Growth Engineer** for marketing
agencies and SMBs. Rare profile: real full-stack engineering (Java, TypeScript, cloud,
CI/CD) PLUS hands-on marketing & paid-traffic experience. He builds the revenue systems
SMBs need — CRM automation, attribution, AI agents, GoHighLevel — and ties them to
business outcomes. The site must sell **business OUTCOMES**; the dev skills are the
*differentiator* (a developer who speaks marketing), not the headline.

Positioning line: "I build the systems that turn marketing into revenue for agencies & SMBs."

## What I want
Redesign my single-page portfolio so it looks **premium, modern and credible** for this
niche. The current version is functional but looks generic/dated. Keep it a single-page,
mobile-first site with light + dark mode. The content and information architecture below
are settled — improve the *visual design*, not the structure.

## Tech it must stay implementable in
Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion ·
light/dark theme. No backend. Deliver component-structured React/TSX + Tailwind.

## Current design (the starting point to IMPROVE on — not to copy)
- **Layout:** one narrow centered column (~max-width 640–768px), mobile-first.
- **Nav:** fixed pill-shaped bar, top-center — logo, anchor links (HOME · CASE STUDIES ·
  EXPERIENCE), social icons, dark-mode toggle.
- **Typography:** NO custom typeface — browser-default system sans; weak hierarchy.
  → Introduce a real, characterful typeface and a tighter, more confident type scale.
- **Color:** one very saturated accent `#009ffb` (azure) used everywhere for borders,
  glows and pills; hero keywords highlighted in neon yellow `#F8FF6D`, neon green
  `#80f975`, blue underline; pure white / pure black backgrounds; gray text.
  → The neon trio + pure #000/#fff reads harsh and generic. Move to ONE confident accent
  + a refined neutral system; ensure WCAG-AA contrast in both themes.
- **Cards:** rounded-xl, thin blue border + soft blue drop-shadow on white/black.
- **Hero:** animated headline with hand-drawn "RoughNotation" highlight/box/underline marks
  on keywords; circular avatar with blue glow; name + role ("AI & Automation Engineer"); a
  row of grayscale→color tool icons; a bio paragraph; a "Resume" button and a pulsing green
  "Available for collaborations" badge.
- **Animation:** Framer Motion fade + slide-up on scroll (staggered), hover scale/lift/glow,
  spring social icons, pulsing dot, RoughNotation marks. Keep tasteful, restrained motion —
  no heavy/janky effects.

## Information architecture (single page, in this order — keep this structure)
1. **Hero** — positioning headline + one-line subhead answering *what problem I solve / for
   whom / why me*; a primary CTA ("Book a call" / contact) + secondary ("Resume"); avatar;
   availability badge.
2. **Skills** — two tiers, each with a label, a one-line caption, descriptive pills, AND a
   matching tool-icon row:
   - **LEAD — "Growth & Automation"** (this is the headline specialization): GoHighLevel
     (feature it first / most prominent), Automation & Integrations (APIs, Webhooks, Zapier,
     n8n), Applied AI / GenAI (Claude), Paid Traffic (Meta Ads, Google Ads), Analytics &
     Tracking (GTM, GA4), CRM & CMS (Salesforce, WordPress).
   - **SECONDARY — "Deep Technical Capability"**: Java, Spring Boot, TypeScript, React/Next,
     AWS & Cloud, Docker, CI/CD (plus the existing dev tool icons: Postgres, MongoDB,
     Redis, Figma).
3. **Case Studies** (the centerpiece — labelled "Case Studies" because that's the
   highest-intent term the buyer audience, CEOs / agency owners, searches for).
   - **3–6 client builds**, each card written in a **STAR / XYZ** structure: an XYZ-style
     headline (what I did + the number it moved), a BOLD outcome metric (the most prominent
     element on the card), then a Situation → Action → Result body. Anonymized client + role.
     Some items have no single metric (in-progress) — design gracefully for that case too.
4. **Side Projects & Labs** (its own clearly-secondary section, smaller cards) — personal
   builds (a SaaS side project, this portfolio) + one R&D experiment with an "In development" tag.
5. **Experience** — a clean career timeline (4 roles) telling the through-line "I've always
   built and automated systems to drive business results"; the marketing/management wins
   (scaled a department 30→150+, ran Meta/Google Ads, built KPI/bonus systems) live here.
6. **Articles** — small list of writing (optional, low priority).
7. **Contact / CTA + Footer** — one clear call to action.
8. **(Design a placeholder for social proof** — testimonials / client logos. I don't have
   them yet but want a slot to add them later.)

## Design direction
- Lead with business impact; make the **outcome metric the visual hero of each work card**.
- Quality over quantity: 3–6 featured items, generous whitespace, strong typographic rhythm.
- Confident, restrained, "senior" feel — think a sharp indie-consultant / studio site, not a
  template. A refined palette (one accent + neutrals), real type, clear grid.
- Single-page, smooth scroll, purposeful micro-interactions only.
- Keep it credible and trustworthy — this site needs to convert agency owners and SMB founders.

## Do-not
- Don't fabricate metrics, results, testimonials or client names; clients stay anonymized.
- English only. Mobile-first. Must support dark + light.
- Stay implementable in the stack above; restrained, purposeful animation.

## Deliverable
A cohesive visual system + page layout: type scale, light+dark palette, spacing system, nav,
hero, work card (with metric emphasis), experience timeline, skills (two tiers + icon rows),
contact/CTA, footer. Show the **hero** and one **work card** rendered in full detail.
