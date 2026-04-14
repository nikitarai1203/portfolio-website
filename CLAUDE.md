# Nikita Rai — Professional Portfolio Website

## About the Project Owner
Nikita is **not a technical person** — she has no coding or web development background. She is building and maintaining this website entirely using AI tools. Ask clarifying questions in plain language when in doubt. Never assume technical knowledge. Due to this, ALWAYS update CLAUDE.md with new information as the project updates. Always ask her questions where required.

Nikita is a Senior Auditor & Finance professional (CA + MBA from University of Edinburgh) with 12+ years of experience. Her role at Intel was made redundant in **Dec 2025** and she is currently job hunting, targeting **Internal Audit, Risk & Controls, and Compliance** roles.

## GitHub & Deployment
- **Repo**: https://github.com/nikitarai1203/portfolio-website
- **Live site**: https://nikitarai1203.github.io/portfolio-website/
- **Custom domain**: https://nikitarai.com (CNAME file in `source/CNAME`)
- **Deployment**: GitHub Actions (`.github/workflows/deploy.yml`) — auto-deploys the `source/` folder to GitHub Pages on every push to `main`
- **Git config** (repo-local): Nikita Rai / nikita.rai1203@gmail.com
- **IMPORTANT: Never push (`git push`) without asking Nikita first.** Commit locally as needed, but always ask before publishing/pushing to GitHub.

## Project Structure

```
Website- Nikita/
├── CLAUDE.md                ← This file
├── .gitignore               ← Excludes OS files, .pptx, PDFs, prototype files, original uploads, .claude/
├── .github/
│   └── workflows/
│       └── deploy.yml       ← GitHub Pages deployment workflow
├── (CVs and personal docs moved out of repo — keep separate)
├── source/
│   ├── index.html           ← Landing page (bento grid overview)
│   ├── career.html          ← Professional Journey (7-card timeline)
│   ├── intel.html           ← Intel UK deep-dive (recoveries, strategic projects + audit lifecycle diagram, footprint)
│   ├── startups.html        ← Startups (Clover, Quintype — rich company story sections)
│   ├── ai.html              ← AI & Innovation (3 project cards)
│   ├── mba.html             ← MBA at Edinburgh (placeholder)
│   ├── blog.html            ← Blog (placeholder)
│   ├── css/
│   │   └── styles.css       ← Shared stylesheet (~1850 lines)
│   ├── js/
│   │   └── main.js          ← Shared JavaScript (~93 lines)
│   ├── img/
│   │   ├── banner.jpg            ← Edinburgh Castle banner (57KB)
│   │   ├── intel.jpg             ← Intel UK Swindon campus (54KB, 600×400)
│   │   ├── intel-personal.jpeg   ← Intel UK personal photo (49KB, 600×337)
│   │   ├── mba-graduation.jpeg   ← Nikita's Edinburgh MBA graduation (161KB, 600×1066)
│   │   ├── mba-degree.jpeg       ← MBA degree scroll and certificate
│   │   ├── mba-cohort.jpeg       ← MBA Class of 2022 group graduation photo
│   │   ├── mba-mcewan-hall.jpeg  ← McEwan Hall dome ceiling (graduation venue)
│   │   ├── mba-video.mp4         ← Edinburgh university video (4MB, for mba.html)
│   │   ├── clover-deeprooted.png ← Deep Rooted / Clover brand image (314KB, 600×281)
│   │   ├── quintype-banner.png   ← Quintype Technologies banner (600×315, for startups.html)
│   │   ├── quintype-q-logo.png   ← Quintype Q logo (400×400, for career.html timeline)
│   │   └── icai-logo.png         ← ICAI logo, used for CA cards (121KB, 461×338)
│   └── CNAME                ← Custom domain config
└── .claude/
    └── settings.local.json
```

**Multi-page architecture** — 7 HTML pages sharing one CSS file and one JS file. No build process, no package manager, no framework. All pages live in `source/`.

Always consider SEO as this is a portfolio and must be well ranked on Google etc.

## Site Map (7 Pages)

| Page | File | Content |
|---|---|---|
| Home | `index.html` | Banner, contact header, stats bar, bento grid metrics/charts, teaser cards to other pages |
| Career | `career.html` | 7-card vertical timeline (full professional journey) |
| Intel UK | `intel.html` | Corner campus photo, recovery bar chart, 2-col strategic projects + audit lifecycle diagram, global footprint |
| Startups | `startups.html` | Mini metrics (3 tiles) + two rich company story sections (Clover, Quintype) with company intros, contribution card grids, tags |
| AI | `ai.html` | 3 AI project cards (sanctions, automation, this website) |
| MBA | `mba.html` | Placeholder — content to be added later |
| Blog | `blog.html` | Placeholder — content to be added later |

## Navigation

