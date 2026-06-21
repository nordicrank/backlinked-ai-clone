# Claude Design-brief: NordicRank marketplace-startsida

Klistra in detta i claude.ai/design tillsammans med referensbilderna
(ref_desktop.png + ref_mobile.png).

---

## Prompt att klistra in

Build a modern SaaS landing page (homepage) for a backlink marketplace called
**NordicRank**. Use the uploaded screenshot as the exact layout reference, but
replace all branding with NordicRank. Recreate the structure 1:1, section by
section, then I will iterate on it.

**Style:** modern SaaS, dark navy hero, generous whitespace, rounded corners,
soft shadows, bold display headings. Clean and premium.

**Brand colors (adjust to NordicRank):**
- Background dark: #0c111d / #080808
- Surface white: #ffffff
- Accent (primary): lime #e1ff00  (swap to NordicRank's brand color if different)
- CTA blue: #156ef6
- Text gray: #475467, muted #758696

**Typography:** Plus Jakarta Sans or Inter (bold for headings, regular for body).

**Sections, top to bottom:**
1. **Navbar** sticky: logo left; center links Home / Team / Resources / Support;
   right: Login (text) + "Start now" (filled accent button).
2. **Hero** (dark): big headline "Buy backlinks, more efficiently than ever
   before." + subtext about a marketplace with 100,000+ publishers. Email input
   + "Start now" button + Google sign-in. Trust line "9,500+ satisfied users"
   with 5 stars. Below: a product UI mockup (a search/dashboard panel).
3. **Features row** (light): 6 cards — Linkfinder AI, High-quality backlinks,
   100,000+ Publishers, Advice & planning, Delivery times, "Our team is your team".
4. **Products**: heading "Tailored backlinks for all your needs" + 3 pricing/
   product cards — Backlinks, Link packages, Managed Linkbuilding.
5. **Testimonials**: "What our customers say" — card carousel with avatars.
6. **FAQ**: accordion, heading "Frequently Asked Questions".
7. **Blog**: "Keep up with the latest news" — 3 article cards.
8. **Footer** (dark): logo, link columns, legal row.

**Responsive:** desktop canvas 1280px, breakpoints at 991 / 767 / 478px.
Content container max-width ~1200px.

Make a design system (color + type + spacing tokens, button + card components)
so it can be synced to code later.

---

## Färgtokens (extraherade från originalet)

| Roll        | Hex       |
|-------------|-----------|
| BG mörk     | #0c111d   |
| BG svartare | #080808   |
| Yta vit     | #ffffff   |
| Accent lime | #e1ff00   |
| CTA blå     | #156ef6   |
| Blå alt     | #2d40ea   |
| Text grå    | #475467   |
| Text muted  | #758696   |
| Slate       | #353e5c   |

## Typsnitt
Original: Euclid Circular B (licensierat). Gratis ersättning som ser nästan
identisk ut: **Plus Jakarta Sans** eller **Inter**.

## Brytpunkter (Webflow-standard, originalets exakta)
- Desktop canvas: 1280px
- Tablet: <= 991px
- Mobil liggande: <= 767px
- Mobil stående: <= 478px
