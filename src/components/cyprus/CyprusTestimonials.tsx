import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Миша',
    flag: '🇪🇬',
    text: 'За 7 дней встал на доску и поехал самостоятельно. Методика Дениса — огонь!',
    initials: 'М',
    color: 'from-blue-500 to-cyan-400',
    stars: 5,
    location: 'Египет',
  },
  {
    name: 'Kate',
    flag: '🇧🇷',
    text: 'Всё на высшем уровне — обучение, организация, атмосфера. Выучила первый бэкролл!',
    initials: 'K',
    color: 'from-pink-500 to-rose-400',
    stars: 5,
    location: 'Бразилия',
  },
  {
    name: 'Илья',
    flag: '🇻🇳',
    text: 'Пошаговый подход: маленькие кусочки складываются в полную картину. Прогресс очень быстрый.',
    initials: 'И',
    color: 'from-emerald-500 to-teal-400',
    stars: 5,
    location: 'Вьетнам',
  },
  {
    name: 'Андрей',
    flag: '🇨🇾',
    text: 'Живу на Кипре 3 года, наконец нашёл свой спорт. Теперь катаюсь каждые выходные!',
    initials: 'А',
    color: 'from-amber-500 to-orange-400',
    stars: 5,
    location: 'Кипр',
  },
  {
    name: 'Лена',
    flag: '🇨🇾',
    text: 'Боялась воды, но Денис всё объяснил спокойно. На третий день уже каталась сама.',
    initials: 'Л',
    color: 'from-violet-500 to-purple-400',
    stars: 5,
    location: 'Кипр',
  },
  {
    name: 'Дима',
    flag: '🇨🇾',
    text: 'Лучшая инвестиция в отдых. Комьюнити тут потрясающее, сразу нашёл друзей.',
    initials: 'Д',
    color: 'from-sky-500 to-indigo-400',
    stars: 5,
    location: 'Кипр',
  },
];

const doubled = [...testimonials, ...testimonials];

const CyprusTestimonials: React.FC = () => {
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

        <div className="flex gap-5 animate-marquee w-max hover:[animation-play-state:paused]">
          {doubled.map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-72 bg-card rounded-2xl border border-border/50 p-5 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <Star key={si} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-sm text-foreground leading-relaxed mb-4">"{t.text}"</p>

              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-sm font-bold text-white">{t.initials}</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground flex items-center gap-1">
                    <span>{t.flag}</span> {t.location}
                  </div>
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
