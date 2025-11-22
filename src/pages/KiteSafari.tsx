import React, { useState, useRef, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { BookingPopup } from '@/components/BookingPopup';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Ship, Wind, Users, GraduationCap, CheckCircle, XCircle, Euro, Bed, Eye, Clock, Layers, Sparkles, Sun, Ruler, Anchor, PartyPopper, Wine, Calendar, MapPin, Flag, Target } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";

const KiteSafari: React.FC = () => {
  const [bookingPopupOpen, setBookingPopupOpen] = useState(false);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);
  const autoplayTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const autoplayPluginRef = useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: false,
    })
  );

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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 -mt-[125px]">
              EGYPT<br />KITE SAFARI
            </h1>
            <div className="mt-[115px]">
              <p className="text-base md:text-lg text-white/90 mb-6">
                7 Days • 3 Epic Kite Lagoons • Luxury Liveaboard Experience
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  size="default" 
                  className="text-sm px-5 py-2 bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto whitespace-normal h-auto leading-tight"
                  onClick={() => setBookingPopupOpen(true)}
                >
                  JOIN THE KITE SAFARI<br />(from €1,750 per person)
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
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground text-center mb-12">
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
                  {/* Card 1 - April 11-18 */}
                  <CarouselItem>
                    <div className="px-4">
                      <div className="bg-background border border-border rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
                        <div className="text-center mb-6">
                          <div className="flex justify-center mb-4">
                            <Calendar className="w-12 h-12 text-primary" />
                          </div>
                          <h3 className="text-2xl font-bold text-foreground mb-2">
                            April 11–18, 2026
                          </h3>
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
                              Strong spring winds
                            </p>
                          </div>

                          <div className="flex items-start gap-3 pt-2 border-t border-border">
                            <Target className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                            <p className="text-foreground font-semibold">
                              Spots available: <span className="text-primary">15/30</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>

                  {/* Card 2 - April 18-25 */}
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
                        </div>

                        <div className="space-y-4 text-left">
                          <div className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                            <p className="text-muted-foreground">
                              Northern Lagoon Route
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
                              Spots available: <span className="text-primary">21/30</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>

                  {/* Card 3 - April 30 - May 7 */}
                  <CarouselItem>
                    <div className="px-4">
                      <div className="bg-background border border-border rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
                        <div className="text-center mb-6">
                          <div className="flex justify-center mb-4">
                            <Calendar className="w-12 h-12 text-primary" />
                          </div>
                          <h3 className="text-2xl font-bold text-foreground mb-2">
                            April 30 – May 7, 2026
                          </h3>
                        </div>

                        <div className="space-y-4 text-left">
                          <div className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                            <p className="text-muted-foreground">
                              Red Sea, Egypt
                            </p>
                          </div>

                          <div className="flex items-start gap-3">
                            <Flag className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                            <p className="text-muted-foreground">
                              Freeride + Progression Week
                            </p>
                          </div>

                          <div className="flex items-start gap-3 pt-2 border-t border-border">
                            <Target className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                            <p className="text-foreground font-semibold">
                              Spots available: <span className="text-primary">13/20</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                
                {/* Carousel Navigation - Hidden on mobile for cleaner look */}
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
              </Carousel>

              {/* Pagination Dots */}
              <div className="flex justify-center gap-2 mt-6">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
                <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
              </div>
            </div>

            {/* Warning Note */}
            <div className="text-center">
              <p className="text-muted-foreground flex items-center justify-center gap-2">
                <span className="text-primary">⚠️</span>
                <span>Small-group yacht trips. When cabins fill — booking closes.</span>
              </p>
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
                <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
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
                    <h3 className="text-xl font-bold text-foreground mb-2">PERFECT CONDITIONS</h3>
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
                    <h3 className="text-xl font-bold text-foreground mb-2">LUXURY LIVEABOARD EXPERIENCE</h3>
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
                    <h3 className="text-xl font-bold text-foreground mb-2">TRUE ALL-INCLUSIVE VALUE</h3>
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
                    <h3 className="text-xl font-bold text-foreground mb-2">PROGRESSION-FOCUSED</h3>
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
                    <h3 className="text-xl font-bold text-foreground mb-2">COMMUNITY</h3>
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
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                WHAT'S INCLUDED
              </h2>
              <p className="text-xl text-muted-foreground">
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
                        src="/lovable-uploads/nord-cabin-twin-1.jpg" 
                        alt="Nord Twin Cabin"
                        className="w-full h-[400px] md:h-[500px] object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="rounded-2xl overflow-hidden">
                      <img 
                        src="/lovable-uploads/nord-cabin-twin-2.jpg" 
                        alt="Nord Twin Cabin View"
                        className="w-full h-[400px] md:h-[500px] object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="rounded-2xl overflow-hidden">
                      <img 
                        src="/lovable-uploads/nord-master-suite.jpg" 
                        alt="Nord Master Suite Lounge"
                        className="w-full h-[400px] md:h-[500px] object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="rounded-2xl overflow-hidden">
                      <img 
                        src="/lovable-uploads/nord-master-suite-2.jpg" 
                        alt="Nord Master Suite"
                        className="w-full h-[400px] md:h-[500px] object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="rounded-2xl overflow-hidden">
                      <img 
                        src="/lovable-uploads/nord-dining.jpg" 
                        alt="Nord Dining Area"
                        className="w-full h-[400px] md:h-[500px] object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="rounded-2xl overflow-hidden">
                      <img 
                        src="/lovable-uploads/nord-food.jpg" 
                        alt="Delicious Food Buffet"
                        className="w-full h-[400px] md:h-[500px] object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="rounded-2xl overflow-hidden">
                      <img 
                        src="/lovable-uploads/nord-deck-plan.jpg" 
                        alt="Nord Deck Area with Sunset View"
                        className="w-full h-[400px] md:h-[500px] object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="rounded-2xl overflow-hidden">
                      <img 
                        src="/lovable-uploads/lyra-yacht-sunset.jpg" 
                        alt="Yacht Deck at Sunset"
                        className="w-full h-[400px] md:h-[500px] object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="rounded-2xl overflow-hidden">
                      <img 
                        src="/lovable-uploads/nord-yacht-sailing.jpg" 
                        alt="Nord Yacht Sailing Deck"
                        className="w-full h-[400px] md:h-[500px] object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="rounded-2xl overflow-hidden">
                      <img 
                        src="/lovable-uploads/lyra-aerial.jpg" 
                        alt="Lyra Yacht Aerial View"
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

              {/* Pagination Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {[...Array(10)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-2 h-2 rounded-full bg-muted-foreground/30"
                  />
                ))}
              </div>
            </div>

            {/* Two-Column Grid */}
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* LEFT COLUMN */}
              <div className="space-y-10">
                
                {/* Accommodation */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">🏠</span>
                    <h3 className="text-2xl font-bold text-foreground">ACCOMMODATION (ON THE YACHT)</h3>
                  </div>
                  <ul className="space-y-2 text-muted-foreground ml-14">
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
                    <span className="text-4xl">🍽</span>
                    <h3 className="text-2xl font-bold text-foreground">FOOD & DRINKS</h3>
                  </div>
                  <ul className="space-y-2 text-muted-foreground ml-14">
                    <li>• 3 meals per day</li>
                    <li>• Snacks, fruits, tea, coffee, water</li>
                    <li>• BBQ party on an uninhabited island</li>
                    <li>• Vegetarian options available</li>
                  </ul>
                </div>

                {/* Kitesurfing Logistics */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">🪁</span>
                    <h3 className="text-2xl font-bold text-foreground">KITESURFING LOGISTICS</h3>
                  </div>
                  <ul className="space-y-2 text-muted-foreground ml-14">
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
                    <span className="text-4xl">🎓</span>
                    <h3 className="text-2xl font-bold text-foreground">COACHING PACKAGES (OPTIONAL)</h3>
                  </div>
                  <div className="ml-14 space-y-2 text-muted-foreground">
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
                    <span className="text-4xl">🚐</span>
                    <h3 className="text-2xl font-bold text-foreground">TRANSPORTATION</h3>
                  </div>
                  <ul className="space-y-2 text-muted-foreground ml-14">
                    <li>• Group transfer from Hurghada (HRG) to marina</li>
                    <li>• Boat transfers between lagoons</li>
                    <li>• Zodiac to shallow water zones</li>
                  </ul>
                </div>

                {/* Activities & Extras */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">🎉</span>
                    <h3 className="text-2xl font-bold text-foreground">ACTIVITIES & EXTRAS</h3>
                  </div>
                  <div className="ml-14 space-y-3">
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
                    <span className="text-4xl">👥</span>
                    <h3 className="text-2xl font-bold text-foreground">COMMUNITY & VIBES</h3>
                  </div>
                  <ul className="space-y-2 text-muted-foreground ml-14">
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
                <span className="text-3xl">⚠️</span>
                <h3 className="text-xl font-bold text-foreground">NOT INCLUDED:</h3>
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

          {/* KiteSafari Schedule */}
          <section className="mb-20 bg-muted/30 rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8 justify-center">
              <Wind className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-display font-bold text-center">KiteSafari Schedule</h2>
            </div>
            <p className="text-center text-xl text-muted-foreground mb-12">
              What is Our Plan?
            </p>
            
            <div className="space-y-8">
              {/* Day 1 */}
              <div className="animate-fade-in">
                <Card className="hover-scale overflow-hidden">
                  <img 
                    src="/lovable-uploads/kite-safari-airplane-arrival.jpg" 
                    alt="Airplane arrival" 
                    className="w-full h-[200px] object-cover"
                  />
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Ship className="w-6 h-6 text-primary" />
                      Day 1: Arrival to Hurghada Airport
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Book your flight to Hurghada Airport, Egypt. Send us your flight details – transfer to the yacht is included!
                    </p>
                    <p className="font-semibold text-primary">
                      We'll pick you up and take you straight to the yacht. From this moment, just relax and enjoy!
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Days 2-5 */}
              <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <Card className="hover-scale overflow-hidden">
                  <img 
                    src="/lovable-uploads/kite-safari-girl-yacht.jpg" 
                    alt="Kitesurfing with yacht in background" 
                    className="w-full h-[200px] object-cover"
                  />
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Wind className="w-6 h-6 text-primary" />
                      Days 2-5: Pure Kitesurfing Action
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Pure kiting, parties, new friends, snorkeling, diving, wakeboarding.
                    </p>
                    <p className="font-semibold text-primary">
                      Disconnect from the world. Live the unique KiteSafari experience!
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Day 6 */}
              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <Card className="hover-scale overflow-hidden">
                  <img 
                    src="/lovable-uploads/kite-safari-two-girls-kiter.png" 
                    alt="Two girls and kiter flying" 
                    className="w-full h-[200px] object-cover"
                  />
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="w-6 h-6 text-primary" />
                      Day 6: Last Session & Return
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      <strong>Morning:</strong> Last kite sessions. <strong>Afternoon:</strong> Sailing back to port.
                    </p>
                    <p className="font-semibold text-foreground">
                      Evening: Pack up and prepare for departure.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Day 7 */}
              <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <Card className="hover-scale overflow-hidden">
                  <img 
                    src="/lovable-uploads/kite-safari-yacht-group.webp" 
                    alt="Yacht with group of people" 
                    className="w-full h-[200px] object-cover"
                  />
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-6 h-6 text-primary" />
                      Day 7: Departure Day
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Saying goodbye to the yacht. We'll arrange your airport transfer!
                    </p>
                    <p className="text-xl font-semibold text-primary text-center mt-6">
                      🤗 Farewells, hugs, and see you on the next adventure!
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">PRICING & OPTIONS</h2>
                <p className="text-xl text-muted-foreground mb-2">INVESTMENT</p>
                <p className="text-lg text-muted-foreground">Choose your cabin type & add training if needed.</p>
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
                    <h3 className="text-2xl font-bold mb-2">Twin Cabin (Per Person)</h3>
                    <p className="text-3xl font-bold text-primary mb-6">From €1,750</p>
                    
                    <div className="space-y-2 mb-6">
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

                    <p className="text-sm text-muted-foreground mb-6">Best for: Solo travelers, friends</p>
                    
                    <Button className="w-full">BOOK TWIN CABIN</Button>
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
                    <h3 className="text-2xl font-bold mb-2">Master Suite (2 People)</h3>
                    <p className="text-3xl font-bold text-primary mb-6">From €3,500 / cabin</p>
                    
                    <div className="space-y-2 mb-6">
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

                    <p className="text-sm text-muted-foreground mb-6">Best for: Couples, friends</p>
                    
                    <Button className="w-full">BOOK MASTER SUITE</Button>
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
                    <h3 className="text-2xl font-bold mb-2">Panoramic Suite (2 People)</h3>
                    <p className="text-3xl font-bold text-primary mb-6">From €3,700 / cabin</p>
                    
                    <div className="space-y-2 mb-6">
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

                    <p className="text-sm text-muted-foreground mb-6">Best for: Couples, premium travelers</p>
                    
                    <Button className="w-full">BOOK PANORAMIC SUITE</Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Add-Ons Section */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
                
                {/* Card 1 - Beginner Group Course */}
                <div className="bg-card rounded-xl overflow-hidden shadow-lg border border-border hover:shadow-xl transition-all p-6 flex flex-col items-center text-center">
                  <div className="text-5xl mb-4">📘</div>
                  <h3 className="text-xl font-bold mb-3">Beginner Group Course</h3>
                  <p className="text-sm text-muted-foreground mb-6 flex-grow">3h per day (full safari)</p>
                  <p className="text-3xl font-bold text-primary">€900</p>
                </div>

                {/* Card 2 - Progression Pack */}
                <div className="bg-card rounded-xl overflow-hidden shadow-lg border border-border hover:shadow-xl transition-all p-6 flex flex-col items-center text-center">
                  <div className="text-5xl mb-4">⚡</div>
                  <h3 className="text-xl font-bold mb-3">Progression Pack</h3>
                  <p className="text-sm text-muted-foreground mb-6 flex-grow">6 hours focused progression</p>
                  <p className="text-3xl font-bold text-primary">€600</p>
                </div>

                {/* Card 3 - VIP 1:1 Coaching */}
                <div className="bg-card rounded-xl overflow-hidden shadow-lg border border-border hover:shadow-xl transition-all p-6 flex flex-col items-center text-center">
                  <div className="text-5xl mb-4">👑</div>
                  <h3 className="text-xl font-bold mb-3">VIP 1:1 Coaching</h3>
                  <p className="text-sm text-muted-foreground mb-6 flex-grow">All-safari coaching + video analysis<br />(Max 2 ppl per instructor)</p>
                  <p className="text-3xl font-bold text-primary">€1500</p>
                </div>

                {/* Card 4 - Full Equipment Rental */}
                <div className="bg-card rounded-xl overflow-hidden shadow-lg border border-border hover:shadow-xl transition-all p-6 flex flex-col items-center text-center">
                  <div className="text-5xl mb-4">🪁</div>
                  <h3 className="text-xl font-bold mb-3">Full Equipment Rental</h3>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">ALTERNATIVE — COACHING ON SHORE</h2>
                <p className="text-xl md:text-2xl font-semibold mb-2">CAN&apos;T JOIN THE YACHT DATES?</p>
                <p className="text-lg text-muted-foreground">Train with us on shore in Egypt.</p>
              </div>

              <div className="bg-card rounded-xl p-8 shadow-lg border border-border mb-8">
                <h3 className="text-2xl font-bold mb-6 text-center">COACHING — 10-HOUR PACKAGE (€900)</h3>
                
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

          {/* Payment Terms & Cancellation Policy */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4 max-w-3xl">
              
              {/* Payment Terms Block */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">💳</span>
                  <h3 className="text-2xl font-bold text-foreground">PAYMENT TERMS</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">💳</span>
                    <p className="text-lg text-muted-foreground">30% deposit to secure cabin</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">💳</span>
                    <p className="text-lg text-muted-foreground">Remaining balance due 30 days before departure</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">💳</span>
                    <p className="text-lg text-muted-foreground">Payment options: Bank Transfer / Wise / Revolut / Crypto</p>
                  </div>
                </div>
              </div>

              {/* Divider Line */}
              <div className="border-t border-border my-8"></div>

              {/* Cancellation Policy Block */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">❗</span>
                  <h3 className="text-2xl font-bold text-foreground">CANCELLATION POLICY</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">❗</span>
                    <p className="text-lg text-muted-foreground">Less than 30 days — deposit non-refundable</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">❗</span>
                    <p className="text-lg text-muted-foreground">60 to 30 days — deposit can be transferred to the next OGO Academy trip</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">❗</span>
                    <p className="text-lg text-muted-foreground">If the trip is cancelled by the organizer → full refund</p>
                  </div>
                </div>
              </div>

            </div>
          </section>

        </div>
      </main>
      
      <BookingPopup 
        open={bookingPopupOpen} 
        onOpenChange={setBookingPopupOpen} 
      />
      
      <Footer />
    </div>
  );
};

export default KiteSafari;
