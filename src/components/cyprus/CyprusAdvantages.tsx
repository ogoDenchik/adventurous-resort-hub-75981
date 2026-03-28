import React from 'react';
import { Radio, Award, GraduationCap, Shield, MapPin, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const CyprusAdvantages: React.FC = () => {
  const { t } = useLanguage();
  const advantages = [
    { icon: Radio, title: t('cyprus.advBBTalking'), desc: t('cyprus.advBBTalkingDesc') },
    { icon: Award, title: t('cyprus.advDuotone'), desc: t('cyprus.advDuotoneDesc') },
    { icon: GraduationCap, title: t('cyprus.advIKO'), desc: t('cyprus.advIKODesc') },
    { icon: Shield, title: t('cyprus.advInsurance'), desc: t('cyprus.advInsuranceDesc') },
    { icon: MapPin, title: t('cyprus.advSpots'), desc: t('cyprus.advSpotsDesc') },
    { icon: Users, title: t('cyprus.advLang'), desc: t('cyprus.advLangDesc') },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-2">{t('cyprus.advantagesTitle')}</h2>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 max-w-4xl mx-auto">
          {advantages.map((adv, index) => (
            <div key={index} className="bg-card rounded-xl p-3 md:p-4 text-center border border-border/50 hover:border-primary/30 transition-all duration-300 group">
              <div className="w-10 h-10 mx-auto mb-2 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <adv.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-xs mb-0.5">{adv.title}</h3>
              <p className="text-muted-foreground text-[10px] md:text-xs leading-tight">{adv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CyprusAdvantages;
