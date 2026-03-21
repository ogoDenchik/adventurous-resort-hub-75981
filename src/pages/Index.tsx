import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { EnhancedBookingPopup } from '@/components/EnhancedBookingPopup';
import ContactCTA from '@/components/ContactCTA';
import TrustIndicators from '@/components/TrustIndicators';
import CalendarLocations from '@/components/CalendarLocations';
import TrainingPrograms from '@/components/TrainingPrograms';
import MeetYourCoachIntro from '@/components/coach/MeetYourCoachIntro';
import WhyImDifferent from '@/components/coach/WhyImDifferent';
import CoachStatsTrustBar from '@/components/coach/CoachStatsTrustBar';
import WhyMyMethodWorks from '@/components/coach/WhyMyMethodWorks';
import { RevealOnScroll, AnimatedLine, StaggeredList } from '@/hooks/use-invisible-animation';

const testimonials = [
  {
    num: '01',
    name: 'Misha',
    location: 'Egypt Kite Safari',
    quote: 'I met Denis two years ago. He got me riding independently in just 7 days — and since then, we\'ve been traveling and progressing together non-stop. I love his approach and his methodology. It\'s clear, structured and incredibly effective.',
    image: '/lovable-uploads/testimonial-misha.jpg',
  },
  {
    num: '02',
    name: 'Kate',
    location: 'Brazil Trip',
    quote: 'Everything was absolutely top level. Training was world-class, the accommodations were excellent, and the whole trip was perfectly organized. I even learned my first backroll!',
    image: '/lovable-uploads/testimonial-kate.jpg',
  },
  {
    num: '03',
    name: 'Ilya',
    location: 'Vietnam Kite Camp',
    quote: 'I really enjoy Denis\' approach. He teaches step-by-step — giving small pieces of information that later come together into a full picture. I progressed very fast. Highly recommended.',
    image: '/lovable-uploads/testimonial-ilya-v2.jpg',
  },
];

const Index: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <EnhancedBookingPopup 
        open={isBookingOpen} 
        onOpenChange={setIsBookingOpen}
        backgroundImage="/lovable-uploads/hero-main-coaching-compressed.jpg"
        title="Book Your Adventure"
        description="Fill in your details and we'll get back to you shortly"
      />
      
      <main className="flex-grow">
        <Hero />
        
        <CoachStatsTrustBar />
        
        {/* 01 — Meet Your Coach */}
        <MeetYourCoachIntro />
        
        {/* 02 — Why I Am Different */}
        <WhyImDifferent />
        
        {/* 03 — Guest Experiences */}
        <section className="section-padding bg-muted/20">
          <div className="container max-w-4xl">

            <RevealOnScroll>
              <p className="section-number mb-6">// 03 — Guest Experiences</p>
            </RevealOnScroll>

            <AnimatedLine className="mb-16" />

            <RevealOnScroll delay={100} className="mb-14">
              <h3 className="heading-display text-4xl md:text-5xl text-foreground">
                What Riders Say
              </h3>
            </RevealOnScroll>

            <StaggeredList staggerMs={130} baseDelay={150}>
              {testimonials.map((t) => (
                <div key={t.num} className="group">
                  <div className="py-8 flex gap-6 md:gap-12">
                    <span className="section-number text-base flex-shrink-0 pt-1">{t.num}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 overflow-hidden flex-shrink-0">
                          <img
                            src={t.image}
                            alt={t.name}
                            className="w-full h-full object-cover scale-150"
                          />
                        </div>
                        <div>
                          <p className="label-caps text-foreground">{t.name}</p>
                          <p className="label-caps text-muted-foreground">{t.location}</p>
                        </div>
                      </div>
                      <p className="heading-display-italic text-xl md:text-2xl text-foreground/80 leading-relaxed">
                        "{t.quote}"
                      </p>
                    </div>
                  </div>
                  <div className="section-divider" />
                </div>
              ))}
            </StaggeredList>

          </div>
        </section>
        
        {/* 05 — Why My Method Works */}
        <WhyMyMethodWorks />
        
        {/* Calendar & Locations */}
        <div id="calendar-section">
          <CalendarLocations />
        </div>
        
        {/* Training Programs */}
        <TrainingPrograms />
        
        {/* Numbers */}
        <TrustIndicators />
        
        {/* Contact CTA */}
        <ContactCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

