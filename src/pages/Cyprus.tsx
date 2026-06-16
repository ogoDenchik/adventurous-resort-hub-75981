import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Seo from '@/components/Seo';
import { MessageCircle, Send, Instagram } from 'lucide-react';
import CyprusHero from '@/components/cyprus/CyprusHero';
import BeginnerFlow from '@/components/BeginnerFlow';
import LearningJourney from '@/components/cyprus/LearningJourney';
import CyprusTrustBar from '@/components/cyprus/CyprusTrustBar';
import CyprusLifestyle from '@/components/cyprus/CyprusLifestyle';
import CyprusAdvantages from '@/components/cyprus/CyprusAdvantages';
import CyprusFAQ from '@/components/cyprus/CyprusFAQ';
import CyprusTestimonials from '@/components/cyprus/CyprusTestimonials';
import { useLanguage } from '@/contexts/LanguageContext';
import { trackContactClick, type ContactChannel } from '@/utils/metaTracking';
import LazyYouTube from '@/components/LazyYouTube';

const cyprusJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'OGO Kite Academy',
    url: 'https://ogokiteacademy.com',
    logo: 'https://storage.googleapis.com/gpt-engineer-file-uploads/a1t2DDCIfRg0ny8VzbGk9R2nnG52/uploads/1759850302477-Дизайн_без_названия__40_-removebg-preview.png',
    sameAs: ['https://www.instagram.com/ogo_kite_academy', 'https://t.me/ogodenchik_official'],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'OGO Kite Academy',
    url: 'https://ogokiteacademy.com',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Do I need previous experience to start kitesurfing?', acceptedAnswer: { '@type': 'Answer', text: 'No prior experience is needed. Our beginner courses in Limassol take complete beginners to independent riding.' } },
      { '@type': 'Question', name: 'Is all the kite gear included in lessons?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — kites, boards, harnesses and safety equipment from Duotone are included with every lesson.' } },
      { '@type': 'Question', name: 'Where do lessons take place in Cyprus?', acceptedAnswer: { '@type': 'Answer', text: 'Lessons run on the kite spots around Limassol, chosen each day based on the wind direction.' } },
      { '@type': 'Question', name: 'How do I book a lesson?', acceptedAnswer: { '@type': 'Answer', text: 'Message us on WhatsApp at +48 884 035 225 or Telegram @ogodenchik_official to reserve your spot.' } },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'OGO Kite Academy — Kitesurfing in Limassol, Cyprus',
    description: 'Short film from OGO Kite Academy showing kitesurfing lessons and lifestyle in Limassol, Cyprus.',
    thumbnailUrl: ['https://i.ytimg.com/vi/ZEg4JkGOVWg/hqdefault.jpg'],
    uploadDate: '2024-06-01',
    contentUrl: 'https://www.youtube.com/watch?v=ZEg4JkGOVWg',
    embedUrl: 'https://www.youtube.com/embed/ZEg4JkGOVWg',
    publisher: { '@type': 'Organization', name: 'OGO Kite Academy' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Kitesurfing Water Start Tutorial — OGO Kite Academy',
    description: 'Step-by-step water start tutorial for kitesurfing beginners by OGO Kite Academy in Cyprus.',
    thumbnailUrl: ['https://i.ytimg.com/vi/jn9oejNBv2A/hqdefault.jpg'],
    uploadDate: '2024-06-01',
    contentUrl: 'https://www.youtube.com/watch?v=jn9oejNBv2A',
    embedUrl: 'https://www.youtube.com/embed/jn9oejNBv2A',
    publisher: { '@type': 'Organization', name: 'OGO Kite Academy' },
  },
];

const contactMethods: Array<{
  icon: typeof MessageCircle;
  title: string;
  description: string;
  link: string;
  color: string;
  hoverColor: string;
  channel: ContactChannel;
}> = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "+48 884 035 225",
    link: "https://wa.me/48884035225?text=Hey%20OGO%20Academy%2C%20I%20have%20a%20question!",
    color: "bg-green-500",
    hoverColor: "hover:bg-green-600",
    channel: 'whatsapp',
  },
  {
    icon: Instagram,
    title: "Instagram",
    description: "@ogo_kite_academy",
    link: "https://www.instagram.com/ogo_kite_academy",
    color: "bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400",
    hoverColor: "hover:opacity-90",
    channel: 'instagram',
  },
  {
    icon: Send,
    title: "Telegram",
    description: "@ogodenchik_official",
    link: "https://t.me/ogodenchik_official",
    color: "bg-blue-500",
    hoverColor: "hover:bg-blue-600",
    channel: 'telegram',
  },
];

const Cyprus: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Kite Lessons in Limassol, Cyprus | OGO Kite Academy"
        description="Learn kitesurfing in Cyprus with a certified instructor. Personal lessons in Limassol, all Duotone gear included. 500+ students. Book via DM."
        path="/"
        jsonLd={cyprusJsonLd}
      />
      <Navbar />
      <ScrollToTop />
      <main>
      <CyprusHero />
      <CyprusTrustBar />
      <LearningJourney />

      {/* YouTube Shorts Video */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-sm mx-auto" style={{ aspectRatio: '9/16' }}>
            <LazyYouTube
              videoId="ZEg4JkGOVWg"
              title="OGO Kite Academy — Kitesurfing in Limassol, Cyprus"
              className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl"
            />
          </div>
        </div>
      </section>

      <CyprusLifestyle />
      <CyprusTestimonials />
      <CyprusAdvantages />

      {/* Video */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-6">
              {t('cyprus.videoTitle')}
            </h2>
            <LazyYouTube
              videoId="jn9oejNBv2A"
              title="Kitesurfing Water Start Tutorial — OGO Kite Academy"
              className="relative aspect-video rounded-xl overflow-hidden shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section id="cyprus-contact" className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-2">
            {t('cyprus.contactTitle')}
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            {t('cyprus.contactSubtitle')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 max-w-5xl mx-auto">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackContactClick(method.channel, 'cyprus_contact_card')}
                className="group relative bg-card rounded-xl md:rounded-2xl p-4 md:p-8 flex items-center gap-4 md:flex-col md:text-center transition-all duration-300 hover:-translate-y-1 md:hover:-translate-y-2 hover:shadow-xl border border-border overflow-hidden"
              >
                <div className="flex-shrink-0 md:flex md:justify-center md:mb-5">
                  <div className={`${method.color} ${method.hoverColor} w-11 h-11 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg`}>
                    <method.icon className="w-5 h-5 md:w-8 md:h-8 text-white" />
                  </div>
                </div>
                <div className="min-w-0">
                  <h3 className="text-base md:text-xl font-semibold text-foreground uppercase tracking-wide">
                    {method.title}
                  </h3>
                  <p className="text-muted-foreground text-xs md:text-sm">
                    {method.description}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </a>
            ))}
          </div>
          <p className="text-center text-muted-foreground text-sm mt-6">
            {t('contact.responseNote')}
          </p>
        </div>
      </section>

      <CyprusFAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Cyprus;
