import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import Logo from './Logo';
import { EnhancedBookingPopup } from './EnhancedBookingPopup';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [bookingPopupOpen, setBookingPopupOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Vietnam', path: '/vietnam' },
    { name: 'Kite Safari', path: '/kite-safari' },
    { name: 'Brazil', path: '/brazil' },
    { name: 'Cyprus', path: '/cyprus' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const whiteHeaderPages = ['/gallery', '/contact', '/about'];
  const shouldUseWhiteHeader = whiteHeaderPages.includes(location.pathname);

  const getHeaderStyles = () => {
    if (shouldUseWhiteHeader) return 'bg-white shadow-sm';
    if (!isScrolled) return 'bg-transparent';
    return 'bg-white shadow-sm';
  };

  const getTextColor = () => {
    if (shouldUseWhiteHeader || isScrolled) return 'text-gray-900';
    return 'text-white';
  };

  return (
    <header className={cn(
      "fixed w-full top-0 z-40 py-3 transition-all duration-300",
      getHeaderStyles()
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between relative">
        <Logo />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a 
            href="https://wa.me/48884035225" 
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex items-center gap-1 hover:text-green-600 transition-colors duration-300 label-caps",
              getTextColor()
            )}
          >
            <Phone size={14} className="text-green-600" />
            <span>+48 884 035 225</span>
          </a>
          {navLinks.map(link => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={cn(
                'label-caps relative transition-all duration-300',
                'after:content-[""] after:absolute after:w-full after:scale-x-0 after:h-px after:bottom-[-4px] after:left-0',
                'after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300',
                'hover:after:scale-x-100 hover:after:origin-bottom-left',
                location.pathname === link.path 
                  ? 'text-accent after:scale-x-100' 
                  : cn(getTextColor(), 'hover:opacity-70')
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <button 
            className="btn-primary"
            onClick={() => setBookingPopupOpen(true)}
          >
            Book Now
          </button>
        </div>
        
        {/* Mobile Right Controls */}
        <div className="md:hidden flex items-center gap-2 relative z-[210]">
          <button
            className={cn(
              "p-2 relative z-[210] cursor-pointer touch-manipulation",
              isMenuOpen ? 'text-gray-900' : getTextColor()
            )}
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
        style={{ backgroundColor: 'hsl(var(--background))', opacity: 1 }}
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
          <a 
            href="https://wa.me/48884035225" 
            target="_blank"
            rel="noopener noreferrer"
            className="label-caps py-2 border-b border-border text-foreground/80 flex items-center gap-2" 
            onClick={() => setIsMenuOpen(false)}
          >
            <Phone size={16} className="text-green-600" />
            WHATSAPP: +48 884 035 225
          </a>
          {navLinks.map(link => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={cn(
                'label-caps py-3 border-b border-border text-base', 
                location.pathname === link.path ? 'text-accent' : 'text-foreground/80'
              )} 
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <button 
            className="btn-primary text-center mt-4" 
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
      <EnhancedBookingPopup 
        open={bookingPopupOpen} 
        onOpenChange={setBookingPopupOpen}
        backgroundImage="/lovable-uploads/hero-main-coaching.jpg"
        title="Book Your Adventure"
        description="Fill in your details and we'll get back to you shortly"
      />
    </header>
  );
};

export default Navbar;
