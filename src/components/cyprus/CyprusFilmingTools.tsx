import React from 'react';
import { Camera, Aperture, Plane } from 'lucide-react';
import { RevealOnScroll, AnimatedLine, StaggeredList } from '@/hooks/use-invisible-animation';
import { useLanguage } from '@/contexts/LanguageContext';
import filmingToolsPhoto from '@/assets/filming-tools.jpg.asset.json';
import LazyYouTube from '@/components/LazyYouTube';

const CyprusFilmingTools: React.FC = () => {
  const { t } = useLanguage();

  const tools = [
    { icon: Camera, name: t('cyprus.filmingTool1') },
    { icon: Aperture, name: t('cyprus.filmingTool2') },
    { icon: Plane, name: t('cyprus.filmingTool3') },
  ];

  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container max-w-6xl">
        <RevealOnScroll>
          <p className="section-number mb-6">{t('cyprus.filmingSectionNum')}</p>
        </RevealOnScroll>

        <AnimatedLine className="mb-12" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <RevealOnScroll delay={100}>
            <div className="relative overflow-hidden rounded-2xl md:rounded-3xl aspect-[4/5] bg-muted">
              <img
                src={filmingToolsPhoto.url}
                alt="Sony Alpha 4, Tamron 150-500mm lens and DJI Mini 4 Pro drone"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </RevealOnScroll>

          {/* Content */}
          <div>
            <RevealOnScroll delay={150}>
              <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-4">
                {t('cyprus.filmingTitle')}
              </h2>
              <p className="text-muted-foreground text-sm md:text-base font-light max-w-md mb-8">
                {t('cyprus.filmingSubtitle')}
              </p>
            </RevealOnScroll>

            <StaggeredList staggerMs={120} baseDelay={200} className="space-y-4 mb-8">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="group flex items-center gap-4 py-4 border-b border-border/40 transition-all duration-300 hover:pl-2"
                >
                  <div className="w-12 h-12 flex items-center justify-center border border-border/60 text-primary transition-colors duration-300 group-hover:border-primary/30">
                    <tool.icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <p className="text-foreground text-base md:text-lg font-light tracking-wide">
                    {tool.name}
                  </p>
                </div>
              ))}
            </StaggeredList>

            <RevealOnScroll delay={450}>
              <div className="relative pl-5 border-l-2 border-primary">
                <p className="text-foreground text-base md:text-lg font-light leading-relaxed">
                  {t('cyprus.filmingNote')}
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CyprusFilmingTools;
