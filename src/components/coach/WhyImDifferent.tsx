import React from 'react';
import { AnimatedLine, RevealOnScroll, StaggeredList } from '@/hooks/use-invisible-animation';

const WhyImDifferent = () => {
  const highlights = [
    {
      num: '01',
      title: 'Dual Certified: Kiteboarding + Snowboard Instructor',
      description: 'Understanding board sports gives me unique teaching insight.',
    },
    {
      num: '02',
      title: 'Nomadic Coaching: I Follow the Best Wind Seasons Worldwide',
      description: 'So you always train in optimal conditions.',
    },
    {
      num: '03',
      title: 'Results-Driven: 50+ Students Went from Zero to Independent Riding',
      description: 'In just 7 days.',
    },
    {
      num: '04',
      title: 'Returning Community: 70+ Clients Come Back',
      description: 'Season after season.',
    },
    {
      num: '05',
      title: 'Advanced Progression: 20–30 Tricks Library',
      description: 'For riders wanting next-level skills.',
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container max-w-4xl">

        <RevealOnScroll>
          <p className="section-number mb-6">// 02 — Why I'm Different</p>
        </RevealOnScroll>

        <AnimatedLine className="mb-16" />

        <RevealOnScroll delay={100} className="mb-12">
          <h3 className="heading-display text-4xl md:text-5xl text-foreground">
            What Sets Me Apart
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
