import type { APIRoute } from 'astro';

const LOGO    = 'https://Rij-Vrij.com/RijVrij-logo-png.png';
const PRIMARY = '#0391b0';
const SECONDARY = '#790f34';

function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

export const POST: APIRoute = async ({ request, locals }) => {
  const data = await request.formData();

  const naam      = String(data.get('naam') ?? '').trim();
  const telefoon  = String(data.get('telefoon') ?? '').trim();
  const adres     = String(data.get('adres') ?? '').trim();
  const woonplaats = String(data.get('woonplaats') ?? '').trim();

  if (!naam || !telefoon || !adres || !woonplaats) {
    return new Response(JSON.stringify({ ok: false, error: 'Vul alle velden in.' }), { status: 400 });
  }

  const runtime = (locals as { runtime?: { env?: { RESEND_API_KEY?: string } } }).runtime;
  const apiKey  = runtime?.env?.RESEND_API_KEY ?? import.meta.env.RESEND_API_KEY;

  if (!apiKey) {
    return new Response(JSON.stringify({ ok: false, error: 'Server misconfiguratie.' }), { status: 500 });
  }

  const html = `
    <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto">
      <div style="background:linear-gradient(135deg,${PRIMARY} 0%,${SECONDARY} 100%);padding:24px 32px;border-radius:12px 12px 0 0;text-align:center">
        <img src="${LOGO}" alt="Rij-Vrij Rijschool" style="height:44px;width:auto;margin-bottom:14px;display:block;margin-left:auto;margin-right:auto" />
        <p style="color:#fff;margin:0;font-size:18px;font-weight:700">Nieuwe proefles aanvraag</p>
      </div>
      <div style="background:#f9fafb;padding:32px;border-radius:0 0 12px 12px;border:1px solid #e5e7eb;border-top:none">
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:8px 0;color:#6b7280;font-size:14px;width:120px">Naam</td><td style="padding:8px 0;font-weight:600;color:#111827">${esc(naam)}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280;font-size:14px">Telefoon</td><td style="padding:8px 0;font-weight:600;color:#111827">${esc(telefoon)}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280;font-size:14px">Adres</td><td style="padding:8px 0;font-weight:600;color:#111827">${esc(adres)}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280;font-size:14px">Woonplaats</td><td style="padding:8px 0;font-weight:600;color:#111827">${esc(woonplaats)}</td></tr>
        </table>
      </div>
      <div style="background:linear-gradient(135deg,${PRIMARY} 0%,${SECONDARY} 100%);border-radius:0 0 12px 12px;padding:14px 32px;text-align:center;margin-top:-1px">
        <p style="color:rgba(255,255,255,0.8);font-size:12px;margin:0">Rij-Vrij Rijschool &bull; <a href="https://Rij-Vrij.com" style="color:#fff;text-decoration:underline">Rij-Vrij.com</a></p>
      </div>
    </div>`;

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Rij-Vrij Rijschool <noreply@Rij-Vrij.com>',
        to: ['leads@Rij-Vrij.com'],
        subject: `Proefles aanvraag van ${naam}`,
        html,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error('Resend error:', err);
      return new Response(JSON.stringify({ ok: false, error: 'Versturen mislukt, probeer het later opnieuw.' }), { status: 500 });
    }
  } catch (err) {
    console.error('Fetch to Resend failed:', err);
    return new Response(JSON.stringify({ ok: false, error: 'Versturen mislukt, probeer het later opnieuw.' }), { status: 500 });
  }

  return new Response(JSON.stringify({ ok: true }), { status: 200 });
};
