import React, { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, X, MapPin, Calendar } from 'lucide-react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Brazil: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/outdoors-v12',
      center: [-39.5, -3.5],
      zoom: 6.5,
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    map.current.on('load', () => {
      if (!map.current) return;

      // Locations
      const locations = [
        { name: 'Fortaleza Airport', coords: [-38.5267, -3.7319], day: 0 },
        { name: 'Ilha de Guajiru', coords: [-37.4561, -4.0228], day: 1 },
        { name: 'Jericoacoara', coords: [-40.5183, -2.7938], day: 2 },
        { name: 'Barra Grande', coords: [-41.9947, -2.9019], day: 3 },
        { name: 'Cumbuco', coords: [-38.7878, -3.6281], day: 4 },
      ];

      // Route coordinates
      const route = {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: locations.map(loc => loc.coords),
        },
      };

      // Add route line
      map.current.addSource('route', {
        type: 'geojson',
        data: route as any,
      });

      map.current.addLayer({
        id: 'route',
        type: 'line',
        source: 'route',
        layout: {
          'line-join': 'round',
          'line-cap': 'round',
        },
        paint: {
          'line-color': '#0EA5E9',
          'line-width': 3,
          'line-dasharray': [2, 2],
        },
      });

      // Add markers
      locations.forEach((location, index) => {
        const el = document.createElement('div');
        el.className = 'custom-marker';
        el.style.cssText = `
          background: ${index === 0 || index === 4 ? '#EF4444' : '#0EA5E9'};
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 3px solid white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          color: white;
          font-size: 14px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        `;
        el.textContent = location.day.toString();

        new mapboxgl.Marker(el)
          .setLngLat(location.coords as [number, number])
          .setPopup(
            new mapboxgl.Popup({ offset: 25 })
              .setHTML(`<strong>${location.name}</strong><br>Day ${location.day}`)
          )
          .addTo(map.current!);
      });
    });

    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

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

        {/* What's Included / Not Included */}
        <section className="py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-16 text-center">
                What's Included
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl">
                      <Check className="w-6 h-6 text-primary" />
                      Included
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p>4 premium locations (hotels/villas)</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p>Daily breakfasts</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p>Rental cars with drivers</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p>All parking fees</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p>Fuel costs covered</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p>Services of 2 experienced guides</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p>3 lessons with certified instructor</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl">
                      <X className="w-6 h-6 text-destructive" />
                      Not Included
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                      <X className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                      <p>Flight tickets (assistance provided by manager)</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <X className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                      <p>Lunch and dinner meals</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <X className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                      <p>Equipment rental (available separately)</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Locations */}
        <section className="py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-16">
                <MapPin className="w-8 h-8 text-primary" />
                <h2 className="text-4xl md:text-6xl font-display font-bold text-center">
                  4 Epic Locations
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="overflow-hidden">
                  <div className="relative h-64">
                    <img 
                      src="/lovable-uploads/brazil-lagoon-girl.jpg" 
                      alt="Ilha de Guajiru" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold">
                      Day 1-6
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl">Ilha de Guajiru</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Stunning lagoon with flat water perfect for progression. Unique downwind experience through the river channels.
                    </p>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <div className="relative h-64">
                    <img 
                      src="/lovable-uploads/brazil-mare-cheia.jpg" 
                      alt="Jericoacoara" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold">
                      Day 7-8
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl">Jericoacoara</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Iconic spot with two amazing lagoons. Vibrant nightlife, restaurants, and the famous Jeri vibe. Time to relax and enjoy!
                    </p>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <div className="relative h-64">
                    <img 
                      src="/lovable-uploads/brazil-dunes-team.jpg" 
                      alt="Barra Grande" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold">
                      Day 9-12
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl">Barra Grande</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      One of the most unique spots in Brazil! Kite through mangrove jungle lagoons. Epic downwind adventures in pristine nature.
                    </p>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <div className="relative h-64">
                    <img 
                      src="/lovable-uploads/brazil-kite-trick.jpg" 
                      alt="Cumbuco" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold">
                      Day 13-14
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl">Cumbuco</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Final destination, 30 km from Fortaleza airport. Perfect conditions for last sessions before departure. Easy logistics.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Trip Itinerary with Map */}
        <section className="py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-16">
                <Calendar className="w-8 h-8 text-primary" />
                <h2 className="text-4xl md:text-6xl font-display font-bold text-center">
                  Trip Itinerary
                </h2>
              </div>

              {/* Mapbox Token Input */}
              {!mapboxToken && (
                <div className="mb-8 p-6 bg-card rounded-lg border border-border">
                  <h3 className="text-xl font-bold mb-4">Enter Mapbox Token to View Route Map</h3>
                  <p className="text-muted-foreground mb-4">
                    Get your free public token at{' '}
                    <a 
                      href="https://account.mapbox.com/access-tokens/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      mapbox.com
                    </a>
                  </p>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="pk.eyJ1..."
                      className="flex-1 px-4 py-2 rounded-md border border-input bg-background"
                      onChange={(e) => setMapboxToken(e.target.value)}
                    />
                  </div>
                </div>
              )}

              {/* Map */}
              {mapboxToken && (
                <div className="mb-12 rounded-lg overflow-hidden shadow-2xl border border-border">
                  <div ref={mapContainer} className="w-full h-[500px]" />
                </div>
              )}

              {/* Itinerary Details */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Day 0-1: Arrival & Transfer</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      After landing in Fortaleza, we drive deep into the northern region (3-hour transfer). 
                      Real Brazil immersion begins — away from tourist crowds, into authentic coastal villages.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Day 1-6: Ilha de Guajiru</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      6 days of intensive kitesurfing in perfect lagoon conditions. Daily sessions, 
                      progression-focused training, downwind adventures through river channels.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Day 6-8: Jericoacoara</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Transfer to iconic Jeri (1.5 hours). Time to relax, enjoy the vibrant town atmosphere, 
                      amazing restaurants, and two stunning lagoons. Nightlife and cultural reset.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Day 8-12: Barra Grande</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Transfer to Barra Grande (2 hours) — one of the most unique kite spots in the world. 
                      Mangrove jungle lagoons, epic downwinds, untouched nature.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Day 12-14: Cumbuco</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Return closer to the airport (4-hour transfer). Final sessions in Cumbuco, 
                      one of Brazil's most famous kite beaches. Time to rest before departure.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Day 14: Departure</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Easy transfer to Fortaleza airport (~30 minutes). Departure day with amazing memories 
                      and next-level kitesurfing skills.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Accommodation */}
        <section className="py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-12 text-center">
                Premium Accommodation
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <p className="text-lg text-muted-foreground mb-6">
                    Our hotels are located in the most scenic coastal villages: Ilha de Guajiru, Jericoacoara, 
                    Barra Grande, and Cumbuco — offering complete relaxation between kite sessions.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6">
                    Spacious rooms with stunning views, modern design, and attentive service create an unforgettable experience. 
                    Beautiful beaches, tropical nature, and authentic Brazilian atmosphere.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Just 5 minutes from hotels, you'll find the best kitesurfing spots with perfect wind conditions 
                    and safe beaches — ideal for all levels.
                  </p>
                </div>
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="/lovable-uploads/brazil-sunset-team.jpg" 
                    alt="Brazilian accommodation" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-2">Elegant Rooms</h3>
                    <p className="text-muted-foreground">Comfortable and stylish spaces</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-2">Chill Zones</h3>
                    <p className="text-muted-foreground">Relax areas at the spots</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-2">Premium Service</h3>
                    <p className="text-muted-foreground">High standard hospitality</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-2">Restaurants & Bars</h3>
                    <p className="text-muted-foreground">Variety of dining options</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-2">Spots on Property</h3>
                    <p className="text-muted-foreground">Direct access to kite spots</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-2">Safe Beaches</h3>
                    <p className="text-muted-foreground">Wide beaches for all levels</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-32 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
                Investment
              </h2>
              
              <div className="bg-card p-12 rounded-2xl shadow-xl border border-border mb-12">
                <div className="flex items-center justify-center gap-6 mb-8">
                  <div className="text-muted-foreground line-through text-3xl">€3,490</div>
                  <div className="text-6xl font-bold text-primary">€2,440</div>
                </div>
                <div className="inline-block bg-destructive/10 text-destructive px-6 py-3 rounded-full mb-8">
                  <p className="font-semibold">Save €1,050 with early booking!</p>
                </div>
                <p className="text-muted-foreground text-lg">
                  *30% discount valid if prepayment is made by September 20, 2025
                </p>
              </div>

              <div className="bg-card p-8 rounded-lg border border-border mb-12">
                <h3 className="text-2xl font-bold mb-6">Payment Terms</h3>
                <div className="space-y-4 text-left max-w-2xl mx-auto">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <strong>50% prepayment</strong> to secure your booking (non-refundable)
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <strong>50% remaining balance</strong> due by October 3, 2025 (one month before trip)
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      Our manager will assist with <strong>accommodation options</strong> and <strong>flight ticket purchases</strong>
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-lg text-muted-foreground mb-8">
                Trip dates: <strong>November 3-17, 2025</strong>
              </p>
              
              <Button size="lg" className="text-lg px-12 py-6">
                Book Your Spot Now
              </Button>
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
