import React from 'react';
import { Check } from 'lucide-react';

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

  return (
    <section className="section-padding bg-muted/30">
      <div className="container">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            MEET YOUR COACH
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* LEFT SIDE - PHOTO */}
          <div className="animate-slide-up order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl hover-lift">
              <img 
                src="/lovable-uploads/denis-coach-portrait.jpg" 
                alt="Denis - Professional Kiteboarding Coach" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* RIGHT SIDE - TEXT CONTENT */}
          <div className="animate-slide-up order-1 lg:order-2" style={{ animationDelay: '200ms' }}>
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
                  DENIS
                </h3>
                <p className="text-xl text-primary font-medium mb-4">
                  Private Kiteboarding Coach
                </p>
                <p className="text-lg font-semibold text-foreground/80 mb-6">
                  5+ YEARS | 50+ SPOTS | 500+ STUDENTS
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-foreground/90 text-lg leading-relaxed">
                  I'm not just an instructor — I'm your guide to mastering kitesurfing through a proven, systematic approach.
                </p>
                <p className="text-foreground/90 text-lg leading-relaxed">
                  My step-by-step methodology breaks complex skills into simple, achievable steps — that's why my students progress faster.
                </p>
              </div>

              <div className="pt-6">
                <h4 className="text-2xl font-display font-bold text-foreground mb-6">
                  WHY I'M DIFFERENT
                </h4>
                <div className="space-y-4">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetYourCoach;
