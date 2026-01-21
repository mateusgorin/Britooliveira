
import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { ArrowUpRight, ChevronDown, ArrowRight, Brain, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const toggleExpand = (id: string) => {
    setExpandedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

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

      {/* Seção de Expertise */}
      <section className="scroll-mt-24 overflow-hidden">
        {/* Bloco de Título Branco */}
        <div className="bg-white pt-20 pb-12 md:pt-24 md:pb-16 relative">
          <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="h-px w-8 bg-gold"></div>
              <span className="text-gold text-[10px] md:text-xs font-bold uppercase tracking-ultra">Nossa Expertise</span>
              <div className="h-px w-8 bg-gold"></div>
            </div>
            
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-navy mb-8 italic">
              Frentes de <span className="text-gold not-italic">Atuação</span>
            </h2>
            
            <div className="max-w-2xl mx-auto">
              <p className="text-gray-500 font-light text-base md:text-lg leading-relaxed">
                Especialidades desenhadas para a segurança do seu legado empresarial, com foco estratégico e preventivo.
              </p>
            </div>
          </div>
        </div>

        {/* Grid Normal (sem overlap) - Tamanho Padronizado */}
        <div className="bg-white pb-24 relative z-20">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
              {SERVICES.map((service) => {
                const isExpanded = expandedIds.has(service.id);

                return (
                  <div key={service.id} className="flex flex-col">
                    <div className="bg-white p-6 md:p-8 border border-gray-100 shadow-[0_25px_60px_rgba(0,0,0,0.1)] hover:border-gold/40 hover:-translate-y-3 transition-all duration-500 group flex flex-col justify-between min-h-[300px] rounded-sm relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-navy via-gold to-navy transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                      
                      <div>
                        <div className="text-gold mb-4 group-hover:text-navy transition-colors">
                          <div className="[&>svg]:w-9 [&>svg]:h-9 [&>svg]:stroke-[1.25]">
                              {service.icon}
                          </div>
                        </div>
                        <h3 className="text-xl md:text-2xl font-serif text-navy mb-4 italic leading-tight group-hover:text-gold transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-gray-500 leading-relaxed mb-4 font-light text-sm md:text-base">
                          {service.description}
                        </p>

                        {/* Conteúdo Complementar */}
                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[500px] opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
                          <div className="h-px w-full bg-gray-100 mb-6"></div>
                          <p className="text-navy/70 leading-relaxed font-normal text-sm italic mb-8 border-l-2 border-gold pl-4 py-2 bg-gray-50/50">
                            {service.complementaryText}
                          </p>
                          <Link to="/contato" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-ultra bg-gold text-navy px-8 py-4 hover:bg-navy hover:text-white transition-all shadow-md">
                            Agendar Diagnóstico <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                      
                      <div className="pt-6 border-t border-gray-50 flex items-center justify-between shrink-0">
                          <button 
                            onClick={() => toggleExpand(service.id)}
                            className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-ultra text-navy hover:text-gold transition-colors"
                          >
                            {isExpanded ? 'Ocultar Detalhes' : 'Saiba Mais'}
                            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-500 ${isExpanded ? 'rotate-180' : ''}`} />
                          </button>
                          <ArrowUpRight className="w-4 h-4 text-gray-200 group-hover:text-gold transition-colors" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* BLOCO: DESTAQUE PSICOLOGIA E NR-1 */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
             <div>
                <span className="text-gold text-[10px] font-bold uppercase tracking-ultra mb-4 block">Diferencial Estratégico</span>
                <h2 className="text-3xl md:text-4xl font-serif text-navy mb-8 leading-tight">
                  Gestão de Riscos Psicossociais <br /> 
                  <span className="italic font-light">e Adequação à NR-1</span>
                </h2>
                <div className="space-y-6 text-gray-600 font-light text-base leading-relaxed">
                   <p>
                    A partir de <strong className="text-navy font-semibold italic">maio de 2026</strong>, a NR-1 passa a exigir que todas as empresas incluam a gestão de riscos psicossociais em seu PGR.
                   </p>
                   <p>
                    Fatores relacionados à saúde mental, clima organizacional, sobrecarga, assédio e pressão devem ser identificados, avaliados e gerenciados de forma <strong className="text-navy font-medium">obrigatória</strong>.
                   </p>
                   <p className="text-navy font-medium pt-4">
                    Atuamos de forma integrada na adequação legal, técnica e estratégica.
                   </p>
                </div>
             </div>

             <div className="bg-white p-8 md:p-12 border border-gray-100 shadow-xl relative">
                <div className="absolute -top-6 -left-6 w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center">
                  <Brain className="w-10 h-10 text-gold" />
                </div>
                <h3 className="text-xl font-serif text-navy mb-8 italic">Soluções Oferecidas:</h3>
                <ul className="space-y-4">
                  {[
                    'Identificação e mapeamento de riscos psicossociais',
                    'Apoio técnico na inclusão no PGR',
                    'Estruturação de medidas preventivas e corretivas',
                    'Assessoria para redução de passivos trabalhistas',
                    'Psicologia Organizacional como ferramenta de gestão'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="text-gold w-4 h-4 shrink-0" />
                      <span className="text-gray-700 text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-gray-50">
                   <Link to="/contato" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-ultra text-navy hover:text-gold transition-colors">
                     Solicitar Adequação <ArrowRight className="w-3 h-3" />
                   </Link>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Banner de Foco */}
      <section className="py-24 bg-white">
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
