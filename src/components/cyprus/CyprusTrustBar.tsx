import React from 'react';
import { Award, Clock, Heart, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const CyprusTrustBar: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Award, stat: '500+', label: t('cyprus.students'), iconColor: 'text-amber-500', bgColor: 'bg-amber-500/10' },
    { icon: Clock, stat: '12 — 20:00', label: t('cyprus.windDays'), iconColor: 'text-sky-600', bgColor: 'bg-sky-500/10' },
    { icon: Heart, stat: '70+', label: t('cyprus.returning'), iconColor: 'text-rose-500', bgColor: 'bg-rose-500/10' },
    { icon: TrendingUp, stat: '8', label: t('cyprus.firstRide'), iconColor: 'text-emerald-500', bgColor: 'bg-emerald-500/10' },
  ];

  return (
    <section className="py-10 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto">
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
      </div>
    </section>
  );
};

export default CyprusTrustBar;
