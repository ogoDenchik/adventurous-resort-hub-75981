import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import Logo from './Logo';
import { BookingPopup } from './BookingPopup';
import ThemeToggle from './ThemeToggle';
const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [bookingPopupOpen, setBookingPopupOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'About',
    path: '/about'
  }, {
    name: 'Kite Safari',
    path: '/kite-safari'
  }, {
    name: 'Egypt Kite Safari',
    path: '/kitesafari2'
  }, {
    name: 'Brazil',
    path: '/brazil'
  }, {
    name: 'Cyprus',
    path: '/cyprus'
  }, {
    name: 'Vietnam',
    path: '/vietnam'
  }, {
    name: 'Gallery',
    path: '/gallery'
  }, {
    name: 'Contact Us',
    path: '/contact'
  }];
  return <header className={cn('fixed w-full top-0 z-[200] transition-all duration-300', isScrolled ? 'glass py-3' : 'bg-transparent py-6')}>
      <div className="container mx-auto px-4 flex items-center justify-between relative">
        <Logo />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => <Link key={link.path} to={link.path} className={cn('text-sm font-medium relative transition-all duration-300', 'after:content-[""] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:left-0', 'after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300', 'hover:after:scale-x-100 hover:after:origin-bottom-left', location.pathname === link.path ? 'text-accent after:scale-x-100' : 'text-gray-900 hover:text-gray-700')}>
              {link.name}
            </Link>)}
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <a 
            href="https://wa.me/48884035225" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-gray-900 hover:text-gray-700 transition-colors duration-300"
          >
            <Phone size={16} />
            <span>+48 884 035 225</span>
          </a>
          <ThemeToggle />
          <button 
            className="btn-primary"
            onClick={() => setBookingPopupOpen(true)}
          >
            Book Now
          </button>
        </div>
        
      {/* Mobile Right Controls */}
      <div className="md:hidden flex items-center gap-2 relative z-[210]">
        <ThemeToggle />
        <button
          className="text-gray-900 p-2 relative z-[210] cursor-pointer touch-manipulation"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleMenu();
          }}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={cn(
           'fixed inset-0 pt-20 px-4 overflow-y-auto transition-transform duration-300 ease-in-out md:hidden z-[205]',
           isMenuOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        )}
        style={{ 
          backgroundColor: 'hsl(var(--background))',
          opacity: 1
        }}
      >
        <button 
          className="absolute top-4 right-4 p-2 text-foreground z-[215] cursor-pointer touch-manipulation" 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsMenuOpen(false);
          }} 
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
        
        <nav className="flex flex-col space-y-6">
          {navLinks.map(link => <Link key={link.path} to={link.path} className={cn('text-xl font-medium py-2 border-b border-border', location.pathname === link.path ? 'text-accent' : 'text-foreground/80')} onClick={() => setIsMenuOpen(false)}>
              {link.name}
            </Link>)}
          <a 
            href="https://wa.me/48884035225" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-medium py-2 border-b border-border text-foreground/80 flex items-center gap-2" 
            onClick={() => setIsMenuOpen(false)}
          >
            <Phone size={20} className="text-green-600" />
            WhatsApp: +48 884 035 225
          </a>
          <button 
            className="btn-primary text-center" 
            onClick={() => {
              setIsMenuOpen(false);
              setBookingPopupOpen(true);
            }}
          >
            Book Now
          </button>
        </nav>
      </div>
      
      {/* Booking Popup */}
      <BookingPopup 
        open={bookingPopupOpen} 
        onOpenChange={setBookingPopupOpen} 
      />
    </header>;
};
export default Navbar;