
import React, { useState } from 'react';
import { 
  Calendar, 
  Bell, 
  Eye, 
  FileX, 
  ArrowRight,
  ClipboardList,
  CheckCircle2,
  ShieldCheck,
  ChevronDown,
  Stethoscope,
  ClipboardCheck,
  FileSearch,
  Building2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const HealthCompliance: React.FC = () => {
  const [expandedIds, setExpandedIds] = useState<Set<number>>(new Set());

  const toggleExpand = (id: number) => {
    setExpandedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const services = [
    {
      id: 1,
      title: "Vigilância Sanitária",
      desc: "Protocolo de processos e acompanhamento administrativo completo até deferimento ou atendimento de todas as exigências regulatórias.",
      complementary: "Atuamos diretamente na interface com a ANVISA e vigilâncias locais, garantindo que todos os protocolos de higiene e segurança sejam rigorosamente atendidos.",
      icon: <Stethoscope className="w-8 h-8 md:w-9 md:h-9" />,
      img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      title: "Conselhos Profissionais",
      desc: "Cadastro e renovação junto ao CRM e COREN, garantindo regularidade dos profissionais responsáveis pelo seu estabelecimento.",
      complementary: "Gestão burocrática de responsabilidade técnica e registros corporativos para manter a clínica em plena legalidade perante as autarquias.",
      icon: <ClipboardCheck className="w-8 h-8 md:w-9 md:h-9" />,
      img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      title: "Alvarás e Licenças",
      desc: "Gestão completa de Alvará de Funcionamento e Alvará Sanitário, incluindo cadastros iniciais e todas as renovações periódicas.",
      complementary: "Monitoramento constante da validade de licenças municipais e estaduais, antecipando renovações para evitar multas ou interrupções operacionais.",
      icon: <Building2 className="w-8 h-8 md:w-9 md:h-9" />,
      img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 4,
      title: "Laudo Técnico (LTA)",
      desc: "Protocolo de entrada e acompanhamento detalhado do processo de Laudo Técnico de Avaliação junto aos órgãos competentes.",
      complementary: "Suporte administrativo na submissão de plantas e memoriais técnicos para aprovação de áreas físicas destinadas a serviços de saúde.",
      icon: <FileSearch className="w-8 h-8 md:w-9 md:h-9" />,
      img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* PAGE 1: HERO */}
      <section className="relative min-h-screen flex items-center bg-navy-dark overflow-hidden py-24 md:py-32">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10s] hover:scale-105"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy-dark/90 to-navy-dark/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-gold"></span>
              <span className="text-gold text-[10px] md:text-xs font-bold uppercase tracking-ultra">Regulamentação em Saúde</span>
            </div>
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif leading-tight md:leading-[1.1] mb-8 italic">
              Gestão de Licenças e <br />
              <span className="text-gradient-gold not-italic">Compliance Regulatório</span> <br className="hidden md:block" />
              para Estabelecimentos de Saúde
            </h1>
            <p className="text-gray-300 text-sm md:text-lg leading-relaxed mb-10 max-w-2xl font-light border-l border-gold/30 pl-6">
              Segurança e agilidade no licenciamento sanitário. Atuamos desde o diagnóstico inicial até o deferimento final, permitindo que você foque no que realmente importa: o cuidado com seus pacientes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contato" 
                className="bg-gold hover:bg-white text-navy px-8 py-4 text-center font-bold uppercase text-[10px] md:text-[11px] tracking-ultra transition-all shadow-2xl flex items-center justify-center group"
              >
                Solicitar Diagnóstico
                <ArrowRight className="ml-2.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PAGE 2: ESCOPO DE SERVIÇOS */}
      <section className="py-20 md:py-32 bg-white px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="h-px w-8 bg-gold"></div>
              <span className="text-gold text-[10px] md:text-xs font-bold uppercase tracking-ultra">Soluções Especializadas</span>
              <div className="h-px w-8 bg-gold"></div>
            </div>
            <h2 className="text-navy text-3xl md:text-5xl lg:text-6xl font-serif mb-8 italic leading-tight">
              Escopo de <span className="text-gold not-italic">Serviços</span>
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-500 text-sm md:text-lg font-light leading-relaxed">
                Atuação técnica abrangente focada em eficiência administrativa e controle rigoroso de prazos perante os órgãos reguladores.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((item) => {
              const isExpanded = expandedIds.has(item.id);
              return (
                <div key={item.id} className="group bg-white border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 rounded-sm overflow-hidden flex flex-col h-full relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 z-20"></div>
                  
                  <div className="aspect-[4/3] overflow-hidden bg-gray-200 relative">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800';
                      }}
                    />
                  </div>

                  <div className="p-7 flex-grow flex flex-col">
                    <div className="text-gold mb-5 group-hover:text-navy transition-colors">
                      {item.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-serif text-navy mb-4 italic group-hover:text-gold transition-colors leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed font-light mb-6">
                      {item.desc}
                    </p>

                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <p className="text-navy/70 text-xs md:text-sm italic font-medium border-l-2 border-gold pl-4 py-2 bg-gray-50 mb-6 leading-relaxed">
                        {item.complementary}
                      </p>
                    </div>

                    <div className="mt-auto pt-6 border-t border-gray-50">
                      <button 
                        onClick={() => toggleExpand(item.id)}
                        className="text-[10px] font-bold uppercase tracking-ultra text-navy/60 hover:text-navy transition-colors flex items-center gap-2"
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
      </section>

      {/* PAGE 3: GESTÃO INTELIGENTE */}
      <section className="py-20 md:py-32 bg-navy-dark px-6 md:px-8 border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gold/10 to-transparent opacity-50"></div>
        
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 md:gap-24 relative z-10">
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 order-2 lg:order-1 w-full">
            <div className="flex flex-col items-center gap-5 group">
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border border-gold/30 flex items-center justify-center group-hover:bg-gold group-hover:text-navy transition-all duration-500 bg-navy/30">
                <Calendar className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-center font-bold text-white/60 group-hover:text-gold">Controle de<br/>Prazos</span>
            </div>
            <div className="flex flex-col items-center gap-5 mt-8 md:mt-16 group">
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border border-gold/30 flex items-center justify-center group-hover:bg-gold group-hover:text-navy transition-all duration-500 bg-navy/30">
                <Bell className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-center font-bold text-white/60 group-hover:text-gold">Avisos<br/>Prévios</span>
            </div>
            <div className="flex flex-col items-center gap-5 group col-span-2 md:col-span-1">
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border border-gold/30 flex items-center justify-center group-hover:bg-gold group-hover:text-navy transition-all duration-500 bg-navy/30">
                <Eye className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-center font-bold text-white/60 group-hover:text-gold">Acompanhamento<br/>Contínuo</span>
            </div>
          </div>

          <div className="flex-1 bg-white p-8 md:p-16 text-navy shadow-2xl rounded-sm relative overflow-hidden order-1 lg:order-2">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gold"></div>
            <h2 className="text-2xl md:text-3xl font-serif italic mb-6 text-navy leading-tight">Gestão Inteligente de Vencimentos</h2>
            <p className="text-gray-600 text-sm md:text-base mb-10 font-light border-b border-gray-100 pb-8 leading-relaxed">
              Nossa proatividade evita multas e interrupções nas suas atividades. O monitoramento é constante e as ações são antecipadas.
            </p>
            <ul className="space-y-6">
              {[
                "Monitoramento de prazos de todas as licenças",
                "Notificações automáticas 60 dias antes do vencimento",
                "Relatórios mensais de status regulatório",
                "Planejamento de renovações sem urgência"
              ].map((bullet, i) => (
                <li key={i} className="flex items-start gap-4 group">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-navy/90 text-sm md:text-base leading-snug">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PAGE 4: RESPONSABILIDADES */}
      <section className="py-20 md:py-32 bg-gray-50 px-6 md:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16 md:mb-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-gold"></span>
              <span className="text-gold text-[10px] md:text-xs font-bold uppercase tracking-ultra">Transparência Total</span>
            </div>
            <h2 className="text-navy text-3xl md:text-4xl font-serif mb-6 italic">Limites de Atuação e <span className="text-gold not-italic">Responsabilidades</span></h2>
            <p className="text-gray-500 font-light text-sm md:text-lg leading-relaxed">
              Esclarecemos os limites de nossa atuação administrativa para garantir uma parceria sólida e sem ambiguidades.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="space-y-8">
              <h3 className="text-xl font-serif text-navy italic mb-8 flex items-center gap-4">
                <span className="w-2 h-2 bg-gold rounded-full"></span>
                Serviços Não Inclusos
              </h3>
              
              <div className="space-y-4">
                {[
                  { title: "Custos Oficiais", text: "Taxas, emolumentos e valores cobrados por órgãos públicos." },
                  { title: "Projetos de Engenharia", text: "Elaboração de plantas, projetos arquitetônicos ou elétricos." },
                  { title: "Laudos Estruturais", text: "Vistorias técnicas que exijam profissionais com habilitação específica." }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white border border-gray-100 p-6 md:p-8 shadow-sm hover:border-gold/30 transition-all group rounded-sm">
                    <h4 className="font-bold text-navy text-[10px] uppercase tracking-ultra mb-3 group-hover:text-gold transition-colors">{item.title}</h4>
                    <p className="text-sm md:text-base text-gray-500 font-light leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="p-8 bg-navy text-white/70 border-l-4 border-gold italic flex items-start gap-5 shadow-lg rounded-sm">
                <FileX className="w-8 h-8 shrink-0 text-gold" />
                <p className="text-sm md:text-base font-light leading-relaxed">
                  Não assumimos responsabilidade técnica pelos serviços prestados no estabelecimento, limitando-nos ao suporte administrativo e de compliance documental.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-8">
               <div className="bg-navy p-8 md:p-12 shadow-2xl rounded-sm border border-white/5 relative overflow-hidden group h-full">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gold"></div>
                  <h3 className="text-gold text-2xl font-serif italic mb-10 border-b border-gold/20 pb-4">Nossa Entrega</h3>
                  <ul className="space-y-6">
                    {[
                      "Montagem de dossiês documentais",
                      "Protocolo e acompanhamento diligente",
                      "Interface direta com fiscais e relatores",
                      "Auditoria mensal de validades"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-4 group/li transition-all duration-300 hover:translate-x-2">
                        <ArrowRight className="w-4 h-4 text-gold mt-1 group-hover/li:translate-x-1 transition-transform" />
                        <span className="text-[10px] md:text-[11px] text-white/70 uppercase tracking-ultra font-bold leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
               </div>

               <div className="bg-white p-8 md:p-12 shadow-xl border border-gray-100 rounded-sm relative overflow-hidden h-full">
                  <div className="absolute top-0 left-0 w-1 h-full bg-navy"></div>
                  <h3 className="text-navy text-2xl font-serif italic mb-10 border-b border-gray-100 pb-4">Responsabilidades do Contratante</h3>
                  <ul className="space-y-6">
                    {[
                      "Assinaturas e outorgas necessárias",
                      "Manutenção das condições físicas do imóvel",
                      "Pagamento de guias e taxas oficiais",
                      "Fornecimento de dados dos responsáveis técnicos"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-4 group/li transition-all duration-300 hover:translate-x-2">
                        <ArrowRight className="w-4 h-4 text-navy mt-1 group-hover/li:translate-x-1 transition-transform" />
                        <span className="text-[10px] md:text-[11px] text-navy/70 uppercase tracking-ultra font-bold leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAGE 5: DOCUMENTAÇÃO */}
      <section className="py-20 md:py-32 bg-navy-dark px-6 md:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
            <div className="lg:w-1/2">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-gold"></span>
                <span className="text-gold text-[10px] md:text-xs font-bold uppercase tracking-ultra">Início do Processo</span>
              </div>
              <h2 className="text-white text-3xl md:text-5xl font-serif mb-8 italic leading-tight">Documentação <span className="text-gold not-italic">Necessária</span></h2>
              <p className="text-gray-300 text-sm md:text-lg leading-relaxed mb-8 font-light">
                Para darmos o primeiro passo rumo à sua regularização, necessitaremos da análise prévia dos seguintes arquivos:
              </p>
              <div className="p-8 bg-white/5 border border-gold/20 flex items-start gap-6 backdrop-blur-sm rounded-sm group transition-all duration-500 hover:border-gold/40">
                <ClipboardList className="w-10 h-10 text-gold shrink-0 group-hover:scale-110 transition-transform" />
                <p className="text-base md:text-xl text-gray-200 italic font-medium leading-relaxed">
                  "A organização documental é o pilar de uma aprovação rápida e sem exigências adicionais."
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 relative group w-full">
              <div className="absolute -inset-4 border border-gold/10 -z-0 group-hover:inset-0 transition-all duration-700"></div>
              <div className="grid grid-cols-2 gap-4 relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80&w=1000" 
                  alt="Análise de Documentos 1" 
                  className="w-full h-48 md:h-64 object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 rounded-sm"
                />
                <img 
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000" 
                  alt="Análise de Documentos 2" 
                  className="w-full h-48 md:h-64 object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 rounded-sm mt-8"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { num: "01", title: "Empresariais", text: "CNPJ atualizado, Contrato Social e última alteração, comprovante de endereço." },
              { num: "02", title: "Atividades", text: "Memorial descritivo de serviços e relação detalhada de ambientes físicos." },
              { num: "03", title: "Profissionais", text: "Cédula profissional e certificado de RT dos conselhos de classe." },
              { num: "04", title: "Histórico", text: "Cópia das licenças vencidas ou protocolos de processos em andamento." }
            ].map((item, idx) => (
              <div key={idx} className="border border-white/5 bg-navy/40 p-8 md:p-10 hover:bg-navy transition-all duration-500 group relative rounded-sm h-full flex flex-col">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                <span className="text-4xl font-serif italic text-gold/20 group-hover:text-gold transition-colors block mb-6">{item.num}</span>
                <h4 className="text-xl font-serif italic mb-4 text-white group-hover:text-gold transition-colors leading-tight">{item.title}</h4>
                <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAGE 6: PRAZOS E FECHAMENTO */}
      <section className="py-20 md:py-32 bg-white px-6 md:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-gold"></span>
              <span className="text-gold text-[10px] md:text-xs font-bold uppercase tracking-ultra">Diligência e Prazos</span>
            </div>
            <h2 className="text-navy text-3xl md:text-5xl lg:text-6xl font-serif mb-10 italic leading-tight">Nota sobre <span className="text-gold not-italic">Deferimentos</span></h2>
            <div className="space-y-8 text-gray-500 font-light text-sm md:text-base leading-relaxed text-justify">
              <p>
                É fundamental compreender que os prazos de análise e emissão de licenças dependem exclusivamente dos órgãos públicos competentes (Vigilância Sanitária, Conselhos de Classe e Prefeituras).
              </p>
              <p>
                Nosso compromisso é com a <strong>agilidade no cumprimento de exigências</strong> e com a qualidade técnica de cada submissão, minimizando as chances de indeferimento ou atrasos por erros documentais.
              </p>
            </div>
            
            <div className="mt-12 p-8 md:p-12 border border-gray-100 bg-gray-50 relative overflow-hidden group rounded-sm shadow-sm">
              <div className="absolute top-0 left-0 w-2 h-full bg-gold"></div>
              <p className="text-xl md:text-2xl font-serif italic text-navy leading-relaxed relative z-10">
                "Navegamos pela burocracia para que sua excelência clínica não sofra interrupções."
              </p>
              <ShieldCheck className="absolute -bottom-6 -right-6 w-32 h-32 text-gold/5 group-hover:text-gold/10 transition-colors" />
            </div>
            
            <div className="mt-12">
              <Link 
                to="/contato" 
                className="bg-navy hover:bg-gold text-white hover:text-navy px-10 py-5 font-bold uppercase text-[10px] md:text-[11px] tracking-ultra transition-all shadow-xl inline-flex items-center gap-4 group w-full sm:w-auto justify-center"
              >
                Agendar Reunião de Compliance
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative group w-full">
            <div className="absolute top-8 left-8 w-full h-full border-2 border-gold/10 -z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2000" 
              alt="Ambiente Hospitalar Profissional" 
              className="w-full h-auto shadow-2xl relative z-10 grayscale group-hover:grayscale-0 transition-all duration-1000 rounded-sm"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthCompliance;
