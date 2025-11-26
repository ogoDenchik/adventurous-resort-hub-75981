import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { BookingPopup } from '@/components/BookingPopup';
import ContactCTA from '@/components/ContactCTA';
import TrustIndicators from '@/components/TrustIndicators';
import CalendarLocations from '@/components/CalendarLocations';
import TrainingPrograms from '@/components/TrainingPrograms';
import MeetYourCoachIntro from '@/components/coach/MeetYourCoachIntro';
import WhyImDifferent from '@/components/coach/WhyImDifferent';
import CoachStatsTrustBar from '@/components/coach/CoachStatsTrustBar';
import WhyMyMethodWorks from '@/components/coach/WhyMyMethodWorks';

const Index: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return <div className="min-h-screen flex flex-col">
      <Navbar />
      <BookingPopup open={isBookingOpen} onOpenChange={setIsBookingOpen} />
      
      <main className="flex-grow">
        <Hero />
        
        {/* 1. Meet Your Coach */}
        <MeetYourCoachIntro />
        
        {/* 2. Why I Am Different */}
        <WhyImDifferent />
        
        {/* 3. Guest Experiences (Reviews Section) */}
        <section className="section-padding container">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 uppercase">
              GUEST EXPERIENCES
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Hear from riders who've joined the OGO family on their kitesurfing adventures around the world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Misha",
                location: "Egypt Kite Safari",
                quote: "I met Denis two years ago. He got me riding independently in just 7 days — and since then, we've been traveling and progressing together non-stop. I love his approach and his methodology. It's clear, structured and incredibly effective.",
                image: "/lovable-uploads/testimonial-misha.jpg",
                delay: 0
              },
              {
                name: "Kate",
                location: "Brazil Trip",
                quote: "Everything was absolutely top level. Training was world-class, the accommodations were excellent, and the whole trip was perfectly organized. I even learned my first backroll!",
                image: "/lovable-uploads/testimonial-kate.jpg",
                delay: 200
              },
              {
                name: "Ilya",
                location: "Vietnam Kite Camp",
                quote: "I really enjoy Denis' approach. He teaches step-by-step — giving small pieces of information that later come together into a full picture. I progressed very fast. Highly recommended.",
                image: "/lovable-uploads/testimonial-ilya-v2.jpg",
                delay: 400
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-xl shadow-md animate-slide-up hover-lift border border-border"
                style={{ animationDelay: `${testimonial.delay}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full mr-4 overflow-hidden flex-shrink-0">
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover scale-150 hover:scale-[1.6] transition-transform duration-300" />
                  </div>
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
        
        {/* 4. Trust Bar (Coach Stats) */}
        <CoachStatsTrustBar />
        
        {/* 5. Numbers Section */}
        <TrustIndicators />
        
        {/* 6. Why My Method Works */}
        <WhyMyMethodWorks />
        
        {/* 7. Calendar & Locations */}
        <div id="calendar-section">
          <CalendarLocations />
        </div>
        
        {/* 8. Training Programs */}
        <TrainingPrograms />
        
        {/* 9. Trip Planning / Planning Information */}
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
