import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { RevealOnScroll, AnimatedLine } from '@/hooks/use-invisible-animation';
import { useLanguage } from '@/contexts/LanguageContext';
import p1 from '@/assets/kite-sessions/photo_2026-06-14_10-54-19.jpg.asset.json';
import p2 from '@/assets/kite-sessions/photo_2026-06-04_01-41-22.jpg.asset.json';
import p3 from '@/assets/kite-sessions/photo_2026-06-14_23-43-01.jpg.asset.json';
import p4 from '@/assets/kite-sessions/photo_2026-06-04_01-38-44.jpg.asset.json';
import p5 from '@/assets/kite-sessions/photo_2026-06-01_00-29-00.jpg.asset.json';
import p6 from '@/assets/kite-sessions/photo_2026-06-14_10-58-15.jpg.asset.json';
import p7 from '@/assets/kite-sessions/photo_2026-06-04_01-41-23.jpg.asset.json';
import p8 from '@/assets/kite-sessions/photo_2026-06-04_01-41-11.jpg.asset.json';
import p9 from '@/assets/kite-sessions/photo_2026-06-01_00-28-57.jpg.asset.json';
import p10 from '@/assets/kite-sessions/photo_2026-05-28_23-25-47.jpg.asset.json';

const photos = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10].map((a) => a.url);

const CyprusSessionPhotos: React.FC = () => {
  const { t } = useLanguage();
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const prev = useCallback(
    () => setOpen((i) => (i === null ? i : (i - 1 + photos.length) % photos.length)),
    []
  );
  const next = useCallback(
    () => setOpen((i) => (i === null ? i : (i + 1) % photos.length)),
    []
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, close, prev, next]);

  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container max-w-6xl">
        <RevealOnScroll>
          <p className="section-number mb-6">{t('cyprus.sessionPhotosSectionNum')}</p>
        </RevealOnScroll>

        <AnimatedLine className="mb-12" />

        <RevealOnScroll delay={100} className="mb-10 md:mb-14 max-w-3xl">
          <h2 className="heading-display text-4xl md:text-6xl text-foreground leading-tight mb-4">
            {t('cyprus.sessionPhotosTitle')}
          </h2>
          <p className="text-muted-foreground text-sm md:text-base font-light">
            {t('cyprus.sessionPhotosSubtitle')}
          </p>
        </RevealOnScroll>

        {/* Masonry-like CSS columns */}
        <RevealOnScroll delay={150}>
          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 [&>*]:mb-3 md:[&>*]:mb-4">
            {photos.map((src, i) => (
              <button
                key={src}
                onClick={() => setOpen(i)}
                className="group block w-full overflow-hidden bg-muted relative break-inside-avoid"
                aria-label={`Open photo ${i + 1}`}
              >
                <img
                  src={src}
                  alt={`Kite session ${i + 1} — OGO Kite Academy Cyprus`}
                  loading="lazy"
                  className="w-full h-auto object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-[1000ms] ease-out"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </button>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={200} className="mt-10 md:mt-14">
          <p className="text-xs tracking-[0.25em] text-muted-foreground font-light uppercase">
            {t('cyprus.sessionPhotosCaption')}
          </p>
        </RevealOnScroll>
      </div>

      {/* Lightbox */}
      {open !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={close}
        >
          <button
            onClick={(e) => { e.stopPropagation(); close(); }}
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white/80 hover:text-white p-2"
            aria-label="Close"
          >
            <X className="w-6 h-6" strokeWidth={1.5} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-2 md:left-6 text-white/80 hover:text-white p-2"
            aria-label="Previous"
          >
            <ChevronLeft className="w-8 h-8" strokeWidth={1.5} />
          </button>
          <img
            src={photos[open]}
            alt={`Kite session ${open + 1}`}
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-2 md:right-6 text-white/80 hover:text-white p-2"
            aria-label="Next"
          >
            <ChevronRight className="w-8 h-8" strokeWidth={1.5} />
          </button>
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-[10px] tracking-[0.3em] font-light">
            {String(open + 1).padStart(2, '0')} / {String(photos.length).padStart(2, '0')}
          </span>
        </div>
      )}
    </section>
  );
};

export default CyprusSessionPhotos;
