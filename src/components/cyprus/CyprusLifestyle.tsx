import React, { useEffect, useRef, useState } from 'react';
import { Flame, Brain, Users, Sparkles, Sun, Heart, TrendingUp, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const CyprusLifestyle: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());

  const stats = [
    { icon: Award, stat: '500+', label: t('cyprus.students'), iconColor: 'text-amber-500', bgColor: 'bg-amber-500/10' },
    { icon: Sun, stat: '340', label: t('cyprus.windDays'), iconColor: 'text-orange-500', bgColor: 'bg-orange-500/10' },
    { icon: Heart, stat: '70+', label: t('cyprus.returning'), iconColor: 'text-rose-500', bgColor: 'bg-rose-500/10' },
    { icon: TrendingUp, stat: '3', label: t('cyprus.firstRide'), iconColor: 'text-emerald-500', bgColor: 'bg-emerald-500/10' },
  ];

  const reasons = [
    { icon: Flame, num: '01', title: t('cyprus.reason1Title'), text: t('cyprus.reason1Text'), accent: 'from-orange-500 to-amber-500' },
    { icon: Brain, num: '02', title: t('cyprus.reason2Title'), text: t('cyprus.reason2Text'), accent: 'from-violet-500 to-purple-500' },
    { icon: Users, num: '03', title: t('cyprus.reason3Title'), text: t('cyprus.reason3Text'), accent: 'from-sky-500 to-blue-500' },
    { icon: Sparkles, num: '04', title: t('cyprus.reason4Title'), text: t('cyprus.reason4Text'), accent: 'from-emerald-500 to-teal-500' },
  ];

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const cards = sectionRef.current?.querySelectorAll('[data-reason]');
    if (!cards) return;

    cards.forEach((card, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set(prev).add(index));
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.2 }
      );
      observer.observe(card);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4" ref={sectionRef}>
        {/* Trust Bar - colorful */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto mb-14">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border border-border/50 p-4 text-center hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-10 h-10 rounded-full ${item.bgColor} flex items-center justify-center mx-auto mb-2`}>
                <item.icon className={`w-5 h-5 ${item.iconColor}`} />
              </div>
              <div className="text-2xl md:text-3xl font-display font-bold text-foreground">{item.stat}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-2 uppercase">
            {t('cyprus.lifestyleTitle')}
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            {t('cyprus.lifestyleSubtitle')}
          </p>
        </div>

        {/* Redesigned reasons - editorial stacked layout */}
        <div className="max-w-3xl mx-auto space-y-0 mb-10">
          {reasons.map((item, index) => (
            <div
              key={index}
              data-reason={index}
              className={`flex items-start gap-5 md:gap-8 py-7 border-b border-border/40 transition-all duration-700 group ${
                visibleCards.has(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <span className="text-xs font-mono text-muted-foreground/50 pt-1 flex-shrink-0 tracking-wider">
                {item.num}
              </span>
              <div className={`w-1 self-stretch rounded-full bg-gradient-to-b ${item.accent} flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity`} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <item.icon className="w-5 h-5 text-foreground/70 group-hover:text-foreground transition-colors" />
                  <h3 className="text-lg md:text-xl font-bold text-foreground">{item.title}</h3>
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Photo strip */}
        <div className="max-w-5xl mx-auto rounded-xl overflow-hidden">
          <img
            src="/lovable-uploads/cyprus-students-celebrating.jpg"
            alt="Happy students in Cyprus"
            loading="lazy"
            className="w-full h-48 md:h-64 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default CyprusLifestyle;
