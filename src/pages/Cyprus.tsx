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
import CyprusPackages from '@/components/cyprus/CyprusPackages';
import CyprusFAQ from '@/components/cyprus/CyprusFAQ';

const Cyprus: React.FC = () => {
  const cyprusPhotos = [
    '/lovable-uploads/cyprus-beach-lesson.jpg',
    '/lovable-uploads/cyprus-happy-student.jpg',
    '/lovable-uploads/cyprus-sunset-lesson.jpg',
    '/lovable-uploads/cyprus-tandem-teaching.jpg',
    '/lovable-uploads/cyprus-sunset-riding.jpg',
    '/lovable-uploads/cyprus-instructor-teaching.jpg',
    '/lovable-uploads/cyprus-riding-action.jpg',
    '/lovable-uploads/cyprus-lifestyle-sunset.jpg',
    '/lovable-uploads/cyprus-gear-sunset.jpg',
    '/lovable-uploads/cyprus-student-success.jpg',
  ];

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

      {/* Video Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
              Посмотрите, как это выглядит
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              Водный старт — момент, когда вы впервые встаёте на доску
            </p>
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

      <CyprusPackages onWhatsApp={handleWhatsApp} />

      {/* Photo Gallery */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-4">Cyprus Vibes</h2>
          <p className="text-center text-muted-foreground mb-12">Атмосфера ваших будущих уроков</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 max-w-7xl mx-auto">
            {cyprusPhotos.map((photo, index) => (
              <div 
                key={index} 
                className={`relative overflow-hidden rounded-lg group cursor-pointer ${
                  index === 0 || index === 5 ? 'col-span-2 row-span-2 aspect-square' : 'aspect-square'
                }`}
              >
                <img
                  src={photo}
                  alt={`Cyprus kitesurfing ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CyprusFAQ />

      {/* Next Steps CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-card rounded-2xl border border-border/50 p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Готовы попробовать?
            </h2>
            <p className="text-lg text-muted-foreground mb-4 max-w-2xl mx-auto">
              Напишите нам в WhatsApp — подберём удобное время и спот под ваш уровень. 
              А после Кипра — присоединяйтесь к нашим приключениям!
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8 text-sm text-muted-foreground">
              <Link to="/brazil" className="px-4 py-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors font-medium">
                🇧🇷 Бразилия — Даунвинд
              </Link>
              <Link to="/kite-safari" className="px-4 py-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors font-medium">
                🇪🇬 Кайт-Сафари — Египет
              </Link>
            </div>
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 gap-3"
              onClick={handleWhatsApp}
            >
              <MessageCircle className="w-5 h-5" />
              Написать в WhatsApp
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              📲 +48 884 035 225 — отвечаем за 5 минут
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Cyprus;
