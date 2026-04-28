import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
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
  summary: string;
  ctaText: string;
  ctaLink: string;
  image: string;
}

const LocationCard: React.FC<LocationCardProps> = ({
  flag,
  country,
  location,
  dates,
  summary,
  ctaText,
  ctaLink,
  image,
}) => {
  return (
    <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 h-full flex flex-col">
      <div className="relative h-64 overflow-hidden">
        <img loading="lazy"
          src={image}
          alt={`${country} - ${location}`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2 uppercase">
          <span className="text-3xl">{flag}</span>
          {country}
        </CardTitle>
        <CardDescription className="text-base font-medium uppercase">{location}</CardDescription>
      </CardHeader>

      <CardContent className="flex-grow flex flex-col gap-6">
        <div className="space-y-2">
          {dates.map((date, index) => (
            <p key={index} className="text-sm md:text-base font-semibold text-primary">
              {date}
            </p>
          ))}
        </div>

        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
          {summary}
        </p>

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
      summary: "Flat water, steady wind and warm conditions for focused progression.",
      ctaText: "EXPLORE MORE",
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
      summary: "Red Sea lagoons, reliable wind and a strong setup for beginners and progression.",
      ctaText: "EXPLORE MORE",
      ctaLink: "/kite-safari",
      image: "/lovable-uploads/safari-beach-instruction.jpg"
    },
    {
      flag: "🇨🇾",
      country: "CYPRUS",
      location: "AVDIMOU BEACH",
      dates: ["All Year Round, 2026"],
      summary: "Easy local spot near Limassol for first lessons and regular training.",
      ctaText: "EXPLORE MORE",
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
      summary: "Strong wind, lagoons and downwind routes for a high-energy kite trip.",
      ctaText: "EXPLORE MORE",
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
