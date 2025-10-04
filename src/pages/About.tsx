import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Leaf, Shield, Award, Users, Heart, BookOpen, Map, Calendar, Mountain, GitBranch, MapPin, MapPinIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const About: React.FC = () => {

  return <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-28 md:pt-32">
        <section className="relative py-20 mb-8">
          <div className="absolute inset-0 bg-[url('/lovable-uploads/about-sunset-reflection.jpg')] bg-cover bg-center opacity-20"></div>
          <div className="relative z-10 container mx-auto text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 animate-fade-in">
              Our Story
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-foreground/80 animate-fade-in animation-delay-200">
              Where adventure meets community, and kitesurfing becomes a way of life
            </p>
          </div>
        </section>
        
        <section className="section-padding container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="relative">
                <img src="/lovable-uploads/about-instructor-student.jpg" alt="Kitesurfing instruction" className="w-full h-[500px] object-cover rounded-xl shadow-lg" />
                <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl hidden md:block">
                  <img src="/lovable-uploads/about-beach-relax.jpg" alt="Beach community" className="w-40 h-32 object-cover rounded-md" />
                </div>
              </div>
            </div>
            
            <div className="animate-slide-up animation-delay-200">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                ✨ Our Mission & Vision
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="bg-secondary p-6 rounded-xl transition-all duration-300 hover:shadow-md">
                  <div className="flex items-center mb-3">
                    <Heart size={22} className="text-accent mr-2" />
                    <h3 className="font-display text-xl font-semibold">Our Mission</h3>
                  </div>
                  <p className="text-foreground/80">
                    At OGO Kite Academy, our mission is to bring people together through kitesurfing adventures and education. We create experiences that combine adrenaline, travel, and authentic connection — helping every rider progress, explore unique destinations, and feel part of a global community.
                  </p>
                </div>
                
                <div className="bg-secondary p-6 rounded-xl transition-all duration-300 hover:shadow-md">
                  <div className="flex items-center mb-3">
                    <BookOpen size={22} className="text-accent mr-2" />
                    <h3 className="font-display text-xl font-semibold">Our Vision</h3>
                  </div>
                  <p className="text-foreground/80">
                    We envision OGO Kite Academy as an international family of explorers and riders who choose freedom over routine, authenticity over all-inclusive, and meaningful progress over passive vacations. Our goal is to set a new standard in kitesurfing trips: safe, inspiring, and extraordinary journeys that change the way people experience travel and sport.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-20 bg-secondary">
          <div className="container px-4">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                💎 Our Core Values
              </h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                The guiding principles that define everything we do at OGO Kite Academy
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[{
                icon: <Shield className="w-8 h-8" />,
                title: "Safety First",
                description: "We care about every rider's progress and wellbeing. Safety is the foundation of trust and joy on the water.",
                delay: 0
              }, {
                icon: <Users className="w-8 h-8" />,
                title: "Community & Vibe",
                description: "We select people not just by skill, but by spirit — because true adventure is about connection and sharing emotions together.",
                delay: 100
              }, {
                icon: <Heart className="w-8 h-8" />,
                title: "Authenticity",
                description: "No cookie-cutter tours. Every trip is unique, extraordinary, and created to surprise and inspire.",
                delay: 200
              }, {
                icon: <Mountain className="w-8 h-8" />,
                title: "Adventure & Progress",
                description: "We believe travel and kitesurfing should challenge, excite, and help you grow — both on the board and in life.",
                delay: 300
              }].map((value, index) => <div key={index} 
                  className="bg-background p-8 rounded-xl text-center shadow-sm animate-slide-up hover:scale-105 hover:shadow-xl transition-all duration-300" 
                  style={{animationDelay: `${value.delay}ms`}}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6 transition-transform duration-300 hover:scale-110">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3">
                    {value.title}
                  </h3>
                  <p className="text-foreground/70">
                    {value.description}
                  </p>
                </div>)}
            </div>
          </div>
        </section>

        <section className="section-padding container">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              📖 Our Journey
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto mb-8">
              From a young explorer in Ukraine to building a global kitesurfing community
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Story Beginning */}
            <div className="grid md:grid-cols-2 gap-8 items-center animate-fade-in">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-display font-bold mb-4">Where It All Started</h3>
                <p className="text-foreground/80 mb-4">
                  It all started when I was 16, growing up in Ukraine. My family and I spent every autumn exploring — packing the car, heading out on road trips, camping in wild places by the sea or mountains, and staying in small hotels just to recharge before continuing.
                </p>
                <p className="text-foreground/80">
                  That's how I discovered that true happiness for me lies in traveling.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <img src="/lovable-uploads/about-campfire-community.jpg" alt="Adventure spirit" className="w-full h-[300px] object-cover rounded-xl shadow-lg" />
              </div>
            </div>

            {/* Discovery */}
            <div className="grid md:grid-cols-2 gap-8 items-center animate-fade-in animation-delay-200">
              <div>
                <img src="/lovable-uploads/about-kitesurfing-discovery.jpg" alt="Discovering kitesurfing" className="w-full h-[300px] object-cover rounded-xl shadow-lg" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold mb-4">The Missing Piece</h3>
                <p className="text-foreground/80 mb-4">
                  But something was missing — the rush, the adrenaline. One day, I saw people flying on kites for the first time. The spins, the jumps, the pure energy — it hit me instantly:
                </p>
                <p className="text-accent font-semibold text-lg italic">
                  "This is what I want to do for the rest of my life."
                </p>
              </div>
            </div>

            {/* The Vision */}
            <div className="grid md:grid-cols-2 gap-8 items-center animate-fade-in animation-delay-300">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-display font-bold mb-4">Building the Dream</h3>
                <p className="text-foreground/80 mb-4">
                  From that moment, the puzzle came together: I wanted to combine travel with teaching kitesurfing in authentic, breathtaking places around the world.
                </p>
                <p className="text-foreground/80">
                  Years of riding, learning, teaching, and exploring dozens of kite spots led me to build OGO Kite Academy.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <img src="/lovable-uploads/about-instructors-teaching.jpg" alt="Teaching kitesurfing" className="w-full h-[300px] object-cover rounded-xl shadow-lg" />
              </div>
            </div>

            {/* Today */}
            <div className="bg-secondary p-8 rounded-xl animate-fade-in animation-delay-400">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center">
                    <Heart size={32} className="text-accent-foreground" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold mb-4">Today</h3>
                  <p className="text-foreground/80">
                    We continue this mission with trusted partners, certified instructors, and carefully chosen destinations — making sure every trip is not just a holiday, but an adventure that connects people and creates lifelong memories.
                  </p>
                </div>
              </div>
            </div>

            {/* Gallery */}
            <div className="grid grid-cols-2 gap-4 animate-fade-in animation-delay-500">
              <img src="/lovable-uploads/about-team-cars.jpg" alt="Team adventures" className="w-full h-[250px] object-cover rounded-xl shadow-lg" style={{objectPosition: 'center calc(50% + 250px)'}} />
              <img src="/lovable-uploads/about-team-community.jpg" alt="OGO community" className="w-full h-[250px] object-cover object-[center_30%] rounded-xl shadow-lg" />
            </div>
          </div>
        </section>
        
        
        <section className="py-20 bg-accent text-accent-foreground relative">
          <div className="absolute inset-0 bg-[url('/lovable-uploads/brazil-kite-aerial.jpg')] bg-cover bg-center opacity-20"></div>
          <div className="container relative z-10 px-4 text-center">
            <div className="max-w-3xl mx-auto animate-fade-in">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                Ready to Join OGO?
              </h2>
              <p className="text-xl mb-8 text-accent-foreground/90">
                Explore our upcoming kite safaris and become part of our global community
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/kite-safari" className="inline-block px-8 py-4 bg-white text-accent font-medium text-lg rounded-md transition-all duration-300 hover:bg-white/90 hover:shadow-lg hover:translate-y-[-2px]">
                  View Kite Safaris
                </Link>
                <Link to="/contact" className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white font-medium text-lg rounded-md transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:translate-y-[-2px]">
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>;
};

export default About;
