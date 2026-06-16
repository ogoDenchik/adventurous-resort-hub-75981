import React from 'react';
import { Instagram, User, Waves, ShieldCheck, Sparkles, Play, Camera } from 'lucide-react';
import { RevealOnScroll, AnimatedLine } from '@/hooks/use-invisible-animation';
import { useLanguage } from '@/contexts/LanguageContext';
import denisPhoto from '@/assets/team/denis.jpg';
import igorPhoto from '@/assets/team/igor.jpg';

const CyprusTeam: React.FC = () => {
  const { t } = useLanguage();

  const team = [
    {
      num: '01',
      name: 'IGOR',
      role: t('cyprus.igorRole') as string,
      badge: t('cyprus.igorBadge') as string,
      badgeColor: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
      tagline: t('cyprus.igorTagline') as string,
      focus: [
        { icon: User, text: t('cyprus.igorFocus1') as string },
        { icon: Waves, text: t('cyprus.igorFocus2') as string },
        { icon: ShieldCheck, text: t('cyprus.igorFocus3') as string },
      ],
      bio: t('cyprus.igorBio') as string,
      photo: igorPhoto,
      stats: [
        { value: t('cyprus.igorStat1') as string, label: t('cyprus.igorStat1Label') as string },
        { value: t('cyprus.igorStat2') as string, label: t('cyprus.igorStat2Label') as string },
      ],
    },
    {
      num: '02',
      name: 'DENIS',
      role: t('cyprus.denisRole') as string,
      badge: t('cyprus.denisBadge') as string,
      badgeColor: 'bg-primary/10 text-primary border-primary/20',
      tagline: t('cyprus.denisTagline') as string,
      focus: [
        { icon: Sparkles, text: t('cyprus.denisFocus1') as string },
        { icon: Play, text: t('cyprus.denisFocus2') as string },
        { icon: Camera, text: t('cyprus.denisFocus3') as string },
        { icon: Sparkles, text: t('cyprus.denisFocus4') as string },
      ],
      bio: t('cyprus.denisBio') as string,
      photo: denisPhoto,
      stats: [
        { value: t('cyprus.denisStat1') as string, label: t('cyprus.denisStat1Label') as string },
        { value: t('cyprus.denisStat2') as string, label: t('cyprus.denisStat2Label') as string },
      ],
      instagram: 'https://www.instagram.com/ogo_kite_academy',
    },
  ];

  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container max-w-6xl">
        <RevealOnScroll>
          <p className="section-number mb-6">{t('cyprus.teamSectionNum')}</p>
        </RevealOnScroll>

        <AnimatedLine className="mb-12" />

        <RevealOnScroll delay={100} className="mb-8 md:mb-12">
          <h2 className="heading-display text-4xl md:text-6xl text-foreground leading-tight mb-4">
            {t('cyprus.teamTitle')}
          </h2>
          <p className="text-muted-foreground text-sm md:text-base font-light max-w-md">
            {t('cyprus.teamSubtitle')}
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={150} className="mb-12 md:mb-16">
          <p className="text-foreground text-base md:text-lg font-light max-w-2xl leading-relaxed">
            {t('cyprus.teamIntro')}
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {team.map((m, idx) => (
            <article key={m.name} className="group">
              {/* Badge */}
              <div className={`inline-flex items-center px-4 py-2 border ${m.badgeColor} mb-5`}>
                <span className="text-[10px] tracking-[0.25em] font-medium uppercase">
                  {m.badge}
                </span>
              </div>

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
              <p className="heading-display-italic text-2xl md:text-3xl text-foreground mb-4">
                {m.tagline}
              </p>

              {/* Bio */}
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-light mb-6 max-w-md">
                {m.bio}
              </p>

              {/* Focus list */}
              <ul className="space-y-3 mb-6">
                {m.focus.map((item) => (
                  <li key={item.text} className="flex items-start gap-3 text-sm md:text-base text-foreground font-light">
                    <item.icon className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" strokeWidth={1.5} />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>

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
        </div>
      </div>
    </section>
  );
};

export default CyprusTeam;
