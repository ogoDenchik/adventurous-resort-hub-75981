import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { MessageCircle, Send, Instagram } from 'lucide-react';
import CyprusHero from '@/components/cyprus/CyprusHero';
import LearningJourney from '@/components/cyprus/LearningJourney';
import CyprusTrustBar from '@/components/cyprus/CyprusTrustBar';
import CyprusLifestyle from '@/components/cyprus/CyprusLifestyle';
import CyprusAdvantages from '@/components/cyprus/CyprusAdvantages';
import CyprusFAQ from '@/components/cyprus/CyprusFAQ';
import CyprusTestimonials from '@/components/cyprus/CyprusTestimonials';
import { useLanguage } from '@/contexts/LanguageContext';

const contactMethods = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "+48 884 035 225",
    link: "https://wa.me/48884035225?text=Hey%20OGO%20Academy%2C%20I%20have%20a%20question!",
    color: "bg-green-500",
    hoverColor: "hover:bg-green-600",
  },
  {
    icon: Instagram,
    title: "Instagram",
    description: "@ogo_kite_academy",
    link: "https://www.instagram.com/ogo_kite_academy",
    color: "bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400",
    hoverColor: "hover:opacity-90",
  },
  {
    icon: Send,
    title: "Telegram",
    description: "@ogodenchik_official",
    link: "https://t.me/ogodenchik_official",
    color: "bg-blue-500",
    hoverColor: "hover:bg-blue-600",
  },
];

const Cyprus: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ScrollToTop />
      
      <CyprusHero />
      <CyprusTrustBar />
      <LearningJourney />
      <CyprusLifestyle />
      <CyprusTestimonials />
      <CyprusAdvantages />

      {/* Video */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-6">
              {t('cyprus.videoTitle')}
            </h2>
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/jn9oejNBv2A"
                title="Water Start Tutorial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section id="cyprus-contact" className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-2">
            {t('cyprus.contactTitle')}
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            {t('cyprus.contactSubtitle')}
          </p>
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
          <p className="text-center text-muted-foreground text-sm mt-6">
            {t('contact.responseNote')}
          </p>
        </div>
      </section>

      <CyprusFAQ />
      
      <Footer />
    </div>
  );
};

export default Cyprus;
