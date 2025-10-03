import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const KiteSafari: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ScrollToTop />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Kite Safari Adventures
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground/80 mb-8">
                Experience the ultimate kitesurfing adventure with OGO Kite Academy's Kite Safari program. 
                Explore multiple world-class kitesurfing destinations in one unforgettable journey.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">What's Included</h3>
                  <ul className="space-y-2">
                    <li>Professional instruction</li>
                    <li>All equipment provided</li>
                    <li>Accommodation</li>
                    <li>Airport transfers</li>
                    <li>Multiple destinations</li>
                  </ul>
                </div>
                
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Perfect For</h3>
                  <ul className="space-y-2">
                    <li>Intermediate to advanced riders</li>
                    <li>Adventure seekers</li>
                    <li>Those wanting variety</li>
                    <li>Group trips</li>
                    <li>Solo travelers</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default KiteSafari;
