import React from 'react';
import { MessageCircle, Send, Instagram } from 'lucide-react';
import { RevealOnScroll, AnimatedLine } from '@/hooks/use-invisible-animation';

const ContactCTA: React.FC = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-950 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/cyprus-sunset-riding.jpg')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-950/95"></div>
      
      <div className="container relative z-10 px-4 max-w-3xl mx-auto text-center">

        <RevealOnScroll>
          <p className="section-number text-white/50 mb-6">// Contact</p>
        </RevealOnScroll>

        <AnimatedLine className="mb-12 opacity-20" />

        <RevealOnScroll delay={100}>
          <h2 className="heading-display text-4xl md:text-6xl text-white mb-6">
            Ready to Start<br /><em>Your Journey?</em>
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={200}>
          <p className="text-white/70 text-lg mb-12 max-w-xl mx-auto">
            Let's talk about your goals, choose the perfect location, and get you on the water.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={300}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/48884035225?text=Hey%20OGO%20Academy%2C%20I%27d%20like%20to%20start%20my%20journey!"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-white flex items-center gap-3 w-full sm:w-auto justify-center text-base"
            >
              <MessageCircle size={18} />
              <span>WhatsApp</span>
            </a>

            <a
              href="https://t.me/ogodenchik"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-white flex items-center gap-3 w-full sm:w-auto justify-center text-base"
            >
              <Send size={18} />
              <span>Telegram</span>
            </a>

            <a
              href="https://instagram.com/ogo_kite_academy"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-white flex items-center gap-3 w-full sm:w-auto justify-center text-base"
            >
              <Instagram size={18} />
              <span>Instagram</span>
            </a>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={400}>
          <p className="text-white/40 text-sm mt-10 label-caps">
            We respond to all messages within 24 hours
          </p>
        </RevealOnScroll>

      </div>
    </section>
  );
};

export default ContactCTA;
