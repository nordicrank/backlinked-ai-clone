# NordicRank Claude Design Input Pack

Datum: 2026-06-20  
Syfte: Exakt underlag att ge till Claude Design när första designutkastet ska skapas.

## Kort svar

Du behöver inte börja med GPT-image-2. Börja med Claude Design och låt den bygga layout + produkt-UI.

GPT-image-2 kan användas senare om du vill ha:
- abstrakta bakgrundsbilder
- founder/brand visuals
- illustrationer
- texture/hero background
- ad creatives

Men första utkastet ska vara:
- layout
- information architecture
- dashboard/product mockups
- cards/tables/tabs
- conversion flow

Inte bildgenererade assets.

## Vad ska bifogas till Claude Design?

### 1. Den viktigaste filen

Bifoga eller klistra in:

`/root/.openclaw/workspace/projects/nordicrank-website/homepage-design-brief.md`

Det är designfilen. Den är kort nog och byggd just för Claude Design.

### 2. Om Claude behöver mer copy

Bifoga även:

`/root/.openclaw/workspace/projects/nordicrank-website/homepage-content-draft.md`

Men börja helst utan den, annars kan Claude försöka få in för mycket text.

### 3. Screenshots från inspirationssidor

Claude Design kan troligen inte själv "besöka och förstå" sidorna på ett pålitligt sätt. Ge den screenshots.

Ta helst screenshots av:

#### Linkbroker.io
- hero
- marketplace/tool section
- publisher cards
- package/managed service section

Användning:
"Use this for structure and product section inspiration, not visual copy."

#### PPC.io
- hero
- product UI / AI-agent feeling
- typography/spacing/modern SaaS feel

Användning:
"Use this for modern AI-native SaaS feeling and confidence."

#### ContextPR.se
- process section
- proof/case sections
- clean Swedish premium tone

Användning:
"Use this for process/proof clarity, not for the hero."

### 4. Optional: nuvarande NordicRank screenshot

Bifoga screenshot av nuvarande nordicrank.com/se bara som "current site to improve from", inte som designriktning.

## Hur många screenshots?

Räcker med 6-10 screenshots totalt.

Rekommenderat:
- Linkbroker: 3 screenshots
- PPC.io: 2 screenshots
- ContextPR: 2 screenshots
- NordicRank current: 1 screenshot

Du behöver inte överdriva. För många screenshots kan göra Claude mer förvirrad.

## Ska du skapa HTML-mockups först?

Nej, inte först.

Bästa ordningen:

1. Claude Design gör första homepage concept från designbrief + screenshots.
2. Du väljer riktning: mer Linkbroker, mer PPC, mer egen.
3. Sedan kan vi bygga HTML/mockup om Claude-utkastet är lovande.
4. GPT-image-2 används bara om vi behöver specifika visuella assets.

## Ska du använda GPT-image-2 för produktmockups?

Nej. Produktmockups ska byggas som UI i designen, inte som rasterbilder.

Anledningen:
- dashboard/tables/cards behöver vara redigerbara
- text måste vara skarp
- data labels ska kunna ändras
- screenshots från AI-image blir ofta fel text och dålig UI-precision

GPT-image-2 är bättre för:
- hero background/texture
- abstract data/network visual
- subtle brand illustration
- founder image treatment
- maybe article/PR visual assets

## Exakt första prompt till Claude Design

Klistra in detta:

```text
I want to design a new homepage for NordicRank.

I am attaching:
1. A design brief for the homepage.
2. Screenshots from Linkbroker.io, PPC.io and ContextPR.se as visual references.

Important:
Do not copy any reference site directly.

Use Linkbroker mainly for marketplace/product structure.
Use PPC.io mainly for modern AI-native SaaS feeling.
Use ContextPR mainly for process/proof clarity.

NordicRank should feel like:
Premium Scandinavian SaaS + Nordic backlink marketplace + link intelligence platform.

It should NOT feel like:
- a generic SEO agency
- a cheap backlink shop
- a crypto/casino affiliate tool
- a generic AI startup landing page
- a spreadsheet with filters

Main H1:
Build better backlinks in the Nordics

Subheadline:
NordicRank helps agencies, affiliates and brands find, buy and monitor high-quality backlinks across Sweden, Norway, Finland and Denmark with vetted inventory, transparent data, price guarantee and AI-driven link valuation.

Primary design goal:
Create a desktop homepage concept that feels product-led, credible and premium. The first screen should clearly show a realistic product interface, not a generic illustration.

Hero product UI should show tabs:
- Marketplace
- SERP Scanner
- Semantic Matcher
- Monitoring

Use realistic UI elements:
- publisher cards
- filters
- tables
- status badges
- link monitoring checks
- SERP scanner results
- semantic match scores

Hero proof chips:
- Vetted Nordic inventory
- No dead zero-traffic sites
- Price guarantee
- Indexing guarantee
- Link monitoring included

Please create the first desktop homepage concept with:
1. Header
2. Hero with product mockup
3. Proof bar
4. Problem section
5. Platform overview
6. Marketplace preview
7. SERP Scanner + Semantic Matcher
8. Link Monitoring
9. Managed Link Building + Hidden Inventory
10. Agencies / white-label / API
11. Link Valuation Model
12. Founder/trust
13. Publisher CTA
14. FAQ/final CTA

Keep the page visually polished, scannable and realistic. Use dashboard UI, cards, tabs and tables. Avoid generic SEO illustrations, stock photos, cartoons, purple gradients and agency fluff.
```

## Vad du ska säga om varje screenshot

När du laddar upp screenshots, skriv kort:

### Linkbroker screenshots
"Use these for structure: marketplace flow, publisher cards, product sections and managed linkbuilding framing. Do not copy the exact design."

### PPC.io screenshots
"Use these for feeling: modern SaaS confidence, clean hero, AI/data platform feel."

### ContextPR screenshots
"Use these for process/proof: clear step sections, case/proof layout and Swedish premium clarity."

### NordicRank current screenshot
"This is the current site. Improve the positioning and make it more product-led, premium and data-driven."

## Efter första utkastet

När Claude Design ger första utkastet, bedöm bara dessa saker:

1. Känns det premium?
2. Syns produkt-UI direkt?
3. Förstår man marketplace + monitoring?
4. Är hero ren?
5. Är den för lik Linkbroker/PPC?
6. Är det för mycket text?
7. Känns det som NordicRank, inte en generisk SaaS?

Ignorera fincopy i första varvet. Layout och känsla först.