**Shared sticky nav** on all pages:
```
Nikita Rai    Home  Career  Intel  Startups  AI  MBA  Blog
```
- On home page: hidden by default, slides in after scrolling past banner
- On inner pages: visible immediately (no banner)
- Current page link highlighted with accent color + underline
- Mobile: hamburger menu collapses nav into dropdown

Each page has `data-page` attribute on `<body>` (e.g., `data-page="home"`, `data-page="career"`).

## External Dependencies
- **Google Fonts**: Lora (serif, body text & numbers) + DM Sans (sans-serif, headings & UI)
- **No other dependencies** (Leaflet.js map was removed)

## Root Font Size
`html { font-size: 19px; }` — All sizing uses `rem` units. Changing this one value scales the entire site proportionally.

## CSS Design Tokens
```css
:root {
  --bg:             #f0eeea;       /* Warm grey background */
  --bg-warm:        #e8e5df;
  --bg-card:        #faf9f7;
  --text:           #1c2a3a;       /* Deep blue-grey text */
  --text-secondary: #3d5068;       /* Steel blue */
  --text-muted:     #6b7a8d;
  --text-faint:     #9ba5b0;
  --accent:         #2c4a6e;       /* Steel blue */
  --accent-light:   #3d6090;
  --accent-warm:    #b8924a;       /* Burnished gold */
  --gold:           #b8924a;       /* Burnished gold */
  --border:         #d5d0c8;
  --border-light:   #e2ded7;
  --border-faint:   #ebe8e2;
}
```

## Page Layouts

### `index.html` — Landing Page
1. **Banner** — Edinburgh Castle (320px desktop, 200px mobile, 2px accent line separator)
2. **Contact Header** — Name + tagline + LinkedIn + "Get in Touch" CTA dropdown
3. **Stats Bar** — 12+ Years | $7M+ Recoveries | $2M–$372M Project Value
4. **Bento Grid Section** — "Impact at a Glance"
   - Row 1: 4 metric tiles ($12.54M, 12 audits, 10+ countries, 21 trained)
   - Row 2: Recovery bar chart + Global footprint (2-col)
   - Row 3: Team leadership bars + AI teaser link (2-col)
5. **Teaser Section** — "Explore" — 5 cards linking to Career, Intel, Startups, MBA, Blog
6. **Footer** — Email + LinkedIn + "Designed & built with AI tools"

### Inner Pages (career, intel, startups, ai, mba, blog)
1. **Sticky Nav** (visible immediately)
2. **Page Header** — Title + subtitle
3. **Content Section** — page-specific content
4. **Footer** — same as home

## Header / Tagline
```
Nikita Rai
Internal Audit · Risk & Controls · Compliance | MBA (Edinburgh) · CA · 12+ Years
Bridging compliance, finance, and AI — from startup chaos to enterprise scale.
```

## Timeline Cards (career.html)

| # | Years | Company | Title | Role | Tags |
|---|---|---|---|---|---|
| 1 | 2022–2026 | Intel Corporation (UK) Ltd | Senior Auditor — Risk & Customer Audit | EMEA & Asia | SOX, ERM, Fraud Prevention, GRC, EMEA & Asia |
| 2 | 2021–2022 | The University of Edinburgh | MBA | Strategy · Operational Improvement · Finance | MBA, Strategy, Operations, Finance |
| 3 | 2020–2021 | Clover Ventures Pvt Ltd · Bangalore, India | Finance Manager | Agritech Retail Startup | Team Lead (13), SOX Controls, Fraud Detection & Recovery, Series B |
| 4 | 2017–2020 | Quintype Technologies · New York / India | Finance Manager | Media-Tech SaaS | SaaS Finance, US GAAP, IFRS, Cost Optimisation |
| 5 | 2015–2017 | Ranga Rao & Associates (CA) · Bangalore, India | Senior Auditor & Senior Tax Consultant | Multi-Client Practice | US Subsidiaries (4), Indian & US GAAP, Financial Statements, Statutory Filings, AGM Documents, Multi-Client |
| 6 | 2011–2015 | Multiple Mid-Sized CA Firms · India | Audit Team Lead & Tax Consultant | Audit & Tax Practice | Statutory Audit, Tax Consulting, Bank Audit, Stock Audit, Training Junior Auditors, Internal Audit |
| 7 | 2008–2012 | Institute of Chartered Accountants of India | Chartered Accountant (CA) | Professional Qualification · 3.5 Years Articleship (Internship) | CA, ICAI, Audit, Taxation |

**Design note:** Timeline cards have NO paragraph descriptions. Quintype Q logo is constrained to `max-width: 120px` inline since it's a square image (400×400) unlike the other rectangular timeline images — only company, title, role, award (Intel only), and tags. This was a deliberate decision to keep them scannable. Each timeline entry has an image in the left column (`.timeline-image`) that reveals on hover (desktop) or shows always (mobile). Images: Intel campus, MBA graduation, Deep Rooted brand, Quintype Q logo, and ICAI logo (shared by Ranga Rao, CA Firms, and CA Qualification cards).

