import React from 'react';
import { Wind, Waves, Zap, Trophy } from 'lucide-react';

const steps = [
  {
    day: 'Занятие 1',
    icon: Wind,
    title: 'Знакомство с кайтом',
    tags: ['Теория', '1-на-1', 'Оборудование включено'],
    photo: '/lovable-uploads/kite-lesson-1.jpg',
  },
  {
    day: 'Занятие 2',
    icon: Waves,
    title: 'Bodydrag & контроль',
    tags: ['Bodydrag', 'Самоспасение', 'Постановка доски'],
    photo: '/lovable-uploads/kite-lesson-2.jpg',
  },
  {
    day: 'Занятие 3',
    icon: Zap,
    title: 'Waterstart! 🎉',
    tags: ['Waterstart', 'Первые галсы', 'BBTalking рация'],
    photo: '/lovable-uploads/kite-lesson-3.jpg',
  },
  {
    day: 'Занятие 4+',
    icon: Trophy,
    title: 'Прогрессия',
    tags: ['Самостоятельно', 'Развороты', 'Следующий уровень'],
    photo: '/lovable-uploads/kite-lesson-4.jpg',
  },
];

const LearningJourney: React.FC = () => {
  return (
    <section id="learning-journey" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-2">
            План обучения кайтсёрфера
          </h2>
          <p className="text-muted-foreground">300+ студентов прошли этот путь</p>
        </div>

        {/* Roadmap */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical connecting line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {steps.map((step, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative flex items-start gap-4 md:gap-0 mb-12 last:mb-0 ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot on the line */}
                <div className="absolute left-6 md:left-1/2 top-4 z-10 -translate-x-1/2 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />

                {/* Spacer for mobile left offset */}
                <div className="w-12 shrink-0 md:hidden" />

                {/* Card */}
                <div className={`flex-1 md:w-[calc(50%-2rem)] ${isEven ? 'md:pr-10' : 'md:pl-10'}`}>
                  <div className="bg-card rounded-xl border border-border/50 overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                    <div className="aspect-[16/9] overflow-hidden relative">
                      <img
                        src={step.photo}
                        alt={step.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                          {step.day}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <step.icon className="w-5 h-5 text-primary" />
                        <h3 className="text-lg font-bold">{step.title}</h3>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {step.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Empty spacer for the other side on desktop */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LearningJourney;
