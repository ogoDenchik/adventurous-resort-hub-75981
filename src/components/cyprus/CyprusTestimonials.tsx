import React from 'react';

const testimonials = [
  { name: 'Миша', flag: '🇪🇬', text: 'За 7 дней встал на доску и поехал самостоятельно. Методика Дениса — огонь!' },
  { name: 'Kate', flag: '🇧🇷', text: 'Всё на высшем уровне — обучение, организация, атмосфера. Выучила первый бэкролл!' },
  { name: 'Илья', flag: '🇻🇳', text: 'Пошаговый подход: маленькие кусочки складываются в полную картину. Прогресс очень быстрый.' },
  { name: 'Андрей', flag: '🇨🇾', text: 'Живу на Кипре 3 года, наконец нашёл свой спорт. Теперь катаюсь каждые выходные!' },
  { name: 'Лена', flag: '🇨🇾', text: 'Боялась воды, но Денис всё объяснил спокойно. На третий день уже каталась сама.' },
  { name: 'Дима', flag: '🇨🇾', text: 'Лучшая инвестиция в отдых. Комьюнити тут потрясающее, сразу нашёл друзей.' },
];

// Duplicate for seamless loop
const doubled = [...testimonials, ...testimonials];

const CyprusTestimonials: React.FC = () => {
  return (
    <section className="py-10 overflow-hidden bg-muted/30">
      <div className="container mx-auto px-4 mb-6">
        <h3 className="text-center text-lg font-semibold text-muted-foreground">
          💬 Что говорят наши ученики
        </h3>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-muted/30 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-muted/30 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-4 animate-[scroll-left_30s_linear_infinite] w-max">
          {doubled.map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-64 bg-card rounded-xl border border-border/50 p-4 shadow-sm"
            >
              <p className="text-sm text-foreground leading-relaxed mb-3">"{t.text}"</p>
              <div className="flex items-center gap-2">
                <span className="text-base">{t.flag}</span>
                <span className="text-xs font-semibold text-muted-foreground">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CyprusTestimonials;
