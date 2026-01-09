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

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DIFFERENTIALS.map((diff, index) => (
              <div 
                key={index} 
                className="group relative bg-white p-10 md:p-12 border border-gray-100 hover:border-gold/40 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 rounded-sm"
              >
                {/* Detalhe Superior Dourado */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-navy via-gold to-navy transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                
                {/* Ícone */}
                <div className="mb-10 relative">
                   <div className="w-16 h-16 rounded-full bg-navy/5 flex items-center justify-center text-navy group-hover:bg-navy group-hover:text-gold transition-all duration-500 shadow-sm group-hover:shadow-md">
                     <div className="[&>svg]:w-8 [&>svg]:h-8 [&>svg]:stroke-[1.5]">
                        {icons[index % icons.length]}
                     </div>
                   </div>
                </div>

                <div>
                  <h3 className="text-2xl font-serif text-navy mb-5 group-hover:text-gold transition-colors duration-300">
                    {diff.title}
                  </h3>
                  <div className="h-px w-10 bg-gray-200 mb-6 group-hover:bg-gold transition-colors duration-500 group-hover:w-20"></div>
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