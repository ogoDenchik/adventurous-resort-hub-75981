import React, { useState, useRef, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { EnhancedBookingPopup } from '@/components/EnhancedBookingPopup';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Ship, Wind, Users, GraduationCap, CheckCircle, XCircle, Euro, Bed, Eye, Clock, Layers, Sparkles, Sun, Ruler, Anchor, PartyPopper, Wine, Calendar, MapPin, Flag, Target } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";

const KITESAFARI_WEBHOOK_URL = 'https://ogodenchik.app.n8n.cloud/webhook/11ba0950-0d0d-46ac-b106-efe6059a0c87';

const KiteSafari: React.FC = () => {
  const [bookingPopupOpen, setBookingPopupOpen] = useState(false);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);
  const [selectedCabin, setSelectedCabin] = useState<string>('');
  const [selectedCabinImage, setSelectedCabinImage] = useState<string>('/lovable-uploads/kite-safari-yacht.jpg');
  const autoplayTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const autoplayPluginRef = useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: false,
    })
  );
  const [bookingDetails, setBookingDetails] = useState<{
    packageName: string;
    location: string;
    price?: string;
    highlights?: string[];
    included?: string[];
  } | undefined>(undefined);

  // Handle user interaction - pause autoplay and resume after 10s
  const handleUserInteraction = () => {
    setIsAutoplayPaused(true);
    autoplayPluginRef.current.stop();
    
    // Clear existing timeout
    if (autoplayTimeoutRef.current) {
      clearTimeout(autoplayTimeoutRef.current);
    }
    
    // Resume autoplay after 10 seconds of no interaction
    autoplayTimeoutRef.current = setTimeout(() => {
      setIsAutoplayPaused(false);
      autoplayPluginRef.current.play();
    }, 10000);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (autoplayTimeoutRef.current) {
        clearTimeout(autoplayTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ScrollToTop />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/kite-safari-yacht.jpg" 
            alt="KiteSafari Yacht" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center text-center pt-[250px]">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 -mt-[125px] uppercase">
              EGYPT<br />KITE SAFARI
            </h1>
            <div className="mt-[115px]">
              <p className="text-base md:text-lg text-white/90 mb-6">
                7 Days • 3 Epic Kite Lagoons • Luxury Liveaboard Experience
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  size="default" 
                  className="text-sm px-5 py-2 bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto"
                  onClick={() => {
                    setSelectedCabinImage('/lovable-uploads/kite-safari-yacht.jpg');
                    setBookingDetails({
                      packageName: 'Egypt Kite Safari',
                      location: 'Red Sea, Egypt',
                      price: 'from €1,750',
                      highlights: ['7 Days', '3 Epic Lagoons', 'Luxury Yacht', 'All Meals Included'],
                      included: [
                        'Luxury liveaboard accommodation',
                        '7 days exploring 3 kite lagoons',
                        'All meals & soft drinks included',
                        'Equipment storage on yacht',
                        'Transfer from/to Marsa Alam',
                        'Experienced captain & crew'
                      ]
                    });
                    setBookingPopupOpen(true);
                  }}
                >
                  Join — from €1,750 per person
                </Button>
                
                <Button 
                  size="default" 
                  variant="outline" 
                  className="text-sm px-5 py-2 bg-white/10 border-white text-white hover:bg-white hover:text-gray-900 w-full sm:w-auto whitespace-normal h-auto"
                  onClick={() => window.open('https://wa.me/48884035225?text=Hey%20OGO%20Academy%2C%20I%20want%20to%20get%20the%20full%20PDF%20for%20the%20Egypt%20Kite%20Safari.', '_blank')}
                >
                  Request Full PDF on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar Section */}
      <section className="py-12 bg-background border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              
              {/* Students Trained */}
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <GraduationCap className="w-12 h-12 text-primary" />
                </div>
                <h4 className="font-bold text-foreground mb-1">1150+ Students Trained</h4>
                <p className="text-sm text-muted-foreground">Worldwide Experience</p>
              </div>

              {/* Non-Stop Kiting */}
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <Wind className="w-12 h-12 text-primary" />
                </div>
                <h4 className="font-bold text-foreground mb-1">7 Days Non-Stop Kiting</h4>
                <p className="text-sm text-muted-foreground">Pure Adventure</p>
              </div>

              {/* Returning Riders */}
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <Users className="w-12 h-12 text-primary" />
                </div>
                <h4 className="font-bold text-foreground mb-1">200+ Returning Riders</h4>
                <p className="text-sm text-muted-foreground">Strong Community</p>
              </div>

              {/* International Standards */}
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <Sparkles className="w-12 h-12 text-primary" />
                </div>
                <h4 className="font-bold text-foreground mb-1">International Standards</h4>
                <p className="text-sm text-muted-foreground">IKO Certified</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Dates & Availability Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground text-center mb-12 uppercase">
              DATES & AVAILABILITY
            </h2>

            <div className="max-w-2xl mx-auto mb-8">
              <Carousel
                opts={{
                  align: "center",
                  loop: true,
                }}
                plugins={[
                  Autoplay({
                    delay: 5000,
                  }),
                ]}
                className="w-full"
              >
                <CarouselContent>
                  {/* Card - April 18-25 */}
                  <CarouselItem>
                    <div className="px-4">
                      <div className="bg-background border border-border rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
                        <div className="text-center mb-6">
                          <div className="flex justify-center mb-4">
                            <Calendar className="w-12 h-12 text-primary" />
                          </div>
                          <h3 className="text-2xl font-bold text-foreground mb-2">
                            April 18–25, 2026
                          </h3>
                          <span className="inline-block bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                            🔥 ONLY 5 SPOTS LEFT
                          </span>
                        </div>

                        <div className="space-y-4 text-left">
                          <div className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                            <p className="text-muted-foreground">
                              Red Sea, Egypt — Yacht Route
                            </p>
                          </div>

                          <div className="flex items-start gap-3">
                            <Wind className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                            <p className="text-muted-foreground">
                              Perfect warm-water conditions
                            </p>
                          </div>

                          <div className="flex items-start gap-3 pt-2 border-t border-border">
                            <Target className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                            <p className="text-foreground font-semibold">
                              Spots available: <span className="text-primary">5/30</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                </CarouselContent>
              </Carousel>

              {/* Pagination Dot - single date */}
              <div className="flex justify-center gap-2 mt-6">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Kite Safari Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            
            {/* Left Side - Image Collage */}
            <div className="space-y-4">
              {/* Large top image */}
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/egypt-safari-girls.jpg" 
                  alt="Kitesurfing girls with yacht in background"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              
              {/* Two smaller images side by side */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden shadow-md">
                  <img 
                    src="/lovable-uploads/egypt-safari-jump.jpg" 
                    alt="Kiteboarder performing jump"
                    className="w-full h-[200px] object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-md">
                  <img 
                    src="/lovable-uploads/egypt-safari-yacht-group.jpg" 
                    alt="Group photo on yacht"
                    className="w-full h-[200px] object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4 uppercase">
                  WHY KITE SAFARI?
                </h2>
                <p className="text-lg text-muted-foreground">
                  Most kite trips limit you to one beach.<br />
                  Here — your hotel, restaurant, and kite station are all on the water.
                </p>
              </div>

              {/* Feature Blocks */}
              <div className="space-y-6">
                {/* Perfect Conditions */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">🌊</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-foreground mb-2 uppercase">PERFECT CONDITIONS</h3>
                    <p className="text-muted-foreground">
                      3 flat-water lagoons in one week<br />
                      Consistent wind, sandy bottom, no crowds<br />
                      Shallow safe areas + rescue boat support
                    </p>
                  </div>
                </div>

                {/* Luxury Liveaboard Experience */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">🛥</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-foreground mb-2 uppercase">LUXURY LIVEABOARD EXPERIENCE</h3>
                    <p className="text-muted-foreground">
                      Your room, food, chill zones — everything on the yacht<br />
                      Wake up on the spot — no transfers<br />
                      Jacuzzi, sun deck, snorkeling, SUP
                    </p>
                  </div>
                </div>

                {/* True All-Inclusive Value */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">💰</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-foreground mb-2 uppercase">TRUE ALL-INCLUSIVE VALUE</h3>
                    <p className="text-muted-foreground">
                      Accommodation, food, crew, fuel — included<br />
                      Daily zodiac rides to spots included<br />
                      Just ride, rest, and enjoy
                    </p>
                  </div>
                </div>

                {/* Progression-Focused */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">🧠</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-foreground mb-2 uppercase">PROGRESSION-FOCUSED</h3>
                    <p className="text-muted-foreground">
                      Top instructors with 5+ years of coaching<br />
                      Optional training packages<br />
                      Video analysis and technique breakdowns
                    </p>
                  </div>
                </div>

                {/* Community */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-foreground mb-2 uppercase">COMMUNITY</h3>
                    <p className="text-muted-foreground">
                      Riders from Europe, Ukraine, Middle East<br />
                      Solo travelers, couples, groups<br />
                      Friendships formed on board last for years
                    </p>
                  </div>
                </div>
              </div>

              {/* Closing Line */}
              <p className="text-lg text-muted-foreground italic pt-4 border-t border-border">
                This is not just a kite trip.<br />
                This is full immersion into the kitesurf lifestyle.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4 uppercase">
                WHAT'S INCLUDED
              </h2>
              <p className="text-xl text-muted-foreground uppercase">
                EVERYTHING YOU NEED
              </p>
              <p className="text-lg text-muted-foreground mt-2">
                A full Red Sea KiteSafari experience
              </p>
            </div>

            {/* Yacht Photo Carousel */}
            <div className="mb-16">
              <Carousel 
                className="w-full max-w-5xl mx-auto"
                plugins={[autoplayPluginRef.current]}
                onMouseEnter={handleUserInteraction}
              >
                <CarouselContent>
                  <CarouselItem>
                    <div className="rounded-2xl overflow-hidden">
                      <img 
                        src="/lovable-uploads/lyra-yacht-1.jpg" 
                        alt="Lyra Yacht"
                        className="w-full h-[400px] md:h-[500px] object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="rounded-2xl overflow-hidden">
                      <img 
                        src="/lovable-uploads/lyra-yacht-2.jpg" 
                        alt="Lyra Yacht Aerial View"
                        className="w-full h-[400px] md:h-[500px] object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="rounded-2xl overflow-hidden">
                      <img 
                        src="/lovable-uploads/lyra-yacht-3.jpg" 
                        alt="Yacht Deck Jacuzzi"
                        className="w-full h-[400px] md:h-[500px] object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="rounded-2xl overflow-hidden">
                      <img 
                        src="/lovable-uploads/lyra-yacht-4.jpg" 
                        alt="Yacht Deck Lounge"
                        className="w-full h-[400px] md:h-[500px] object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="rounded-2xl overflow-hidden">
                      <img 
                        src="/lovable-uploads/lyra-yacht-5.jpg" 
                        alt="Master Suite"
                        className="w-full h-[400px] md:h-[500px] object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="rounded-2xl overflow-hidden">
                      <img 
                        src="/lovable-uploads/lyra-yacht-6.jpg" 
                        alt="Yacht Lounge Area"
                        className="w-full h-[400px] md:h-[500px] object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="rounded-2xl overflow-hidden">
                      <img 
                        src="/lovable-uploads/lyra-yacht-7.jpg" 
                        alt="Yacht Cabin"
                        className="w-full h-[400px] md:h-[500px] object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="rounded-2xl overflow-hidden">
                      <img 
                        src="/lovable-uploads/lyra-yacht-8.jpg" 
                        alt="Double Cabin"
                        className="w-full h-[400px] md:h-[500px] object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="rounded-2xl overflow-hidden">
                      <img 
                        src="/lovable-uploads/lyra-yacht-9.jpg" 
                        alt="Twin Cabin"
                        className="w-full h-[400px] md:h-[500px] object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="rounded-2xl overflow-hidden">
                      <img 
                        src="/lovable-uploads/lyra-yacht-10.jpg" 
                        alt="Dining Area"
                        className="w-full h-[400px] md:h-[500px] object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="rounded-2xl overflow-hidden">
                      <img 
                        src="/lovable-uploads/lyra-lounge.jpg" 
                        alt="Yacht Lounge"
                        className="w-full h-[400px] md:h-[500px] object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="rounded-2xl overflow-hidden">
                      <img 
                        src="/lovable-uploads/lyra-master-cabin-1.jpg" 
                        alt="Master Cabin"
                        className="w-full h-[400px] md:h-[500px] object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="rounded-2xl overflow-hidden">
                      <img 
                        src="/lovable-uploads/lyra-food.jpg" 
                        alt="Yacht Food Service"
                        className="w-full h-[400px] md:h-[500px] object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="rounded-2xl overflow-hidden">
                      <img 
                        src="/lovable-uploads/lyra-yacht-night.jpg" 
                        alt="Yacht at Night"
                        className="w-full h-[400px] md:h-[500px] object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="rounded-2xl overflow-hidden">
                      <img 
                        src="/lovable-uploads/lyra-yacht-sunset.jpg" 
                        alt="Yacht at Sunset"
                        className="w-full h-[400px] md:h-[500px] object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="rounded-2xl overflow-hidden">
                      <img 
                        src="/lovable-uploads/lyra-dining.jpg" 
                        alt="Yacht Dining Area"
                        className="w-full h-[400px] md:h-[500px] object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="rounded-2xl overflow-hidden">
                      <img 
                        src="/lovable-uploads/lyra-twin-cabin.jpg" 
                        alt="Twin Cabin"
                        className="w-full h-[400px] md:h-[500px] object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="rounded-2xl overflow-hidden">
                      <img 
                        src="/lovable-uploads/lyra-bathroom.jpg" 
                        alt="Yacht Bathroom"
                        className="w-full h-[400px] md:h-[500px] object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="rounded-2xl overflow-hidden">
                      <img 
                        src="/lovable-uploads/lyra-standard-cabin.jpg" 
                        alt="Standard Cabin"
                        className="w-full h-[400px] md:h-[500px] object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="rounded-2xl overflow-hidden">
                      <img 
                        src="/lovable-uploads/lyra-shower.jpg" 
                        alt="Yacht Shower"
                        className="w-full h-[400px] md:h-[500px] object-cover"
                      />
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious 
                  className="left-4" 
                  onClick={handleUserInteraction}
                />
                <CarouselNext 
                  className="right-4"
                  onClick={handleUserInteraction}
                />
              </Carousel>
            </div>

            {/* Two-Column Grid */}
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* LEFT COLUMN */}
              <div className="space-y-10">
                
                {/* Accommodation */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl">🏠</span>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-foreground uppercase">ACCOMMODATION (ON THE YACHT)</h3>
                  </div>
                  <ul className="space-y-2 text-muted-foreground ml-16">
                    <li>• 7 days / 6 nights on a comfortable liveaboard yacht</li>
                    <li>• Twin cabins, Master Suites, Panoramic Suite (limited availability)</li>
                    <li>• Air conditioning, private/shared bathrooms</li>
                    <li>• Fresh linens, daily cleaning</li>
                    <li>• Lounge areas, sun deck, jacuzzi</li>
                    <li>• WiFi when available</li>
                  </ul>
                </div>

                {/* Food & Drinks */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl">🍽</span>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-foreground uppercase">FOOD & DRINKS</h3>
                  </div>
                  <ul className="space-y-2 text-muted-foreground ml-16">
                    <li>• 3 meals per day</li>
                    <li>• Snacks, fruits, tea, coffee, water</li>
                    <li>• BBQ party on an uninhabited island</li>
                    <li>• Vegetarian options available</li>
                  </ul>
                </div>

                {/* Kitesurfing Logistics */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl">🪁</span>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-foreground uppercase">KITESURFING LOGISTICS</h3>
                  </div>
                  <ul className="space-y-2 text-muted-foreground ml-16">
                    <li>• Daily zodiac transfers to the spot/back (300m)</li>
                    <li>• Launch/landing support</li>
                    <li>• Rescue boat on duty</li>
                    <li>• Full safety briefing</li>
                    <li>• Possibility to add coaching or rental gear</li>
                  </ul>
                </div>

              </div>

              {/* RIGHT COLUMN */}
              <div className="space-y-10">
                
                {/* Coaching Packages */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl">🎓</span>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-foreground uppercase">COACHING PACKAGES (OPTIONAL)</h3>
                  </div>
                  <div className="ml-16 space-y-2 text-muted-foreground">
                    <p className="italic">(Not included in base price)</p>
                    <ul className="space-y-2 mt-3">
                      <li>• Beginner, Intermediate, Advanced coaching</li>
                      <li>• 1:1 or small-group coaching</li>
                      <li>• Premium Duotone gear rental</li>
                      <li>• Daily or evening video analysis</li>
                      <li>• Clear progression roadmap</li>
                    </ul>
                  </div>
                </div>

                {/* Transportation */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl">🚐</span>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-foreground uppercase">TRANSPORTATION</h3>
                  </div>
                  <ul className="space-y-2 text-muted-foreground ml-16">
                    <li>• Group transfer from Hurghada (HRG) to marina</li>
                    <li>• Boat transfers between lagoons</li>
                    <li>• Zodiac to shallow water zones</li>
                  </ul>
                </div>

                {/* Activities & Extras */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl">🎉</span>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-foreground uppercase">ACTIVITIES & EXTRAS</h3>
                  </div>
                  <div className="ml-16 space-y-3">
                    <div>
                      <p className="font-semibold text-foreground mb-2">Included:</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Snorkeling reefs</li>
                        <li>• SUP boards</li>
                        <li>• Island visits</li>
                        <li>• Deck hangouts, music, chill sessions</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-2">Optional:</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Alcoholic drinks</li>
                        <li>• Extra coaching hours</li>
                        <li>• Professional photo/video shoot</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Community & Vibes */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl">👥</span>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-foreground uppercase">COMMUNITY & VIBES</h3>
                  </div>
                  <ul className="space-y-2 text-muted-foreground ml-16">
                    <li>• International group</li>
                    <li>• Evening hangouts and talks</li>
                    <li>• Shared learning, shared progress</li>
                    <li>• Perfect for solo travelers</li>
                  </ul>
                </div>

              </div>
            </div>

            {/* NOT INCLUDED Box */}
            <div className="mt-12 bg-muted/30 border-l-4 border-primary rounded-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl">⚠️</span>
                </div>
                <h3 className="text-xl font-display font-bold text-foreground uppercase">NOT INCLUDED:</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground ml-12">
                <li>• International flights</li>
                <li>• Egyptian visa</li>
                <li>• Kitesurfing lessons & rental gear</li>
                <li>• Alcohol</li>
                <li>• Travel insurance (mandatory)</li>
                <li>• Tips</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      <main className="py-20">
        <div className="container mx-auto px-4">

          {/* Typical Day Section */}
          <section className="mb-20">
            <div className="max-w-4xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4 uppercase">
                  TYPICAL DAY
                </h2>
                <p className="text-xl text-muted-foreground uppercase">
                  A TYPICAL DAY ON KITE SAFARI
                </p>
              </div>

              {/* Timeline Container */}
              <div className="relative">
                {/* Vertical Timeline Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

                {/* Timeline Items */}
                <div className="space-y-8">
                  
                  {/* Item 1 - Wake Up */}
                  <div className="relative pl-0 md:pl-16">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center md:absolute md:left-0 md:-translate-x-1/2">
                        <span className="text-2xl">☀️</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-lg font-bold text-foreground mb-1">
                          07:30 — WAKE UP ON THE WATER
                        </p>
                        <p className="text-muted-foreground">
                          Morning lagoon views. Short briefing, coffee.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Item 2 - Breakfast */}
                  <div className="relative pl-0 md:pl-16">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center md:absolute md:left-0 md:-translate-x-1/2">
                        <span className="text-2xl">🍳</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-lg font-bold text-foreground mb-1">
                          08:00 — BREAKFAST
                        </p>
                        <p className="text-muted-foreground">
                          Light buffet. Discuss wind & goals for the day.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Item 3 - First Kite Session */}
                  <div className="relative pl-0 md:pl-16">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center md:absolute md:left-0 md:-translate-x-1/2">
                        <span className="text-2xl">🪁</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-lg font-bold text-foreground mb-1">
                          09:30 — FIRST KITE SESSION
                        </p>
                        <p className="text-muted-foreground">
                          2–3 hours riding.<br />
                          Focus depends on level (water start, upwind, jumps, tricks).
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Item 4 - Lunch & Rest */}
                  <div className="relative pl-0 md:pl-16">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center md:absolute md:left-0 md:-translate-x-1/2">
                        <span className="text-2xl">🍜</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-lg font-bold text-foreground mb-1">
                          13:30 — LUNCH & REST
                        </p>
                        <p className="text-muted-foreground">
                          Back to the yacht.<br />
                          Eat → relax → snorkel → nap → review videos.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Item 5 - Second Session / Activities */}
                  <div className="relative pl-0 md:pl-16">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center md:absolute md:left-0 md:-translate-x-1/2">
                        <span className="text-2xl">🏖</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-lg font-bold text-foreground mb-1">
                          15:30 — SECOND SESSION / ACTIVITIES
                        </p>
                        <p className="text-muted-foreground">
                          Kite Session #2<br />
                          Video shooting<br />
                          SUP / snorkeling<br />
                          Technique workshop
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Item 6 - Sunset & Chill */}
                  <div className="relative pl-0 md:pl-16">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center md:absolute md:left-0 md:-translate-x-1/2">
                        <span className="text-2xl">🌅</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-lg font-bold text-foreground mb-1">
                          18:30 — SUNSET & CHILL
                        </p>
                        <p className="text-muted-foreground">
                          Music, tea, hookah (optional), sunset photos.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Item 7 - Dinner */}
                  <div className="relative pl-0 md:pl-16">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center md:absolute md:left-0 md:-translate-x-1/2">
                        <span className="text-2xl">🍽</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-lg font-bold text-foreground mb-1">
                          20:00 — DINNER
                        </p>
                        <p className="text-muted-foreground">
                          Fresh seafood, salads, rice, dessert.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Item 8 - Video Analysis / Social Time */}
                  <div className="relative pl-0 md:pl-16">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center md:absolute md:left-0 md:-translate-x-1/2">
                        <span className="text-2xl">🔥</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-lg font-bold text-foreground mb-1">
                          21:30 — VIDEO ANALYSIS / SOCIAL TIME (Party)
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Item 9 - Rest */}
                  <div className="relative pl-0 md:pl-16">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center md:absolute md:left-0 md:-translate-x-1/2">
                        <span className="text-2xl">💤</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-lg font-bold text-foreground mb-1">
                          23:00 — REST
                        </p>
                        <p className="text-muted-foreground">
                          Sleep to the sound of the sea.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Note at the bottom */}
                <div className="mt-12 p-6 bg-muted/30 rounded-xl border-l-4 border-primary">
                  <p className="text-sm text-muted-foreground italic">
                    <strong>NOTE:</strong> Schedule adapts to wind & route — the goal is maximum riding.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 uppercase">PRICING & OPTIONS</h2>
                <p className="text-xl text-muted-foreground mb-2 uppercase">INVESTMENT</p>
                <p className="text-lg text-muted-foreground uppercase">CHOOSE YOUR CABIN TYPE & ADD TRAINING IF NEEDED.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {/* Twin Cabin Card */}
                <div className="bg-card rounded-xl overflow-hidden shadow-lg border border-border hover:shadow-xl transition-all">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src="/lovable-uploads/safari-twin-cabin.jpg" 
                      alt="Twin Cabin"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-display font-bold mb-2 uppercase">Twin Cabin (Per Person)</h3>
                    <p className="text-3xl font-bold text-primary mb-4">€1,750</p>

                    <Accordion type="single" collapsible className="mb-4">
                      <AccordionItem value="twin-includes" className="border-border">
                        <AccordionTrigger className="text-sm font-semibold py-2 hover:no-underline">
                          What's included
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2 pt-1">
                            <div className="flex items-start gap-2">
                              <span className="text-primary mt-1">✔</span>
                              <span>7 days / 6 nights</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-primary mt-1">✔</span>
                              <span>3 meals daily</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-primary mt-1">✔</span>
                              <span>Snacks + drinks</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-primary mt-1">✔</span>
                              <span>All boat logistics</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-primary mt-1">✔</span>
                              <span>Rescue boat</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-primary mt-1">✔</span>
                              <span>SUP, snorkeling</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-primary mt-1">✔</span>
                              <span>WhatsApp group</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-primary mt-1">✔</span>
                              <span>Evening kite briefings</span>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    <p className="text-sm text-muted-foreground mb-6">Best for: Solo travelers, friends</p>
                    
                    <Button 
                      className="w-full"
                      onClick={() => {
                        setSelectedCabinImage('/lovable-uploads/safari-twin-cabin.jpg');
                        setBookingDetails({
                          packageName: 'Twin Cabin',
                          location: 'Egypt Kite Safari',
                          price: '€1,750 per person',
                          highlights: ['7 Days / 6 Nights', '3 Epic Lagoons', 'All Meals', 'Rescue Boat', 'Group Atmosphere'],
                          included: [
                            '7 days / 6 nights on yacht',
                            '3 meals daily + snacks',
                            'All boat logistics',
                            'Rescue boat support',
                            'SUP & snorkeling gear',
                            'WhatsApp group access',
                            'Evening kite briefings',
                            'Twin cabin accommodation'
                          ]
                        });
                        setBookingPopupOpen(true);
                      }}
                    >
                      BOOK TWIN CABIN
                    </Button>
                  </div>
                </div>

                {/* Master Suite Card - Most Popular */}
                <div className="bg-card rounded-xl overflow-hidden shadow-xl border-2 border-primary hover:shadow-2xl transition-all relative">
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold z-10">
                    MOST POPULAR
                  </div>
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src="/lovable-uploads/safari-master-suite.jpg" 
                      alt="Master Suite"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-display font-bold mb-2 uppercase">Master Suite (2 People)</h3>
                    <p className="text-3xl font-bold text-primary mb-4">€4,200 / cabin</p>

                    <Accordion type="single" collapsible className="mb-4">
                      <AccordionItem value="master-includes" className="border-border">
                        <AccordionTrigger className="text-sm font-semibold py-2 hover:no-underline">
                          What's included
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2 pt-1">
                            <p className="font-semibold mb-2">Everything in Twin Cabin +</p>
                            <div className="flex items-start gap-2">
                              <span className="text-primary mt-1">⭐</span>
                              <span>Larger cabin</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-primary mt-1">⭐</span>
                              <span>More comfort</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-primary mt-1">⭐</span>
                              <span>Better location onboard</span>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    <p className="text-sm text-muted-foreground mb-6">Best for: Couples, friends</p>
                    
                    <Button 
                      className="w-full"
                      onClick={() => {
                        setSelectedCabinImage('/lovable-uploads/safari-master-suite.jpg');
                        setBookingDetails({
                          packageName: 'Master Suite',
                          location: 'Egypt Kite Safari',
                          price: '€4,200 / cabin',
                          highlights: ['7 Days / 6 Nights', 'Larger Cabin', 'Premium Comfort', 'All Twin Cabin Benefits', 'Best Location'],
                          included: [
                            'Everything in Twin Cabin',
                            'Larger cabin space',
                            'Enhanced comfort',
                            'Better location onboard',
                            'Perfect for couples/friends'
                          ]
                        });
                        setBookingPopupOpen(true);
                      }}
                    >
                      BOOK MASTER SUITE
                    </Button>
                  </div>
                </div>

                {/* Panoramic Suite Card */}
                <div className="bg-card rounded-xl overflow-hidden shadow-lg border border-border hover:shadow-xl transition-all relative">
                  <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold z-10">
                    Only 1–2 per trip
                  </div>
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src="/lovable-uploads/safari-panoramic-suite.jpg" 
                      alt="Panoramic Suite"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-display font-bold mb-2 uppercase">Panoramic Suite (2 People)</h3>
                    <p className="text-3xl font-bold text-primary mb-4">€4,700 / cabin</p>

                    <Accordion type="single" collapsible className="mb-4">
                      <AccordionItem value="panoramic-includes" className="border-border">
                        <AccordionTrigger className="text-sm font-semibold py-2 hover:no-underline">
                          What's included
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2 pt-1">
                            <p className="font-semibold mb-2">Everything in Master Suite +</p>
                            <div className="flex items-start gap-2">
                              <span className="text-primary mt-1">⭐</span>
                              <span>Panoramic windows</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-primary mt-1">⭐</span>
                              <span>Most premium cabin</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-primary mt-1">⭐</span>
                              <span>Maximum privacy</span>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    <p className="text-sm text-muted-foreground mb-6">Best for: Couples, premium travelers</p>
                    
                    <Button 
                      className="w-full"
                      onClick={() => {
                        setSelectedCabinImage('/lovable-uploads/safari-panoramic-suite.jpg');
                        setBookingDetails({
                          packageName: 'Panoramic Suite',
                          location: 'Egypt Kite Safari',
                          price: '€4,700 / cabin',
                          highlights: ['7 Days / 6 Nights', 'Panoramic Windows', 'Most Premium Cabin', 'Maximum Privacy', 'Exclusive Experience'],
                          included: [
                            'Everything in Master Suite',
                            'Panoramic windows with ocean views',
                            'Most premium cabin on yacht',
                            'Maximum privacy & space',
                            'Only 1-2 per trip',
                            'Perfect for premium travelers'
                          ]
                        });
                        setBookingPopupOpen(true);
                      }}
                    >
                      BOOK PANORAMIC SUITE
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Add-Ons Section */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4 max-w-7xl">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-12 uppercase">
                TRAINING & RENTAL (ADD-ONS)
              </h2>
              <div className="grid md:grid-cols-4 gap-8">
                
                {/* Card 1 - Beginner Group Course */}
                <div className="bg-card rounded-xl overflow-hidden shadow-lg border border-border hover:shadow-xl transition-all p-6 flex flex-col items-center text-center">
                  <div className="text-5xl mb-4">📘</div>
                  <h3 className="text-xl font-display font-bold mb-3 uppercase">Beginner Group Course</h3>
                  <p className="text-sm text-muted-foreground mb-6 flex-grow">2h per day (full safari)</p>
                  <p className="text-3xl font-bold text-primary">€850</p>
                </div>

                {/* Card 2 - Progression Pack */}
                <div className="bg-card rounded-xl overflow-hidden shadow-lg border border-border hover:shadow-xl transition-all p-6 flex flex-col items-center text-center">
                  <div className="text-5xl mb-4">⚡</div>
                  <h3 className="text-xl font-display font-bold mb-3 uppercase">Progression Pack</h3>
                  <p className="text-sm text-muted-foreground mb-6 flex-grow">6 hours focused progression</p>
                  <p className="text-3xl font-bold text-primary">€600</p>
                </div>

                {/* Card 3 - VIP 1:1 Coaching */}
                <div className="bg-card rounded-xl overflow-hidden shadow-lg border border-border hover:shadow-xl transition-all p-6 flex flex-col items-center text-center">
                  <div className="text-5xl mb-4">👑</div>
                  <h3 className="text-xl font-display font-bold mb-3 uppercase">VIP 1:1 Coaching</h3>
                  <p className="text-sm text-muted-foreground mb-6 flex-grow">All-safari coaching + video analysis<br />(Max 2 ppl per instructor)</p>
                  <p className="text-3xl font-bold text-primary">€1500</p>
                </div>

                {/* Card 4 - Full Equipment Rental */}
                <div className="bg-card rounded-xl overflow-hidden shadow-lg border border-border hover:shadow-xl transition-all p-6 flex flex-col items-center text-center">
                  <div className="text-5xl mb-4">🪁</div>
                  <h3 className="text-xl font-display font-bold mb-3 uppercase">Full Equipment Rental</h3>
                  <p className="text-sm text-muted-foreground mb-6 flex-grow">1 week premium gear rental</p>
                  <p className="text-3xl font-bold text-primary">€600</p>
                </div>

              </div>
            </div>
          </section>

          {/* Alternative - Coaching on Shore */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 uppercase">ALTERNATIVE — COACHING ON SHORE</h2>
                <p className="text-xl md:text-2xl font-display font-semibold mb-2 uppercase">CAN&apos;T JOIN THE YACHT DATES?</p>
                <p className="text-lg text-muted-foreground uppercase">TRAIN WITH US ON SHORE IN EGYPT.</p>
              </div>

              <div className="bg-card rounded-xl p-8 shadow-lg border border-border mb-8">
                <h3 className="text-2xl font-display font-bold mb-6 text-center uppercase">COACHING — 10-HOUR PACKAGE (€900)</h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Includes Column */}
                  <div>
                    <h4 className="font-bold mb-4 text-lg">Includes:</h4>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <span className="text-primary mt-1">✔</span>
                        <span>1:1 or small group</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-primary mt-1">✔</span>
                        <span>Flexible schedule</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-primary mt-1">✔</span>
                        <span>Premium equipment</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-primary mt-1">✔</span>
                        <span>Video analysis</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-primary mt-1">✔</span>
                        <span>Safety briefing</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-primary mt-1">✔</span>
                        <span>WhatsApp support</span>
                      </div>
                    </div>
                  </div>

                  {/* Not Included Column */}
                  <div>
                    <h4 className="font-bold mb-4 text-lg">Not included:</h4>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <span className="text-destructive mt-1">✘</span>
                        <span>Accommodation</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-destructive mt-1">✘</span>
                        <span>Meals</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-destructive mt-1">✘</span>
                        <span>Transport</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <Button size="lg" className="w-full md:w-auto md:min-w-[400px] text-lg px-8 py-6">
                  REQUEST PRIVATE COACHING
                </Button>
              </div>
            </div>
          </section>

          {/* Who Is This Trip For Section */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4 uppercase">
                    WHO IS THIS TRIP FOR?
                  </h2>
                  <p className="text-2xl text-muted-foreground uppercase">
                    THIS KITE SAFARI IS PERFECT IF YOU:
                  </p>
                </div>

                {/* Single Column Layout */}
                <div className="grid lg:grid-cols-1 gap-8">
                  
                  {/* Checklist Card */}
                  <div className="bg-background rounded-2xl p-8 shadow-md border border-border">
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-2xl">✅</span>
                        </div>
                        <p className="text-lg text-foreground">Prefer adventure over resorts</p>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-2xl">✅</span>
                        </div>
                        <p className="text-lg text-foreground">Want to ride 2× daily</p>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-2xl">✅</span>
                        </div>
                        <p className="text-lg text-foreground">Love community vibes</p>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-2xl">✅</span>
                        </div>
                        <p className="text-lg text-foreground">Are OK with boat life</p>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-2xl">✅</span>
                        </div>
                        <p className="text-lg text-foreground">Want real progression</p>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-2xl">✅</span>
                        </div>
                        <p className="text-lg text-foreground">Are a beginner, intermediate, or advanced rider</p>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-2xl">✅</span>
                        </div>
                        <p className="text-lg text-foreground">Are 18+ (or 16+ with guardian)</p>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-2xl">✅</span>
                        </div>
                        <p className="text-lg text-foreground">Want the full experience — spots, islands, riding, community</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </section>

          {/* Booking Section */}
          <section className="py-20 bg-cover bg-center relative" style={{backgroundImage: "url('/lovable-uploads/kite-safari-yacht.jpg')"}}>
            <div className="absolute inset-0 bg-black/70"></div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-6xl mx-auto">
                
                {/* Section Header */}
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 uppercase">
                    READY TO JOIN THE ADVENTURE?
                  </h2>
                  <p className="text-xl text-white/90">
                    Limited cabins. Prime wind season.<br />
                    Don't just watch — be on the yacht.
                  </p>
                </div>

                {/* Two Column Booking Cards */}
                <div className="grid lg:grid-cols-2 gap-8">
                  
                  {/* Left: Booking Card */}
                  <div className="bg-background rounded-2xl p-8 shadow-xl">
                    <h3 className="text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-2 uppercase">
                      🛥 BOOKING
                    </h3>

                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">STEP 1: Choose Your Dates</h4>
                      <div className="space-y-2">
                        <label className="flex items-center gap-3 p-3 border border-border rounded-lg hover:border-primary cursor-pointer">
                          <input 
                            type="radio" 
                            name="safari-dates" 
                            value="April 11–18, 2026"
                            className="w-4 h-4"
                          />
                          <span className="text-foreground">April 11–18, 2026 <span className="text-primary">(15 spots left)</span></span>
                        </label>
                        <label className="flex items-center gap-3 p-3 border border-border rounded-lg hover:border-primary cursor-pointer">
                          <input 
                            type="radio" 
                            name="safari-dates" 
                            value="April 18–25, 2026"
                            className="w-4 h-4"
                          />
                          <span className="text-foreground">April 18–25, 2026 <span className="text-primary">(21 spots left)</span></span>
                        </label>
                        <label className="flex items-center gap-3 p-3 border border-border rounded-lg hover:border-primary cursor-pointer">
                          <input 
                            type="radio" 
                            name="safari-dates" 
                            value="April 30 – May 7, 2026"
                            className="w-4 h-4"
                          />
                          <span className="text-foreground">April 30 – May 7, 2026 <span className="text-primary">(13 spots left)</span></span>
                        </label>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">STEP 2: Choose Your Cabin</h4>
                      <div className="space-y-2">
                        <label className="flex items-center gap-3 p-3 border border-border rounded-lg hover:border-primary cursor-pointer">
                          <input 
                            type="radio" 
                            name="cabin" 
                            value="Twin Cabin"
                            className="w-4 h-4"
                            onChange={(e) => setSelectedCabin(e.target.value)}
                          />
                          <span className="text-foreground">Twin Cabin (from €1,750)</span>
                        </label>
                        <label className="flex items-center gap-3 p-3 border border-border rounded-lg hover:border-primary cursor-pointer">
                          <input 
                            type="radio" 
                            name="cabin" 
                            value="Master Suite"
                            className="w-4 h-4"
                            onChange={(e) => setSelectedCabin(e.target.value)}
                          />
                          <span className="text-foreground">Master Suite (from €3,500)</span>
                        </label>
                        <label className="flex items-center gap-3 p-3 border border-border rounded-lg hover:border-primary cursor-pointer">
                          <input 
                            type="radio" 
                            name="cabin" 
                            value="Panoramic Suite"
                            className="w-4 h-4"
                            onChange={(e) => setSelectedCabin(e.target.value)}
                          />
                          <span className="text-foreground">Panoramic Suite (from €3,700)</span>
                        </label>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">STEP 3: Add Training (Optional)</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Beginner Group Course, Progression Pack, or VIP 1:1
                      </p>
                    </div>

                    <div className="mb-6">
                      <Button 
                        className="w-full mb-3 text-lg py-6"
                        onClick={() => {
                          // Determine which cabin details to show based on selection
                          let cabinDetails;
                          let cabinImage = '/lovable-uploads/kite-safari-yacht.jpg';
                          
                          if (selectedCabin === 'Twin Cabin') {
                            cabinImage = '/lovable-uploads/safari-twin-cabin.jpg';
                            cabinDetails = {
                              packageName: 'Twin Cabin',
                              location: 'Egypt Kite Safari',
                              price: 'From €1,750 per person',
                              highlights: ['7 Days / 6 Nights', '3 Epic Lagoons', 'All Meals', 'Rescue Boat', 'Group Atmosphere'],
                              included: [
                                '7 days / 6 nights on yacht',
                                '3 meals daily + snacks',
                                'All boat logistics',
                                'Rescue boat support',
                                'SUP & snorkeling gear',
                                'WhatsApp group access',
                                'Evening kite briefings',
                                'Twin cabin accommodation'
                              ]
                            };
                          } else if (selectedCabin === 'Master Suite') {
                            cabinImage = '/lovable-uploads/safari-master-suite.jpg';
                            cabinDetails = {
                              packageName: 'Master Suite',
                              location: 'Egypt Kite Safari',
                              price: 'From €3,500 / cabin',
                              highlights: ['7 Days / 6 Nights', 'Larger Cabin', 'Premium Comfort', 'All Twin Cabin Benefits', 'Best Location'],
                              included: [
                                'Everything in Twin Cabin',
                                'Larger cabin space',
                                'Enhanced comfort',
                                'Better location onboard',
                                'Perfect for couples/friends'
                              ]
                            };
                          } else if (selectedCabin === 'Panoramic Suite') {
                            cabinImage = '/lovable-uploads/safari-panoramic-suite.jpg';
                            cabinDetails = {
                              packageName: 'Panoramic Suite',
                              location: 'Egypt Kite Safari',
                              price: 'From €3,700 / cabin',
                              highlights: ['7 Days / 6 Nights', 'Panoramic Windows', 'Most Premium Cabin', 'Maximum Privacy', 'Exclusive Experience'],
                              included: [
                                'Everything in Master Suite',
                                'Panoramic windows with ocean views',
                                'Most premium cabin on yacht',
                                'Maximum privacy & space',
                                'Only 1-2 per trip',
                                'Perfect for premium travelers'
                              ]
                            };
                          } else {
                            // Default if no cabin selected
                            cabinDetails = {
                              packageName: 'Egypt Kite Safari',
                              location: 'Red Sea, Egypt',
                              price: 'from €1,750',
                              highlights: ['7 Days', '3 Lagoons', 'Luxury Yacht', 'All Meals']
                            };
                          }
                          
                          setSelectedCabinImage(cabinImage);
                          setBookingDetails(cabinDetails);
                          setBookingPopupOpen(true);
                        }}
                      >
                        RESERVE MY CABIN
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => window.open('https://wa.me/48884035225?text=Hey%20OGO%20Academy%2C%20I%20want%20to%20get%20the%20full%20PDF%20for%20the%20Egypt%20Kite%20Safari.', '_blank')}
                      >
                        Get Full PDF on WhatsApp
                      </Button>
                    </div>


                    <div className="text-center text-sm text-muted-foreground">
                      🔒 Deposit: 30% to secure your spot
                    </div>
                  </div>

                  {/* Right: Questions / Requests Card */}
                  <div className="bg-background rounded-2xl p-8 shadow-xl">
                    <h3 className="text-2xl font-display font-bold text-foreground mb-6 uppercase">
                      QUESTIONS OR SPECIAL REQUESTS?
                    </h3>

                    <div className="mb-8 space-y-3">
                      <p className="text-foreground flex items-center gap-2">
                        <span>👨‍👩‍👧‍👦</span> Family trip?
                      </p>
                      <p className="text-foreground flex items-center gap-2">
                        <span>👥</span> Group booking?
                      </p>
                      <p className="text-foreground flex items-center gap-2">
                        <span>📅</span> Special dates?
                      </p>
                    </div>

                    <div className="space-y-4">
                      <Button 
                        className="w-full text-lg py-6"
                        onClick={() => window.open('https://wa.me/48884035225?text=Hey%20OGO%20Academy%2C%20I%20have%20questions%20about%20the%20Egypt%20Kite%20Safari.', '_blank')}
                      >
                        📱 Ask on WhatsApp
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full text-lg py-6"
                        onClick={() => window.open('https://wa.me/48884035225?text=Hey%20OGO%20Academy%2C%20I%20want%20to%20schedule%20a%2015-minute%20call%20about%20the%20Egypt%20Kite%20Safari.', '_blank')}
                      >
                        📞 Schedule 15-min Call
                      </Button>
                    </div>

                    <p className="text-center text-sm text-muted-foreground mt-6">
                      We respond within 24h (usually faster!)
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </section>

          {/* Contact Form Section */}
          <section className="py-20 bg-muted/20">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                    GET IN TOUCH
                  </h2>
                  <p className="text-xl text-muted-foreground">
                    Questions? Special Requests? Let's Talk.
                  </p>
                </div>

                {/* Contact Form */}
                <form className="bg-background rounded-2xl p-8 shadow-md border border-border mb-12">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="+1 234 567 8900"
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="consent"
                        required
                        className="mt-1 w-4 h-4 rounded border-border text-primary focus:ring-primary"
                      />
                      <label htmlFor="consent" className="text-sm text-muted-foreground">
                        I agree to be contacted via email/WhatsApp
                      </label>
                    </div>

                    <Button type="submit" className="w-full text-lg py-6">
                      SEND MY REQUEST
                    </Button>

                    <p className="text-center text-sm text-muted-foreground mt-4">
                      We'll respond within 24 hours (usually faster!).<br />
                      By submitting, you agree to our Privacy Policy.
                    </p>
                  </div>
                </form>

                {/* Alternative Contact Methods */}
                <div className="bg-background rounded-2xl p-8 shadow-md border border-border">
                  <h3 className="text-2xl font-bold text-foreground text-center mb-8">
                    ALTERNATIVE CHANNELS
                  </h3>

                  <div className="space-y-6">
                    <a 
                      href="https://wa.me/48884035225?text=Hey%2C%20I%27m%20interested%20in%20the%20Egypt%20Kite%20Safari."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                    >
                      <span className="text-3xl">📱</span>
                      <div>
                        <p className="font-semibold text-foreground mb-1">WhatsApp: <span className="whitespace-nowrap">+48 884 035 225</span></p>
                        <p className="text-sm text-muted-foreground">→ Fastest response</p>
                      </div>
                    </a>

                    <a 
                      href="https://www.instagram.com/ogo_kite_academy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                    >
                      <span className="text-3xl">📸</span>
                      <div>
                        <p className="font-semibold text-foreground mb-1">Instagram: @ogo_kite_academy</p>
                        <p className="text-sm text-muted-foreground">→ Casual questions, quick answers</p>
                      </div>
                    </a>
                  </div>

                  <p className="text-center text-muted-foreground mt-8">
                    We respond to all messages.<br />
                    No question is too small.
                  </p>
                </div>

              </div>
            </div>
          </section>

          {/* Trust Badges Section */}
          <section className="py-16 bg-background border-y border-border">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                  
                  {/* International Standards */}
                  <div className="text-center">
                    <div className="text-5xl mb-3">🧾</div>
                    <h4 className="font-bold text-foreground mb-1">International Standards</h4>
                    <p className="text-sm text-muted-foreground">IKO Certified</p>
                  </div>

                  {/* Fully Insured */}
                  <div className="text-center">
                    <div className="text-5xl mb-3">🛡</div>
                    <h4 className="font-bold text-foreground mb-1">Fully Insured</h4>
                    <p className="text-sm text-muted-foreground">Coverage during lessons</p>
                  </div>

                  {/* 1150+ Students */}
                  <div className="text-center">
                    <div className="text-5xl mb-3">👥</div>
                    <h4 className="font-bold text-foreground mb-1">1150+ Students</h4>
                    <p className="text-sm text-muted-foreground">Trained Worldwide</p>
                  </div>

                  {/* 4.9/5 Rating */}
                  <div className="text-center">
                    <div className="text-5xl mb-3">⭐</div>
                    <h4 className="font-bold text-foreground mb-1">4.9 / 5 Rating</h4>
                    <p className="text-sm text-muted-foreground">Proven Results</p>
                  </div>

                  {/* 200+ Returning Riders */}
                  <div className="text-center">
                    <div className="text-5xl mb-3">🔄</div>
                    <h4 className="font-bold text-foreground mb-1">200+ Returning Riders</h4>
                    <p className="text-sm text-muted-foreground">Strong Community</p>
                  </div>

                  {/* From Zero to Hero */}
                  <div className="text-center">
                    <div className="text-5xl mb-3">⚡</div>
                    <h4 className="font-bold text-foreground mb-1">From Zero to Hero in 7 Days</h4>
                    <p className="text-sm text-muted-foreground">Rapid Progression</p>
                  </div>

                </div>
              </div>
            </div>
          </section>

          {/* Payment Terms & Cancellation Policy */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4 max-w-3xl">
              
              <Accordion type="single" collapsible className="space-y-4">
                {/* Payment Terms Accordion */}
                <AccordionItem value="payment-terms" className="bg-background rounded-lg px-6 border border-border">
                  <AccordionTrigger className="text-left font-bold text-xl uppercase">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-2xl">💳</span>
                      </div>
                      <span>PAYMENT TERMS</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 pt-4">
                      <div>
                        <h4 className="text-lg font-bold mb-3">How Payment Works</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• <strong>30% Deposit</strong> — Required to secure your cabin</li>
                          <li>• <strong>Remaining 70%</strong> — Due 30 days before departure</li>
                          <li>• Your booking is confirmed only after the deposit has been received</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-bold mb-3">Payment Methods</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• <strong>Bank Transfer</strong> — Direct transfer to our bank account</li>
                          <li>• <strong>Wise</strong> — Fast and low-fee international transfer</li>
                          <li>• <strong>Revolut</strong> — Quick transfer option</li>
                          <li>• <strong>Crypto</strong> — USDT or BTC (contact us for details)</li>
                        </ul>
                      </div>

                      <div className="bg-accent/10 p-4 rounded-lg border border-border mt-4">
                        <p className="text-sm text-foreground">
                          <strong>Note:</strong> Payment details will be provided after you submit your booking request. All prices are in EUR (€).
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Cancellation Policy Accordion */}
                <AccordionItem value="cancellation-policy" className="bg-background rounded-lg px-6 border border-border">
                  <AccordionTrigger className="text-left font-bold text-xl uppercase">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-2xl">📅</span>
                      </div>
                      <span>CANCELLATION POLICY</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 pt-4">
                      <div>
                        <h4 className="text-lg font-bold mb-3">Deposit Refund Window</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• <strong>Within 7 days</strong> after payment — Deposit is fully refundable</li>
                          <li>• <strong>After 7 days</strong> — Deposit becomes non-refundable</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold mb-3">Transfer to Another Trip</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• You can transfer your deposit to any of our future trips</li>
                          <li>• Subject to availability at the new dates</li>
                          <li>• Must be requested at least 30 days before the original trip date</li>
                          <li>• Transfer option is valid for trips within the next 12 months</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold mb-3">Full Cancellation</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Cancellations are allowed up to 1.5 months (45 days) before the trip start date</li>
                          <li>• If you cancel within this period:
                            <ul className="ml-6 mt-1">
                              <li>- You receive a 50% refund of the trip price, or</li>
                              <li>- You may transfer your full deposit to another future trip</li>
                            </ul>
                          </li>
                          <li>• Cancellations made less than 45 days before the trip are non-refundable</li>
                        </ul>
                      </div>

                      <div className="bg-accent/10 p-4 rounded-lg border border-border mt-4">
                        <p className="text-sm text-foreground">
                          <strong>Important:</strong> We recommend purchasing travel insurance that covers trip cancellations for maximum flexibility.
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Insurance Accordion */}
                <AccordionItem value="insurance" className="bg-background rounded-lg px-6 border border-border">
                  <AccordionTrigger className="text-left font-bold text-xl uppercase">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-2xl">🛡</span>
                      </div>
                      <span>INSURANCE</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 pt-4">
                      <div>
                        <h4 className="text-lg font-bold mb-3">What We Cover</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• <strong>Lesson Coverage</strong> — All students are covered during kitesurfing lessons</li>
                          <li>• <strong>Equipment Insurance</strong> — Our equipment is insured during structured sessions</li>
                          <li>• <strong>Instructor Liability</strong> — Professional liability insurance for all instructors</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold mb-3">What You Must Have</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• <strong>Personal Travel Insurance</strong> — Required for all participants</li>
                          <li>• Must include coverage for water sports and extreme activities</li>
                          <li>• Should cover medical expenses, emergency evacuation, and repatriation</li>
                          <li>• Recommended: Trip cancellation coverage</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold mb-3">Liability Waiver</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• By participating, you acknowledge that kitesurfing is an extreme sport with inherent risks</li>
                          <li>• The organizer is not liable for injuries, equipment loss, or personal damages occurring outside of structured lessons</li>
                          <li>• All participants must sign a liability waiver before starting the safari</li>
                        </ul>
                      </div>

                      <div className="bg-accent/10 p-4 rounded-lg border border-border mt-4">
                        <p className="text-sm text-foreground">
                          <strong>Recommendation:</strong> We suggest providers like World Nomads, SafetyWing, or True Traveller that specifically cover kitesurfing activities.
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Terms & Conditions Accordion */}
                <AccordionItem value="terms-conditions" className="bg-background rounded-lg px-6 border border-border">
                  <AccordionTrigger className="text-left font-bold text-xl uppercase">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-2xl">📋</span>
                      </div>
                      <span>FULL TERMS & CONDITIONS</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6 pt-4">
                      
                      {/* Section 1 */}
                      <div>
                        <h4 className="text-lg font-bold mb-2">1. Booking & Payment</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• A deposit is required to secure your spot at the safari.</li>
                          <li>• The remaining balance must be paid no later than 30 days before the safari start date.</li>
                          <li>• Your booking is confirmed only after the deposit has been received.</li>
                        </ul>
                      </div>

                      {/* Section 2 */}
                      <div>
                        <h4 className="text-lg font-bold mb-2">2. Cancellation Policy</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Cancellations are allowed only up to 1.5 months (45 days) before the safari start date.</li>
                          <li>• If you cancel within this period:
                            <ul className="ml-6 mt-1">
                              <li>- You receive a 50% refund of the safari price, or</li>
                              <li>- You may transfer your full deposit to another future safari (subject to availability).</li>
                            </ul>
                          </li>
                          <li>• Cancellations made later than 45 days before the safari are non-refundable.</li>
                        </ul>
                      </div>

                      {/* Section 3 */}
                      <div>
                        <h4 className="text-lg font-bold mb-2">3. Travel Arrangements</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Participants are responsible for booking their own flights.</li>
                          <li>• The organizer is not responsible for missed flights, delays, or travel disruptions.</li>
                          <li>• Transfer to the marina is provided from the specified airport stated in safari details.</li>
                        </ul>
                      </div>

                      {/* Section 4 */}
                      <div>
                        <h4 className="text-lg font-bold mb-2">4. Insurance</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• All participants must have valid travel and medical insurance, including coverage for water sports.</li>
                          <li>• The organizer is not responsible for accidents, injuries, or loss/damage of personal items.</li>
                        </ul>
                      </div>

                      {/* Section 5 */}
                      <div>
                        <h4 className="text-lg font-bold mb-2">5. Equipment</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Rental equipment is available upon request and subject to availability.</li>
                          <li>• Participants are responsible for any damage caused to rental gear during use.</li>
                        </ul>
                      </div>

                      {/* Section 6 */}
                      <div>
                        <h4 className="text-lg font-bold mb-2">6. Weather Conditions</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Kitesurfing depends on natural conditions.</li>
                          <li>• No refunds are provided in case of insufficient wind or weather changes.</li>
                          <li>• In such cases, alternative activities may be offered when possible.</li>
                        </ul>
                      </div>

                      {/* Section 7 */}
                      <div>
                        <h4 className="text-lg font-bold mb-2">7. Safety Rules</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• All participants must follow the instructions of certified coaches.</li>
                          <li>• The organizer reserves the right to refuse water access to any participant acting unsafely.</li>
                        </ul>
                      </div>

                      {/* Section 8 */}
                      <div>
                        <h4 className="text-lg font-bold mb-2">8. Safari Modifications</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• The organizer may adjust the schedule, location, or daily program due to safety, weather, or logistical needs.</li>
                          <li>• Any changes will be communicated to participants as early as possible.</li>
                        </ul>
                      </div>

                      {/* Section 9 */}
                      <div>
                        <h4 className="text-lg font-bold mb-2">9. Image & Video Use</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• By joining the safari, participants agree that photos and videos taken during the trip may be used for marketing purposes unless they request otherwise.</li>
                        </ul>
                      </div>

                      {/* Section 10 */}
                      <div>
                        <h4 className="text-lg font-bold mb-2">10. Responsibility Waiver</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• By participating, you acknowledge that kitesurfing is an extreme sport and involves inherent risks.</li>
                          <li>• The organizer is not liable for injuries, equipment loss, or personal damages occurring during the safari.</li>
                        </ul>
                      </div>

                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                    COMMON QUESTIONS
                  </h2>
                  <p className="text-xl text-muted-foreground">
                    Everything You Need to Know
                  </p>
                </div>

                {/* FAQ Accordion */}
                <Accordion type="single" collapsible className="space-y-4">
                  
                  <AccordionItem value="advanced" className="bg-muted/30 rounded-lg px-6 border border-border">
                    <AccordionTrigger className="text-left font-semibold">
                      Do I need to be advanced to join the KiteSafari?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Not at all! All levels are welcome. Beginners get shallow-water spots with safety boats and coaching options. Intermediate riders progress fast thanks to perfect flat water. Advanced riders get big-air, freestyle and downwind opportunities.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="safe" className="bg-muted/30 rounded-lg px-6 border border-border">
                    <AccordionTrigger className="text-left font-semibold">
                      Is it safe for beginners?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Yes. The lagoons we visit are shallow, sandy and safe. There is a rescue boat at all times, and all instructors are certified with 5+ years experience. You can also add beginner or progression coaching.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="yacht-life" className="bg-muted/30 rounded-lg px-6 border border-border">
                    <AccordionTrigger className="text-left font-semibold">
                      What is life like on the yacht?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Very comfortable. You have AC cabins, showers, 3 meals daily, snacks, sundeck, jacuzzi, lounge areas, WiFi (when available), and a friendly crew. Think of it as a floating boutique hotel.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="wind" className="bg-muted/30 rounded-lg px-6 border border-border">
                    <AccordionTrigger className="text-left font-semibold">
                      What if the wind drops?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      It's extremely rare in the Red Sea, but if it happens — we do snorkeling, SUP, island visits, video analysis, technique workshops, or a photoshoot. You never get bored.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="included" className="bg-muted/30 rounded-lg px-6 border border-border">
                    <AccordionTrigger className="text-left font-semibold">
                      What is included in the price?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Accommodation, 3 meals daily, snacks, all boat logistics, rescue boat, SUP, snorkeling, island BBQ, and daily zodiac transfers. Coaching and equipment rental are optional add-ons.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="solo" className="bg-muted/30 rounded-lg px-6 border border-border">
                    <AccordionTrigger className="text-left font-semibold">
                      Can I join alone?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Absolutely. 70% of guests come solo. The group becomes a family by Day 2. Cabins can be shared with another solo traveler of the same gender.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="internet" className="bg-muted/30 rounded-lg px-6 border border-border">
                    <AccordionTrigger className="text-left font-semibold">
                      Will I have internet on the yacht?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Limited. Sometimes there is 4G depending on the spot. For full connectivity, bring your local SIM card with data.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="food" className="bg-muted/30 rounded-lg px-6 border border-border">
                    <AccordionTrigger className="text-left font-semibold">
                      What is the food like?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Fresh and varied: fish, chicken, rice, salads, pasta, fruits, snacks. Vegetarian options available. BBQ on an uninhabited island is a highlight.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="gear" className="bg-muted/30 rounded-lg px-6 border border-border">
                    <AccordionTrigger className="text-left font-semibold">
                      Do I need to bring my own gear?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      You can bring your gear or rent a full Duotone setup for the week. Skill check is required for rental.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="photographer" className="bg-muted/30 rounded-lg px-6 border border-border">
                    <AccordionTrigger className="text-left font-semibold">
                      Is there a photographer or videographer?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Yes. You can book a professional photo/video package or get clips during coaching and video analysis sessions.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="transport" className="bg-muted/30 rounded-lg px-6 border border-border">
                    <AccordionTrigger className="text-left font-semibold">
                      How do I get to the yacht?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Fly to Hurghada (HRG). Group transfers to the marina are included in the safari package.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="packing" className="bg-muted/30 rounded-lg px-6 border border-border">
                    <AccordionTrigger className="text-left font-semibold">
                      What should I pack?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Boardshorts/bikini, lycra/rashguard, sunscreen SPF 50, sunglasses, flip flops, towel, personal meds, waterproof bag, GoPro (optional).
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="non-kiters" className="bg-muted/30 rounded-lg px-6 border border-border">
                    <AccordionTrigger className="text-left font-semibold">
                      Can non-kiters join?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Yes. They can snorkel, relax, sunbathe, swim, explore islands — it's a great vacation even without kiting.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="group-size" className="bg-muted/30 rounded-lg px-6 border border-border">
                    <AccordionTrigger className="text-left font-semibold">
                      What is the group size?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Depending on the yacht: usually 20–28 people, plus crew and instructors.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="age" className="bg-muted/30 rounded-lg px-6 border border-border">
                    <AccordionTrigger className="text-left font-semibold">
                      What is the age requirement?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      18+ (or 16+ with guardian).
                    </AccordionContent>
                  </AccordionItem>

                </Accordion>

                <div className="text-center mt-12">
                  <Button 
                    size="lg" 
                    variant="outline"
                    onClick={() => window.open('https://wa.me/48884035225', '_blank')}
                  >
                    Ask Your Question on WhatsApp
                  </Button>
                </div>

              </div>
            </div>
          </section>

        </div>
      </main>
      
      <EnhancedBookingPopup 
        open={bookingPopupOpen} 
        onOpenChange={setBookingPopupOpen}
        backgroundImage={selectedCabinImage}
        title="Book Egypt Kite Safari"
        description="Fill in your details and we'll get back to you shortly"
        bookingDetails={bookingDetails}
        webhookUrl={KITESAFARI_WEBHOOK_URL}
        leadSource="Kite Safari Booking"
      />
      
      <Footer />
    </div>
  );
};

export default KiteSafari;
