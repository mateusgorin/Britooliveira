
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Linkedin, Instagram } from 'lucide-react';
import { NAV_ITEMS, LOGO_URL, PHONE_DISPLAY, CONTACT_EMAIL } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollBarWidth}px`;
      document.body.classList.add('menu-open');
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
      document.body.classList.remove('menu-open');
    }
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path === '/') {
      if (location.pathname === '/') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      closeMenu();
      return;
    }

    if (path.includes('#')) {
      const [route, hash] = path.split('#');
      if (location.pathname === '/' && route === '/') {
        e.preventDefault();
        const element = document.getElementById(hash);
        if (element) {
          const offset = 100;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    }
    closeMenu();
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ease-out border-b ${
        isOpen 
          ? 'bg-navy py-4 border-white/5' 
          : scrolled 
            ? 'bg-navy/95 backdrop-blur-md py-0 shadow-2xl border-white/5' 
            : 'bg-transparent py-4 border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center relative z-50 gap-4 lg:gap-8">
        <Link 
          to="/" 
          className="flex items-center group flex-shrink-0" 
          onClick={(e) => handleNavClick(e, '/')}
        >
          <div className="flex items-center transition-all duration-500">
            <img 
              src={LOGO_URL} 
              alt="Brito Oliveira Logo" 
              className={`object-contain transition-all duration-500 ease-in-out ${
                scrolled 
                  ? 'h-[80px] md:h-[100px]' 
                  : 'h-[140px] md:h-[175px]'
              }`} 
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-8 2xl:gap-12">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={(e) => handleNavClick(e, item.path)}
              className={`text-[10px] xl:text-[11px] font-medium tracking-ultra uppercase transition-all duration-300 hover:text-gold relative group whitespace-nowrap ${
                (location.pathname === item.path) || (item.path.includes('#') && location.pathname === '/' && location.hash === item.path.split('/')[1]) 
                  ? 'text-gold' 
                  : 'text-white'
              }`}
            >
              {item.label}
              <span className={`absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full ${location.pathname === item.path ? 'w-full' : ''}`}></span>
            </Link>
          ))}
          <Link
            to="/contato"
            className="border border-gold/40 hover:border-gold text-gold px-5 xl:px-7 py-2.5 rounded-full text-[10px] font-semibold tracking-ultra uppercase transition-all duration-500 hover:bg-gold hover:text-navy whitespace-nowrap"
          >
            Consultoria
          </Link>
        </div>

        {/* Hamburger Button */}
        <button 
          className="lg:hidden text-white p-2 focus:outline-none transition-transform active:scale-90"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? (
            <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center bg-white/5 transition-all">
              <X className="w-6 h-6 text-gold" />
            </div>
          ) : (
            <div className="p-1">
              <Menu className="w-8 h-8" />
            </div>
          )}
        </button>
      </div>

      {/* Menu Mobile Overlay - Fundo sólido e Tipografia padronizada */}
      <div 
        className={`fixed inset-0 bg-navy z-40 transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) lg:hidden flex flex-col ${
          isOpen ? 'translate-x-0 opacity-100 visible' : 'translate-x-full opacity-0 invisible'
        }`}
      >
        <div className="flex-grow flex flex-col items-center justify-center px-6 pt-20">
          <div className="flex flex-col items-center space-y-8 md:space-y-10 w-full max-w-xs">
            {NAV_ITEMS.map((item, idx) => (
              <Link
                key={item.path}
                to={item.path}
                style={{ 
                  transitionDelay: isOpen ? `${150 + (idx * 100)}ms` : '0ms',
                  transitionDuration: '600ms'
                }}
                className={`text-sm md:text-base font-medium tracking-ultra uppercase transition-all transform ${
                  isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                } ${
                  location.pathname === item.path ? 'text-gold' : 'text-white'
                } hover:text-gold active:scale-95`}
                onClick={(e) => handleNavClick(e, item.path)}
              >
                {item.label}
              </Link>
            ))}
            
            <Link
              to="/contato"
              style={{ transitionDelay: isOpen ? '600ms' : '0ms' }}
              className={`w-full bg-gold text-navy py-4 rounded-full text-[10px] font-bold uppercase tracking-ultra shadow-xl text-center transform transition-all duration-700 ${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              } active:scale-95 hover:bg-white hover:text-navy transition-colors duration-300 mt-4`}
              onClick={closeMenu}
            >
              Falar com Especialista
            </Link>
          </div>
        </div>

        {/* Mobile Footer Info */}
        <div 
          style={{ transitionDelay: isOpen ? '750ms' : '0ms' }}
          className={`p-10 bg-navy transition-all duration-700 ${
            isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-xs mx-auto space-y-6">
            <div className="flex items-center gap-4 text-gray-200">
              <Phone className="w-5 h-5 text-gold flex-shrink-0" />
              <span className="text-base font-medium tracking-wide">{PHONE_DISPLAY}</span>
            </div>
            <div className="flex items-start gap-4 text-gray-200">
              <Mail className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
              <span className="break-words text-base leading-relaxed font-light lowercase">
                {CONTACT_EMAIL}
              </span>
            </div>
            
            <div className="flex gap-4 pt-4 justify-center">
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold transition-colors active:scale-90">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold transition-colors active:scale-90">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
