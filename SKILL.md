---
name: antigravity
version: 1.0.0
author: Senior Frontend Designer (AI-generated industry standard)
description: >
  Antigravity is a senior-level frontend design system prompt that Claude
  executes on EVERY coding task. It defines every design parameter — typography,
  color, motion, layout, components, accessibility, and code quality — so output
  is consistently production-grade, visually distinctive, and architecturally sound.
  Trigger on any UI/component/page/web-app coding request.
---

# ANTIGRAVITY — Senior Frontend Design System

> Antigravity defies the downward pull of generic, forgettable UI.
> Every element floats with purpose. Every pixel is intentional.
> Every interaction has weight, spring, and memory.

---

## 0 · Pre-Flight Checklist (run before every line of code)

Before touching the keyboard, answer these five questions silently:

| # | Question | Output |
|---|----------|--------|
| 1 | **Purpose** — What specific problem does this UI solve? | Defines information hierarchy |
| 2 | **User** — Who is using this and what is their mental state? | Defines tone and density |
| 3 | **Aesthetic** — What is the ONE word that describes this UI's feeling? | Drives every visual decision |
| 4 | **Differentiator** — What is the single unforgettable visual moment? | The hero detail |
| 5 | **Constraints** — Framework? Accessibility tier? Performance budget? | Sets implementation bounds |

**Do not proceed until you have answered all five.**

---

## 1 · Aesthetic Direction

Pick **one** archetype and execute it with complete commitment.
Never blend two archetypes — dilution is the enemy.

| Archetype | Signature | Use for |
|-----------|-----------|---------|
| **Void** | Near-black + single neon accent, extreme negative space | Dev tools, AI products, crypto |
| **Membrane** | Frosted glass, translucency, soft blur layers | Consumer apps, OS-style UIs |
| **Brutalist** | Raw HTML-like, monospace, hard edges, no decoration | Manifestos, portfolios, editorial |
| **Organic** | Blobby shapes, earthy tones, handwritten feel, warm grain | Wellness, food, nature brands |
| **Kinetic** | Physics-driven, spring animations, everything in motion | Dashboards, game UIs, interactive |
| **Typographic** | Type as the hero, no illustrations, pure hierarchy | Long-form content, publications |
| **Precision** | Grid-perfect, Swiss-style, ultra-fine strokes | Finance, medical, enterprise |
| **Euphoric** | Oversaturated gradients, iridescent, bold curves | Consumer, entertainment, Gen-Z |
| **Ghost** | White-on-white, shadow-only depth, ultra-minimal | Luxury, premium SaaS |
| **Retro-Futurism** | Scanlines, CRT glow, terminal aesthetics + modern layout | Tech nostalgia, developer tools |

---

## 2 · Typography System

### 2.1 — Font Pairing Rules

Always pair **two** typefaces: one **Display** (headlines) + one **Text** (body/UI).
Never use Inter, Roboto, Arial, or system-ui as a display font.

**Recommended pairings by archetype:**

| Archetype | Display Font | Text Font | Import Source |
|-----------|-------------|-----------|---------------|
| Void | Syne | DM Mono | Google Fonts |
| Membrane | Plus Jakarta Sans | Inter (allowed here) | Google Fonts |
| Brutalist | Space Mono | Space Mono | Google Fonts |
| Organic | Fraunces | Nunito | Google Fonts |
| Kinetic | Exo 2 | Outfit | Google Fonts |
| Typographic | Playfair Display | Source Serif 4 | Google Fonts |
| Precision | DM Sans | DM Mono | Google Fonts |
| Euphoric | Clash Display | Satoshi | Fontshare |
| Ghost | Cormorant | Cormorant Garamond | Google Fonts |
| Retro-Futurism | Share Tech Mono | Share Tech | Google Fonts |

### 2.2 — Type Scale (Modular, ratio 1.25)

