import React from 'react';
import { SERVICES } from '../constants';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Page Header Padronizado */}
      <section className="pt-40 md:pt-52 pb-20 bg-navy text-white text-center">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <span className="text-gold text-[10px] font-bold uppercase tracking-ultra mb-6 block">Áreas de Atuação</span>
          <h1 className="text-3xl md:text-5xl font-serif italic mb-6">Soluções <span className="text-gradient-gold not-italic">Institucionais</span></h1>
          <p className="text-gray-400 font-light text-base max-w-lg mx-auto">Especialidades desenhadas para a segurança do seu legado empresarial.</p>
        </div>
      </section>

      {/* Services Grid Clean (Layout 3-3-2) */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          {/* Flexbox wrapper para centralização */}
          <div className="flex flex-wrap justify-center gap-8">
            {SERVICES.map((service, index) => {
               // Lógica Colmeia para Desktop (lg) com 8 itens:
              // Linha 1 (0-2) e Linha 2 (3-5): Width ~33%
              // Linha 3 (6-7): Width ~50%
              const isLastRow = index >= 6;
              const widthClass = isLastRow 
                ? "lg:w-[calc(50%-1rem)]" // 2 items logic
                : "lg:w-[calc(33.333%-1.34rem)]"; // 3 items logic

              return (
                <div 
                  key={service.id} 
                  className={`w-full md:w-[calc(50%-1rem)] ${widthClass} bg-white p-8 border border-gray-100 hover:border-gold/30 hover:shadow-lg transition-all duration-300 group flex flex-col justify-between h-auto min-h-[300px]`}
                >
                  <div>
                    {/* Alteração aqui: text-gold como padrão */}
                    <div className="text-gold mb-6 group-hover:text-navy transition-colors">
                      <div className="[&>svg]:w-8 [&>svg]:h-8 [&>svg]:stroke-[1.5]">
                          {service.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-serif text-navy mb-4 group-hover:text-navy/80 transition-colors">{service.title}</h3>
                    <p className="text-gray-500 leading-relaxed mb-8 font-light text-sm">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                      <Link to="/contato" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-ultra text-navy hover:text-gold transition-colors">
                      Solicitar Diagnóstico
                      </Link>
                      <ArrowUpRight className="w-3 h-3 text-gray-300 group-hover:text-gold transition-colors" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Banner de Foco */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
           <h2 className="text-2xl md:text-3xl font-serif text-navy italic mb-8 font-light leading-relaxed">
            "O foco da nossa comunicação é prevenção, estratégia e segurança. Construímos estruturas sólidas para que sua empresa não dependa apenas da sorte."
           </h2>
           <p className="text-gold text-[10px] font-bold uppercase tracking-ultra">Brito Oliveira Assessoria</p>
        </div>
      </section>
    </div>
  );
};

export default Services;