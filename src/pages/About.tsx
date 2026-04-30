import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Leaf, Shield, Award, Users, Heart, BookOpen, Map, Calendar, Mountain, GitBranch, MapPin, MapPinIcon, MessageCircle, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-28 md:pt-32">
        <section className="relative py-20 mb-8">
          <div className="absolute inset-0 bg-[url('/lovable-uploads/about-sunset-reflection.jpg')] bg-cover bg-center opacity-20"></div>
          <div className="relative z-10 container mx-auto text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 animate-fade-in">
              {t('about.title')}
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-foreground/80 animate-fade-in animation-delay-200">
              {t('about.subtitle')}
            </p>
          </div>
        </section>
        
        <section className="section-padding container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="relative">
                <img src="/lovable-uploads/about-instructor-student.jpg" alt="Kitesurfing instruction" loading="lazy" className="w-full h-[500px] object-cover rounded-xl shadow-lg" />
                <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl hidden md:block">
                  <img src="/lovable-uploads/about-beach-relax.jpg" alt="Beach community" loading="lazy" className="w-40 h-32 object-cover rounded-md" />
                </div>
              </div>
            </div>
            
            <div className="animate-slide-up animation-delay-200">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                {t('about.missionTitle')}
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="bg-secondary p-6 rounded-xl transition-all duration-300 hover:shadow-md">
                  <div className="flex items-center mb-3">
                    <Heart size={22} className="text-accent mr-2" />
                    <h3 className="font-display text-xl font-semibold">{t('about.missionHeading')}</h3>
                  </div>
                  <p className="text-foreground/80">
                    {t('about.missionText')}
                  </p>
                </div>
                
                <div className="bg-secondary p-6 rounded-xl transition-all duration-300 hover:shadow-md">
                  <div className="flex items-center mb-3">
                    <BookOpen size={22} className="text-accent mr-2" />
                    <h3 className="font-display text-xl font-semibold">{t('about.visionHeading')}</h3>
                  </div>
                  <p className="text-foreground/80">
                    {t('about.visionText')}
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
                {t('about.valuesTitle')}
              </h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                {t('about.valuesSubtitle')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[{
                icon: <Shield className="w-8 h-8" />,
                title: t('about.safetyTitle'),
                description: t('about.safetyText'),
                delay: 0
              }, {
                icon: <Users className="w-8 h-8" />,
                title: t('about.communityTitle'),
                description: t('about.communityText'),
                delay: 100
              }, {
                icon: <Heart className="w-8 h-8" />,
                title: t('about.authenticityTitle'),
                description: t('about.authenticityText'),
                delay: 200
              }, {
                icon: <Mountain className="w-8 h-8" />,
                title: t('about.adventureTitle'),
                description: t('about.adventureText'),
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
              {t('about.journeyTitle')}
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto mb-8">
              {t('about.journeySubtitle')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Story Beginning */}
            <div className="grid md:grid-cols-2 gap-8 items-center animate-fade-in">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-display font-bold mb-4">{t('about.startedTitle')}</h3>
                <p className="text-foreground/80 mb-4">
                  {t('about.startedText1')}
                </p>
                <p className="text-foreground/80">
                  {t('about.startedText2')}
                </p>
              </div>
              <div className="order-1 md:order-2">
                <img src="/lovable-uploads/about-campfire-community.jpg" alt="Adventure spirit" loading="lazy" className="w-full h-[300px] object-cover rounded-xl shadow-lg" />
              </div>
            </div>

            {/* Discovery */}
            <div className="grid md:grid-cols-2 gap-8 items-center animate-fade-in animation-delay-200">
              <div>
                <img src="/lovable-uploads/about-kitesurfing-discovery.jpg" alt="Discovering kitesurfing" loading="lazy" className="w-full h-[300px] object-cover rounded-xl shadow-lg" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold mb-4">{t('about.missingTitle')}</h3>
                <p className="text-foreground/80 mb-4">
                  {t('about.missingText')}
                </p>
                <p className="text-accent font-semibold text-lg italic">
                  {t('about.missingQuote')}
                </p>
              </div>
            </div>

            {/* The Vision */}
            <div className="grid md:grid-cols-2 gap-8 items-center animate-fade-in animation-delay-300">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-display font-bold mb-4">{t('about.buildingTitle')}</h3>
                <p className="text-foreground/80 mb-4">
                  {t('about.buildingText1')}
                </p>
                <p className="text-foreground/80">
                  {t('about.buildingText2')}
                </p>
              </div>
              <div className="order-1 md:order-2">
                <img src="/lovable-uploads/about-instructors-teaching.jpg" alt="Teaching kitesurfing" loading="lazy" className="w-full h-[300px] object-cover rounded-xl shadow-lg" />
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
                  <h3 className="text-2xl font-display font-bold mb-4">{t('about.todayTitle')}</h3>
                  <p className="text-foreground/80">
                    {t('about.todayText')}
                  </p>
                </div>
              </div>
            </div>

            {/* Gallery */}
            <div className="grid grid-cols-2 gap-4 animate-fade-in animation-delay-500">
              <img src="/lovable-uploads/about-team-yacht.jpg" alt="Team adventures" loading="lazy" className="w-full h-[250px] object-cover rounded-xl shadow-lg" />
              <img src="/lovable-uploads/about-team-community.jpg" alt="OGO community" loading="lazy" className="w-full h-[250px] object-cover object-[center_30%] rounded-xl shadow-lg" />
            </div>
          </div>
        </section>
        
        
        <section className="py-20 bg-accent text-accent-foreground relative">
          <div className="absolute inset-0 bg-[url('/lovable-uploads/brazil-kite-aerial.jpg')] bg-cover bg-center opacity-20"></div>
          <div className="container relative z-10 px-4 text-center">
            <div className="max-w-3xl mx-auto animate-fade-in">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                {t('about.ctaTitle')}
              </h2>
              <p className="text-xl mb-8 text-accent-foreground/90">
                {t('about.ctaSubtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/kite-safari" className="inline-block px-8 py-4 bg-white text-accent font-medium text-lg rounded-md transition-all duration-300 hover:bg-white/90 hover:shadow-lg hover:translate-y-[-2px]">
                  {t('about.viewSafaris')}
                </Link>
                <a 
                  href="https://wa.me/48884035225?text=Hey%20OGO%20Academy%2C%20I%20have%20a%20question!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-medium text-lg rounded-md transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:translate-y-[-2px]"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
                <a 
                  href="https://t.me/ogodenchik_official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-medium text-lg rounded-md transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:translate-y-[-2px]"
                >
                  <Send className="w-5 h-5" />
                  Telegram
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      
      <Footer />
    </div>;
};

export default About;