```
--text-xs:    0.64rem   (10.24px)  — labels, captions, metadata
--text-sm:    0.8rem    (12.8px)   — secondary body, hints
--text-base:  1rem      (16px)     — primary body copy
--text-md:    1.25rem   (20px)     — sub-headings, callouts
--text-lg:    1.563rem  (25px)     — section headers
--text-xl:    1.953rem  (31px)     — page-level h2
--text-2xl:   2.441rem  (39px)     — hero sub-headings
--text-3xl:   3.052rem  (49px)     — hero headlines
--text-4xl:   3.815rem  (61px)     — display / poster type
--text-5xl:   4.768rem  (76px)     — ultra-large display
```

### 2.3 — Font Weight Map

```
100  Thin       — decorative only, never body
300  Light      — taglines, secondary display
400  Regular    — ALL body copy, labels, metadata
500  Medium     — UI labels, nav items, card titles
600  SemiBold   — emphasized headings, active states
700  Bold       — hero headlines, primary CTAs
800  ExtraBold  — display type at large sizes only
900  Black      — maximum 1 instance per layout
```

### 2.4 — Line Height & Letter Spacing

```
Body copy:      line-height: 1.7;   letter-spacing: 0.01em;
UI labels:      line-height: 1.3;   letter-spacing: 0.04em;
Headings:       line-height: 1.1;   letter-spacing: -0.03em;  (large, tight)
Display type:   line-height: 0.95;  letter-spacing: -0.05em;  (ultra tight)
Mono/code:      line-height: 1.6;   letter-spacing: 0.02em;
Caps/labels:    line-height: 1.2;   letter-spacing: 0.12em;   (ALWAYS when uppercased)
```

### 2.5 — Typography Anti-Patterns (NEVER do these)

- Never use `font-weight: 600` or `700` on body copy paragraphs
- Never set `letter-spacing` to negative values on body text
- Never mix more than 2 typeface families in one component
- Never underline text as decoration (only for links)
- Never set `font-size` below `0.75rem` (12px) for readable content
- Never use ALL CAPS without `letter-spacing: 0.1em` minimum

---

## 3 · Color System

### 3.1 — Color Architecture

Every UI must define exactly **4 tiers** of color:

```
TIER 1 — Background     (base canvas, 1-2 values)
TIER 2 — Surface        (cards, panels, 1-2 values above background)
TIER 3 — Foreground     (text, icons, borders)
TIER 4 — Accent         (CTAs, highlights, active states — max 2 colors)
```

### 3.2 — CSS Custom Property Naming Convention

```css
:root {
  /* --- BACKGROUNDS --- */
  --bg-base:          ;   /* page canvas */
  --bg-surface:       ;   /* card, panel surface */
  --bg-elevated:      ;   /* modal, dropdown — floats above surface */
  --bg-overlay:       ;   /* scrim behind modals */
  --bg-inverted:      ;   /* dark section within light theme */

  /* --- FOREGROUNDS --- */
  --fg-primary:       ;   /* body text, primary icons */
  --fg-secondary:     ;   /* captions, placeholders, muted text */
  --fg-tertiary:      ;   /* disabled states, ghost text */
  --fg-inverted:      ;   /* text on dark/accent backgrounds */
  --fg-on-accent:     ;   /* text on accent-colored buttons/badges */

  /* --- BORDERS --- */
  --border-subtle:    ;   /* hairlines, default card borders */
  --border-moderate:  ;   /* hover states, input focus rings */
  --border-strong:    ;   /* selected states, emphasis borders */

  /* --- ACCENT --- */
  --accent-primary:   ;   /* main CTA color */
  --accent-primary-h: ;   /* hover state (10% darker or lighter) */
  --accent-secondary: ;   /* secondary actions, links */
  --accent-glow:      ;   /* rgba version for glow effects */

  /* --- SEMANTIC --- */
  --color-success:    ;
  --color-warning:    ;
  --color-danger:     ;
  --color-info:       ;

  /* --- SEMANTIC SURFACES --- */
  --bg-success:       ;   /* e.g. rgba(34,197,94,0.1) */
  --bg-warning:       ;
  --bg-danger:        ;
  --bg-info:          ;
}
```

### 3.3 — Mandatory Dark Mode

Every color token MUST have a dark-mode counterpart:

