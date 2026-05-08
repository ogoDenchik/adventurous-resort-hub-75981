import { corsHeaders } from '@supabase/supabase-js/cors';

const PIXEL_ID = '751648834697782';
const API_VERSION = 'v20.0';

interface CapiPayload {
  event_name: string;
  event_id: string;
  event_source_url?: string;
  user_agent?: string;
  custom_data?: Record<string, unknown>;
}

// Hash helper (SHA-256 hex) — required by Meta for user data fields when present
async function sha256(input: string): Promise<string> {
  const data = new TextEncoder().encode(input.trim().toLowerCase());
  const hash = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const token = Deno.env.get('META_CONVERSIONS_API_TOKEN');
    if (!token) {
      return new Response(
        JSON.stringify({ error: 'Missing META_CONVERSIONS_API_TOKEN' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const body = (await req.json()) as CapiPayload;
    if (!body?.event_name || !body?.event_id) {
      return new Response(
        JSON.stringify({ error: 'event_name and event_id required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Best-effort client IP from edge headers
    const fwd = req.headers.get('x-forwarded-for') || '';
    const clientIp = fwd.split(',')[0].trim() || undefined;
    const userAgent = body.user_agent || req.headers.get('user-agent') || '';

    // External ID from event_id (hashed) for better matching when no PII available
    const externalId = await sha256(body.event_id);

    const event = {
      event_name: body.event_name,
      event_time: Math.floor(Date.now() / 1000),
      event_id: body.event_id,
      event_source_url: body.event_source_url,
      action_source: 'website',
      user_data: {
        client_ip_address: clientIp,
        client_user_agent: userAgent,
        external_id: [externalId],
      },
      custom_data: body.custom_data || {},
    };

    const url = `https://graph.facebook.com/${API_VERSION}/${PIXEL_ID}/events?access_token=${token}`;
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: [event] }),
    });

    const text = await res.text();
    if (!res.ok) {
      console.error('[meta-capi] error', res.status, text);
      return new Response(JSON.stringify({ error: text }), {
        status: 502,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ ok: true, meta: JSON.parse(text) }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('[meta-capi] exception', err);
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
