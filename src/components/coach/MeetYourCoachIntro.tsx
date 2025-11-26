import React from 'react';

const MeetYourCoachIntro = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container max-w-4xl">
        {/* Section Title */}
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 uppercase">
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
          <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2 uppercase">
            DENIS
          </h3>
          <p className="text-xl text-primary font-medium">
            Private Kiteboarding Coach
          </p>
        </div>

        {/* Quote Block */}
        <div className="animate-slide-up" style={{ animationDelay: '300ms' }}>
          <div className="relative bg-card border-l-4 border-primary rounded-2xl shadow-lg p-6 md:p-8 max-w-3xl">
            <div className="absolute -top-3 -left-3 text-primary/20 text-6xl font-serif">"</div>
            <p className="text-foreground/90 text-lg md:text-xl leading-relaxed relative z-10 italic">
              I'm not just an instructor — I'm your guide to mastering kitesurfing through a proven, systematic approach.
              My step-by-step methodology breaks complex skills into simple, achievable steps — that's why my students progress faster.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetYourCoachIntro;
