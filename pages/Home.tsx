
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SERVICES, DIFFERENTIALS } from '../constants';

const Home: React.FC = () => {
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

        {/* 
           Correção Logo: Removido 'justify-center'.
           Adicionado 'pt-40 md:pt-56' para garantir que o texto comece bem abaixo da Navbar/Logo.
        */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full h-full flex flex-col pt-40 md:pt-56">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 mb-6 md:mb-8">
              <div className="h-px w-8 md:w-12 bg-gold/50"></div>
              {/* Este texto agora tem espaço garantido pelo padding-top do container pai */}
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
                to="/servicos" 
                className="border border-white/20 hover:border-gold hover:text-gold text-white px-8 md:px-10 py-4 md:py-5 text-center font-semibold uppercase text-[10px] md:text-xs tracking-ultra transition-all backdrop-blur-sm"
              >
                Nossos Serviços
              </Link>
            </div>
          </div>

          {/* 
             Correção Descubra:
             Mudado de posição fixa esquerda para CENTRALIZADO (left-1/2 -translate-x-1/2).
             Isso evita que ele fique embaixo dos botões "Nossos Serviços".
          */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 md:gap-4 animate-bounce opacity-60 z-20">
             <span className="text-white text-[9px] uppercase tracking-ultra font-medium inline-block">
               Descubra
             </span>
             <div className="w-px h-8 md:h-12 bg-white/50"></div>
          </div>
        </div>
      </section>

      {/* Quem Somos - Resumo */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] bg-navy relative overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop" 
                  alt="Executivo" 
                  className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700 hover:grayscale-0 hover:opacity-100"
                />
            </div>
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 p-6 md:p-10 bg-white shadow-2xl border border-gray-100 hidden sm:block">
                <div className="text-gold text-2xl md:text-4xl font-serif italic mb-1 md:mb-2">Compromisso</div>
                <div className="text-navy text-[9px] md:text-[10px] font-bold uppercase tracking-ultra">Ética & Profissionalismo</div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-gold text-[10px] font-bold uppercase tracking-ultra mb-4 md:mb-6 block">Quem Somos</span>
            <h2 className="text-navy text-4xl md:text-6xl font-serif mb-6 md:mb-10 leading-tight italic">
              Soluções inteligentes <br className="hidden md:block" /> <span className="not-italic">para sua empresa.</span>
            </h2>
            <div className="space-y-4 md:space-y-6 text-gray-600 text-base md:text-lg leading-relaxed font-light mb-8 md:mb-12">
              <p>
                A BRITO OLIVEIRA ASSESSORIA EMPRESARIAL é especializada em assessoria empresarial, jurídica e estratégica, oferecendo soluções inteligentes para empresas que valorizam planejamento, segurança e profissionalismo.
              </p>
              <p>
                Atuamos de forma personalizada, analisando cada realidade empresarial com responsabilidade técnica e visão estratégica.
              </p>
            </div>
            <Link to="/sobre" className="inline-flex items-center gap-4 text-navy font-bold uppercase text-[10px] tracking-ultra group">
              Conheça nossa trajetória
              <div className="w-8 h-px bg-gold transition-all group-hover:w-12"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* Serviços (Destaque Visual) */}
      <section className="py-20 md:py-32 bg-navy text-white relative">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16 md:mb-24">
            <span className="text-gold text-[10px] font-bold uppercase tracking-ultra mb-4 md:mb-6 block">Nossa Expertise</span>
            <h2 className="text-4xl md:text-5xl font-serif italic mb-6">Frentes de Atuação</h2>
            <div className="h-px w-20 md:w-24 bg-gold/30 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {SERVICES.slice(0, 6).map((service) => (
              <div key={service.id} className="bg-navy p-8 md:p-12 group hover:bg-navy-light transition-all duration-500">
                <div className="text-gold mb-6 md:mb-10 group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-serif mb-4 md:mb-6 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-base leading-relaxed font-light mb-6 md:mb-10">
                  {service.description}
                </p>
                <Link to="/servicos" className="text-[10px] font-bold uppercase tracking-ultra text-gold flex items-center gap-2 lg:opacity-0 group-hover:opacity-100 transition-all">
                  Saiba Mais <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais (Resumo) */}
      <section className="py-20 md:py-32 bg-corporate-gray">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col lg:flex-row gap-12 md:gap-16 items-start">
             <div className="lg:w-1/3">
                <span className="text-gold text-[10px] font-bold uppercase tracking-ultra mb-4 md:mb-6 block">Por que nós?</span>
                <h2 className="text-4xl md:text-5xl font-serif italic mb-6 md:mb-8">Nossos <br className="hidden md:block" /> Diferenciais.</h2>
                <p className="text-gray-500 font-light leading-relaxed">
                  Mais do que assessoria, entregamos um alicerce sólido para o futuro do seu negócio. O que nos posiciona como a escolha de elite para empresas que buscam segurança jurídica e organização é a nossa metodologia proprietária, que integra prevenção de riscos, eficiência operacional e visão estratégica, transformando desafios complexos em alavancas de crescimento sustentável.
                </p>
             </div>
             <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 w-full">
                {DIFFERENTIALS.slice(0, 4).map((item, i) => (
                  <div key={i} className="bg-white p-8 md:p-10 shadow-sm flex flex-col gap-4 border-l-2 border-transparent hover:border-gold transition-all group">
                     <CheckCircle2 className="text-gold w-5 h-5 md:w-6 md:h-6" />
                     <h4 className="text-navy font-bold uppercase tracking-wider text-sm md:text-base">{item.title}</h4>
                     <p className="text-gray-500 text-base font-light leading-relaxed">{item.description}</p>
                  </div>
                ))}
             </div>
          </div>
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
