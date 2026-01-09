
import React from 'react';
import { Target, Shield, Award, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* HEADER PADRONIZADO - Sem gradientes extras, estrutura idêntica às outras páginas */}
      <section className="pt-40 md:pt-56 pb-16 md:pb-24 bg-navy text-white text-center">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
           <span className="text-gold text-[10px] font-bold uppercase tracking-ultra mb-4 md:mb-6 block">Nossa Instituição</span>
           <h1 className="text-4xl md:text-7xl font-serif italic mb-6 md:mb-8">
             Sólida, técnica e <span className="text-gradient-gold not-italic">estratégica.</span>
           </h1>
           <p className="text-gray-400 font-light text-base md:text-lg max-w-2xl mx-auto">
             Estruturando o presente para garantir o legado futuro do seu negócio.
           </p>
        </div>
      </section>

      {/* Seção Principal: História e Abordagem */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
            
            {/* Imagem */}
            <div className="relative order-2 lg:order-1">
              <div className="relative z-10 aspect-[4/5] md:aspect-square overflow-hidden shadow-2xl bg-navy">
                 <img 
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2064&auto=format&fit=crop" 
                    alt="Reunião Estratégica" 
                    className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                 />
              </div>
              <div className="absolute -top-4 -left-4 w-full h-full border border-gold/30 -z-0 hidden md:block"></div>
              <div className="absolute -bottom-6 -right-6 bg-white p-8 shadow-xl border border-gray-100 hidden md:block z-20">
                  <p className="text-navy font-serif italic text-2xl">Excelência</p>
                  <p className="text-gold text-[9px] font-bold uppercase tracking-ultra">Desde a fundação</p>
              </div>
            </div>

            {/* Texto */}
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

      {/* Missão, Visão, Valores */}
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

      {/* CTA Final */}
      <section className="py-24 bg-navy text-center">
        <div className="max-w-4xl mx-auto px-6">
           <h2 className="text-3xl md:text-4xl font-serif text-white italic mb-8">
             "A segurança jurídica é a base da liberdade empresarial."
           </h2>
           <Link 
             to="/contato"
             className="inline-block border border-gold text-gold hover:bg-gold hover:text-navy px-10 py-4 text-[10px] font-bold uppercase tracking-ultra transition-all duration-300"
           >
             Converse com a Diretoria
           </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
