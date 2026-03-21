import React from 'react';
import { Target, BarChart3, Video, Brain } from 'lucide-react';
import { RevealOnScroll, AnimatedLine, StaggeredList } from '@/hooks/use-invisible-animation';

const WhyMyMethodWorks = () => {
  const steps = [
    {
      num: '01',
      icon: Target,
      title: 'Personalized Approach',
      description: 'Small groups (max 3–4) or 1-on-1. Your goals, your pace, your progress — no cookie-cutter lessons.',
    },
    {
      num: '02',
      icon: BarChart3,
      title: 'Structured Progression',
      description: 'Not "try everything and see what sticks". Every lesson builds on the previous one, creating a clear path from first theory to confident riding.',
    },
    {
      num: '03',
      icon: Video,
      title: 'Video Analysis',
      description: 'See yourself through my eyes. After key sessions, we review footage so you understand exactly what worked and what to adjust.',
    },
    {
      num: '04',
      icon: Brain,
      title: 'Skill Retention & Mindset',
      description: 'I teach you what to feel, not just what to do. You learn to read the wind, stay calm under pressure, and maintain progress session after session.',
    },
  ];

  return (
    <section className="section-padding bg-muted/20">
      <div className="container max-w-4xl">

        <RevealOnScroll>
          <p className="section-number mb-6">// 05 — Method</p>
        </RevealOnScroll>

        <AnimatedLine className="mb-16" />

        <RevealOnScroll delay={100} className="mb-4">
          <h3 className="heading-display text-4xl md:text-5xl text-foreground">
            Why My Method Works
          </h3>
        </RevealOnScroll>

        <RevealOnScroll delay={200} className="mb-14">
          <p className="text-muted-foreground max-w-xl mt-4">
            Most people struggle with kitesurfing because they learn chaotically. My step-by-step methodology eliminates guesswork.
          </p>
        </RevealOnScroll>

        <StaggeredList staggerMs={130} baseDelay={200} className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
          {steps.map((step) => (
            <div key={step.num} className="py-8 border-b border-border/40">
              <p className="section-number mb-3">{step.num}</p>
              <h4 className="font-medium text-foreground uppercase text-sm tracking-widest mb-3">
                {step.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </StaggeredList>

      </div>
    </section>
  );
};

export default WhyMyMethodWorks;
