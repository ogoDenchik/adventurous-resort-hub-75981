import React from 'react';
import { Clock, Globe, Users, TrendingUp } from 'lucide-react';

const CoachStatsTrustBar = () => {
  const stats = [
    {
      icon: Clock,
      number: '5+',
      label: 'YEARS EXPERIENCE'
    },
    {
      icon: Globe,
      number: '50+',
      label: 'SPOTS WORLDWIDE'
    },
    {
      icon: Users,
      number: '500+',
      label: 'STUDENTS TRAINED'
    },
    {
      icon: TrendingUp,
      number: '15.2m',
      label: 'HIGHEST JUMP'
    }
  ];

  return (
    <section className="bg-muted/30 py-12 md:py-16 border-y border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                <stat.icon className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2 transition-colors duration-300 group-hover:text-primary">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-muted-foreground font-medium uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoachStatsTrustBar;
