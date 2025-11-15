import React from 'react';
import { Users, Rocket, Repeat, Globe } from 'lucide-react';
import { FadeIn } from '@/hooks/use-scroll-animation';

const TrustIndicators = () => {
  const stats = [
    {
      icon: Users,
      number: '500+',
      label: 'Students Trained'
    },
    {
      icon: Rocket,
      number: '50+',
      label: '"Zero to Hero" in 7 Days'
    },
    {
      icon: Repeat,
      number: '70+',
      label: 'Returning Clients'
    },
    {
      icon: Globe,
      number: '50+',
      label: 'Spots Worldwide'
    }
  ];

  return (
    <section className="bg-muted/30 py-12 md:py-16 border-y border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <FadeIn key={index} delay={index * 0.1} direction="up" distance={20}>
              <div className="text-center group">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                  <stat.icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2 transition-colors duration-300 group-hover:text-primary">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
