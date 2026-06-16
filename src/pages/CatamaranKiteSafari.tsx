import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Seo from '@/components/Seo';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Ship, Wind, Users, GraduationCap, Utensils, Bed, MapPin, Calendar } from 'lucide-react';

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Catamaran Kite Safari — Egypt',
    description:
      'Week-long catamaran kite safari in the Egyptian Red Sea. Live aboard a luxury catamaran with daily coaching, all kite gear, cabins and full board included.',
    brand: { '@type': 'Brand', name: 'OGO Kite Academy' },
    image: 'https://ogokiteacademy.com/lovable-uploads/kitesafari-hero-desktop-v2.jpg',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      price: '1850',
      availability: 'https://schema.org/InStock',
      url: 'https://ogokiteacademy.com/catamaran-kite-safari',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a catamaran kite safari?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A catamaran kite safari is a week-long trip where a small group lives aboard a sailing catamaran and moves between remote kite spots each day. You kite from the boat or shallow lagoons, with coaching, gear, cabins and meals included.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where does the OGO catamaran kite safari take place?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'In the Egyptian Red Sea — flat, turquoise lagoons around Hurghada and the surrounding islands, with consistent thermal wind from spring through autumn.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need to be an advanced kiter to join?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. The safari is open to independent riders who can stay upwind, and we also offer coaching slots for intermediate riders who want to progress with jumps, transitions and strapless.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is included in the price?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '7 nights in a private cabin, full board (breakfast, lunch, dinner, snacks, water), daily kite sessions from the boat, safety boat support, and a certified instructor on board.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I book a cabin?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Message us on WhatsApp at +48 884 035 225 or Telegram @ogodenchik_official to check current dates and reserve a cabin with a 30% deposit.',
        },
      },
    ],
  },
];

const features = [
  { icon: Ship, title: 'Luxury catamaran', text: 'Live aboard a fully crewed sailing catamaran with spacious cabins, sun decks and a chef on board.' },
  { icon: Wind, title: 'Daily kite sessions', text: 'Kite straight off the back of the boat or from secluded flat-water lagoons reached only by sea.' },
  { icon: GraduationCap, title: 'Certified coaching', text: 'Personalised coaching for independent and intermediate riders — progression, jumps, transitions, strapless.' },
  { icon: Users, title: 'Small group', text: 'Maximum 8 guests per cabin layout. Real attention, no crowded beaches, a close-knit crew.' },
  { icon: Bed, title: 'Private cabins', text: 'Choose between Twin, Master Suite and Panoramic Suite. Linen, AC and en-suite bathrooms included.' },
  { icon: Utensils, title: 'Full board', text: 'Breakfast, lunch, dinner and snacks prepared on board. Dietary needs accommodated on request.' },
];