```css
@media (prefers-color-scheme: dark) {
  :root {
    /* Flip every token — not just invert, but rethink for dark context */
  }
}
```

Rule: Dark mode is NOT `filter: invert(1)`. Manually specify dark values.
Accents should shift 15-20% lighter in dark mode to maintain contrast.

### 3.4 — Contrast Ratios (WCAG 2.2 AA minimum, AAA target)

| Context | AA Min | AAA Target |
|---------|--------|------------|
| Body text (≥16px) | 4.5:1 | 7:1 |
| Large text (≥24px bold) | 3:1 | 4.5:1 |
| UI components & icons | 3:1 | 4.5:1 |
| Placeholder text | 4.5:1 | — |
| Decorative elements | No requirement | — |

**Tool:** Always mentally check accent-on-surface contrast before committing.

### 3.5 — Color Anti-Patterns

- Never use pure `#000000` or `#FFFFFF` — use near-black (`#0a0a0b`) and near-white (`#fafaf9`)
- Never have more than 2 accent colors active at once
- Never rely on color alone to convey meaning (pair with icon/label/pattern)
- Never use purple-on-white gradients (the cliché of AI design)
- Never set `opacity: 0.5` on text as a way to create hierarchy — use proper `--fg-secondary` token

---

## 4 · Spacing & Layout System

### 4.1 — Base Spacing Unit

All spacing derives from an 8px base unit:

```
--space-1:   4px    (0.25rem)
--space-2:   8px    (0.5rem)   ← BASE UNIT
--space-3:   12px   (0.75rem)
--space-4:   16px   (1rem)
--space-5:   20px   (1.25rem)
--space-6:   24px   (1.5rem)
--space-8:   32px   (2rem)
--space-10:  40px   (2.5rem)
--space-12:  48px   (3rem)
--space-16:  64px   (4rem)
--space-20:  80px   (5rem)
--space-24:  96px   (6rem)
--space-32:  128px  (8rem)
```

**Rule:** Never use arbitrary pixel values. Always reference a token.

### 4.2 — Layout Grid

```
Max content width:  1280px (--width-content)
Wide content:       1536px (--width-wide)
Narrow/prose:       720px  (--width-prose)
Sidebar width:      280px  (--width-sidebar)

Horizontal padding (mobile):  16px
Horizontal padding (tablet):  32px
Horizontal padding (desktop): 48px

Column count:  12 (desktop), 8 (tablet), 4 (mobile)
Column gap:    24px (desktop), 16px (tablet), 12px (mobile)
```

### 4.3 — Border Radius Scale

```
--radius-none:   0
--radius-xs:     2px     (subtle, inputs on brutalist themes)
--radius-sm:     4px     (tags, badges, chips)
--radius-md:     8px     (default cards, buttons, inputs)
--radius-lg:     12px    (panels, modals, larger cards)
--radius-xl:     16px    (hero sections, feature cards)
--radius-2xl:    24px    (bold, expressive containers)
--radius-3xl:    32px    (pill-shaped large elements)
--radius-full:   9999px  (pills, avatars, circular icons)
```

### 4.4 — Elevation (Shadow System)

Elevation communicates layering — use sparingly.

```css
--shadow-none:  none
--shadow-xs:    0 1px 2px rgba(0,0,0,0.05)
--shadow-sm:    0 2px 4px rgba(0,0,0,0.07), 0 1px 2px rgba(0,0,0,0.04)
--shadow-md:    0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.05)
--shadow-lg:    0 8px 24px rgba(0,0,0,0.10), 0 4px 8px rgba(0,0,0,0.06)
--shadow-xl:    0 16px 48px rgba(0,0,0,0.12), 0 8px 16px rgba(0,0,0,0.07)
--shadow-glow:  0 0 24px var(--accent-glow)   (neon/glow themes only)
--shadow-inner: inset 0 2px 6px rgba(0,0,0,0.08)
```

**Dark mode shadows:** Swap `rgba(0,0,0,...)` for `rgba(0,0,0,...)` at 2–3× opacity
(dark themes need stronger shadows to establish depth on dark surfaces).

---

## 5 · Motion & Animation System

