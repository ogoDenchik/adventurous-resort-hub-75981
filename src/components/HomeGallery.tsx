
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ScrollAnimationWrapper } from '@/hooks/use-scroll-animation';
import { useSpring, animated } from '@react-spring/web';
import TiltCard from './TiltCard';

const galleryImages = [
  {
    id: 1,
    src: "/lovable-uploads/brazil-kite-aerial.jpg",
    alt: "Kitesurfing action in Brazil",
  },
  {
    id: 2,
    src: "/lovable-uploads/cyprus-sunset-riding.jpg",
    alt: "Sunset kitesurfing in Cyprus",
  },
  {
    id: 3,
    src: "/lovable-uploads/kite-safari-yacht.jpg",
    alt: "Kite Safari yacht adventure",
  },
  {
    id: 4,
    src: "/lovable-uploads/about-team-community.jpg", 
    alt: "OGO Kite Academy community",
  },
  {
    id: 5,
    src: "/lovable-uploads/brazil-beach-lesson.jpg", 
    alt: "Kite lesson on the beach",
  },
  {
    id: 6, 
    src: "/lovable-uploads/gallery-sunset-jump.jpg",
    alt: "Kitesurfing jump at sunset"
  },
  {
    id: 7,
    src: "/lovable-uploads/safari-group-riding.jpg",
    alt: "Group kitesurfing session"
  },
  {
    id: 8,
    src: "/lovable-uploads/cyprus-instructor-teaching.jpg",
    alt: "Professional kite instruction"
  },
  {
    id: 9,
    src: "/lovable-uploads/brazil-sunset-team.jpg",
    alt: "Team at sunset in Brazil"
  },
  {
    id: 10,
    src: "/lovable-uploads/kite-safari-action-1.jpg",
    alt: "Kite Safari action"
  },
  {
    id: 11,
    src: "/lovable-uploads/cyprus-beach-lesson.jpg",
    alt: "Beach lesson in Cyprus"
  },
  {
    id: 12,
    src: "/lovable-uploads/brazil-lagoon-girl.jpg",
    alt: "Kitesurfing at Brazilian lagoon"
  },
  {
    id: 13,
    src: "/lovable-uploads/safari-tandem-action.jpg",
    alt: "Tandem kitesurfing"
  },
  {
    id: 14,
    src: "/lovable-uploads/gallery-action-yacht.jpg",
    alt: "Kitesurfing from yacht"
  },
  {
    id: 15,
    src: "/lovable-uploads/brazil-kite-trick.jpg",
    alt: "Kite trick in Brazil"
  },
  {
    id: 16,
    src: "/lovable-uploads/cyprus-riding-action.jpg",
    alt: "Action riding in Cyprus"
  },
  {
    id: 17,
    src: "/lovable-uploads/kite-safari-sunset-1.jpg",
    alt: "Safari sunset session"
  },
  {
    id: 18,
    src: "/lovable-uploads/about-kitesurfing-discovery.jpg",
    alt: "Discovering kitesurfing"
  },
  {
    id: 19,
    src: "/lovable-uploads/gallery-group-sunset-kites.jpg",
    alt: "Group session at sunset"
  },
  {
    id: 20,
    src: "/lovable-uploads/brazil-dunes-team.jpg",
    alt: "Team at Brazilian dunes"
  }
];

const HomeGallery: React.FC = () => {
  const [api, setApi] = useState<any>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollRatio, setScrollRatio] = useState(0);
  
  // Parallax effect
  const parallaxHeading = useSpring({
    transform: `translateY(${scrollRatio * -30}px)`,
    opacity: 1 - (scrollRatio * 0.5),
    config: { tension: 170, friction: 26 }
  });
  
  // Element position tracking for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculate how far the element is through the viewport (0 = just entered, 1 = just left)
        // This creates a value between 0 and 1 that we can use for animations
        const percentageThrough = 1 - (rect.top / windowHeight);
        
        if (percentageThrough >= 0 && percentageThrough <= 1) {
          setScrollRatio(percentageThrough);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    if (!api) return;
    
    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000); // Auto scroll every 3 seconds
    
    return () => clearInterval(interval);
  }, [api]);

  return (
    <section ref={sectionRef} className="section-padding bg-secondary/40 overflow-hidden">
      <div className="container relative">
        <animated.div style={parallaxHeading} className="mb-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Explore Our Gallery
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Discover the stunning moments, epic adventures, and incredible community that make OGO Kite Academy special
            </p>
          </div>
        </animated.div>
        
        <ScrollAnimationWrapper animation="animate-fade-in opacity-100" delay={200}>
          <div className="relative mx-auto max-w-6xl px-12">
            <Carousel 
              className="w-full" 
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {galleryImages.map((image, index) => (
                  <CarouselItem key={image.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <TiltCard 
                      perspective={1200} 
                      tiltFactor={20} 
                      scale={1.05} 
                      className="h-96 md:h-[500px]"
                    >
                      <div className="group relative overflow-hidden rounded-xl shadow-md transition-all duration-300 h-full">
                        <img 
                          src={image.src} 
                          alt={image.alt} 
                          className="w-full h-full object-cover transition-transform duration-500" 
                          style={{ transform: `translateZ(30px)` }}
                        />
                        <div 
                          className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
                          style={{ transform: `translateZ(40px)` }}
                        >
                          <p className="text-white p-4 font-medium">{image.alt}</p>
                        </div>
                      </div>
                    </TiltCard>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-4 bg-background/80 backdrop-blur-sm hover:bg-background border-border" />
              <CarouselNext className="-right-4 bg-background/80 backdrop-blur-sm hover:bg-background border-border" />
            </Carousel>
          </div>
        </ScrollAnimationWrapper>
        
        <ScrollAnimationWrapper animation="animate-fade-in opacity-100" delay={400}>
          <div className="text-center mt-10">
            <Link to="/gallery" className="btn-primary inline-flex items-center gap-2 hover-scale whitespace-nowrap">
              View Full Gallery <ArrowRight size={16} />
            </Link>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};

export default HomeGallery;