## Intel UK (intel.html)
- **Page header**: Intel campus photo in top-right corner (200×130px) via `.intel-header-row` and `.intel-header-photo`
- **Audit Recoveries bar chart**: 4 bars (2023 Consumption $80K, 2024 Control Gap Finding $145K*, 2025 Retail Rebate Overpayment $5.48M, 2025 Non Compliance Recovery $6.98M). Asterisk on $145K* with footnote: "*Impact of audit findings."
- **Two-column layout** (`.intel-two-col`): Strategic Projects on left, Audit Lifecycle diagram on right, with `align-items: stretch` for equal height
- **Strategic Projects** (2023–2026): Retail rebate audits & large data analysis, Collaboration model for highly technical audits (audit + IT), skill tags at bottom
- **Audit Lifecycle Diagram**: SVG-based circular diagram with 4 phases connected by dashed arrow arcs:
  - Phase 1 (Pre-Audit): KYC, Scope Definition, Data Analysis, Strategy
  - Phase 2 (Onsite Audit): Process Interviews, Document Review, Evidence Collection, Test of Controls
  - Phase 3 (Post-Onsite): Analysis & Audit Results, Internal Alignment, Financial Impact Assessment, Non-Compliance Recovery, Recommendations
  - Phase 4 (Audit Closure): Results to Partners & Management, Audit Closure Letter Issued
- CSS classes: `.audit-cycle-box`, `.audit-cycle-wrapper`, `.cycle-center`, `.cycle-phase`, `.phase-1` through `.phase-4`, `.phase-color-1` through `.phase-color-4`

## AI & Innovation (ai.html) — 3 project cards

1. **Sanctions Breach Monitoring Tool** (Risk & Compliance) — AI-powered tool to detect sanctions evasion across a distributor network. Descriptions are kept **generic** — no mention of Intel, Russia, or specific products. Nikita is sensitive about not exposing company-internal details.

2. **Automated Partner Communication Workflow** (Process Automation) — AI automation replacing manual quarterly template distribution to channel partners. Again, kept **generic**.

