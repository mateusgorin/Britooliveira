
import React from 'react';
import { SERVICES } from '../constants';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="pt-40 md:pt-56 pb-16 md:pb-24 bg-navy text-white text-center">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <span className="text-gold text-[10px] font-bold uppercase tracking-ultra mb-4 md:mb-6 block">Áreas de Atuação</span>
          <h1 className="text-4xl md:text-7xl font-serif italic mb-6 md:mb-8">Soluções <span className="text-gradient-gold not-italic">Institucionais</span></h1>
          <p className="text-gray-400 font-light text-base md:text-lg">Especialidades desenhadas para a segurança do seu legado empresarial.</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100 border border-gray-100">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-white p-16 group transition-all duration-700 hover:bg-corporate-gray flex flex-col justify-between">
                <div>
                  <div className="text-gold mb-10 transition-transform duration-500 group-hover:translate-x-2">
                    {service.icon}
                  </div>
                  <h3 className="text-3xl font-serif text-navy mb-6 group-hover:text-gold transition-colors">{service.title}</h3>
                  <p className="text-gray-500 leading-relaxed mb-10 font-light text-lg">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-4 mb-12">
                     <span className="text-[10px] font-bold text-navy uppercase tracking-widest bg-white border border-gray-200 px-4 py-2">Estratégico</span>
                     <span className="text-[10px] font-bold text-navy uppercase tracking-widest bg-white border border-gray-200 px-4 py-2">Preventivo</span>
                  </div>
                </div>
                <Link to="/contato" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-ultra text-navy hover:text-gold transition-colors">
                  Solicitar Diagnóstico <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner de Foco */}
      <section className="py-32 bg-corporate-gray">
        <div className="max-w-4xl mx-auto px-8 text-center">
           <h2 className="text-3xl font-serif text-navy italic mb-8">
            "O foco da nossa comunicação é prevenção, estratégia e segurança. Construímos estruturas sólidas para que sua empresa não dependa apenas da sorte."
           </h2>
           <p className="text-gold text-[10px] font-bold uppercase tracking-ultra">Brito Oliveira Assessoria</p>
        </div>
      </section>
    </div>
  );
};

export default Services;
