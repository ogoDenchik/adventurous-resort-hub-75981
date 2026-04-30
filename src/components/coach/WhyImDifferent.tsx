import React from 'react';
import { AnimatedLine, RevealOnScroll, StaggeredList } from '@/hooks/use-invisible-animation';
import { useLanguage } from '@/contexts/LanguageContext';

const WhyImDifferent = () => {
  const { t } = useLanguage();
  const highlights = [
    { num: '01', title: t('home.diff1Title'), description: t('home.diff1Desc') },
    { num: '02', title: t('home.diff2Title'), description: t('home.diff2Desc') },
    { num: '03', title: t('home.diff3Title'), description: t('home.diff3Desc') },
    { num: '04', title: t('home.diff4Title'), description: t('home.diff4Desc') },
    { num: '05', title: t('home.diff5Title'), description: t('home.diff5Desc') },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container max-w-4xl">

        <RevealOnScroll>
          <p className="section-number mb-6">{t('home.whyDifferent')}</p>
        </RevealOnScroll>

        <AnimatedLine className="mb-16" />

        <RevealOnScroll delay={100} className="mb-12">
          <h3 className="heading-display text-4xl md:text-5xl text-foreground">
            {t('home.whatSetsApart')}
          </h3>
        </RevealOnScroll>

        <StaggeredList staggerMs={110} baseDelay={150}>
          {highlights.map((h, index) => (
            <div key={index} className="group">
              <div className="flex gap-8 py-6 transition-all duration-300 hover:pl-2">
                <span className="section-number text-lg flex-shrink-0 pt-1">{h.num}</span>
                <div className="flex-1">
                  <p className="font-medium text-foreground leading-snug mb-1 uppercase text-sm tracking-wide">
                    {h.title}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {h.description}
                  </p>
                </div>
              </div>
              <div className="section-divider" />
            </div>
          ))}
        </StaggeredList>

      </div>
    </section>
  );
};

export default WhyImDifferent;
