import React from 'react';
import { RevealOnScroll, AnimatedLine } from '@/hooks/use-invisible-animation';

const MeetYourCoachIntro = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container max-w-4xl">

        {/* Section number */}
        <RevealOnScroll>
          <p className="section-number mb-6">// 01 — Meet Your Coach</p>
        </RevealOnScroll>

        <AnimatedLine className="mb-16" />

        {/* Portrait Photo */}
        <RevealOnScroll delay={100} className="mb-12">
          <div className="relative overflow-hidden max-w-sm mx-auto">
            <img 
              src="/lovable-uploads/denis-coach-portrait.jpg" 
              alt="Denis - Professional Kiteboarding Coach" 
              className="w-full h-auto object-cover grayscale-[20%]"
            />
          </div>
        </RevealOnScroll>

        {/* Name + Role */}
        <RevealOnScroll delay={200} className="text-center mb-10">
          <h2 className="heading-display text-5xl md:text-6xl text-foreground mb-3">
            Denis
          </h2>
          <p className="label-caps text-primary tracking-widest">
            Private Kiteboarding Coach
          </p>
        </RevealOnScroll>

        {/* Quote */}
        <RevealOnScroll delay={350} className="text-center max-w-2xl mx-auto">
          <p className="heading-display-italic text-2xl md:text-3xl text-foreground/80 leading-relaxed">
            "I'm not just an instructor — I'm your guide to mastering kitesurfing through a proven, systematic approach."
          </p>
        </RevealOnScroll>

      </div>
    </section>
  );
};

export default MeetYourCoachIntro;
