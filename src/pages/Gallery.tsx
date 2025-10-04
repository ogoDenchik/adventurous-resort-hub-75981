
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const galleryImages = [
    // Sunset & Golden Hour Action
    { id: 1, src: "/lovable-uploads/gallery-sunset-jump.jpg", alt: "Epic sunset jump", category: "action" },
    { id: 2, src: "/lovable-uploads/gallery-sunset-riding.jpg", alt: "Sunset kitesurfing session", category: "action" },
    { id: 3, src: "/lovable-uploads/brazil-kite-trick.jpg", alt: "Advanced trick at sunset", category: "action" },
    
    // Community & Group Vibes
    { id: 4, src: "/lovable-uploads/gallery-group-sunset-kites.jpg", alt: "OGO community at sunset", category: "community" },
    { id: 5, src: "/lovable-uploads/gallery-group-splash.jpg", alt: "Team celebration in the water", category: "community" },
    { id: 6, src: "/lovable-uploads/community-hug.jpg", alt: "OGO family moments", category: "community" },
    { id: 7, src: "/lovable-uploads/about-team-community.jpg", alt: "Community gathering", category: "community" },
    { id: 8, src: "/lovable-uploads/brazil-sunset-team.jpg", alt: "Team sunset session", category: "community" },
    
    // Training & Teaching
    { id: 9, src: "/lovable-uploads/gallery-instructor-teaching.jpg", alt: "Professional kite instruction", category: "training" },
    { id: 10, src: "/lovable-uploads/gallery-beach-boards.jpg", alt: "Students with equipment", category: "training" },
    { id: 11, src: "/lovable-uploads/about-instructor-student.jpg", alt: "One-on-one coaching", category: "training" },
    { id: 12, src: "/lovable-uploads/about-instructors-teaching.jpg", alt: "Expert instructors at work", category: "training" },
    { id: 13, src: "/lovable-uploads/brazil-beach-lesson.jpg", alt: "Beach training session", category: "training" },
    
    // Action & Riding
    { id: 14, src: "/lovable-uploads/gallery-action-yacht.jpg", alt: "Kiting with yacht safari", category: "action" },
    { id: 15, src: "/lovable-uploads/gallery-tandem-riding.jpg", alt: "Tandem kiting fun", category: "action" },
    { id: 16, src: "/lovable-uploads/kite-safari-action-1.jpg", alt: "Safari kiting action", category: "action" },
    { id: 17, src: "/lovable-uploads/kite-safari-action-2.jpg", alt: "Advanced riding techniques", category: "action" },
    { id: 18, src: "/lovable-uploads/hero-kite-action.jpg", alt: "High-performance kitesurfing", category: "action" },
    { id: 19, src: "/lovable-uploads/hero-kite-learning.jpg", alt: "Learning progression", category: "action" },
    
    // Brazil Locations
    { id: 20, src: "/lovable-uploads/brazil-hero-main.png", alt: "Brazil kiting paradise", category: "location" },
    { id: 21, src: "/lovable-uploads/brazil-kite-aerial.jpg", alt: "Aerial view Brazil spot", category: "location" },
    { id: 22, src: "/lovable-uploads/brazil-lagoon-girl.jpg", alt: "Perfect lagoon conditions", category: "location" },
    { id: 23, src: "/lovable-uploads/brazil-kites-beach.jpg", alt: "Brazil beach setup", category: "location" },
    { id: 24, src: "/lovable-uploads/brazil-location-jeri.jpg", alt: "Jericoacoara spot", category: "location" },
    { id: 25, src: "/lovable-uploads/brazil-location-cumbuco.jpg", alt: "Cumbuco location", category: "location" },
    { id: 26, src: "/lovable-uploads/brazil-location-barra.jpg", alt: "Barra Grande", category: "location" },
    { id: 27, src: "/lovable-uploads/brazil-location-guajiru.jpg", alt: "Guajiru spot", category: "location" },
    { id: 28, src: "/lovable-uploads/brazil-dunes-team.jpg", alt: "Dunes adventure", category: "location" },
    
    // Lifestyle & Relaxation
    { id: 29, src: "/lovable-uploads/about-beach-relax.jpg", alt: "Beach lifestyle", category: "lifestyle" },
    { id: 30, src: "/lovable-uploads/brazil-beach-relax.jpg", alt: "Relaxing between sessions", category: "lifestyle" },
    { id: 31, src: "/lovable-uploads/about-campfire-community.jpg", alt: "Evening campfire vibes", category: "lifestyle" },
    { id: 32, src: "/lovable-uploads/about-sunset-reflection.jpg", alt: "Sunset reflections", category: "lifestyle" },
    { id: 33, src: "/lovable-uploads/about-motorbike-adventure.jpg", alt: "Adventure beyond kiting", category: "lifestyle" },
    
    // Yacht Safaris
    { id: 34, src: "/lovable-uploads/kite-safari-yacht.jpg", alt: "Luxury yacht safari", category: "safari" },
    { id: 35, src: "/lovable-uploads/kite-safari-yacht-kiting.jpg", alt: "Yacht-based kiting", category: "safari" },
    { id: 36, src: "/lovable-uploads/about-team-yacht.jpg", alt: "Team on yacht", category: "safari" },
    { id: 37, src: "/lovable-uploads/lyra-yacht-front.jpg", alt: "Lyra yacht exterior", category: "safari" },
    { id: 38, src: "/lovable-uploads/lyra-aerial.jpg", alt: "Yacht from above", category: "safari" },
    
    // Sunsets & Landscapes
    { id: 39, src: "/lovable-uploads/kite-safari-sunset-1.jpg", alt: "Golden hour kiting", category: "landscape" },
    { id: 40, src: "/lovable-uploads/kite-safari-sunset-jump.jpg", alt: "Sunset jump spectacular", category: "landscape" },
    { id: 41, src: "/lovable-uploads/lyra-sunset.jpg", alt: "Yacht sunset views", category: "landscape" },
    { id: 42, src: "/lovable-uploads/brazil-mare-cheia.jpg", alt: "Mare Cheia beauty", category: "landscape" },
    
    // Community & Beach Scenes
    { id: 43, src: "/lovable-uploads/kite-safari-beach.jpg", alt: "Perfect beach conditions", category: "beach" },
    { id: 44, src: "/lovable-uploads/kite-safari-community.jpg", alt: "Safari community", category: "community" },
    { id: 45, src: "/lovable-uploads/hero-group-splash.jpg", alt: "Group water fun", category: "community" },
    { id: 46, src: "/lovable-uploads/hero-instructors.jpg", alt: "Expert instructor team", category: "team" },
    
    // Instructors & Team
    { id: 47, src: "/lovable-uploads/brazil-instructor-denis.jpg", alt: "Instructor Denis", category: "team" },
    { id: 48, src: "/lovable-uploads/brazil-instructor-1.jpg", alt: "Professional instructor", category: "team" },
    { id: 49, src: "/lovable-uploads/brazil-bbtalkin-instructor.jpg", alt: "Communication during lessons", category: "team" },
    
    // Destination Highlights
    { id: 50, src: "/lovable-uploads/hero-island-view.jpg", alt: "Island paradise views", category: "location" },
  ];

  const openModal = (src: string) => {
    setSelectedImage(src);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const getCurrentIndex = () => {
    if (!selectedImage) return -1;
    return galleryImages.findIndex(img => img.src === selectedImage);
  };

  const navigateImage = (direction: 'next' | 'prev') => {
    const currentIndex = getCurrentIndex();
    if (currentIndex === -1) return;

    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % galleryImages.length 
      : (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    
    setSelectedImage(galleryImages[newIndex].src);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-28 md:pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">OGO Gallery</h1>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Experience the energy, adventure, and community of OGO Kite Academy through 50 curated moments
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image) => (
              <div 
                key={image.id} 
                className="relative overflow-hidden rounded-lg shadow-md group hover-scale"
                onClick={() => openModal(image.src)}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center p-4">
                    <p className="font-display text-lg">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full">
            <button onClick={closeModal} className="absolute -top-12 right-0 text-white p-2 hover:text-gray-300 transition-colors">
              <X size={24} />
            </button>
            
            <div className="flex justify-between items-center">
              <button 
                onClick={() => navigateImage('prev')} 
                className="bg-black/40 text-white p-3 rounded-full hover:bg-black/60 transition-colors"
              >
                <ArrowLeft size={24} />
              </button>
              
              <div className="flex-grow flex justify-center mx-2">
                <img 
                  src={selectedImage} 
                  alt="Gallery image" 
                  className="max-h-[80vh] object-contain" 
                />
              </div>
              
              <button 
                onClick={() => navigateImage('next')} 
                className="bg-black/40 text-white p-3 rounded-full hover:bg-black/60 transition-colors"
              >
                <ArrowRight size={24} />
              </button>
            </div>
            
            <div className="text-center text-white mt-4">
              <p>{getCurrentIndex() + 1} / {galleryImages.length}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
