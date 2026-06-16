import React from 'react';
import { Award, Clock, GraduationCap, Target } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const CyprusTrustBar: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Award, label: t('cyprus.students'), iconColor: 'text-amber-500', bgColor: 'bg-amber-500/10' },
    { icon: Clock, label: t('cyprus.windDays'), iconColor: 'text-sky-600', bgColor: 'bg-sky-500/10' },
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
              className="bg-card rounded-xl border border-border/50 p-5 text-center hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center gap-3"
            >
              <div className={`w-12 h-12 rounded-full ${item.bgColor} flex items-center justify-center`}>
                <item.icon className={`w-6 h-6 ${item.iconColor}`} />
              </div>
              <div className="text-sm md:text-base font-medium text-foreground leading-tight">
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
