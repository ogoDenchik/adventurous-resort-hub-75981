import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import Logo from './Logo';
import { EnhancedBookingPopup } from './EnhancedBookingPopup';
import { useLanguage, type Language } from '@/contexts/LanguageContext';

const languages: { code: Language; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'ru', label: 'RU' },
  { code: 'gr', label: 'GR' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [bookingPopupOpen, setBookingPopupOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const location = useLocation();
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.cyprus'), path: '/cyprus' },
    { name: t('nav.kiteSafari'), path: '/kite-safari' },
    { name: t('nav.brazil'), path: '/brazil' },
    { name: t('nav.vietnam'), path: '/vietnam' },
    { name: t('nav.gallery'), path: '/gallery' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.contact'), path: '/contact' },
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
      <div className="container mx-auto px-4 flex items-center gap-3 xl:gap-5 relative">
        <Logo />

        {/* Language Switcher (desktop, next to logo) */}
        <div className="hidden lg:block relative shrink-0">
          <button
            onClick={() => setLangMenuOpen(!langMenuOpen)}
            className={cn(
              "flex items-center gap-1 px-2.5 py-1.5 rounded-md text-xs font-medium transition-all duration-300 border",
              shouldUseWhiteHeader || isScrolled
                ? 'border-gray-300 text-gray-900 hover:bg-gray-100'
                : 'border-white/30 text-white hover:bg-white/10'
            )}
          >
            <span className="uppercase font-semibold">{lang.toUpperCase()}</span>
          </button>
          {langMenuOpen && (
            <div className="absolute top-full mt-1 left-0 bg-card border border-border rounded-lg shadow-xl overflow-hidden min-w-[100px] z-50">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => {
                    setLang(l.code);
                    setLangMenuOpen(false);
                  }}
                  className={cn(
                    'w-full px-3 py-2 text-left text-sm flex items-center gap-2 hover:bg-muted transition-colors',
                    lang === l.code && 'bg-primary/10 text-primary font-medium'
                  )}
                >
                  <span className="font-semibold">{l.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Phone (visible on desktop, before nav) */}
        <a 
          href="https://wa.me/48884035225" 
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "hidden lg:flex items-center gap-1.5 hover:text-green-600 transition-colors duration-300 whitespace-nowrap shrink-0",
            "text-[11px] xl:text-xs tracking-[0.15em] uppercase font-medium",
            getTextColor()
          )}
        >
          <Phone size={13} className="text-green-600" />
          <span>+48 884 035 225</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-x-3 xl:gap-x-5 flex-1 justify-center">
          {navLinks.map(link => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={cn(
                'relative transition-all duration-300 whitespace-nowrap',
                'text-[11px] xl:text-xs tracking-[0.18em] uppercase font-medium',
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

        {/* Book Now button (right) */}
        <div className="hidden lg:flex items-center shrink-0">
          <button 
            className="btn-primary !px-5 !py-2.5 !min-h-0 !text-[11px] xl:!text-xs"
            onClick={() => setBookingPopupOpen(true)}
          >
            {t('nav.bookNow')}
          </button>
        </div>

        {/* Mobile: Language Switcher (visible on mobile) */}
        <div className="lg:hidden relative ml-auto mr-2">
          <button
            onClick={() => setLangMenuOpen(!langMenuOpen)}
            className={cn(
              "flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium transition-all duration-300 border",
              shouldUseWhiteHeader || isScrolled
                ? 'border-gray-300 text-gray-900 hover:bg-gray-100'
                : isMenuOpen
                  ? 'border-border/50 text-foreground hover:bg-muted'
                  : 'border-white/30 text-white hover:bg-white/10'
            )}
          >
            <span className="uppercase font-semibold">{lang.toUpperCase()}</span>
          </button>
          {langMenuOpen && (
            <div className="absolute top-full mt-1 right-0 bg-card border border-border rounded-lg shadow-xl overflow-hidden min-w-[100px] z-50">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => {
                    setLang(l.code);
                    setLangMenuOpen(false);
                  }}
                  className={cn(
                    'w-full px-3 py-2 text-left text-sm flex items-center gap-2 hover:bg-muted transition-colors',
                    lang === l.code && 'bg-primary/10 text-primary font-medium'
                  )}
                >
                  <span className="font-semibold">{l.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
        
        {/* Mobile Right Controls */}
        <div className="lg:hidden flex items-center gap-2 relative z-[210]">
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
          'fixed inset-0 pt-24 px-6 overflow-y-auto transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden z-[205]',
          isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
        )}
        style={{ backgroundColor: 'hsl(var(--background))' }}
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

        <p className="text-muted-foreground/40 text-[10px] tracking-[0.3em] uppercase mb-8">// Navigation</p>
        
        <nav className="flex flex-col">
          {navLinks.map((link, index) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={cn(
                'py-4 border-b border-border/30 flex items-baseline gap-4 transition-all duration-300',
                isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0',
                location.pathname === link.path ? 'text-foreground' : 'text-foreground/50'
              )} 
              style={{ transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms' }}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-[10px] tracking-[0.2em] text-muted-foreground/40 font-light tabular-nums">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="heading-display text-2xl">
                {link.name}
              </span>
            </Link>
          ))}
        </nav>

        <div 
          className={cn(
            'mt-10 space-y-4 transition-all duration-300',
            isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          )}
          style={{ transitionDelay: isMenuOpen ? '450ms' : '0ms' }}
        >
          <a 
            href="https://wa.me/48884035225" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-foreground/50 hover:text-foreground transition-colors text-sm tracking-wide" 
            onClick={() => setIsMenuOpen(false)}
          >
            <Phone size={14} />
            <span>+48 884 035 225</span>
          </a>

          <div className="h-px bg-border/20 my-4" />

          <button 
            className="btn-primary w-full text-center" 
            onClick={() => {
              setIsMenuOpen(false);
              setBookingPopupOpen(true);
            }}
          >
            {t('nav.bookNow')}
          </button>
        </div>
      </div>
      
      {/* Booking Popup */}
      <EnhancedBookingPopup 
        open={bookingPopupOpen} 
        onOpenChange={setBookingPopupOpen}
        backgroundImage="/lovable-uploads/hero-main-coaching.jpg"
        title={t('nav.bookTitle')}
        description={t('nav.bookDesc')}
      />
    </header>
  );
};

export default Navbar;
