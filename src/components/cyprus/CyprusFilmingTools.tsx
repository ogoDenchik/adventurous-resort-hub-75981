import React from 'react';
import { Camera, Aperture, Plane, Play } from 'lucide-react';
import { RevealOnScroll, AnimatedLine, StaggeredList } from '@/hooks/use-invisible-animation';
import { useLanguage } from '@/contexts/LanguageContext';
import filmingToolsPhoto from '@/assets/filming-tools.jpg.asset.json';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from '@/components/ui/dialog';



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
          {/* Image + mini video */}
          <RevealOnScroll delay={100}>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl md:rounded-3xl aspect-[4/5] bg-muted">
                <img
                  src={filmingToolsPhoto.url}
                  alt="Sony Alpha 4, Tamron 150-500mm lens and DJI Mini 4 Pro drone"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* YouTube sample footage — compact icon trigger */}
              <div className="mt-4 md:mt-0 md:absolute md:-bottom-5 md:-right-5 md:z-10">
                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      type="button"
                      className="group flex items-center gap-3 mx-auto md:mx-0 transition-transform duration-300 hover:scale-105"
                      aria-label="Watch sample footage"
                    >
                      <span className="w-12 h-12 flex items-center justify-center rounded-full bg-background/90 backdrop-blur-sm border border-border/60 shadow-xl text-primary transition-all duration-300 group-hover:border-primary/40 group-hover:text-foreground">
                        <Play className="w-5 h-5 ml-0.5" fill="currentColor" strokeWidth={0} />
                      </span>
                      <p className="text-[10px] md:text-[11px] tracking-[0.25em] text-muted-foreground text-center font-light uppercase transition-colors duration-300 group-hover:text-foreground">
                        {t('cyprus.filmingSampleLabel')}
                      </p>
                    </button>
                  </DialogTrigger>
                  <DialogContent className="w-[calc(100%-2rem)] max-w-sm p-0 border-0 bg-black overflow-hidden rounded-2xl">
                    <DialogTitle className="sr-only">Sample footage shot with our filming tools</DialogTitle>
                    <div style={{ aspectRatio: '9/16' }}>
                      <iframe
                        src={`https://www.youtube.com/embed/QEMI2Xh-B9c`}
                        title="Sample footage shot with our filming tools"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
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
