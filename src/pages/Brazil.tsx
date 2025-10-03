import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { Button } from '@/components/ui/button';
import { PlaneLanding, PlaneTakeoff } from 'lucide-react';

const Brazil: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ScrollToTop />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10" />
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/brazil-hero-team.png" 
            alt="Brazil Kitesurf Adventure" 
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.8)' }}
          />
        </div>
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 animate-fade-in">
            Brazil
          </h1>
          <p className="text-2xl md:text-4xl mb-12 font-light">
            2 Weeks of Pure Kitesurfing Freedom
          </p>
          <Button size="lg" className="text-lg px-8 py-6">
            Book Your Adventure
          </Button>
        </div>
      </section>

      <main className="pb-20">
        {/* Why Brazil - Image Split */}
        <section className="relative">
          <div className="grid md:grid-cols-2">
            {/* Image */}
            <div className="relative h-[60vh] md:h-screen">
              <img 
                src="/lovable-uploads/brazil-instructor-1.jpg" 
                alt="Professional Kitesurfing Training" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Content */}
            <div className="flex items-center bg-background">
              <div className="p-8 md:p-16 lg:p-24">
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
                  Why Brazil?
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground">
                  <p>
                    Wind every single day. Warm water. Endless lagoons.
                  </p>
                  <p>
                    Northern coast of Brazil offers the most diverse kite spots on the planet: from butter-flat lagoons to ocean waves and mangrove channels.
                  </p>
                  <p className="text-xl font-semibold text-foreground">
                    Progress faster than anywhere else.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Training Section */}
        <section className="relative">
          <div className="grid md:grid-cols-2">
            {/* Content */}
            <div className="flex items-center bg-muted/30 order-2 md:order-1">
              <div className="p-8 md:p-16 lg:p-24">
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
                  Learn from the Best
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground">
                  <p>
                    5+ years of experience. Certified instructors. Premium Duotone equipment. BbTalkin radio helmets.
                  </p>
                  <p>
                    Every lesson is designed to maximize your progress and confidence on the water.
                  </p>
                  <div className="pt-6">
                    <p className="text-foreground font-semibold mb-2">For everyone:</p>
                    <ul className="space-y-2">
                      <li>✓ Complete beginners</li>
                      <li>✓ Intermediate riders</li>
                      <li>✓ Advanced kiteboarders</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Image */}
            <div className="relative h-[60vh] md:h-screen order-1 md:order-2">
              <img 
                src="/lovable-uploads/brazil-beach-lesson.jpg" 
                alt="Kitesurfing Lessons on Brazilian Beach" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* What's Included - Minimal Cards */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/70 z-10" />
          <div className="absolute inset-0">
            <img 
              src="/lovable-uploads/brazil-kites-beach.jpg" 
              alt="Kitesurfing beach with colorful kites" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-20 container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-20 text-center text-white">
                The Experience
              </h2>
              
              <div className="grid md:grid-cols-3 gap-12 text-center">
                <div>
                  <div className="text-5xl font-bold text-white mb-4">14</div>
                  <p className="text-xl text-white/90">Days of Adventure</p>
                </div>
                <div>
                  <div className="text-5xl font-bold text-white mb-4">∞</div>
                  <p className="text-xl text-white/90">Wind Guaranteed</p>
                </div>
                <div>
                  <div className="text-5xl font-bold text-white mb-4">5+</div>
                  <p className="text-xl text-white/90">Epic Locations</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BbTalkin Feature */}
        <section className="relative h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />
          <div className="absolute inset-0">
            <img 
              src="/lovable-uploads/brazil-bbtalkin-instructor.jpg" 
              alt="BbTalkin Communication System" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-20 container mx-auto px-4">
            <div className="max-w-xl text-white">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                BbTalkin Radio Helmets
              </h2>
              <p className="text-xl mb-4">
                Real-time instruction while you ride
              </p>
              <p className="text-lg text-white/80">
                Instant feedback, faster progress, maximum safety
              </p>
            </div>
          </div>
        </section>

        {/* Included / Not Included */}
        <section className="py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-16">
                {/* Included */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                    Included
                  </h2>
                  <ul className="space-y-4 text-lg">
                    <li className="flex items-start">
                      <span className="text-primary mr-3">✓</span>
                      <span>4 locations (hotels/villas)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3">✓</span>
                      <span>Cars</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3">✓</span>
                      <span>Fuel</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3">✓</span>
                      <span>Breakfasts</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3">✓</span>
                      <span>Parking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3">✓</span>
                      <span>Services of 2 guides</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3">✓</span>
                      <span>3 hours with Certified Instructor</span>
                    </li>
                  </ul>
                </div>

                {/* Not Included */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                    Not Included
                  </h2>
                  <ul className="space-y-4 text-lg text-muted-foreground">
                    <li className="flex items-start">
                      <span className="mr-3">×</span>
                      <span>Flights</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3">×</span>
                      <span>Dinners</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meet Your Instructor */}
        <section className="relative">
          <div className="grid md:grid-cols-2">
            {/* Image */}
            <div className="relative h-[60vh] md:h-screen">
              <img 
                src="/lovable-uploads/brazil-instructor-denis.jpg" 
                alt="Denis Udovenko - Professional Kitesurfing Instructor" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Content */}
            <div className="flex items-center bg-muted/30">
              <div className="p-8 md:p-16 lg:p-24">
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
                  Meet Your Instructor
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground">
                  <p className="text-2xl font-semibold text-foreground">
                    Denis Udovenko
                  </p>
                  <p>
                    Certified kitesurfing and snowboarding instructor with international experience.
                  </p>
                  <p>
                    Professional extreme sports athlete and trainer, known for creating safe, dynamic, and motivating environments.
                  </p>
                  <p>
                    Founder of OGO Academy, organizing kitesurf trips worldwide and sharing the passion for progress, adventure, and the kitesurf lifestyle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Trip Plan */}
        <section className="py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
                  Our Trip Plan
                </h2>
                <p className="text-xl text-muted-foreground">
                  Follow our journey through the best kite spots of Ceará
                </p>
              </div>
              
              {/* Day 1 - Arrival */}
              <div className="mb-16">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                  <h3 className="text-2xl font-display font-bold flex items-center gap-3">
                    Arrival at Fortaleza
                    <PlaneLanding className="text-primary" size={28} />
                  </h3>
                </div>
                <p className="text-lg text-muted-foreground ml-16">
                  Arrival at Fortaleza (Pinto Martins) airport. Group meeting. From here, we immediately jump into the cars and drive far away from the big city, heading deep into the Ceará region.
                </p>
              </div>

              {/* Arrow down */}
              <div className="flex justify-center my-8">
                <div className="text-primary text-4xl">↓</div>
              </div>

              {/* Days 1-6 - Ilha de Guajiru */}
              <div className="mb-16">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="hidden md:block">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg">
                        1-6
                      </div>
                      <h3 className="text-2xl font-display font-bold">Ilha de Guajiru</h3>
                    </div>
                    <p className="text-lg text-muted-foreground mb-4">
                      A peaceful lagoon spot, perfect for kitesurfing, downwinds, and progress.
                    </p>
                    <p className="text-base text-muted-foreground/80">
                      Ilha de Guajiru — lagoon + downwind in the river
                    </p>
                  </div>
                  <div className="relative h-[400px] rounded-lg overflow-hidden group">
                    <img 
                      src="/lovable-uploads/brazil-location-guajiru.jpg" 
                      alt="Ilha de Guajiru aerial view" 
                      className="w-full h-full object-cover md:brightness-100 brightness-[0.7]"
                    />
                    {/* Mobile overlay caption */}
                    <div className="md:hidden absolute inset-x-0 bottom-0 p-4 z-10">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent -z-10" />
                      <div className="flex items-center gap-3 mb-2">
                        <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold">
                          1-6
                        </div>
                        <h3 className="text-xl font-display font-bold text-white">Ilha de Guajiru</h3>
                      </div>
                      <p className="text-sm text-white/90 font-medium">
                        Ilha de Guajiru — lagoon + downwind in the river
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow down */}
              <div className="flex justify-center my-8">
                <div className="text-primary text-4xl">↓</div>
              </div>

              {/* Days 7-10 - Jericoacoara */}
              <div className="mb-16">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1 relative h-[400px] rounded-lg overflow-hidden group">
                    <img 
                      src="/lovable-uploads/brazil-location-jeri.jpg" 
                      alt="Jericoacoara beach with hammocks" 
                      className="w-full h-full object-cover md:brightness-100 brightness-[0.7]"
                    />
                    {/* Mobile overlay caption */}
                    <div className="md:hidden absolute inset-x-0 bottom-0 p-4 z-10">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent -z-10" />
                      <div className="flex items-center gap-3 mb-2">
                        <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold">
                          7-10
                        </div>
                        <h3 className="text-xl font-display font-bold text-white">Jericoacoara</h3>
                      </div>
                      <p className="text-sm text-white/90 font-medium">
                        Jericoacoara — two lagoons + nightlife
                      </p>
                    </div>
                  </div>
                  <div className="order-1 md:order-2 hidden md:block">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg">
                        7-10
                      </div>
                      <h3 className="text-2xl font-display font-bold">Jericoacoara</h3>
                    </div>
                    <p className="text-lg text-muted-foreground mb-4">
                      The famous reserve and party town, where we enjoy two lagoons and experience Brazilian nightlife.
                    </p>
                    <p className="text-base text-muted-foreground/80">
                      Jericoacoara — two lagoons + nightlife
                    </p>
                  </div>
                </div>
              </div>

              {/* Arrow down */}
              <div className="flex justify-center my-8">
                <div className="text-primary text-4xl">↓</div>
              </div>

              {/* Days 11-13 - Barra Grande */}
              <div className="mb-16">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="hidden md:block">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg">
                        11-13
                      </div>
                      <h3 className="text-2xl font-display font-bold">Barra Grande</h3>
                    </div>
                    <p className="text-lg text-muted-foreground mb-4">
                      A unique lagoon in the mangrove jungle. Here you can kite through a labyrinth of trees, a truly one-of-a-kind experience.
                    </p>
                    <p className="text-base text-muted-foreground/80">
                      Barra Grande — lagoon in mangrove jungle + downwind
                    </p>
                  </div>
                  <div className="relative h-[400px] rounded-lg overflow-hidden group">
                    <img 
                      src="/lovable-uploads/brazil-location-barra.jpg" 
                      alt="Barra Grande mangrove lagoon" 
                      className="w-full h-full object-cover md:brightness-100 brightness-[0.7]"
                    />
                    {/* Mobile overlay caption */}
                    <div className="md:hidden absolute inset-x-0 bottom-0 p-4 z-10">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent -z-10" />
                      <div className="flex items-center gap-3 mb-2">
                        <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold">
                          11-13
                        </div>
                        <h3 className="text-xl font-display font-bold text-white">Barra Grande</h3>
                      </div>
                      <p className="text-sm text-white/90 font-medium">
                        Barra Grande — lagoon in mangrove jungle + downwind
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow down */}
              <div className="flex justify-center my-8">
                <div className="text-primary text-4xl">↓</div>
              </div>

              {/* Day 13 evening - Cumbuco */}
              <div className="mb-16">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1 relative h-[400px] rounded-lg overflow-hidden group">
                    <img 
                      src="/lovable-uploads/brazil-location-cumbuco.jpg" 
                      alt="Cumbuco sunset beach" 
                      className="w-full h-full object-cover md:brightness-100 brightness-[0.7]"
                    />
                    {/* Mobile overlay caption */}
                    <div className="md:hidden absolute inset-x-0 bottom-0 p-4 z-10">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent -z-10" />
                      <div className="flex items-center gap-3 mb-2">
                        <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold">
                          13
                        </div>
                        <h3 className="text-xl font-display font-bold text-white">Cumbuco</h3>
                      </div>
                      <p className="text-sm text-white/90 font-medium">
                        Cumbuco — 30 km from airport, final location
                      </p>
                    </div>
                  </div>
                  <div className="order-1 md:order-2 hidden md:block">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg">
                        13
                      </div>
                      <h3 className="text-2xl font-display font-bold">Cumbuco</h3>
                    </div>
                    <p className="text-lg text-muted-foreground mb-4">
                      Long transfer back towards Cumbuco. Overnight stay.
                    </p>
                    <p className="text-base text-muted-foreground/80">
                      Cumbuco — 30 km from airport, final location
                    </p>
                  </div>
                </div>
              </div>

              {/* Arrow down */}
              <div className="flex justify-center my-8">
                <div className="text-primary text-4xl">↓</div>
              </div>

              {/* Day 14 - Departure */}
              <div className="mb-16">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                    14
                  </div>
                  <h3 className="text-2xl font-display font-bold flex items-center gap-3">
                    Departure
                    <PlaneTakeoff className="text-primary" size={28} />
                  </h3>
                </div>
                <p className="text-lg text-muted-foreground ml-16">
                  Breakfast in Cumbuco and transfer to the airport for departure.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* CTA Section */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/60 z-10" />
          <div className="absolute inset-0">
            <img 
              src="/lovable-uploads/brazil-kite-aerial.jpg" 
              alt="Aerial view of kitesurfing" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-20 container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 text-white">
              Ready for Brazil?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Join us for 2 weeks of non-stop wind, progression, and adventure on the Brazilian coast.
            </p>
            <Button size="lg" className="text-lg px-12 py-6">
              Contact Us
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Brazil;