3. **This Website** (You're looking at it) — Short, cheeky card: "Designed and built entirely using AI tools, with no prior coding experience."

**IMPORTANT: Nikita does not want Intel-specific internal details or sensitive geopolitical references on the website. Keep all descriptions generic when referencing work done at Intel.**

## Startups (startups.html)
- Page renamed from "Startups & Early Career" to "Startups" — audit firms removed (covered on Career timeline)
- 3 mini metric cards: ₹0.6M fraud detected & recovered (Clover), 60% control gaps reduced (Clover), 25% cost reduction (Quintype)
- Two rich company story sections (Clover first, then Quintype — reverse chronological):
  - Each has: company header with image, "The Company" intro paragraph, "What I Built" 2-column contribution card grid (6 cards each with SVG icons), and skill tags
  - **Clover Ventures / Deep Rooted** (2020–2021): Agritech, 13-member team, internal controls, fraud detection ₹0.6M, vendor negotiations (70+ suppliers), Series B reporting, BDO audit, legacy asset valuation
  - **Quintype Technologies** (2017–2020): Media-tech SaaS, books from scratch, US GAAP, subscription revenue, 25% cost reduction, statutory audits, Omidyar due diligence, Series B coordination
- CSS: New `.startup-company`, `.startup-header`, `.startup-contrib-grid`, `.startup-contrib-card` classes with responsive mobile stacking

## Key Factual Corrections Applied
- **Quintype**: No recoveries happened here. Cost reduction (25%) and working capital improvement (15%) were the key financial wins.
- **Clover**: Fraud detection and recovery of ₹0.6M (not ₹3.8M as previously shown). The ₹3.8M figure was incorrect.
- **Intel end date**: Jan 2026 (role made redundant Dec 2025, severance paid through Jan 2026). Website shows 2022–2026.
- **NDA compliance**: NEVER use specific client/vendor names (e.g. Amazon, specific cloud providers by name) in bar chart labels, descriptions, or anywhere on the site. Nikita is under NDA. Always use generic terms like "Vendor Audit Recovery", "Rebate Overpayment", "Cloud Service Provider" etc. This applies to ALL pages.

## Key CSS Classes Reference

| Component | Class | Notes |
|---|---|---|
| Nav container | `.site-nav` | Sticky, blur backdrop, `.visible` class shows it |
| Nav links wrapper | `.nav-links` | Flex row on desktop, dropdown on mobile |
| Hamburger button | `.nav-hamburger` | Hidden on desktop, visible on mobile |
| Page header | `.page-header` | Inner pages only (no banner) |
| Bento grid | `.bento-grid` | 4-col default, `.bento-grid-2col` for 2-col |
| Bento tile | `.bento-tile` | White card with hover lift |
| Metric tile | `.bento-metric` | Centered text, top accent bar on hover |
| Teaser card | `.teaser-card` | Link cards in the "Explore" section |
| Feature teaser | `.bento-teaser-feature` | Gradient bg, used for AI teaser |
| Content section | `.content-section` | Wrapper for inner page content |
| Chart box | `.chart-box` | White card for charts/breakdowns |
| Timeline entry | `.timeline-item` | Grid: 240px left + 1fr right |
| Year label | `.year-text` | 1.3rem, Lora, bold |
| Timeline dot | `.timeline-dot` | 10px with halo effect on `.visible` |
| Card | `.card` | Has left accent bar on hover |
| Timeline image | `.timeline-image` | Hover-reveal image in timeline left column, contain fit, hidden by default on desktop |
| Section heading | `.section-heading` | DM Sans, 1.6rem |
| AI project cards | `.ai-project-card` | 3-column grid (1-col on mobile) |
| Tags | `.tag` | Small pills, slate blue |
| Startup section | `.startup-company` | Full-width card with left accent bar on hover |
| Startup header | `.startup-header` | Flex: text + image side by side (stacks on mobile) |
| Startup contrib grid | `.startup-contrib-grid` | 2-col card grid (1-col on mobile) |
| Startup contrib card | `.startup-contrib-card` | Icon + title + description, subtle hover lift |
| Placeholder | `.placeholder-content` | Centered card for MBA/Blog "coming soon" |
| Intel header row | `.intel-header-row` | Flex row: page header + corner photo |
| Intel header photo | `.intel-header-photo` | Corner campus photo (200×130px) |
| Intel two-col | `.intel-two-col` | 2-col grid for projects + audit lifecycle |
| Intel projects box | `.intel-projects-box` | Strategic projects card with skill tags |
| Audit cycle box | `.audit-cycle-box` | Container for circular audit lifecycle diagram |
| Audit cycle wrapper | `.audit-cycle-wrapper` | Relative positioned SVG + phase labels |
| Cycle phase | `.cycle-phase` | Absolutely positioned phase box (1–4) |

## Responsive Breakpoint
Single breakpoint at `max-width: 768px` handles all mobile styling:
- Nav collapses to hamburger menu
- Bento grid: 4-col → 2-col, 2-col → 1-col
- Teaser grid: 3-col → 1-col
- Timeline: 2-col → 1-col (stacked)
- AI projects: 3-col → 1-col

## JavaScript Features
- **Sticky nav** — appears after scrolling past banner (home only; always visible on inner pages via `class="visible"`)
- **Hamburger menu** — toggles `.open` on nav-links and hamburger button
- **Fade-in observer** — IntersectionObserver adds `.visible` to `.fade-in` elements
- **Timeline animation** — slides in timeline items on scroll
- **Chart animation** — triggers bar height/width transitions when chart enters viewport
- **CTA dropdown** — closes when clicking outside

## Design Decisions Made
- **Multi-page architecture** — each page focused, room to grow, not crowded
- **Bento grid on landing page only** — other pages use clean section layouts
- **No banner on inner pages** — compact nav-only header keeps pages fast and focused
- **Teaser cards on landing page** — guide visitors to explore other pages
- **Placeholder pages for MBA and Blog** — ready to fill in later
- **Intel gets its own page** — the recovery data, projects, and team leadership are meaty enough
- **Shared CSS/JS** — one stylesheet, one JS file, duplicated header/footer HTML
- **Fonts**: Lora for body text & numbers (warm readable serif), DM Sans for headings & UI (clean sans-serif)
- **Color palette**: Warm grey background with steel blue + burnished gold accents — professional, trustworthy, and eye-catching for finance/audit hiring managers
- **No descriptions on timeline cards** — deliberately removed for scannability
- **Year-only dates** (no months) across all timeline entries for consistency
- **Justified text** on AI project descriptions for clean alignment
- **Footer note**: "Designed & built with AI tools" — subtle signal of AI fluency
- **Location format**: "City, India" used consistently across all Indian companies
- **Banner**: Clean 2px accent line separator (no gradient overlay, no image filters)
- **Quintype images**: `quintype-office.png` replaced with `quintype-q-logo.png` (timeline) and `quintype-banner.png` (startups page)
- **Intel corner photo**: Small campus photo (200×130px) in page header top-right — not a full-width hero
- **Audit lifecycle diagram**: SVG circular diagram next to Strategic Projects — keeps Intel page content-rich without being text-heavy
- **CVs and personal docs**: Kept outside the repo (in .gitignore) — never commit personal documents to the public GitHub repo
