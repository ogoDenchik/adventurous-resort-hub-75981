import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

interface CyprusHeroProps {
  onWhatsApp: () => void;
}

const CyprusHero: React.FC<CyprusHeroProps> = ({ onWhatsApp }) => {
  const scrollToJourney = () => {
    document.getElementById('learning-journey')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden pt-20">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/lovable-uploads/cyprus-hero-aerial.jpg)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-sm font-medium">
          🌍 Круглый год • 340 дней ветра
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
          Кайтсёрфинг<br className="hidden md:block" /> на Кипре
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto mb-8 text-white/90">
          От нуля до самостоятельного катания за 3 дня
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <Button size="lg" className="text-lg px-8 py-6" onClick={onWhatsApp}>
            Записаться
          </Button>
          <Button 
            size="lg" variant="outline"
            className="text-lg px-8 py-6 border-white/40 text-white hover:bg-white/10 bg-white/5"
            onClick={scrollToJourney}
          >
            Как это работает?
          </Button>
        </div>
      </div>
      <button 
        onClick={scrollToJourney}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default CyprusHero;
