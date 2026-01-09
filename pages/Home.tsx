import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Target, 
  Shield, 
  Award,
  ArrowUpRight,
  Crown, 
  Zap, 
  Globe, 
  ShieldCheck, 
  Handshake,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { SERVICES, DIFFERENTIALS } from '../constants';

const Home: React.FC = () => {
  const location = useLocation();
  const diffIcons = [<Handshake />, <Zap />, <Globe />, <ShieldCheck />, <Award />, <Crown />];

  // Estado para o Slider de Serviços
  const [currentService, setCurrentService] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  // Determina quantos itens mostrar baseado na largura da tela
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Garante que o índice atual seja válido ao redimensionar
  useEffect(() => {
    const maxIndex = Math.max(0, SERVICES.length - itemsPerPage);
    if (currentService > maxIndex) {
      setCurrentService(maxIndex);
    }
  }, [itemsPerPage, currentService]);

  // Rotação Automática do Carrossel
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      const maxIndex = Math.max(0, SERVICES.length - itemsPerPage);
      setCurrentService((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [itemsPerPage, isPaused]);

  const nextService = () => {
    const maxIndex = Math.max(0, SERVICES.length - itemsPerPage);
    setCurrentService((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevService = () => {
    const maxIndex = Math.max(0, SERVICES.length - itemsPerPage);
    setCurrentService((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

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

  return (
    <div className="flex flex-col">
      {/* Hero Section - MANTIDA EXACTAMENTE COMO ESTAVA (Building Background) */}
      <section className="relative h-screen min-h-[650px] flex items-start bg-navy-dark overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10s] hover:scale-110"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-navy/95 via-navy/80 to-navy/95"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full h-full flex flex-col pt-40 md:pt-56">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 mb-6 md:mb-8">
              <div className="h-px w-8 md:w-12 bg-gold/50"></div>
              <span className="text-gold text-[9px] md:text-[10px] font-bold uppercase tracking-ultra">Brito Oliveira Assessoria Empresarial</span>
            </div>
            <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-serif leading-tight md:leading-[1.1] mb-8 md:mb-10 italic">
              Assessoria Empresarial Estratégica com <span className="text-gradient-gold not-italic">Segurança e Credibilidade.</span>
            </h1>
            <p className="text-gray-300 text-base md:text-xl leading-relaxed mb-10 md:mb-12 max-w-2xl font-light">
              Suporte empresarial e jurídico para empresas que buscam crescimento sustentável, organização e segurança absoluta nas decisões.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
              <Link 
                to="/contato" 
                className="bg-gold hover:bg-white text-navy px-8 md:px-10 py-4 md:py-5 text-center font-semibold uppercase text-[10px] md:text-xs tracking-ultra transition-all shadow-2xl flex items-center justify-center group"
              >
                Fale com um Especialista
                <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/#servicos" 
                className="border border-white/20 hover:border-gold hover:text-gold text-white px-8 md:px-10 py-4 md:py-5 text-center font-semibold uppercase text-[10px] md:text-xs tracking-ultra transition-all backdrop-blur-sm"
              >
                Nossos Serviços
              </Link>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 md:gap-4 animate-bounce opacity-60 z-20">
             <span className="text-white text-[9px] uppercase tracking-ultra font-medium inline-block">
               Descubra
             </span>
             <div className="w-px h-8 md:h-12 bg-white/50"></div>
          </div>
        </div>
      </section>

      {/* Seção Quem Somos (Refinada: Menos grito visual, mais elegância) */}
      <section id="quem-somos" className="py-24 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Imagem: Design mais contido e reduzido */}
            <div className="relative order-2 lg:order-1 max-w-md mx-auto">
              <div className="relative z-10 aspect-[4/5] overflow-hidden bg-gray-100">
                 <img 
                    src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop" 
                    alt="Executivo em Terno" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                 />
              </div>
              {/* Moldura simples ao invés de sombra pesada */}
              <div className="absolute top-6 left-6 w-full h-full border border-navy/10 -z-0"></div>
              
              <div className="absolute bottom-0 left-0 bg-white p-6 border-t border-r border-gray-100 max-w-xs z-20">
                  <p className="text-navy font-serif italic text-xl mb-1">Excelência</p>
                  <p className="text-gray-400 text-[9px] font-bold uppercase tracking-ultra">Desde a fundação</p>
              </div>
            </div>

            {/* Texto: Tipografia ajustada */}
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-6 h-px bg-gold"></span>
                <span className="text-gold text-[10px] font-bold uppercase tracking-ultra">Quem Somos</span>
              </div>
              
              <h2 className="text-navy text-3xl md:text-4xl font-serif mb-8 leading-tight">
                Mais que consultoria, <br /> 
                <span className="italic font-light text-navy/80">Inteligência Empresarial.</span>
              </h2>
              
              <div className="space-y-6 text-gray-600 font-light text-base leading-relaxed text-justify lg:text-left">
                <p>
                  A <strong className="text-navy font-medium">Brito Oliveira Assessoria Empresarial</strong> estabeleceu-se no mercado como uma referência em segurança jurídica e eficiência operacional. Nascemos da necessidade de oferecer ao empresário brasileiro uma visão integrada, onde o jurídico não é um entrave, mas uma alavanca de crescimento.
                </p>
                <p>
                  Nosso corpo técnico é formado por especialistas que entendem a linguagem dos negócios. Não entregamos apenas pareceres; entregamos soluções que protegem o patrimônio, otimizam a carga tributária e organizam a governança corporativa.
                </p>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                 {['Foco Preventivo', 'Sigilo Absoluto', 'Técnica Jurídica', 'Visão de Dono'].map((item) => (
                    <div key={item} className="flex items-center gap-3 group">
                        <CheckCircle2 className="text-gold w-4 h-4 shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="text-navy text-xs font-semibold uppercase tracking-wider">{item}</span>
                    </div>
                 ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Seção Pilares (Refinada: Cards limpos, bordas sutis) */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
           <div className="flex flex-col md:flex-row justify-between items-end mb-16">
              <div className="max-w-xl">
                <h2 className="text-3xl font-serif text-navy italic mb-4">Nossos Pilares</h2>
                <div className="h-px w-12 bg-gold"></div>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                  { icon: Target, title: "Nossa Missão", text: "Proporcionar clareza, segurança e sustentabilidade nas decisões empresariais através de uma assessoria técnica de alto nível e estritamente personalizada." },
                  { icon: Shield, title: "Nossa Visão", text: "Ser a referência nacional em assessoria preventiva para médias e grandes empresas, reconhecida pela integridade e pela capacidade de resolver complexidades." },
                  { icon: Award, title: "Nossos Valores", text: "Ética inegociável, excelência técnica, transparência nas relações, confidencialidade absoluta e compromisso real com o resultado do cliente." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 md:p-10 border border-gray-100 hover:border-gold/30 transition-all duration-300 group hover:shadow-lg hover:shadow-gray-200/50">
                   <item.icon className="w-8 h-8 text-navy mb-6 group-hover:text-gold transition-colors stroke-[1.5]" />
                   <h3 className="text-xl font-serif text-navy mb-4 italic">{item.title}</h3>
                   <p className="text-gray-500 text-sm leading-relaxed font-light">
                     {item.text}
                   </p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* SEÇÃO SERVIÇOS (Refinada: Card menor, tipografia controlada) */}
      <section id="servicos" className="py-24 bg-white scroll-mt-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <span className="text-gold text-[10px] font-bold uppercase tracking-ultra mb-4 block">Nossa Expertise</span>
            <h2 className="text-3xl md:text-4xl font-serif text-navy mb-6">Frentes de Atuação</h2>
            <p className="text-gray-500 max-w-xl mx-auto font-light text-sm md:text-base">
              Especialidades desenhadas para a segurança do seu legado empresarial, com foco estratégico e preventivo.
            </p>
          </div>
          
          {/* Slider Container */}
          <div 
            className="relative group"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="overflow-hidden -mx-4 pb-10"> {/* pb para sombra não cortar */}
              <div 
                className="flex transition-transform duration-700 ease-out" 
                style={{ transform: `translateX(-${currentService * (100 / itemsPerPage)}%)` }}
              >
                {SERVICES.map((service) => (
                  <div 
                    key={service.id} 
                    className="flex-shrink-0 px-4"
                    style={{ width: `${100 / itemsPerPage}%` }}
                  >
                    <div className="bg-white border border-gray-100 p-8 h-full transition-all duration-300 hover:shadow-lg hover:border-navy/10 flex flex-col justify-between group/card min-h-[320px]">
                      <div>
                        <div className="text-navy/80 mb-6 group-hover/card:text-gold transition-colors">
                          {/* Force icon size consistency */}
                          <div className="[&>svg]:w-8 [&>svg]:h-8 [&>svg]:stroke-[1.5]">
                            {service.icon}
                          </div>
                        </div>
                        {/* AUMENTO DA FONTE DO TÍTULO (text-lg -> text-xl md:text-2xl) */}
                        <h3 className="text-xl md:text-2xl font-serif text-navy mb-4 leading-snug font-medium">
                          {service.title}
                        </h3>
                        {/* AUMENTO DA FONTE DA DESCRIÇÃO (text-sm -> text-base) */}
                        <p className="text-gray-500 leading-relaxed font-light text-base">
                          {service.description}
                        </p>
                      </div>
                      <div className="pt-6 mt-4 border-t border-gray-50">
                        {/* AUMENTO DA FONTE DO LINK (text-[10px] -> text-xs) */}
                        <Link to="/contato" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-ultra text-navy/60 hover:text-navy transition-colors">
                          Saiba Mais <ArrowUpRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Controles de Navegação Minimalistas */}
            <div className="flex justify-center gap-3">
              <button 
                onClick={prevService}
                className="w-10 h-10 rounded-full border border-gray-200 text-gray-400 hover:border-navy hover:text-navy hover:bg-white flex items-center justify-center transition-all"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button 
                onClick={nextService}
                className="w-10 h-10 rounded-full border border-gray-200 text-gray-400 hover:border-navy hover:text-navy hover:bg-white flex items-center justify-center transition-all"
                aria-label="Próximo"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Banner de Foco */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/5 to-transparent opacity-50"></div>
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center relative z-10">
           <h2 className="text-2xl md:text-3xl font-serif text-white/90 italic mb-8 font-light leading-relaxed">
            "O foco da nossa comunicação é prevenção, estratégia e segurança. Construímos estruturas sólidas para que sua empresa não dependa apenas da sorte."
           </h2>
           <div className="inline-block border-b border-gold/30 pb-2">
             <p className="text-gold text-[10px] font-bold uppercase tracking-ultra">Brito Oliveira Assessoria</p>
           </div>
        </div>
      </section>

      {/* SEÇÃO DIFERENCIAIS (ATUALIZADA) */}
      <section id="diferenciais" className="py-24 bg-gray-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row gap-12 mb-16 border-b border-gray-200 pb-12">
             <div className="md:w-1/3">
                <span className="text-gold text-[10px] font-bold uppercase tracking-ultra mb-4 block">Por que nós?</span>
                <h2 className="text-3xl md:text-4xl font-serif text-navy leading-tight">
                  Diferenciais <br /> <span className="italic font-light">Estratégicos.</span>
                </h2>
             </div>
             <div className="md:w-2/3 flex items-center">
                <p className="text-gray-500 font-light leading-relaxed text-lg">
                  O que nos posiciona como a escolha de elite para empresas que buscam segurança jurídica e organização é a nossa metodologia proprietária, que integra prevenção de riscos, eficiência operacional e visão estratégica.
                </p>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DIFFERENTIALS.map((diff, index) => (
              <div 
                key={index} 
                className="group relative bg-white p-8 md:p-10 border border-gray-100 hover:border-gold/40 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 rounded-sm overflow-hidden"
              >
                {/* Detalhe Dourado Superior Animado */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-navy via-gold to-navy transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>

                {/* Ícone com destaque */}
                <div className="mb-8 relative">
                   <div className="w-14 h-14 rounded-full bg-navy/5 flex items-center justify-center text-navy group-hover:bg-navy group-hover:text-gold transition-all duration-500">
                     <div className="[&>svg]:w-7 [&>svg]:h-7 [&>svg]:stroke-[1.5]">
                        {diffIcons[index % diffIcons.length]}
                      </div>
                   </div>
                </div>

                <div>
                  <h3 className="text-xl font-serif text-navy mb-4 group-hover:text-gold transition-colors duration-300">
                    {diff.title}
                  </h3>
                  <p className="text-gray-500 text-base leading-relaxed font-light">
                    {diff.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Texto Atualizado e Promessa Removida */}
      <section className="py-32 bg-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10">
          <h2 className="text-navy text-3xl md:text-5xl font-serif mb-10 font-light leading-tight">
            "Não apenas resolvemos problemas; <br /> <span className="italic">trabalhamos para evitar que eles aconteçam."</span>
          </h2>
          <Link 
            to="/contato" 
            className="inline-block border border-navy text-navy hover:bg-navy hover:text-white px-10 py-4 font-semibold uppercase text-[10px] tracking-ultra transition-all duration-300"
          >
            Agendar Reunião com Especialista
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;