import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async ({ locals }) => {
  // Works in dev via .env, in production via Cloudflare Pages env vars (both approaches)
  const cfEnv = (locals as Record<string, unknown> & { runtime?: { env?: Record<string, string> } }).runtime?.env;
  const apiKey = cfEnv?.GOOGLE_PLACES_API_KEY ?? import.meta.env.GOOGLE_PLACES_API_KEY;
  const placeId = cfEnv?.GOOGLE_PLACE_ID ?? import.meta.env.GOOGLE_PLACE_ID;

  const json = (body: unknown, status = 200) =>
    new Response(JSON.stringify(body), {
      status,
      headers: { 'Content-Type': 'application/json' },
    });

  if (!apiKey || !placeId) {
    return json({ error: 'API configuratie ontbreekt', reviews: [] }, 500);
  }

  try {
    const url = `https://places.googleapis.com/v1/places/${placeId}?fields=reviews,rating,displayName&languageCode=nl`;
    const res = await fetch(url, {
      headers: { 'X-Goog-Api-Key': apiKey },
    });

    if (!res.ok) {
      return json({ error: `Google API fout: ${res.status}`, reviews: [] }, 502);
    }

    const data = await res.json() as {
      reviews?: unknown[];
      rating?: number;
      displayName?: { text?: string };
    };

    return new Response(
      JSON.stringify({
        reviews: data.reviews ?? [],
        rating: data.rating ?? null,
        placeName: data.displayName?.text ?? 'Rij-Vrij Rijschool',
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=3600, s-maxage=3600',
        },
      }
    );
  } catch {
    return json({ error: 'Kan reviews niet ophalen', reviews: [] }, 500);
  }
};
