
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, LOGO_URL } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Aumentei o threshold para 50 para evitar flickers muito rápidos no topo
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-700 ease-in-out border-b ${
        scrolled 
          ? 'bg-navy/95 backdrop-blur-md py-2 shadow-2xl border-white/5' 
          : isOpen 
            ? 'bg-navy py-4 border-transparent' 
            : 'bg-transparent py-4 border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center relative z-50 gap-4 lg:gap-8">
        {/* Logo Container - Sempre visível, ajustando tamanho */}
        <Link to="/" className="flex items-center group flex-shrink-0" onClick={closeMenu}>
          <div className="flex items-center transition-all duration-500">
            <img 
              src={LOGO_URL} 
              alt="Brito Oliveira Logo" 
              // Ajuste de tamanho para melhorar definição:
              // Reduzi de h-[120px] para h-[90px] no desktop (md) para evitar pixelização
              // Reduzi de h-[80px] para h-[60px] no mobile para ficar mais proporcional
              className={`object-contain transition-all duration-500 ease-in-out ${
                scrolled 
                  ? 'h-[40px] md:h-[55px]' 
                  : 'h-[60px] md:h-[90px]'
              }`} 
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-8 2xl:gap-12">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-[10px] xl:text-[11px] font-medium tracking-ultra uppercase transition-all duration-300 hover:text-gold relative group whitespace-nowrap ${
                location.pathname === item.path ? 'text-gold' : 'text-white'
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

        {/* Mobile Button - Exibido apenas em telas menores que LG */}
        <button 
          className="lg:hidden text-white p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-navy z-40 transition-all duration-500 lg:hidden flex flex-col items-center justify-center space-y-8 md:space-y-10 ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`text-2xl md:text-3xl font-serif italic transition-colors ${
              location.pathname === item.path ? 'text-gold underline underline-offset-8' : 'text-white'
            }`}
            onClick={closeMenu}
          >
            {item.label}
          </Link>
        ))}
        <Link
          to="/contato"
          className="bg-gold text-navy px-10 py-4 rounded-full text-xs font-bold uppercase tracking-ultra shadow-xl"
          onClick={closeMenu}
        >
          Falar com Especialista
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
