import React from 'react';
import { RevealOnScroll, AnimatedLine } from '@/hooks/use-invisible-animation';
import { useLanguage } from '@/contexts/LanguageContext';

const MeetYourCoachIntro = () => {
  const { t } = useLanguage();
  return (
    <section className="section-padding bg-background">
      <div className="container max-w-4xl">

        <RevealOnScroll>
          <p className="section-number mb-6">{t('home.meetCoach')}</p>
        </RevealOnScroll>

        <AnimatedLine className="mb-16" />

        <RevealOnScroll delay={100} className="mb-12">
          <div className="relative overflow-hidden max-w-sm mx-auto">
            <img loading="lazy"
              src="/lovable-uploads/denis-coach-portrait.jpg"
              alt="Denis - Professional Kiteboarding Coach"
              className="w-full h-auto object-cover grayscale-[20%]"
            />
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={200} className="text-center mb-10">
          <h2 className="heading-display text-5xl md:text-6xl text-foreground mb-3">
            {t('home.coachName')}
          </h2>
          <p className="label-caps text-primary tracking-widest">
            {t('home.coachRole')}
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={350} className="text-center max-w-2xl mx-auto">
          <p className="heading-display-italic text-2xl md:text-3xl text-foreground/80 leading-relaxed">
            {t('home.coachQuote')}
          </p>
        </RevealOnScroll>

      </div>
    </section>
  );
};

export default MeetYourCoachIntro;
