import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Send, MessageCircle, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const ContactPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const getDeviceInfo = () => {
    const width = window.innerWidth;
    const deviceType = width < 768 ? 'mobile' : width < 1024 ? 'tablet' : 'desktop';
    
    return {
      device_type: deviceType,
      browser_language: navigator.language,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      platform: navigator.platform,
    };
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      phone: formData.get('phone') as string,
      email: formData.get('email') as string,
      telegram: formData.get('telegram') as string,
      message: formData.get('message') as string,
    };

    try {
      // Send email via edge function
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: data,
      });

      if (error) throw error;

      // Send to n8n webhook
      try {
        await fetch('https://ogodenchik.app.n8n.cloud/webhook/75b33b6a-7c37-4d8a-8750-778a3a9aa6f3', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...data,
            form_type: 'contact',
            timestamp: new Date().toISOString(),
            ...getDeviceInfo(),
          }),
        });
      } catch (webhookError) {
        console.error('n8n webhook error:', webhookError);
        // Don't fail the whole submission if webhook fails
      }

      toast({
        title: "Message Sent Successfully!",
        description: "Thanks! We'll reply within 24h on WhatsApp or Telegram.",
      });
      
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Header Section */}
        <section className="relative bg-gradient-to-br from-primary via-accent to-primary/90 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 to-black/35"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 animate-fade-in text-white" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
              Get in Touch with OGO Kite Academy
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto animate-slide-up text-white/95" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
              We are here to answer your questions and help you join our next kitesurfing adventure.
            </p>
          </div>
        </section>

        {/* Quick Contact Buttons */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <a
                href="https://t.me/ogodenchik"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message us on Telegram"
                className="group bg-card hover:bg-accent/10 border-2 border-border hover:border-primary rounded-lg p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-primary/10 group-hover:bg-primary p-4 rounded-full transition-colors">
                    <Send className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Message us on Telegram</h3>
                <p className="text-muted-foreground text-sm">Quick responses and direct chat</p>
              </a>

              <a
                href="https://wa.me/48884035225"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="group bg-card hover:bg-accent/10 border-2 border-border hover:border-primary rounded-lg p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-primary/10 group-hover:bg-primary p-4 rounded-full transition-colors">
                    <MessageCircle className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Chat on WhatsApp</h3>
                <p className="text-muted-foreground text-sm">Connect instantly via WhatsApp</p>
              </a>

              <a
                href="https://www.instagram.com/ogo_kite_academy/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DM us on Instagram"
                className="group bg-card hover:bg-accent/10 border-2 border-border hover:border-primary rounded-lg p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-primary/10 group-hover:bg-primary p-4 rounded-full transition-colors">
                    <Instagram className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">DM us on Instagram</h3>
                <p className="text-muted-foreground text-sm">Follow and message us</p>
              </a>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-card rounded-lg shadow-lg p-8 md:p-12">
                <h2 className="text-3xl font-display font-bold mb-8 text-center">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="+1 234 567 8900"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="john.doe@example.com"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="telegram">Telegram Handle</Label>
                    <Input
                      type="text"
                      id="telegram"
                      name="telegram"
                      placeholder="@yourusername"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell us about your kitesurfing goals, questions, or preferred dates..."
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground sticky bottom-4 md:static"
                    size="lg"
                    aria-label="Send message"
                  >
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="relative py-20 bg-gradient-to-br from-primary via-accent to-primary/90 text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 to-black/35"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-8 text-white" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
              Join the OGO Family — Your Next Adventure Starts Here.
            </h2>
            
            <div className="bg-black/20 backdrop-blur-sm border border-white/20 rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4 text-white" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>Not sure where to go?</h3>
              <p className="text-lg mb-6 text-white/95" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
                Explore our destinations and find the trip that inspires you most.
              </p>
              <Link to="/#programs">
                <Button 
                  size="lg"
                  className="bg-white text-foreground hover:bg-white/90 font-semibold px-8 py-6 text-lg"
                  aria-label="Explore destinations"
                >
                  Explore Destinations
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
