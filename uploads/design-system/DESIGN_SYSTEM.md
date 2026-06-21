# Nordicrank Design System

> **Version 1.1** — Extracted from the Nordicrank Marketplace prototype, May 2026.
>
> This document is the single source of truth for the look and feel of all
> Nordicrank product surfaces. Although the prototype it was extracted from is
> a marketplace, the system is **product-agnostic**: it covers the primitives,
> patterns and rules needed to build any operator-facing dashboard, admin
> interface, settings panel or data-heavy app — link-related or not.
>
> Use it as a reference when building new screens, integrating new tools, or
> handing off work to engineering.
>
> **Companion files**
> - `tokens.css` — drop-in CSS variables for every value in this document.
> - `Style Guide.html` — visual reference: open in a browser to see every token,
>   component and pattern rendered live.

---

## Table of contents

1. [Design principles](#design-principles)
2. [Color](#color)
3. [Typography](#typography)
4. [Spacing & layout](#spacing--layout)
5. [Radii](#radii)
6. [Shadows & elevation](#shadows--elevation)
7. [Motion](#motion)
8. [Iconography](#iconography)
9. [Components](#components)
10. [Patterns](#patterns)
11. [Voice & writing](#voice--writing)
12. [Don'ts](#donts)

---

## Design principles

The Nordicrank UI is **dense, calm and information-rich**. It is built for
operators who scan a lot of data — entities, prices, metrics, statuses — and
need to act quickly. Five rules anchor every decision:

1. **Slate first, color second.** Neutral surfaces and text dominate. Color
   is reserved for status, action and meaning.
2. **One brand color.** Green (`#22C55E`) is the only positive/confirm/
   primary-affirmative color. Don't introduce a second.
3. **Information density is good.** Tight padding, small type, multi-column
   tables. Whitespace exists to *separate*, not to fill.
4. **Borders, not fills.** Cards and surfaces are defined by `1px` slate
   borders on white. Avoid heavy fills, gradients or drop shadows on resting
   elements.
5. **Numbers are tabular.** Any number a user might compare across rows uses
   `font-variant-numeric: tabular-nums`.

---

## Color

### Neutrals — Slate scale

The entire UI is built on a 10-step slate scale. Memorise these — every other
color decision references them.

| Token            | Hex       | Used for                                           |
| ---------------- | --------- | -------------------------------------------------- |
| `--nr-slate-50`  | `#F8FAFC` | Page background, table header background           |
| `--nr-slate-100` | `#F1F5F9` | Hover background, soft chip background, dividers   |
| `--nr-slate-200` | `#E2E8F0` | **Default border** — used everywhere               |
| `--nr-slate-300` | `#CBD5E1` | Dashed/secondary border, scrollbar thumb           |
| `--nr-slate-400` | `#94A3B8` | Placeholder text, muted icons                      |
| `--nr-slate-500` | `#64748B` | Secondary text                                     |
| `--nr-slate-600` | `#475569` | Tertiary text, button-secondary label              |
| `--nr-slate-700` | `#334155` |                                                    |
| `--nr-slate-800` | `#1E293B` |                                                    |
| `--nr-slate-900` | `#0F172A` | **Primary text**, dark CTA fill, page title        |

### Brand — Green

Green means *action, positive, mine*. It is the only color used for primary
buy/confirm CTAs.

| Token             | Hex       | Used for                                  |
| ----------------- | --------- | ----------------------------------------- |
| `--nr-green-50`   | `#F0FDF4` | "In project" chip background              |
| `--nr-green-100`  | `#DCFCE7` | "No license: yes" pill                    |
| `--nr-green-200`  | `#BBF7D0` | Success borders, "in project" border      |
| `--nr-green-500`  | `#22C55E` | **Primary CTA fill** ("Buy", checkmarks)  |
| `--nr-green-600`  | `#16A34A` | CTA hover, "trend up"                     |
| `--nr-green-700`  | `#15803D` | Success text, in-cart counter             |

### Semantic accents

Each accent has the same three-piece structure: a soft background, a slightly
stronger border, and a strong text/icon variant. Never use the strong variant
as a fill.

#### Warning — Amber

Used for "needs action" rows, draft/awaiting states, "Custom" badges, info
banners, and the flat-trend indicator.

```
bg:     #FFFBEB  (alt: #FEF3C7)
border: #FEF3C7  (strong: #FDE68A)
text:   #78350F  (alt: #A16207)
icon:   #D97706
stripe: #F59E0B   ← left-edge accent on needs-action rows
```

#### Danger — Red

Destructive actions, errors, missing-required validation, "trend down".

```
bg:     #FEF2F2
border: #FECACA
text:   #B91C1C  (strong: #7F1D1D)
icon:   #EF4444  (strong: #DC2626)
```

#### Info — Blue

Trust Flow / Majestic accents, neutral popover headlines.

```
bg:        #DBEAFE  (soft: #E0E7FF)
border:    #BFDBFE
text:      #1E3A8A  (alt: #3730A3)
strong:    #1E40AF   ← Majestic blue
```

### Color rules

- **Borders are always `--nr-slate-200`** unless the element is in an active,
  warning or error state.
- **Hover never changes hue** on neutral surfaces — only lightness
  (`#F1F5F9` background or `#94A3B8` border).
- **Status colors are paired.** A red icon next to red text on a red-tinted
  background. Never mix accent palettes.
- **No gradients.** Anywhere.

---

## Typography

### Font stack

```css
font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

For numbers in dense tables and monospace contexts (domain names, IDs, code):

```css
font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
```

### Scale

The type scale is **deliberately tight**. Most of the UI lives between 11–14 px.
Don't introduce in-between sizes.

| Token          | px  | Use                                                       |
| -------------- | --- | --------------------------------------------------------- |
| `--nr-text-9`  | 9   | Multiplier badges, micro-labels inside pills              |
| `--nr-text-10` | 10  | Table micro-meta, "Free" pills, sparkline labels          |
| `--nr-text-11` | 11  | Timestamps, eyebrow caps, table column headers            |
| `--nr-text-12` | 12  | Secondary body, dropdown options, button labels           |
| `--nr-text-13` | 13  | **Primary body**, table cell content                      |
| `--nr-text-14` | 14  | Base body (`<body>` default), price display               |
| `--nr-text-15` | 15  | Card title, section title                                 |
| `--nr-text-18` | 18  | Page subtitle, h2                                         |
| `--nr-text-22` | 22  | Total amount, gauge value                                 |
| `--nr-text-24` | 24  | Page title (h1)                                           |

### Weights

Only four are used. Don't use 300 or 800.

- `400` regular — body
- `500` medium — secondary controls
- `600` semibold — emphasis, selected state, labels
- `700` bold — headings, prices, badges, button labels

### Line height

- `1.2` — headings
- `1.4` — short body / dense UI labels
- `1.5` — paragraph body (default)
- `1.55` — relaxed paragraph (tooltips, popover prose)

### Letter spacing

- `-0.3px` — page titles (h1)
- `0` — everything else (default)
- `0.4px` — uppercase eyebrow caps
- `0.6px` — uppercase section headers (e.g. dropdown group titles)

### Type rules

- **All numbers in tables and pills** use `font-variant-numeric: tabular-nums`.
- **Headings get `letter-spacing: -0.3px`** to feel solid; body never tightens.
- **Eyebrow labels** (`"BILLING"`, `"STANDARD CONTENT"`) are 10–11 px,
  weight 600–700, uppercase, slate-400, with `0.4–0.6px` letter-spacing.
- **Domain names** in tables use the monospace stack with weight 600.

---

## Spacing & layout

### 4 px base

The grid is 4 px. Spacing values used in production:
`4, 6, 8, 10, 12, 14, 16, 20, 22, 24, 28, 32`. Avoid in-between values.

### Page shell

```
max-width:    1440px
padding:      32px (vertical) × 28px (horizontal)
margin:       0 auto
background:   #F8FAFC
```

### Card / section

```
background:   #FFFFFF
border:       1px solid #E2E8F0
border-radius: 12px
padding:      18–22px
```

### Tables

```
header row:   background #F8FAFC, border-top + border-bottom 1px #E2E8F0
header cell:  10px 8px padding, fontSize 11px, weight 700, slate-600 uppercase
body cell:    14px 8px padding, fontSize 13px, slate-900
row divider:  none — rely on padding rhythm; use background hover instead
```

---

## Radii

The radius scale has **purpose-driven steps** — not a generic 1× / 2× / 3×.

| Token              | px  | Use                                            |
| ------------------ | --- | ---------------------------------------------- |
| `--nr-radius-xs`   | 4   | Multiplier badges (`x1.4`), tiny chips         |
| `--nr-radius-sm`   | 6   | Dropdown options, small buttons                |
| `--nr-radius-md`   | 7   | Form fields, dropdown triggers                 |
| `--nr-radius-lg`   | 8   | Primary buttons, popovers, dropdowns           |
| `--nr-radius-xl`   | 9   | Modal inputs                                   |
| `--nr-radius-2xl`  | 10  | Tooltips, modal containers                     |
| `--nr-radius-3xl`  | 12  | **Cards, sections** — the big container radius |
| `--nr-radius-pill` | 999 | Pills, gauges, scroll thumbs, chips            |

---

## Shadows & elevation

All shadows are slate-tinted. **Never pure black.** Three flavors:

- **Resting cards** — *no shadow.* Defined by border alone.
- **Floating panel (dropdown, popover)** — `0 8px 24px rgba(15,23,42,0.10)`.
- **Modal / important popover** — `0 12px 32px rgba(15,23,42,0.14), 0 2px 8px rgba(15,23,42,0.06)`.
- **Upward popup** (dropdown that flipped up) — same as floating, but with
  negative Y: `0 -8px 24px rgba(15,23,42,0.10)`.

Focus ring (interactive elements):
```
box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.18);   /* green */
box-shadow: 0 0 0 3px rgba(252, 165, 165, 0.18); /* error */
```

---

## Motion

Motion is **subtle, fast, color-only**. No bouncy animations, no large
transforms, no reveal sequences.

```
--nr-transition-fast:   0.10s ease;
--nr-transition-base:   0.12s ease;
--nr-transition-medium: 0.15s ease;
```

Apply to: `background`, `border-color`, `color`, `box-shadow`, `transform`
(only for `rotate(180deg)` on dropdown chevrons).

---

## Iconography

### Library and convention

The UI uses **inline SVG in [Lucide](https://lucide.dev) style**:

- 24×24 viewBox
- `fill="none"`, `stroke="currentColor"`
- `strokeWidth="1.8"` for resting icons
- `strokeWidth="2"` for action icons
- `strokeWidth="2.4"` or `2.6` for emphasized icons inside buttons
- `strokeLinecap="round"`, `strokeLinejoin="round"` always

Sizes used: `9, 11, 12, 13, 14, 15, 16, 17, 18, 22` (px).

```jsx
<svg width="13" height="13" viewBox="0 0 24 24" fill="none"
     stroke="currentColor" strokeWidth="1.8"
     strokeLinecap="round" strokeLinejoin="round">
  <path d="M20 6L9 17l-5-5" />
</svg>
```

### Color

Icons inherit `currentColor`. Tint with the parent's text color rather than
hardcoding fills. Default rest color is `--nr-slate-400` (`#94A3B8`); hovered
or active color is `--nr-slate-900` or the relevant accent.

---

## Components

### Buttons

Three variants. Heights are not fixed — they're a function of padding + font size.

#### Primary (green CTA)

```
background:    #22C55E
hover bg:      #16A34A
color:         #FFFFFF
padding:       8px 14px       (compact: 7px 12px)
border-radius: 8px
font-size:     12px
font-weight:   700
letter-spacing: 0.2px
border:        none
transition:    background 0.12s ease
```

Used for: positive primary actions — "Confirm", "Save changes", "Apply",
"Buy" (and similar verbs that move forward and create something).

#### Secondary (slate outline / white)

```
background:    #FFFFFF
color:         #475569
border:        1px solid #E2E8F0
hover border:  #94A3B8
padding:       8px 14px
border-radius: 8px
font-size:     12.5px
font-weight:   600
```

Used for: "Cancel", "Back", "Edit", and any neutral action sitting next to
a primary or destructive button.

#### Ghost / dark

```
background:    #0F172A
color:         #FFFFFF
hover bg:      slightly lighter slate-800
padding:       8px 14px
border-radius: 8px
font-size:     12.5px
font-weight:   600
border:        none
```

Used for: neutral primary actions when green isn't appropriate (e.g. submit
a form that doesn't celebrate, open a destructive flow's confirmation, or
trigger a workflow rather than a transaction).

### Form fields

```
background:     #FFFFFF
border:         1px solid #E2E8F0
border-radius:  9px
padding:        10px 12px
font-size:      13–13.5px
color:          #0F172A
placeholder:    #94A3B8
focus border:   #22C55E
focus shadow:   0 0 0 3px rgba(34,197,94,0.18)
error border:   #EF4444  (with error ring shadow)
transition:     border-color 0.12s, box-shadow 0.12s
```

Always include `font-family: inherit` on `<input>` / `<button>` / `<textarea>`.

### Dropdowns

The marketplace dropdown is a **portaled**, position-fixed popup that flips
upward when there isn't enough space below. Key behaviors:

- Trigger: 7px 10px padding, 7px radius, 12px font, hover border `#94A3B8`.
- Popup: rendered to `document.body` so it escapes overflow/stacking contexts.
- Auto-flip: if `window.innerHeight - rect.bottom < 290px` and there's more
  space above → flip up.
- Close on: outside click, scroll, escape.
- Section headers inside grouped dropdowns: 10 px, weight 700, slate-400,
  uppercase, `0.6px` tracking, with a `1px solid #F1F5F9` divider above.

### Pills & badges

| Use                            | bg          | border       | text       | example                |
| ------------------------------ | ----------- | ------------ | ---------- | ---------------------- |
| Neutral chip / score           | `#F1F5F9`   | `#E2E8F0`    | `#0F172A`  | numeric score, count   |
| Success / accepted             | `#F0FDF4`   | `#BBF7D0`    | `#15803D`  | "Active", "In project" |
| Warning / custom override      | `#FEF3C7`   | none         | `#A16207`  | "Custom", "Modified"   |
| Danger / multiplier / negative | `#FEF2F2`   | `#FECACA`    | `#EF4444`  | "x1.4", "-12%"         |
| Dark / emphasis                | `#0F172A`   | none         | `#FFFFFF`  | counter, "FREE" badge  |

Pill structure: `padding: 2–4px 8–11px`, `border-radius: 999px`, `font-size: 10–12px`,
`font-weight: 700`, tabular nums.

### Cards & sections

```
background:    #FFFFFF
border:        1px solid #E2E8F0
border-radius: 12px
padding:       0 (header padded internally)
```

Section headers inside a card: `15px / 700 / #0F172A`, with a `12px` muted
sublabel underneath.

### Tooltips

Light, white-background tooltips — *not* dark. Always rendered via
`ReactDOM.createPortal` to `document.body`.

```
background:     #FFFFFF
border:         1px solid #E2E8F0
border-radius:  10px
padding:        10px 14px
font-size:      12px
line-height:    1.55
color:          #0F172A
shadow:         0 8px 24px rgba(15,23,42,0.10), 0 2px 6px rgba(15,23,42,0.04)
default-width:  280px (clamps to viewport)
delay-in:       250 ms
```

### Popovers

Same surface treatment as tooltips but **clickable / hoverable**, used for
gauges, charts, breakdowns. Width 260–320 px, 16 px inner padding,
`border-radius: 12px`.

### Modals

```
overlay:        rgba(15, 23, 42, 0.45)
container bg:   #FFFFFF
container:      max-width 480–600px, border-radius 12px
header:         18px / 700 / #0F172A, with 13px muted subtitle
body padding:   20–24px
footer:         right-aligned, gap 8–10px between actions
```

### Tables

The fundamental data surface. Behaviour:

- Header row: `background #F8FAFC`, `borderTop + borderBottom 1px #E2E8F0`,
  cell `padding: 10px 8px`, font 11 px, weight 700, color slate-600,
  uppercase 0.4 tracking.
- Body row: `padding: 14px 8px` per cell, font 13 px, color `#0F172A`.
- Row hover: `background #FAFBFC`.
- Sticky borders only top/bottom of header — *no vertical column dividers*.
- Numeric cells: tabular-nums, often right-aligned.
- "Needs attention" row variant: full-row background `#FFFBEB`, **left-edge
  accent stripe** `4px solid #F59E0B`, with a small status pill in the first
  cell. Use this for any row that requires user input before progressing.

### Status pills

Three sizes/styles depending on context:

```
Live         #15803D on #F0FDF4 / #BBF7D0 border
Pending      #A16207 on #FEF3C7 / #FDE68A border
Failed       #B91C1C on #FEF2F2 / #FECACA border
Draft        #475569 on #F1F5F9 / #E2E8F0 border
```

---

## Patterns

### Empty states

Centered, vertical, generous breathing room. Structure:

```
icon (88×88 circle, #F1F5F9 bg, slate-400 stroke icon)
↓ 22px
title  (15px / 700 / slate-900)
↓ 6px
subtitle (13px / 500 / slate-500, max-width ~ 360px)
↓ 18px
primary CTA
```

### "Needs attention" pattern

When a row, item, or task requires user input before progressing:

1. Full-row tint with `#FFFBEB`.
2. `4px` left-edge stripe, `#F59E0B`.
3. A "Needs action" pill in the first cell or row title (warning palette).
4. The row's CTA uses the **dark/ghost** variant (`#0F172A` bg) — green is
   reserved for celebratory affirmation (buy, save, confirm-success), not
   workflow continuation.

Applies equally to: pending tasks in a queue, missing-data warnings on a
record, action-required notifications, incomplete onboarding steps.

### Currency display

Format numbers with the user's locale (the marketplace uses `sv-SE` so
thousands are separated by a non-breaking space). Examples:

```
SEK   "1 540 kr"
EUR   "154 €"
USD   "$154"
```

The currency symbol position follows locale convention (suffix for SEK/EUR,
prefix for USD). Always pair the number with `font-variant-numeric:
tabular-nums`.

### Tax / VAT breakdown

When showing a total that includes tax, **always show the breakdown** —
never a single "incl. tax" number:

```
Subtotal              1 540 kr
Tax/VAT (25%) [SE]      385 kr   ← jurisdiction chip next to label
──────────────────────────────────
Total (incl. tax)     1 925 kr   ← 22 px / 700, dashed top divider
```

When the rate is 0% (non-tax jurisdiction, exempt customer, etc.), keep the
line visible but mute it (`#94A3B8`) so the user understands it was
considered, not omitted.

### Score / metric visualizations

- **Gauge** — semicircle, 0–100, green fill (`#22C55E`) on slate-200 track.
  Centered numeric label inside. Use for any scalar 0–100 score.
- **Ring** — full circle, `8px` stroke, dark fill on a slate-100 track.
  Use when the gauge form factor doesn't fit (e.g. inside a popover beside
  a number readout).
- **Sparkline** — 80×28, polyline + filled area; color follows trend
  (green up, red down, slate flat). Interactive variant has crosshair on
  hover. Use anywhere a small trend signal accompanies a number.

### Header / topbar

- Sticky, `64 px` tall, white background, `1px solid #E2E8F0` bottom border.
- Logo left, navigation in middle, user/account controls right.
- Active nav link: `#0F172A`, weight 600, with no underline (selection is
  carried by weight + color contrast alone).
- Inactive nav link: `#64748B`, weight 500.
- Trailing utility icons (cart, notifications, settings): slate-500 stroke,
  with a count badge in dark slate (`#0F172A` bg, white text) when
  applicable. Use accent stroke (e.g. red) only when the icon itself signals
  a state — never just for emphasis.

---

## Voice & writing

- **Sentence case** for everything except eyebrow caps (which are uppercase).
- **Direct, operator-y.** Use the actual verb — "Save", "Apply", "Confirm",
  "Submit" — not vague encouragement ("Get started", "Let's go").
- **Numbers are facts.** "3 in cart", "12 active", "2 missing" — no
  marketing fluff or filler adjectives.
- **Empty states explain, then act.** Two short sentences max, then a CTA.
- **Errors are specific.** Name the field and the cause ("VAT number
  required for EU companies") rather than blanket "Please complete required
  fields".

---

## Don'ts

- ❌ Don't use gradients on backgrounds, buttons, or fills.
- ❌ Don't use drop shadows on resting cards. Borders only.
- ❌ Don't introduce a second brand color. Green is it.
- ❌ Don't use emoji for status. Use SVG icons + accent palettes.
- ❌ Don't write tooltips on dark backgrounds. White only.
- ❌ Don't use rounded-corner-with-left-border accent containers for callouts —
  use the warning info-banner pattern (full background tint, top-bordered).
- ❌ Don't introduce `font-size` values not in the scale.
- ❌ Don't pad numbers; use `tabular-nums` instead.
- ❌ Don't replace slate with cool-gray, neutral-gray, or zinc — the warm
  slate cast is part of the brand.

---

## States & interaction

Every interactive element has at minimum **rest**, **hover** and **focus**
states. Disabled is mandatory if the element can be conditionally
unavailable. Selected/active is required for elements that persist a
toggle (tabs, nav, switches).

### Hover

Hover is **subtle** — never dramatic. Three patterns cover almost everything:

1. **Surface tint.** Background shifts to `#F1F5F9` (or `#FAFBFC` for table
   rows). No size change.
2. **Border darken.** Default `#E2E8F0` border darkens to `#94A3B8`. Used
   on outline buttons, dropdown triggers, form fields.
3. **Brand swap.** Primary green (`#22C55E`) shifts to `#16A34A`; dark
   (`#0F172A`) shifts to `#1E293B`. Used on filled buttons.

Icons-only buttons get a `#F1F5F9` background pad (radius `6 px`) on hover
so the affordance is obvious without the icon itself moving.

### Focus

Focus shows a `3 px` semi-transparent ring. Two variants:

```
--nr-focus-ring: 0 0 0 3px rgba(34, 197, 94, 0.18);   /* default — green */
--nr-error-ring: 0 0 0 3px rgba(252, 165, 165, 0.18); /* error state    */
```

The focus ring replaces the browser's default outline. For form fields, the
border color also swaps to the accent (green for default focus, red for
error focus).

### Disabled

Disabled elements use:
```
opacity: 1            (don't fade)
color: #94A3B8        (slate-400)
background: #F1F5F9   (slate-100, only for filled buttons)
cursor: not-allowed
```
This keeps the element legible (not ghosted) but visually "off".

### Active / selected

For tabs, nav and toggles, selected state uses **weight + color** rather
than a fill. Selected: `#0F172A` weight 600. Unselected: `#64748B` weight
500. A 2 px bottom border in `#0F172A` underlines selected tabs.

### Loading

For in-button loading, replace the label with a spinning ring (slate-400,
14 px) and disable the button. For full-region loading, fade the region to
`opacity: 0.5` and overlay a centered spinner. **Never** use shimmer
skeletons — they don't fit the dense, neutral aesthetic.

---

## Implementation reference

For exact JSX implementations of each component, see the source files in
the marketplace prototype (Nordicrank-specific component names use the `NR`
prefix; the patterns themselves are general):

- `primitives.jsx` — Tooltip, Popover, Buttons, Pills, Gauges, Sparkline
- `cart-page.jsx` — Dropdowns (portaled, flip-up)
- `orders-page.jsx` — Table patterns, status pills, tax breakdown,
  needs-attention rows
- `settings-page.jsx` — Form fields, modals, multi-step inputs
- `topbar.jsx` — Header, navigation, user dropdown
- `table.jsx` — Generic table shell, sort headers, sticky scroll

When porting to a new product or to Claude Code:

1. Drop in `tokens.css` and reference variables instead of literals.
2. Read this document end-to-end before making component decisions.
3. Open `Style Guide.html` for visual confirmation of any token or pattern.