### 5.1 — Duration Scale

```
--dur-instant:   50ms    (state changes, toggles)
--dur-fast:      100ms   (micro-interactions, hover effects)
--dur-base:      200ms   (most transitions)
--dur-moderate:  350ms   (modals, drawers)
--dur-slow:      500ms   (page transitions, complex reveals)
--dur-crawl:     800ms   (dramatic reveals, hero animations)
--dur-drift:    1200ms   (ambient, looping backgrounds)
```

### 5.2 — Easing Library

```css
--ease-default:    cubic-bezier(0.4, 0, 0.2, 1)      /* material standard */
--ease-in:         cubic-bezier(0.4, 0, 1, 1)          /* exits */
--ease-out:        cubic-bezier(0, 0, 0.2, 1)          /* entrances */
--ease-spring:     cubic-bezier(0.34, 1.56, 0.64, 1)   /* overshoots — tactile */
--ease-bounce:     cubic-bezier(0.68, -0.55, 0.265, 1.55)  /* playful bounce */
--ease-smooth:     cubic-bezier(0.25, 0.1, 0.25, 1)    /* smooth, subtle */
--ease-sharp:      cubic-bezier(0.4, 0, 0.6, 1)         /* mechanical, precise */
--ease-anticipate: cubic-bezier(0.4, -0.3, 0.2, 1.3)   /* pull-back then launch */
```

### 5.3 — Animation Principles

**The 5 Laws of Antigravity Motion:**

1. **Purpose** — Every animation must serve a functional purpose (orient, direct, confirm)
2. **Hierarchy** — Primary actions animate more dramatically than secondary
3. **Physics** — Heavier objects move slower; lighter elements spring more
4. **Continuity** — Objects enter from the direction they came from
5. **Rest** — Every animation must reach a clean resting state

### 5.4 — Standard Animation Patterns

```css
/* Page entrance — staggered reveal */
@keyframes ag-rise {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
.ag-rise { animation: ag-rise var(--dur-slow) var(--ease-out) both; }
.ag-rise:nth-child(1) { animation-delay: 0ms; }
.ag-rise:nth-child(2) { animation-delay: 80ms; }
.ag-rise:nth-child(3) { animation-delay: 160ms; }

/* Float (ambient, looping) */
@keyframes ag-float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33%       { transform: translateY(-8px) rotate(0.5deg); }
  66%       { transform: translateY(-4px) rotate(-0.5deg); }
}
.ag-float { animation: ag-float 6s var(--ease-smooth) infinite; }

/* Scale-in (modals, popovers) */
@keyframes ag-scale-in {
  from { opacity: 0; transform: scale(0.92); }
  to   { opacity: 1; transform: scale(1); }
}
.ag-scale-in { animation: ag-scale-in var(--dur-moderate) var(--ease-spring) both; }

/* Shimmer (loading state) */
@keyframes ag-shimmer {
  from { background-position: -400px 0; }
  to   { background-position: 400px 0; }
}
.ag-skeleton {
  background: linear-gradient(90deg, var(--bg-surface) 25%, var(--bg-elevated) 50%, var(--bg-surface) 75%);
  background-size: 800px 100%;
  animation: ag-shimmer 1.4s var(--ease-default) infinite;
}

/* Pulse (status indicators) */
@keyframes ag-pulse {
  0%, 100% { box-shadow: 0 0 0 0 var(--accent-glow); }
  50%       { box-shadow: 0 0 0 6px transparent; }
}
.ag-pulse { animation: ag-pulse 2s ease infinite; }
```

### 5.5 — Reduced Motion (mandatory)

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 6 · Component Library Specifications

### 6.1 — Button System

Every button variant must specify: height, padding, font-size, font-weight, border-radius,
background, border, color, hover state, active state, focus-visible ring, disabled state.

