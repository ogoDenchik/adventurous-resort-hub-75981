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
          
          <p className="text-xl md:text-2xl text-white/90 mb-6">
            10 Days in Asia's Hidden Kitesurfing Paradise
          </p>
          
          <Badge variant="secondary" className="mb-8 px-6 py-3 text-base md:text-lg bg-white/90 text-gray-900">
            <span className="font-semibold">2026:</span>
            <span className="mx-2">•</span>
            <span>20–30 January</span>
            <span className="mx-2">•</span>
            <span>13–23 February</span>
          </Badge>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
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

      <Footer />
    </div>
  );
};

export default Vietnam;
