import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useLanguage } from '@/contexts/LanguageContext';

const CyprusFAQ: React.FC = () => {
  const { t } = useLanguage();
  const faqs = [
    { q: t('cyprus.faq1q'), a: t('cyprus.faq1a') },
    { q: t('cyprus.faq2q'), a: t('cyprus.faq2a') },
    { q: t('cyprus.faq3q'), a: t('cyprus.faq3a') },
    { q: t('cyprus.faq4q'), a: t('cyprus.faq4a') },
    { q: t('cyprus.faq5q'), a: t('cyprus.faq5a') },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-8">{t('cyprus.faqTitle')}</h2>
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="bg-card rounded-lg border border-border/50 px-5 data-[state=open]:border-primary/30">
                <AccordionTrigger className="text-left font-semibold text-sm hover:no-underline">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default CyprusFAQ;
