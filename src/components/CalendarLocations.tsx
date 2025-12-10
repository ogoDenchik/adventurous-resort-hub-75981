import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface LocationCardProps {
  flag: string;
  country: string;
  location: string;
  dates: string[];
  highlights: string[];
  services: string[];
  badge: string;
  badgeVariant: "default" | "secondary" | "destructive" | "outline";
  ctaText: string;
  ctaLink: string;
  image: string;
}

const LocationCard: React.FC<LocationCardProps> = ({
  flag,
  country,
  location,
  dates,
  highlights,
  services,
  badge,
  badgeVariant,
  ctaText,
  ctaLink,
  image,
}) => {
  return (
    <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 h-full flex flex-col">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={`${country} - ${location}`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4">
          <Badge variant={badgeVariant} className="text-xs font-semibold uppercase">
            {badge}
          </Badge>
        </div>
      </div>
      
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2 uppercase">
          <span className="text-3xl">{flag}</span>
          {country}
        </CardTitle>
        <CardDescription className="text-base font-medium uppercase">{location}</CardDescription>
      </CardHeader>

      <CardContent className="flex-grow flex flex-col gap-4">
        {/* Dates */}
        <div className="space-y-1">
          {dates.map((date, index) => (
            <p key={index} className="text-sm font-semibold text-primary">
              • {date}
            </p>
          ))}
        </div>

        {/* Highlights */}
        <div className="space-y-2">
          <p className="text-sm font-semibold text-muted-foreground uppercase">HIGHLIGHTS:</p>
          <div className="space-y-1">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Available Services */}
        <div className="space-y-2">
          <p className="text-sm font-semibold text-muted-foreground uppercase">AVAILABLE:</p>
          <div className="space-y-1">
            {services.map((service, index) => (
              <p key={index} className="text-sm pl-4">
                • {service}
              </p>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <Button asChild className="mt-auto w-full" size="lg">
          <Link to={ctaLink}>{ctaText}</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

const CalendarLocations: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [startAutoplay, setStartAutoplay] = useState(false);

  const autoplayPlugin = useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
    })
  );

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startAutoplay) {
            setTimeout(() => {
              setStartAutoplay(true);
            }, 5000);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [startAutoplay]);

  const locations: LocationCardProps[] = [
    {
      flag: "🇻🇳",
      country: "VIETNAM",
      location: "PHAN RANG",
      dates: [
        "January 20 – January 30, 2026 — SOLD OUT",
        "February 13 – February 23, 2026 — SOLD OUT"
      ],
      highlights: [
        "Perfect flat water",
        "Consistent 15–25 knots",
        "Warm climate",
        "Uncrowded authentic spot"
      ],
      services: [
        "Private Coaching (€800 / 10h)",
        "Kite Camp (7–10 days, from €1200)",
        "Refresh Course (€270 / 3h)",
        "Equipment Rental (€85 / session)"
      ],
      badge: "SOLD OUT",
      badgeVariant: "destructive",
      ctaText: "EXPLORE VIETNAM",
      ctaLink: "/vietnam",
      image: "/lovable-uploads/hero-kite-action.jpg"
    },
    {
      flag: "🇪🇬",
      country: "EGYPT",
      location: "EL GOUNA / RED SEA",
      dates: [
        "April 11 – April 18, 2026",
        "April 18 – April 25, 2026",
        "April 30 – May 7, 2026"
      ],
      highlights: [
        "World-class lagoons",
        "El Gouna / Red Sea Islands",
        "300+ sunny days",
        "Ideal for beginners"
      ],
      services: [
        "Private Coaching (€800 / 10h)",
        "1-to-1 Premium Training (€1500 / 10h)",
        "Kite Safari (custom pricing)",
        "Refresh Course (€270 / 3h)",
        "Equipment Rental (€85 / session)"
      ],
      badge: "BOOKING OPEN",
      badgeVariant: "default",
      ctaText: "EXPLORE EGYPT",
      ctaLink: "/kite-safari",
      image: "/lovable-uploads/safari-beach-instruction.jpg"
    },
    {
      flag: "🇨🇾",
      country: "CYPRUS",
      location: "AVDIMOU BEACH",
      dates: ["All Year Round, 2026"],
      highlights: [
        "Ideal for first steps",
        "Shallow water & steady wind",
        "BbTalkin communication system",
        "Duotone premium equipment"
      ],
      services: [
        "Private Coaching (full package range)",
        "Video Analysis (+€20 / session)",
        "Progression Lessons",
        "Equipment Included"
      ],
      badge: "ALWAYS AVAILABLE",
      badgeVariant: "secondary",
      ctaText: "EXPLORE CYPRUS",
      ctaLink: "/cyprus",
      image: "/lovable-uploads/cyprus-hero-sunset-action.jpg"
    },
    {
      flag: "🇧🇷",
      country: "BRAZIL",
      location: "BEST SPOTS",
      dates: [
        "November 1 – November 15, 2026",
        "November 20 – December 4, 2026"
      ],
      highlights: [
        "Strong daily wind",
        "Flatwater lagoons",
        "Downwinds",
        "Fast progression environment"
      ],
      services: [
        "Kite Adventure Trips",
        "Downwind Experiences",
        "Private Coaching",
        "Group Coaching Packages"
      ],
      badge: "SEASON OPEN",
      badgeVariant: "default",
      ctaText: "EXPLORE BRAZIL",
      ctaLink: "/brazil",
      image: "/lovable-uploads/brazil-hero-main.png"
    }
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-to-b from-background to-muted/20">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 uppercase">
            📅 CALENDAR / LOCATIONS
          </h2>
          <p className="text-xl text-muted-foreground mb-2 uppercase">
            FOLLOWING THE PERFECT WIND SEASONS WORLDWIDE
          </p>
          <p className="text-base text-muted-foreground">
            I move between the world's best kitesurfing spots depending on wind season and conditions.
            Here are the locations where I teach:
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-6 lg:gap-8">
          {locations.map((location, index) => (
            <LocationCard key={index} {...location} />
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel 
            className="w-full"
            plugins={startAutoplay ? [autoplayPlugin.current] : []}
            opts={{
              loop: true,
            }}
          >
            <CarouselContent>
              {locations.map((location, index) => (
                <CarouselItem key={index}>
                  <LocationCard {...location} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-6" />
            <CarouselNext className="-right-6" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default CalendarLocations;
