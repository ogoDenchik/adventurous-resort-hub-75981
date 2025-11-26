import React from 'react';
import { Target, BarChart3, Video, Brain } from 'lucide-react';

const WhyMyMethodWorks = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container max-w-4xl">
        <div className="animate-slide-up">
          <div className="text-center mb-4">
            <h4 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3 uppercase">
              WHY MY METHOD WORKS
            </h4>
            <p className="text-xl text-primary font-semibold mb-2 uppercase">
              NOT RANDOM PRACTICE — SYSTEMATIC PROGRESSION
            </p>
            <p className="text-foreground/70 text-base max-w-2xl mx-auto">
              Most people struggle with kitesurfing because they learn chaotically. My step-by-step methodology eliminates guesswork.
            </p>
          </div>

          {/* Method Map - 4 Steps */}
          <div className="mt-12 relative">
            {/* Desktop: Horizontal connecting line */}
            <div className="hidden lg:block absolute top-1/4 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 -translate-y-8" />
            
            {/* Mobile: Vertical connecting line */}
            <div className="lg:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20" />

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative">
              {/* Step 1 */}
              <div className="relative">
                <div className="bg-card border border-border/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative z-10">
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                    <Target className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <div className="text-sm font-bold text-primary mb-2">STEP 1</div>
                  <h5 className="text-lg font-display font-bold text-foreground mb-3 uppercase">
                    PERSONALIZED APPROACH
                  </h5>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    Small groups (max 3–4) or 1-on-1. Your goals, your pace, your progress — no cookie-cutter lessons.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="bg-card border border-border/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative z-10">
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                    <BarChart3 className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <div className="text-sm font-bold text-primary mb-2">STEP 2</div>
                  <h5 className="text-lg font-display font-bold text-foreground mb-3 uppercase">
                    STRUCTURED PROGRESSION
                  </h5>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    Not "try everything and see what sticks". Every lesson builds on the previous one, creating a clear path from first theory to confident riding.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="bg-card border border-border/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative z-10">
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                    <Video className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <div className="text-sm font-bold text-primary mb-2">STEP 3</div>
                  <h5 className="text-lg font-display font-bold text-foreground mb-3 uppercase">
                    VIDEO ANALYSIS
                  </h5>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    See yourself through my eyes. After key sessions, we review footage so you understand exactly what worked and what to adjust.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative">
                <div className="bg-card border border-border/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative z-10">
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                    <Brain className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <div className="text-sm font-bold text-primary mb-2">STEP 4</div>
                  <h5 className="text-lg font-display font-bold text-foreground mb-3 uppercase">
                    SKILL RETENTION & MINDSET
                  </h5>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    I teach you what to feel, not just what to do. You learn to read the wind, stay calm under pressure, and maintain progress session after session.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMyMethodWorks;
