
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

  const nextService = () => {
    const maxIndex = Math.max(0, SERVICES.length - itemsPerPage);
    setCurrentService((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevService = () => {
    const maxIndex = Math.max(0, SERVICES.length - itemsPerPage);
    setCurrentService((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    // Lógica para detectar se a URL tem um hash (ex: /#quem-somos) e rolar até a seção
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          const offset = 100; // Compensação para a Navbar fixa
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 100); // Pequeno delay para garantir renderização
      }
    }
  }, [location]);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
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
                className="bg-gold hover:bg-gold-bright text-navy px-8 md:px-10 py-4 md:py-5 text-center font-semibold uppercase text-[10px] md:text-xs tracking-ultra transition-all shadow-2xl flex items-center justify-center group"
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

      {/* Seção Quem Somos (ID "quem-somos") */}
      <section id="quem-somos" className="py-20 md:py-32 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
            
            {/* Imagem com Badge */}
            <div className="relative order-2 lg:order-1">
              <div className="relative z-10 aspect-[4/5] md:aspect-square overflow-hidden shadow-2xl bg-navy">
                 <img 
                    src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop" 
                    alt="Executivo em Terno" 
                    className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                 />
              </div>
              <div className="absolute -top-4 -left-4 w-full h-full border border-gold/30 -z-0 hidden md:block"></div>
              <div className="absolute -bottom-6 -right-6 bg-white p-8 shadow-xl border border-gray-100 hidden md:block z-20">
                  <p className="text-navy font-serif italic text-2xl">Excelência</p>
                  <p className="text-gold text-[9px] font-bold uppercase tracking-ultra">Desde a fundação</p>
              </div>
            </div>

            {/* Texto Completo */}
            <div className="order-1 lg:order-2">
              <span className="text-gold text-[10px] font-bold uppercase tracking-ultra mb-4 block">Quem Somos</span>
              <h2 className="text-navy text-3xl md:text-5xl font-serif mb-8 leading-tight italic">
                Mais que consultoria, <br /> <span className="not-italic">Inteligência Empresarial.</span>
              </h2>
              
              <div className="space-y-6 text-gray-600 font-light text-base md:text-lg leading-relaxed">
                <p>
                  A <strong className="text-navy font-medium">Brito Oliveira Assessoria Empresarial</strong> estabeleceu-se no mercado como uma referência em segurança jurídica e eficiência operacional. Nascemos da necessidade de oferecer ao empresário brasileiro uma visão integrada, onde o jurídico não é um entrave, mas uma alavanca de crescimento.
                </p>
                <p>
                  Nosso corpo técnico é formado por especialistas que entendem a linguagem dos negócios. Não entregamos apenas pareceres; entregamos soluções que protegem o patrimônio, otimizam a carga tributária e organizam a governança corporativa.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                 <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-gold w-5 h-5" />
                    <span className="text-navy text-sm font-medium uppercase tracking-wider">Foco Preventivo</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-gold w-5 h-5" />
                    <span className="text-navy text-sm font-medium uppercase tracking-wider">Sigilo Absoluto</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-gold w-5 h-5" />
                    <span className="text-navy text-sm font-medium uppercase tracking-wider">Técnica Jurídica</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-gold w-5 h-5" />
                    <span className="text-navy text-sm font-medium uppercase tracking-wider">Visão de Dono</span>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Seção Pilares */}
      <section className="py-20 md:py-32 bg-corporate-gray relative">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
           <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif text-navy italic">Nossos Pilares</h2>
              <div className="h-px w-16 bg-gold mx-auto mt-6"></div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-10 shadow-sm hover:shadow-2xl transition-all duration-500 group border-t-4 border-transparent hover:border-gold">
                 <div className="w-14 h-14 bg-navy/5 rounded-full flex items-center justify-center mb-8 group-hover:bg-navy transition-colors">
                    <Target className="w-6 h-6 text-navy group-hover:text-gold transition-colors" />
                 </div>
                 <h3 className="text-xl font-serif text-navy mb-4 italic">Nossa Missão</h3>
                 <p className="text-gray-500 text-sm leading-relaxed font-light">
                   Proporcionar clareza, segurança e sustentabilidade nas decisões empresariais através de uma assessoria técnica de alto nível e estritamente personalizada.
                 </p>
              </div>

              <div className="bg-white p-10 shadow-sm hover:shadow-2xl transition-all duration-500 group border-t-4 border-transparent hover:border-gold">
                 <div className="w-14 h-14 bg-navy/5 rounded-full flex items-center justify-center mb-8 group-hover:bg-navy transition-colors">
                    <Shield className="w-6 h-6 text-navy group-hover:text-gold transition-colors" />
                 </div>
                 <h3 className="text-xl font-serif text-navy mb-4 italic">Nossa Visão</h3>
                 <p className="text-gray-500 text-sm leading-relaxed font-light">
                   Ser a referência nacional em assessoria preventiva para médias e grandes empresas, reconhecida pela integridade e pela capacidade de resolver complexidades.
                 </p>
              </div>

              <div className="bg-white p-10 shadow-sm hover:shadow-2xl transition-all duration-500 group border-t-4 border-transparent hover:border-gold">
                 <div className="w-14 h-14 bg-navy/5 rounded-full flex items-center justify-center mb-8 group-hover:bg-navy transition-colors">
                    <Award className="w-6 h-6 text-navy group-hover:text-gold transition-colors" />
                 </div>
                 <h3 className="text-xl font-serif text-navy mb-4 italic">Nossos Valores</h3>
                 <p className="text-gray-500 text-sm leading-relaxed font-light">
                   Ética inegociável, excelência técnica, transparência nas relações, confidencialidade absoluta e compromisso real com o resultado do cliente.
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* SEÇÃO SERVIÇOS - CARROSSEL (ID "servicos") */}
      <section id="servicos" className="py-20 md:py-32 bg-white scroll-mt-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16 md:mb-20">
            <span className="text-gold text-[10px] font-bold uppercase tracking-ultra mb-4 md:mb-6 block">Nossa Expertise</span>
            <h2 className="text-4xl md:text-5xl font-serif text-navy italic mb-6">Frentes de Atuação</h2>
            <div className="h-px w-20 md:w-24 bg-gold mx-auto"></div>
            <p className="text-gray-500 mt-6 max-w-2xl mx-auto font-light">
              Especialidades desenhadas para a segurança do seu legado empresarial, com foco estratégico e preventivo.
            </p>
          </div>
          
          {/* Slider Container */}
          <div className="relative group">
            <div className="overflow-hidden -mx-4">
              <div 
                className="flex transition-transform duration-700 ease-in-out" 
                style={{ transform: `translateX(-${currentService * (100 / itemsPerPage)}%)` }}
              >
                {SERVICES.map((service) => (
                  <div 
                    key={service.id} 
                    className="flex-shrink-0 px-4"
                    style={{ width: `${100 / itemsPerPage}%` }}
                  >
                    <div className="bg-corporate-gray/50 hover:bg-corporate-gray border border-gray-100 hover:border-gold/30 p-10 h-full transition-all duration-500 flex flex-col justify-between group/card">
                      <div>
                        <div className="text-gold mb-8 transition-transform duration-500 group-hover/card:translate-x-2">
                          {service.icon}
                        </div>
                        <h3 className="text-2xl font-serif text-navy mb-4 group-hover/card:text-gold transition-colors leading-tight">
                          {service.title}
                        </h3>
                        <p className="text-gray-500 leading-relaxed mb-8 font-light text-sm md:text-base">
                          {service.description}
                        </p>
                      </div>
                      <Link to="/contato" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-ultra text-navy hover:text-gold transition-colors mt-auto">
                        Saiba Mais <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Controles de Navegação */}
            <div className="flex justify-center mt-12 gap-4">
              <button 
                onClick={prevService}
                className="w-12 h-12 rounded-full border border-navy/10 text-navy hover:bg-navy hover:text-gold flex items-center justify-center transition-all duration-300 shadow-sm"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={nextService}
                className="w-12 h-12 rounded-full border border-navy/10 text-navy hover:bg-navy hover:text-gold flex items-center justify-center transition-all duration-300 shadow-sm"
                aria-label="Próximo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Banner de Foco (Serviços) */}
      <section className="py-20 md:py-32 bg-corporate-gray">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
           <h2 className="text-3xl font-serif text-navy italic mb-8">
            "O foco da nossa comunicação é prevenção, estratégia e segurança. Construímos estruturas sólidas para que sua empresa não dependa apenas da sorte."
           </h2>
           <p className="text-gold text-[10px] font-bold uppercase tracking-ultra">Brito Oliveira Assessoria</p>
        </div>
      </section>

      {/* SEÇÃO DIFERENCIAIS COMPLETA (ID "diferenciais") */}
      <section id="diferenciais" className="py-20 md:py-32 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col lg:flex-row gap-12 md:gap-16 items-start mb-20">
             <div className="lg:w-1/3">
                <span className="text-gold text-[10px] font-bold uppercase tracking-ultra mb-4 md:mb-6 block">Por que nós?</span>
                <h2 className="text-4xl md:text-5xl font-serif text-navy italic mb-6 md:mb-8">Diferenciais <br className="hidden md:block" /> Estratégicos.</h2>
             </div>
             <div className="lg:w-2/3">
                <p className="text-gray-500 font-light leading-relaxed text-lg">
                  O que nos posiciona como a escolha de elite para empresas que buscam segurança jurídica e organização é a nossa metodologia proprietária, que integra prevenção de riscos, eficiência operacional e visão estratégica.
                </p>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
            {DIFFERENTIALS.map((diff, index) => (
              <div key={index} className="group flex flex-col gap-8 p-10 bg-corporate-gray hover:bg-navy transition-all duration-500 hover:shadow-2xl border-t-2 border-transparent hover:border-gold">
                <div className="text-gold w-10 h-10 group-hover:scale-110 transition-transform">
                  {diffIcons[index % diffIcons.length]}
                </div>
                <div>
                  <h3 className="text-2xl font-serif text-navy group-hover:text-white mb-6 italic transition-colors">{diff.title}</h3>
                  <p className="text-gray-500 group-hover:text-gray-300 leading-relaxed font-light text-base transition-colors">
                    {diff.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner de Autoridade (Diferenciais) */}
      <section className="py-20 md:py-32 bg-navy text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 md:px-8 text-center">
           <span className="text-gold text-[10px] font-bold uppercase tracking-ultra mb-8 block">Nossa Promessa</span>
           <h2 className="text-4xl md:text-5xl font-serif italic mb-10 leading-tight">
            "Não apenas resolvemos problemas; <br /> trabalhamos para evitar que eles aconteçam."
           </h2>
           <div className="h-px w-24 bg-gold/30 mx-auto"></div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 md:py-40 bg-white text-center relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
            <span className="text-[120px] md:text-[250px] font-serif font-bold select-none italic">BRITO</span>
        </div>
        <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10">
          <h2 className="text-navy text-4xl md:text-7xl font-serif mb-8 md:mb-12 italic">
            Transforme a segurança da <br /> sua empresa hoje.
          </h2>
          <Link 
            to="/contato" 
            className="bg-navy hover:bg-gold text-white hover:text-navy px-8 md:px-12 py-4 md:py-5 font-semibold uppercase text-[10px] md:text-xs tracking-ultra transition-all shadow-xl inline-block"
          >
            Agendar Reunião com Especialista
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
