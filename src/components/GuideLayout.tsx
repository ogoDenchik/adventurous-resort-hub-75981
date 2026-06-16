import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Seo from '@/components/Seo';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export interface GuideSection {
  heading: string;
  body: React.ReactNode;
}

export interface GuideFAQ {
  q: string;
  a: string;
}

interface GuideLayoutProps {
  title: string;
  description: string;
  path: string;
  heroImage: string;
  heroAlt: string;
  eyebrow: string;
  h1: string;
  intro: string;
  sections: GuideSection[];
  faqs: GuideFAQ[];
  ctaTitle: string;
  ctaText: string;
  ctaPrimary: { label: string; to: string };
  datePublished?: string;
}

const GuideLayout: React.FC<GuideLayoutProps> = ({
  title, description, path, heroImage, heroAlt, eyebrow, h1, intro,
  sections, faqs, ctaTitle, ctaText, ctaPrimary,
  datePublished = '2026-06-16',
}) => {
  const url = `https://ogokiteacademy.com${path}`;
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: h1,
      description,
      image: `https://ogokiteacademy.com${heroImage}`,
      author: { '@type': 'Organization', name: 'OGO Kite Academy' },
      publisher: {
        '@type': 'Organization',
        name: 'OGO Kite Academy',
        logo: { '@type': 'ImageObject', url: 'https://ogokiteacademy.com/favicon.ico' },
      },
      datePublished,
      mainEntityOfPage: url,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ogokiteacademy.com/' },
        { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://ogokiteacademy.com/guides' },
        { '@type': 'ListItem', position: 3, name: h1, item: url },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Seo title={title} description={description} path={path} image={`https://ogokiteacademy.com${heroImage}`} jsonLd={jsonLd} />
      <Navbar />
      <ScrollToTop />

      <main>
        <section className="relative min-h-[60vh] flex items-end pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0">
            <img src={heroImage} alt={heroAlt} className="w-full h-full object-cover" loading="eager" fetchPriority="high" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/70" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-white">
            <p className="uppercase tracking-[0.3em] text-xs md:text-sm mb-4 opacity-90">{eyebrow}</p>
            <h1 className="font-display text-4xl md:text-6xl uppercase leading-tight max-w-4xl">{h1}</h1>
          </div>
        </section>

        <article className="py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed mb-12">{intro}</p>

            {sections.map((s, i) => (
              <section key={i} className="mb-12">
                <h2 className="font-display text-2xl md:text-4xl uppercase mb-5">{s.heading}</h2>
                <div className="text-muted-foreground font-light leading-relaxed space-y-4">{s.body}</div>
              </section>
            ))}
          </div>
        </article>

        {faqs.length > 0 && (
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4 max-w-3xl">
              <h2 className="font-display text-3xl md:text-5xl uppercase text-center mb-10">FAQ</h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((f, i) => (
                  <AccordionItem key={i} value={`q-${i}`}>
                    <AccordionTrigger className="text-left font-display uppercase text-base md:text-lg">{f.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground font-light leading-relaxed">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
        )}

        <section className="py-20 bg-foreground text-background">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="font-display text-3xl md:text-5xl uppercase mb-6">{ctaTitle}</h2>
            <p className="opacity-80 mb-10 font-light text-lg">{ctaText}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="text-base">
                <Link to={ctaPrimary.to}>{ctaPrimary.label}</Link>
              </Button>
              <Button asChild size="lg" className="text-base">
                <a href="https://wa.me/48884035225?text=Hi%20OGO%2C%20I%20have%20a%20question" target="_blank" rel="noopener noreferrer">WhatsApp us</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GuideLayout;
