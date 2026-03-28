import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    q: 'Я никогда не занимался водными видами спорта. Это для меня?',
    a: 'Абсолютно! 90% наших студентов — полные новички. Наша методика разработана специально для людей без опыта. Вам не нужна особая физическая подготовка — достаточно уметь плавать.',
  },
  {
    q: 'Сколько времени нужно, чтобы научиться кататься?',
    a: 'Большинство студентов встают на доску на 2-3 день обучения. За 5-6 часов практики вы освоите базовые навыки и сможете кататься самостоятельно.',
  },
  {
    q: 'Какие споты на Кипре вы используете?',
    a: 'Мы работаем на 7+ спотах по всему Кипру, выбирая лучший в зависимости от ветра и уровня студента. Основные споты: Lady\'s Mile (Лимассол), Softades, Pervolia.',
  },
  {
    q: 'Нужно ли мне покупать оборудование?',
    a: 'Нет! Всё оборудование включено в стоимость урока — кайт, доска, трапеция, гидрокостюм, шлем и жилет. Мы используем топовое оборудование Duotone последних моделей.',
  },
  {
    q: 'На каких языках проводятся уроки?',
    a: 'Наши инструкторы говорят на русском, английском и греческом. Вы будете чувствовать себя комфортно вне зависимости от языка.',
  },
  {
    q: 'Что такое BBTalking и зачем оно нужно?',
    a: 'BBTalking 3.0 — это система связи, встроенная в шлем. Инструктор даёт вам подсказки в реальном времени прямо в воде. Это ускоряет обучение в 2 раза по сравнению с обычными школами.',
  },
  {
    q: 'Когда лучший сезон для кайтсёрфинга на Кипре?',
    a: 'Кипр — это круглогодичный спот! Лучший ветер с апреля по октябрь, но кататься можно 340 дней в году. Температура воды от 17°C зимой до 28°C летом.',
  },
];

const CyprusFAQ: React.FC = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Частые вопросы
          </h2>
          <p className="text-lg text-muted-foreground">
            Всё, что вы хотели знать о кайтсёрфинге на Кипре
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`faq-${index}`}
                className="bg-card rounded-lg border border-border/50 px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default CyprusFAQ;
