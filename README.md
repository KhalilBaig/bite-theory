# BITE THEORY — Premium Scrollytelling Landing Page

A cinematic, high-energy fast food landing page built for **BITE THEORY** featuring smooth GSAP ScrollTrigger canvas frame sequences, responsive image preloading, and a custom brand identity system.

---

## 🚀 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, React 18, TypeScript)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [GSAP](https://greensock.com/gsap/) + [ScrollTrigger](https://greensock.com/scrolltrigger/)
- **Smooth Scroll**: [Lenis](https://lenis.darkroom.engineering/)
- **Canvas Rendering**: HTML5 Canvas with `requestAnimationFrame` lock & WebP high-DPI scaling

---

## 🎨 Single Source of Truth & Theme Configuration

All design variables, color schemes, typography choices, button radii, component behaviors, and metadata derive directly from `/branding.json`:

- **CSS Variables**: Exposed in `src/app/globals.css` and mapped in `tailwind.config.js`.
- **Typed Theme Config**: `src/config/branding.ts` provides strongly-typed theme access across all components.
- **Editable Content File**: `src/config/content.ts` contains all copy, headlines, ingredient layer callouts, menu items, prices, opening hours, delivery info, and order URLs.

---

## 🛠️ Local Development & Quickstart

### Prerequisites
- Node.js `^18.18.0` or `>=20.0.0`
- `npm` or `pnpm` or `yarn`

### Installation

```bash
# Install project dependencies
cmd /c npm install
```

### Running Development Server

```bash
# Start local dev server
cmd /c npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🏗️ Building for Production

```bash
# Build production bundle
cmd /c npm run build

# Start production server
cmd /c npm run start
```

---

## 🚀 Deploying to Vercel

1. Push your repository to GitHub / GitLab / Bitbucket.
2. Import the project into [Vercel](https://vercel.com).
3. Vercel automatically detects Next.js. Click **Deploy**.

---

## 📂 Project Architecture

```
food-website/
├── branding.json              # Single source of truth for design & theme specs
├── images/                    # Original uncompressed PNG frame sequences & SVGs
├── public/
│   └── images/
│       ├── logo.svg           # Brand logo (light background variant)
│       ├── logo-dark.svg      # Brand logo (dark background variant)
│       ├── favicon.svg        # Brand icon badge
│       ├── burger/            # Desktop (240 frames) & Mobile (120 frames) WebP
│       └── pizza/             # Desktop (240 frames) & Mobile (120 frames) WebP
├── src/
│   ├── app/
│   │   ├── globals.css        # CSS variable mappings & custom button styles
│   │   ├── layout.tsx         # Metadata, JSON-LD Restaurant schema, Google Fonts
│   │   └── page.tsx           # Main scrollytelling assembly
│   ├── config/
│   │   ├── branding.ts        # Typed theme config derived from branding.json
│   │   └── content.ts         # SINGLE EDITABLE CONTENT FILE for copy & menu items
│   └── components/
│       ├── SequenceCanvas.tsx # Reusable HTML5 canvas frame sequence renderer
│       ├── SmoothScroll.tsx   # Lenis + GSAP ticker synchronization
│       ├── Loader.tsx         # Preloader screen with logo & percentage counter
│       ├── Nav.tsx            # Sticky header hiding on scroll down, showing on up
│       ├── HeroSection.tsx    # Hero overlay with headline & scroll hint
│       ├── BreakdownSection.tsx# "Theory of the Burger" ingredient layer callouts
│       ├── CraftSection.tsx   # 3 Quality craft highlight cards
│       ├── PizzaSection.tsx   # Wood-fired pizza sticky section & cheese pull
│       ├── MenuSection.tsx    # Light section signature menu grid & tabs
│       ├── CTASection.tsx     # Final reassembly & location/delivery CTA
│       └── Footer.tsx         # Footer with logo & social links
```

---

## 📝 Editing Content & Menu Items

To update any copy, text, pricing, links, or hours:
Edit **`src/config/content.ts`**:
- `hero`: Tagline, headlines, CTA text
- `breakdown`: Layer names, callout positions, descriptions
- `pizza`: Pizza element callouts & cheese pull text
- `menu`: Menu categories, item names, prices, descriptions, bestseller badges
- `cta`: Phone number, order WhatsApp URL (`orderUrl`), address, hours, pickup/delivery info
