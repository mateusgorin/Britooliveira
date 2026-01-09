
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-gold text-navy p-4 rounded-full shadow-2xl hover:bg-navy hover:text-gold border border-gold/20 transition-all duration-500 transform hover:scale-110 flex items-center justify-center group"
      aria-label="Falar pelo WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 whitespace-nowrap text-[10px] font-bold uppercase tracking-ultra">
        Atendimento Executivo
      </span>
    </a>
  );
};

export default WhatsAppButton;