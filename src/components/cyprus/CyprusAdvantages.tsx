import React from 'react';
import { Radio, Award, GraduationCap, Shield, MapPin, Users } from 'lucide-react';

const advantages = [
  { icon: Radio, title: 'BBTalking 3.0', desc: 'Рация в шлеме — обучение 2x быстрее' },
  { icon: Award, title: 'Duotone', desc: 'Топовое оборудование последних моделей' },
  { icon: GraduationCap, title: 'Сертификат IKO', desc: 'Международное признание' },
  { icon: Shield, title: 'Страховка', desc: 'Полная страховка включена' },
  { icon: MapPin, title: '7+ спотов', desc: 'Лучший спот под ваш уровень' },
  { icon: Users, title: 'RU / EN / GR', desc: 'Обучение на вашем языке' },
];

const CyprusAdvantages: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-2">
            Наши преимущества
          </h2>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 max-w-4xl mx-auto">
          {advantages.map((adv, index) => (
            <div 
              key={index} 
              className="bg-card rounded-xl p-3 md:p-4 text-center border border-border/50 hover:border-primary/30 transition-all duration-300 group"
            >
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
