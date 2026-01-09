
import React from 'react';
import { Target, Shield, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header Padronizado - Classes idênticas às da página de Serviços para garantir mesma altura */}
      <section className="pt-40 md:pt-56 pb-16 md:pb-24 bg-navy text-white text-center">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
           <span className="text-gold text-[10px] font-bold uppercase tracking-ultra mb-4 md:mb-6 block">Nossa Instituição</span>
           <h1 className="text-4xl md:text-7xl font-serif italic mb-6 md:mb-8">
             Sólida, técnica e <span className="text-gradient-gold not-italic">estratégica.</span>
           </h1>
           <p className="text-gray-400 font-light text-base md:text-lg">
             Estruturando o presente para garantir o futuro do seu negócio.
           </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
          <div className="lg:col-span-4">
             <div className="lg:sticky lg:top-40">
                <h2 className="text-navy text-3xl font-serif mb-6 md:mb-8 italic">Sobre a Empresa</h2>
                <div className="w-10 md:w-12 h-px bg-gold mb-6 md:mb-8"></div>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed uppercase tracking-wider">
                  "Onde a prevenção encontra o planejamento estratégico."
                </p>
             </div>
          </div>
          <div className="lg:col-span-8 space-y-8 md:space-y-12">
            <p className="text-navy text-xl md:text-2xl font-light leading-relaxed">
              A BRITO OLIVEIRA ASSESSORIA EMPRESARIAL nasceu com o propósito de oferecer uma assessoria empresarial séria, técnica e estratégica, voltada para empresas que buscam estabilidade, crescimento e segurança jurídica.
            </p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed font-light">
              Nosso trabalho é baseado na prevenção, no planejamento e na análise criteriosa de cada cenário empresarial, sempre com foco em soluções práticas, eficientes e seguras. Acreditamos que o sucesso duradouro de uma empresa depende de uma base sólida.
            </p>
            <div className="aspect-video bg-gray-100 overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" 
                  alt="Reunião Estratégica Executiva" 
                  className="w-full h-full object-cover grayscale opacity-80"
                />
            </div>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed font-light">
              Atuamos de forma personalizada, analisando cada realidade empresarial com responsabilidade técnica e visão estratégica. Não somos apenas consultores; somos parceiros do seu board na construção de uma trajetória segura.
            </p>
          </div>
        </div>
      </section>

      {/* Missão, Visão, Valores */}
      <section className="py-20 md:py-32 bg-corporate-gray">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="p-8 md:p-12 bg-white shadow-sm border-t-2 border-transparent hover:border-gold transition-all">
            <Target className="w-8 h-8 text-gold mb-6 md:mb-8" />
            <h3 className="text-2xl font-serif text-navy mb-4 md:mb-6 italic">Missão</h3>
            <p className="text-gray-500 font-light text-sm leading-relaxed">Proporcionar clareza e segurança nas decisões empresariais através de assessoria estratégica de alto nível.</p>
          </div>
          <div className="p-8 md:p-12 bg-white shadow-sm border-t-2 border-transparent hover:border-gold transition-all">
            <Shield className="w-8 h-8 text-gold mb-6 md:mb-8" />
            <h3 className="text-2xl font-serif text-navy mb-4 md:mb-6 italic">Visão</h3>
            <p className="text-gray-500 font-light text-sm leading-relaxed">Sermos reconhecidos como o escritório referência em assessoria preventiva e planejamento estratégico no Brasil.</p>
          </div>
          <div className="p-8 md:p-12 bg-white shadow-sm border-t-2 border-transparent hover:border-gold transition-all">
            <Award className="text-gold w-8 h-8 mb-6 md:mb-8" />
            <h3 className="text-2xl font-serif text-navy mb-4 md:mb-6 italic">Valores</h3>
            <p className="text-gray-500 font-light text-sm leading-relaxed">Credibilidade, ética inegociável, transparência técnica e foco absoluto na segurança do patrimônio do cliente.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
