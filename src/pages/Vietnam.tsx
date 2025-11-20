import React from 'react';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

const Vietnam = () => {
  const [termsOpen, setTermsOpen] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(/lovable-uploads/vietnam-hero-kite.jpg)`,
          }}
        />
        
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4 z-20 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-4">
            VIETNAM KITE CAMP
          </h1>
          
          <p className="text-2xl md:text-3xl text-white font-semibold mb-2">
            Ride. Explore. Connect.
          </p>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            10 Days in Asia's Hidden Kitesurfing Paradise
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Join the Camp from €2040
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 bg-white/10 border-white text-white hover:bg-white hover:text-gray-900"
            >
              Book Private Sessions
            </Button>
          </div>
        </div>
      </section>

      {/* Camp Dates Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h3 className="text-2xl font-bold text-foreground mb-6">2026 CAMP DATES</h3>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex items-center gap-3 px-6 py-4 bg-accent/10 rounded-lg border-2 border-foreground">
              <span className="text-2xl">📅</span>
              <span className="text-lg font-medium text-foreground">20–30 January</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-4 bg-accent/10 rounded-lg border-2 border-foreground">
              <span className="text-2xl">📅</span>
              <span className="text-lg font-medium text-foreground">13–23 February</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Vietnam Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            
            {/* Left Side - Image Collage */}
            <div className="space-y-4">
              {/* Large top image */}
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/vietnam-camp-date-1.jpg" 
                  alt="Vietnam kitesurfing beach with equipment"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              
              {/* Two smaller images side by side */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden shadow-md">
                  <img 
                    src="/lovable-uploads/vietnam-waterfall-new.jpg" 
                    alt="Beautiful Vietnam waterfall with mountains"
                    className="w-full h-[200px] object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-md">
                  <img 
                    src="/lovable-uploads/vietnam-camp-date-3.jpg" 
                    alt="Kitesurfing students with instructor"
                    className="w-full h-[200px] object-cover object-[center_20%]"
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                  WHY VIETNAM?
                </h2>
                <p className="text-lg text-muted-foreground">
                  Most kite destinations are crowded, expensive, or both.<br />
                  Vietnam is different.
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
                      Flat shallow water ideal for learning<br />
                      Consistent wind Jan-Mar (15-25 knots)<br />
                      Warm climate — no wetsuit needed
                    </p>
                  </div>
                </div>

                {/* Untouched Beauty */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">🏞</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">UNTOUCHED BEAUTY</h3>
                    <p className="text-muted-foreground">
                      Phan Rang: one of Asia's best-kept secrets<br />
                      Stunning mountains meet turquoise water<br />
                      Uncrowded spots, authentic local vibes
                    </p>
                  </div>
                </div>

                {/* Incredible Value */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">💰</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">INCREDIBLE VALUE</h3>
                    <p className="text-muted-foreground">
                      World-class training at realistic prices<br />
                      Food, transport, activities — all affordable<br />
                      More adventure, less tourist trap
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
                      Meet like-minded riders from around the world<br />
                      Solo travellers, couples, digital nomads<br />
                      Lifelong friendships start here
                    </p>
                  </div>
                </div>
              </div>

              {/* Closing Line */}
              <p className="text-lg text-muted-foreground italic pt-4 border-t border-border">
                This isn't just a kite lesson.<br />
                It's an adventure you'll talk about for years.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* When & Where Section - Camp Dates */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground text-center mb-12">
              WHEN & WHERE
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* January Camp Card */}
              <div className="bg-background border border-border rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="text-center mb-6">
                  <span className="text-5xl mb-4 block">📅</span>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    20–30 January 2026
                  </h3>
                </div>

                <div className="space-y-4 text-left">
                  <div className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0">📍</span>
                    <p className="text-muted-foreground">
                      Phan Rang, Ninh Thuan Province
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0">🌬</span>
                    <p className="text-muted-foreground">
                      Prime wind season
                    </p>
                  </div>

                  <div className="flex items-start gap-3 pt-2 border-t border-border">
                    <span className="text-xl flex-shrink-0">🎯</span>
                    <p className="text-foreground font-semibold">
                      Spots available: <span className="text-primary">6/8</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* February Camp Card */}
              <div className="bg-background border border-border rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="text-center mb-6">
                  <span className="text-5xl mb-4 block">📅</span>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    13–23 February 2026
                  </h3>
                </div>

                <div className="space-y-4 text-left">
                  <div className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0">📍</span>
                    <p className="text-muted-foreground">
                      Phan Rang, Ninh Thuan Province
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0">🌅</span>
                    <p className="text-muted-foreground">
                      Warmest period of the season
                    </p>
                  </div>

                  <div className="flex items-start gap-3 pt-2 border-t border-border">
                    <span className="text-xl flex-shrink-0">🔥</span>
                    <p className="text-foreground font-semibold">
                      Spots available: <span className="text-primary">4/8</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                EVERYTHING YOU NEED
              </h2>
              <p className="text-xl text-muted-foreground">
                All-Inclusive Experience
              </p>
            </div>

            {/* Accommodation Photo Carousel */}
            <div className="mb-16">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                plugins={[
                  Autoplay({
                    delay: 4000,
                  }),
                ]}
                className="w-full max-w-5xl mx-auto"
              >
                <CarouselContent>
                  {[
                    "/lovable-uploads/vietnam-accommodation-new-1.jpg",
                    "/lovable-uploads/vietnam-accommodation-new-2.jpg",
                    "/lovable-uploads/vietnam-accommodation-new-3.jpg",
                    "/lovable-uploads/vietnam-accommodation-new-4.jpg",
                    "/lovable-uploads/vietnam-accommodation-new-5.jpg",
                    "/lovable-uploads/vietnam-accommodation-new-6.jpg",
                    "/lovable-uploads/vietnam-accommodation-new-7.jpg",
                    "/lovable-uploads/vietnam-accommodation-new-8.jpg",
                  ].map((src, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-2">
                        <div className="rounded-xl overflow-hidden shadow-lg aspect-[4/3]">
                          <img
                            src={src}
                            alt={`Vietnam accommodation ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-0 md:-left-12" />
                <CarouselNext className="right-0 md:-right-12" />
              </Carousel>
            </div>

            {/* Two Column Grid */}
            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              
              {/* LEFT COLUMN */}
              <div className="space-y-10">
                
                {/* Accommodation */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">🏠</span>
                    <h3 className="text-2xl font-bold text-foreground">ACCOMMODATION</h3>
                  </div>
                  <ul className="space-y-2 text-muted-foreground ml-14">
                    <li>• Beachfront guesthouse / hotel</li>
                    <li>• 5 minutes walking to the lagoon</li>
                    <li>• Private room (Discount for couples: –20%)</li>
                    <li>• Fast WiFi</li>
                    <li>• Social common areas (terrace, hammocks, kitchen zone)</li>
                    <li>• Hot water, AC, laundry service available</li>
                    <li>• Safe, clean, comfortable — ideal for long stays</li>
                  </ul>
                </div>

                {/* Kitesurfing */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">🪁</span>
                    <h3 className="text-2xl font-bold text-foreground">KITESURFING</h3>
                  </div>
                  <ul className="space-y-2 text-muted-foreground ml-14">
                    <li>• 10 hours structured lessons (3–4h/day)</li>
                    <li>• Premium equipment included (kite, board, harness)</li>
                    <li>• All levels welcome (zero → advanced tricks)</li>
                    <li>• Small groups: max 3–4 students per instructor</li>
                    <li>• BbTalkin radio communication</li>
                    <li>• Video analysis after key sessions</li>
                    <li>• Theory + on-water progression</li>
                    <li>• Safety briefing & system training</li>
                  </ul>
                </div>

                {/* Food */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">🍽</span>
                    <h3 className="text-2xl font-bold text-foreground">FOOD</h3>
                  </div>
                  <ul className="space-y-2 text-muted-foreground ml-14">
                    <li>• Daily breakfast at accommodation</li>
                    <li>• Welcome dinner (Day 1 — group bonding)</li>
                    <li>• Farewell dinner (final night celebration)</li>
                    <li>• Lunches + other dinners at local restaurants</li>
                    <li>• Budget: €10–15/day</li>
                    <li>• Vietnamese cuisine = fresh, healthy, insanely delicious</li>
                  </ul>
                </div>

              </div>

              {/* RIGHT COLUMN */}
              <div className="space-y-10">
                
                {/* Transportation */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">🚐</span>
                    <h3 className="text-2xl font-bold text-foreground">TRANSPORTATION</h3>
                  </div>
                  <ul className="space-y-2 text-muted-foreground ml-14">
                    <li>• Group airport transfer from Ho Chi Minh (Tan Son Nhat Airport) to Phan Rang</li>
                    <li>• Group transfer for arrivals within set windows</li>
                    <li>• Transport for group excursions included</li>
                    <li>• Scooter rental available (optional, ~€5–8/day)</li>
                    <li>• Lagoon is near — mostly walking distance</li>
                  </ul>
                </div>

                {/* Activities & Excursions */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">🎉</span>
                    <h3 className="text-2xl font-bold text-foreground">ACTIVITIES & EXCURSIONS</h3>
                  </div>
                  <div className="ml-14 space-y-3">
                    <div>
                      <p className="font-semibold text-foreground mb-2">Included (1 activity):</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Sunset viewpoint / bonfire night</li>
                        <li>• Waterfall tour</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-2">Optional extras (not included):</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Mui Ne city visit (beach & nightlife)</li>
                        <li>• Yoga sessions (if available)</li>
                        <li>• Snorkeling/diving on nearby islands</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Community & Extras */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">👥</span>
                    <h3 className="text-2xl font-bold text-foreground">COMMUNITY & EXTRAS</h3>
                  </div>
                  <div className="ml-14 space-y-2 text-muted-foreground">
                    <p>• Meet inspiring people from all over the world</p>
                    <p>• Daily sharing sessions after kiting: feedback, tips, wins</p>
                    <p>• Supportive atmosphere — zero pressure, all progress</p>
                    <p>• Perfect for solo travellers, couples, remote workers</p>
                    <p>• Evening hangouts, local dinners, sunset missions</p>
                    <p>• Optional scooter rides to hidden spots, cafes, viewpoints</p>
                    <p>• A perfect winter escape with warm water and constant wind</p>
                    <p className="italic pt-2 border-t border-border mt-4">
                      You come for kitesurfing — you stay for the people.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* NOT INCLUDED Box */}
            <div className="mt-12 bg-muted/30 border-l-4 border-primary rounded-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">⚠️</span>
                <h3 className="text-xl font-bold text-foreground">NOT INCLUDED</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground ml-12">
                <li>• International flights to/from Vietnam</li>
                <li>• Lunches and Dinners (~€5–10/day)</li>
                <li>• Personal expenses (drinks, snacks, souvenirs)</li>
                <li>• Vietnam visa (if required — check your country rules)</li>
                <li>• Travel insurance (mandatory)</li>
              </ul>
            </div>

      </div>
    </div>
  </section>

  {/* Full Camp Schedule Section */}
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            FULL CAMP SCHEDULE
          </h2>
        </div>

        {/* Three Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Card 1: Day 1 - Arrival */}
          <div className="bg-background border border-border rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
            <div className="text-center mb-6">
              <div className="flex justify-center gap-3 text-2xl mb-4">
                <span>🛬</span>
                <span>🍽</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                DAY 1 — ARRIVAL & WELCOME
              </h3>
            </div>

            <div className="space-y-3 text-muted-foreground">
              <p>• Airport pickup throughout the day</p>
              <p>• Transfer to Phan Rang</p>
              <p>• Check-in & settle into rooms</p>
              <p>• Beach walk / chill time</p>
              <p>• 18:00 — Group meet & introductions</p>
              <p>• 19:30 — Welcome Dinner</p>
              <p>• Good rest before kiting</p>
            </div>
          </div>

          {/* Card 2: Days 2-9 - Kitesurfing & Adventure */}
          <div className="bg-background border border-border rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
            <div className="text-center mb-6">
              <div className="flex justify-center gap-3 text-2xl mb-4">
                <span>🪁</span>
                <span>🌅</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                DAYS 2–9 — KITESURFING & ADVENTURE
              </h3>
            </div>

            <div className="space-y-3 text-muted-foreground mb-6">
              <p>• Breakfast with ocean view</p>
              <p>• 3–4 hour kite session with structured progression</p>
              <p>• Lunch at a local spot (€3–5)</p>
              <p>• Afternoon session: kiting / video review / scooter exploration / beach chill</p>
              <p>• Sunset beach time</p>
              <p>• Group dinner (seafood BBQ, hot pot, etc.)</p>
              <p>• Evening social: bonfire, guitar, stories</p>
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-foreground font-semibold mb-2">
                Important:
              </p>
              <p className="text-muted-foreground">
                One of these days is dedicated to a waterfall adventure trip — beautiful nature, swimming, photos, group bonding.
              </p>
            </div>
          </div>

          {/* Card 3: Day 10 - Departure */}
          <div className="bg-background border border-border rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
            <div className="text-center mb-6">
              <div className="flex justify-center gap-3 text-2xl mb-4">
                <span>☕</span>
                <span>✈️</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                DAY 10 — DEPARTURE
              </h3>
            </div>

            <div className="space-y-3 text-muted-foreground">
              <p>• Leisurely breakfast</p>
              <p>• Final group photo & goodbyes</p>
              <p>• Check-out (flexible timing)</p>
              <p>• Group transfer to Ho Chi Minh (Tan Son Nhat Airport)</p>
              <p>• Option: Extend stay in Vietnam (I can stay longer for private sessions)</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>

  {/* Investment / Pricing Section */}
  <section className="py-20 bg-muted/30">
    <div className="container mx-auto px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            INVESTMENT
          </h2>
          <p className="text-xl text-muted-foreground">
            All-Inclusive Camp Pricing
          </p>
        </div>

        {/* Two Pricing Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          
          {/* Card 1: Standard Camp */}
          <div className="bg-background border border-border rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
            <div className="text-center mb-6">
              <h3 className="text-3xl font-bold text-foreground mb-2">
                STANDARD CAMP
              </h3>
              <div className="text-4xl font-bold text-primary mb-2">
                €2040
              </div>
              <p className="text-muted-foreground">
                10 Days — All Inclusive
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-bold text-foreground mb-4">
                WHAT'S INCLUDED
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-muted-foreground">10 hours structured kitesurfing lessons</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-muted-foreground">Premium equipment (kite, board, harness, safety gear)</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-muted-foreground">Accommodation — private room (9 nights)</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-muted-foreground">Breakfast daily</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-muted-foreground">Welcome & farewell dinners</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-muted-foreground">Group airport transfer from Ho Chi Minh (Tan Son Nhat Airport) to Phan Rang</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-muted-foreground">1 excursion included</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-muted-foreground">Video analysis</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-muted-foreground">Safety training & theory</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-muted-foreground">WhatsApp group & community</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-muted-foreground">Photo content for social media</span>
                </div>
              </div>
            </div>

            <div className="mb-6 p-4 bg-muted/50 rounded-lg">
              <p className="text-sm text-foreground mb-2">
                <strong>Group size:</strong> 3–4 students per instructor
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Perfect for:</strong> Solo travellers, budget-conscious riders, those who enjoy group energy
              </p>
            </div>

            <Button className="w-full mb-3">
              BOOK STANDARD CAMP
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              Discount for couples: –20%
            </p>
          </div>

          {/* Card 2: Private Premium Experience */}
          <div className="bg-background border-2 border-primary rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow relative">
            {/* Premium Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-bold text-sm">
                PREMIUM
              </span>
            </div>

            <div className="text-center mb-6 mt-4">
              <h3 className="text-3xl font-bold text-foreground mb-2">
                PRIVATE PREMIUM EXPERIENCE
              </h3>
              <div className="text-4xl font-bold text-primary mb-2">
                €2740
              </div>
              <p className="text-muted-foreground">
                10 Days — Full Private Coaching Upgrade
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-bold text-foreground mb-4">
                ⭐ EVERYTHING IN STANDARD + EXCLUSIVE BENEFITS
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-primary text-xl">★</span>
                  <span className="text-muted-foreground">One-to-one coaching or 2-person private group (only if both riders are the same level and learning the same trick)</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary text-xl">★</span>
                  <span className="text-muted-foreground">Direct Access to Denis for feedback & progression</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary text-xl">★</span>
                  <span className="text-muted-foreground">Customized step-by-step progression plan</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary text-xl">★</span>
                  <span className="text-muted-foreground">Extended video analysis with detailed breakdown</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary text-xl">★</span>
                  <span className="text-muted-foreground">Flexible session timing based on your goals</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary text-xl">★</span>
                  <span className="text-muted-foreground">Priority session slots</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary text-xl">★</span>
                  <span className="text-muted-foreground">Personal equipment setup tuning</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary text-xl">★</span>
                  <span className="text-muted-foreground">Advanced trick-focused drills</span>
                </div>
              </div>
            </div>

            <div className="mb-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
              <p className="text-sm text-foreground mb-2">
                <strong>Group size:</strong> 1–2 students (private sessions only)
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Perfect for:</strong> Fast-track progression, riders aiming for tricks, couples/friends wanting exclusive training, professionals & advanced students
              </p>
            </div>

            <Button className="w-full mb-3 bg-primary hover:bg-primary/90">
              BOOK PRIVATE PREMIUM
            </Button>

            <div className="text-center">
              <span className="inline-block bg-primary/20 text-primary px-4 py-1 rounded-full text-sm font-semibold">
                Only 2 spots per camp
              </span>
            </div>
          </div>

        </div>

        {/* Terms Box */}
        <div className="bg-muted/50 rounded-2xl p-8 border border-border">
          <div className="grid md:grid-cols-3 gap-8 mb-6">
            
            {/* Payment Terms */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">💳</span>
                <h4 className="text-lg font-bold text-foreground">PAYMENT TERMS</h4>
              </div>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• 30% deposit to secure your spot</li>
                <li>• Balance due 7 days before camp start</li>
                <li>• Payments via Bank Transfer, Wise, PayPal</li>
              </ul>
            </div>

            {/* Cancellation Policy */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">📅</span>
                <h4 className="text-lg font-bold text-foreground">CANCELLATION POLICY</h4>
              </div>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• 30+ days prior → Full refund minus 10% admin</li>
                <li>• 15–29 days → 50% refund</li>
                <li>• &lt;14 days → deposit non-refundable</li>
                <li>• Weather cancellations → reschedule or refund</li>
              </ul>
            </div>

            {/* Insurance */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🛡</span>
                <h4 className="text-lg font-bold text-foreground">INSURANCE</h4>
              </div>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Students covered during lessons</li>
                <li>• Personal travel insurance required</li>
              </ul>
            </div>

          </div>

          <div className="text-center">
            <Dialog open={termsOpen} onOpenChange={setTermsOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" className="mt-4">
                  VIEW FULL TERMS & CONDITIONS
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl max-h-[80vh]">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">Terms & Conditions – Kitesurf Camp</DialogTitle>
                  <DialogDescription>
                    Please read these terms carefully before booking
                  </DialogDescription>
                </DialogHeader>
                <ScrollArea className="h-[60vh] pr-4">
                  <div className="space-y-6 text-foreground">
                    
                    {/* Section 1 */}
                    <div>
                      <h3 className="text-lg font-bold mb-2">1. Booking & Payment</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• A deposit is required to secure your spot at the camp.</li>
                        <li>• The remaining balance must be paid no later than 14 days before the camp start date.</li>
                        <li>• Your booking is confirmed only after the deposit has been received.</li>
                      </ul>
                    </div>

                    {/* Section 2 */}
                    <div>
                      <h3 className="text-lg font-bold mb-2">2. Cancellation Policy</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Cancellations are allowed only up to 1.5 months (45 days) before the camp start date.</li>
                        <li>• If you cancel within this period:
                          <ul className="ml-6 mt-1">
                            <li>- You receive a 50% refund of the camp price, or</li>
                            <li>- You may transfer your full deposit to another future camp (subject to availability).</li>
                          </ul>
                        </li>
                        <li>• Cancellations made later than 45 days before the camp are non-refundable.</li>
                      </ul>
                    </div>

                    {/* Section 3 */}
                    <div>
                      <h3 className="text-lg font-bold mb-2">3. Travel Arrangements</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Participants are responsible for booking their own flights.</li>
                        <li>• The organizer is not responsible for missed flights, delays, or travel disruptions.</li>
                        <li>• Airport transfer is provided only from the specified airport stated in camp details.</li>
                      </ul>
                    </div>

                    {/* Section 4 */}
                    <div>
                      <h3 className="text-lg font-bold mb-2">4. Insurance</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• All participants must have valid travel and medical insurance, including coverage for water sports.</li>
                        <li>• The organizer is not responsible for accidents, injuries, or loss/damage of personal items.</li>
                      </ul>
                    </div>

                    {/* Section 5 */}
                    <div>
                      <h3 className="text-lg font-bold mb-2">5. Equipment</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Rental equipment is available upon request and subject to availability.</li>
                        <li>• Participants are responsible for any damage caused to rental gear during use.</li>
                      </ul>
                    </div>

                    {/* Section 6 */}
                    <div>
                      <h3 className="text-lg font-bold mb-2">6. Weather Conditions</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Kitesurfing depends on natural conditions.</li>
                        <li>• No refunds are provided in case of insufficient wind or weather changes.</li>
                        <li>• In such cases, alternative activities may be offered when possible.</li>
                      </ul>
                    </div>

                    {/* Section 7 */}
                    <div>
                      <h3 className="text-lg font-bold mb-2">7. Safety Rules</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• All participants must follow the instructions of certified coaches.</li>
                        <li>• The organizer reserves the right to refuse water access to any participant acting unsafely.</li>
                      </ul>
                    </div>

                    {/* Section 8 */}
                    <div>
                      <h3 className="text-lg font-bold mb-2">8. Camp Modifications</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• The organizer may adjust the schedule, location, or daily program due to safety, weather, or logistical needs.</li>
                        <li>• Any changes will be communicated to participants as early as possible.</li>
                      </ul>
                    </div>

                    {/* Section 9 */}
                    <div>
                      <h3 className="text-lg font-bold mb-2">9. Image & Video Use</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• By joining the camp, participants agree that photos and videos taken during the camp may be used for marketing purposes unless they request otherwise.</li>
                      </ul>
                    </div>

                    {/* Section 10 */}
                    <div>
                      <h3 className="text-lg font-bold mb-2">10. Responsibility Waiver</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• By participating, you acknowledge that kitesurfing is an extreme sport and involves inherent risks.</li>
                        <li>• The organizer is not liable for injuries, equipment loss, or personal damages occurring during the camp.</li>
                      </ul>
                    </div>

                  </div>
                </ScrollArea>
              </DialogContent>
            </Dialog>
          </div>
        </div>

      </div>
    </div>
  </section>

  {/* Who's It For Section */}
  <section className="py-20 bg-muted/30">
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            IS THIS CAMP FOR YOU?
          </h2>
          <p className="text-2xl text-muted-foreground">
            Let's Be Honest
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-1 gap-8">
          
          {/* Left Column - Who It IS For */}
          <div className="bg-background rounded-2xl p-8 shadow-md border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              This camp is perfect if you:
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-green-500 text-2xl flex-shrink-0">✅</span>
                <div>
                  <p className="font-semibold text-foreground">Love adventure over luxury</p>
                  <p className="text-muted-foreground">This is authentic Vietnam, not a 5-star resort.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-green-500 text-2xl flex-shrink-0">✅</span>
                <div>
                  <p className="font-semibold text-foreground">Want to learn systematically</p>
                  <p className="text-muted-foreground">Step-by-step progression, not random practice.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-green-500 text-2xl flex-shrink-0">✅</span>
                <div>
                  <p className="font-semibold text-foreground">Enjoy community & meeting new people</p>
                  <p className="text-muted-foreground">Solo travellers thrive here.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-green-500 text-2xl flex-shrink-0">✅</span>
                <div>
                  <p className="font-semibold text-foreground">Are open-minded & flexible</p>
                  <p className="text-muted-foreground">We adapt to wind, culture, spontaneity.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-green-500 text-2xl flex-shrink-0">✅</span>
                <div>
                  <p className="font-semibold text-foreground">Want real value for money</p>
                  <p className="text-muted-foreground">World-class training without premium prices.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-green-500 text-2xl flex-shrink-0">✅</span>
                <div>
                  <p className="font-semibold text-foreground">Are any skill level</p>
                  <p className="text-muted-foreground">Beginners to advanced riders welcome.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-green-500 text-2xl flex-shrink-0">✅</span>
                <div>
                  <p className="font-semibold text-foreground">Are 16+ years old</p>
                  <p className="text-muted-foreground">For mature, independent travellers.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-green-500 text-2xl flex-shrink-0">✅</span>
                <div>
                  <p className="font-semibold text-foreground">Want more than just lessons</p>
                  <p className="text-muted-foreground">Kitesurfing + nature + culture + friendships.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>

  {/* FAQ Section */}
  <section className="py-20 bg-background">
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
          
          <AccordionItem value="beginner" className="bg-muted/30 rounded-lg px-6 border border-border">
            <AccordionTrigger className="text-left font-semibold">
              I'm a complete beginner. Can I really learn in 10 days?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Absolutely! Most camp participants are beginners. My structured methodology breaks kitesurfing into manageable steps. By day 10, you'll be riding independently. Some even learn basic jumps!
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="solo" className="bg-muted/30 rounded-lg px-6 border border-border">
            <AccordionTrigger className="text-left font-semibold">
              I'm coming solo. Will I feel out of place?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              70-80% of participants come solo! The camp is designed to bring people together. Shared meals, group activities, and evening hangouts create instant friendships. Many past students still travel together years later.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="wind" className="bg-muted/30 rounded-lg px-6 border border-border">
            <AccordionTrigger className="text-left font-semibold">
              What if the wind is bad?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              January–March is peak season in Phan Rang with 90%+ windable days. If wind drops, we'll do theory sessions, video analysis, or explore Vietnam (waterfalls, local culture). We always make the most of every day.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="accommodation" className="bg-muted/30 rounded-lg px-6 border border-border">
            <AccordionTrigger className="text-left font-semibold">
              What's the accommodation like?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Clean, safe, comfortable guesthouse walking distance to the lagoon. Private room with hot water, AC, WiFi, common areas. Simple but cozy—perfect for adventurers, not luxury seekers. Couples receive a 20% discount.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="dietary" className="bg-muted/30 rounded-lg px-6 border border-border">
            <AccordionTrigger className="text-left font-semibold">
              I have dietary restrictions — is that okay?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Vegetarian, vegan, gluten-free — all manageable in Vietnam. Local cuisine is naturally diverse and fresh. Just let me know in advance and we'll make sure you're well-fed!
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="airport" className="bg-muted/30 rounded-lg px-6 border border-border">
            <AccordionTrigger className="text-left font-semibold">
              How do I get to Phan Rang?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Fly into Ho Chi Minh (Tan Son Nhat Airport). Group airport transfer from Ho Chi Minh to Phan Rang is included in the camp package. I coordinate group pickups throughout arrival day. Direct flights from major international hubs to Ho Chi Minh.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="visa" className="bg-muted/30 rounded-lg px-6 border border-border">
            <AccordionTrigger className="text-left font-semibold">
              Do I need a visa for Vietnam?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Depends on nationality. Many countries get 15-30 days visa-free. Others need e-visa (easy online process, ~$25). Check Vietnam immigration requirements for your passport. I'll send detailed info after booking.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="weather" className="bg-muted/30 rounded-lg px-6 border border-border">
            <AccordionTrigger className="text-left font-semibold">
              What's the weather like?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              28–32°C warm, sunny, dry season. Warm water (26°C), consistent NE wind (15-25 knots). No wetsuit needed—just boardshorts/bikini + rashguard for sun protection. Perfect winter escape!
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="extend" className="bg-muted/30 rounded-lg px-6 border border-border">
            <AccordionTrigger className="text-left font-semibold">
              Can I extend my stay?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Absolutely! Many students stay longer to explore Vietnam (Dalat, Nha Trang, Hoi An, Hanoi) or book extra private sessions. I can recommend itineraries and connect you with other camp-goers extending their trip.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="packing" className="bg-muted/30 rounded-lg px-6 border border-border">
            <AccordionTrigger className="text-left font-semibold">
              What should I bring?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Swimsuit, sunscreen (reef-safe!), rashguard, hat, sunglasses, flip-flops, light clothes, reusable water bottle. All kite gear provided. I'll send a full packing list after booking.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="advanced" className="bg-muted/30 rounded-lg px-6 border border-border">
            <AccordionTrigger className="text-left font-semibold">
              I'm advanced — will it be boring?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              No — sessions are tailored to your level. Advanced riders work on tricks (backrolls, kiteloops, board-offs), transitions, style refinement, and upwind technique. Video analysis pinpoints exactly what to improve.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="health" className="bg-muted/30 rounded-lg px-6 border border-border">
            <AccordionTrigger className="text-left font-semibold">
              COVID / health requirements?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Follow current Vietnam entry rules (check before travel). Vietnam is fully open for tourism. Travel insurance is mandatory. Bring basic meds (pain relief, stomach issues). Local clinics available if needed.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="female" className="bg-muted/30 rounded-lg px-6 border border-border">
            <AccordionTrigger className="text-left font-semibold">
              Safe for solo female travelers?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Vietnam is one of the safest countries in SE Asia. The camp community is respectful and supportive. Many female solo travelers join every camp. You'll feel safe and welcomed.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="remote" className="bg-muted/30 rounded-lg px-6 border border-border">
            <AccordionTrigger className="text-left font-semibold">
              Can I work remotely during camp?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Yes! WiFi available at accommodation and local cafes. Morning/afternoon kite sessions leave time for work. Many digital nomads balance both. Phan Rang is quiet and focused—great for remote work.
            </AccordionContent>
          </AccordionItem>

        </Accordion>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            Still Have Questions? Ask Me Directly
          </Button>
        </div>

      </div>
    </div>
  </section>

  {/* Gallery Section */}
  <section className="py-20 bg-muted/30">
    <div className="container mx-auto px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            EXPERIENCE VIETNAM
          </h2>
          <p className="text-xl text-muted-foreground">
            A Glimpse of What Awaits
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="aspect-square overflow-hidden rounded-lg">
            <img src="/lovable-uploads/vietnam-hero-kite.jpg" alt="Kitesurfing action" className="w-full h-full object-cover hover:scale-105 transition-transform" />
          </div>
          <div className="aspect-square overflow-hidden rounded-lg">
            <img src="/lovable-uploads/brazil-kite-aerial.jpg" alt="Aerial kiting view" className="w-full h-full object-cover hover:scale-105 transition-transform" />
          </div>
          <div className="aspect-square overflow-hidden rounded-lg">
            <img src="/lovable-uploads/brazil-lagoon-girl.jpg" alt="Lagoon kitesurfing" className="w-full h-full object-cover hover:scale-105 transition-transform" />
          </div>
          <div className="aspect-square overflow-hidden rounded-lg">
            <img src="/lovable-uploads/brazil-beach-lesson.jpg" alt="Beach instruction" className="w-full h-full object-cover hover:scale-105 transition-transform" />
          </div>
          <div className="aspect-square overflow-hidden rounded-lg">
            <img src="/lovable-uploads/brazil-sunset-team.jpg" alt="Sunset group" className="w-full h-full object-cover hover:scale-105 transition-transform" />
          </div>
          <div className="aspect-square overflow-hidden rounded-lg">
            <img src="/lovable-uploads/community-hug.jpg" alt="Community bonding" className="w-full h-full object-cover hover:scale-105 transition-transform" />
          </div>
          <div className="aspect-square overflow-hidden rounded-lg">
            <img src="/lovable-uploads/about-campfire-community.jpg" alt="Campfire gathering" className="w-full h-full object-cover hover:scale-105 transition-transform" />
          </div>
          <div className="aspect-square overflow-hidden rounded-lg">
            <img src="/lovable-uploads/brazil-instructor-1.jpg" alt="Instructor teaching" className="w-full h-full object-cover hover:scale-105 transition-transform" />
          </div>
          <div className="aspect-square overflow-hidden rounded-lg">
            <img src="/lovable-uploads/lyra-food.jpg" alt="Local food" className="w-full h-full object-cover hover:scale-105 transition-transform" />
          </div>
          <div className="aspect-square overflow-hidden rounded-lg">
            <img src="/lovable-uploads/brazil-location-jeri.jpg" alt="Beach landscape" className="w-full h-full object-cover hover:scale-105 transition-transform" />
          </div>
          <div className="aspect-square overflow-hidden rounded-lg">
            <img src="/lovable-uploads/about-kitesurfing-discovery.jpg" alt="Kitesurfing discovery" className="w-full h-full object-cover hover:scale-105 transition-transform" />
          </div>
          <div className="aspect-square overflow-hidden rounded-lg">
            <img src="/lovable-uploads/about-sunset-reflection.jpg" alt="Sunset reflection" className="w-full h-full object-cover hover:scale-105 transition-transform" />
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-muted-foreground mb-4">
            📸 Follow daily updates: <span className="text-primary font-semibold">@ogokiteacademy</span>
          </p>
        </div>

      </div>
    </div>
  </section>

  {/* Final Booking Section */}
  <section className="py-20 bg-cover bg-center relative" style={{backgroundImage: "url('/lovable-uploads/vietnam-hero-kite.jpg')"}}>
    <div className="absolute inset-0 bg-black/70"></div>
    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            READY TO JOIN THE ADVENTURE?
          </h2>
          <p className="text-xl text-white/90">
            Limited spots. Perfect conditions. Unforgettable experience.<br />
            Don't let this season pass you by.
          </p>
        </div>

        {/* Two Column Booking Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Left: Camp Booking Box */}
          <div className="bg-background rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              🏕 BOOK VIETNAM KITE CAMP
            </h3>

            <div className="mb-6">
              <h4 className="font-semibold text-foreground mb-3">STEP 1: Choose Your Dates</h4>
              <div className="space-y-2">
                <label className="flex items-center gap-3 p-3 border border-border rounded-lg hover:border-primary cursor-pointer">
                  <input type="radio" name="camp-dates" className="w-4 h-4" />
                  <span className="text-foreground">January 20–30, 2026 <span className="text-primary">(6 spots left)</span></span>
                </label>
                <label className="flex items-center gap-3 p-3 border border-border rounded-lg hover:border-primary cursor-pointer">
                  <input type="radio" name="camp-dates" className="w-4 h-4" />
                  <span className="text-foreground">February 13–23, 2026 <span className="text-primary">(4 spots left)</span></span>
                </label>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-foreground mb-3">STEP 2: Choose Your Package</h4>
              <div className="space-y-2">
                <label className="flex items-center gap-3 p-3 border border-border rounded-lg hover:border-primary cursor-pointer">
                  <input type="radio" name="package" className="w-4 h-4" />
                  <span className="text-foreground">Standard Camp (€2040)</span>
                </label>
                <label className="flex items-center gap-3 p-3 border border-border rounded-lg hover:border-primary cursor-pointer">
                  <input type="radio" name="package" className="w-4 h-4" />
                  <span className="text-foreground">Private Premium (€2740)</span>
                </label>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-foreground mb-3">STEP 3: Secure Your Spot</h4>
              <Button className="w-full mb-3 text-lg py-6">
                RESERVE MY SPOT NOW
              </Button>
              <Button variant="outline" className="w-full">
                I Have Questions First
              </Button>
            </div>

            <div className="p-4 bg-primary/10 rounded-lg border border-primary/20 mb-4">
              <p className="text-sm text-foreground font-semibold mb-1">🎁 Early Bird Bonus:</p>
              <p className="text-sm text-muted-foreground">Book 30+ days early → Free pro photoshoot + Vietnam travel guide PDF.</p>
            </div>

            <div className="text-center text-sm text-muted-foreground">
              🔒 Secure Booking: 30% deposit. Balance due 7 days before camp.
            </div>
          </div>

          {/* Right: Private Sessions Box */}
          <div className="bg-background rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              🎓 BOOK PRIVATE SESSIONS
            </h3>

            <div className="mb-6 p-4 bg-muted/50 rounded-lg">
              <p className="text-foreground mb-2">
                <strong>Available:</strong> January 10 – March 10 (outside camp dates)
              </p>
              <p className="text-2xl font-bold text-primary mb-2">€800 / 10 hours</p>
              <p className="text-sm text-muted-foreground">
                Optional: +€270 Refresh (3h) | +€85 Equipment Rental
              </p>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-foreground mb-3">STEP 1: Check My Availability</h4>
              <Button variant="outline" className="w-full mb-4">
                📅 View Calendar
              </Button>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-foreground mb-3">STEP 2: Tell Me Your Goals</h4>
              <Button className="w-full text-lg py-6 mb-3">
                REQUEST PRIVATE SESSIONS
              </Button>
            </div>

            <div className="border-t border-border pt-6">
              <p className="text-center text-muted-foreground mb-4">
                Need to talk first?
              </p>
              <Button variant="outline" className="w-full">
                📞 Schedule a Call
              </Button>
              <p className="text-center text-sm text-muted-foreground mt-2">
                15-minute consultation (WhatsApp/Zoom)
              </p>
            </div>

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
                Your Name *
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your full name"
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
                WhatsApp / Phone <span className="text-muted-foreground">(optional but recommended)</span>
              </label>
              <input
                type="tel"
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
                I agree to be contacted via email/WhatsApp regarding my booking
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
            PREFER OTHER CHANNELS?
          </h3>

          <div className="space-y-6">
            <a 
              href="https://wa.me/48884035225?text=Hey%2C%20I%27m%20interested%20in%20Vietnam%20Camp."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
            >
              <span className="text-3xl">📱</span>
              <div>
                <p className="font-semibold text-foreground mb-1">WhatsApp: +48 884 035 225</p>
                <p className="text-sm text-muted-foreground">→ Fastest response (I check daily, even on the water!)</p>
              </div>
            </a>

            <a 
              href="https://instagram.com/ogo_kite_academy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
            >
              <span className="text-3xl">📸</span>
              <div>
                <p className="font-semibold text-foreground mb-1">Instagram DM: @ogo_kite_academy</p>
                <p className="text-sm text-muted-foreground">→ Casual questions, quick answers</p>
              </div>
            </a>

            <a 
              href="https://t.me/+48884035225"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
            >
              <span className="text-3xl">✈️</span>
              <div>
                <p className="font-semibold text-foreground mb-1">Telegram: +48 884 035 225</p>
                <p className="text-sm text-muted-foreground">→ Secure messaging, quick replies</p>
              </div>
            </a>
          </div>

          <p className="text-center text-muted-foreground mt-8">
            We respond to all messages.<br />
            No question is too small. No request too specific.
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
          
          {/* Certificate */}
          <div className="text-center">
            <div className="text-5xl mb-3">🧾</div>
            <h4 className="font-bold text-foreground mb-1">International Standards</h4>
            <p className="text-sm text-muted-foreground">IKO Certified</p>
          </div>

          {/* Insured */}
          <div className="text-center">
            <div className="text-5xl mb-3">🛡</div>
            <h4 className="font-bold text-foreground mb-1">Fully Insured</h4>
            <p className="text-sm text-muted-foreground">Coverage during lessons</p>
          </div>

          {/* Students */}
          <div className="text-center">
            <div className="text-5xl mb-3">👥</div>
            <h4 className="font-bold text-foreground mb-1">500+ Students</h4>
            <p className="text-sm text-muted-foreground">Trained Worldwide</p>
          </div>

          {/* Rating */}
          <div className="text-center">
            <div className="text-5xl mb-3">⭐</div>
            <h4 className="font-bold text-foreground mb-1">4.9 / 5 Rating</h4>
            <p className="text-sm text-muted-foreground">Proven Results</p>
          </div>

          {/* Returning */}
          <div className="text-center">
            <div className="text-5xl mb-3">🔄</div>
            <h4 className="font-bold text-foreground mb-1">70+ Returning Riders</h4>
            <p className="text-sm text-muted-foreground">Strong Alumni Community</p>
          </div>

          {/* Personal Approach */}
          <div className="text-center">
            <div className="text-5xl mb-3">🤝</div>
            <h4 className="font-bold text-foreground mb-1">Personal Approach</h4>
            <p className="text-sm text-muted-foreground">To Everybody</p>
          </div>

        </div>
      </div>
    </div>
  </section>

  {/* Custom Vietnam Footer */}
  <footer className="bg-foreground text-background py-16">
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          
          {/* Left Column */}
          <div>
            <h3 className="text-3xl font-display font-bold mb-4">
              OGO KITE ACADEMY
            </h3>
            <p className="text-xl mb-6">Vietnam Kite Camp</p>
            
            <p className="text-background/80 mb-8 italic">
              Following the wind.<br />
              Teaching mastery.<br />
              Building community.
            </p>

            <div className="space-y-3">
              <a href="https://instagram.com/ogo_kite_academy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-background/60 transition-colors">
                <span className="text-2xl">📸</span>
                <span>Instagram: @ogo_kite_academy</span>
              </a>
              <a href="https://wa.me/48884035225" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-background/60 transition-colors">
                <span className="text-2xl">💬</span>
                <span>WhatsApp: +48 884 035 225</span>
              </a>
              <a href="https://t.me/+48884035225" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-background/60 transition-colors">
                <span className="text-2xl">✈️</span>
                <span>Telegram: +48 884 035 225</span>
              </a>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🌐</span>
                <span>Website: ogokiteacademy.com</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">QUICK LINKS</h4>
              <ul className="space-y-2 text-background/80">
                <li><a href="/" className="hover:text-background transition-colors">Back to All Programs</a></li>
                <li><a href="/vietnam" className="hover:text-background transition-colors">Private Coaching (Vietnam)</a></li>
                <li><a href="/kite-safari" className="hover:text-background transition-colors">Egypt Kite Safari</a></li>
                <li><a href="/about" className="hover:text-background transition-colors">About Denis</a></li>
                <li><a href="#faq" className="hover:text-background transition-colors">FAQ</a></li>
                <li><a href="#testimonials" className="hover:text-background transition-colors">Testimonials</a></li>
                <li><a href="/contact" className="hover:text-background transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4">LEGAL</h4>
              <ul className="space-y-2 text-background/80">
                <li><a href="#terms" className="hover:text-background transition-colors">Terms & Conditions</a></li>
                <li><a href="#cancellation" className="hover:text-background transition-colors">Cancellation Policy</a></li>
                <li><a href="#privacy" className="hover:text-background transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/80 mb-2">
            © 2025 OGO Kite Academy | All Rights Reserved
          </p>
          <p className="text-background/80 mb-4">
            Vietnam Kite Camp: January 10 – March 10, 2026
          </p>
          <p className="text-sm text-background/60">
            📍 Based in: Phan Rang, Ninh Thuan Province, Vietnam<br />
            🏆 IKO Certified Instructor | Fully Licensed & Insured
          </p>
        </div>

      </div>
    </div>
  </footer>

    </div>
  );
};

export default Vietnam;