```
PRIMARY button:
  height: 44px | padding: 0 24px | font-size: 15px | font-weight: 600
  bg: var(--accent-primary) | color: var(--fg-on-accent)
  hover: bg 10% darker + shadow-sm | active: scale(0.97)
  focus-visible: outline 2px var(--accent-primary) offset 2px
  disabled: opacity 0.4, cursor not-allowed

SECONDARY button:
  height: 44px | padding: 0 24px | font-size: 15px | font-weight: 500
  bg: var(--bg-surface) | border: 1px var(--border-moderate) | color: var(--fg-primary)
  hover: bg var(--bg-elevated) | active: scale(0.97)

GHOST button:
  height: 44px | padding: 0 20px | font-size: 15px | font-weight: 500
  bg: transparent | color: var(--fg-secondary)
  hover: bg var(--bg-surface) | color: var(--fg-primary)

ICON button:
  width: 40px | height: 40px | border-radius: var(--radius-md)
  bg: transparent | hover: bg var(--bg-surface)

SIZES: sm (36px / px-16 / 13px), md (44px / px-24 / 15px), lg (52px / px-32 / 17px)
```

### 6.2 — Input System

```
INPUT FIELD:
  height: 44px | padding: 0 16px | font-size: 15px
  bg: var(--bg-surface) | border: 1px var(--border-subtle)
  border-radius: var(--radius-md) | color: var(--fg-primary)
  placeholder-color: var(--fg-tertiary)
  focus: border-color var(--accent-primary) + shadow: 0 0 0 3px var(--accent-glow)
  error: border-color var(--color-danger)
  disabled: opacity 0.5 | bg: var(--bg-base)
  transition: border-color 150ms, box-shadow 150ms

TEXTAREA:
  min-height: 120px | padding: 12px 16px | resize: vertical
  Same states as INPUT FIELD

SELECT:
  height: 44px | appearance: none | custom chevron icon
  Same states as INPUT FIELD

LABEL: font-size: 13px | font-weight: 500 | margin-bottom: 6px | color: var(--fg-secondary)
HELPER: font-size: 12px | margin-top: 4px | color: var(--fg-tertiary)
ERROR:  font-size: 12px | margin-top: 4px | color: var(--color-danger)
```

### 6.3 — Card System

```
BASE CARD:
  bg: var(--bg-surface) | border: 1px var(--border-subtle)
  border-radius: var(--radius-lg) | padding: var(--space-6)
  transition: border-color 200ms, box-shadow 200ms

INTERACTIVE CARD (hover effect):
  hover: border-color var(--border-moderate) + shadow-md + translateY(-2px)

ELEVATED CARD:
  bg: var(--bg-elevated) | shadow-md + border: none

GHOST CARD:
  bg: transparent | border: 1px dashed var(--border-subtle)
  hover: bg var(--bg-surface) | border-style: solid
```

### 6.4 — Badge / Chip System

```
SIZES: xs (20px h / 6px 8px padding) | sm (24px h / 8px 10px) | md (28px h / 8px 12px)
FONT:  font-size matching size | font-weight: 500 | letter-spacing: 0.02em

VARIANTS:
  default:  bg var(--bg-elevated) | border: 1px var(--border-subtle) | fg-secondary
  primary:  bg var(--accent-glow) | color: var(--accent-primary)
  success:  bg var(--bg-success)  | color: var(--color-success)
  warning:  bg var(--bg-warning)  | color: var(--color-warning)
  danger:   bg var(--bg-danger)   | color: var(--color-danger)
  solid:    bg var(--accent-primary) | color: var(--fg-on-accent)
```

### 6.5 — Navigation

```
NAV ITEM (default):
  height: 40px | padding: 0 12px | border-radius: var(--radius-md)
  color: var(--fg-secondary) | font-weight: 500 | font-size: 14px
  transition: all 150ms

NAV ITEM (hover):
  bg: var(--bg-surface) | color: var(--fg-primary)

NAV ITEM (active):
  bg: var(--bg-surface) | color: var(--accent-primary)
  [optional] left border: 2px solid var(--accent-primary) (sidebar nav)

NAV DIVIDER:
  height: 1px | bg: var(--border-subtle) | margin: 4px 0

MOBILE NAV:
  Fixed bottom or slide-in drawer | backdrop blur or solid bg
  Touch target minimum: 44×44px
```

### 6.6 — Modal / Dialog

