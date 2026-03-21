
import React, { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import { useSpring, animated } from '@react-spring/web';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  
  const parallaxProps = useSpring({
    transform: `translateY(${scrollY * 0.3}px)`,
    config: { mass: 1, tension: 120, friction: 14 }
  });

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const scrollPos = Math.max(0, -rect.top);
        setScrollY(scrollPos);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Preload image
  useEffect(() => {
    const img = new Image();
    img.src = '/lovable-uploads/hero-main-coaching-compressed.jpg';
    img.onload = () => setImageLoaded(true);
  }, []);
  
  const scrollToCalendar = () => {
    const calendarSection = document.getElementById('calendar-section');
    if (calendarSection) {
      calendarSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Staggered entrance springs
  const eyebrow = useSpring({ from: { opacity: 0, transform: 'translateY(16px)' }, to: { opacity: 1, transform: 'translateY(0px)' }, delay: 200, config: { tension: 80, friction: 20 } });
  const headline = useSpring({ from: { opacity: 0, transform: 'translateY(24px)' }, to: { opacity: 1, transform: 'translateY(0px)' }, delay: 450, config: { tension: 80, friction: 20 } });
  const divider = useSpring({ from: { opacity: 0, scaleX: 0 }, to: { opacity: 1, scaleX: 1 }, delay: 700, config: { tension: 80, friction: 20 } });
  const sub = useSpring({ from: { opacity: 0, transform: 'translateY(16px)' }, to: { opacity: 1, transform: 'translateY(0px)' }, delay: 850, config: { tension: 80, friction: 20 } });
  const cta = useSpring({ from: { opacity: 0, transform: 'translateY(12px)' }, to: { opacity: 1, transform: 'translateY(0px)' }, delay: 1050, config: { tension: 80, friction: 20 } });
  const scrollInd = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 1400, config: { tension: 80, friction: 20 } });
  
  return (
    <div ref={heroRef} className="relative h-screen w-full overflow-hidden">
      {/* Loading placeholder */}
      <div 
        className={cn(
          "absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 transition-opacity duration-500",
          imageLoaded ? "opacity-0" : "opacity-100"
        )}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55 z-10" />

      {/* Background image with parallax */}
      <animated.div 
        style={{
          backgroundImage: `url(/lovable-uploads/hero-main-coaching-compressed.jpg)`,
          filter: 'contrast(1.05) brightness(0.88)',
          transform: parallaxProps.transform
        }}
        className={cn(
          "absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-700",
          imageLoaded ? "opacity-100" : "opacity-0"
        )}
      />
      
      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 z-20">
        {/* Eyebrow label */}
        <animated.p
          style={eyebrow}
          className="label-caps text-white/70 mb-6 tracking-widest"
        >
          PRIVATE KITEBOARDING COACH
        </animated.p>

        {/* Main headline — serif italic + uppercase mix */}
        <animated.h1
          style={{ ...headline, textShadow: '0 2px 40px rgba(0,0,0,0.4)' }}
          className="heading-display text-white text-5xl md:text-7xl lg:text-8xl max-w-4xl mb-6 leading-none"
        >
          Your Kitesurf Coach<br />
          <em>in the World's Best Spots</em>
        </animated.h1>

        {/* Thin divider */}
        <animated.div
          style={{ ...divider, transformOrigin: 'center' }}
          className="w-16 h-px bg-white/50 mb-6"
        />

        {/* Sub-heading */}
        <animated.p
          style={sub}
          className="label-caps text-white/80 mb-10 tracking-[0.25em]"
        >
          EGYPT · VIETNAM · BRAZIL · CYPRUS
        </animated.p>

        {/* CTA */}
        <animated.div style={cta}>
          <button
            onClick={scrollToCalendar}
            className="btn-primary-white text-sm"
          >
            See Where I Am Now
          </button>
        </animated.div>
      </div>
      
      {/* Vertical scroll indicator */}
      <animated.div
        style={scrollInd}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2"
      >
        <span className="label-caps text-white/40 text-[10px]">scroll</span>
        <div className="w-px h-10 bg-white/20 relative overflow-hidden">
          <div className="w-full h-full bg-white/70 animate-[slide-down_2s_ease-in-out_infinite]" />
        </div>
      </animated.div>
    </div>
  );
};

export default Hero;
