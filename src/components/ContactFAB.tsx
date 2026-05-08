import React, { useState } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { trackContactClick } from '@/utils/metaTracking';

const ContactFAB: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[70] flex flex-col items-end gap-2">
      {/* Expanded buttons */}
      <div
        className={cn(
          'flex flex-col gap-2 transition-all duration-300',
          isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
        )}
      >
        {/* WhatsApp */}
        <a
          href="https://wa.me/48884035225?text=Hi!%20I%27m%20interested%20in%20OGO%20Kite%20Academy"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackContactClick('whatsapp', 'cyprus_fab')}
          className="w-12 h-12 bg-[#25D366] hover:bg-[#20BD5C] rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
          aria-label="WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 175.216 175.552" className="w-6 h-6 fill-white">
            <path d="M175.216,85.123c0,46.92-38.287,84.91-85.564,84.91a85.78,85.78,0,0,1-41.018-10.408L0,175.552l16.355-48.027a84.253,84.253,0,0,1-11.35-42.4C5.005,38.2,43.293.214,90.57.214s84.646,37.987,84.646,84.91ZM90.57,13.495c-39.891,0-72.34,32.194-72.34,71.628a71.481,71.481,0,0,0,13.677,42.1L20.507,156.578l30.227-9.635a72.306,72.306,0,0,0,39.836,11.835c39.892,0,72.34-32.194,72.34-71.628S130.462,13.495,90.57,13.495Zm43.543,91.254c-.532-.85-1.94-1.359-4.045-2.38-2.107-1.021-12.448-6.129-14.377-6.83s-3.334-1.05-4.742,1.021-5.443,6.83-6.668,8.23-2.461,1.53-4.566.51-8.9-3.271-16.935-10.44c-6.259-5.568-10.483-12.439-11.707-14.539s-.13-3.23,1.019-4.271c1.04-.94,2.312-2.45,3.475-3.68s1.54-2.12,2.3-3.53.383-2.63-.191-3.68-4.742-11.4-6.49-15.61c-1.71-4.091-3.449-3.53-4.742-3.6s-2.62-.085-4.022-.085a7.775,7.775,0,0,0-5.614,2.59c-1.929,2.1-7.372,7.189-7.372,17.529s7.563,20.339,8.626,21.749,14.908,22.769,36.109,31.93c5.041,2.18,8.974,3.479,12.042,4.46,5.065,1.59,9.67,1.359,13.321.85,4.06-.6,12.448-5.08,14.2-9.99s1.748-9.14,1.217-10.02Z" transform="translate(0 -0.214)"/>
          </svg>
        </a>
        {/* Telegram */}
        <a
          href="https://t.me/ogodenchik_official"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackContactClick('telegram', 'cyprus_fab')}
          className="w-12 h-12 bg-[#0088cc] hover:bg-[#006daa] rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
          aria-label="Telegram"
        >
          <Send className="w-5 h-5 text-white" />
        </a>
      </div>

      {/* Main toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110',
          isOpen
            ? 'bg-muted-foreground hover:bg-foreground'
            : 'bg-primary hover:bg-primary/90'
        )}
        aria-label={isOpen ? 'Закрыть' : 'Связаться'}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-primary-foreground" />
        )}
      </button>
    </div>
  );
};

export default ContactFAB;
