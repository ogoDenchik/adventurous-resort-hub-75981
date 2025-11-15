import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Wind, Sun, Users, ChevronDown, ChevronUp, Calendar } from 'lucide-react';
import { FadeIn } from '@/hooks/use-scroll-animation';
import { Link } from 'react-router-dom';

const LocationsCalendar = () => {
  const [showFullSchedule, setShowFullSchedule] = useState(false);

  const destinations = [
    {
      country: 'VIETNAM',
      flag: '🇻🇳',
      location: 'Phan Rang',
      dates: 'January 10 – March 10, 2025',
      image: '/lovable-uploads/cyprus-sunset-riding.jpg', // placeholder - replace with Vietnam image
      highlights: [
        'Perfect flat water',
        'Consistent wind (15–25 kts)',
        'Warm climate',
        'Uncrowded authentic spot'
      ],
      services: [
        { name: 'Private Coaching', price: '€800/10h' },
        { name: 'Kite Camp', price: 'from €1200' },
        { name: 'Refresh Course', price: '€270/3h' },
        { name: 'Equipment Rental', price: '€85/session' }
      ],
      link: '/contact',
      badgeText: 'BOOKING OPEN'
    },
    {
      country: 'EGYPT',
      flag: '🇪🇬',
      location: 'Red Sea',
      dates: 'March 10 – May 30, 2025',
      image: '/lovable-uploads/safari-sunset-jump.jpg', // placeholder - replace with Egypt image
      highlights: [
        'World-class lagoons',
        'Dahab / El Gouna / Soma Bay',
        '300+ sunny days',
        'Beginner-friendly'
      ],
      services: [
        { name: 'Private Coaching', price: '€800/10h' },
        { name: 'VIP 1-on-1', price: '€1500/10h' },
        { name: 'Kite Safari', price: 'custom' },
        { name: 'Refresh Course', price: '€270/3h' },
        { name: 'Equipment Rental', price: '€85/session' }
      ],
      link: '/contact',
      badgeText: 'BOOKING OPEN'
    }
  ];

  const fullSchedule = [
    { dates: 'Nov 4–28, 2024', location: '🇧🇷 Brazil', available: false },
    { dates: 'Nov 28 – Dec 22, 2024', location: '🇵🇱 Poland', available: false },
    { dates: 'Dec 22–29, 2024', location: '🇮🇹 Italy (Alps — Snowboarding)', available: false },
    { dates: 'Dec 31 – Jan 10, 2025', location: '🇵🇱 Poland', available: false },
    { dates: 'Jan 10 – Mar 10, 2025', location: '🇻🇳 Vietnam', available: true },
    { dates: 'Mar 10 – May 30, 2025', location: '🇪🇬 Egypt', available: true }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <FadeIn direction="up" distance={30}>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <MapPin className="w-6 h-6 text-primary" />
              <h2 className="text-3xl md:text-5xl font-display font-bold">
                WHERE I AM
              </h2>
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
              Following the Perfect Wind Seasons Worldwide
            </p>
            <p className="text-base text-muted-foreground">
              I travel to the world's best kitesurfing spots when conditions are optimal.<br />
              <span className="font-semibold text-foreground">Currently available for training:</span>
            </p>
          </div>
        </FadeIn>

        {/* Destination Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {destinations.map((dest, index) => (
            <FadeIn key={index} delay={index * 0.2} direction="up" distance={40}>
              <div className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-border/50">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={dest.image} 
                    alt={`${dest.country} kitesurfing`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground font-bold px-4 py-1">
                    {dest.badgeText}
                  </Badge>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl md:text-3xl font-display font-bold mb-2 flex items-center gap-2">
                      <span className="text-3xl">{dest.flag}</span>
                      {dest.country}
                      <span className="text-muted-foreground text-lg">({dest.location})</span>
                    </h3>
                    <p className="text-muted-foreground font-medium flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {dest.dates}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">Highlights</h4>
                    <ul className="space-y-2">
                      {dest.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <Wind className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Services */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">Available</h4>
                    <div className="space-y-2">
                      {dest.services.map((service, idx) => (
                        <div key={idx} className="flex justify-between items-center text-sm">
                          <span className="text-muted-foreground">{service.name}</span>
                          <span className="font-semibold">{service.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Button asChild className="w-full" size="lg">
                    <Link to={dest.link}>
                      EXPLORE {dest.country}
                    </Link>
                  </Button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Full Schedule Collapsible */}
        <FadeIn direction="up" distance={20}>
          <div className="max-w-2xl mx-auto">
            <button
              onClick={() => setShowFullSchedule(!showFullSchedule)}
              className="w-full flex items-center justify-between p-6 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors border border-border/50"
            >
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-primary" />
                <span className="font-semibold text-lg">View Full 2024–2025 Season Schedule</span>
              </div>
              {showFullSchedule ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>

            {showFullSchedule && (
              <div className="mt-4 p-6 bg-card rounded-xl border border-border/50 space-y-3">
                {fullSchedule.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between py-3 border-b border-border/30 last:border-0"
                  >
                    <span className="text-sm text-muted-foreground font-medium">{item.dates}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{item.location}</span>
                      {item.available && (
                        <span className="text-primary text-xs">★ Training Available</span>
                      )}
                    </div>
                  </div>
                ))}
                <p className="text-xs text-muted-foreground pt-4 text-center italic">
                  During off-season (snowboarding), kite training is unavailable.
                </p>
              </div>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default LocationsCalendar;
