import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

type LangKey = 'en' | 'ru' | 'gr';

const testimonials: Array<{ name: string; text: Record<LangKey, string>; photo: string; stars: number; location: Record<LangKey, string> }> = [
  {
    name: 'Миша',
    text: {
      ru: 'Денис поставил меня на доску за неделю, хотя я вообще думал что это нереально)) сейчас уже сам катаюсь, второй сезон подряд едем вместе',
      en: 'Denis got me on the board in a week, even though I thought it was impossible)) now I ride on my own, second season in a row we go together',
      gr: 'Ο Ντένις με έβαλε στη σανίδα σε μια εβδομάδα, αν και νόμιζα ότι ήταν αδύνατο)) τώρα κάνω μόνος μου, δεύτερη σεζόν μαζί',
    },
    photo: '/lovable-uploads/community-hug.jpg', stars: 5,
    location: { ru: 'Египет', en: 'Egypt', gr: 'Αίγυπτος' },
  },
  {
    name: 'Kate',
    text: {
      en: 'amazing experience! everything was perfectly organized, from training to accommodation. learned my first backroll 🤙',
      ru: 'потрясающий опыт! всё идеально организовано, от тренировок до жилья. выучила свой первый бэкролл 🤙',
      gr: 'καταπληκτική εμπειρία! τα πάντα ήταν τέλεια οργανωμένα. Έμαθα το πρώτο μου backroll 🤙',
    },
    photo: '/lovable-uploads/brazil-lagoon-girl.jpg', stars: 5,
    location: { ru: 'Бразилия', en: 'Brazil', gr: 'Βραζιλία' },
  },
  {
    name: 'Илья',
    text: {
      ru: 'Мне нравится что Денис дает информацию по чуть чуть, не грузит сразу всем. Потом все кусочки складываются и ты такой — о, я еду!',
      en: 'I love that Denis gives info bit by bit, doesn\'t overload you. Then all the pieces come together and you\'re like — oh, I\'m riding!',
      gr: 'Μου αρέσει που ο Ντένις δίνει πληροφορίες σιγά σιγά. Μετά όλα τα κομμάτια ενώνονται και λες — ω, οδηγώ!',
    },
    photo: '/lovable-uploads/cyprus-student-success.jpg', stars: 5,
    location: { ru: 'Вьетнам', en: 'Vietnam', gr: 'Βιετνάμ' },
  },
  {
    name: 'Андрей',
    text: {
      ru: 'Переехал на Кипр, искал чем заняться кроме работы. Друг затащил на кайт — теперь не могу остановится, катаюсь каждые выхи 😅',
      en: 'Moved to Cyprus, was looking for something besides work. A friend dragged me to kite — now I can\'t stop, riding every weekend 😅',
      gr: 'Μετακόμισα στην Κύπρο, έψαχνα κάτι εκτός δουλειάς. Ένας φίλος με πήγε στο kite — τώρα δεν μπορώ να σταματήσω 😅',
    },
    photo: '/lovable-uploads/cyprus-student-thumbsup.jpg', stars: 5,
    location: { ru: 'Кипр', en: 'Cyprus', gr: 'Κύπρος' },
  },
  {
    name: 'Лена',
    text: {
      ru: 'я реально боялась, у меня был прям страх воды. Но Денис оч спокойно все обьяснил, без давления. на 3й день уже сама каталась, до сих пор не верю',
      en: 'I was really scared, I had a fear of water. But Denis explained everything calmly, no pressure. By day 3 I was riding on my own, still can\'t believe it',
      gr: 'Φοβόμουν πραγματικά, είχα φόβο για το νερό. Αλλά ο Ντένις εξήγησε τα πάντα ήρεμα. Την 3η μέρα οδηγούσα μόνη μου',
    },
    photo: '/lovable-uploads/cyprus-happy-student-1.jpg', stars: 5,
    location: { ru: 'Кипр', en: 'Cyprus', gr: 'Κύπρος' },
  },
  {
    name: 'Дима',
    text: {
      ru: 'Лучшее что я сделал за последний год. Комьюнити здесь крутое, сразу нашел ребят с кем кататься',
      en: 'Best thing I did this past year. The community here is awesome, immediately found people to ride with',
      gr: 'Το καλύτερο που έκανα τον τελευταίο χρόνο. Η κοινότητα εδώ είναι φοβερή, βρήκα αμέσως παρέα',
    },
    photo: '/lovable-uploads/cyprus-student-waterstart-joy.jpg', stars: 4,
    location: { ru: 'Кипр', en: 'Cyprus', gr: 'Κύπρος' },
  },
];

const doubled = [...testimonials, ...testimonials];

const CyprusTestimonials: React.FC = () => {
  const [paused, setPaused] = useState(false);
  const { t, lang } = useLanguage();
  const langKey = lang as LangKey;

  return (
    <section className="py-12 overflow-hidden bg-muted/30">
      <div className="container mx-auto px-4 mb-8">
        <h3 className="text-center text-2xl md:text-3xl font-display font-bold mb-1">{t('cyprus.testimonialsTitle')}</h3>
        <p className="text-center text-sm text-muted-foreground">{t('cyprus.testimonialsSubtitle')}</p>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-muted/30 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-muted/30 to-transparent z-10 pointer-events-none" />
        <div className={cn('flex gap-5 w-max', paused ? '' : 'animate-marquee')} style={paused ? { animationPlayState: 'paused' } : undefined}>
          {doubled.map((item, i) => (
            <div key={i} onClick={() => setPaused(p => !p)} className="flex-shrink-0 w-72 bg-card rounded-2xl border border-border/50 p-5 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer select-none">
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: item.stars }).map((_, si) => (
                  <Star key={si} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm text-foreground leading-relaxed mb-4">"{item.text[langKey]}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <img loading="lazy" src={item.photo} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{item.name}</div>
                  <div className="text-xs text-muted-foreground">{item.location[langKey]}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CyprusTestimonials;
