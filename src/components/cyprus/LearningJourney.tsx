import React, { useEffect, useRef, useState } from 'react';
import { Wind, Waves, Zap, Trophy } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const LearningJourney: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set());

  const steps = [
    { day: t('cyprus.lesson1'), icon: Wind, title: t('cyprus.lesson1Title'), tags: t('cyprus.lesson1Tags').split(','), photo: '/lovable-uploads/kite-lesson-1.jpg', objectPosition: 'center 30%' },
    { day: t('cyprus.lesson2'), icon: Waves, title: t('cyprus.lesson2Title'), tags: t('cyprus.lesson2Tags').split(','), photo: '/lovable-uploads/kite-lesson-2.jpg', objectPosition: 'center' },
    { day: t('cyprus.lesson3'), icon: Zap, title: t('cyprus.lesson3Title'), tags: t('cyprus.lesson3Tags').split(','), photo: '/lovable-uploads/kite-lesson-3.jpg', objectPosition: 'center' },
    { day: t('cyprus.lesson4'), icon: Trophy, title: t('cyprus.lesson4Title'), tags: t('cyprus.lesson4Tags').split(','), photo: '/lovable-uploads/kite-lesson-4.jpg', objectPosition: 'center 35%' },
  ];

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const cards = sectionRef.current?.querySelectorAll('[data-step]');
    if (!cards) return;
    cards.forEach((card, index) => {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) { setVisibleSteps((prev) => new Set(prev).add(index)); observer.unobserve(entry.target); }
      }, { threshold: 0.3 });
      observer.observe(card);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section id="learning-journey" className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute top-0 left-0 w-full h-full opacity-[0.07]" viewBox="0 0 1200 800" preserveAspectRatio="none" fill="none">
          <path d="M-100,200 C200,100 400,500 600,300 S900,600 1300,250" stroke="hsl(var(--primary))" strokeWidth="180" strokeLinecap="round" />
        </svg>
        <svg className="absolute top-0 left-0 w-full h-full opacity-[0.12]" viewBox="0 0 1200 800" preserveAspectRatio="none" fill="none">
          <path d="M-50,350 C250,200 500,600 750,350 S1000,500 1350,200" stroke="hsl(var(--primary))" strokeWidth="4" strokeLinecap="round" strokeDasharray="20 15" />
        </svg>
      </div>
      <div className="container mx-auto px-4 relative z-10" ref={sectionRef}>
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-2">{t('cyprus.learningTitle')}</h2>
          <p className="text-muted-foreground">{t('cyprus.learningSubtitle')}</p>
        </div>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-7 md:left-1/2 top-0 bottom-0 w-0.5 border-l-2 border-dashed border-primary/30 md:-translate-x-px" />
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            const isVisible = visibleSteps.has(index);
            return (
              <div key={index} data-step={index} className={`relative flex items-start gap-4 md:gap-0 mb-14 last:mb-0 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-7 md:left-1/2 top-4 z-10 -translate-x-1/2">
                  <div className={`w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shadow-lg ring-4 ring-background transition-all duration-700 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
                    {index + 1}
                  </div>
                </div>
                <div className="w-14 shrink-0 md:hidden" />
                <div className={`flex-1 md:w-[calc(50%-2rem)] ${isEven ? 'md:pr-12' : 'md:pl-12'} transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${index * 120}ms` }}>
                  <div className="bg-card rounded-xl border border-border/50 overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                    <div className="aspect-[16/9] overflow-hidden relative">
                      <img src={step.photo} alt={step.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">{step.day}</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <step.icon className="w-5 h-5 text-primary" />
                        <h3 className="text-lg font-bold">{step.title}</h3>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {step.tags.map((tag, i) => (
                          <span key={i} className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground font-medium">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LearningJourney;
