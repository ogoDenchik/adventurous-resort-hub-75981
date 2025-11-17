
import React, { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import { useSpring, animated } from '@react-spring/web';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  
  const parallaxProps = useSpring({
    transform: `translateY(${scrollY * 0.3}px)`,
    config: { mass: 1, tension: 120, friction: 14 }
  });
  
  const textFloatProps = useSpring({
    transform: `translateY(${-scrollY * 0.2}px)`,
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
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const scrollToCalendar = () => {
    const calendarSection = document.getElementById('calendar-section');
    if (calendarSection) {
      calendarSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div ref={heroRef} className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-black/50 z-10" />
      <animated.div 
        style={{
          backgroundImage: `url(/lovable-uploads/hero-new-1.jpg)`,
          filter: 'contrast(1.1) brightness(0.9)',
          transform: parallaxProps.transform
        }}
        className="absolute inset-0 w-full h-full bg-cover bg-center"
      />
      
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 z-20">
        <animated.div style={textFloatProps}>
          <h1 
            className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white max-w-5xl leading-tight mb-4 text-shadow-lg"
            style={{
              color: '#FFFFFF',
              textShadow: '0 0 15px rgba(255, 255, 255, 0.7)'
            }}
          >
            YOUR KITESURF COACH<br />IN WORLD'S BEST SPOTS
          </h1>
          <p 
            className="text-lg md:text-xl text-white max-w-2xl mb-8 text-shadow-md"
            style={{
              color: '#FFFFFF',
              textShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
            }}
          >
            Egypt • Vietnam • Brazil • Cyprus<br />
            Proven Step-by-Step Methodology
          </p>
          <button 
            onClick={scrollToCalendar}
            className="btn-primary text-lg hover:shadow-glow transition-all duration-300 transform hover:scale-110"
          >
            🗓 SEE WHERE I AM NOW
          </button>
        </animated.div>
      </div>
      
      <animated.div 
        style={useSpring({
          from: { opacity: 0, transform: 'translateY(20px)' },
          to: { opacity: 1, transform: 'translateY(0px)' },
          delay: 800,
          config: { tension: 120, friction: 14 }
        })}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block"
      >
        <div className="w-8 h-12 rounded-full border-2 border-white/70 flex items-start justify-center hover:border-white hover:shadow-glow transition-all duration-300">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-[slide-down_1.5s_ease-in-out_infinite]" />
        </div>
      </animated.div>
    </div>
  );
};

export default Hero;
