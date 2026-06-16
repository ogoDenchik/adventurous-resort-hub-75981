import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const CyprusHero: React.FC = () => {
  const { t } = useLanguage();
  const scrollToBeginnerFlow = () => {
    document.getElementById('learning-journey')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProgressionCoach = () => {
    document.getElementById('denis-progression')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[600px] md:min-h-[100vh] md:h-auto md:aspect-[3/2] flex items-center justify-center overflow-hidden pt-20 h-[85vh]">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/lovable-uploads/hero-main-coaching-compressed.jpg')] bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <p className="label-caps text-white/70 mb-4 tracking-[0.2em] -translate-y-[60px] md:translate-y-0">
          {t('cyprus.heroBadge')}
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4 leading-tight px-2">
          {t('cyprus.heroTitle')}
        </h1>
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <Button size="lg" className="text-lg px-8 py-6" onClick={scrollToBeginnerFlow}>
            {t('cyprus.heroBtnLearn')}
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white/40 text-white hover:bg-white/10 bg-white/5" onClick={scrollToProgressionCoach}>
            {t('cyprus.heroBtnProgress')}
          </Button>
        </div>
      </div>
      <button onClick={scrollToBeginnerFlow} aria-label="Scroll to learning journey" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce">
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default CyprusHero;
