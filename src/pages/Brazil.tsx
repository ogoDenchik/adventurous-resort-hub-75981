import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { Button } from '@/components/ui/button';

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
            src="/lovable-uploads/brazil-sunset-team.jpg" 
            alt="Brazil Kitesurf Adventure" 
            className="w-full h-full object-cover"
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

        {/* Photo Gallery Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative h-[60vh]">
                <img 
                  src="/lovable-uploads/brazil-lagoon-girl.jpg" 
                  alt="Kitesurfing in crystal clear lagoon" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="relative h-[60vh]">
                <img 
                  src="/lovable-uploads/brazil-kite-trick.jpg" 
                  alt="Advanced kitesurfing trick" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="relative h-[60vh]">
                <img 
                  src="/lovable-uploads/brazil-dunes-team.jpg" 
                  alt="Team on Brazilian dunes" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="relative h-[60vh]">
                <img 
                  src="/lovable-uploads/brazil-mare-cheia.jpg" 
                  alt="Maré Cheia Beach" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What's Included - Minimal Cards */}
        <section className="py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-20 text-center">
                The Experience
              </h2>
              
              <div className="grid md:grid-cols-3 gap-12 text-center">
                <div>
                  <div className="text-5xl font-bold text-primary mb-4">14</div>
                  <p className="text-xl">Days of Adventure</p>
                </div>
                <div>
                  <div className="text-5xl font-bold text-primary mb-4">∞</div>
                  <p className="text-xl">Wind Guaranteed</p>
                </div>
                <div>
                  <div className="text-5xl font-bold text-primary mb-4">5+</div>
                  <p className="text-xl">Epic Locations</p>
                </div>
              </div>

              <div className="mt-20 space-y-4 text-center text-lg text-muted-foreground max-w-3xl mx-auto">
                <p>Hotels • Breakfasts • Transportation • Safety Support</p>
                <p>Downwinders • Lagoons • Waves • Mangrove Channels</p>
                <p>Sunsets • Fresh Seafood • Cultural Immersion</p>
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

        {/* Key Spots */}
        <section className="py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-12">
                Key Destinations
              </h2>
              <div className="space-y-8 text-left md:text-center">
                <div className="py-6 border-b border-border">
                  <h3 className="text-2xl font-bold mb-2">Icaraizinho</h3>
                  <p className="text-muted-foreground">Flat water lagoons for freestyle progression</p>
                </div>
                <div className="py-6 border-b border-border">
                  <h3 className="text-2xl font-bold mb-2">Jericoacoara</h3>
                  <p className="text-muted-foreground">Iconic dunes, lagoons, and endless wind (Guriu + Tatajuba)</p>
                </div>
                <div className="py-6 border-b border-border">
                  <h3 className="text-2xl font-bold mb-2">Barra Grande</h3>
                  <p className="text-muted-foreground">Exotic mangrove jungle riding</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Safety Note */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-6">About Safety</h3>
              <p className="text-lg text-muted-foreground">
                We skip the big cities entirely. After landing in Fortaleza, we head straight to remote northern villages — peaceful, friendly, and safe. Just ocean, lagoons, and the kite community.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
              Ready for Brazil?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
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
