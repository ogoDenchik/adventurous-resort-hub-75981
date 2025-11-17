import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import FeaturedActivities from '@/components/FeaturedActivities';
import SpecialOffers from '@/components/SpecialOffers';
import { BookingPopup } from '@/components/BookingPopup';
import ContactCTA from '@/components/ContactCTA';

import { ArrowRight, Globe, Users, GraduationCap } from 'lucide-react';
import TrustIndicators from '@/components/TrustIndicators';
import CalendarLocations from '@/components/CalendarLocations';
import TrainingPrograms from '@/components/TrainingPrograms';
import MeetYourCoach from '@/components/MeetYourCoach';

const Index: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return <div className="min-h-screen flex flex-col">
      <Navbar />
      <BookingPopup open={isBookingOpen} onOpenChange={setIsBookingOpen} />
      
      <main className="flex-grow">
        <Hero />
        <TrustIndicators />
        <div id="calendar-section">
          <CalendarLocations />
        </div>
        <TrainingPrograms />
        
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
        
        {/* Meet Your Coach Section */}
        <MeetYourCoach />
        
        {/* Special Offers Section */}
        <SpecialOffers />
        
        {/* Contact CTA Section */}
        <ContactCTA />
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
