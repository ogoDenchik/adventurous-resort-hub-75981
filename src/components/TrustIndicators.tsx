import React from 'react';
import { RevealOnScroll, AnimatedLine } from '@/hooks/use-invisible-animation';

const TrustIndicators = () => {
  const stats = [
    { number: '500+', label: 'Students Trained' },
    { number: '50+', label: '"Zero to Hero" in 7 Days' },
    { number: '70+', label: 'Returning Clients' },
    { number: '50+', label: 'Spots Worldwide' },
  ];

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedLine className="mb-12" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {stats.map((stat, index) => (
            <RevealOnScroll key={index} delay={index * 100}>
              <div className={`text-center py-6 ${index < stats.length - 1 ? 'lg:border-r border-border/40' : ''}`}>
                <div className="heading-display text-4xl md:text-5xl text-foreground mb-2">
                  {stat.number}
                </div>
                <div className="label-caps text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
        <AnimatedLine className="mt-12" delay={400} />
      </div>
    </section>
  );
};

export default TrustIndicators;
