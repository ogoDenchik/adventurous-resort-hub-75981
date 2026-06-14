// deno-lint-ignore-file no-explicit-any
// Backend proxy to forward JSON payloads to the external webhooks.
// Webhook URLs are stored as Supabase secrets and never exposed to the client.

const CONTACT_WEBHOOK_URL = Deno.env.get("N8N_CONTACT_WEBHOOK_URL") || "";
const BOOKING_WEBHOOK_URL = Deno.env.get("N8N_BOOKING_WEBHOOK_URL") || "";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const MAX_PAYLOAD_BYTES = 10 * 1024; // 10KB
const MAX_NAME = 100;
const MAX_PHONE = 30;
const MAX_EMAIL = 255;
const MAX_MESSAGE = 2000;
const MAX_GENERIC_STRING = 500;

function clipString(v: unknown, max: number): string {
  if (typeof v !== "string") return "";
  return v.trim().slice(0, max);
}

function pickUrlForFormType(formType: string): string {
  // Booking-related forms go to the booking webhook; everything else goes to contact.
  if (
    formType === "booking_popup" ||
    formType === "vietnam_booking" ||
    formType === "kitesafari_booking"
  ) {
    return BOOKING_WEBHOOK_URL || CONTACT_WEBHOOK_URL;
  }
  return CONTACT_WEBHOOK_URL || BOOKING_WEBHOOK_URL;
}

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

    // Enforce maximum payload size to mitigate resource-exhaustion attacks
    const contentLength = Number(req.headers.get("content-length") || "0");
    if (contentLength > MAX_PAYLOAD_BYTES) {
      return new Response(JSON.stringify({ ok: false, error: "Payload too large" }), {
        status: 413,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const rawText = await req.text();
    if (rawText.length > MAX_PAYLOAD_BYTES) {
      return new Response(JSON.stringify({ ok: false, error: "Payload too large" }), {
        status: 413,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    let payload: any = null;
    try {
      payload = JSON.parse(rawText);
    } catch {
      payload = null;
    }
    if (!payload || typeof payload !== "object") {
      return new Response(JSON.stringify({ ok: false, error: "Invalid JSON body" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const formType = clipString(payload.form_type, 50);

    // Field validation + clipping
    if (formType === "newsletter") {
      const emailVal = clipString(payload.email, MAX_EMAIL);
      const emailOk =
        emailVal.length > 3 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal);
      if (!emailOk) {
        return new Response(JSON.stringify({ ok: false, error: "Invalid email for newsletter" }), {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      payload.email = emailVal;
    } else {
      const name = clipString(payload.name, MAX_NAME);
      const phone = clipString(payload.phone, MAX_PHONE);
      if (name.length < 2 || phone.length < 6) {
        return new Response(
          JSON.stringify({ ok: false, error: "Missing or invalid required fields: name, phone" }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
        );
      }
      payload.name = name;
      payload.phone = phone;
      payload.email = clipString(payload.email, MAX_EMAIL);
      payload.message = clipString(payload.message, MAX_MESSAGE);
    }

    // Defensive clipping for any other string fields we forward
    for (const key of Object.keys(payload)) {
      if (typeof payload[key] === "string" && !["name", "phone", "email", "message"].includes(key)) {
        payload[key] = (payload[key] as string).slice(0, MAX_GENERIC_STRING);
      }
    }

    const targetUrl = pickUrlForFormType(formType);
    if (!targetUrl) {
      console.error("forward-webhook: no upstream URL configured");
      return new Response(JSON.stringify({ ok: false, error: "Upstream not configured" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Log only non-sensitive metadata
    const { device_type, browser_language, timezone, platform } = payload;
    console.log("forward-webhook received", { form_type: formType, device_type, browser_language, timezone, platform });

    const forwardRes = await fetch(targetUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const text = await forwardRes.text();
    console.log("forward-webhook upstream", { status: forwardRes.status, ok: forwardRes.ok });

    if (!forwardRes.ok) {
      return new Response(
        JSON.stringify({ ok: false, upstream_status: forwardRes.status }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ ok: true, status: forwardRes.status }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err: any) {
    console.error("forward-webhook error", String(err?.message || err));
    return new Response(JSON.stringify({ ok: false, error: "Internal error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
