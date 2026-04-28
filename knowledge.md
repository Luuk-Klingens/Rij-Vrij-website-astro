# Rij-Vrij Website — Projectkennis

## Wat is dit project?

Statische Astro-website voor **Rij-Vrij Rijschool** (Pijnacker). Dit is een pure frontend-site zonder backend, database of admin-panel. Alle content is hardcoded.

## Relatie met het CMS-project

De CMS-versie van dezelfde site zit in `c:\Users\Luuk\OneDrive\Documenten\Rij-Vrij-cms`. Die versie heeft:
- Een React-frontend (client/)
- Een Node.js/Express backend (server/)
- Een PostgreSQL database
- Admin-paneel voor content-beheer

Dit Astro-project is een standalone statische versie — geen API-calls, geen authenticatie, alles hardcoded.

## Tech stack

- **Astro 4** — statische site generator
- **Tailwind CSS** — utility-first CSS (via @astrojs/tailwind)
- **Font Awesome 6** (CDN) — iconen
- **Inter** (Google Fonts) — lettertype
- **Vanilla JS** — voor interactiviteit (navbar mobiel menu, FAQ accordion)

## Kleurenschema

| Naam | Kleur |
|---|---|
| Primary | `#0391b0` (blauw) |
| Secondary | `#790f34` (donkerrood) |
| Topbar nav | `#027a93` (iets donkerder blauw) |

## Hardcoded contactgegevens (overal in de site)

```
Telefoon:  015-2224012
E-mail:    info@Rij-Vrij.com
Adres:     Hankweg 39, 2641 WV Pijnacker
```

## Bouwen & deployen

```bash
# Installeer afhankelijkheden
npm install

# Ontwikkelserver starten
npm run dev

# Productie-build maken
npm run build

# Lokaal preview van build
npm run preview
```

Na `npm run build` staat de gebouwde site in de map `dist/`. Upload de inhoud van `dist/` naar je webserver of hosting-platform (bijv. Netlify, Vercel, Cloudflare Pages, of een gewone FTP-server).

## Mapstructuur

```
src/
  layouts/
    Layout.astro        — HTML-shell (head, Navbar, Footer, slot)
  components/
    Navbar.astro        — Navigatiebalk (desktop + mobiel, dropdowns)
    Footer.astro        — Footer (logo, links, openingstijden, contact)
  pages/
    index.astro         — Home (/)
    over-ons.astro      — Over ons (/over-ons)
    prijzen.astro       — Tarieven (/prijzen)
    contact.astro       — Contact (/contact)
    reviews.astro       — Reviews (/reviews)
    faq.astro           — FAQ (/faq)
    spoedcursus.astro   — Spoedcursus (/spoedcursus)
    autisme-adhd.astro  — Autisme & ADHD (/autisme-adhd)
    onmyway-app.astro   — On My Way app (/onmyway-app)
    examen-theorie.astro    — Theorie-examen (/examen-theorie)
    examen-praktijk.astro   — Praktijkexamen (/examen-praktijk)
    rijschool-machtigen.astro — Rijschool machtigen (/rijschool-machtigen)
    gezondheidsverklaring.astro — Gezondheidsverklaring (/gezondheidsverklaring)
    lesgebied.astro     — Lesgebied (/lesgebied)
    diensten.astro      — Diensten (/diensten)
public/
  logo.png             — Rij-Vrij logo
  peter.png            — Foto van Peter (instructeur)
  telstar.png          — Telstar krantenartikel afbeelding
```

## Pagina-overzicht

| Route | Bestand | Beschrijving |
|---|---|---|
| / | index.astro | Homepagina met hero, statistieken, why-cards, reviews, pakketten, proefles CTA |
| /over-ons | over-ons.astro | Intro Peter, bio, waarden, foto's |
| /prijzen | prijzen.astro | Startpakketten + losse tarieven tabel |
| /contact | contact.astro | Contactgegevens + mailto/tel links |
| /reviews | reviews.astro | Reviews uitleg + voorbeeldreviews + CTA |
| /faq | faq.astro | FAQ per categorie met accordion |
| /spoedcursus | spoedcursus.astro | Spoedcursus info, stappen, wat inbegrepen |
| /autisme-adhd | autisme-adhd.astro | Specialist autisme/ADHD, aanpak |
| /onmyway-app | onmyway-app.astro | On My Way app features & uitleg |
| /examen-theorie | examen-theorie.astro | Theorie-examen info, leeftijden, tips |
| /examen-praktijk | examen-praktijk.astro | Praktijkexamen info, meenemen, beoordeeld |
| /rijschool-machtigen | rijschool-machtigen.astro | Hoe machtig je de rijschool via MijnCBR |
| /gezondheidsverklaring | gezondheidsverklaring.astro | Gezondheidsverklaring aanvragen |
| /lesgebied | lesgebied.astro | Lesgebied (12 gemeenten) + examenlocaties |
| /diensten | diensten.astro | Opfriscursussen en overige diensten |

## Prijzen / pakketten aanpassen

De pakketten op de **Prijzen-pagina** en de **Home-pagina** zijn handmatig hardcoded. Om ze te wijzigen, bewerk je direct:

- `src/pages/prijzen.astro` — de `packages` en `tariefSections` arrays bovenin het frontmatter-blok
- `src/pages/index.astro` — de `packages` array bovenin het frontmatter-blok

Formaat van een pakket:
```js
{
  name: 'Pakketnaam',
  description: 'Korte omschrijving',
  price: '1.299',       // als string, zonder €
  isPopular: false,     // true = highlighted
  features: ['Feature 1', 'Feature 2'],
}
```

## CBR opleidersnummer

Het CBR opleidersnummer van Rij-Vrij is **1460F3** (hardcoded in `rijschool-machtigen.astro`).

## Notities

- De Reviews-pagina toont hardcoded voorbeeldreviews (drie stuks). De live CMS-versie haalt reviews uit de database. Wil je echte reviews tonen? Voeg ze handmatig toe als array in `reviews.astro`.
- Het contactformulier op de Contact-pagina is vervangen door directe `mailto:` en `tel:` links (geen backend).
- De proefles CTA op de Home-pagina linkt naar een sectie (`#proefles-cta`) met `mailto:` en `tel:` links.
