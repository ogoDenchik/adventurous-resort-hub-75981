// deno-lint-ignore-file no-explicit-any
// Backend proxy to forward JSON payloads to the external webhook, solving CORS and ensuring proper headers

const WEBHOOK_URL = "https://ogodenchik.app.n8n.cloud/webhook/75b33b6a-7c37-4d8a-8750-778a3a9aa6f3";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    if (req.method !== "POST") {
      return new Response(JSON.stringify({ ok: false, error: "Method not allowed" }), {
        status: 405,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const payload = await req.json().catch(() => (null));
    if (!payload || typeof payload !== "object") {
      return new Response(JSON.stringify({ ok: false, error: "Invalid JSON body" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Minimal input safety checks
    const nameOk = typeof (payload as any).name === "string" && (payload as any).name.trim().length >= 2;
    const phoneOk = typeof (payload as any).phone === "string" && (payload as any).phone.trim().length >= 6;
    if (!nameOk || !phoneOk) {
      return new Response(JSON.stringify({ ok: false, error: "Missing or invalid required fields: name, phone" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Forward to external webhook as JSON
    const forwardRes = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const text = await forwardRes.text();

    return new Response(
      JSON.stringify({ ok: true, status: forwardRes.status, body: text }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err: any) {
    return new Response(JSON.stringify({ ok: false, error: String(err?.message || err) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
