import React from 'react';

const WhyImDifferent = () => {
  const highlights = [
    {
      icon: "🏅",
      title: "Dual Certified: Kiteboarding + Snowboard Instructor",
      description: "Understanding board sports gives me unique teaching insight."
    },
    {
      icon: "🌍",
      title: "Nomadic Coaching: I follow the best wind seasons worldwide",
      description: "So you always train in optimal conditions."
    },
    {
      icon: "📈",
      title: "Results-Driven: 50+ students went from zero to independent riding",
      description: "In just 7 days."
    },
    {
      icon: "🤝",
      title: "Returning Community: 70+ clients come back",
      description: "Season after season."
    },
    {
      icon: "🚀",
      title: "Advanced Progression: 20–30 tricks library",
      description: "For riders wanting next-level skills."
    }
  ];

  return (
    <section className="section-padding">
      <div className="container max-w-4xl">
        <div className="animate-slide-up">
          <h4 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8 text-center uppercase">
            WHY I'M DIFFERENT
          </h4>
          <div className="space-y-4 max-w-2xl mx-auto">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl leading-none">
                    {highlight.icon}
                  </span>
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

export default WhyImDifferent;
