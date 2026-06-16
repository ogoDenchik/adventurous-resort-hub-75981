import React from 'react';
import { Award, Clock, GraduationCap, Target } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const CyprusTrustBar: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Award, stat: '500+', label: t('cyprus.students'), iconColor: 'text-amber-500', bgColor: 'bg-amber-500/10' },
    { icon: Clock, stat: '12-20:00', label: t('cyprus.windDays'), iconColor: 'text-sky-600', bgColor: 'bg-sky-500/10' },
    { icon: Target, label: t('cyprus.returning'), iconColor: 'text-violet-500', bgColor: 'bg-violet-500/10' },
    { icon: GraduationCap, label: t('cyprus.firstRide'), iconColor: 'text-teal-500', bgColor: 'bg-teal-500/10' },
  ];

  return (
    <section className="py-10 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto">
          {stats.map((item, index) => (
            <div
              key={index}
              className={`bg-card rounded-xl border border-border/50 text-center hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center gap-3 ${item.stat ? 'p-4' : 'p-5'}`}
            >
              <div className={`w-10 h-10 rounded-full ${item.bgColor} flex items-center justify-center ${!item.stat ? 'w-12 h-12' : ''}`}>
                <item.icon className={`w-5 h-5 ${item.iconColor} ${!item.stat ? 'w-6 h-6' : ''}`} />
              </div>
              {item.stat && (
                <div className="text-2xl md:text-3xl font-display font-bold text-foreground">{item.stat}</div>
              )}
              <div className={`text-muted-foreground leading-tight ${item.stat ? 'text-xs mt-0.5' : 'text-sm md:text-base font-medium text-foreground'}`}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CyprusTrustBar;
