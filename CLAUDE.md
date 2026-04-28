# Rij-Vrij Website — Claude Code Context

## Project
Astro 5 rijschool-website voor **Rij-Vrij Rijschool**. Gekloond en gerebranded van Auto-maat-website-astro op 2026-04-28.

**Lees eerst `REBRAND.md`** — dit bevat de volledige checklist van wat nog gedaan moet worden voor launch.

## Tech stack
- **Framework**: Astro 5 (`output: 'server'`)
- **Adapter**: `@astrojs/cloudflare` → deploy via Cloudflare Workers/Pages
- **CSS**: Tailwind CSS 3 (via `@astrojs/tailwind`)
- **Images**: `passthroughImageService()` — gebruik altijd `<img>`, nooit `<Image>`
- **Icons**: Inline SVG via `src/components/Icon.astro` — **geen Font Awesome**
- **Fonts**: Google Fonts Inter (non-blocking preload)
- **Build**: `inlineStylesheets: 'always'` → alle CSS inline in HTML (geen render-blocking)

## Deployment
```bash
npm install
npm run dev      # dev server op localhost:4321
npm run build    # productie build naar dist/
npm run deploy   # build + wrangler deploy naar Cloudflare
```

## Belangrijke conventies

### Geen Font Awesome
Gebruik **alleen** `<Icon name="..." />` uit `src/components/Icon.astro`. Nooit `<i class="fas ...">`.

### Statische pagina's in server-mode
Elke pagina die statisch moet zijn heeft `export const prerender = true` bovenaan.
Dynamische routes (`[gemeente].astro`, `[slug].astro`) hebben ook `getStaticPaths()`.

### i18n (NL/EN)
- NL pagina's: `src/pages/**`
- EN pagina's: `src/pages/en/**`
- Utilities: `src/i18n/utils.ts` → `getLang()`, `getAlternateUrl()`
- Navbar/Footer zijn taaldetectie-aware via `const isEN = lang === 'en'`

### Kleuren (pas aan voor Rij-Vrij huisstijl)
```js
const primaryColor     = '#0391b0';  // blauw — VERVANG
const primaryColorDark = '#016d84';  // donkerder blauw (WCAG AA voor links op wit)
const secondaryColor   = '#790f34';  // rood  — VERVANG
```
Deze staan in elk `.astro` bestand als lokale constanten. Zoek+vervang per bestand.

### SEO
- Elke pagina heeft unieke `<title>` en `<meta description>`
- `src/pages/sitemap.xml.ts` → geserveerd op `/sitemap.xml` (prerendered)
- `public/robots.txt` → `Sitemap: https://rij-vrij.nl/sitemap.xml`
- Schema.org JSON-LD in `<head>` via `<script type="application/ld+json">`
- Lesgebied-pagina's hebben uitgebreide schema (DrivingSchool + Service per gemeente)

### Images
- Hero: `public/hero-768.webp`, `public/hero-1080.webp`, `public/hero-1440.webp`
- Logo: `public/automaat-logo.webp` + `public/automaat-logo-png.png` → **vervangen**
- OG image: `public/og-image.png` → **vervangen**

## Data bestanden
```
src/data/
  lesgebieden.ts   → 15 gemeenten met slug, naam, examen, highlights, buurtwijken
  faq.ts           → FAQ categorieën met NL+EN vragen en antwoorden
  reviews.ts       → Google reviews voor de carousel
```

## Dynamisch gegenereerde pagina's
| Route | Bron | Aantal |
|---|---|---|
| `/lesgebied/[gemeente]` | `lesgebieden.ts` | 15 |
| `/en/area/[gemeente]` | `lesgebieden.ts` | 15 |
| `/faq/[slug]` | `faq.ts` | 22 |
| `/en/faq/[slug]` | `faq.ts` | 22 |

## Aandachtspunten

- **WCAG contrast**: gebruik `primaryColorDark` (#016d84) voor tekst/links op witte achtergrond, niet `primaryColor`
- **Heading volgorde**: footer gebruikt `<h2>`, niet `<h4>` — handhaaf dit
- **ReviewsCarousel**: gebruikt `Icon` component voor sterren, geen FA
- **Sitemap**: 100 URLs, hreflang NL+EN per URL, dynamisch via `lesgebieden.ts` en `faq.ts`
