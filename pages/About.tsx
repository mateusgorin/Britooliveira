
import React from 'react';
import { Target, Shield, Award, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* HEADER PADRONIZADO */}
      <section className="pt-40 md:pt-52 pb-20 bg-navy text-white text-center">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
           <span className="text-gold text-[10px] font-bold uppercase tracking-ultra mb-6 block">Nossa Instituição</span>
           <h1 className="text-3xl md:text-5xl font-serif italic mb-6">
             Sólida, técnica e <span className="text-gradient-gold not-italic">estratégica.</span>
           </h1>
           <p className="text-gray-400 font-light text-base max-w-xl mx-auto">
             Estruturando o presente para garantir o legado futuro do seu negócio.
           </p>
        </div>
      </section>

      {/* Seção Principal: História */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Imagem */}
            <div className="relative order-2 lg:order-1">
              <div className="relative z-10 aspect-square overflow-hidden bg-gray-100">
                 <img 
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2064&auto=format&fit=crop" 
                    alt="Reunião Estratégica" 
                    className="w-full h-full object-cover transition-all duration-700"
                 />
              </div>
              <div className="absolute top-6 left-6 w-full h-full border border-navy/10 -z-0"></div>
            </div>

            {/* Texto */}
            <div className="order-1 lg:order-2">
              <span className="text-gold text-[10px] font-bold uppercase tracking-ultra mb-4 block">Quem Somos</span>
              <h2 className="text-navy text-3xl md:text-4xl font-serif mb-8 leading-tight">
                Mais que consultoria. <br /> <span className="italic font-light text-navy/80">Inteligência Empresarial aplicada à realidade do seu negócio.</span>
              </h2>
              
              <div className="space-y-6 text-gray-600 font-light text-base leading-relaxed text-justify lg:text-left">
                <p>
                  A <strong className="text-navy font-medium">Brito Oliveira Assessoria Empresarial</strong> consolidou-se no mercado como referência em segurança jurídica, eficiência operacional e gestão estratégica de riscos. Atuamos a partir de uma visão integrada, na qual o jurídico deixa de ser um entrave e passa a ser uma ferramenta real de crescimento, proteção patrimonial e sustentabilidade empresarial.
                </p>
                <p>
                  Nosso corpo técnico é formado por especialistas que compreendem a linguagem dos negócios e a dinâmica organizacional. Não entregamos apenas pareceres: entregamos soluções práticas, que estruturam a governança corporativa, otimizam a carga tributária, reduzem passivos trabalhistas e fortalecem a tomada de decisão.
                </p>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                 {['Atuação preventiva e estratégica', 'Sigilo absoluto e ética profissional', 'Excelência técnica e jurídica', 'Visão de dono e foco em resultados'].map(item => (
                    <div key={item} className="flex items-center gap-3">
                        <CheckCircle2 className="text-gold w-4 h-4 stroke-[1.5]" />
                        <span className="text-navy text-xs font-semibold uppercase tracking-wider">{item}</span>
                    </div>
                 ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pilares - Layout Limpo */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
           <div className="text-center mb-16">
              <h2 className="text-3xl font-serif text-navy italic">Nossos Pilares</h2>
              <div className="h-px w-12 bg-gold mx-auto mt-4"></div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { Icon: Target, title: "Nossa Missão", desc: "Proporcionar clareza, segurança jurídica e sustentabilidade nas decisões empresariais, por meio de uma assessoria técnica de alto nível, personalizada e alinhada às exigências legais, à governança corporativa e à saúde organizacional." },
                { Icon: Shield, title: "Nossa Visão", desc: "Ser referência nacional em assessoria empresarial preventiva, reconhecida pela integridade, excellence técnica e capacidade de resolver complexidades jurídicas, organizacionais e humanas nas médias e grandes empresas." },
                { Icon: Award, title: "Nossos Valores", desc: "Ética e integridade absoluta • Atuação preventiva e estratégica • Segurança jurídica e organizacional • Responsabilidade social e humana • Compromisso com resultados sustentáveis" }
              ].map((pilar, index) => (
                <div key={index} className="bg-white p-10 border border-gray-100 hover:border-gold/30 transition-all duration-300">
                    <div className="mb-6 text-navy">
                        <pilar.Icon className="w-8 h-8 stroke-[1.5]" />
                    </div>
                    <h3 className="text-xl font-serif text-navy mb-4 italic">{pilar.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed font-light">
                        {pilar.desc}
                    </p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6">
           <h2 className="text-3xl md:text-4xl font-serif text-navy italic mb-10 leading-tight">
             "A segurança jurídica é a base da liberdade empresarial."
           </h2>
           <Link 
             to="/contato"
             className="inline-block border border-navy text-navy hover:bg-navy hover:text-white px-10 py-4 text-[10px] font-bold uppercase tracking-ultra transition-all duration-300"
           >
             Converse com a Diretoria
           </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
