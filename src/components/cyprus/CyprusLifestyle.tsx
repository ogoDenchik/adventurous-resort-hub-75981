import React from 'react';
import { Laptop, Sun, Heart, TrendingUp } from 'lucide-react';

const reasons = [
  {
    icon: Laptop,
    title: 'Перезагрузка после офиса',
    stat: '87%',
    statLabel: 'студентов — IT и бизнес',
    description: 'Кайтсёрфинг — идеальный антидот для сидячей работы. Ветер, солнце и адреналин перезагрузят вас за 1 день.',
  },
  {
    icon: Sun,
    title: '340 солнечных дней',
    stat: '340',
    statLabel: 'дней солнца в году',
    description: 'Кипр — один из самых солнечных мест в Европе. Сезон катания длится почти весь год.',
  },
  {
    icon: Heart,
    title: 'Новый lifestyle',
    stat: '70+',
    statLabel: 'возвращаются снова',
    description: 'Это не просто спорт — это сообщество, путешествия и новый круг общения по всему миру.',
  },
  {
    icon: TrendingUp,
    title: 'Быстрый прогресс',
    stat: '3',
    statLabel: 'дня до первого катания',
    description: 'Наша методика с BBTalking рацией позволяет научиться кататься быстрее, чем в любой другой школе.',
  },
];

const CyprusLifestyle: React.FC = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Почему айтишники выбирают кайт
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ваш следующий отпуск может стать началом нового увлечения на всю жизнь
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="bg-card rounded-xl p-6 md:p-8 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-1">{reason.title}</h3>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-3xl font-display font-bold text-primary">{reason.stat}</span>
                    <span className="text-sm text-muted-foreground">{reason.statLabel}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CyprusLifestyle;
