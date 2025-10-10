import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import FeaturedActivities from '@/components/FeaturedActivities';
import SpecialOffers from '@/components/SpecialOffers';
import HomeGallery from '@/components/HomeGallery';
import { BookingPopup } from '@/components/BookingPopup';

import { ArrowRight, Globe, Users, GraduationCap } from 'lucide-react';
import { AdPopup } from '@/components/AdPopup';

const Index: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);

  return <div className="min-h-screen flex flex-col">
      <Navbar />
      <AdPopup 
        onBookNow={() => setIsBookingOpen(true)} 
        onShowInstructions={() => setShowInstructions(true)}
        showInstructions={showInstructions}
        onCloseInstructions={() => setShowInstructions(false)}
      />
      <BookingPopup open={isBookingOpen} onOpenChange={setIsBookingOpen} />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Special Promotion Banner */}
        <div className="bg-green-700 text-white py-3 px-4 text-center shadow-md cursor-pointer hover:bg-green-800 transition-colors" onClick={() => setShowInstructions(true)}>
          <div className="container mx-auto">
            <p className="text-xl font-bold">30% discount for Brazil travel! <span className="underline ml-2 hover:text-yellow-200 transition-colors">Limited time offer</span></p>
          </div>
        </div>
        
        {/* About section */}
        <section className="section-padding container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="relative">
                <img src="/lovable-uploads/community-hug.jpg" alt="OGO Kite Academy Community" className="w-full h-[500px] object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" />
              </div>
            </div>
            
            <div className="animate-slide-up animation-delay-200">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                More than kitesurfing. We build community
              </h2>
              <p className="text-foreground/70 mb-6">
                At OGO Kite Academy, every trip is more than just riding the wind — it's about merging into a global family of kitesurfers, exploring together, and building lifelong connections.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start group hover-lift p-2 rounded-lg transition-all duration-300 hover:bg-green-50">
                  <div className="mr-4 p-2 bg-secondary rounded-full text-green-700 group-hover:bg-green-100 transition-colors duration-300">
                    <Globe size={20} className="group-hover:scale-125 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="font-medium group-hover:text-green-700 transition-colors duration-300">Global Adventures</h3>
                    <p className="text-sm text-foreground/70">
                      Explore the best kite spots worldwide — from Brazil to Cyprus — with a team that knows every detail.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start group hover-lift p-2 rounded-lg transition-all duration-300 hover:bg-green-50">
                  <div className="mr-4 p-2 bg-secondary rounded-full text-green-700 group-hover:bg-green-100 transition-colors duration-300">
                    <Users size={20} className="group-hover:scale-125 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="font-medium group-hover:text-green-700 transition-colors duration-300">Community Spirit</h3>
                    <p className="text-sm text-foreground/70">
                      More than a school — a family. Share emotions, progress together, and create friendships for life.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start group hover-lift p-2 rounded-lg transition-all duration-300 hover:bg-green-50">
                  <div className="mr-4 p-2 bg-secondary rounded-full text-green-700 group-hover:bg-green-100 transition-colors duration-300">
                    <GraduationCap size={20} className="group-hover:scale-125 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="font-medium group-hover:text-green-700 transition-colors duration-300">Certified Progress</h3>
                    <p className="text-sm text-foreground/70">
                      Learn with certified instructors and premium equipment. Safety and growth are always first.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/about" className="inline-flex items-center text-green-700 hover:underline group">
                  Learn more about us <ArrowRight size={16} className="ml-1 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
                <button 
                  onClick={() => setIsBookingOpen(true)}
                  className="inline-flex items-center text-green-700 hover:underline group"
                >
                  Contact us for directions <ArrowRight size={16} className="ml-1 group-hover:translate-x-2 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Special Offers Section */}
        <SpecialOffers />
        
        {/* Gallery Section */}
        <HomeGallery />
        
        {/* Testimonials */}
        <section className="section-padding container">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Guest Experiences
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Hear from riders who've joined the OGO family on their kitesurfing adventures around the world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "M.K.",
                location: "Kite Safari — Egypt",
                quote: "An unforgettable week on the Red Sea! Perfect wind every day and the yacht made it feel like a luxury adventure.",
                image: "/lovable-uploads/b2944dcd-84a0-4ab8-af63-861cd91c2d08.png",
                delay: 0
              },
              {
                name: "Anna L.",
                location: "Brazil Trip",
                quote: "Brazil with OGO was magical — incredible kite spots, amazing instructors, and a group that became like family. Can't wait to go back!",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
                delay: 200
              },
              {
                name: "Tom R.",
                location: "Cyprus Lessons",
                quote: "Learned to kitesurf in just one week thanks to the amazing team in Cyprus. The community vibe and support made all the difference.",
                image: "/lovable-uploads/54f9733a-3115-43f8-8702-ac90313ce5aa.png",
                delay: 400
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-xl shadow-md animate-slide-up hover-lift border border-border"
                style={{ animationDelay: `${testimonial.delay}ms` }}
              >
                <div className="flex items-center mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4 object-cover hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h4 className="font-medium text-base">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-foreground italic">"{testimonial.quote}"</p>
                <div className="mt-4 flex">
                  {[...Array(5)].map((_, starIndex) => <Star key={starIndex} filled={true} />)}
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Newsletter sign-up */}
        <section className="py-16 bg-secondary/50">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                Get Exclusive Updates
              </h2>
              <p className="text-foreground/70 mb-8">
                Subscribe to our newsletter and be the first to know about upcoming trips, special offers, and kite destinations.
              </p>
              <form className="flex flex-col sm:flex-row items-center max-w-md mx-auto gap-3" onSubmit={async (e) => {
                e.preventDefault();
                const emailInput = e.currentTarget.querySelector('input[type="email"]') as HTMLInputElement;
                if (emailInput && emailInput.value) {
                  const { toast } = require("@/hooks/use-toast");
                  const { supabase } = require("@/integrations/supabase/client");
                  
                  try {
                    const payload = {
                      email: emailInput.value,
                      form_type: "newsletter",
                      timestamp: new Date().toISOString(),
                      device_type: /Mobile|Android|iPhone/i.test(navigator.userAgent) ? "mobile" : "desktop",
                      browser_language: navigator.language,
                      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                      platform: navigator.platform,
                    };

                    const { data, error } = await supabase.functions.invoke('forward-webhook', {
                      body: payload
                    });

                    if (error) throw error;

                    toast({
                      title: "Success!",
                      description: "You've been subscribed to our newsletter",
                      variant: "default",
                    });
                    emailInput.value = '';
                  } catch (error) {
                    console.error('Newsletter subscription error:', error);
                    toast({
                      title: "Error",
                      description: "Failed to subscribe. Please try again.",
                      variant: "destructive",
                    });
                  }
                }
              }}>
                <input type="email" placeholder="Your email address" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" required />
                <Button type="submit" variant="default" className="w-full sm:w-auto bg-green-700 hover:bg-green-800 hover:scale-105 transition-transform">
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-muted-foreground mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-20 bg-green-700 text-white relative">
          <div className="absolute inset-0 bg-[url('/lovable-uploads/kite-safari-sunset-1.jpg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-gradient-to-b from-black/55 to-black/35"></div>
          </div>
          <div className="container relative z-10 px-4 text-center">
            <div className="max-w-3xl mx-auto animate-fade-in">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                Your Adventure Awaits!
              </h2>
              <p className="text-lg mb-6 text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                Book your kitesurfing adventure now and create memories that will last a lifetime.
              </p>
              <p className="text-base mb-8 text-white/80 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                Not sure where to go? <a href="#our-programs" className="underline hover:text-white">Explore our destinations</a>
              </p>
              <Button 
                onClick={() => setIsBookingOpen(true)}
                size="lg"
                className="bg-white text-green-700 hover:bg-white/90 font-medium"
              >
                Book Your Adventure Now
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>;
};

// Helper component for star rating
const Star: React.FC<{
  filled: boolean;
}> = ({
  filled
}) => {
  return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-yellow-500 hover:scale-125 transition-transform duration-300">
      <path d="M10 1L12.39 6.55L18.5 7.31L14.25 11.75L15.51 18L10 15.09L4.49 18L5.75 11.75L1.5 7.31L7.61 6.55L10 1Z" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>;
};

export default Index;
