import React from 'react';
import { DIFFERENTIALS } from '../constants';
import { Crown, Zap, Globe, ShieldCheck, Award, Handshake } from 'lucide-react';

const Differentials: React.FC = () => {
  const icons = [<Handshake />, <Zap />, <Globe />, <ShieldCheck />, <Award />, <Crown />];

  return (
    <div className="bg-white">
      {/* Header Padronizado */}
      <section className="pt-40 md:pt-52 pb-20 bg-navy text-white text-center">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <span className="text-gold text-[10px] font-bold uppercase tracking-ultra mb-6 block">Por que escolher a Brito Oliveira?</span>
          <h1 className="text-3xl md:text-5xl font-serif italic mb-6">Diferenciais <span className="text-gradient-gold not-italic">Estratégicos</span></h1>
          <p className="text-gray-400 font-light text-base max-w-lg mx-auto">Valores que transformam a gestão da sua empresa.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {DIFFERENTIALS.map((diff, index) => (
              <div key={index} className="group flex flex-col gap-6">
                <div className="text-navy/40 w-10 h-10 group-hover:text-gold transition-colors">
                  <div className="[&>svg]:w-8 [&>svg]:h-8 [&>svg]:stroke-[1.5]">
                    {icons[index % icons.length]}
                  </div>
                </div>
                <div>
                  {/* Fonte aumentada de text-xl para text-2xl */}
                  <h3 className="text-2xl font-serif text-navy mb-3 italic">{diff.title}</h3>
                  <div className="h-px w-8 bg-gray-200 mb-4 group-hover:bg-gold transition-colors"></div>
                  {/* Fonte aumentada de text-sm para text-base */}
                  <p className="text-gray-500 leading-relaxed font-light text-base">
                    {diff.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Differentials;