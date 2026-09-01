# Powercraft — Microsoft Power Platform Consulting Website

A modern, production-grade marketing website for **Powercraft** (Microsoft Power Platform Consulting firm: Power Apps, Power Automate, Power BI, Copilot & AI, Governance & Center of Excellence, Training & Enablement).

Built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) (or `3001` if port 3000 is occupied) in your browser.

### 3. Production Build & Static Generation
```bash
npm run build
npm run start
```

---

## 🎨 Design System

Follows `/content/04-design-plan.md`:
- **Palette**:
  - Background (`--ink`): `#0F0E1E`
  - Cards & Panels (`--panel`): `#17162C`
  - Text Primary: `#F3F1FF`
  - Muted Text: `#9C97BE`
  - **4 Power Platform Node Accents**:
    - Violet (`#7C5CFC`): Power Apps
    - Sky (`#4C9AFF`): Power Automate
    - Teal (`#22D3B4`): Power BI
    - Amber (`#FFB454`): Copilot / Primary CTA
- **Typography** (`next/font/google`):
  - Headings: `Space Grotesk`
  - Body: `Inter`
  - Eyebrows, Badges & Counters: `IBM Plex Mono`
- **Signature Hero Element**:
  - Animated SVG flow diagram with 4 product nodes and traveling data pulses feeding into the central Powercraft CoE core.

---

## 📂 Project Architecture

```
powwercraft/
├── app/
│   ├── layout.tsx                     # Global layout with Google fonts, Navbar & Footer
│   ├── globals.css                    # Theme tokens & utilities
│   ├── page.tsx                       # Home page with all core sections
│   ├── about-us/page.tsx              # About Us page (Mission, Vision, Approach, Team)
│   ├── services/page.tsx              # Comprehensive Services overview
│   ├── services/[slug]/page.tsx       # Dynamic sub-service detail pages
│   ├── case-studies/page.tsx          # Case studies & ROI framework
│   ├── blog/page.tsx                  # Insights & architectural articles
│   ├── contact-us/page.tsx            # Contact page with interactive form & booking
│   ├── privacy-policy/page.tsx        # GDPR / Privacy policy
│   └── terms-of-service/page.tsx      # Terms of service
├── components/
│   ├── ui/
│   │   ├── Navbar.tsx                 # Sticky responsive header with services dropdown
│   │   ├── Footer.tsx                 # Verified 4-column footer
│   │   ├── HeroFlowDiagram.tsx        # Signature animated SVG flow diagram
│   │   ├── StatCounter.tsx            # Animated number counter (scroll-triggered)
│   │   ├── Accordion.tsx              # Single-open FAQ accordion
│   │   ├── ContactForm.tsx            # Working interactive inquiry form
│   │   └── PlaceholderBadge.tsx       # Clear developer/editor drop-in indicator
│   └── sections/
│       ├── HeroSection.tsx            # Hero with dual CTAs and SVG diagram
│       ├── LogoStrip.tsx              # Partner logo strip
│       ├── WhyWeExistSection.tsx      # Core purpose narrative & pull quote
│       ├── ServicesGridSection.tsx    # 6-card 3x2 grid with cycling colors
│       ├── WhyChooseUsSection.tsx     # 4 advantage pillars
│       ├── StatsSection.tsx           # 4 measurable transformation metrics
│       ├── CaseStudiesSection.tsx     # Highlight outcome chips & case cards
│       ├── TestimonialsSection.tsx    # Testimonials review slots
│       ├── WhoWeServeSection.tsx      # 4 key audience segments
│       ├── FaqSection.tsx             # 5 Power Platform FAQs
│       ├── CtaOfferBand.tsx           # Closing gradient call-to-action
│       ├── OurApproachSection.tsx     # Solve / Teach / Scale methodology
│       └── WhoWeAreSection.tsx        # Team background & differentiators
├── content/                           # Source copy & brand reference markdown files
└── README.md
```

---

## 📝 Dropping in Real Assets Before Launch

As specified in `00-brand.md`, any placeholder marker `[[REPLACE]]` is rendered with structured, honest slots. Before public launch:

1. **Client / Partner Logos**:
   - Edit `components/sections/LogoStrip.tsx` to replace the placeholder slots with your high-res SVG/PNG client logos.
2. **Client Testimonials & Headshots**:
   - Edit `components/sections/TestimonialsSection.tsx` to update client quotes, names, titles, and avatar photos.
3. **Team Headshots & Bios**:
   - Edit `components/sections/WhoWeAreSection.tsx` to insert team member portraits, bios, and LinkedIn links.
4. **KPI Benchmark Numbers**:
   - Edit `components/sections/StatsSection.tsx` to adjust the live animated counters (currently set to 98% retention, 150+ apps, 45+ enterprises, 2,500+ users).
5. **Contact Form Backend**:
   - The interactive form in `components/ui/ContactForm.tsx` is currently client-validated with instant user feedback. Connect it to your preferred email API (e.g. Resend, SendGrid, or Microsoft Graph API / Power Automate webhook) in `app/api/contact/route.ts`.
