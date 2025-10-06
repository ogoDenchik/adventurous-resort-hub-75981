
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

interface ProgramProps {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  link: string;
}

const Program: React.FC<ProgramProps> = ({
  title,
  subtitle,
  description,
  imageUrl,
  link
}) => {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="flex items-center gap-2 text-base">
          <Calendar size={16} />
          {subtitle}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pb-4">
        <p className="text-foreground/70">{description}</p>
      </CardContent>
      
      <CardFooter>
        <Button asChild className="w-full">
          <Link to={link}>Learn More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

const SpecialOffers: React.FC = () => {
  return (
    <section id="our-programs" className="py-16 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our Programs</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose your perfect kitesurfing adventure with OGO Kite Academy
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Program 
            title="Kite Safari"
            subtitle="All Year Around"
            description="Join our unique yacht-based kite adventures on the Red Sea. Explore multiple spots in one trip, enjoy stable wind, community vibes, and unforgettable sessions."
            imageUrl="/lovable-uploads/hero-kite-action.jpg"
            link="/kite-safari"
          />
          
          <Program 
            title="Brazil"
            subtitle="November 4 – November 18"
            description="Ride world-famous lagoons and ocean waves in Brazil. A two-week adventure full of downwinds, progression, and cultural experiences in a vibrant kite paradise."
            imageUrl="/lovable-uploads/hero-group-splash.jpg"
            link="/brazil"
          />
          
          <Program 
            title="Cyprus"
            subtitle="All Year Around Education"
            description="Learn and progress at our home base in Cyprus. Ideal conditions for beginners and intermediates, with certified instructors and premium equipment."
            imageUrl="/lovable-uploads/hero-island-view.jpg"
            link="/cyprus"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
