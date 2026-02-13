# Nikita Rai — Professional Portfolio Website

## About the Project Owner
Nikita is **not a technical person** — she has no coding or web development background. She is building and maintaining this website entirely using AI tools. Ask clarifying questions in plain language when in doubt. Never assume technical knowledge. Due to  this, ALWAYS update CLAUDE.md with new information as the project updates. Always ask her questions where required.

Nikita is a Senior Auditor & Finance professional (CA + MBA from University of Edinburgh) with 12+ years of experience. Her role at Intel was made redundant in **Dec 2025** and she is currently job hunting, targeting **Internal Audit, Risk & Controls, and Compliance** roles.

## Project Structure

```
Website- Nikita/
├── CLAUDE.md              ← This file
├── Linkedin profile.pdf   ← LinkedIn export (reference for bio/experience details)
├── source/
│   └── index.html         ← THE ENTIRE WEBSITE (single file, embedded CSS + JS)
└── .claude/
    └── settings.local.json
```

**Everything lives in `source/index.html`** — all HTML, CSS (~1000 lines), and JavaScript are embedded in this one file. There is no build process, no package manager, no framework.

This is for the MVP. In future, we must optimise this.

Always consider SEO as this is a portfolio and must be well ranked on Google etc.

## External Dependencies
- **Google Fonts**: Cormorant Garamond (serif, headings) + Outfit (sans-serif, body)
- **Leaflet.js v1.9.4**: Interactive map for Global Audit Footprint section
- **No other dependencies**

## Root Font Size
`html { font-size: 20px; }` — All sizing uses `rem` units. Changing this one value scales the entire site proportionally.

## CSS Theme Variables
```css
:root {
  --bg: #f8f6f3;              /* Warm off-white background */
  --bg-card: #ffffff;          /* Card background */
  --text: #2e3038;             /* Primary text (dark slate) */
  --text-muted: #6b6d77;       /* Secondary text */
  --accent: #5c6a82;           /* Primary accent (slate blue) */
  --accent-warm: #8a7060;      /* Warm accent (taupe) */
  --accent-subtle: rgba(92, 106, 130, 0.07);
  --border: #e4e1dc;
  --border-light: #eeebe7;
  --line-color: #d4d0ca;
}
```
**Note:** Font sizes are NOT in CSS variables — they are hardcoded per class.

## Tab Structure (4 tabs)

| Tab Button Label | data-tab ID | Panel ID | Nav Link Label | Content |
|---|---|---|---|---|
| Overview | `overview` | `tab-overview` | Overview | Impact dashboard, charts, leadership, global map |
| Professional Journey | `journey` | `tab-journey` | Journey | Timeline with 7 career cards |
| Startups & Early Career | `startups` | `tab-startups` | Startups | Mini metrics + breakdown for Clover/Quintype/Audit |
| AI & Innovation | `ai` | `tab-ai` | AI | 3 AI project cards |

Tab switching is handled by `switchTab(tabId)` function. Both `.tab-btn` elements and `.nav-link[data-tab]` elements trigger it.

## Page Layout (top to bottom)
1. **Banner** — hero image (300px desktop, 180px mobile)
2. **Contact Header** — Name + tagline + LinkedIn + "Get in Touch" CTA dropdown
3. **Stats Bar** — 12+ Years | $7M+ Recoveries | $2M–$372M Project Value
4. **Tab Navigation** — 4 buttons
5. **Active Tab Panel** (Overview shown by default)
6. **Footer** — Email + LinkedIn + "Designed & built with AI tools"

## Header / Tagline
```
Nikita Rai
Internal Audit · Risk & Controls · Compliance | MBA (Edinburgh) · CA · 12+ Years
Bridging compliance, finance, and AI — from startup chaos to enterprise scale.
```

## Timeline Cards (Professional Journey tab)

