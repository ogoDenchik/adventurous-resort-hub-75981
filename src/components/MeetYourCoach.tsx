import React from 'react';
import { Check, Clock, Globe, Users, TrendingUp } from 'lucide-react';

const MeetYourCoach = () => {
  const highlights = [
    {
      title: "Dual Certified: Kiteboarding + Snowboard Instructor",
      description: "Understanding board sports gives me unique teaching insight."
    },
    {
      title: "Nomadic Coaching: I follow the best wind seasons worldwide",
      description: "So you always train in optimal conditions."
    },
    {
      title: "Results-Driven: 50+ students went from zero to independent riding",
      description: "In just 7 days."
    },
    {
      title: "Returning Community: 70+ clients come back",
      description: "Season after season."
    },
    {
      title: "Advanced Progression: 20–30 tricks library",
      description: "For riders wanting next-level skills."
    }
  ];

  const stats = [
    {
      icon: Clock,
      number: '5+',
      label: 'Years Experience'
    },
    {
      icon: Globe,
      number: '50+',
      label: 'Spots Worldwide'
    },
    {
      icon: Users,
      number: '500+',
      label: 'Students Trained'
    },
    {
      icon: TrendingUp,
      number: '15.2m',
      label: 'Highest Jump'
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container max-w-4xl">
        {/* Section Title */}
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            MEET YOUR COACH
          </h2>
        </div>

        {/* Portrait Photo */}
        <div className="animate-slide-up mb-8" style={{ animationDelay: '100ms' }}>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl hover-lift max-w-md mx-auto">
            <img 
              src="/lovable-uploads/denis-coach-portrait.jpg" 
              alt="Denis - Professional Kiteboarding Coach" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Name + Role */}
        <div className="text-center mb-8 animate-slide-up" style={{ animationDelay: '200ms' }}>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
            DENIS
          </h3>
          <p className="text-xl text-primary font-medium">
            Private Kiteboarding Coach
          </p>
        </div>

        {/* Quote Block */}
        <div className="animate-slide-up mb-12" style={{ animationDelay: '300ms' }}>
          <div className="relative bg-card border-l-4 border-primary rounded-2xl shadow-lg p-6 md:p-8 max-w-3xl">
            <div className="absolute -top-3 -left-3 text-primary/20 text-6xl font-serif">"</div>
            <p className="text-foreground/90 text-lg md:text-xl leading-relaxed relative z-10 italic">
              I'm not just an instructor — I'm your guide to mastering kitesurfing through a proven, systematic approach.
              My step-by-step methodology breaks complex skills into simple, achievable steps — that's why my students progress faster.
            </p>
          </div>
        </div>

        {/* Stats Trust Bar */}
        <div className="animate-slide-up mb-12" style={{ animationDelay: '400ms' }}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
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
            ))}
          </div>
        </div>

        {/* Why I'm Different */}
        <div className="animate-slide-up" style={{ animationDelay: '500ms' }}>
          <h4 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8 text-center">
            WHY I'M DIFFERENT
          </h4>
          <div className="space-y-4 max-w-2xl mx-auto">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex gap-3">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" strokeWidth={3} />
                  </div>
                </div>
                <div>
                  <p className="text-foreground font-semibold leading-relaxed">
                    {highlight.title}
                  </p>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetYourCoach;
