import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Ship, Wind, Users, GraduationCap, Calendar, CheckCircle, XCircle, Euro } from 'lucide-react';

const KiteSafari: React.FC = () => {
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
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center text-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
              🌊 KiteSafari
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              7-Day Adventure on the Red Sea
            </p>
            <Button size="lg" asChild>
              <a href="#booking">Book Your Adventure</a>
            </Button>
          </div>
        </div>
      </section>

      <main className="py-20">
        <div className="container mx-auto px-4">
          
          {/* What is KiteSafari */}
          <section className="mb-20">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                What is KiteSafari?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                KiteSafari is a unique kitesurfing experience aboard a luxury yacht in Egypt's Red Sea. 
                Imagine: crystal-clear lagoons, consistent winds, sandy islands, and a floating 5-star hotel 
                that follows the best wind spots.
              </p>
              <p className="text-lg text-foreground font-semibold mt-4">
                This is not just a trip – it's a lifestyle adventure combining kitesurfing, travel, and community.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <img 
                src="/lovable-uploads/kite-safari-beach.jpg" 
                alt="Kitesurfing on crystal-clear waters" 
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
              <img 
                src="/lovable-uploads/kite-safari-sunset-jump.jpg" 
                alt="Sunset kitesurfing jump" 
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </section>

          {/* The Yacht */}
          <section className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Ship className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl md:text-4xl font-display font-bold">The Yacht</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    Large luxury yacht accommodating up to 25–30 people
                  </p>
                  <p className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    Spacious cabins (2 beds or double) with private bathrooms
                  </p>
                  <p className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    Chill-out areas, two bars, sun decks, Jacuzzi
                  </p>
                  <p className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    Dining room and lounge
                  </p>
                  <p className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    Rescue zodiacs to reach the best lagoons
                  </p>
                </div>
                <p className="mt-6 text-foreground font-medium">
                  You live, kite, eat, and relax all on the yacht. Every day we anchor near deserted sandy islands – 
                  we kite directly from the beach while the yacht remains your base.
                </p>
              </div>
              <img 
                src="/lovable-uploads/kite-safari-yacht-kiting.jpg" 
                alt="Luxury yacht with kitesurfers" 
                className="rounded-lg shadow-xl w-full h-[500px] object-cover"
              />
            </div>
          </section>

          {/* Kitesurfing Program */}
          <section className="mb-20 bg-muted/30 rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <Wind className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-display font-bold">Kitesurfing Program</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Wind Guaranteed</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">15–25 knots almost daily</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>2–3 Sessions/Day</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Multiple opportunities to ride</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Perfect Spots</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Flat-water lagoons and wave spots</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>All Levels</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Beginners, intermediate, advanced</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Safety First</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Rescue boats on standby</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Video Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Evening sessions to improve technique</p>
                </CardContent>
              </Card>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <img 
                src="/lovable-uploads/kite-safari-action-1.jpg" 
                alt="Kitesurfing action" 
                className="rounded-lg shadow-lg w-full h-[300px] object-cover"
              />
              <img 
                src="/lovable-uploads/kite-safari-action-2.jpg" 
                alt="Kitesurfing action" 
                className="rounded-lg shadow-lg w-full h-[300px] object-cover"
              />
            </div>
          </section>

          {/* Training Options */}
          <section className="mb-20" id="training">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-display font-bold">Training Options</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
              We offer flexible packages depending on your goals:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <CardTitle className="text-2xl">Equipment Rental Only</CardTitle>
                  <CardDescription className="text-3xl font-bold text-primary flex items-center gap-2">
                    <Euro className="w-6 h-6" />400/week
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Unlimited access to premium Duotone equipment.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary shadow-lg transform scale-105">
                <CardHeader>
                  <div className="bg-primary text-primary-foreground text-sm font-bold px-3 py-1 rounded-full w-fit mb-2">
                    RECOMMENDED
                  </div>
                  <CardTitle className="text-2xl">Rental + Lessons (10h)</CardTitle>
                  <CardDescription className="text-3xl font-bold text-primary flex items-center gap-2">
                    <Euro className="w-6 h-6" />800/week
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Full package with equipment + 10 hours of private lessons with certified instructors.
                  </p>
                  <p className="text-sm font-medium">
                    Perfect if you want guaranteed progress – we teach using BbTalkin radio helmets.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <CardTitle className="text-2xl">Budget Option</CardTitle>
                  <CardDescription className="text-3xl font-bold text-primary flex items-center gap-2">
                    <Euro className="w-6 h-6" />500/week
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Equipment + lessons with local Egyptian instructors (good quality, but less personalized).
                  </p>
                </CardContent>
              </Card>
            </div>
            <p className="text-center mt-6 text-muted-foreground">
              ⚡️ Note: 10h is enough for first steps, but to become fully independent usually requires 20–25h.
            </p>
          </section>

          {/* Prices & Booking */}
          <section className="mb-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12" id="booking">
            <div className="flex items-center gap-3 mb-8">
              <Euro className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-display font-bold">Prices & Booking</h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Accommodation Prices</h3>
                <div className="space-y-3">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Standard Cabin</span>
                        <span className="text-2xl font-bold text-primary">€1,150</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">per person</p>
                    </CardContent>
                  </Card>
                  <Card className="border-primary">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="font-semibold">Group Discount</span>
                          <p className="text-sm text-muted-foreground">6+ people</p>
                        </div>
                        <span className="text-2xl font-bold text-primary">€1,100</span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Master / Suite Cabins</span>
                        <span className="text-2xl font-bold text-primary">€1,350–1,600</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  What's Included
                </h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Accommodation on the yacht</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>3 meals/day + soft drinks (Coke, juices, guava, orange juice, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Rescue support & transfers to spots</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Parties & community life</span>
                  </li>
                </ul>

                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <XCircle className="w-6 h-6 text-destructive" />
                  What's Not Included
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>Flights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>Visa (25€ at airport)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>Alcoholic drinks (can be bought onboard – beer €3 per bottle, or bring your own)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>Equipment rental / lessons (optional packages above)</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Available Dates */}
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <Calendar className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-display font-bold">Available Dates 2025</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl">April</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">2–9 April</p>
                  <p className="text-muted-foreground">9–16 April</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl">October</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">18–25 October</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl">November</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">3–17 November</p>
                  <p className="text-muted-foreground">21 Nov – 5 Dec</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow border-primary">
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl">New Year Special</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">28 Dec – 4 Jan</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-center">
              ❓ Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Do I need my own gear?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">You can bring your own or rent from us (Duotone).</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Can beginners join?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Absolutely! Many guests are complete beginners – we provide full lessons.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>What about safety?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">We use rescue boats, radio helmets, certified instructors, and shallow lagoons – the safest learning conditions.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>How many people are on board?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Usually 20–25 people, mixed group (different nationalities & levels).</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>What's the vibe?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Community of adventurers, evening BBQs, video analysis, sunsets, parties, and new friends.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8 justify-center">
              <Users className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-display font-bold">🌍 Why Choose Us?</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-3">🏆</div>
                  <h3 className="font-bold mb-2">3+ Years Experience</h3>
                  <p className="text-muted-foreground text-sm">Organizing KiteSafaris in Egypt & Brazil</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-3">👨‍🏫</div>
                  <h3 className="font-bold mb-2">Certified Instructors</h3>
                  <p className="text-muted-foreground text-sm">International certification & expertise</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-3">🪁</div>
                  <h3 className="font-bold mb-2">Premium Equipment</h3>
                  <p className="text-muted-foreground text-sm">Duotone gear & BbTalkin systems</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-3">🤝</div>
                  <h3 className="font-bold mb-2">Family-like Vibe</h3>
                  <p className="text-muted-foreground text-sm">Strong community & lasting friendships</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-3">🌞</div>
                  <h3 className="font-bold mb-2">All Year Round</h3>
                  <p className="text-muted-foreground text-sm">Multiple trips throughout the year</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-3">🎯</div>
                  <h3 className="font-bold mb-2">Tailored Experience</h3>
                  <p className="text-muted-foreground text-sm">Flexible packages for all levels</p>
                </CardContent>
              </Card>
            </div>

            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <img 
                src="/lovable-uploads/kite-safari-community.jpg" 
                alt="KiteSafari community" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-12">
                <Button size="lg" asChild>
                  <a href="/booking">Book Your KiteSafari Now</a>
                </Button>
              </div>
            </div>
          </section>

        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default KiteSafari;
