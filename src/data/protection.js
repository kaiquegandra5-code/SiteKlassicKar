import { Sun, Layers, ShieldCheck } from 'lucide-react'

// Proteção Premium (Insulfilm, Envelopamento, PPF)
export const PROTECTION_SERVICES = [
  {
    id: 'insulfilm',
    icon: Sun,
    title: 'Insulfilm',
    description:
      'Conforto, privacidade e proteção térmica para o seu carro. Película instalada no carro completo.',
    features: [
      'Redução de calor e proteção UV',
      'Maior privacidade interna',
      'Preserva o interior do veículo',
      'Reduz o ofuscamento do sol',
      'Visual moderno e elegante',
    ],
    note: 'Opções: Película comum | Nano carbono | Nano cerâmica | Window blue',
    priceFrom: 'R$ 500',
    badge: 'Proteção Térmica',
    gradient: 'from-neon-lime/20 to-neon-purple/15',
  },
  {
    id: 'envelopamento',
    icon: Layers,
    title: 'Envelopamento',
    description:
      'Transforme o visual do seu carro com envelopamento profissional e acabamento impecável.',
    features: [
      'Colunas e retrovisores',
      'Lanternas e faróis',
      'Emblemas e detalhes personalizados',
      'Envelopamento completo sob orçamento',
      'Alta durabilidade e acabamento premium',
    ],
    note: 'Aplicações parciais ou completo sob orçamento',
    priceFrom: 'R$ 200',
    badge: 'Envelopamento',
    gradient: 'from-neon-purple/15 to-neon-lime/20',
  },
  {
    id: 'ppf',
    icon: ShieldCheck,
    title: 'PPF | Película de Proteção',
    description:
      'Proteção invisível contra riscos, impactos e sujeira. Ideal para áreas vulneráveis do veículo.',
    features: [
      'Proteção para maçanetas e soleiras',
      'Cobertura de porta-malas',
      'Proteção de black piano',
      'Cobertura de retrovisores',
      'PPF completo sob orçamento',
    ],
    note: 'Película de poliuretano auto-regenerativa',
    priceFrom: 'R$ 250',
    badge: 'Proteção Invisível',
    gradient: 'from-neon-lime/15 to-neon-purple/25',
  },
]
