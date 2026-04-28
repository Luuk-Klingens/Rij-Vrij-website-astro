import type { APIRoute } from 'astro';

type CloudflareEnv = { RESEND_API_KEY?: string };

const LOGO    = 'https://Rij-Vrij.com/RijVrij-logo-png.png';
const PRIMARY = '#0391b0';
const SECONDARY = '#790f34';

function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function emailHeader(title: string) {
  return `
    <div style="background:linear-gradient(135deg,${PRIMARY} 0%,${SECONDARY} 100%);padding:24px 32px;border-radius:12px 12px 0 0;text-align:center">
      <img src="${LOGO}" alt="Rij-Vrij Rijschool" style="height:44px;width:auto;margin-bottom:14px;display:block;margin-left:auto;margin-right:auto" />
      <p style="color:#fff;margin:0;font-size:18px;font-weight:700">${title}</p>
    </div>`;
}

function emailFooter() {
  return `
    <div style="background:linear-gradient(135deg,${PRIMARY} 0%,${SECONDARY} 100%);border-radius:0 0 12px 12px;padding:14px 32px;text-align:center;margin-top:-1px">
      <p style="color:rgba(255,255,255,0.8);font-size:12px;margin:0">Rij-Vrij Rijschool &bull; <a href="https://Rij-Vrij.com" style="color:#fff;text-decoration:underline">Rij-Vrij.com</a></p>
    </div>`;
}

export const POST: APIRoute = async ({ request, locals }) => {
  const data = await request.formData();

  const naam     = String(data.get('naam') ?? '').trim();
  const email    = String(data.get('email') ?? '').trim();
  const telefoon = String(data.get('telefoon') ?? '').trim();
  const adres     = String(data.get('adres') ?? '').trim();
  const woonplaats = String(data.get('woonplaats') ?? '').trim();
  const motivatie  = String(data.get('motivatie') ?? '').trim();
  const vacature  = String(data.get('vacature') ?? 'Onbekend').trim();

  if (!naam || !email || !telefoon || !motivatie) {
    return new Response(JSON.stringify({ ok: false, error: 'Vul alle verplichte velden in.' }), { status: 400 });
  }

  const runtime = (locals as { runtime?: { env?: CloudflareEnv } }).runtime;
  const apiKey = runtime?.env?.RESEND_API_KEY ?? import.meta.env.RESEND_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ ok: false, error: 'Server misconfiguratie.' }), { status: 500 });
  }

  const internalHtml = `
    <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto">
      ${emailHeader(`📋 Nieuwe sollicitatie: ${esc(vacature)}`)}
      <div style="background:#f9fafb;padding:32px;border-radius:0 0 12px 12px;border:1px solid #e5e7eb;border-top:none">
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:8px 0;color:#6b7280;font-size:14px;width:140px">Naam</td><td style="padding:8px 0;font-weight:600;color:#111827">${esc(naam)}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280;font-size:14px">E-mail</td><td style="padding:8px 0;font-weight:600;color:#111827"><a href="mailto:${esc(email)}" style="color:#0391b0">${esc(email)}</a></td></tr>
          <tr><td style="padding:8px 0;color:#6b7280;font-size:14px">Telefoon</td><td style="padding:8px 0;font-weight:600;color:#111827">${esc(telefoon)}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280;font-size:14px">Adres</td><td style="padding:8px 0;font-weight:600;color:#111827">${adres ? esc(adres) : 'Niet opgegeven'}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280;font-size:14px">Woonplaats</td><td style="padding:8px 0;font-weight:600;color:#111827">${woonplaats ? esc(woonplaats) : 'Niet opgegeven'}</td></tr>
        </table>
        <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0" />
        <h2 style="font-size:15px;color:#374151;margin:0 0 12px">Motivatie</h2>
        <p style="color:#374151;line-height:1.7;white-space:pre-wrap;margin:0">${esc(motivatie)}</p>
      </div>
      ${emailFooter()}
    </div>`;

  const confirmHtml = `
    <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto">
      ${emailHeader('Bedankt voor je sollicitatie!')}
      <div style="background:#f9fafb;padding:32px;border-radius:0 0 12px 12px;border:1px solid #e5e7eb;border-top:none">
        <p style="color:#111827;font-size:15px;margin:0 0 12px">Hoi ${esc(naam)},</p>
        <p style="color:#374151;font-size:14px;line-height:1.7;margin:0 0 16px">
          Wij hebben je sollicitatie voor de functie <strong>${esc(vacature)}</strong> in goede orde ontvangen. Super dat je interesse hebt in Rij-Vrij Rijschool!
        </p>
        <p style="color:#374151;font-size:14px;line-height:1.7;margin:0 0 24px">
          We nemen zo spoedig mogelijk contact met je op via dit e-mailadres of het telefoonnummer dat je hebt opgegeven.
        </p>
        <div style="background:#e0f4fa;border-left:4px solid #0391b0;border-radius:6px;padding:14px 18px;margin-bottom:24px">
          <p style="color:#0c5a6e;font-size:13px;margin:0;line-height:1.6">
            <strong>Jouw gegevens:</strong><br/>
            Naam: ${esc(naam)}<br/>
            Telefoon: ${esc(telefoon)}<br/>
            Vacature: ${esc(vacature)}
          </p>
        </div>
        <p style="color:#6b7280;font-size:13px;margin:0">
          Heb je vragen? Neem gerust contact op via <a href="mailto:info@Rij-Vrij.com" style="color:#0391b0">info@Rij-Vrij.com</a> of bel ons op <a href="tel:0152224012" style="color:#0391b0">015 222 40 12</a>.
        </p>
      </div>
      ${emailFooter()}
    </div>`;

  const send = (payload: object) =>
    fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

  try {
    const [internalRes, confirmRes] = await Promise.all([
      send({
        from: 'Rij-Vrij Rijschool <noreply@Rij-Vrij.com>',
        to: ['leads@Rij-Vrij.com'],
        reply_to: email,
        subject: `Sollicitatie ${vacature} van ${naam}`,
        html: internalHtml,
      }),
      send({
        from: 'Rij-Vrij Rijschool <noreply@Rij-Vrij.com>',
        to: [email],
        reply_to: 'info@Rij-Vrij.com',
        subject: `Bevestiging sollicitatie ${vacature}`,
        html: confirmHtml,
      }),
    ]);

    if (!internalRes.ok || !confirmRes.ok) {
      const failed = !internalRes.ok ? internalRes : confirmRes;
      const err = await failed.text();
      console.error('Resend error:', err);
      return new Response(JSON.stringify({ ok: false, error: 'Versturen mislukt, probeer het later opnieuw.' }), { status: 500 });
    }
  } catch (err) {
    console.error('Fetch to Resend failed:', err);
    return new Response(JSON.stringify({ ok: false, error: 'Versturen mislukt, probeer het later opnieuw.' }), { status: 500 });
  }

  return new Response(JSON.stringify({ ok: true }), { status: 200 });
};
