type UrlPair = { nl: string; en: string };

const staticPairs: UrlPair[] = [
  { nl: '/', en: '/en/' },
  { nl: '/over-ons', en: '/en/about' },
  { nl: '/autisme-adhd', en: '/en/autism-adhd' },
  { nl: '/prijzen', en: '/en/prices' },
  { nl: '/lesgebied', en: '/en/areas' },
  { nl: '/onmyway-app', en: '/en/onmyway' },
  { nl: '/examen-theorie', en: '/en/theory-exam' },
  { nl: '/examen-praktijk', en: '/en/practical-exam' },
  { nl: '/rijschool-machtigen', en: '/en/authorize' },
  { nl: '/gezondheidsverklaring', en: '/en/health-declaration' },
  { nl: '/vacatures', en: '/en/vacancies' },
  { nl: '/faq', en: '/en/faq' },
  { nl: '/contact', en: '/en/contact' },
  { nl: '/reviews', en: '/en/reviews' },
  { nl: '/diensten', en: '/en/services' },
  { nl: '/algemene-voorwaarden', en: '/en/terms' },
  { nl: '/privacy-voorwaarden', en: '/en/privacy' },
];

function normalize(path: string): string {
  return path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path;
}

export function getLang(pathname: string): 'nl' | 'en' {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'nl';
}

export function getAlternateUrl(pathname: string): string {
  const norm = normalize(pathname);
  const lang = getLang(norm);

  if (lang === 'nl') {
    // Find NL → EN match
    const exact = staticPairs.find((p) => normalize(p.nl) === norm);
    if (exact) return exact.en;

    // Dynamic: /lesgebied/slug → /en/area/slug
    const lesgebiedMatch = norm.match(/^\/lesgebied\/(.+)$/);
    if (lesgebiedMatch) return `/en/area/${lesgebiedMatch[1]}/`;

    // Dynamic: /faq/slug → /en/faq/slug
    const faqMatch = norm.match(/^\/faq\/(.+)$/);
    if (faqMatch) return `/en/faq/${faqMatch[1]}/`;

    return '/en/';
  } else {
    // Find EN → NL match
    const normEn = norm.replace(/^\/en/, '') || '/';
    const exact = staticPairs.find((p) => normalize(p.en) === norm);
    if (exact) return exact.nl;

    // Dynamic: /en/area/slug → /lesgebied/slug
    const areaMatch = norm.match(/^\/en\/area\/(.+)$/);
    if (areaMatch) return `/lesgebied/${areaMatch[1]}/`;

    // Dynamic: /en/faq/slug → /faq/slug
    const faqMatch = norm.match(/^\/en\/faq\/(.+)$/);
    if (faqMatch) return `/faq/${faqMatch[1]}/`;

    return '/';
  }
}
