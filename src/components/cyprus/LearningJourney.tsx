import React from 'react';
import { Wind, Waves, Zap, Trophy } from 'lucide-react';

const steps = [
  {
    day: 'День 1',
    icon: Wind,
    title: 'Знакомство с кайтом',
    tags: ['Теория', '1-на-1', 'Оборудование включено'],
    photo: '/lovable-uploads/cyprus-happy-student-1.jpg',
  },
  {
    day: 'День 2',
    icon: Waves,
    title: 'Bodydrag & контроль',
    tags: ['Bodydrag', 'Самоспасение', 'Постановка доски'],
    photo: '/lovable-uploads/cyprus-student-thumbsup.jpg',
  },
  {
    day: 'День 3',
    icon: Zap,
    title: 'Waterstart! 🎉',
    tags: ['Waterstart', 'Первые галсы', 'BBTalking рация'],
    photo: '/lovable-uploads/cyprus-student-waterstart-joy.jpg',
  },
  {
    day: 'День 4+',
    icon: Trophy,
    title: 'Прогрессия',
    tags: ['Самостоятельно', 'Развороты', 'Следующий уровень'],
    photo: '/lovable-uploads/cyprus-students-celebrating.jpg',
  },
];

const LearningJourney: React.FC = () => {
  return (
    <section id="learning-journey" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-2">
            От нуля до кайтера за 3 дня
          </h2>
          <p className="text-muted-foreground">500+ студентов прошли этот путь</p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-4 md:gap-6">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative bg-card rounded-xl border border-border/50 overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  src={step.photo} 
                  alt={step.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                    {step.day}
                  </span>
                </div>
              </div>
              <div className="p-4 md:p-5">
                <div className="flex items-center gap-2 mb-3">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningJourney;
