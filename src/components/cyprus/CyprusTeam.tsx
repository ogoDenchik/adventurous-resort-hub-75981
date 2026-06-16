import React from 'react';
import { Instagram } from 'lucide-react';
import { RevealOnScroll, AnimatedLine, StaggeredList } from '@/hooks/use-invisible-animation';
import denisPhoto from '@/assets/team/denis.jpg';
import igorPhoto from '@/assets/team/igor.jpg';

type Member = {
  num: string;
  name: string;
  role: string;
  tagline: string;
  bio: string;
  photo: string;
  stats: { value: string; label: string }[];
  instagram?: string;
};

const team: Member[] = [
  {
    num: '01',
    name: 'DENIS',
    role: 'FOUNDER · HEAD COACH',
    tagline: 'The Method.',
    bio: "5+ years coaching. 500+ students taken from zero to independent riding. Builds every session around the rider, not the clock.",
    photo: denisPhoto,
    stats: [
      { value: '500+', label: 'STUDENTS' },
      { value: '5+',   label: 'YEARS' },
    ],
    instagram: 'https://www.instagram.com/ogo_kite_academy',
  },
  {
    num: '02',
    name: 'IGOR',
    role: 'INSTRUCTOR · CYPRUS',
    tagline: 'The Wingman.',
    bio: "Patient, technical, fluent in the small details that make a beginner click. Your second pair of eyes on every Limassol session.",
    photo: igorPhoto,
    stats: [
      { value: '1-on-1', label: 'FORMAT' },
      { value: 'CY',     label: 'BASED' },
    ],
  },
];

const CyprusTeam: React.FC = () => {
  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container max-w-6xl">
        <RevealOnScroll>
          <p className="section-number mb-6">06 — OUR TEAM</p>
        </RevealOnScroll>

        <AnimatedLine className="mb-12" />

        <RevealOnScroll delay={100} className="mb-16 md:mb-24 flex items-end justify-between gap-8 flex-wrap">
          <h2 className="heading-display text-4xl md:text-6xl text-foreground leading-tight">
            THE PEOPLE<br />
            <span className="italic font-light text-muted-foreground">behind every session.</span>
          </h2>
          <p className="text-muted-foreground text-sm font-light max-w-xs">
            Two coaches. One standard. Always on the water with you, never watching from the shore.
          </p>
        </RevealOnScroll>

        <StaggeredList staggerMs={180} baseDelay={150} className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {team.map((m, idx) => (
            <article key={m.name} className="group">
              {/* Photo */}
              <div className="relative overflow-hidden mb-6 aspect-[3/4] bg-muted">
                <img
                  src={m.photo}
                  alt={`${m.name} — ${m.role}`}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale-[15%] transition-all duration-[1200ms] ease-out group-hover:grayscale-0 group-hover:scale-[1.03]"
                />
                {/* Number overlay */}
                <span
                  className="absolute top-4 left-4 md:top-6 md:left-6 text-[11px] tracking-[0.3em] text-white/90 font-light"
                  style={{ textShadow: '0 1px 12px rgba(0,0,0,0.5)' }}
                >
                  {m.num}
                </span>
                {/* Name bottom overlay */}
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                  <p className="heading-display text-3xl md:text-4xl text-white leading-none">
                    {m.name}
                  </p>
                  <p className="text-[10px] md:text-xs tracking-[0.25em] text-white/80 mt-2 font-light">
                    {m.role}
                  </p>
                </div>
                {/* Hover progress line */}
                <div className="absolute left-0 bottom-0 h-px bg-primary w-0 group-hover:w-full transition-all duration-1000" />
              </div>

              {/* Tagline */}
              <p className="heading-display-italic text-2xl md:text-3xl text-foreground mb-3">
                {m.tagline}
              </p>

              {/* Bio */}
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-light mb-6 max-w-md">
                {m.bio}
              </p>

              {/* Stats + IG */}
              <div className="flex items-end justify-between gap-6 pt-5 border-t border-border/50">
                <div className="flex gap-8">
                  {m.stats.map((s) => (
                    <div key={s.label}>
                      <p className="heading-display text-2xl md:text-3xl text-foreground leading-none">
                        {s.value}
                      </p>
                      <p className="text-[10px] tracking-[0.2em] text-muted-foreground mt-2 font-light">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
                {m.instagram && (
                  <a
                    href={m.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${m.name} on Instagram`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Instagram className="w-4 h-4" strokeWidth={1.5} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </StaggeredList>
      </div>
    </section>
  );
};

export default CyprusTeam;
