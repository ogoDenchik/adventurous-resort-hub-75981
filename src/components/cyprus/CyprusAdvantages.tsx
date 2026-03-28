import React from 'react';
import { Radio, Award, GraduationCap, Shield, MapPin, Users } from 'lucide-react';

const advantages = [
  {
    icon: Radio,
    title: 'BBTalking 3.0 рация',
    description: 'Инструктор говорит с вами прямо в воде через шлем. Обучение в 2x быстрее.',
  },
  {
    icon: Award,
    title: 'Оборудование Duotone',
    description: 'Топовые кайты и доски последних моделей. Безопасность и комфорт.',
  },
  {
    icon: GraduationCap,
    title: 'Сертификат IKO',
    description: 'Международный сертификат, признанный по всему миру.',
  },
  {
    icon: Shield,
    title: 'Страховка включена',
    description: 'Полная страховка на время обучения. Ваша безопасность — наш приоритет.',
  },
  {
    icon: MapPin,
    title: '7+ спотов на выбор',
    description: 'Выбираем лучший спот в зависимости от ветра и вашего уровня.',
  },
  {
    icon: Users,
    title: 'RU / EN / GR',
    description: 'Обучение на русском, английском или греческом — как вам удобнее.',
  },
];

const CyprusAdvantages: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Наши преимущества
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Почему 500+ студентов выбрали именно нас
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {advantages.map((adv, index) => (
            <div 
              key={index} 
              className="bg-card rounded-xl p-5 md:p-6 text-center border border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <adv.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold mb-2 text-sm md:text-base">{adv.title}</h3>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{adv.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CyprusAdvantages;
