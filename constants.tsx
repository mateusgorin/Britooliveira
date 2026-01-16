
import { 
  ShieldCheck, 
  TrendingUp, 
  Scale, 
  Settings, 
  FileCheck, 
  Briefcase, 
  LineChart,
  Brain
} from 'lucide-react';
import { Service, Differential, NavItem } from './types';

export const LOGO_URL = 'https://i.postimg.cc/s21ZkLLm/IMG-1927.png';
export const WHATSAPP_NUMBER = '5561981476031'; 

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Sobre a Empresa', path: '/#quem-somos' },
  { label: 'Serviços', path: '/#servicos' },
  { label: 'Diferenciais', path: '/#diferenciais' },
];

export const SERVICES: Service[] = [
  {
    id: '2',
    title: 'Assessoria Jurídica Preventiva e Consultiva',
    description: 'Foco na mitigação de riscos e segurança jurídica através de consultoria especializada antes da ocorrência de conflitos.',
    complementaryText: 'Elaboração de contratos complexos, proteção de propriedade intelectual e gestão de passivos através de métodos preventivos que evitam litígios custosos.',
    icon: <Scale className="w-8 h-8" />
  },
  {
    id: '1',
    title: 'Assessoria Empresarial Estratégica',
    description: 'Soluções inteligentes focadas em planejamento e crescimento sustentável, garantindo que sua empresa esteja sempre à frente.',
    complementaryText: 'Acompanhamento direto na definição de metas, análise detalhada de mercado e estruturação de parcerias estratégicas para o fortalecimento institucional do seu negócio.',
    icon: <Briefcase className="w-8 h-8" />
  },
  {
    id: '3',
    title: 'Planejamento e Organização Empresarial',
    description: 'Estruturação de processos e fluxos internos para maximizar a eficiência e a clareza operacional do negócio.',
    complementaryText: 'Implementação de metodologias ágeis e reengenharia de processos para eliminar gargalos operacionais e otimizar a produtividade de toda a equipe.',
    icon: <TrendingUp className="w-8 h-8" />
  },
  {
    id: '4',
    title: 'Consultoria em Gestão e Compliance',
    description: 'Adequação normativa e ética corporativa para garantir a conformidade absoluta da empresa perante o mercado.',
    complementaryText: 'Criação de códigos de ética personalizados, treinamentos corporativos de integridade e auditorias internas para garantir conformidade com a LGPD e leis anticorrupção.',
    icon: <ShieldCheck className="w-8 h-8" />
  },
  {
    id: '5',
    title: 'Suporte Estratégico para Decisões',
    description: 'Análise técnica e estratégica para apoiar sócios e diretores em tomadas de decisões críticas e de alto impacto.',
    complementaryText: 'Apoio consultivo em fusões, aquisições, valuation e reestruturação societária, fornecendo dados técnicos para decisões seguras em momentos decisivos.',
    icon: <LineChart className="w-8 h-8" />
  },
  {
    id: '6',
    title: 'Regularização e Orientação Empresarial',
    description: 'Acompanhamento integral nos processos societários e operacionais, mantendo a empresa em dia com todas as obrigações.',
    complementaryText: 'Gestão completa de licenças, alvarás, alterações contratuais e representação técnica perante órgãos reguladores, juntas comerciais e prefeituras.',
    icon: <FileCheck className="w-8 h-8" />
  },
  {
    id: '7',
    title: 'Assessoria Contábil',
    description: 'Gestão contábil com visão estratégica, focada na eficiência fiscal e no suporte à saúde financeira do negócio.',
    complementaryText: 'Escrituração fiscal avançada, gestão de folha de pagamento e planejamento tributário sob medida para maximizar a economia lícita de impostos e encargos.',
    icon: <Settings className="w-8 h-8" />
  },
  {
    id: '8',
    title: 'Gestão de Riscos Psicossociais e Adequação à NR-1',
    description: 'Implementação de suporte psicológico e prevenção ao burnout, garantindo conformidade com as novas exigências de saúde ocupacional.',
    complementaryText: 'Diagnóstico organizacional focado em saúde mental e implementação de protocolos de segurança do trabalho conforme as diretrizes da NR-1, promovendo um ambiente produtivo.',
    icon: <Brain className="w-8 h-8" />
  }
];

export const DIFFERENTIALS: Differential[] = [
  {
    title: 'Atendimento Personalizado',
    description: 'Entendemos que cada empresa é única e exige uma abordagem exclusiva e detalhada para seus desafios específicos.'
  },
  {
    title: 'Atuação Estratégica e Preventiva',
    description: 'Nossa filosofia é antecipar cenários e evitar problemas, permitindo uma gestão focada apenas no crescimento.'
  },
  {
    title: 'Linguagem Clara e Técnica',
    description: 'Transmitimos conhecimentos complexos de forma acessível e direta, facilitando a compreensão e a gestão dos sócios.'
  },
  {
    title: 'Foco em Segurança Empresarial',
    description: 'Priorizamos a proteção do seu patrimônio e a continuidade do seu negócio em todas as nossas frentes de atuação.'
  },
  {
    title: 'Compromisso com Credibilidade e Ética',
    description: 'Atuamos com transparência absoluta e os mais elevados padrões de integridade em todas as relações.'
  },
  {
    title: 'Visão Empresarial Integrada ao Jurídico',
    description: 'Unimos o conhecimento jurídico à visão prática de negócios para oferecer soluções completas e realistas.'
  }
];