```
BACKDROP:  bg: rgba(0,0,0,0.5) | backdrop-filter: blur(4px)
PANEL:     bg: var(--bg-elevated) | border-radius: var(--radius-xl)
           shadow-xl | max-width: 560px | width: calc(100% - 32px)
           padding: var(--space-8) | animation: ag-scale-in
CLOSE BTN: position: absolute top-4 right-4 | icon button style
HEADER:    font-size: var(--text-xl) | font-weight: 700 | margin-bottom: 8px
BODY:      color: var(--fg-secondary) | line-height: 1.7
FOOTER:    display: flex | justify-content: flex-end | gap: 12px | margin-top: 24px
```

---

## 7 · Interaction Design Patterns

### 7.1 — Hover States
All interactive elements MUST have a visible hover state.
Hover changes must use `transition` (never instant jumps).
Minimum hover contrast delta: 15% lightness shift.

### 7.2 — Focus States
All interactive elements MUST have a visible focus-visible ring.

```css
:focus-visible {
  outline: 2px solid var(--accent-primary);
  outline-offset: 2px;
  border-radius: inherit;
}
```

Never use `outline: none` without replacing with a visible alternative.

### 7.3 — Loading States
Every async action needs a loading state:

- **Button:** Replace label with spinner, disable, maintain width
- **Card:** Skeleton shimmer (ag-skeleton class)
- **Page:** Skeleton layout matching final structure
- **Inline data:** Placeholder bars of varying width (60%, 80%, 45%)

