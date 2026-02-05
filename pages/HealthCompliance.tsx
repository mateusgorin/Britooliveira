
import React from 'react';
import { 
  Calendar, 
  Bell, 
  Eye, 
  FileX, 
  ArrowRight,
  ClipboardList,
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';

const HealthCompliance: React.FC = () => {
  return (
    <div className="bg-navy text-white font-sans">
      {/* PAGE 1: HERO / CAPA */}
      <section className="relative min-h-screen flex items-center bg-navy-dark overflow-hidden pt-20">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 transition-transform duration-[10s] hover:scale-105"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy-dark/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full py-24">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-gold"></span>
              <span className="text-gold text-xs font-bold uppercase tracking-ultra">Regulamentação Especializada</span>
            </div>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-8 italic">
              Gestão Completa de Licenças e <br />
              <span className="text-gradient-gold not-italic">Conformidade Regulatória</span> para <br />
              Estabelecimentos de Saúde
            </h1>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-10 max-w-2xl font-light border-l border-gold/30 pl-6">
              Simplifique a conformidade regulatória do seu estabelecimento com nosso serviço 
              especializado em gestão de licenças sanitárias e registros profissionais. Oferecemos 
              acompanhamento completo desde o protocolo inicial até o deferimento.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link 
                to="/contato" 
                className="bg-gold hover:bg-white text-navy px-8 py-4 text-center font-bold uppercase text-xs tracking-ultra transition-all shadow-2xl flex items-center justify-center group"
              >
                Solicitar Diagnóstico
                <ArrowRight className="ml-2.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PAGE 2: ESCOPO DE SERVIÇOS */}
      <section className="py-24 bg-white px-6 md:px-8 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-navy text-3xl md:text-5xl font-serif mb-6 italic">
              Escopo Completo de <span className="text-gold not-italic">Serviços Oferecidos</span>
            </h2>
            <div className="h-px w-20 bg-gold mx-auto mb-8"></div>
            <p className="text-gray-500 text-base md:text-lg max-w-4xl mx-auto font-light leading-relaxed">
              Nossa atuação abrange todas as principais demandas regulatórias de estabelecimentos de saúde no Brasil, com foco em eficiência administrativa e controle rigoroso de prazos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Vigilância Sanitária",
                desc: "Protocolo de processos e acompanhamento administrativo completo até deferimento ou atendimento de todas as exigências regulatórias.",
                img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Conselhos Profissionais",
                desc: "Cadastro e renovação junto ao CRM e COREN, garantindo regularidade dos profissionais responsáveis pelo seu estabelecimento.",
                img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Alvarás e Licenças",
                desc: "Gestão completa de Alvará de Funcionamento e Alvará Sanitário, incluindo cadastros iniciais e todas as renovações periódicas necessárias.",
                img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Laudo Técnico (LTA)",
                desc: "Protocolo de entrada e acompanhamento detalhado do processo de Laudo Técnico de Avaliação junto aos órgãos competentes.",
                img: "https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&q=80&w=800"
              }
            ].map((item, idx) => (
              <div key={idx} className="group bg-white border border-gray-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 rounded-sm overflow-hidden flex flex-col min-h-[420px]">
                <div className="aspect-[4/3] overflow-hidden bg-gray-200">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800';
                    }}
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-xl md:text-2xl font-serif text-navy mb-4 italic group-hover:text-gold transition-colors leading-tight">{item.title}</h3>
                  <p className="text-gray-500 text-base leading-relaxed font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAGE 3: GESTÃO INTELIGENTE */}
      <section className="py-24 bg-navy-dark px-6 md:px-8 border-y border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 md:gap-24">
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center gap-4 group">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-gold/30 flex items-center justify-center group-hover:bg-gold group-hover:text-navy transition-all duration-500">
                <Calendar className="w-10 h-10 md:w-12 md:h-12" />
              </div>
              <span className="text-xs uppercase tracking-widest text-center font-bold text-white/60 group-hover:text-gold">Controle de<br/>Prazos</span>
            </div>
            <div className="flex flex-col items-center gap-4 mt-8 md:mt-16 group">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-gold/30 flex items-center justify-center group-hover:bg-gold group-hover:text-navy transition-all duration-500">
                <Bell className="w-10 h-10 md:w-12 md:h-12" />
              </div>
              <span className="text-xs uppercase tracking-widest text-center font-bold text-white/60 group-hover:text-gold">Avisos<br/>Prévios</span>
            </div>
            <div className="flex flex-col items-center gap-4 group col-span-2 md:col-span-1">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-gold/30 flex items-center justify-center group-hover:bg-gold group-hover:text-navy transition-all duration-500">
                <Eye className="w-10 h-10 md:w-12 md:h-12" />
              </div>
              <span className="text-xs uppercase tracking-widest text-center font-bold text-white/60 group-hover:text-gold">Acompanhamento<br/>Contínuo</span>
            </div>
          </div>

          <div className="flex-1 bg-white p-10 md:p-16 text-navy shadow-2xl rounded-sm relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gold"></div>
            <h2 className="text-3xl font-serif italic mb-6 text-navy group-hover:text-gold transition-colors">Gestão Inteligente de Vencimentos</h2>
            <p className="text-gray-600 text-base md:text-lg mb-10 font-light border-b border-gray-100 pb-8 leading-relaxed">
              Mantenha seu estabelecimento sempre em conformidade com nossa gestão proativa de prazos e vencimentos.
            </p>
            <ul className="space-y-6">
              {[
                "Controle rigoroso de prazos de todas as licenças e contratos",
                "Avisos prévios automáticos antes de cada vencimento",
                "Acompanhamento contínuo e relatórios periódicos",
                "Planejamento antecipado de renovações"
              ].map((bullet, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                  <span className="font-medium text-navy/90 text-base leading-snug">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PAGE 4: RESPONSABILIDADES */}
      <section className="py-24 bg-gray-50 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="text-navy text-3xl md:text-4xl font-serif mb-6 italic">Serviços Não Inclusos e <span className="text-gold not-italic">Responsabilidades</span></h2>
            <p className="text-gray-500 font-light text-base md:text-lg leading-relaxed">Para total transparência, esclarecemos os limites de nossa atuação e as responsabilidades que permanecem com o contratante.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h3 className="text-xl font-serif text-navy italic mb-6 flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                Exclusões do Escopo
              </h3>
              
              <div className="space-y-4">
                {[
                  { title: "Custos Oficiais", text: "Taxas, emolumentos e valores cobrados por órgãos públicos e conselhos profissionais" },
                  { title: "Projetos Técnicos", text: "Elaboração, adequação ou aprovação de Projeto Arquitetônico, ART e RRT" },
                  { title: "Laudos e Vistorias", text: "Elaboração de laudos técnicos, pareceres, inspeções ou adequações estruturais exigidas" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white border border-gray-100 p-7 shadow-sm hover:border-gold/30 transition-all group">
                    <h4 className="font-bold text-navy text-xs uppercase tracking-ultra mb-3 group-hover:text-gold transition-colors">{item.title}</h4>
                    <p className="text-base text-gray-500 font-light leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="p-8 bg-navy text-white/70 border-l-4 border-gold italic flex items-start gap-5 shadow-lg">
                <FileX className="w-7 h-7 shrink-0 text-gold" />
                <p className="text-base font-light leading-relaxed">
                  Nossa atuação limita-se exclusivamente à gestão administrativa e regulatória, não abrangendo responsabilidade técnica ou legal que dependa de profissional legalmente habilitado.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-navy p-8 md:p-10 shadow-2xl rounded-sm border border-white/5">
                <h3 className="text-gold text-xl font-serif italic mb-8 border-b border-gold/20 pb-4">Nossas <br/>Responsabilidades</h3>
                <ul className="space-y-5">
                  {[
                    "Protocolo dos processos junto aos órgãos competentes",
                    "Acompanhamento administrativo completo",
                    "Informar exigências e pendências",
                    "Gestão de prazos e vencimentos"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 group">
                      <ArrowRight className="w-3.5 h-3.5 text-gold mt-1 group-hover:translate-x-1 transition-transform" />
                      <span className="text-xs text-white/70 uppercase tracking-ultra font-bold leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-8 md:p-10 shadow-xl border border-gray-100 rounded-sm">
                <h3 className="text-navy text-xl font-serif italic mb-8 border-b border-gray-100 pb-4">Responsabilidades do <br/>Contratante</h3>
                <ul className="space-y-5">
                  {[
                    "Fornecer documentos em tempo hábil",
                    "Pagar taxas e emolumentos oficiais",
                    "Contratar profissionais habilitados quando necessário",
                    "Atender exigências técnicas dos órgãos"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 group">
                      <ArrowRight className="w-3.5 h-3.5 text-gold mt-1 group-hover:translate-x-1 transition-transform" />
                      <span className="text-xs text-navy/70 uppercase tracking-ultra font-bold leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAGE 5: DOCUMENTAÇÃO */}
      <section className="py-24 bg-navy-dark px-6 md:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-20">
            <div className="lg:w-1/2">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-gold"></span>
                <span className="text-gold text-xs font-bold uppercase tracking-ultra">Início dos Trabalhos</span>
              </div>
              <h2 className="text-white text-3xl md:text-5xl font-serif mb-8 italic leading-tight">Documentação <span className="text-gold not-italic">Necessária</span></h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 font-light">
                Para execução eficiente dos serviços, o contratante deverá disponibilizar a seguinte documentação básica:
              </p>
              <div className="p-7 bg-white/5 border border-gold/20 flex items-start gap-6 backdrop-blur-sm">
                <ClipboardList className="w-8 h-8 text-gold shrink-0" />
                <p className="text-lg md:text-xl text-gray-200 italic font-medium leading-relaxed">
                  A documentação poderá sofrer ajustes conforme exigência do órgão competente. A não disponibilização completa poderá impactar prazos sem responsabilidade da proponente.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 relative group">
              <div className="absolute -inset-4 border border-gold/10 -z-0 group-hover:inset-0 transition-all duration-700"></div>
              <img 
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2000" 
                alt="Documentação Jurídica e Administrativa" 
                className="w-full h-[400px] object-cover shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-1000 rounded-sm"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80&w=2000';
                }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Documentos Empresariais", text: "CNPJ, Contrato Social e última alteração, IPTU do imóvel" },
              { num: "02", title: "Descrição Operacional", text: "Memorial descritivo das atividades e relação de ambientes e fluxos" },
              { num: "03", title: "Responsável Técnico", text: "Dados completos, incluindo CRM ou COREN do RT, quando aplicável" },
              { num: "04", title: "Contratos Vigentes", text: "Relação de contratos ativos com respectivas das de término" }
            ].map((item, idx) => (
              <div key={idx} className="border border-white/5 bg-navy/40 p-9 hover:bg-navy transition-all duration-500 group relative">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                <span className="text-3xl md:text-4xl font-serif italic text-gold/20 group-hover:text-gold transition-colors block mb-6">{item.num}</span>
                <h4 className="text-xl font-serif italic mb-4 text-white group-hover:text-gold transition-colors leading-tight">{item.title}</h4>
                <p className="text-gray-400 text-base font-light leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAGE 6: PRAZOS */}
      <section className="py-24 bg-white px-6 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="order-2 lg:order-1">
             <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-gold"></span>
                <span className="text-gold text-xs font-bold uppercase tracking-ultra">Informações Cruciais</span>
              </div>
            <h2 className="text-navy text-3xl md:text-5xl font-serif mb-10 italic leading-tight">Notas sobre <span className="text-gold not-italic">Prazos e Deferimentos</span></h2>
            <div className="space-y-8 text-gray-500 font-light text-base md:text-lg leading-relaxed text-justify">
              <p>
                É fundamental compreender que os prazos de análise, deferimento, renovação ou emissão de licenças dependem exclusivamente dos órgãos públicos competentes. Nossa atuação garante o acompanhamento diligente e proativo de cada processo, mas não podemos influenciar ou controlar o tempo de resposta das entidades reguladoras.
              </p>
              <p>
                A proponente não se responsabiliza por atrasos, suspensões ou exigências adicionais decorrentes de decisões administrativas. Nosso compromisso é manter você informado e agilizar o cumprimento de exigências, garantindo que toda documentação esteja correta e completa.
              </p>
            </div>
            
            <div className="mt-12 p-9 border border-gray-100 bg-gray-50 relative overflow-hidden group rounded-sm shadow-sm">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gold"></div>
              <p className="text-xl md:text-2xl font-serif italic text-navy leading-relaxed relative z-10">
                Conte com nossa experiência para navegar pelo complexo ambiente regulatório brasileiro com segurança e eficiência.
              </p>
              <ShieldCheck className="absolute -bottom-4 -right-4 w-24 h-24 text-gold/5 group-hover:text-gold/10 transition-colors" />
            </div>
            
            <div className="mt-12">
              <Link 
                to="/contato" 
                className="bg-navy hover:bg-gold text-white hover:text-navy px-10 py-5 font-bold uppercase text-xs tracking-ultra transition-all shadow-xl inline-flex items-center gap-4 group"
              >
                Solicitar Gestão Regulatória
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative group">
            <div className="absolute top-8 left-8 w-full h-full border-2 border-gold/10 -z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=2000" 
              alt="Cronograma" 
              className="w-full h-auto shadow-2xl relative z-10 grayscale group-hover:grayscale-0 transition-all duration-1000 rounded-sm"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthCompliance;
