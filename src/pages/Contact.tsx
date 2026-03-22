import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Send, MessageCircle, Instagram, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactPage = () => {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      subtitle: "Quick responses, instant chat",
      description: "+48 884 035 225",
      link: "https://wa.me/48884035225?text=Hey%20OGO%20Academy%2C%20I%20have%20a%20question!",
      color: "bg-green-500",
      hoverColor: "hover:bg-green-600",
    },
    {
      icon: Instagram,
      title: "Instagram",
      subtitle: "Follow our adventures",
      description: "@ogo_kite_academy",
      link: "https://www.instagram.com/ogo_kite_academy",
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
        {/* Header */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 text-center">
            <p className="section-number mb-4">// Contact</p>
            <h1 className="heading-display text-5xl md:text-7xl text-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              We're here to answer your questions and help you plan your next adventure.
            </p>
          </div>
        </section>

        {/* Contact Cards */}
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
                  <div className="flex justify-center mb-5">
                    <div className={`${method.color} ${method.hoverColor} w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg`}>
                      <method.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 uppercase tracking-wide">
                    {method.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {method.subtitle}
                  </p>
                  <p className="text-primary font-semibold text-base">
                    {method.description}
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </a>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground text-base">
                We respond to all messages — usually within a few hours.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="heading-display text-3xl md:text-5xl text-foreground mb-6">
                Start Your Adventure
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Not sure where to go? Explore our destinations.
              </p>
              <Link to="/#calendar-section">
                <Button 
                  size="lg"
                  className="font-semibold px-8 py-6 text-base"
                >
                  <MapPin className="w-5 h-5 mr-2" />
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
