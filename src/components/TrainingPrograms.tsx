import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { GraduationCap, Crown, RefreshCw, Tent, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const TrainingPrograms = () => {
  const programs = [
    {
      icon: GraduationCap,
      title: "PRIVATE COACHING",
      subtitle: "10 Hours | Egypt & Vietnam",
      description: "Perfect for beginners and intermediate riders",
      features: [
        "Structured step-by-step progression",
        "Premium equipment included",
        "Video analysis after sessions",
        "Safety briefing & theory",
        "Small groups (max 3-4 students) or 1-on-1 available"
      ],
      price: "€800",
      cta: "BOOK NOW",
      link: "/booking",
      badge: null
    },
    {
      icon: Crown,
      title: "VIP 1-ON-1 TRAINING",
      subtitle: "10 Hours | Egypt Only",
      description: "Maximum attention, maximum results",
      features: [
        "Exclusively 1-on-1 (or max 2 students)",
        "Personalized progression plan",
        "Detailed video analysis every session",
        "Professional photo/video session included",
        "Priority scheduling & direct WhatsApp access"
      ],
      price: "€1,500",
      cta: "BOOK VIP",
      link: "/booking",
      badge: "PREMIUM"
    },
    {
      icon: RefreshCw,
      title: "REFRESH COURSE",
      subtitle: "3 Hours | Egypt & Vietnam",
      description: "Get back in the game after a break",
      features: [
        "Technique tune-up",
        "Confidence rebuild",
        "Specific skill improvement",
        "Equipment included",
        "Video analysis"
      ],
      price: "€270",
      cta: "BOOK REFRESH",
      link: "/booking",
      badge: null
    },
    {
      icon: Tent,
      title: "KITE CAMPS & SAFARIS",
      subtitle: "7-10 Days | Vietnam & Egypt",
      description: "All-inclusive adventures",
      features: [
        "Accommodation + meals included",
        "Daily kitesurfing lessons",
        "Equipment rental",
        "Excursions & community",
        "Airport transfers"
      ],
      price: "From €1,200",
      priceSubtext: "EGYPT SAFARI: Custom pricing (families welcome)",
      cta: "REQUEST DETAILS",
      link: "/contact",
      badge: null
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 uppercase">
            TRAINING PROGRAMS
          </h2>
          <p className="text-xl text-muted-foreground uppercase">
            CHOOSE YOUR PATH TO MASTERY
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div
                key={index}
                className="relative bg-card border border-border rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
              >
                {/* Badge */}
                {program.badge && (
                  <div className="absolute top-6 left-6 z-10">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1 text-xs font-bold">
                      {program.badge}
                    </Badge>
                  </div>
                )}

                <div className="p-8">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl font-display font-bold mb-2 uppercase">{program.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{program.subtitle}</p>
                  
                  {/* Description */}
                  <p className="text-foreground/80 mb-6">{program.description}</p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground/70">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price */}
                  <div className="mb-6">
                    <p className="text-3xl font-bold text-primary mb-1">{program.price}</p>
                    {program.priceSubtext && (
                      <p className="text-xs text-muted-foreground">{program.priceSubtext}</p>
                    )}
                  </div>

                  {/* CTA Button */}
                  <Link to={program.link}>
                    <Button 
                      className="w-full h-12 text-base font-semibold rounded-xl"
                      size="lg"
                    >
                      {program.cta}
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Info */}
        <div className="text-center space-y-4 animate-slide-up animation-delay-200">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="text-lg">🛡</span>
              <span>All programs include insurance coverage during lessons</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">🎓</span>
              <span>IKO Certification available upon request (additional fee)</span>
            </div>
          </div>
          
          <div className="pt-6">
            <p className="text-foreground/70 mb-4">Not sure which program suits you?</p>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="rounded-xl">
                Contact me to discuss
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingPrograms;
