
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import { NAV_ITEMS, PHONE_DISPLAY } from '../constants';

const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-navy text-white pt-16 md:pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-16 md:mb-24">
          
          {/* Coluna 1: Identidade e Missão */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="mb-6 md:mb-8">
                <h3 className="text-gold text-[10px] font-bold uppercase tracking-ultra mb-2">Brito Oliveira</h3>
                <h2 className="text-2xl md:text-4xl font-serif italic text-white leading-tight">
                  Assessoria <br/> Empresarial
                </h2>
            </div>
            
            <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed max-w-sm mb-10 border-l border-gold/30 pl-6">
              "Estratégia e inteligência para impulsionar o seu negócio."
            </p>

            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-full hover:bg-gold hover:border-gold hover:text-navy transition-all duration-300 group">
                <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-full hover:bg-gold hover:border-gold hover:text-navy transition-all duration-300 group">
                <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Coluna 2: Navegação */}
          <div className="lg:col-span-3">
            <h4 className="text-white text-sm font-serif italic mb-6 md:mb-8 border-b border-white/10 pb-4 inline-block pr-12">Navegação</h4>
            <ul className="space-y-4 md:space-y-5">
              {NAV_ITEMS.map(item => (
                <li key={item.path}>
                  <Link to={item.path} className="text-gray-400 hover:text-gold transition-colors text-[9px] md:text-[10px] uppercase font-bold tracking-widest flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-gold/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Contato */}
          <div className="lg:col-span-4">
            <h4 className="text-white text-sm font-serif italic mb-6 md:mb-8 border-b border-white/10 pb-4 inline-block pr-12">Contato Oficial</h4>
            <ul className="space-y-5 md:space-y-6 text-sm text-gray-400 font-light">
              <li className="flex items-center gap-4 group">
                <div className="p-1.5 bg-white/5 rounded-full group-hover:bg-gold/20 transition-colors">
                    <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                </div>
                <span className="leading-relaxed group-hover:text-gray-200 transition-colors">Brasília/DF</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="p-1.5 bg-white/5 rounded-full group-hover:bg-gold/20 transition-colors">
                    <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                </div>
                <span className="group-hover:text-gray-200 transition-colors">{PHONE_DISPLAY}</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="p-1.5 bg-white/5 rounded-full group-hover:bg-gold/20 transition-colors">
                    <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                </div>
                <span className="group-hover:text-gray-200 transition-colors break-all">contato@britooliveiraassessoria.com.br</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Barra Inferior */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center text-[8px] md:text-[9px] text-gray-600 font-bold uppercase tracking-ultra text-center md:text-left">
            <p>© {new Date().getFullYear()} Brito Oliveira. CNPJ: 63.287.732/0001-24</p>
            <p className="hidden md:block text-white/10">|</p>
            <a 
              href="https://www.gorinsolucoes.com.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors duration-300"
            >
              Desenvolvido por Gorin soluções
            </a>
          </div>
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-[9px] font-bold uppercase tracking-ultra text-gray-500 hover:text-gold transition-all"
          >
            Voltar ao Topo
            <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center group-hover:border-gold group-hover:bg-gold group-hover:text-navy transition-all">
                <ArrowUp className="w-3 h-3" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
