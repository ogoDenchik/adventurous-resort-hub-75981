
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ScrollAnimationWrapper } from '@/hooks/use-scroll-animation';

type ActivityProps = {
  title: string;
  description: string;
  image: string;
  link: string;
  delay: number;
}

const ActivityCard: React.FC<ActivityProps> = ({ title, description, image, link, delay }) => {
  return (
    <div 
      className={cn(
        "group relative overflow-hidden rounded-xl shadow-md transition-all duration-500 animate-fade-in",
        "hover:shadow-xl card-hover"
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="aspect-[4/5] relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>
      
      <div className="absolute bottom-0 p-6 w-full">
        <h3 className="text-2xl font-display font-semibold text-white mb-2">{title}</h3>
        <p className="text-white/80 mb-4 line-clamp-2">{description}</p>
        <Link 
          to={link}
          className="inline-flex items-center text-white group-hover:translate-x-1 transition-transform duration-300"
        >
          Explore <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

const FeaturedActivities: React.FC = () => {
  const activities = [
    {
      id: 1,
      title: "Brazil",
      description: "Experience the ultimate kitesurfing paradise with perfect winds, endless lagoons, and vibrant Brazilian culture.",
      image: "/lovable-uploads/safari-woman-yacht-riding.jpg",
      link: "/brazil"
    },
    {
      id: 2,
      title: "Kite Safari",
      description: "Sail the Red Sea aboard a luxury yacht, exploring Egypt's hidden kite spots and pristine waters.",
      image: "/lovable-uploads/kite-safari-yacht-action.jpg",
      link: "/kite-safari"
    },
    {
      id: 3,
      title: "Cyprus",
      description: "Learn kitesurfing in the crystal-clear Mediterranean with professional instructors and year-round sunshine.",
      image: "/lovable-uploads/cyprus-hero-sunset-action.jpg",
      link: "/cyprus"
    }
  ];
  
  return (
    <section className="section-padding container" id="our-programs">
      <ScrollAnimationWrapper animation="animate-slide-up opacity-100" className="mb-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our Programs</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Choose your next kitesurfing adventure from our carefully curated destinations around the world.
          </p>
        </div>
      </ScrollAnimationWrapper>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {activities.map((activity, index) => (
          <ScrollAnimationWrapper 
            key={activity.id}
            animation="animate-slide-up opacity-100" 
            delay={index * 150}
            threshold={0.2}
          >
            <ActivityCard 
              title={activity.title}
              description={activity.description}
              image={activity.image}
              link={activity.link}
              delay={index * 100}
            />
          </ScrollAnimationWrapper>
        ))}
      </div>
    </section>
  );
};

export default FeaturedActivities;
