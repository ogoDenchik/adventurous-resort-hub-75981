import React from 'react';
import { RevealOnScroll, AnimatedLine } from '@/hooks/use-invisible-animation';
import { Wind, Droplets, Zap, Trophy } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'Kite Control & Safety',
    description: 'Master kite handling on land, learn wind theory, and practice all safety systems before touching the water.',
    icon: Wind,
    duration: '2–3 hours',
    skills: ['Wind window theory', 'Kite setup', 'Safety releases', 'Controlled launches'],
  },
  {
    num: '02',
    title: 'Water Body Drag',
    description: 'Enter the water with confidence. Practice body dragging, kite relaunch, and self-rescue techniques.',
    icon: Droplets,
    duration: '3–4 hours',
    skills: ['Body dragging', 'Kite relaunch', 'Self-rescue', 'Board recovery'],
  },
  {
    num: '03',
    title: 'Board Start',
    description: 'Your first real rides. Learn water starts, board control, and how to ride short distances with instructor support.',
    icon: Zap,
    duration: '3–5 hours',
    skills: ['Water start', 'Board stance', 'First rides', 'Speed control'],
  },
  {
    num: '04',
    title: 'Independent Riding',
    description: 'Ride consistently upwind, perform transitions, and build the foundation for your first jumps.',
    icon: Trophy,
    duration: '2–4 hours',
    skills: ['Upwind riding', 'Transitions', 'Toe-side', 'Jump basics'],
  },
];

const BeginnerFlow: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">

        {/* Header */}
        <RevealOnScroll>
          <p className="section-number mb-6">// 02 — Training Plan</p>
        </RevealOnScroll>

        <AnimatedLine className="mb-16" />

        <RevealOnScroll delay={100} className="mb-4">
          <h2 className="heading-display text-4xl md:text-5xl text-foreground">
            Kitesurfer Training Plan
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={200} className="mb-14">
          <p className="text-muted-foreground mt-4">
            300+ students completed this path — How to get from 0 to hero
          </p>
        </RevealOnScroll>

        {/* Steps */}
        <div className="space-y-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <RevealOnScroll key={step.num} delay={index * 120}>
                <div className="group bg-card border border-border/50 rounded-xl overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-stretch">
                    {/* Left: Number + Icon */}
                    <div className="flex md:flex-col items-center gap-4 md:gap-3 p-5 md:p-6 md:w-32 md:items-center md:justify-center bg-muted/30 border-b md:border-b-0 md:border-r border-border/50">
                      <span className="section-number text-lg">{step.num}</span>
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="label-caps text-muted-foreground text-[10px] hidden md:block">
                        {step.duration}
                      </span>
                    </div>

                    {/* Right: Content */}
                    <div className="flex-1 p-5 md:p-6">
                      <div className="flex items-center justify-between mb-2 md:hidden">
                        <h3 className="font-medium text-foreground uppercase text-sm tracking-widest">
                          {step.title}
                        </h3>
                        <span className="label-caps text-muted-foreground text-[10px]">
                          {step.duration}
                        </span>
                      </div>
                      <h3 className="hidden md:block font-medium text-foreground uppercase text-sm tracking-widest mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-foreground/70 mb-4">
                        {step.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {step.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

        {/* CTA */}
        <RevealOnScroll delay={200} className="pt-12 text-center">
          <p className="label-caps text-muted-foreground mb-6">
            Average total time to independence: 10–16 hours
          </p>
          <a
            href="https://wa.me/48884035225?text=Hey%20OGO%20Academy%2C%20I%27d%20like%20to%20start%20the%20Beginner%20Training%20Plan."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Start Your Journey
          </a>
        </RevealOnScroll>

      </div>
    </section>
  );
};

export default BeginnerFlow;
