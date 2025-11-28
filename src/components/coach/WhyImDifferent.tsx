import React from 'react';

const WhyImDifferent = () => {
  const highlights = [
    {
      icon: "🏅",
      title: "DUAL CERTIFIED: KITEBOARDING + SNOWBOARD INSTRUCTOR",
      description: "Understanding board sports gives me unique teaching insight."
    },
    {
      icon: "🌍",
      title: "NOMADIC COACHING: I FOLLOW THE BEST WIND SEASONS WORLDWIDE",
      description: "So you always train in optimal conditions."
    },
    {
      icon: "📈",
      title: "RESULTS-DRIVEN: 50+ STUDENTS WENT FROM ZERO TO INDEPENDENT RIDING",
      description: "In just 7 days."
    },
    {
      icon: "🤝",
      title: "RETURNING COMMUNITY: 70+ CLIENTS COME BACK",
      description: "Season after season."
    },
    {
      icon: "🚀",
      title: "ADVANCED PROGRESSION: 20–30 TRICKS LIBRARY",
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