const CatamaranKiteSafari: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Catamaran Kite Safari in Egypt — Luxury Yacht Trip | OGO Kite Academy"
        description="Catamaran kite safari in the Egyptian Red Sea. Week-long luxury yacht trip with coaching, all kite gear, private cabins and full board included. From €1850."
        path="/catamaran-kite-safari"
        image="https://ogokiteacademy.com/lovable-uploads/kitesafari-hero-desktop-v2.jpg"
        jsonLd={jsonLd}
      />
      <Navbar />
      <ScrollToTop />

      <main>
        {/* Hero */}
        <section className="relative min-h-[85vh] flex items-end md:items-center pt-24 pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/lovable-uploads/kitesafari-hero-desktop-v2.jpg"
              alt="Catamaran kite safari in the Egyptian Red Sea — luxury yacht with kites"
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-white">
            <p className="uppercase tracking-[0.3em] text-xs md:text-sm mb-4 opacity-90">Egypt · Red Sea · 7 nights</p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl uppercase leading-tight max-w-4xl">
              Catamaran Kite Safari
            </h1>
            <p className="mt-6 max-w-2xl text-lg md:text-xl font-light opacity-95">
              A week-long luxury catamaran kite safari in Egypt. Wake up to glassy water, kite from the boat,
              and progress with a certified coach — all gear, cabins and meals included.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="text-base">
                <Link to="/kite-safari">See dates & cabins</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-base bg-white/10 text-white border-white/40 hover:bg-white/20"
              >
                <a
                  href="https://wa.me/48884035225?text=Hi%20OGO%2C%20I%27d%20like%20to%20join%20the%20catamaran%20kite%20safari"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Reserve a cabin
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="font-display text-3xl md:text-5xl uppercase mb-6">What a catamaran kite safari is</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              A catamaran kite safari is the most intimate way to experience kitesurfing in Egypt. You live aboard
              a luxury sailing catamaran for seven nights, moving each day to a different flat-water lagoon or
              reef in the Red Sea. Kite straight off the swim platform, ride untouched spots reachable only by
              boat, and end the day on deck with the sunset.
            </p>
          </div>
        </section>

        {/* Features grid */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl md:text-5xl uppercase text-center mb-14">Included in the safari</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {features.map((f) => (
                <div key={f.title} className="bg-background p-8 border border-border">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-5">
                    <f.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl uppercase mb-3">{f.title}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why catamaran */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-display text-3xl md:text-5xl uppercase mb-8 text-center">
              Why choose a catamaran over a land camp
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-muted-foreground font-light leading-relaxed">
              <div>
                <h3 className="font-display text-xl uppercase text-foreground mb-3">Access remote spots</h3>
                <p>Most of the best flat-water lagoons in the Red Sea have no road access. A catamaran takes you to spots that land-based schools simply cannot reach.</p>
              </div>
              <div>
                <h3 className="font-display text-xl uppercase text-foreground mb-3">More water time</h3>
                <p>No transfers, no waiting for a van — your kite is rigged on deck and you launch in minutes. Most guests get 4–6 hours of riding per day.</p>
              </div>
              <div>
                <h3 className="font-display text-xl uppercase text-foreground mb-3">Small, calm group</h3>
                <p>Eight guests, one boat, one coach. You actually get coached, you actually rest, and you actually meet the people you ride with.</p>
              </div>
              <div>
                <h3 className="font-display text-xl uppercase text-foreground mb-3">Luxury without the resort</h3>
                <p>Private cabin with AC and en-suite, chef-prepared meals, sun deck, snorkelling between sessions. The comfort of a resort, the freedom of the open sea.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick info */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="uppercase text-xs tracking-widest text-muted-foreground mb-1">Location</p>
                <p className="font-display text-xl">Egyptian Red Sea</p>
              </div>
              <div>
                <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="uppercase text-xs tracking-widest text-muted-foreground mb-1">Duration</p>
                <p className="font-display text-xl">7 nights</p>
              </div>
              <div>
                <Ship className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="uppercase text-xs tracking-widest text-muted-foreground mb-1">From</p>
                <p className="font-display text-xl">€1850 / cabin</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-display text-3xl md:text-5xl uppercase text-center mb-12">
              Catamaran kite safari FAQ
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {(jsonLd[1] as any).mainEntity.map((q: any, i: number) => (
                <AccordionItem key={i} value={`q-${i}`}>
                  <AccordionTrigger className="text-left font-display uppercase text-base md:text-lg">
                    {q.name}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-light leading-relaxed">
                    {q.acceptedAnswer.text}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-foreground text-background">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="font-display text-3xl md:text-5xl uppercase mb-6">Ready to set sail?</h2>
            <p className="opacity-80 mb-10 font-light text-lg">
              See full itinerary, available cabins and dates on the main safari page, or message us directly to reserve a spot.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="text-base">
                <Link to="/kite-safari">View full details</Link>
              </Button>
              <Button asChild size="lg" className="text-base">
                <a
                  href="https://wa.me/48884035225?text=Hi%20OGO%2C%20I%27d%20like%20to%20join%20the%20catamaran%20kite%20safari"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp us
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CatamaranKiteSafari;
