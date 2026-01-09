
import React from 'react';
import { DIFFERENTIALS } from '../constants';
import { Crown, Zap, Globe, ShieldCheck, Award, Handshake, CheckCircle2 } from 'lucide-react';

const Differentials: React.FC = () => {
  const icons = [<Handshake />, <Zap />, <Globe />, <ShieldCheck />, <Award />, <Crown />];

  return (
    <div className="bg-white">
      <section className="pt-40 md:pt-56 pb-16 md:pb-24 bg-navy text-white text-center">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <span className="text-gold text-[10px] font-bold uppercase tracking-ultra mb-4 md:mb-6 block">Por que escolher a Brito Oliveira?</span>
          <h1 className="text-4xl md:text-7xl font-serif italic mb-6 md:mb-8">Diferenciais <span className="text-gradient-gold not-italic">Estratégicos</span></h1>
          <p className="text-gray-400 font-light text-base md:text-lg">Valores que transformam a gestão da sua empresa.</p>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {DIFFERENTIALS.map((diff, index) => (
              <div key={index} className="group flex flex-col gap-8 p-12 bg-corporate-gray hover:bg-white transition-all duration-500 hover:shadow-2xl border-b-2 border-transparent hover:border-gold">
                <div className="text-gold w-10 h-10 group-hover:scale-110 transition-transform">
                  {icons[index % icons.length]}
                </div>
                <div>
                  <h3 className="text-2xl font-serif text-navy mb-6 italic">{diff.title}</h3>
                  <p className="text-gray-500 leading-relaxed font-light text-base">
                    {diff.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner de Autoridade */}
      <section className="py-32 bg-navy text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-8 text-center">
           <span className="text-gold text-[10px] font-bold uppercase tracking-ultra mb-8 block">Nossa Promessa</span>
           <h2 className="text-4xl md:text-5xl font-serif italic mb-10 leading-tight">
            "Não apenas resolvemos problemas; <br /> trabalhamos para evitar que eles aconteçam."
           </h2>
           <div className="h-px w-24 bg-gold/30 mx-auto"></div>
        </div>
      </section>
    </div>
  );
};

export default Differentials;
