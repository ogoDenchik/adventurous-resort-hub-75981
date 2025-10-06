import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Instagram, MessageCircle, Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 px-4">
          <div className="space-y-4 animate-fade-in">
            <h3 className="text-2xl font-display font-semibold">OGO Kite Academy</h3>
            <p className="text-accent-foreground/80 max-w-xs">
              Premium kitesurfing trips and training. We connect people through wind, travel and community across Cyprus, Brazil and Egypt.
            </p>
            <div className="flex space-x-4 pt-4">
              <a 
                href="https://wa.me/48884035225" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-accent-foreground/80 hover:text-accent-foreground transition-colors duration-300 hover:scale-125"
              >
                <MessageCircle size={20} />
              </a>
              <a 
                href="https://www.instagram.com/ogo_kite_academy/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-accent-foreground/80 hover:text-accent-foreground transition-colors duration-300 hover:scale-125"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://t.me/ogodenchik" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="text-accent-foreground/80 hover:text-accent-foreground transition-colors duration-300 hover:scale-125"
              >
                <Send size={20} />
              </a>
            </div>
          </div>
          
          <div className="space-y-4 animate-fade-in animation-delay-200">
            <h4 className="text-lg font-display font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors duration-300 inline-block py-1 link-underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors duration-300 inline-block py-1 link-underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/kite-safari" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors duration-300 inline-block py-1 link-underline">
                  KiteSafari
                </Link>
              </li>
              <li>
                <Link to="/brazil" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors duration-300 inline-block py-1 link-underline">
                  Brazil
                </Link>
              </li>
              <li>
                <Link to="/cyprus" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors duration-300 inline-block py-1 link-underline">
                  Cyprus
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors duration-300 inline-block py-1 link-underline">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4 animate-fade-in animation-delay-400">
            <h4 className="text-lg font-display font-semibold">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <span className="text-accent-foreground/80">
                  Head Office: Cyprus, Limassol
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="flex-shrink-0" />
                <a 
                  href="tel:+48884035225" 
                  className="text-accent-foreground/80 hover:text-accent-foreground transition-colors duration-300"
                >
                  +48 884 035 225
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4 animate-fade-in animation-delay-600">
            <h4 className="text-lg font-display font-semibold">Connect With Us</h4>
            <p className="text-accent-foreground/80">
              Follow our adventures and stay updated with the latest kitesurfing trips.
            </p>
            <div className="flex flex-col space-y-2 pt-2">
              <a 
                href="https://wa.me/48884035225" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent-foreground/80 hover:text-accent-foreground transition-colors duration-300 flex items-center space-x-2"
              >
                <MessageCircle size={18} />
                <span>WhatsApp</span>
              </a>
              <a 
                href="https://www.instagram.com/ogo_kite_academy/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent-foreground/80 hover:text-accent-foreground transition-colors duration-300 flex items-center space-x-2"
              >
                <Instagram size={18} />
                <span>Instagram</span>
              </a>
              <a 
                href="https://t.me/ogodenchik" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent-foreground/80 hover:text-accent-foreground transition-colors duration-300 flex items-center space-x-2"
              >
                <Send size={18} />
                <span>Telegram</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 py-6 px-4 text-center text-accent-foreground/70">
          <p>© 2022 OGO Kite Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;