import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Send, MessageCircle, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { buildWebhookPayload } from '@/utils/tracking';

const WEBHOOK_URL = 'https://ogodenchik.app.n8n.cloud/webhook/11ba0950-0d0d-46ac-b106-efe6059a0c87';

const ContactPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const email = formData.get('email') as string || '';
    const message = formData.get('message') as string || '';

    try {
      // Send email via edge function
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: { name, phone, email, message },
      });

      if (error) console.error('send-contact-email error:', error);

      // Send to webhook with standardized payload
      try {
        const webhookPayload = buildWebhookPayload(
          'Contact Page',
          'General Inquiry',
          name,
          phone,
          email,
          message || 'Customer sent a contact request.'
        );

        const response = await fetch(WEBHOOK_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(webhookPayload),
        });

        if (!response.ok) throw new Error('Webhook failed');
      } catch (webhookError) {
        console.error('Webhook error:', webhookError);
      }

      toast({
        title: "Thank you, we will reply within 24 hours!",
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

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      subtitle: "Quick responses, instant chat",
      description: "+48 884 035 225",
      link: "https://wa.me/48884035225",
      color: "bg-green-500",
      hoverColor: "hover:bg-green-600",
    },
    {
      icon: Instagram,
      title: "Instagram",
      subtitle: "Follow our adventures",
      description: "@ogodenchik",
      link: "https://www.instagram.com/ogodenchik",
      color: "bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400",
      hoverColor: "hover:opacity-90",
    },
    {
      icon: Send,
      title: "Telegram",
      subtitle: "Direct messaging",
      description: "@ogodenchik",
      link: "https://t.me/ogodenchik",
      color: "bg-blue-500",
      hoverColor: "hover:bg-blue-600",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Header Section - Clean & Modern */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 uppercase">
              GET IN TOUCH
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              We're here to answer your questions and help you plan your next adventure.
            </p>
          </div>
        </section>

        {/* Contact Cards - Kite Safari Style */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-card rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-border overflow-hidden"
                >
                  {/* Icon Container */}
                  <div className="flex justify-center mb-5">
                    <div className={`${method.color} ${method.hoverColor} w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg`}>
                      <method.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-display font-bold text-foreground mb-2 uppercase">
                    {method.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {method.subtitle}
                  </p>
                  <p className="text-primary font-semibold">
                    {method.description}
                  </p>

                  {/* Hover Effect Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form - Clean Modern Style */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              {/* Form Header */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 uppercase">
                  SEND US A MESSAGE
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>
              
              <div className="bg-card rounded-2xl shadow-lg border border-border p-8 md:p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground font-semibold">
                      Your Full Name *
                    </Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Enter your full name"
                      className="h-12 rounded-xl border-border focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground font-semibold">
                      Phone Number (WhatsApp, Telegram) *
                    </Label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="+48 884 035 225"
                      className="h-12 rounded-xl border-border focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-semibold">
                      Email (Optional)
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your.email@example.com"
                      className="h-12 rounded-xl border-border focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground font-semibold">
                      Your Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell us about your kitesurfing goals, questions, or preferred dates..."
                      className="rounded-xl border-border focus:border-primary resize-none"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 text-base font-semibold rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:shadow-lg"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Clean Modern Style */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 uppercase">
                START YOUR ADVENTURE
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Not sure where to go? Explore our destinations and find the trip that inspires you most.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/#calendar-locations">
                  <Button 
                    size="lg"
                    className="font-semibold px-8 py-6 text-base rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:shadow-lg w-full sm:w-auto"
                  >
                    <MapPin className="w-5 h-5 mr-2" />
                    Explore Destinations
                  </Button>
                </Link>
                
                <a href="https://wa.me/48884035225?text=Hey%20OGO%20Academy%2C%20I%20have%20a%20question!" target="_blank" rel="noopener noreferrer">
                  <Button 
                    size="lg"
                    variant="outline"
                    className="font-semibold px-8 py-6 text-base rounded-xl border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 w-full sm:w-auto"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Chat on WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
