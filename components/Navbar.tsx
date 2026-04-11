
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Linkedin, Instagram } from 'lucide-react';
import { NAV_ITEMS, LOGO_URL, PHONE_DISPLAY, CONTACT_EMAIL } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const scrollListenerRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Background change logic
      const isScrolled = currentScrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      // Visibility logic (hide on scroll down, show on scroll up)
      if (isOpen) {
        setVisible(true);
      } else if (currentScrollY < 100) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setVisible(false);
      } else {
        // Scrolling up
        setVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled, lastScrollY, isOpen]);

  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection('');
      return;
    }

    const handleScrollSpy = () => {
      const sections = ['home', 'quem-somos', 'servicos', 'compliance-saude', 'diferenciais'];
      const scrollPosition = window.scrollY;
      
      if (scrollPosition < 100) {
        setActiveSection('home');
        return;
      }

      const triggerPoint = scrollPosition + 150;
      let current = 'home';
      
      for (const id of sections) {
        const element = document.getElementById(id);
        if (element) {
          if (triggerPoint >= element.offsetTop) {
            current = id;
          }
        }
      }

      if (current !== activeSection) {
        setActiveSection(current);
      }
    };

    const onScroll = () => {
      if (scrollListenerRef.current) {
        cancelAnimationFrame(scrollListenerRef.current);
      }
      scrollListenerRef.current = requestAnimationFrame(handleScrollSpy);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScrollSpy();

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (scrollListenerRef.current) cancelAnimationFrame(scrollListenerRef.current);
    };
  }, [location.pathname, activeSection]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('menu-open');
    } else {
      document.body.style.overflow = '';
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

  const isItemActive = (path: string) => {
    if (location.pathname !== '/' && path !== '/contato') return false;
    if (path === '/' && activeSection === 'home') return true;
    if (path.includes('#')) {
      const hash = path.split('#')[1];
      return activeSection === hash;
    }
    if (path === '/contato' && location.pathname === '/contato') return true;
    return false;
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-transform duration-500 ease-in-out border-b ${
        visible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isOpen 
          ? 'bg-[#0A1128] border-white/5' 
          : scrolled 
            ? 'bg-navy/95 backdrop-blur-md shadow-2xl border-white/5' 
            : 'bg-transparent border-transparent'
      }`}
    >
      {/* Menu Mobile Overlay */}
      <div 
        className={`fixed inset-0 bg-[#0A1128] z-[60] lg:hidden flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex-grow flex flex-col items-center justify-center px-6 pt-32">
          <div className="flex flex-col items-center space-y-8 w-full max-w-xs">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-base font-medium tracking-ultra uppercase transition-colors duration-200 ${
                  isItemActive(item.path) ? 'text-gold' : 'text-white'
                }`}
                onClick={(e) => handleNavClick(e, item.path)}
              >
                {item.label}
              </Link>
            ))}
            
            <Link
              to="/contato"
              className="w-full bg-gold text-navy py-4 rounded-full text-[11px] font-bold uppercase tracking-ultra shadow-xl text-center active:scale-95 transition-transform mt-6"
              onClick={closeMenu}
            >
              Falar com Especialista
            </Link>
          </div>
        </div>

        {/* Mobile Footer Info */}
        <div className="p-12 bg-[#050914]">
          <div className="max-w-xs mx-auto space-y-8 text-center">
            <div className="flex flex-col items-center gap-6">
              <div className="flex flex-col items-center gap-1.5">
                <span className="text-[10px] text-gold font-bold uppercase tracking-ultra opacity-60">Telefone</span>
                <a href={`tel:${PHONE_DISPLAY.replace(/\D/g, '')}`} className="text-base font-medium text-white flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gold" /> {PHONE_DISPLAY}
                </a>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <span className="text-[10px] text-gold font-bold uppercase tracking-ultra opacity-60">E-mail</span>
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-base font-medium text-white flex items-center gap-2 break-all px-2">
                  <Mail className="w-4 h-4 text-gold shrink-0" /> {CONTACT_EMAIL}
                </a>
              </div>
            </div>
            <div className="flex gap-10 justify-center pt-4">
              <a href="https://www.linkedin.com/company/brito-oliveira-assessoria" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-gold transition-colors"><Linkedin className="w-6 h-6" /></a>
              <a href="https://www.instagram.com/britoliveiraempresarial?igsh=MTU1ajdrdW5neDYzdg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-gold transition-colors"><Instagram className="w-6 h-6" /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center relative z-[70] gap-4 h-[85px]">
        <Link 
          to="/" 
          className="flex items-center flex-shrink-0" 
          onClick={(e) => handleNavClick(e, '/')}
        >
          <img 
            src={LOGO_URL} 
            alt="Brito Oliveira Logo" 
            className="object-contain transition-[height] duration-300 ease-in-out will-change-[height] m-0 p-0 h-[75px]" 
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-12">
          {NAV_ITEMS.map((item) => {
            const active = isItemActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={(e) => handleNavClick(e, item.path)}
                className={`text-[10px] xl:text-[11px] font-medium tracking-ultra uppercase transition-colors duration-200 relative group whitespace-nowrap ${
                  active ? 'text-gold' : 'text-white hover:text-gold'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300 ${
                  active ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            );
          })}
          <Link
            to="/contato"
            className={`border px-7 py-2.5 rounded-full text-[10px] font-semibold tracking-ultra uppercase transition-all duration-300 whitespace-nowrap ${
              location.pathname === '/contato' 
                ? 'bg-gold text-navy border-gold' 
                : 'border-gold/40 text-gold hover:bg-gold hover:text-navy hover:border-gold'
            }`}
          >
            Consultoria
          </Link>
        </div>

        {/* Hamburger Button */}
        <button 
          className="lg:hidden text-white p-2 focus:outline-none relative z-[80]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? (
            <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center bg-white/10 active:scale-90 transition-transform">
              <X className="w-6 h-6 text-gold" />
            </div>
          ) : (
            <Menu className="w-8 h-8 active:scale-90 transition-transform" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
