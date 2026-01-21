
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Target, 
  Shield, 
  Award,
  ChevronDown,
  Crown, 
  Zap, 
  Globe, 
  ShieldCheck, 
  Handshake,
  Brain
} from 'lucide-react';
import { SERVICES, DIFFERENTIALS } from '../constants';

const Home: React.FC = () => {
  const location = useLocation();
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());
  const diffIcons = [<Handshake />, <Zap />, <Globe />, <ShieldCheck />, <Award />, <Crown />];

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          const offset = 100;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }, [location]);

  const toggleExpand = (id: string) => {
    setExpandedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center bg-navy-dark overflow-hidden py-24 md:py-32">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10s] hover:scale-110"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-navy/95 via-navy/80 to-navy/95"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full">
          <div className="max-w-4xl">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif leading-tight md:leading-[1.1] mb-6 md:mb-7 italic">
              Assessoria Empresarial Estratégica com <span className="text-gradient-gold not-italic">Segurança, Credibilidade e Visão de Futuro.</span>
            </h1>
            <p className="text-gray-300 text-sm md:text-lg leading-relaxed mb-8 md:mb-10 max-w-2xl font-light">
              Oferecemos suporte empresarial e jurídico integrado para organizações que buscam crescimento sustentável, organização interna e segurança absoluta nas decisões, alinhadas às exigências legais e às melhores práticas de governança.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap items-center gap-3 md:gap-5">
              <Link 
                to="/contato" 
                className="w-full sm:w-auto bg-gold hover:bg-white text-navy px-7 md:px-9 py-3.5 md:py-4.5 text-center font-semibold uppercase text-[9px] md:text-[11px] tracking-ultra transition-all shadow-2xl flex items-center justify-center group"
              >
                Fale com um Especialista
                <ArrowRight className="ml-2.5 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                to="/#servicos" 
                className="w-full sm:w-auto border border-white/20 hover:border-gold hover:text-gold text-white px-7 md:px-9 py-3.5 md:py-4.5 text-center font-semibold uppercase text-[9px] md:text-[11px] tracking-ultra transition-all backdrop-blur-sm"
              >
                Nossos Serviços
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 w-full flex justify-center z-20 px-6">
          <Link 
            to="/#quem-somos" 
            className="flex flex-col items-center gap-2 text-white/50 hover:text-gold transition-all group"
          >
            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-ultra">Descubra nossa Instituição</span>
            <ChevronDown className="w-5 h-5 animate-bounce text-gold/70 group-hover:text-gold" />
          </Link>
        </div>
      </section>

      {/* Seção Quem Somos */}
      <section id="quem-somos" className="py-16 md:py-24 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="relative order-2 lg:order-1 max-w-md mx-auto lg:mx-0">
              <div className="relative z-10 aspect-[4/5] overflow-hidden bg-gray-100">
                 <img 
                    src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop" 
                    alt="Executivo em Terno" 
                    className="w-full h-full object-cover transition-all duration-1000"
                 />
              </div>
              <div className="absolute top-4 left-4 md:top-6 md:left-6 w-full h-full border border-navy/10 -z-0"></div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-6 h-px bg-gold"></span>
                <span className="text-gold text-[10px] font-bold uppercase tracking-ultra">Quem Somos</span>
              </div>
              <h2 className="text-navy text-2xl md:text-4xl font-serif mb-8 leading-tight">
                Mais que consultoria. <br /> 
                <span className="italic font-light text-navy/80">Inteligência Empresarial aplicada à realidade do seu negócio.</span>
              </h2>
              <div className="space-y-6 text-gray-600 font-light text-sm md:text-base leading-relaxed text-justify lg:text-left">
                <p>
                  A <strong className="text-navy font-medium">Brito Oliveira Assessoria Empresarial</strong> consolidou-se no mercado como referência em segurança jurídica, eficiência operacional e gestão estratégica de riscos. Atuamos a partir de uma visão integrada, na qual o jurídico deixa de ser um entrave e passa a ser uma ferramenta real de crescimento, proteção patrimonial e sustentabilidade empresarial.
                </p>
                <p>
                  Nosso corpo técnico é formado por especialistas que compreendem a linguagem dos negócios e a dinâmica organizacional. Não entregamos apenas pareceres: entregamos soluções práticas, que estruturam a governança corporativa, otimizam a carga tributária, reduzem passivos trabalhistas e fortalecem a tomada de decisão.
                </p>
              </div>
              <div className="mt-10 pt-8 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                 {['Atuação preventiva e estratégica', 'Sigilo absoluto e ética profissional', 'Excelência técnica e jurídica', 'Visão de dono e foco em resultados'].map((item) => (
                    <div key={item} className="flex items-center gap-3 group">
                        <CheckCircle2 className="text-gold w-4 h-4 shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="text-navy text-[10px] md:text-xs font-semibold uppercase tracking-wider">{item}</span>
                    </div>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Pilares */}
      <section className="py-16 md:py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
           <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-16 text-center md:text-left">
              <div className="max-w-xl">
                <h2 className="text-3xl font-serif text-navy italic mb-4">Nossos Pilares</h2>
                <div className="h-px w-12 bg-gold mx-auto md:mx-0"></div>
              </div>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
              {[
                  { icon: Target, title: "Nossa Missão", text: "Proporcionar clareza, segurança jurídica e sustentabilidade nas decisões empresariais, por meio de uma assessoria técnica de alto nível, personalizada e alinhada às exigências legais, à governança corporativa e à saúde organizacional." },
                  { icon: Shield, title: "Nossa Visão", text: "Ser referência nacional em assessoria empresarial preventiva, reconhecida pela integridade, excelência técnica e capacidade de resolver complexidades jurídicas, organizacionais e humanas nas médias e grandes empresas." },
                  { icon: Award, title: "Nossos Valores", text: "Ética e integridade absoluta • Atuação preventiva e estratégica • Segurança jurídica e organizacional • Responsabilidade social e humana • Compromisso com resultados sustentáveis" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-7 md:p-10 border border-gray-200 shadow-2xl transition-all duration-500 group hover:border-gold/30 hover:-translate-y-2 rounded-sm min-h-[350px] flex flex-col">
                   <item.icon className="w-7 h-7 md:w-8 md:h-8 text-navy mb-6 group-hover:text-gold transition-colors stroke-[1.5]" />
                   <h3 className="text-xl font-serif text-navy mb-4 italic">{item.title}</h3>
                   <p className="text-gray-500 text-sm leading-relaxed font-light">
                     {item.text}
                   </p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* SEÇÃO SERVIÇOS */}
      <section id="servicos" className="scroll-mt-24 overflow-hidden">
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
        
        {/* Grid de Cards - Tamanho Padronizado */}
        <div className="bg-white pb-24 relative z-20">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start">
              {SERVICES.map((service) => {
                const isExpanded = expandedIds.has(service.id);

                return (
                  <div key={service.id} className="flex flex-col">
                    <div className="bg-white border border-gray-200 shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-6 md:p-8 flex flex-col justify-between transition-all duration-500 hover:border-gold/40 hover:-translate-y-3 group/card min-h-[300px] rounded-sm relative overflow-hidden">
                      {/* Borda decorativa interna invisível que brilha no hover */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-navy via-gold to-navy transform scale-x-0 group-hover/card:scale-x-100 transition-transform duration-700"></div>
                      
                      <div>
                        <div className="text-gold mb-4 group-hover/card:text-navy transition-colors">
                          <div className="[&>svg]:w-7 md:[&>svg]:w-9 [&>svg]:h-7 md:[&>svg]:h-9 [&>svg]:stroke-[1.25]">
                            {service.icon}
                          </div>
                        </div>
                        <h3 className="text-xl md:text-2xl font-serif text-navy mb-4 italic leading-tight group-hover/card:text-gold transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-gray-500 leading-relaxed font-light text-sm md:text-base">
                          {service.description}
                        </p>

                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[500px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                          <div className="h-px w-full bg-gray-50 mb-6"></div>
                          <p className="text-navy/70 leading-relaxed font-normal text-sm border-l-2 border-gold pl-4 py-2 bg-gray-50/50 italic">
                            {service.complementaryText}
                          </p>
                          <Link to="/contato" className="mt-8 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-ultra bg-navy text-white px-8 py-4 hover:bg-gold hover:text-navy transition-all shadow-lg">
                            Solicitar Consultoria <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>

                      <div className="pt-6 mt-6 border-t border-gray-50 shrink-0">
                        <button 
                          onClick={() => toggleExpand(service.id)}
                          className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-ultra text-navy/60 hover:text-navy transition-colors group/btn"
                        >
                          {isExpanded ? 'Recolher Informações' : 'Explorar Detalhes'} 
                          <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-500 ${isExpanded ? 'rotate-180' : ''}`} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO PSICOLOGIA */}
      <section id="psicologia" className="py-16 md:py-24 bg-gray-50 scroll-mt-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            <div className="order-2 lg:order-1">
              <div className="bg-white p-6 md:p-12 border border-gray-200 shadow-2xl relative rounded-sm overflow-hidden transition-all duration-500 hover:-translate-y-2 group/psych">
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-gold/5 rounded-full flex items-center justify-center -z-0">
                  <Brain className="w-16 h-16 text-gold opacity-20" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-serif text-navy mb-8 italic relative z-10 group-hover/psych:text-gold transition-colors duration-500">Nossa atuação inclui:</h3>
                <ul className="space-y-5 relative z-10">
                  {[
                    'Identificação e mapeamento de riscos psicossociais no ambiente de trabalho',
                    'Apoio técnico na inclusão desse riscos no PGR',
                    'Estruturação de medidas preventivas e corretivas',
                    'Assessoria jurídica e organizacional para redução de passivos trabalhistas',
                    'Psicologia Organizacional como ferramenta de prevenção e desempenho'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 group/item transition-all duration-300 hover:translate-x-2">
                      <div className="mt-1 w-4 h-4 md:w-5 md:h-5 rounded-full bg-gold/10 flex items-center justify-center shrink-0 group-hover/item:bg-gold transition-colors">
                        <CheckCircle2 className="w-2.5 h-2.5 md:w-3 md:h-3 text-gold group-hover/item:text-white transition-colors" />
                      </div>
                      <span className="text-gray-700 text-sm md:text-base font-light leading-snug group-hover/item:text-navy transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-10 pt-8 border-t border-gray-100 relative z-10 transition-all duration-300 hover:translate-x-1">
                   <p className="text-navy text-[10px] md:text-xs font-bold uppercase tracking-ultra mb-2">Conformidade Legal</p>
                   <p className="text-gray-500 text-sm font-light italic leading-relaxed">
                     Promovemos ambientes de trabalho mais saudáveis, produtivos e juridicamente seguros.
                   </p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-6 h-px bg-gold"></span>
                <span className="text-gold text-[10px] font-bold uppercase tracking-ultra">Diferencial Exclusivo</span>
              </div>
              
              <h2 className="text-navy text-2xl md:text-4xl font-serif mb-8 leading-tight">
                Gestão de Riscos Psicossociais <br /> 
                <span className="italic font-light text-navy/80">e Adequação à NR-1</span>
              </h2>
              
              <div className="space-y-6 text-gray-600 font-light text-sm md:text-base leading-relaxed text-justify lg:text-left">
                <p>
                  A partir de <strong className="text-navy font-semibold italic border-b border-gold/40">maio de 2026</strong>, a NR-1 passa a exigir que todas as empresas incluam a gestão de riscos psicossociais em seu Programa de Gerenciamento de Riscos (PGR).
                </p>
                <p>
                  Isso significa que fatores relacionados à saúde mental, clima organizacional, sobrecarga de trabalho, assédio, profissional de saúde, pressão excessiva e organização das atividades devem ser <strong className="text-navy font-medium">identificados, avaliados e gerenciados de forma obrigatória</strong>.
                </p>
                <p className="text-navy font-medium pt-4">
                  A Brito Oliveira Assessoria Empresarial atua de forma integrada na adequação legal, técnica e estratégica das empresas a essa nova exigência.
                </p>
              </div>

              <div className="mt-10">
                <Link 
                  to="/contato" 
                  className="inline-flex items-center gap-4 bg-navy text-white hover:bg-gold hover:text-navy px-8 py-4 text-[10px] font-bold uppercase tracking-ultra transition-all duration-300 shadow-lg group w-full sm:w-auto justify-center"
                >
                  Consultar Adequação NR-1
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frase de Efeito */}
      <section className="py-20 md:py-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/5 to-transparent opacity-50"></div>
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center relative z-10">
           <h2 className="text-xl md:text-3xl font-serif text-white/90 italic mb-8 font-light leading-relaxed">
            "O foco da nossa comunicação é prevenção, estratégia e segurança. Construímos estruturas sólidas para que sua empresa não dependa apenas da sorte."
           </h2>
           <div className="inline-block border-b border-gold/30 pb-2">
             <p className="text-gold text-[10px] font-bold uppercase tracking-ultra">Brito Oliveira Assessoria</p>
           </div>
        </div>
      </section>

      {/* SEÇÃO DIFERENCIAIS */}
      <section id="diferenciais" className="py-16 md:py-24 bg-gray-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-12 md:mb-16 border-b border-gray-200 pb-12">
             <div className="md:w-1/3 text-center md:text-left">
                <span className="text-gold text-[10px] font-bold uppercase tracking-ultra mb-4 block">Por que nós?</span>
                <h2 className="text-3xl md:text-4xl font-serif text-navy leading-tight">
                  Diferenciais <br className="hidden md:block" /> <span className="italic font-light">Estratégicos.</span>
                </h2>
             </div>
             <div className="md:w-2/3 flex items-center text-center md:text-left">
                <p className="text-gray-500 font-light leading-relaxed text-base md:text-lg">
                  O que nos posiciona como a escolha de elite para empresas que buscam segurança jurídica e organização é a nossa metodologia proprietária, que integra prevenção de riscos, eficiência operacional e visão estratégica.
                </p>
             </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start">
            {DIFFERENTIALS.map((diff, index) => (
              <div 
                key={index} 
                className="group relative bg-white p-7 md:p-10 border border-gray-200 shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-sm overflow-hidden min-h-[300px] flex flex-col"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-navy via-gold to-navy transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                <div className="mb-6 md:mb-8 relative">
                   <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-navy/5 flex items-center justify-center text-navy group-hover:bg-navy group-hover:text-gold transition-all duration-500">
                     <div className="[&>svg]:w-6 md:[&>svg]:w-7 [&>svg]:h-6 md:[&>svg]:h-7 [&>svg]:stroke-[1.5]">
                        {diffIcons[index % diffIcons.length]}
                      </div>
                   </div>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-serif text-navy mb-4 group-hover:text-gold transition-colors duration-300">
                    {diff.title}
                  </h3>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed font-light">
                    {diff.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10">
          <h2 className="text-navy text-2xl md:text-5xl font-serif mb-10 font-light leading-tight">
            "Não apenas resolvemos problemas; <br /> <span className="italic">trabalhamos para evitar que eles aconteçam."</span>
          </h2>
          <Link 
            to="/contato" 
            className="inline-block bg-gold text-navy hover:bg-navy hover:text-white px-8 md:px-10 py-4 font-semibold uppercase text-[10px] tracking-ultra transition-all duration-300 shadow-xl"
          >
            Agendar Reunião com Especialista
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
