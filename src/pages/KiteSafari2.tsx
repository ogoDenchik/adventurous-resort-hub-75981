import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import TelegramButton from '@/components/TelegramButton';
import { Button } from '@/components/ui/button';
import { VietnamBookingPopup } from '@/components/VietnamBookingPopup';
import { Card, CardContent } from '@/components/ui/card';
import { FadeIn } from '@/hooks/use-scroll-animation';
import { 
  Shield, 
  Users, 
  Star, 
  Repeat,
  Waves,
  Ship,
  DollarSign,
  Brain,
  Heart,
  Home,
  Utensils,
  Anchor,
  GraduationCap,
  Car,
  PartyPopper,
  Sun,
  Coffee,
  Wind,
  Sunset,
  Video,
  Moon,
  Calendar,
  MapPin,
  Target,
  Check,
  X
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const KiteSafari2 = () => {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [preselectedDates, setPreselectedDates] = useState('');
  const [preselectedPackage, setPreselectedPackage] = useState('');

  const openBooking = (dates?: string, packageType?: string) => {
    if (dates) setPreselectedDates(dates);
    if (packageType) setPreselectedPackage(packageType);
    setBookingOpen(true);
  };

  const trustBadges = [
    { icon: Shield, text: 'International Standards' },
    { icon: Shield, text: 'Fully Insured' },
    { icon: Users, text: '1150+ Students' },
    { icon: Star, text: '4.9/5 Rating' },
    { icon: Repeat, text: '200+ Returning Riders' }
  ];

  const whyFeatures = [
    {
      icon: Waves,
      title: 'PERFECT CONDITIONS',
      description: '3 flat-water lagoons in one week\nConsistent wind, sandy bottom, no crowds\nShallow safe areas + rescue boat support'
    },
    {
      icon: Ship,
      title: 'LUXURY LIVEABOARD EXPERIENCE',
      description: 'Your room, food, chill zones — everything on the yacht\nWake up on the spot — no transfers\nJacuzzi, sun deck, snorkeling, SUP'
    },
    {
      icon: DollarSign,
      title: 'TRUE ALL-INCLUSIVE VALUE',
      description: 'Accommodation, food, crew, fuel — included\nDaily zodiac rides to spots included\nJust ride, rest, and enjoy'
    },
    {
      icon: Brain,
      title: 'PROGRESSION-FOCUSED',
      description: 'Top instructors with 5+ years of coaching\nOptional training packages\nVideo analysis and technique breakdowns'
    },
    {
      icon: Heart,
      title: 'COMMUNITY',
      description: 'Riders from Europe, Ukraine, Middle East\nSolo travelers, couples, groups\nFriendships formed on board last for years'
    }
  ];

  const dates = [
    {
      title: 'April 11-18, 2026',
      location: 'Red Sea, Egypt — Yacht Route',
      conditions: 'Strong spring winds',
      spots: '15/30'
    },
    {
      title: 'April 18-25, 2026',
      location: 'Northern Lagoon Route',
      conditions: 'Perfect warm-water conditions',
      spots: '21/30'
    },
    {
      title: 'April 30 - May 07, 2026',
      location: 'Red Sea, Egypt',
      conditions: 'Freeride + Progression Week',
      spots: '13/20'
    }
  ];

  const schedule = [
    { time: '07:30', title: 'WAKE UP ON THE WATER', description: 'Morning lagoon views. Short briefing, coffee.' },
    { time: '08:00', title: 'BREAKFAST', description: 'Light buffet. Discuss wind & goals for the day.' },
    { time: '09:30', title: 'FIRST KITE SESSION', description: '2-3h hours riding.\nFocus depends on level (water start, upwind, jumps, tricks).' },
    { time: '13:30', title: 'LUNCH & REST', description: 'Back to the yacht.\nEat → relax → snorkel → nap → review videos.' },
    { time: '15:30', title: 'SECOND SESSION / ACTIVITIES', description: 'Kite Session #2\nVideo shooting\nSUP / snorkeling\nTechnique workshop' },
    { time: '18:30', title: 'SUNSET & CHILL', description: 'Music, tea, hookah (optional), sunset photos.' },
    { time: '20:00', title: 'DINNER', description: 'Fresh seafood, salads, rice, dessert.' },
    { time: '21:30', title: 'VIDEO ANALYSIS / SOCIAL TIME', description: '' },
    { time: '23:00', title: 'REST', description: 'Sleep to the sound of the sea.' }
  ];

  const pricingOptions = [
    {
      title: 'TWIN CABIN',
      subtitle: 'PER PERSON',
      price: 'From €1,750',
      features: [
        '7 days / 6 nights',
        '3 meals daily',
        'Snacks + drinks',
        'All boat logistics',
        'Rescue boat',
        'SUP, snorkeling',
        'WhatsApp group',
        'Evening kite briefings'
      ],
      bestFor: 'Solo travelers, friends',
      buttonText: 'BOOK TWIN CABIN'
    },
    {
      title: 'MASTER SUITE',
      subtitle: '2 PEOPLE',
      price: 'From €3,500 / cabin',
      features: [
        'Everything in Twin Cabin',
        'Larger cabin',
        'More comfort',
        'Better location onboard'
      ],
      bestFor: 'Couples, friends',
      buttonText: 'BOOK MASTER SUITE'
    },
    {
      title: 'PANORAMIC SUITE',
      subtitle: '2 PEOPLE',
      price: 'From €3,700 / cabin',
      features: [
        'Everything in Master Suite',
        'Panoramic windows',
        'Most premium cabin',
        'Maximum privacy'
      ],
      bestFor: 'Couples, friends',
      buttonText: 'BOOK PANORAMIC SUITE',
      badge: 'Only 1–2 per trip'
    }
  ];

  const addons = [
    { title: 'Beginner Group Course (3h everyday)', price: '€900' },
    { title: 'Progression Pack (6 hours)', price: '€600' },
    { title: 'VIP 1:1 Coaching + Videoanalysis all safari (maximum 2ppl per person)', price: '€1500' },
    { title: 'Full Equipment Rental (1 week)', price: '€600' }
  ];

  const whoIsItFor = [
    'Prefer adventure over resorts',
    'Want to ride 2× daily',
    'Love community vibes',
    'Are OK with boat life',
    'Want real progression',
    'Are a beginner, intermediate, or advanced rider',
    'Are 18+ (or 16+ with guardian)',
    'Want the full experience — spots, islands, riding, community'
  ];

  const faqItems = [
    {
      question: "I'm a complete beginner. Can I join?",
      answer: "Yes! We offer beginner group courses (3h daily) and private lessons. The yacht has shallow flat-water lagoons perfect for learning. You'll need to add a coaching package to your booking."
    },
    {
      question: "Can I come solo?",
      answer: "Absolutely! Most guests are solo travelers. You'll share a twin cabin with another rider (same gender) and join an international community. Many lifelong friendships start on our safaris."
    },
    {
      question: "What if there's no wind?",
      answer: "The Red Sea has consistent wind April–October. If wind drops, we offer SUP, snorkeling, island visits, and can relocate to better spots. Full wind-off days are rare but possible."
    },
    {
      question: "What about accommodation on the yacht?",
      answer: "You'll stay in comfortable air-conditioned cabins with fresh linens and daily cleaning. Twin cabins have shared bathrooms, while Master and Panoramic Suites offer more space and privacy."
    },
    {
      question: "I have dietary restrictions. Can you accommodate?",
      answer: "Yes! Let us know in advance about vegetarian, vegan, gluten-free, or any allergies. Our chef prepares fresh meals daily and can adapt to most dietary needs."
    },
    {
      question: "How do I get to the yacht?",
      answer: "Fly to Hurghada (HRG). We arrange group transfers from airport to marina. The yacht departs from Hurghada and returns there at the end of the trip."
    },
    {
      question: "Do I need a visa for Egypt?",
      answer: "Most nationalities can get a visa on arrival at Hurghada airport ($25 USD). EU, UK, US, Canada, Australia citizens are eligible. Check your country's requirements before booking."
    },
    {
      question: "What's the weather like?",
      answer: "April–May: 25-30°C, warm water, strong winds\nSeptember–October: 28-35°C, hot and perfect for riding\nAlways sunny, minimal rain"
    },
    {
      question: "Can I extend my stay in Egypt?",
      answer: "Yes! Many riders arrive early or stay after to explore Hurghada, Luxor, or Cairo. We can recommend local guides and activities."
    },
    {
      question: "What should I bring?",
      answer: "Essentials: Passport, travel insurance, reef-safe sunscreen, rashguard, wetsuit (if you get cold), personal medications\nOptional: Your own kite gear, GoPro, snorkel mask, beach towel\nWe provide: Kite equipment (rental), SUP, snorkeling gear, yacht towels"
    },
    {
      question: "I'm an advanced rider. Will I get bored?",
      answer: "No! Advanced riders love the safari for exploring new spots, progression coaching (jumps, tricks, foiling), and riding 2-3 sessions daily without crowds. We also offer VIP 1:1 coaching with video analysis."
    },
    {
      question: "What are COVID/health requirements?",
      answer: "Egypt has lifted most COVID restrictions. Travel insurance covering medical emergencies is mandatory. Check latest entry requirements before departure."
    },
    {
      question: "Is it safe for solo female travelers?",
      answer: "Yes! We have many solo female riders. The yacht is a safe, private environment. Our crew and instructors are professional and respectful. Egypt is generally safe for tourists in resort areas."
    },
    {
      question: "Can I work remotely from the yacht?",
      answer: "WiFi is available when near shore, but can be unstable at sea. If you need reliable internet for calls/work, plan for limited connectivity during sailing days."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WhatsAppButton />
      <TelegramButton />

      {/* SECTION 1: HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('/lovable-uploads/kite-safari-yacht-action.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              EGYPT KITE SAFARI
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-2xl md:text-4xl mb-4 font-light">
              Ride. Progress. Live on a Yacht.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-xl md:text-2xl mb-8">
              7 Days • 3 Epic Kite Lagoons • Luxury Liveaboard Experience
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="inline-block bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-6 py-3 mb-8">
              <p className="text-lg font-semibold">Season: 2026 (Limited Availability)</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={() => openBooking('', '')}
              >
                JOIN THE KITE SAFARI (from €1,750 per person)
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
                onClick={() => window.open('https://wa.me/48884035225?text=Hey%20OGO%20Academy,%20I%20want%20the%20full%20PDF%20for%20Egypt%20Kite%20Safari', '_blank')}
              >
                Request Full PDF on WhatsApp
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.6}>
            <p className="text-sm text-white/80">
              Liveaboard yacht • Flat-water lagoons • Coaching & video analysis • Island BBQ
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 2: TRUST BAR */}
      <section className="bg-muted/30 py-12 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {trustBadges.map((badge, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="mb-3 inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                    <badge.icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <p className="text-sm font-medium text-foreground">{badge.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY KITE SAFARI? */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: Visual Collage */}
            <FadeIn direction="left">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <img 
                    src="/lovable-uploads/kite-safari-yacht.jpg" 
                    alt="Yacht in lagoon"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <img 
                  src="/lovable-uploads/kite-safari-action-1.jpg" 
                  alt="Riders"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
                <img 
                  src="/lovable-uploads/kite-safari-sunset-1.jpg" 
                  alt="Sunset"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
              </div>
            </FadeIn>

            {/* Right: Text Content */}
            <FadeIn direction="right">
              <div>
                <h2 className="text-4xl font-bold mb-6">WHY KITE SAFARI?</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Most kite trips limit you to one beach.<br/>
                  Here — your hotel, restaurant, and kite station are all on the water.
                </p>

                <div className="space-y-6">
                  {whyFeatures.map((feature, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <feature.icon className="w-6 h-6" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground whitespace-pre-line">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-lg font-semibold mt-8 text-primary">
                  This is not just a kite trip.<br/>
                  This is full immersion into the kitesurf lifestyle.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 4: DATES & AVAILABILITY */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-4xl font-bold text-center mb-12">WHEN & WHERE</h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {dates.map((date, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Calendar className="w-5 h-5 text-primary" />
                      <h3 className="text-xl font-bold">{date.title}</h3>
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-start gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                        <span>{date.location}</span>
                      </div>
                      <div className="flex items-start gap-2 text-muted-foreground">
                        <Wind className="w-4 h-4 mt-1 flex-shrink-0" />
                        <span>{date.conditions}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Target className="w-4 h-4 mt-1 flex-shrink-0 text-primary" />
                        <span className="font-semibold">Spots available: {date.spots}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <p className="text-center text-muted-foreground">
              ⚠️ Small-group yacht trips. When cabins fill — booking closes.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 5: WHAT'S INCLUDED */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-4xl font-bold text-center mb-4">EVERYTHING YOU NEED</h2>
            <p className="text-xl text-center text-muted-foreground mb-12">A full Red Sea KiteSafari experience</p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {/* LEFT COLUMN */}
            <div className="space-y-8">
              <FadeIn direction="left" delay={0.1}>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Home className="w-8 h-8 text-primary" />
                      <h3 className="text-2xl font-bold">ACCOMMODATION (ON THE YACHT)</h3>
                    </div>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• 7 days / 6 nights on a comfortable liveaboard yacht</li>
                      <li>• Twin cabins, Master Suites, Panoramic Suite (limited availability)</li>
                      <li>• Air conditioning, private/shared bathrooms</li>
                      <li>• Fresh linens, daily cleaning</li>
                      <li>• Lounge areas, sun deck, jacuzzi</li>
                      <li>• WiFi when available</li>
                    </ul>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn direction="left" delay={0.2}>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Utensils className="w-8 h-8 text-primary" />
                      <h3 className="text-2xl font-bold">FOOD & DRINKS</h3>
                    </div>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• 3 meals per day</li>
                      <li>• Snacks, fruits, tea, coffee, water</li>
                      <li>• BBQ party on an uninhabited island</li>
                      <li>• Vegetarian options available</li>
                    </ul>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn direction="left" delay={0.3}>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Anchor className="w-8 h-8 text-primary" />
                      <h3 className="text-2xl font-bold">KITESURFING LOGISTICS</h3>
                    </div>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Daily zodiac transfers to the spot/back (300m)</li>
                      <li>• Launch/landing support</li>
                      <li>• Rescue boat on duty</li>
                      <li>• Full safety briefing</li>
                      <li>• Possibility to add coaching or rental gear</li>
                    </ul>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-8">
              <FadeIn direction="right" delay={0.1}>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <GraduationCap className="w-8 h-8 text-primary" />
                      <h3 className="text-2xl font-bold">COACHING PACKAGES (OPTIONAL)</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">(Not included in base price)</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Beginner, Intermediate, Advanced coaching</li>
                      <li>• 1:1 or small-group format</li>
                      <li>• Premium Duotone gear (where available)</li>
                      <li>• BbTalkin radio communication</li>
                      <li>• Daily or evening video analysis</li>
                      <li>• Clear progression roadmap</li>
                    </ul>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn direction="right" delay={0.2}>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Car className="w-8 h-8 text-primary" />
                      <h3 className="text-2xl font-bold">TRANSPORTATION</h3>
                    </div>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Group transfer from Hurghada (HRG) to marina</li>
                      <li>• Boat transfers between lagoons</li>
                      <li>• Zodiac to shallow water zones</li>
                    </ul>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn direction="right" delay={0.3}>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <PartyPopper className="w-8 h-8 text-primary" />
                      <h3 className="text-2xl font-bold">ACTIVITIES & EXTRAS</h3>
                    </div>
                    <div className="mb-4">
                      <p className="font-semibold mb-2">Included:</p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Snorkeling reefs</li>
                        <li>• SUP boards</li>
                        <li>• Island visits</li>
                        <li>• Deck hangouts, music, chill sessions</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">Optional:</p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Alcoholic drinks</li>
                        <li>• Extra coaching hours</li>
                        <li>• Professional photo/video shoot</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn direction="right" delay={0.4}>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Users className="w-8 h-8 text-primary" />
                      <h3 className="text-2xl font-bold">COMMUNITY & VIBES</h3>
                    </div>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• International group</li>
                      <li>• Evening hangouts and talks</li>
                      <li>• Shared learning, shared progress</li>
                      <li>• Perfect for solo travelers</li>
                    </ul>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>
          </div>

          <FadeIn delay={0.5}>
            <Card className="mt-8 bg-destructive/10 border-destructive/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <X className="w-6 h-6" />
                  NOT INCLUDED:
                </h3>
                <div className="grid md:grid-cols-2 gap-2 text-muted-foreground">
                  <p>• International flights</p>
                  <p>• Egyptian visa</p>
                  <p>• Kitesurfing lessons & rental gear</p>
                  <p>• Alcohol</p>
                  <p>• Travel insurance (mandatory)</p>
                  <p>• Tips</p>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 6: TYPICAL DAY */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-4xl font-bold text-center mb-12">A TYPICAL DAY ON KITE SAFARI</h2>
          </FadeIn>

          <div className="max-w-3xl mx-auto space-y-6">
            {schedule.map((item, index) => (
              <FadeIn key={index} delay={index * 0.05}>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-lg font-bold text-primary">{item.time}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        {item.description && (
                          <p className="text-muted-foreground whitespace-pre-line">{item.description}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.5}>
            <p className="text-center text-muted-foreground mt-8 italic">
              NOTE: Schedule adapts to wind & route — the goal is maximum riding.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 7: PRICING & OPTIONS */}
      <section id="pricing" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-4xl font-bold text-center mb-4">INVESTMENT</h2>
            <p className="text-xl text-center text-muted-foreground mb-12">Choose your cabin type & add training if needed.</p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {pricingOptions.map((option, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <Card className="h-full hover:shadow-xl transition-shadow relative">
                  {option.badge && (
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full">
                      {option.badge}
                    </div>
                  )}
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-1">{option.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{option.subtitle}</p>
                    <p className="text-3xl font-bold text-primary mb-6">{option.price}</p>
                    
                    <div className="mb-6">
                      <p className="font-semibold mb-3">Includes:</p>
                      <ul className="space-y-2">
                        {option.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4">
                      <span className="font-semibold">Best for:</span> {option.bestFor}
                    </p>

                    <Button 
                      className="w-full"
                      onClick={() => openBooking('', option.title)}
                    >
                      {option.buttonText}
                    </Button>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <Card className="mb-12">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6">TRAINING & RENTAL (ADD-ONS)</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {addons.map((addon, index) => (
                    <div key={index} className="flex justify-between items-center p-4 bg-muted/50 rounded-lg">
                      <span>{addon.title}</span>
                      <span className="font-bold text-primary">{addon.price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            <FadeIn direction="left">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">PAYMENT TERMS</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• 30% deposit to secure cabin</li>
                    <li>• Rest of the money 30 days before departure</li>
                    <li>• Payment: Bank Transfer / Wise / Revolut / Crypto</li>
                  </ul>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn direction="right">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">CANCELLATION POLICY</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• &lt;30 days - deposit non refundable</li>
                    <li>• From 60 to 30 days - we can transfer deposit to the next trips with OGO Academy</li>
                    <li>• Trip cancelled by organizer → full refund</li>
                  </ul>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 8: ALTERNATIVE — COACHING ON SHORE */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4">CAN'T JOIN THE YACHT DATES?</h2>
              <p className="text-xl text-muted-foreground mb-8">Train with us on shore in Egypt or Cyprus.</p>
              
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">COACHING</h3>
                  <p className="text-3xl font-bold text-primary mb-6">10-hour package → €900</p>
                  
                  <div className="text-left mb-6">
                    <p className="font-semibold mb-3">Includes:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>1:1 or small group</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Flexible schedule</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Premium equipment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Video analysis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Safety briefing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>WhatsApp support</span>
                      </li>
                    </ul>
                  </div>

                  <p className="text-sm text-muted-foreground mb-6">
                    Not included: accommodation, meals, transport.
                  </p>

                  <Button 
                    size="lg" 
                    className="w-full"
                    onClick={() => window.open('https://wa.me/48884035225?text=Hey%20OGO%20Academy,%20I%20want%20to%20book%20private%20coaching%20in%20Egypt%20or%20Cyprus', '_blank')}
                  >
                    REQUEST PRIVATE COACHING
                  </Button>
                </CardContent>
              </Card>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 9: WHO IS THIS TRIP FOR? */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-4xl font-bold text-center mb-12">IS THIS SAFARI FOR YOU?</h2>
          </FadeIn>

          <div className="max-w-2xl mx-auto">
            <FadeIn delay={0.2}>
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Check className="w-6 h-6 text-primary" />
                    This Kite Safari is perfect if you:
                  </h3>
                  <ul className="space-y-3">
                    {whoIsItFor.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 10: FAQ */}
      <section id="faq" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-4xl font-bold text-center mb-4">COMMON QUESTIONS</h2>
            <p className="text-xl text-center text-muted-foreground mb-12">Everything You Need to Know</p>
          </FadeIn>

          <div className="max-w-3xl mx-auto">
            <FadeIn delay={0.2}>
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-background border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <span className="font-semibold">{item.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground whitespace-pre-line">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="text-center mt-8">
                <Button 
                  size="lg"
                  onClick={() => window.open('https://wa.me/48884035225?text=Hey%20OGO%20Academy,%20I%20have%20a%20question%20about%20the%20Kite%20Safari', '_blank')}
                >
                  Ask Your Question on WhatsApp
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 11: GALLERY */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-4xl font-bold text-center mb-4">EXPERIENCE KITE SAFARI</h2>
            <p className="text-xl text-center text-muted-foreground mb-12">A preview of the adventure.</p>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              '/lovable-uploads/kite-safari-action-1.jpg',
              '/lovable-uploads/kite-safari-yacht-action.jpg',
              '/lovable-uploads/kite-safari-community.jpg',
              '/lovable-uploads/kite-safari-sunset-1.jpg',
              '/lovable-uploads/kite-safari-beach.jpg',
              '/lovable-uploads/kite-safari-yacht.jpg',
              '/lovable-uploads/kite-safari-action-2.jpg',
              '/lovable-uploads/kite-safari-girl-yacht.jpg'
            ].map((src, index) => (
              <FadeIn key={index} delay={index * 0.05}>
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img 
                    src={src} 
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12: BOOKING SECTION */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: "url('/lovable-uploads/kite-safari-sunset-1.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <div className="text-center text-white mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">READY TO JOIN THE ADVENTURE?</h2>
              <p className="text-xl">Limited cabins. Prime wind season.<br/>Don't just watch — be on the yacht.</p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* LEFT: Booking */}
            <FadeIn direction="left">
              <Card className="bg-white/95 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">BOOKING</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">1</div>
                      <span className="font-semibold">Choose your dates</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">2</div>
                      <span className="font-semibold">Choose your cabin</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">3</div>
                      <span className="font-semibold">Add training (optional)</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <Button 
                      size="lg" 
                      className="w-full"
                      onClick={() => openBooking('', '')}
                    >
                      RESERVE MY CABIN
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="w-full"
                      onClick={() => window.open('https://wa.me/48884035225?text=Hey%20OGO%20Academy,%20I%20want%20the%20full%20PDF%20for%20Egypt%20Kite%20Safari', '_blank')}
                    >
                      Get Full PDF on WhatsApp
                    </Button>
                  </div>

                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p><span className="font-semibold">Early Bird Bonus:</span> Free photo pack + packing guide PDF</p>
                    <p><span className="font-semibold">Deposit:</span> 30% to secure your spot</p>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            {/* RIGHT: Questions */}
            <FadeIn direction="right">
              <Card className="bg-white/95 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">QUESTIONS / CUSTOM REQUESTS</h3>
                  
                  <ul className="space-y-3 mb-6 text-muted-foreground">
                    <li>• Family trip?</li>
                    <li>• Group booking?</li>
                    <li>• Special dates?</li>
                  </ul>

                  <div className="space-y-3">
                    <Button 
                      size="lg" 
                      className="w-full"
                      onClick={() => window.open('https://wa.me/48884035225?text=Hey%20OGO%20Academy,%20I%20have%20a%20question%20about%20the%20Kite%20Safari', '_blank')}
                    >
                      Ask on WhatsApp
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="w-full"
                      onClick={() => window.open('https://wa.me/48884035225?text=Hey%20OGO%20Academy,%20I%20want%20to%20schedule%20a%2015-min%20call%20about%20the%20Kite%20Safari', '_blank')}
                    >
                      Schedule 15-min Call
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 13: CONTACT FORM */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <FadeIn>
              <h2 className="text-4xl font-bold text-center mb-12">GET IN TOUCH</h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card>
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name *</label>
                      <input 
                        type="text" 
                        required 
                        className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <input 
                        type="email" 
                        required 
                        className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">WhatsApp / Phone</label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div className="flex items-start gap-2">
                      <input type="checkbox" required className="mt-1" />
                      <label className="text-sm text-muted-foreground">
                        I agree to be contacted via email/WhatsApp regarding my booking
                      </label>
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      SEND MY REQUEST
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      We'll respond within 24 hours (usually faster!). By submitting, you agree to our Privacy Policy.
                    </p>
                  </form>

                  <div className="mt-8 pt-8 border-t border-border">
                    <h3 className="font-bold mb-4 text-center">PREFER OTHER CHANNELS?</h3>
                    <div className="flex flex-col gap-3">
                      <Button 
                        variant="outline" 
                        className="w-full justify-start"
                        onClick={() => window.open('https://wa.me/48884035225', '_blank')}
                      >
                        WhatsApp: +48 884 035 225
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full justify-start"
                        onClick={() => window.open('https://instagram.com/ogo_kite_academy', '_blank')}
                      >
                        Instagram DM: @ogo_kite_academy
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full justify-start"
                        onClick={() => window.location.href = 'mailto:contact@ogoacademy.com'}
                      >
                        Email: contact@ogoacademy.com
                      </Button>
                    </div>
                    <p className="text-sm text-center text-muted-foreground mt-6">
                      We respond to all messages. No question is too small. No request too specific.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />

      <VietnamBookingPopup 
        open={bookingOpen}
        onOpenChange={setBookingOpen}
        preselectedDates={preselectedDates}
        preselectedPackage={preselectedPackage}
      />
    </div>
  );
};

export default KiteSafari2;
