import React from 'react';
import { Radio, Package, User, Wind, MessageCircle } from 'lucide-react';
import { RevealOnScroll, AnimatedLine, StaggeredList } from '@/hooks/use-invisible-animation';
import { trackContactClick } from '@/utils/metaTracking';

const pillars = [
  { icon: Package, title: 'DUOTONE GEAR', desc: 'Kites, boards, harness, helmet. All included.' },
  { icon: Radio,   title: 'BB TALKIN’ RADIO', desc: 'Live coaching in your ear — on land or in the water.' },
  { icon: User,    title: '1-ON-1 FORMAT', desc: 'Always private. Never a group.' },
  { icon: Wind,    title: 'SESSIONS, NOT HOURS', desc: '~1.5h of pure active training per session.' },
];

const roadmap = [
  { num: '01', title: 'KITE PILOTING' },
  { num: '02', title: 'LAND DRILLS' },
  { num: '03', title: 'BODY DRAG' },
  { num: '04', title: 'WATER START' },
  { num: '05', title: 'INDEPENDENT RIDING' },
  { num: '06', title: 'TRICKS & ROTATIONS' },
];

const contactHref =
  'https://wa.me/48884035225?text=Hey%20OGO%20Academy%2C%20I%E2%80%99d%20like%20to%20ask%20a%20question%20about%20kitesurfing%20in%20Cyprus!';

const CyprusAboutLessons: React.FC = () => {
  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container max-w-5xl">
        {/* Header */}
        <RevealOnScroll>
          <p className="section-number mb-6">04 — OUR LESSONS</p>
        </RevealOnScroll>

        <AnimatedLine className="mb-12" />

        <RevealOnScroll delay={100} className="mb-16 md:mb-20">
          <h2 className="heading-display text-4xl md:text-6xl text-foreground leading-tight">
            BUILT AROUND YOU.<br />
            <span className="italic font-light text-muted-foreground">Not the clock.</span>
          </h2>
        </RevealOnScroll>

        {/* 4 pillars */}
        <StaggeredList
          staggerMs={120}
          baseDelay={150}
          className="grid grid-cols-2 md:grid-cols-4 gap-0 border-y border-border/40 mb-24"
        >
          {pillars.map((p) => (
            <div
              key={p.title}
              className="group relative py-8 md:py-10 px-4 md:px-6 border-r last:border-r-0 [&:nth-child(3)]:border-r-0 md:[&:nth-child(3)]:border-r [&:nth-child(-n+2)]:border-b md:[&:nth-child(-n+2)]:border-b-0 border-border/40 transition-colors duration-500 hover:bg-muted/30"
            >
              <p.icon
                className="w-5 h-5 md:w-6 md:h-6 text-primary mb-5 transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-[-4deg]"
                strokeWidth={1.25}
              />
              <h4 className="font-medium text-foreground uppercase text-xs md:text-sm tracking-widest mb-2 leading-tight">
                {p.title}
              </h4>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed font-light">
                {p.desc}
              </p>
              <div className="absolute left-0 bottom-0 h-px bg-primary w-0 group-hover:w-full transition-all duration-700" />
            </div>
          ))}
        </StaggeredList>

        {/* Method — big pull quote */}
        <RevealOnScroll delay={100}>
          <div className="relative py-14 md:py-20 mb-24 border-y border-border/40">
            <p className="section-number mb-6">THE METHOD</p>
            <p className="heading-display text-3xl md:text-5xl text-foreground leading-tight max-w-3xl">
              The <span className="italic">Denis Evdorenko</span> Method —
              <span className="text-muted-foreground"> proven fundamentals, </span>
              sharpened with the small details that
              <span className="border-b-2 border-primary"> actually make you ride</span>.
            </p>
            <span className="absolute -top-3 -left-2 md:-left-6 text-7xl md:text-9xl text-primary/10 font-serif leading-none select-none pointer-events-none">
              “
            </span>
          </div>
        </RevealOnScroll>

        {/* Roadmap — horizontal animated track */}
        <div className="mb-16">
          <RevealOnScroll className="mb-10 flex items-end justify-between gap-6 flex-wrap">
            <div>
              <p className="section-number mb-4">PROGRESSION</p>
              <h3 className="heading-display text-3xl md:text-4xl text-foreground leading-tight">
                FIRST TOUCH<br />→ FIRST KITELOOP.
              </h3>
            </div>
            <p className="text-muted-foreground text-sm font-light max-w-xs">
              A clear path from total beginner to advanced rider — at your own pace.
            </p>
          </RevealOnScroll>

          {/* Animated progress line */}
          <RevealOnScroll delay={100} className="relative">
            <div className="absolute left-0 right-0 top-[18px] h-px bg-border/60" />
            <div className="absolute left-0 top-[18px] h-px bg-primary animate-[progress_2.5s_ease-out_forwards] origin-left" style={{ width: '100%', transform: 'scaleX(0)', animationFillMode: 'forwards' }} />
            <StaggeredList
              staggerMs={120}
              baseDelay={250}
              className="grid grid-cols-3 md:grid-cols-6 gap-x-2 gap-y-8 relative"
            >
              {roadmap.map((s) => (
                <div key={s.num} className="flex flex-col items-center text-center group">
                  <div className="relative z-10 mb-4">
                    <div className="w-9 h-9 rounded-full bg-background border border-border flex items-center justify-center transition-all duration-300 group-hover:border-primary group-hover:scale-110">
                      <span className="text-[10px] tracking-widest text-muted-foreground group-hover:text-primary transition-colors">
                        {s.num}
                      </span>
                    </div>
                  </div>
                  <p className="font-medium text-foreground uppercase text-[10px] md:text-xs tracking-widest leading-tight">
                    {s.title}
                  </p>
                </div>
              ))}
            </StaggeredList>
          </RevealOnScroll>

          <RevealOnScroll delay={300} className="mt-14 max-w-xl">
            <p className="text-foreground text-base md:text-lg leading-relaxed font-light italic">
              “Going independent isn’t the finish line — it’s where the fun starts.”
            </p>
          </RevealOnScroll>
        </div>

        {/* CTA */}
        <RevealOnScroll delay={150} className="flex justify-center">
          <a
            href={contactHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackContactClick('whatsapp', 'cyprus_about_lessons_contact_us')}
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm tracking-widest uppercase font-medium hover:opacity-90 transition-opacity duration-300"
          >
            <MessageCircle className="w-5 h-5" strokeWidth={1.5} />
            Contact us
          </a>
        </RevealOnScroll>
      </div>

      <style>{`
        @keyframes progress {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
      `}</style>
    </section>
  );
};

export default CyprusAboutLessons;
