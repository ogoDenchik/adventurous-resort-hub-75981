import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const Cyprus: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ScrollToTop />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Kitesurfing in Cyprus
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground/80 mb-8">
                Experience kitesurfing in the crystal-clear waters of the Mediterranean. 
                Cyprus offers perfect wind conditions, warm waters year-round, and stunning beaches 
                that make it an ideal destination for kitesurfers of all levels.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Top Spots</h3>
                  <ul className="space-y-2">
                    <li>Paphos</li>
                    <li>Limassol</li>
                    <li>Larnaca</li>
                    <li>Ayia Napa</li>
                    <li>Protaras</li>
                  </ul>
                </div>
                
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Best Season</h3>
                  <p className="mb-4">May to October</p>
                  <h4 className="font-semibold mb-2">Why Cyprus?</h4>
                  <ul className="space-y-1">
                    <li>Warm Mediterranean climate</li>
                    <li>Flat water lagoons</li>
                    <li>Consistent winds</li>
                    <li>Beautiful beaches</li>
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

export default Cyprus;
