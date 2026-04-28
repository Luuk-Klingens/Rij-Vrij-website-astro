import type { APIRoute } from 'astro';
import lesgebieden from '../data/lesgebieden';
import { faqCategories } from '../data/faq';

export const prerender = true;

const SITE = 'https://rij-vrij.nl';
const BUILD_DATE = new Date().toISOString().split('T')[0];

const faqSlugs = faqCategories.flatMap(cat => cat.items.map(item => item.slug));
const gemeenteSlugs = lesgebieden.map(g => g.slug);

interface UrlDef {
  path: string;
  changefreq: string;
  priority: number;
  nlPath: string;
  enPath: string;
}

function u(path: string, changefreq: string, priority: number, nlPath: string, enPath: string): UrlDef {
  return { path, changefreq, priority, nlPath, enPath };
}

const urls: UrlDef[] = [
  // ── Homepagina's ─────────────────────────────────────────────
  u('/',     'weekly', 1.0, '/',    '/en/'),
  u('/en/',  'weekly', 0.9, '/',    '/en/'),

  // ── Lesgebied-overzicht ───────────────────────────────────────
  u('/lesgebied',  'monthly', 0.80, '/lesgebied', '/en/areas'),
  u('/en/areas',   'monthly', 0.70, '/lesgebied', '/en/areas'),

  // ── Individuele lesgebied-pagina's (NL) — hoogste commerciële waarde ──
  ...gemeenteSlugs.map(s =>
    u(`/lesgebied/${s}`, 'monthly', 0.90, `/lesgebied/${s}`, `/en/area/${s}`)
  ),

  // ── Individuele lesgebied-pagina's (EN) ───────────────────────
  ...gemeenteSlugs.map(s =>
    u(`/en/area/${s}`, 'monthly', 0.80, `/lesgebied/${s}`, `/en/area/${s}`)
  ),

  // ── Commerciële kernpagina's (NL) ────────────────────────────
  u('/prijzen',             'monthly', 0.85, '/prijzen',             '/en/prices'),
  u('/autisme-adhd',        'monthly', 0.85, '/autisme-adhd',        '/en/autism-adhd'),
  u('/diensten',            'monthly', 0.80, '/diensten',            '/en/services'),
  u('/contact',             'monthly', 0.80, '/contact',             '/en/contact'),
  u('/over-ons',            'monthly', 0.75, '/over-ons',            '/en/about'),
  u('/reviews',             'weekly',  0.65, '/reviews',             '/en/reviews'),

  // ── Commerciële kernpagina's (EN) ────────────────────────────
  u('/en/prices',           'monthly', 0.75, '/prijzen',             '/en/prices'),
  u('/en/autism-adhd',      'monthly', 0.75, '/autisme-adhd',        '/en/autism-adhd'),
  u('/en/services',         'monthly', 0.70, '/diensten',            '/en/services'),
  u('/en/contact',          'monthly', 0.70, '/contact',             '/en/contact'),
  u('/en/about',            'monthly', 0.65, '/over-ons',            '/en/about'),
  u('/en/reviews',          'weekly',  0.55, '/reviews',             '/en/reviews'),

  // ── FAQ overzicht ─────────────────────────────────────────────
  u('/faq',    'weekly', 0.70, '/faq', '/en/faq'),
  u('/en/faq', 'weekly', 0.60, '/faq', '/en/faq'),

  // ── Individuele FAQ-pagina's (NL) ────────────────────────────
  ...faqSlugs.map(s =>
    u(`/faq/${s}`, 'monthly', 0.60, `/faq/${s}`, `/en/faq/${s}`)
  ),

  // ── Individuele FAQ-pagina's (EN) ────────────────────────────
  ...faqSlugs.map(s =>
    u(`/en/faq/${s}`, 'monthly', 0.50, `/faq/${s}`, `/en/faq/${s}`)
  ),

  // ── Overige pagina's (NL) ────────────────────────────────────
  u('/onmyway-app',          'monthly', 0.65, '/onmyway-app',          '/en/onmyway'),
  u('/examen-praktijk',      'monthly', 0.65, '/examen-praktijk',      '/en/practical-exam'),
  u('/examen-theorie',       'monthly', 0.65, '/examen-theorie',       '/en/theory-exam'),
  u('/vacatures',            'monthly', 0.60, '/vacatures',            '/en/vacancies'),
  u('/rijschool-machtigen',  'monthly', 0.55, '/rijschool-machtigen',  '/en/authorize'),
  u('/gezondheidsverklaring','monthly', 0.55, '/gezondheidsverklaring','/en/health-declaration'),

  // ── Overige pagina's (EN) ────────────────────────────────────
  u('/en/onmyway',           'monthly', 0.55, '/onmyway-app',          '/en/onmyway'),
  u('/en/practical-exam',    'monthly', 0.55, '/examen-praktijk',      '/en/practical-exam'),
  u('/en/theory-exam',       'monthly', 0.55, '/examen-theorie',       '/en/theory-exam'),
  u('/en/vacancies',         'monthly', 0.50, '/vacatures',            '/en/vacancies'),
  u('/en/authorize',         'monthly', 0.45, '/rijschool-machtigen',  '/en/authorize'),
  u('/en/health-declaration','monthly', 0.45, '/gezondheidsverklaring','/en/health-declaration'),

  // ── Juridisch ─────────────────────────────────────────────────
  u('/privacy-voorwaarden',  'yearly', 0.20, '/privacy-voorwaarden',  '/en/privacy'),
  u('/algemene-voorwaarden', 'yearly', 0.20, '/algemene-voorwaarden', '/en/terms'),
  u('/en/privacy',           'yearly', 0.15, '/privacy-voorwaarden',  '/en/privacy'),
  u('/en/terms',             'yearly', 0.15, '/algemene-voorwaarden', '/en/terms'),
];

function renderEntry(def: UrlDef): string {
  return `  <url>
    <loc>${SITE}${def.path}</loc>
    <lastmod>${BUILD_DATE}</lastmod>
    <changefreq>${def.changefreq}</changefreq>
    <priority>${def.priority.toFixed(1)}</priority>
    <xhtml:link rel="alternate" hreflang="nl"        href="${SITE}${def.nlPath}"/>
    <xhtml:link rel="alternate" hreflang="en"        href="${SITE}${def.enPath}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}${def.nlPath}"/>
  </url>`;
}

export const GET: APIRoute = () => {
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset',
    '  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    '  xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...urls.map(renderEntry),
    '</urlset>',
  ].join('\n');

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