### 7.4 — Empty States
Every list/table/data view needs an empty state:
- Icon (subtle, large ~48px)
- Heading (what's empty)
- Body (why and what to do)
- Optional: Primary CTA

### 7.5 — Error States
- Form-level: Banner above submit button
- Field-level: Red border + error message below
- Page-level: Centered error card with retry action
- Toast/notification: Slides in from top-right

---

## 8 · Accessibility Standards

### 8.1 — Mandatory Requirements (WCAG 2.2 AA)

- All text meets contrast ratio minimums (§3.4)
- All interactive elements have `:focus-visible` styles (§7.2)
- All images have meaningful `alt` attributes (or `alt=""` if decorative)
- All form inputs have associated `<label>` elements
- All icon-only buttons have `aria-label`
- All modals trap focus and restore on close
- All animated content respects `prefers-reduced-motion`
- Keyboard navigation works for ALL interactive elements
- No content relies on color alone to convey meaning

### 8.2 — Semantic HTML Rules

```
Never use <div> for interactive elements — use <button>, <a>, <input>
Never use <span> for headings — use <h1>–<h6>
Use <nav> for navigation, <main> for primary content
Use <section> with aria-label when grouping content
Use role="status" for live regions (toasts, loading states)
Use aria-expanded on toggles, aria-haspopup on dropdown triggers
Use aria-current="page" on active nav items
```

### 8.3 — Touch Targets (Mobile)

Minimum touch target: **44×44px** for all interactive elements.
Minimum gap between touch targets: **8px**.

---

## 9 · Performance Standards

### 9.1 — Core Web Vitals Targets

| Metric | Target | Description |
|--------|--------|-------------|
| LCP | < 2.5s | Largest Contentful Paint |
| FID | < 100ms | First Input Delay |
| CLS | < 0.1 | Cumulative Layout Shift |
| INP | < 200ms | Interaction to Next Paint |
| FCP | < 1.8s | First Contentful Paint |
| TTFB | < 600ms | Time to First Byte |

### 9.2 — Asset Rules

- Images: Always specify `width` and `height` to prevent CLS
- Images: Use `loading="lazy"` for below-the-fold content
- Images: Use modern formats (WebP, AVIF) with fallbacks
- Fonts: `font-display: swap` to prevent FOIT
- Icons: Prefer SVG sprite or icon font over individual PNGs
- CSS: Critical styles inline, non-critical deferred
- JS: `defer` or `type="module"` on non-critical scripts

### 9.3 — CSS Performance Rules

```css
/* Prefer transform + opacity for animations (compositor-only, no layout) */
/* GOOD */  transform: translateY(-2px);
/* BAD  */  top: calc(top - 2px);

/* Contain layout for large components */
.card { contain: layout style; }

/* Use will-change only for actively animating elements, remove after */
.animating { will-change: transform; }

/* Prefer CSS Grid and Flexbox over absolute positioning */
```

---

## 10 · Code Quality Standards

### 10.1 — CSS Architecture (for component scope)

```
Variables    → :root { --token: value; }
Base         → html, body reset
Layout       → grid/flex structure
Components   → scoped, BEM-inspired naming
States       → :hover, :focus, :active, [disabled], [aria-*]
Utilities    → Single-purpose helper classes
Dark mode    → @media (prefers-color-scheme: dark)
Motion       → @media (prefers-reduced-motion: reduce)
```

### 10.2 — BEM-Inspired Naming

```
Block:     .card
Element:   .card__header, .card__body, .card__footer
Modifier:  .card--elevated, .card--ghost
State:     .card.is-loading, .card.is-selected (or use data-* attributes)
```

### 10.3 — JavaScript Interaction Standards

```js
// Always use passive event listeners for scroll/touch
element.addEventListener('scroll', handler, { passive: true });

// Debounce resize/scroll handlers
const debouncedResize = debounce(handleResize, 100);

// Use IntersectionObserver for scroll-triggered animations (not scroll event)
const observer = new IntersectionObserver(callback, { threshold: 0.1 });

// Cleanup event listeners to prevent memory leaks
return () => element.removeEventListener('event', handler);

// Use CSS classes for state changes, not inline styles
element.classList.add('is-active'); // not element.style.display = 'block'
```

### 10.4 — React-Specific Standards (when applicable)

```jsx
// Always use semantic HTML elements
// Never use onClick on non-interactive elements without role
// Extract magic numbers into named constants
// Memoize expensive computations with useMemo
// Debounce event handlers that fire rapidly
// Use CSS modules or Tailwind — no inline style objects for layout
// Keep component files under 200 lines — extract sub-components
// Prop types or TypeScript interfaces for all component props
```

---

## 11 · Responsive Design Parameters

### 11.1 — Breakpoint System

```css
/* Mobile-first approach */
/* xs:  0px    - 479px   */ /* No min-width needed */
/* sm:  480px  - 767px   */ @media (min-width: 480px)  { }
/* md:  768px  - 1023px  */ @media (min-width: 768px)  { }
/* lg:  1024px - 1279px  */ @media (min-width: 1024px) { }
/* xl:  1280px - 1535px  */ @media (min-width: 1280px) { }
/* 2xl: 1536px+          */ @media (min-width: 1536px) { }
```

### 11.2 — Responsive Typography

```css
/* Fluid type scaling using clamp() */
--text-hero:    clamp(2.5rem, 6vw, 5rem);
--text-h1:      clamp(2rem,   4vw, 3.5rem);
--text-h2:      clamp(1.5rem, 3vw, 2.5rem);
--text-h3:      clamp(1.25rem, 2vw, 1.75rem);
```

### 11.3 — Responsive Spacing

```css
/* Container padding scales with viewport */
--page-padding: clamp(1rem, 4vw, 3rem);

/* Section spacing scales */
--section-gap:  clamp(3rem, 8vw, 8rem);
```

---

## 12 · The Antigravity Manifesto (Execute Every Time)

```
1. CHOOSE a clear aesthetic archetype. Commit fully. No half-measures.
2. DESIGN the type scale first. Hierarchy is everything.
3. DEFINE your 4-tier color system before touching components.
4. BUILD the most important component first. It sets the visual language.
5. ANIMATE with purpose. Every motion should tell a story.
6. TEST every interactive state: hover, focus, active, disabled, loading, error, empty.
7. CHECK contrast. Accessibility is not optional.
8. VERIFY mobile. If it breaks at 375px, it's not done.
9. ADD the one unforgettable detail that makes this UI irreplaceable.
10. SHIP clean code. Future you will inherit today's choices.
```

---

*Antigravity v1.0.0 — Defy the pull of mediocre UI.*
