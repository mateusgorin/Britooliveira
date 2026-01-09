
import React from 'react';
import { Mail, Phone, MapPin, MessageCircle, ArrowRight } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Sua solicitação foi recebida. Um de nossos consultores seniores entrará em contato em até 24h úteis.');
  };

  return (
    <div className="bg-white">
      {/* Header Padronizado */}
      <section className="pt-40 md:pt-56 pb-16 md:pb-24 bg-navy text-white text-center">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <span className="text-gold text-[10px] font-bold uppercase tracking-ultra mb-4 md:mb-6 block">Inicie um diálogo</span>
          <h1 className="text-4xl md:text-7xl font-serif italic mb-6 md:mb-8">Canais de <span className="text-gradient-gold not-italic">Atendimento</span></h1>
          <p className="text-gray-400 font-light text-base md:text-lg">Discrição e eficiência em cada ponto de contato.</p>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
          {/* Info Side */}
          <div className="lg:col-span-5 order-2 lg:order-1">
             <h2 className="text-3xl md:text-4xl font-serif text-navy mb-8 md:mb-10 italic">Presença & Conectividade</h2>
             <p className="text-gray-500 font-light text-base md:text-lg mb-12 md:mb-16 leading-relaxed">
               Agende uma visita em nossa sede ou solicite uma conferência privada com nossos especialistas.
             </p>
             
             <div className="space-y-8 md:space-y-12">
                <div className="flex items-start gap-5 md:gap-6 group">
                   <div className="p-3 md:p-4 bg-corporate-gray text-gold transition-colors group-hover:bg-navy group-hover:text-gold">
                      <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                   </div>
                   <div>
                      <h4 className="text-navy font-bold uppercase tracking-ultra text-[9px] md:text-[10px] mb-1 md:mb-2">Escritório Central</h4>
                      <p className="text-gray-500 font-light text-sm md:text-base">Brasília/DF</p>
                   </div>
                </div>
                <div className="flex items-start gap-5 md:gap-6 group">
                   <div className="p-3 md:p-4 bg-corporate-gray text-gold transition-colors group-hover:bg-navy group-hover:text-gold">
                      <Phone className="w-5 h-5 md:w-6 md:h-6" />
                   </div>
                   <div>
                      <h4 className="text-navy font-bold uppercase tracking-ultra text-[9px] md:text-[10px] mb-1 md:mb-2">Linha Executiva</h4>
                      <p className="text-gray-500 font-light text-sm md:text-base">+55 (61) 98147-6031</p>
                   </div>
                </div>
                <div className="flex items-start gap-5 md:gap-6 group">
                   <div className="p-3 md:p-4 bg-corporate-gray text-gold transition-colors group-hover:bg-navy group-hover:text-gold">
                      <Mail className="w-5 h-5 md:w-6 md:h-6" />
                   </div>
                   <div>
                      <h4 className="text-navy font-bold uppercase tracking-ultra text-[9px] md:text-[10px] mb-1 md:mb-2">Email Corporativo</h4>
                      <p className="text-gray-500 font-light text-sm md:text-base">contato@britooliveiraassessoria.com.br</p>
                   </div>
                </div>
             </div>

             <div className="mt-12 md:mt-20 pt-8 md:pt-12 border-t border-gray-100">
                <p className="text-[10px] font-bold text-navy uppercase tracking-ultra mb-4 md:mb-6">Resposta Instantânea</p>
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  className="inline-flex items-center gap-4 bg-gold hover:bg-navy text-navy hover:text-white px-8 md:px-10 py-4 md:py-5 transition-all shadow-xl group w-full sm:w-auto justify-center"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className="font-bold uppercase text-[10px] tracking-ultra">WhatsApp Executive</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
             </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7 order-1 lg:order-2">
             <div className="p-8 md:p-16 bg-corporate-gray shadow-2xl relative">
                <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-gold/5 -z-10"></div>
                <h3 className="text-2xl md:text-3xl font-serif text-navy mb-10 md:mb-12 italic">Formulário de Qualificação</h3>
                <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                      <div className="space-y-1 md:space-y-2">
                         <label className="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-ultra">Seu Nome</label>
                         <input 
                           type="text" 
                           required 
                           className="w-full bg-white border-b-2 border-transparent focus:border-gold py-3 md:py-4 px-3 outline-none transition-all placeholder:text-gray-300 font-light"
                           placeholder="Ex: Dr. Roberto Mendes"
                         />
                      </div>
                      <div className="space-y-1 md:space-y-2">
                         <label className="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-ultra">Empresa</label>
                         <input 
                           type="text" 
                           className="w-full bg-white border-b-2 border-transparent focus:border-gold py-3 md:py-4 px-3 outline-none transition-all placeholder:text-gray-300 font-light"
                           placeholder="Razão Social"
                         />
                      </div>
                   </div>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                      <div className="space-y-1 md:space-y-2">
                         <label className="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-ultra">E-mail Profissional</label>
                         <input 
                           type="email" 
                           required 
                           className="w-full bg-white border-b-2 border-transparent focus:border-gold py-3 md:py-4 px-3 outline-none transition-all placeholder:text-gray-300 font-light"
                           placeholder="roberto@empresa.com.br"
                         />
                      </div>
                      <div className="space-y-1 md:space-y-2">
                         <label className="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-ultra">Telefone Direto</label>
                         <input 
                           type="tel" 
                           required 
                           className="w-full bg-white border-b-2 border-transparent focus:border-gold py-3 md:py-4 px-3 outline-none transition-all placeholder:text-gray-300 font-light"
                           placeholder="(00) 00000-0000"
                         />
                      </div>
                   </div>
                   <div className="space-y-1 md:space-y-2">
                      <label className="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-ultra">Área de Interesse</label>
                      <select className="w-full bg-white border-b-2 border-transparent focus:border-gold py-3 md:py-4 px-3 outline-none transition-all font-light appearance-none cursor-pointer">
                        <option>Assessoria Estratégica Completa</option>
                        <option>Blindagem Jurídica Preventiva</option>
                        <option>Compliance & Auditoria</option>
                        <option>Gestão de Ativos & Sucessão</option>
                      </select>
                   </div>
                   <div className="space-y-1 md:space-y-2">
                      <label className="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-ultra">Breve Contexto</label>
                      <textarea 
                        rows={3} 
                        required 
                        className="w-full bg-white border-b-2 border-transparent focus:border-gold py-3 md:py-4 px-3 outline-none transition-all placeholder:text-gray-300 font-light resize-none"
                        placeholder="Como podemos agregar valor ao seu board hoje?"
                      ></textarea>
                   </div>
                   <button 
                     type="submit" 
                     className="w-full bg-navy hover:bg-gold-dark text-white font-bold py-5 md:py-6 uppercase text-[10px] tracking-ultra transition-all shadow-2xl flex items-center justify-center gap-4 group"
                   >
                     Enviar para Análise
                     <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                   </button>
                </form>
             </div>
          </div>
        </div>
      </section>

      {/* Modern Map Visualization */}
      <section className="relative h-[400px] md:h-[600px] w-full bg-navy grayscale overflow-hidden group">
         <div 
           className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] group-hover:scale-110 opacity-40"
           style={{ backgroundImage: `url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop')` }}
         ></div>
         <div className="absolute inset-0 bg-navy/60"></div>
         <div className="absolute inset-0 flex items-center justify-center">
             <div className="text-center px-6">
                 <div className="w-12 h-12 md:w-16 md:h-16 border-2 border-gold rounded-full flex items-center justify-center mb-4 md:mb-6 animate-pulse mx-auto">
                    <MapPin className="text-gold w-6 h-6 md:w-8 md:h-8" />
                 </div>
                 <h2 className="text-white text-2xl md:text-3xl font-serif italic mb-2">Unidade Matriz</h2>
                 <p className="text-gold text-[9px] md:text-[10px] font-bold uppercase tracking-ultra">Brasília DF / Brasil</p>
             </div>
         </div>
      </section>
    </div>
  );
};

export default Contact;
