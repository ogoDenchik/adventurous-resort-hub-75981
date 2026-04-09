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
      description: "@ogodenchik_official",
      link: "https://t.me/ogodenchik_official",
      color: "bg-blue-500",
      hoverColor: "hover:bg-blue-600",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Header */}
        <section className="py-10 md:py-24 bg-background">
          <div className="container mx-auto px-4 text-center">
            <p className="section-number mb-2 md:mb-4">// Contact</p>
            <h1 className="heading-display text-4xl md:text-7xl text-foreground mb-3 md:mb-6">
              Get in Touch
            </h1>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Want to book a lesson in Cyprus or join a kite trip? Reach out via WhatsApp, Instagram, or Telegram — and we'll get you riding this week.
            </p>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="py-6 md:py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 max-w-5xl mx-auto">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-card rounded-xl md:rounded-2xl p-4 md:p-8 flex items-center gap-4 md:flex-col md:text-center transition-all duration-300 hover:-translate-y-1 md:hover:-translate-y-2 hover:shadow-xl border border-border overflow-hidden"
                >
                  <div className="flex-shrink-0 md:flex md:justify-center md:mb-5">
                    <div className={`${method.color} ${method.hoverColor} w-11 h-11 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg`}>
                      <method.icon className="w-5 h-5 md:w-8 md:h-8 text-white" />
                    </div>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base md:text-xl font-semibold text-foreground uppercase tracking-wide">
                      {method.title}
                    </h3>
                    <p className="text-muted-foreground text-xs md:text-sm">
                      {method.description}
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </a>
              ))}
            </div>

            <div className="text-center mt-6 md:mt-12">
              <p className="text-muted-foreground text-sm md:text-base">
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
