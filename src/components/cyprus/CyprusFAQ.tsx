import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  { q: 'Я новичок — это для меня?', a: '90% наших студентов — полные новички. Достаточно уметь плавать.' },
  { q: 'Сколько нужно времени?', a: 'Большинство встают на доску на 2-3 день. За 6 часов освоите базу.' },
  { q: 'Нужно покупать оборудование?', a: 'Нет — всё включено: кайт, доска, трапеция, гидрокостюм, шлем.' },
  { q: 'Что такое BBTalking?', a: 'Рация в шлеме — инструктор даёт подсказки прямо в воде. Обучение в 2x быстрее.' },
  { q: 'Когда лучший сезон?', a: 'Кипр — круглогодичный спот. Лучший ветер: апрель–октябрь. Вода 17–28°C.' },
];

const CyprusFAQ: React.FC = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-8">
          Частые вопросы
        </h2>
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`faq-${index}`}
                className="bg-card rounded-lg border border-border/50 px-5 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left font-semibold text-sm hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm">
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
