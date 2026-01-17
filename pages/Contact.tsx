
import React from 'react';
import { Mail, Phone, MapPin, ArrowRight, Clock } from 'lucide-react';
import { PHONE_DISPLAY } from '../constants';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Sua solicitação foi recebida. Um de nossos consultores seniores entrará em contato em até 24h úteis.');
  };

  return (
    <div className="bg-white flex flex-col min-h-screen">
      {/* Header Compacto (Estilo corporativo) */}
      <section className="pt-40 md:pt-52 pb-20 bg-navy text-white text-center relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent opacity-30"></div>
        
        <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10">
          <span className="text-gold text-xs font-bold uppercase tracking-ultra mb-6 block">Assessoria Especializada</span>
          <h1 className="text-3xl md:text-5xl font-serif italic mb-6">Inicie sua Consultoria</h1>
          <p className="text-gray-300 font-light text-lg max-w-lg mx-auto leading-relaxed">
            Estamos prontos para entender o seu cenário e desenhar a melhor estratégia jurídica e empresarial.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Info Side */}
          <div className="lg:col-span-4 order-2 lg:order-1 lg:border-r lg:border-gray-100 lg:pr-12">
             <div className="sticky top-32">
               <h2 className="text-3xl font-serif text-navy mb-8 italic">Dados de Contato</h2>
               <p className="text-gray-600 font-normal text-base mb-12 leading-relaxed">
                 Nossa equipe atua com sigilo absoluto. Escolha o canal de sua preferência para iniciar o diálogo.
               </p>
               
               <div className="space-y-10">
                  <div className="group">
                     <div className="flex items-center gap-3 text-navy text-xs font-bold uppercase tracking-ultra mb-3">
                        <MapPin className="w-5 h-5 text-gold" /> Sede
                     </div>
                     <p className="text-gray-800 font-medium text-lg pl-8">Brasília/DF - Brasil</p>
                  </div>

                  <div className="group">
                     <div className="flex items-center gap-3 text-navy text-xs font-bold uppercase tracking-ultra mb-3">
                        <Phone className="w-5 h-5 text-gold" /> Telefone
                     </div>
                     <p className="text-gray-800 font-medium text-lg pl-8">{PHONE_DISPLAY}</p>
                  </div>

                  <div className="group">
                     <div className="flex items-center gap-3 text-navy text-xs font-bold uppercase tracking-ultra mb-3">
                        <Mail className="w-5 h-5 text-gold" /> E-mail
                     </div>
                     <p className="text-gray-800 font-medium text-lg pl-8 break-all">contato@britooliveiraassessoria.com.br</p>
                  </div>

                  <div className="group">
                     <div className="flex items-center gap-3 text-navy text-xs font-bold uppercase tracking-ultra mb-3">
                        <Clock className="w-5 h-5 text-gold" /> Atendimento
                     </div>
                     <p className="text-gray-800 font-medium text-lg pl-8">Segunda a Sexta, 09h às 18h</p>
                  </div>
               </div>
             </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-8 order-1 lg:order-2">
             <div className="bg-white p-8 md:p-12 border border-gray-200 shadow-sm relative rounded-sm">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-navy via-gold to-navy opacity-30"></div>
                <h3 className="text-2xl font-serif text-navy mb-2">Solicitação de Análise</h3>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-10">Preencha para agendar um diagnóstico preliminar</p>

                <form onSubmit={handleSubmit} className="space-y-8">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                      <div className="space-y-3 group">
                         <label className="text-xs font-bold text-navy uppercase tracking-wider block">Seu Nome</label>
                         <input 
                           type="text" 
                           required 
                           className="w-full bg-gray-50 border-b-2 border-gray-200 focus:border-navy px-4 py-4 outline-none transition-all font-medium text-base text-navy placeholder:text-gray-400 hover:bg-gray-100"
                           placeholder="Nome Completo"
                         />
                      </div>
                      <div className="space-y-3 group">
                         <label className="text-xs font-bold text-navy uppercase tracking-wider block">Empresa</label>
                         <input 
                           type="text" 
                           className="w-full bg-gray-50 border-b-2 border-gray-200 focus:border-navy px-4 py-4 outline-none transition-all font-medium text-base text-navy placeholder:text-gray-400 hover:bg-gray-100"
                           placeholder="Razão Social"
                         />
                      </div>
                   </div>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                      <div className="space-y-3 group">
                         <label className="text-xs font-bold text-navy uppercase tracking-wider block">E-mail Corporativo</label>
                         <input 
                           type="email" 
                           required 
                           className="w-full bg-gray-50 border-b-2 border-gray-200 focus:border-navy px-4 py-4 outline-none transition-all font-medium text-base text-navy placeholder:text-gray-400 hover:bg-gray-100"
                           placeholder="email@empresa.com"
                         />
                      </div>
                      <div className="space-y-3 group">
                         <label className="text-xs font-bold text-navy uppercase tracking-wider block">Telefone Direto</label>
                         <input 
                           type="tel" 
                           required 
                           className="w-full bg-gray-50 border-b-2 border-gray-200 focus:border-navy px-4 py-4 outline-none transition-all font-medium text-base text-navy placeholder:text-gray-400 hover:bg-gray-100"
                           placeholder="(00) 00000-0000"
                         />
                      </div>
                   </div>
                   <div className="space-y-3 group">
                      <label className="text-xs font-bold text-navy uppercase tracking-wider block">Tema Principal</label>
                      <div className="relative">
                        <select className="w-full bg-gray-50 border-b-2 border-gray-200 focus:border-navy px-4 py-4 outline-none transition-all font-medium text-base text-navy appearance-none cursor-pointer hover:bg-gray-100">
                            <option>Assessoria Estratégica Completa</option>
                            <option>Blindagem Jurídica Preventiva</option>
                            <option>Compliance & Auditoria</option>
                            <option>Gestão de Ativos & Sucessão</option>
                            <option>Outros Assuntos</option>
                        </select>
                        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-500">
                           <ArrowRight className="w-4 h-4 rotate-90" />
                        </div>
                      </div>
                   </div>
                   <div className="space-y-3 group">
                      <label className="text-xs font-bold text-navy uppercase tracking-wider block">Mensagem (Opcional)</label>
                      <textarea 
                        rows={4} 
                        className="w-full bg-gray-50 border-b-2 border-gray-200 focus:border-navy px-4 py-4 outline-none transition-all font-medium text-base text-navy resize-none placeholder:text-gray-400 hover:bg-gray-100"
                        placeholder="Descreva brevemente sua necessidade..."
                      ></textarea>
                   </div>
                   <div className="pt-6 flex justify-end">
                       <button 
                         type="submit" 
                         className="bg-navy text-white px-10 py-5 font-bold uppercase text-xs tracking-ultra hover:bg-gold hover:text-navy transition-all duration-300 shadow-lg hover:shadow-xl w-full md:w-auto"
                       >
                         Solicitar Contato
                       </button>
                   </div>
                </form>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
