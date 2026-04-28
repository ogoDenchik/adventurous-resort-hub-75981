import React from 'react';
import { Target, BarChart3, Video, Brain } from 'lucide-react';
import { RevealOnScroll, AnimatedLine, StaggeredList } from '@/hooks/use-invisible-animation';

const WhyMyMethodWorks = () => {
  const steps = [
    {
      num: '01',
      icon: Target,
      title: 'Personalized Approach',
      description: 'Goal check → level check → clear training plan.',
    },
    {
      num: '02',
      icon: BarChart3,
      title: 'Structured Progression',
      description: 'Theory → kite control → waterstart → independent riding.',
    },
    {
      num: '03',
      icon: Video,
      title: 'Video Analysis',
      description: 'Record → review → fix one key mistake at a time.',
    },
    {
      num: '04',
      icon: Brain,
      title: 'Skill Retention & Mindset',
      description: 'Build confidence, wind awareness and calm decision-making.',
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
          <p className="label-caps text-muted-foreground mt-4">
            A clear system from first session to independent riding
          </p>
        </RevealOnScroll>

        <StaggeredList staggerMs={130} baseDelay={200} className="grid grid-cols-1 md:grid-cols-4 gap-0 border-y border-border/40">
          {steps.map((step) => (
            <div key={step.num} className="relative py-8 md:px-6 border-b md:border-b-0 md:border-r last:border-b-0 md:last:border-r-0 border-border/40">
              <div className="mb-6 flex items-center justify-between">
                <p className="section-number">{step.num}</p>
                <step.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <h4 className="font-medium text-foreground uppercase text-sm tracking-widest mb-4 min-h-10">
                {step.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-[14rem]">
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
