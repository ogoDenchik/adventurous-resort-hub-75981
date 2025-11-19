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
              <div className="flex justify-center gap-2 text-3xl mb-4">
                <span>🛬</span>
                <span>🚐</span>
                <span>🍽</span>
                <span>🌅</span>
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
              <div className="flex justify-center gap-2 text-3xl mb-4 flex-wrap">
                <span>🪁</span>
                <span>🍜</span>
                <span>🏖</span>
                <span>🌅</span>
                <span>🎥</span>
                <span>🔥</span>
                <span>🛵</span>
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
              <p className="text-foreground font-semibold">
                🟦 Important:
              </p>
              <p className="text-muted-foreground mt-2">
                One of these days is dedicated to a waterfall adventure trip — beautiful nature, swimming, photos, group bonding.
              </p>
            </div>
          </div>

          {/* Card 3: Day 10 - Departure */}
          <div className="bg-background border border-border rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
            <div className="text-center mb-6">
              <div className="flex justify-center gap-2 text-3xl mb-4">
                <span>🛫</span>
                <span>💬</span>
                <span>🤝</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                DAY 10 — DEPARTURE & TRANSFERS
              </h3>
            </div>

            <div className="space-y-3 text-muted-foreground">
              <p>• Breakfast</p>
              <p>• Check-out</p>
              <p>• Group transfers to Cam Ranh Airport</p>
              <p>• Goodbye hugs & new friendships</p>
              <p>• "See you on the next trip!"</p>
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
                €1,200 – €1,400
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
                  <span className="text-muted-foreground">Accommodation — shared room (9 nights)</span>
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
                  <span className="text-muted-foreground">Group airport transfers (Cam Ranh ↔ Phan Rang)</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-muted-foreground">1–2 excursions (waterfall, market, cooking class)</span>
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
              Private room upgrade: +€150
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
                €2,500
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
                  <span className="text-muted-foreground">Full 1-on-1 coaching (or max 2 pax private group)</span>
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
                Only 4 spots per camp
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
            <Button variant="outline" className="mt-4">
              VIEW FULL TERMS & CONDITIONS
            </Button>
          </div>
        </div>

      </div>
    </div>
  </section>

  {/* Alternative - Private Sessions Section */}
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            CAN'T MAKE CAMP DATES?
          </h2>
          <p className="text-2xl text-muted-foreground mb-6">
            Book Private Sessions Instead
          </p>
          <div className="inline-block bg-primary/10 border border-primary/20 rounded-lg px-6 py-4">
            <p className="text-lg font-semibold text-foreground mb-1">
              🟣 I'm in Vietnam January 10 – March 10, 2026
            </p>
            <p className="text-muted-foreground">
              Available for private coaching outside camp dates
            </p>
          </div>
        </div>

        {/* Private Coaching Card */}
        <div className="bg-muted/30 rounded-2xl p-8 shadow-md border border-border mb-8">
          <div className="text-center mb-6">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              PRIVATE COACHING IN VIETNAM
            </h3>
            <p className="text-muted-foreground">
              Available: January 10 – March 10, 2026
            </p>
          </div>

          <div className="bg-background rounded-xl p-6 mb-6">
            <h4 className="text-2xl font-bold text-primary mb-2">
              📦 PACKAGE: 10 HOURS — €800
            </h4>
            <p className="text-lg font-semibold text-foreground mb-4">
              WHAT YOU GET
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <span className="text-muted-foreground">1-on-1 or small group (max 3–4 students)</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <span className="text-muted-foreground">Flexible scheduling (3–5 days typical)</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <span className="text-muted-foreground">Premium equipment included</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <span className="text-muted-foreground">Video analysis after sessions</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <span className="text-muted-foreground">Step-by-step methodology</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <span className="text-muted-foreground">Safety briefing & theory</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <span className="text-muted-foreground">WhatsApp support during your stay</span>
              </div>
            </div>
          </div>

          <div className="bg-background rounded-xl p-6 mb-6">
            <h4 className="text-lg font-semibold text-foreground mb-3">
              ⭐ PERFECT FOR
            </h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Those with specific travel dates</li>
              <li>• Families or friends wanting private coaching</li>
              <li>• Digital nomads already in Vietnam</li>
              <li>• Advanced riders focusing on tricks/progression</li>
            </ul>
          </div>

          <div className="bg-muted/50 rounded-xl p-6 mb-6 border border-border">
            <h4 className="text-lg font-semibold text-foreground mb-3">
              ❌ NOT INCLUDED
            </h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Accommodation (I can recommend options)</li>
              <li>• Meals</li>
              <li>• Transportation (I can help arrange)</li>
            </ul>
          </div>

          <Button className="w-full text-lg py-6">
            INQUIRE ABOUT PRIVATE SESSIONS
          </Button>
        </div>

        {/* Add-ons Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Refresh Course */}
          <div className="bg-background border border-border rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">♻️</span>
              <div>
                <h4 className="text-lg font-bold text-foreground">
                  REFRESH COURSE
                </h4>
                <p className="text-xl font-semibold text-primary">
                  €270 / 3 hours
                </p>
              </div>
            </div>
            <p className="text-muted-foreground">
              Get back in the game after a break
            </p>
          </div>

          {/* Equipment Rental */}
          <div className="bg-background border border-border rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">🪁</span>
              <div>
                <h4 className="text-lg font-bold text-foreground">
                  EQUIPMENT RENTAL
                </h4>
                <p className="text-xl font-semibold text-primary">
                  €85 / session
                </p>
              </div>
            </div>
            <p className="text-muted-foreground">
              For independent riders (skill check required)
            </p>
          </div>
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            View All Programs
          </Button>
        </div>

      </div>
    </div>
  </section>

  <Footer />
    </div>
  );
};

export default Vietnam;
