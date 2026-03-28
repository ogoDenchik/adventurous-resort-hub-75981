import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import CyprusHero from '@/components/cyprus/CyprusHero';
import LearningJourney from '@/components/cyprus/LearningJourney';
import CyprusLifestyle from '@/components/cyprus/CyprusLifestyle';
import CyprusAdvantages from '@/components/cyprus/CyprusAdvantages';
import CyprusFAQ from '@/components/cyprus/CyprusFAQ';

const Cyprus: React.FC = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/48884035225?text=Hi!%20I%27m%20interested%20in%20kitesurfing%20in%20Cyprus', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ScrollToTop />
      
      <CyprusHero onWhatsApp={handleWhatsApp} />
      <LearningJourney />
      <CyprusLifestyle />
      <CyprusAdvantages />

      {/* Video */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-6">
              Посмотрите, как это выглядит
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

      <CyprusFAQ />

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-card rounded-2xl border border-border/50 p-8 md:p-10 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
              Готовы попробовать?
            </h2>
            <p className="text-muted-foreground mb-4">
              Напишите — подберём время и спот под ваш уровень
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-6 text-sm">
              <Link to="/brazil" className="px-4 py-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors font-medium">
                🇧🇷 Бразилия
              </Link>
              <Link to="/kite-safari" className="px-4 py-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors font-medium">
                🇪🇬 Египет
              </Link>
            </div>
            <Button size="lg" className="text-lg px-8 py-6 gap-3" onClick={handleWhatsApp}>
              <MessageCircle className="w-5 h-5" />
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Cyprus;
