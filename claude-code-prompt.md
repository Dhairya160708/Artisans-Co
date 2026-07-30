# Claude Code Prompt — Build the Artcrafts Drop Website

Copy everything below and give it to Claude Code as your build instructions.

---

Build a premium, art-gallery-style marketing/pre-launch website for a limited-drop Indian artcrafts brand. This is a real, working, production-quality website — not a mockup. It should feel like the digital presence of a high jewelry house or heritage textile brand, not an e-commerce template. Prioritize restraint, whitespace, and slow, confident motion over flashy effects.

## Context
The brand sources handmade pieces (miniature paintings, block prints, brassware, textiles, carved objects) from artisans in Jaipur, Udaipur, and across India, and sells them as numbered, limited-edition "drops" to a European audience (initial markets: Scotland, Wales, wider Europe). Marketing happens on Instagram; the site's main jobs pre-launch are to build hype, collect a waitlist, and showcase artisan stories — then, post-launch, to sell numbered pieces from each drop.

## Tech stack
- Next.js 14+ (App Router), TypeScript
- Tailwind CSS for styling
- Framer Motion for scroll/hover/page-transition animations
- GSAP + ScrollTrigger only if Framer Motion can't cleanly handle a specific scroll-linked parallax effect
- next/font for font loading (self-hosted, no FOUT)
- next/image for all imagery, with blur placeholders
- Fully responsive, mobile-first (assume most traffic arrives from Instagram links/Stories)
- Deployable as a static/SSG build where possible for speed

## Design tokens

**Colors (use as CSS variables / Tailwind theme extension):**
```
--color-charcoal: #1B1A19       /* primary dark background/text */
--color-bone: #F7F3EC           /* primary light background */
--color-stone: #C8C1B4          /* muted neutral, borders, secondary text */
--color-rose-dust: #BD8880      /* Jaipur pink accent, muted */
--color-lake-blue: #2E4756      /* Udaipur blue accent */
--color-saffron: #D69A4A        /* marigold accent, used very sparingly */
--color-indigo: #262A4A         /* deep accent, alt dark mode base */
--color-gold: #B8985A           /* hairline dividers, foil text, borders */
```
Rule: no more than one accent color (rose-dust, lake-blue, or saffron) active per section. Charcoal/bone/stone/gold form the base 80% of the palette.

**Typography (Google Fonts, self-hosted via next/font):**
- Display/headline serif: `Fraunces` (use optical sizing + a light-to-regular weight for large headlines, don't go bold)
- Body/UI sans: `Inter` (weights 400/500 only — avoid heavy weights, keep it quiet)
- Labels/eyebrow text (drop numbers, categories, nav): `Inter` at 11–12px, uppercase, letter-spacing 0.15em

**Spacing & layout:**
- Generous section padding (min 120px vertical on desktop, 64px mobile)
- Max content width ~1280px, but let hero/full-bleed imagery break out to 100vw
- Grid should feel asymmetric/editorial, not a uniform e-commerce grid — vary column widths and image sizes per section

**Motion principles (apply everywhere):**
- Easing: use `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out-expo-ish) for reveals; never a bounce/spring easing
- Duration: 700–1200ms for scroll reveals, 300–400ms for hover states — slower than typical web defaults
- Effects: fade + 24–40px translateY on scroll-in, subtle scale (1 → 1.03) and slight image zoom on hover, no rotation/skew gimmicks
- Countdown timer: numbers should crossfade/slide quietly on change — no flashing, no red, no exclamation marks

## Site structure (build as real pages/components)

1. **Hero (`/`)**
   - Full-viewport section, animated subtle gradient mesh background blending charcoal → rose-dust → gold at low opacity, very slow (20–30s) looping animation
   - Large Fraunces headline: "Crafted in India. Reserved for the world." (placeholder copy — flag as editable)
   - Small eyebrow label above headline: "DROP 01 — JAIPUR" (letter-spaced, uppercase)
   - Live countdown timer to next drop date (component: `CountdownTimer`, props: target ISO date)
   - Minimal top nav: logo mark, "The Drop / Artisans / Journal / Waitlist", transparent over hero, solidifies on scroll

2. **The Drop (`/drop` or homepage section)**
   - Editorial grid of pieces in the current/upcoming collection
   - Each card: large image (next/image, lazy-loaded), piece number ("04/50"), title, artisan name + origin city, price (GBP/EUR toggle)
   - Hover: slow image scale + soft gradient overlay fade-in with "View Piece" label
   - Sold-out state: image desaturates slightly, "Reserved" label replaces price

3. **Artisan Stories (`/artisans` or homepage section)**
   - Split-screen rows alternating image-left/text-right and image-right/text-left
   - Portrait photo, artisan name, city, craft technique, 2–3 sentence story (placeholder copy per artisan, flag as editable)
   - Scroll-triggered fade/slide-in per row

4. **Craft & Provenance**
   - Museum-plaque style section: technique name, materials, process, in a clean two-column layout with a thin gold hairline divider between entries

5. **Waitlist (`/waitlist` or homepage section + standalone page)**
   - Framed as "Request Access," not "Sign up"
   - Email input + optional country dropdown (bias toward UK/Ireland/EU)
   - Instagram handle/CTA displayed prominently
   - On submit: quiet success state (no confetti/celebration animation — stay restrained), store to a simple API route or third-party form service placeholder (flag where to wire up e.g. Mailchimp/ConvertKit)

6. **Journal (`/journal`)**
   - Editorial blog/lookbook grid, MDX-based if straightforward, for long-form storytelling content that gets cross-posted to Instagram

7. **Footer**
   - Minimal: shipping-to-Europe note, artisan credit line, social links, legal links
   - Thin gold hairline top border

## Component/file structure (suggested)
```
/app
  /page.tsx              (home: hero, drop preview, artisan preview, waitlist CTA)
  /drop/page.tsx
  /artisans/page.tsx
  /journal/page.tsx
  /journal/[slug]/page.tsx
  /waitlist/page.tsx
/components
  Hero.tsx
  CountdownTimer.tsx
  DropGrid.tsx
  PieceCard.tsx
  ArtisanRow.tsx
  ProvenanceSection.tsx
  WaitlistForm.tsx
  Nav.tsx
  Footer.tsx
  GradientMesh.tsx        (animated background component)
/lib
  fonts.ts
  content.ts               (placeholder copy + data, clearly separated so it's easy to swap in real content later)
```

## Content handling
Use realistic placeholder copy throughout (artisan names, drop titles, prices) but clearly mark it as placeholder in comments/a `content.ts` file so it's trivial to swap in real content and images later. Use royalty-free placeholder images (e.g. via a placeholder image service) sized and cropped to feel editorial (tall portrait crops, not square product-catalogue shots).

## What "premium" means for this build specifically
- No default UI chrome: no rounded-corner card shadows, no generic Bootstrap/Material patterns
- No emoji, no bright CTAs, no urgency-red anywhere
- Buttons: text-only or thin-outline, no filled gradient buttons
- Everything should feel like it could be paused mid-scroll and look like a still from a fashion film

## Deliverables
A working Next.js project, runnable locally with `npm run dev`, that implements the above with real (if placeholder) content, working animations, and full mobile responsiveness.
