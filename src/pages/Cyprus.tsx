import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { Radio, Award, GraduationCap, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Cyprus: React.FC = () => {
  const cyprusPhotos = [
    '/lovable-uploads/cyprus-beach-lesson.jpg',
    '/lovable-uploads/cyprus-happy-student.jpg',
    '/lovable-uploads/cyprus-sunset-lesson.jpg',
    '/lovable-uploads/cyprus-tandem-teaching.jpg',
    '/lovable-uploads/cyprus-sunset-riding.jpg',
    '/lovable-uploads/cyprus-instructor-teaching.jpg',
    '/lovable-uploads/cyprus-riding-action.jpg',
    '/lovable-uploads/cyprus-lifestyle-sunset.jpg',
    '/lovable-uploads/cyprus-gear-sunset.jpg',
    '/lovable-uploads/cyprus-student-success.jpg',
  ];

  const handleWhatsApp = () => {
    window.open('https://wa.me/48884035225?text=Hi!%20I%27m%20interested%20in%20kitesurfing%20in%20Cyprus', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ScrollToTop />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/lovable-uploads/cyprus-hero-aerial.jpg)' }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 animate-fadeIn">
            Kitesurfing in Cyprus — Your European Gateway to Kite Adventures
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fadeIn">
            You don't need to fly far to Brazil or Egypt — you can start your kitesurfing journey right here in Europe.
          </p>
        </div>
      </section>

      {/* Why Cyprus Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: 'url(/lovable-uploads/cyprus-hero-sunset-silhouette.jpg)' }}
        />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Why Cyprus?</h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Cyprus is a unique destination with over 7 kite spots for both learning and progression. 
              It's the perfect place to start your kitesurfing journey, right in the heart of Europe.
            </p>
          </div>
        </div>
      </section>

      {/* Our Advantages */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-16">Our Advantages</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card p-8 rounded-lg text-center hover-lift">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <Radio className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Modern Technology</h3>
              <p className="text-muted-foreground">
                We use the newest BBTalking 3.0 communication system for seamless instructor-student connection.
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg text-center hover-lift">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Premium Equipment</h3>
              <p className="text-muted-foreground">
                Top-tier gear from leading kite brands (Duotone) ensuring safety and performance.
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg text-center hover-lift">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Certified Instructors</h3>
              <p className="text-muted-foreground">
                All our instructors are certified and speak Russian, English, and Greek.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Start in Cyprus */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-8">Why Start in Cyprus?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-center mb-8">
              Cyprus offers perfect conditions for beginners and intermediates. Learn in safe flat-water lagoons 
              with steady wind. Build confidence and skills — and then join our future adventures in{' '}
              <Link to="/brazil" className="text-primary hover:underline font-semibold">Brazil</Link> or{' '}
              <Link to="/kite-safari" className="text-primary hover:underline font-semibold">Kite Safari</Link> in Egypt.
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-8">
              Learn the Basics — Water Start Tutorial
            </h2>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/jn9oejNBv2A"
                title="Water Start Tutorial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-12">Cyprus Vibes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
            {cyprusPhotos.map((photo, index) => (
              <div 
                key={index} 
                className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer hover-lift"
              >
                <img
                  src={photo}
                  alt={`Cyprus kitesurfing ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Ready to start your kitesurfing journey in Cyprus?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get in touch with us on WhatsApp and let's plan your adventure!
            </p>
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 gap-3"
              onClick={handleWhatsApp}
            >
              <MessageCircle className="w-5 h-5" />
              Message us on WhatsApp
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              📲 +48 884 035 225
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Cyprus;