| # | Years | Company | Title | Role | Tags |
|---|---|---|---|---|---|
| 1 | 2022–2025 | Intel Corporation (UK) Ltd | Senior Auditor — Risk & Customer Audit | EMEA & Asia | SOX, ERM, Fraud Prevention, GRC, EMEA & Asia |
| 2 | 2021–2022 | The University of Edinburgh | MBA | Strategy · Operational Improvement · Finance | MBA, Strategy, Operations, Finance |
| 3 | 2020–2021 | Clover Ventures Pvt Ltd · Bangalore, India | Finance Manager | Agritech Retail Startup | Team Lead (13), SOX Controls, Fraud Detection & Recovery, Series B |
| 4 | 2017–2020 | Quintype Technologies · New York / India | Finance Manager | Media-Tech SaaS | SaaS Finance, US GAAP, IFRS, Cost Optimisation |
| 5 | 2015–2017 | Ranga Rao & Associates (CA) · Bangalore, India | Senior Auditor & Senior Tax Consultant | Multi-Client Practice | US Subsidiaries (4), Indian & US GAAP, Financial Statements, Statutory Filings, AGM Documents, Multi-Client |
| 6 | 2011–2015 | Multiple Mid-Sized CA Firms · India | Audit Team Lead & Tax Consultant | Audit & Tax Practice | Statutory Audit, Tax Consulting, Bank Audit, Stock Audit, Training Junior Auditors, Internal Audit |
| 7 | 2008–2012 | Institute of Chartered Accountants of India | Chartered Accountant (CA) | Professional Qualification · 3.5 Years Articleship (Internship) | CA, ICAI, Audit, Taxation |

**Design note:** Timeline cards have NO paragraph descriptions — only company, title, role, award (Intel only), and tags. This was a deliberate decision to keep them scannable.

## AI & Innovation Tab (3 project cards)

1. **Sanctions Breach Monitoring Tool** (Risk & Compliance) — AI-powered tool to detect sanctions evasion across a distributor network. Descriptions are kept **generic** — no mention of Intel, Russia, or specific products. Nikita is sensitive about not exposing company-internal details.

2. **Automated Partner Communication Workflow** (Process Automation) — AI automation replacing manual quarterly template distribution to channel partners. Again, kept **generic**.

3. **This Website** (You're looking at it) — Short, cheeky card: "Designed and built entirely using AI tools, with no prior coding experience."

**IMPORTANT: Nikita does not want Intel-specific internal details or sensitive geopolitical references on the website. Keep all descriptions generic when referencing work done at Intel.**

## Startups & Early Career Tab
Currently contains:
- 3 mini metric cards (₹3.8M recovered at Quintype, 60% control gaps reduced at Clover, 25% cost reduction at Quintype)
- Year breakdown for Clover, Quintype, and Audit firms

**Nikita plans to add more detail to this tab in a future session.**

## Key Factual Corrections Applied
- **Quintype**: No recoveries happened here. The ₹3.8M recovery was at **Clover** (fraud detection and recovery of stolen amount). The Startups tab mini-metrics may still reference Quintype for the ₹3.8M — this needs verification and may need correction.
- **Clover**: Fraud detection AND recovery of the stolen amount happened here.
- **Intel end date**: Dec 2025 (role made redundant), NOT Jan 2026.

## Key CSS Classes Reference

| Component | Class | Notes |
|---|---|---|
| Tab buttons | `.tab-btn` | `data-tab` attribute controls switching |
| Tab panels | `.tab-panel` | `.active` class shows/hides |
| Nav links | `.nav-link` | Sticky nav, appears after scrolling past banner |
| Timeline entry | `.timeline-item` | Grid: 240px left + 1fr right |
| Year label | `.year-text` | 1.35rem, Cormorant Garamond, bold |
| Timeline dot | `.timeline-dot` | 11px with double-ring halo effect |
| Card | `.card` | Has left accent bar on hover |
| Section heading | `.section-heading` | Cormorant Garamond, 1.5rem |
| AI project cards | `.ai-project-card` | 3-column grid (1-col on mobile) |
| Tags | `.tag` | Small pills, slate blue |

## Responsive Breakpoint
Single breakpoint at `max-width: 768px` handles all mobile styling.

## Design Decisions Made
- **Fonts**: Cormorant Garamond for headings/numbers (serif elegance), Outfit for body (clean sans-serif)
- **Color palette**: Warm neutrals with slate blue accent — professional and trustworthy
- **No descriptions on timeline cards** — deliberately removed for scannability
- **Year-only dates** (no months) across all timeline entries for consistency
- **Justified text** on AI project descriptions for clean alignment
- **Footer note**: "Designed & built with AI tools" — subtle signal of AI fluency
- **Location format**: "City, India" used consistently across all Indian companies
