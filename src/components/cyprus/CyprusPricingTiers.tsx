import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { trackContactClick } from '@/utils/metaTracking';
import { MessageCircle } from 'lucide-react';

const getWhatsAppHref = (message: string) => {
  return `https://wa.me/48884035225?text=${encodeURIComponent(message)}`;
};

const CyprusPricingTiers: React.FC = () => {
  const { t } = useLanguage();

  const tiers = [
    {
      key: 'beginner',
      title: t('cyprus.beginnerTitle'),
      price: t('cyprus.beginnerPrice'),
      duration: t('cyprus.beginnerDuration'),
      features: [
        t('cyprus.beginnerFeature1'),
        t('cyprus.beginnerFeature2'),
        t('cyprus.beginnerFeature3'),
        t('cyprus.beginnerFeature4'),
      ],
      btn: t('cyprus.beginnerBtn'),
      message: t('cyprus.pricingWhatsappBeginner'),
      channel: 'cyprus_pricing_beginner' as const,
    },
    {
      key: 'progression',
      title: t('cyprus.progressionTitle'),
      price: t('cyprus.progressionPrice'),
      duration: t('cyprus.progressionDuration'),
      features: [
        t('cyprus.progressionFeature1'),
        t('cyprus.progressionFeature2'),
        t('cyprus.progressionFeature3'),
        t('cyprus.progressionFeature4'),
      ],
      btn: t('cyprus.progressionBtn'),
      message: t('cyprus.pricingWhatsappProgression'),
      channel: 'cyprus_pricing_progression' as const,
    },
  ];

  return (
    <section id="cyprus-pricing" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-14">
          <p className="section-number mb-3">{t('cyprus.pricingSectionNum')}</p>
          <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 uppercase">
            {t('cyprus.pricingTitle')}
          </h2>
          <p className="text-muted-foreground text-sm md:text-base font-light max-w-2xl mx-auto leading-relaxed">
            {t('cyprus.pricingSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.key}
              className="group relative bg-card border border-border p-6 md:p-10 transition-all duration-300 hover:shadow-xl"
            >
              <div className="mb-6 md:mb-8">
                <h3 className="heading-display text-2xl md:text-3xl uppercase text-foreground mb-2">
                  {tier.title}
                </h3>
                <p className="text-muted-foreground text-sm font-light uppercase tracking-wider">
                  {tier.duration}
                </p>
              </div>

              <div className="mb-6 md:mb-8">
                <span className="heading-display text-4xl md:text-5xl lg:text-6xl text-primary">
                  {tier.price}
                </span>
              </div>

              <ul className="space-y-3 mb-8 md:mb-10">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm md:text-base font-light text-foreground">
                    <span className="text-primary mt-1.5 w-1 h-1 bg-current rounded-full flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={getWhatsAppHref(tier.message)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackContactClick('whatsapp', tier.channel)}
                className="btn-primary w-full gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                {tier.btn}
              </a>

              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CyprusPricingTiers;
