# Rij-Vrij Website — Rebrand Status

Gekloond van: `Auto-maat-website-astro`
Datum: 2026-04-28

---

## ✅ Automatisch gedaan (56 bestanden)

- `Auto-Maat Rijschool` → `Rij-Vrij Rijschool` overal
- `Auto-Maat` → `Rij-Vrij` overal (brand name)
- `AutoMaat` → `RijVrij` overal
- `auto-maat.com` → `rij-vrij.nl` (domein in sitemap, schema, canonical URLs)
- `package.json` naam bijgewerkt naar `Rij-Vrij-website`

---

## ❌ Nog handmatig te doen (VERPLICHT voor launch)

### 1. Contactgegevens
Zoek in `src/components/Footer.astro` en `src/components/Navbar.astro` naar:
- Telefoonnummer: nu `015-2224012` → vervang door Rij-Vrij nummer
- E-mail: nu `info@auto-maat.com` → vervang door Rij-Vrij e-mail
- Adres: nu `Hankweg 39, 2641 WV Pijnacker` → vervang door Rij-Vrij adres

Zoek ook in: `src/data/lesgebieden.ts` (geen contact maar wel locatie-info).

### 2. KVK / BTW / CBR-nummers
In `src/components/Footer.astro`:
- KVK: `62968157` → Rij-Vrij KVK
- BTW: `NL004762677B86` → Rij-Vrij BTW
- CBR Opleidersnummer: `1460F3` → Rij-Vrij CBR-nummer

### 3. Social media URLs
In `src/components/Footer.astro` en `src/components/Navbar.astro`:
```
facebookUrl  = 'https://www.facebook.com/profile.php?id=61569989527327'
instagramUrl = 'https://www.instagram.com/autorijschool_auto_maat/'
tiktokUrl    = 'https://www.tiktok.com/@autorijschool.auto_maat'
```
Vervang alle drie door de Rij-Vrij accounts.

Ook in `src/pages/index.astro` (Schema.org `sameAs`).

### 4. Logo
- Huidig logo: `public/automaat-logo.webp` en `public/automaat-logo-png.png`
- Upload nieuwe Rij-Vrij logo's naar `public/`
- Update referenties in `src/components/Navbar.astro` en `src/components/Footer.astro`
  (zoek op `automaat-logo`)

### 5. Domein / deployment
- `wrangler.jsonc`: pas `name` en eventueel route aan
- `public/robots.txt`: domein staat al op `rij-vrij.nl` ✅ (automatisch gedaan)
- Cloudflare Pages/Workers project aanmaken voor dit domein

### 6. Kleuren (optioneel, maar aanbevolen)
Huidige primaire kleur: `#0391b0` (blauw) en `#790f34` (donkerrood).
In elk `.astro` bestand staan `const primaryColor` en `const secondaryColor`.
Vervang naar de Rij-Vrij huisstijlkleuren. Tip: doe dit in één keer via zoek+vervang.
Check ook `primaryColorDark = '#016d84'` in `src/pages/index.astro`.

### 7. Reviews data
Bestand: `src/data/reviews.ts`
Bevat de Google-reviews van Auto-Maat. Vervang door Rij-Vrij reviews (of leeg maken voor launch en later vullen).

### 8. Lesgebieden
Bestand: `src/data/lesgebieden.ts`
Bevat 15 gemeenten rondom Haaglanden/Delft/Zoetermeer.
- Dezelfde regio? → laat staan
- Andere regio? → pas aan (slug, naam, examen, highlights, buurtwijken)
- Pas ook de teller bij in `src/pages/lesgebied/index.astro` en `src/pages/en/areas.astro` aan als je gemeenten toevoegt/verwijdert

### 9. FAQ
Bestand: `src/data/faq.ts`
Inhoud is generiek genoeg om te behouden, maar check of antwoorden kloppen voor Rij-Vrij (bijv. pakketnamen, prijzen, CBR-locaties).

### 10. Pakketten & prijzen
In `src/pages/index.astro` en `src/pages/en/index.astro`:
```js
const packages = [
  { name: 'Start10',    price: '1.399', ... },
  { name: 'Populair20', price: '2.399', ... },
  { name: 'Compleet30', price: '3.299', ... },
];
```
Pas namen en prijzen aan als die voor Rij-Vrij anders zijn.

### 11. Schema.org data (index.astro)
In `src/pages/index.astro` staat JSON-LD met:
- `geo.latitude/longitude` → Pijnacker-coördinaten, pas aan naar Rij-Vrij vestiging
- `openingHoursSpecification` → controleer of die kloppen
- `aggregateRating` → reset naar Rij-Vrij rating (of verwijder tot er reviews zijn)

### 12. OG image
`public/og-image.png` is de sociale preview afbeelding. Vervang door Rij-Vrij versie.

### 13. Favicon
`public/favicon.png` → vervang door Rij-Vrij favicon.

### 14. Sitemap lastmod datum
`src/pages/sitemap.xml.ts` gebruikt `new Date()` bij build → automatisch correct bij deploy ✅

---

## 🚀 Technische setup na klonen

```bash
cd C:\Users\Luuk\OneDrive\Rij-Vrij-website-astro
npm install
npm run dev        # lokaal draaien op http://localhost:4321
npm run build      # productie build
npm run deploy     # deployen naar Cloudflare
```

---

## 📁 Belangrijkste bestanden

| Bestand | Wat erin zit |
|---|---|
| `src/layouts/Layout.astro` | Globale HTML, head, nav, footer |
| `src/components/Navbar.astro` | Navigatie + contactinfo + kleuren |
| `src/components/Footer.astro` | Footer + contactinfo + KVK/BTW |
| `src/components/Icon.astro` | Alle inline SVG-icons (geen Font Awesome nodig) |
| `src/data/lesgebieden.ts` | Alle 15 lesgebied-pagina's (dynamisch gegenereerd) |
| `src/data/faq.ts` | FAQ-vragen NL + EN |
| `src/data/reviews.ts` | Reviews voor de carousel |
| `src/pages/index.astro` | Homepage NL |
| `src/pages/en/index.astro` | Homepage EN |
| `src/pages/sitemap.xml.ts` | Sitemap (submit bij Google Search Console) |
| `public/robots.txt` | Robots + sitemap-URL |
| `astro.config.mjs` | Astro config (domein, adapter, build) |
| `wrangler.jsonc` | Cloudflare deployment config |
