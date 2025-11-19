import React from 'react';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Vietnam = () => {
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
              JOIN THE CAMP (from €1,500)
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
            <div className="flex items-center gap-3 px-6 py-4 bg-accent/10 rounded-lg">
              <span className="text-2xl">📅</span>
              <span className="text-lg font-medium text-foreground">20–30 January</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-4 bg-accent/10 rounded-lg">
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
                  src="/lovable-uploads/vietnam-hero-kite.jpg" 
                  alt="Vietnam kitesurfing lagoon with mountains"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              
              {/* Two smaller images side by side */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden shadow-md">
                  <img 
                    src="/lovable-uploads/about-campfire-community.jpg" 
                    alt="Evening community gathering"
                    className="w-full h-[200px] object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-md">
                  <img 
                    src="/lovable-uploads/about-sunset-reflection.jpg" 
                    alt="Vietnam nature and waterfall"
                    className="w-full h-[200px] object-cover"
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
                      Spots available: <span className="text-primary">9/12</span>
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
                      Spots available: <span className="text-primary">5/12</span>
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
                    <li>• 2 minutes walking to the lagoon</li>
                    <li>• Shared or private rooms available</li>
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
                    <li>• Airport transfer (Cam Ranh ↔ Phan Rang)</li>
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
                      <p className="font-semibold text-foreground mb-2">Included (1–2 activities):</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Sunset viewpoint / bonfire night</li>
                        <li>• Waterfall or canyon tour (depending on conditions)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-2">Optional extras (not included):</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Dalat day trip (coffee plantations, cool climate)</li>
                        <li>• Nha Trang city visit (beach, nightlife)</li>
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
                <li>• Most lunches & dinners (~€5–10/day)</li>
                <li>• Personal expenses (drinks, snacks, souvenirs)</li>
                <li>• Vietnam visa (if required — check your country rules)</li>
                <li>• Travel insurance (mandatory)</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Vietnam;
