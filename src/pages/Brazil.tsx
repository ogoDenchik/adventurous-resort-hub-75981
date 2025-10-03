import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Wind, Shield, Waves, Users, MapPin, Palmtree } from 'lucide-react';

const Brazil: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ScrollToTop />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background z-10" />
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/kite-safari-action-1.jpg" 
            alt="Brazil Kitesurfing" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Brazil Kitesurf Adventure
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            OGO Academy
          </p>
        </div>
      </section>

      <main className="pb-20">
        {/* Why Brazil */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <Wind className="w-8 h-8 text-primary" />
                <h2 className="text-3xl md:text-4xl font-display font-bold">
                  Why Brazil?
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-6">
                Brazil is a unique country where the wind blows every day without interruption. 
                The northern coast, where we travel, is known for stable trade winds, warm water, and a huge variety of spots: 
                lagoons, ocean waves, mangrove channels.
              </p>
              <p className="text-lg text-muted-foreground">
                Here you can ride endlessly and progress in kitesurfing faster than anywhere else.
              </p>
            </div>
          </div>
        </section>

        {/* Safety Question */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-8 h-8 text-primary" />
                <h2 className="text-3xl md:text-4xl font-display font-bold">
                  Safety First
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-6">
                Many have heard that Brazil can be dangerous. This is true — but only in big cities. 
                We leave Fortaleza immediately after arrival and head far to the northern coast, to small fishing villages and kite villages.
              </p>
              <p className="text-lg text-muted-foreground">
                Everything is calm and safe there: only ocean, lagoons, friendly locals, and paradise for kiteboarders.
              </p>
            </div>
          </div>
        </section>

        {/* What Awaits */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-12">
                <Waves className="w-8 h-8 text-primary" />
                <h2 className="text-3xl md:text-4xl font-display font-bold">
                  What Awaits You
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Constant Wind</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Riding every day until sunset with guaranteed wind conditions
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Unique Lagoons</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Flat water for freestyle and progression
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Downwinders</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Kilometers of kitesurfing along the coast without stopping
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Variety of Conditions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      From calm lagoons to waves and mangrove jungles
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Adventure Atmosphere</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Freedom, energy, and unforgettable experiences
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Daily Progress</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Perfect conditions for rapid skill development
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Organizer */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-8 h-8 text-primary" />
                <h2 className="text-3xl md:text-4xl font-display font-bold">
                  Who Organizes
                </h2>
              </div>
              <div className="bg-card p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Denis Udovenko</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Kitesurfing and snowboarding instructor with over 5 years of experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Founder of OGO Academy in Cyprus</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Organizes kite trips in Brazil, Egypt, and Europe</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Works only with certified instructors, premium Duotone equipment, and BbTalkin communication systems</span>
                  </li>
                </ul>
                <p className="mt-6 text-lg font-medium">
                  My goal is to ensure every participant feels confident, progresses, and enjoys their time on the water.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trip Format */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">
                Trip Format
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Duration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Two weeks traveling along the coast
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Accommodation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Comfortable hotels (2 people per room, single accommodation available)
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Meals</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Breakfasts included
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Transportation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Rental cars with guides and support always nearby
                    </p>
                  </CardContent>
                </Card>
              </div>
              <p className="mt-8 text-lg text-center text-muted-foreground">
                Every day: kitesurfing, new locations, sunsets, evening debriefs and planning for the next day
              </p>
            </div>
          </div>
        </section>

        {/* For Whom */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">
                Who Is This Trip For?
              </h2>
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Beginners</CardTitle>
                    <CardDescription>
                      Who want to take their first steps in kitesurfing in the most comfortable conditions
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Intermediate Riders</CardTitle>
                    <CardDescription>
                      Looking to solidify their foundation and progress to tricks
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Experienced Kiteboarders</CardTitle>
                    <CardDescription>
                      Who dream of long downwinders and new emotions
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Key Spots */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-12">
                <MapPin className="w-8 h-8 text-primary" />
                <h2 className="text-3xl md:text-4xl font-display font-bold">
                  Key Spots
                </h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Icaraizinho</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Lagoon for progression and freestyle
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Jericoacoara</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Iconic location with lagoons and dunes (Guriu + Tatajuba)
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Barra Grande</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Exotic riding in mangrove jungles
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Activities */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-12">
                <Palmtree className="w-8 h-8 text-primary" />
                <h2 className="text-3xl md:text-4xl font-display font-bold">
                  Additional Activities
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground">
                      Buggy and quad bike rides through the dunes
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground">
                      SUP and surfing
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground">
                      Beach walks and exploration
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground">
                      Excursions and cultural experiences
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground">
                      Discovering northern Brazil culture
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground">
                      Fresh seafood experiences
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                More Than Just a Kite Trip
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                This is an immersion into a unique culture, nature, and lifestyle. We will ride in the most beautiful places in the country, 
                eat fresh seafood, watch sunrises and sunsets, and share emotions and energy with the team.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Freedom</h3>
                  <p className="text-muted-foreground">Experience true independence</p>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Progress</h3>
                  <p className="text-muted-foreground">Rapid skill development</p>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Support</h3>
                  <p className="text-muted-foreground">Energy and team spirit</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Brazil;
