import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const Brazil: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ScrollToTop />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Kitesurfing in Brazil
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground/80 mb-8">
                Discover the best kitesurfing spots in Brazil with OGO Kite Academy. 
                From the famous beaches of the northeast to hidden gems along the coast, 
                experience world-class conditions and unforgettable adventures.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Top Locations</h3>
                  <ul className="space-y-2">
                    <li>Jericoacoara</li>
                    <li>Cumbuco</li>
                    <li>Icaraí de Amontada</li>
                    <li>Paracuru</li>
                    <li>Taiba</li>
                  </ul>
                </div>
                
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Best Season</h3>
                  <p className="mb-4">July to January</p>
                  <h4 className="font-semibold mb-2">Wind Conditions</h4>
                  <p>Consistent trade winds, perfect for all levels</p>
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

export default Brazil;
