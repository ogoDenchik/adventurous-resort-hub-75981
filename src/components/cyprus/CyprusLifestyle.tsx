import React, { useEffect, useRef, useState } from 'react';
import { Flame, Brain, Users, Sparkles, Sun, Heart, TrendingUp, Award } from 'lucide-react';

const stats = [
  { icon: Award, stat: '500+', label: 'студентов' },
  { icon: Sun, stat: '340', label: 'дней ветра/год' },
  { icon: Heart, stat: '70+', label: 'возвращаются' },
  { icon: TrendingUp, stat: '3 дня', label: 'до первого катания' },
];

const reasons = [
  {
    icon: Flame,
    title: 'Новый вызов',
    text: 'Спорт, который бросает вызов. Не нужна физическая подготовка — нужно желание.',
  },
  {
    icon: Brain,
    title: 'Полная перезагрузка',
    text: 'Ты думаешь только про ветер и кайт. Голова разгружается за минуты.',
  },
  {
    icon: Users,
    title: 'Комьюнити экспатов',
    text: 'Местное кайт-сообщество на Кипре. Новые друзья, совместные выезды, общая энергия.',
  },
  {
    icon: Sparkles,
    title: 'Доступен каждому',
    text: 'Независимо от возраста и подготовки. Мы ставим на воду людей от 12 до 60 лет.',
  },
];

const CyprusLifestyle: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const cards = sectionRef.current?.querySelectorAll('[data-reason]');
    if (!cards) return;

    cards.forEach((card, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set(prev).add(index));
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.2 }
      );
      observer.observe(card);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4" ref={sectionRef}>
        {/* Trust Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto mb-14">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border border-border/50 p-4 text-center hover:border-primary/30 transition-all duration-300"
            >
              <item.icon className="w-5 h-5 text-primary mx-auto mb-1.5" />
              <div className="text-2xl md:text-3xl font-display font-bold text-foreground">{item.stat}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-2">
            Почему тебе понравится кайтсёрфинг
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Приключение, которое меняет отношение к отдыху навсегда
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-10">
          {reasons.map((item, index) => (
            <div
              key={index}
              data-reason={index}
              className={`bg-card rounded-xl border border-border/50 p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-700 group ${
                visibleCards.has(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Photo strip */}
        <div className="max-w-5xl mx-auto rounded-xl overflow-hidden">
          <img
            src="/lovable-uploads/cyprus-students-celebrating.jpg"
            alt="Счастливые студенты на Кипре"
            loading="lazy"
            className="w-full h-48 md:h-64 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default CyprusLifestyle;
