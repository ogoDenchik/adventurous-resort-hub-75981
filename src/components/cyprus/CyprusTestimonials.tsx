import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    name: 'Миша',
    text: 'Денис поставил меня на доску за неделю, хотя я вообще думал что это нереально)) сейчас уже сам катаюсь, второй сезон подряд едем вместе',
    photo: '/lovable-uploads/community-hug.jpg',
    stars: 5,
    location: 'Египет',
  },
  {
    name: 'Kate',
    text: 'amazing experience! everything was perfectly organized, from training to accommodation. learned my first backroll 🤙',
    photo: '/lovable-uploads/brazil-lagoon-girl.jpg',
    stars: 5,
    location: 'Brazil',
  },
  {
    name: 'Илья',
    text: 'Мне нравится что Денис дает информацию по чуть чуть, не грузит сразу всем. Потом все кусочки складываются и ты такой — о, я еду!',
    photo: '/lovable-uploads/cyprus-student-success.jpg',
    stars: 5,
    location: 'Вьетнам',
  },
  {
    name: 'Андрей',
    text: 'Переехал на Кипр, искал чем заняться кроме работы. Друг затащил на кайт — теперь не могу остановится, катаюсь каждые выхи 😅',
    photo: '/lovable-uploads/cyprus-student-thumbsup.jpg',
    stars: 5,
    location: 'Кипр',
  },
  {
    name: 'Лена',
    text: 'я реально боялась, у меня был прям страх воды. Но Денис оч спокойно все обьяснил, без давления. на 3й день уже сама каталась, до сих пор не верю',
    photo: '/lovable-uploads/cyprus-happy-student-1.jpg',
    stars: 5,
    location: 'Кипр',
  },
  {
    name: 'Дима',
    text: 'Лучшее что я сделал за последний год. Комьюнити здесь крутое, сразу нашел ребят с кем кататься',
    photo: '/lovable-uploads/cyprus-student-waterstart-joy.jpg',
    stars: 4,
    location: 'Кипр',
  },
];

const doubled = [...testimonials, ...testimonials];

const CyprusTestimonials: React.FC = () => {
  const [paused, setPaused] = useState(false);

  return (
    <section className="py-12 overflow-hidden bg-muted/30">
      <div className="container mx-auto px-4 mb-8">
        <h3 className="text-center text-2xl md:text-3xl font-display font-bold mb-1">
          Отзывы наших учеников
        </h3>
        <p className="text-center text-sm text-muted-foreground">
          Реальные истории тех, кто уже прошёл обучение
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-muted/30 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-muted/30 to-transparent z-10 pointer-events-none" />

        <div
          className={cn(
            'flex gap-5 w-max',
            paused ? '' : 'animate-marquee'
          )}
          style={paused ? { animationPlayState: 'paused' } : undefined}
        >
          {doubled.map((t, i) => (
            <div
              key={i}
              onClick={() => setPaused(p => !p)}
              className="flex-shrink-0 w-72 bg-card rounded-2xl border border-border/50 p-5 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer select-none"
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <Star key={si} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-sm text-foreground leading-relaxed mb-4">"{t.text}"</p>

              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-sm font-bold text-white">{t.initials}</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CyprusTestimonials;
