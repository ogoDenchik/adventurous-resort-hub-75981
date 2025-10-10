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

    // Self-test mode: send sample payloads and return statuses
    if ((payload as any)._selftest === true) {
      const sampleDevice = {
        device_type: "desktop",
        browser_language: "en-US",
        timezone: "UTC",
        platform: "Web",
      };

      const contactPayload = {
        name: "Test User",
        phone: "+10000000000",
        email: "test@example.com",
        message: "Contact form self-test",
        form_type: "contact",
        timestamp: new Date().toISOString(),
        ...sampleDevice,
      };

      const bookingPayload = {
        name: "Test Booker",
        phone: "+10000000001",
        email: "",
        message: "Booking popup self-test",
        form_type: "booking_popup",
        timestamp: new Date().toISOString(),
        ...sampleDevice,
      };

      const send = async (body: any) => {
        const res = await fetch(WEBHOOK_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
          body: JSON.stringify(body),
        });
        const text = await res.text();
        return { status: res.status, ok: res.ok, body: text.slice(0, 500) };
      };

      const [contactRes, bookingRes] = await Promise.all([send(contactPayload), send(bookingPayload)]);
      console.log("forward-webhook selftest results", { contactRes, bookingRes });

      return new Response(
        JSON.stringify({ ok: contactRes.ok && bookingRes.ok, selftest: { contact: contactRes, booking_popup: bookingRes } }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
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

    // Log only non-sensitive metadata
    const { form_type, device_type, browser_language, timezone, platform } = (payload as any);
    console.log("forward-webhook received", { form_type, device_type, browser_language, timezone, platform });

    // Forward to external webhook as JSON
    const forwardRes = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const text = await forwardRes.text();
    console.log("forward-webhook upstream", { status: forwardRes.status, ok: forwardRes.ok, body: text.slice(0, 500) });

    if (!forwardRes.ok) {
      return new Response(
        JSON.stringify({ ok: false, upstream_status: forwardRes.status, body: text }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ ok: true, status: forwardRes.status, body: text }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err: any) {
    console.error("forward-webhook error", String(err?.message || err));
    return new Response(JSON.stringify({ ok: false, error: String(err?.message || err) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
