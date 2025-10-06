import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  telegram?: string;
  message?: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();
    
    console.log("Processing contact form submission:", formData);

    // Send email to admin using fetch
    const adminEmailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "OGO Kite Academy <onboarding@resend.dev>",
        to: ["ogdenchik@gmail.com"],
        subject: `New Contact Form Submission from ${formData.name}`,
        html: `
          <h1>New Contact Form Submission</h1>
          <h2>Contact Details:</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
          ${formData.telegram ? `<p><strong>Telegram:</strong> @${formData.telegram}</p>` : ''}
          ${formData.message ? `
            <h2>Message:</h2>
            <p>${formData.message.replace(/\n/g, '<br>')}</p>
          ` : ''}
          <hr>
          <p><small>This email was sent from the OGO Kite Academy contact form.</small></p>
        `,
      }),
    });

    // Send confirmation email to user
    const userEmailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "OGO Kite Academy <onboarding@resend.dev>",
        to: [formData.email],
        subject: "Thank you for contacting OGO Kite Academy!",
        html: `
          <h1>Thank you for reaching out, ${formData.name}!</h1>
          <p>We've received your message and will get back to you within 24 hours on WhatsApp or Telegram.</p>
          <h2>Your Contact Information:</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
          ${formData.telegram ? `<p><strong>Telegram:</strong> @${formData.telegram}</p>` : ''}
          ${formData.message ? `
            <h2>Your Message:</h2>
            <p>${formData.message.replace(/\n/g, '<br>')}</p>
          ` : ''}
          <hr>
          <p>In the meantime, feel free to connect with us on:</p>
          <p>
            • <a href="https://t.me/ogodenchik">Telegram</a><br>
            • <a href="https://wa.me/48884035225">WhatsApp</a><br>
            • <a href="https://www.instagram.com/ogo_kite_academy/">Instagram</a>
          </p>
          <p>Best regards,<br>The OGO Kite Academy Team</p>
        `,
      }),
    });

    console.log("Emails sent successfully:", { adminEmailResponse, userEmailResponse });

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Contact form submitted successfully" 
      }), 
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);
