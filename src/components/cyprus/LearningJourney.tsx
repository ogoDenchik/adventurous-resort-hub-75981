import React from 'react';
import { Wind, Waves, Zap, Trophy } from 'lucide-react';

const steps = [
  {
    day: 'День 1',
    icon: Wind,
    title: 'Знакомство с кайтом',
    description: 'Теория безопасности, управление кайтом на берегу, первые запуски в воде. Вы поймёте, как работает ветер.',
    details: ['2-3 часа практики', 'Работа 1-на-1 с инструктором', 'Всё оборудование включено'],
  },
  {
    day: 'День 2',
    icon: Waves,
    title: 'Bodydrag & контроль',
    description: 'Плавание с кайтом, контроль тяги, развороты. Вы научитесь чувствовать силу кайта в воде.',
    details: ['Bodydrag по ветру и против', 'Самоспасение', 'Постановка доски'],
  },
  {
    day: 'День 3',
    icon: Zap,
    title: 'Waterstart!',
    description: 'Встаёте на доску и едете! Первые метры самостоятельного катания — момент, который вы запомните навсегда.',
    details: ['Waterstart техника', 'Первые галсы', 'Связь с инструктором через рацию'],
  },
  {
    day: 'День 4+',
    icon: Trophy,
    title: 'Прогрессия',
    description: 'Развороты, смена галса, катание против ветра. Вы уже кайтер — пора оттачивать стиль!',
    details: ['Самостоятельное катание', 'Работа над ошибками', 'Переход на следующий уровень'],
  },
];

const LearningJourney: React.FC = () => {
  return (
    <section id="learning-journey" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            От нуля до кайтера за 3 дня
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Наша проверенная методика обучения — 500+ студентов прошли этот путь
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative flex gap-6 md:gap-10 pb-12 last:pb-0 group">
              {/* Timeline line */}
              {index < steps.length - 1 && (
                <div className="absolute left-[27px] md:left-[31px] top-[60px] w-0.5 h-[calc(100%-40px)] bg-gradient-to-b from-primary/50 to-primary/10" />
              )}
              
              {/* Icon */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-primary/10 border-2 border-primary/30 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pb-2">
                <div className="text-sm font-bold text-primary mb-1">{step.day}</div>
                <h3 className="text-xl md:text-2xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground mb-3 leading-relaxed">{step.description}</p>
                <div className="flex flex-wrap gap-2">
                  {step.details.map((detail, i) => (
                    <span 
                      key={i}
                      className="text-xs px-3 py-1.5 rounded-full bg-muted text-muted-foreground font-medium"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningJourney;
