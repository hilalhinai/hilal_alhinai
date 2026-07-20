import { NextResponse } from 'next/server';

/**
 * Newsletter subscribe endpoint.
 *
 * This runs server-side so the beehiiv API key is never exposed to the
 * browser. The client form posts { email } here; this route forwards it to
 * beehiiv with the secret attached.
 *
 * Required environment variables:
 *   BEEHIIV_API_KEY         — from beehiiv Settings → Integrations → API
 *   BEEHIIV_PUBLICATION_ID  — looks like pub_xxxxxxxx-xxxx-xxxx-...
 */

export const runtime = 'nodejs';

// Deliberately permissive: real validation is beehiiv's job, this just
// catches obvious typos before spending a network round trip.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const apiKey = process.env.BEEHIIV_API_KEY;
  const publicationId = process.env.BEEHIIV_PUBLICATION_ID;

  if (!apiKey || !publicationId) {
    console.error('[subscribe] Missing BEEHIIV_API_KEY or BEEHIIV_PUBLICATION_ID');
    return NextResponse.json(
      { ok: false, message: 'Newsletter is not configured yet.' },
      { status: 503 },
    );
  }

  let email: unknown;
  try {
    ({ email } = await request.json());
  } catch {
    return NextResponse.json({ ok: false, message: 'Invalid request.' }, { status: 400 });
  }

  if (typeof email !== 'string' || !EMAIL_RE.test(email.trim())) {
    return NextResponse.json(
      { ok: false, message: 'Please enter a valid email address.' },
      { status: 400 },
    );
  }

  try {
    const response = await fetch(
      `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim(),
          // Bring back people who previously unsubscribed and changed their mind.
          reactivate_existing: true,
          send_welcome_email: true,
          utm_source: 'hilalalhinai.com',
          referring_site: 'hilalalhinai.com',
        }),
      },
    );

    if (!response.ok) {
      // Log the detail server-side; never return it to the browser, since
      // upstream errors can echo back request metadata.
      const detail = await response.text();
      console.error(`[subscribe] beehiiv responded ${response.status}: ${detail}`);
      return NextResponse.json(
        { ok: false, message: 'Something went wrong. Please try again.' },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('[subscribe] Request to beehiiv failed', error);
    return NextResponse.json(
      { ok: false, message: 'Something went wrong. Please try again.' },
      { status: 502 },
    );
  }
}
