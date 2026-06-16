import React from 'react';
import { Radio, Package, User, ArrowRight } from 'lucide-react';
import { RevealOnScroll, AnimatedLine, StaggeredList } from '@/hooks/use-invisible-animation';
import { trackContactClick } from '@/utils/metaTracking';

const inclusions = [
  {
    icon: Package,
    title: 'FULL DUOTONE KIT',
    desc: 'Kites, boards, harness, helmet, wetsuit and safety gear. The latest models, fresh every season. Just bring yourself.',
  },
  {
    icon: Radio,
    title: 'BB TALKIN’ RADIO',
    desc: 'Real-time voice from your coach — on the beach or out on the water. Guidance, corrections and answers the moment you need them.',
  },
  {
    icon: User,
    title: 'STRICTLY 1-ON-1',
    desc: 'Always personal. Never a group. Every session is built around your level, your goals and the wind of the day.',
  },
];

const roadmap = [
  { num: '01', title: 'KITE PILOTING', desc: 'Reading wind, the wind window, controlling the kite with confidence.' },
  { num: '02', title: 'LAND DRILLS', desc: 'Swings sitting and standing. Building the muscle memory before the water.' },
  { num: '03', title: 'WATER SWINGS & BODY DRAG', desc: 'Moving with the kite in the water. Learning to recover your board.' },
  { num: '04', title: 'POSITIONING & WATER STARTS', desc: 'Standing up. Riding your first meters. The breakthrough moment.' },
  { num: '05', title: 'INDEPENDENT RIDING', desc: 'Upwind, transitions, full control in changing conditions.' },
  { num: '06', title: 'ADVANCED & TRICKS', desc: 'Backrolls, frontrolls, rotations, kiteloops, heeloops, downloops.' },
];

const bookHref =
  'https://wa.me/48884035225?text=Hey%20OGO%20Academy%2C%20I%E2%80%99d%20like%20to%20book%20a%20kitesurfing%20session%20in%20Cyprus!';

const CyprusAboutLessons: React.FC = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container max-w-5xl">
        {/* Section header */}
        <RevealOnScroll>
          <p className="section-number mb-6">04 — ABOUT OUR LESSONS</p>
        </RevealOnScroll>

        <AnimatedLine className="mb-16" />

        <RevealOnScroll delay={100} className="mb-6">
          <h2 className="heading-display text-4xl md:text-6xl text-foreground leading-tight">
            LESSONS BUILT AROUND YOU,<br className="hidden md:block" /> NOT THE CLOCK.
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={200} className="mb-20 max-w-2xl">
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed font-light">
            A clear method, premium gear and a coach in your ear. Everything we do is designed
            so you progress faster, ride safer, and fall in love with the sport along the way.
          </p>
        </RevealOnScroll>

        {/* Block 1 — Sessions, not hours */}
        <RevealOnScroll delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 md:gap-16 items-start py-12 border-y border-border/40 mb-24">
            <div>
              <p className="section-number mb-3">SESSION FORMAT</p>
              <p className="heading-display text-7xl md:text-8xl text-foreground leading-none">
                1.5<span className="text-3xl md:text-4xl align-top ml-1">h</span>
              </p>
              <p className="label-caps text-muted-foreground mt-3">One active session</p>
            </div>
            <div className="md:pt-6">
              <p className="text-foreground text-lg md:text-xl leading-relaxed font-light">
                We don’t sell hours. We sell <em className="not-italic font-normal text-foreground">sessions</em> —
                roughly 1.5 hours of pure 1-on-1 active training on the water with your coach.
                No waiting, no sharing, no wasted wind.
              </p>
            </div>
          </div>
        </RevealOnScroll>

        {/* Block 2 — What's included */}
        <div className="mb-24">
          <RevealOnScroll>
            <p className="section-number mb-6">WHAT’S INCLUDED</p>
          </RevealOnScroll>
          <StaggeredList
            staggerMs={130}
            baseDelay={150}
            className="grid grid-cols-1 md:grid-cols-3 gap-0 border-y border-border/40"
          >
            {inclusions.map((item) => (
              <div
                key={item.title}
                className="py-10 md:px-8 border-b md:border-b-0 md:border-r last:border-b-0 md:last:border-r-0 border-border/40"
              >
                <item.icon className="w-6 h-6 text-primary mb-6" strokeWidth={1.25} />
                <h4 className="font-medium text-foreground uppercase text-sm tracking-widest mb-4">
                  {item.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </StaggeredList>
        </div>

        {/* Block 3 — The Method (featured) */}
        <div className="mb-24 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-16 relative">
          <div className="md:border-r md:border-border/40 md:pr-10">
            <RevealOnScroll>
              <p className="section-number mb-6">THE METHOD</p>
              <h3 className="heading-display text-3xl md:text-4xl text-foreground leading-tight">
                THE DENIS<br />EVDORENKO<br />METHOD.
              </h3>
            </RevealOnScroll>
          </div>
          <div>
            <RevealOnScroll delay={150}>
              <p className="text-foreground text-base md:text-lg leading-relaxed font-light mb-6">
                A personal teaching system built by Denis on top of proven kitesurfing fundamentals
                — and sharpened with years of his own refinements on the water with hundreds
                of students.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed font-light">
                On paper, the exercises look like any school: kite piloting, swings on land, body drag,
                positioning, water starts. In practice, each step carries its own details and
                <em className="not-italic text-foreground"> nuances</em> — the small things that turn
                “I took a course” into “I actually ride”. Faster progression. Safer learning.
                A real love for the sport.
              </p>
            </RevealOnScroll>
          </div>
        </div>

        {/* Block 4 — Roadmap */}
        <div className="mb-16">
          <RevealOnScroll className="mb-10">
            <p className="section-number mb-6">PROGRESSION ROADMAP</p>
            <h3 className="heading-display text-3xl md:text-4xl text-foreground">
              FROM FIRST TOUCH TO FIRST KITELOOP.
            </h3>
          </RevealOnScroll>

          <StaggeredList staggerMs={90} baseDelay={120}>
            {roadmap.map((step) => (
              <div key={step.num} className="group">
                <div className="grid grid-cols-[auto_1fr] md:grid-cols-[80px_1fr_2fr] gap-4 md:gap-10 py-6 items-baseline transition-all duration-300 group-hover:pl-2">
                  <span className="section-number text-base">{step.num}</span>
                  <p className="font-medium text-foreground uppercase text-sm md:text-base tracking-wide col-span-1 md:col-span-1">
                    {step.title}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed font-light col-span-2 md:col-span-1">
                    {step.desc}
                  </p>
                </div>
                <div className="section-divider" />
              </div>
            ))}
          </StaggeredList>

          <RevealOnScroll delay={200} className="mt-10 max-w-2xl">
            <p className="text-foreground text-lg md:text-xl leading-relaxed font-light italic">
              “Becoming independent isn’t the finish line — it’s where the fun starts.”
            </p>
          </RevealOnScroll>
        </div>

        {/* CTA */}
        <RevealOnScroll delay={150}>
          <a
            href={bookHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackContactClick('whatsapp', 'cyprus_about_lessons_cta')}
            className="inline-flex items-center gap-3 text-sm tracking-widest uppercase font-medium text-foreground border-b border-foreground pb-2 hover:gap-5 transition-all duration-300"
          >
            Book a session
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </a>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default CyprusAboutLessons;
