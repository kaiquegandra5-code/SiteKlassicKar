import {
  Sparkles,
  ShieldCheck,
  Star,
  Zap,
  Flame,
  Crown,
  Wrench,
  Sparkle,
} from 'lucide-react'

// Lavagens avulsas (pagamento único, sem fidelidade)
export const SINGLE_SERVICES = [
  {
    id: 'klassica',
    icon: Sparkles,
    title: 'Lavagem Klássica',
    description:
      'A limpeza ideal para o dia a dia. Externa completa, interna básica e secagem profissional.',
    features: [
      'Lavagem externa com shampoo profissional',
      'Limpeza de rodas e caixas de rodas',
      'Secagem com toalha de microfibra',
      'Aplicação de cera líquida',
      'Aspiração interna',
      'Limpeza de painel, portas e vidros',
    ],
    sizes: [
      { label: 'Pequeno', price: 'R$ 60'  },
      { label: 'Médio',   price: 'R$ 80'  },
      { label: 'Grande',  price: 'R$ 100' },
    ],
    badge: 'Lavagem Avulsa',
    highlight: false,
  },
  {
    id: 'klassica-suprema',
    icon: ShieldCheck,
    title: 'Lavagem Klássica Suprema',
    description:
      'Mais brilho, mais cuidado e mais durabilidade. Detalhamento completo com cera de longa duração.',
    features: [
      'Tudo da Lavagem Klássica',
      'Detalhamento em cantos, emblemas e logos',
      'Limpeza mais profunda',
      'Finalização com cera de maior duração (até 3 meses)',
    ],
    sizes: [
      { label: 'Pequeno', price: 'R$ 120' },
      { label: 'Médio',   price: 'R$ 160' },
      { label: 'Grande',  price: 'R$ 200' },
    ],
    badge: 'Lavagem Avulsa',
    highlight: false,
  },
  {
    id: 'klassica-premium',
    icon: Star,
    title: 'Lavagem Klássica Premium',
    description:
      'A experiência completa: detalhamento fino, revitalização de plásticos e proteção prolongada.',
    features: [
      'Tudo da Lavagem Suprema',
      'Detalhamento fino completo',
      'Limpeza técnica de rodas e caixas',
      'Revitalização de plásticos externos',
      'Acabamento premium em vidros',
      'Aplicação de cera ou selante sintético',
      'Proteção e brilho prolongado',
    ],
    sizes: [
      { label: 'Pequeno', price: 'R$ 200' },
      { label: 'Médio',   price: 'R$ 260' },
      { label: 'Grande',  price: 'R$ 320' },
    ],
    badge: 'A Mais Escolhida',
    highlight: true,
  },
]

// Pacotes mensais (assinatura)
export const SERVICES = [
  {
    id: 'celta',
    icon: Sparkles,
    title: 'Pacote Celta',
    description: 'Ideal para quem busca economia e praticidade.',
    features: [
      '2 Lavagens Klássicas por mês',
      'Manutenção básica interna e externa',
    ],
    sizes: [
      { label: 'P', price: 'R$ 109' },
      { label: 'M', price: 'R$ 149' },
      { label: 'G', price: 'R$ 190' },
    ],
    badge: 'Economia',
    highlight: false,
  },
  {
    id: 'golf',
    icon: Zap,
    title: 'Pacote Golf',
    description: 'Mais cuidados e proteção para o seu dia a dia.',
    features: [
      '2 Lavagens Klássicas por mês',
      '1 Klássica Express Externa por mês',
    ],
    sizes: [
      { label: 'P', price: 'R$ 139' },
      { label: 'M', price: 'R$ 179' },
      { label: 'G', price: 'R$ 219' },
    ],
    badge: 'Mais frequência',
    highlight: false,
  },
  {
    id: 'impala',
    icon: Flame,
    title: 'Pacote Impala',
    description: 'O equilíbrio perfeito: cuidado completo com proteção estendida.',
    features: [
      '2 Lavagens Klássicas por mês',
      '1 Lavagem Klássica Suprema por mês',
      '1 Klássica Express Externa por mês',
      'Clareamento de faróis OU descontaminação de chuva ácida',
      'Hidratação de Plásticos Internos',
      'Aplicação de cera (duração 3 a 6 meses)',
    ],
    sizes: [
      { label: 'P', price: 'R$ 339' },
      { label: 'M', price: 'R$ 389' },
      { label: 'G', price: 'R$ 449' },
    ],
    badge: 'O Mais Escolhido',
    highlight: true,
  },
  {
    id: 'bmw',
    icon: Crown,
    title: 'Pacote BMW',
    description: 'O cuidado completo que seu carro merece: proteção e valorização premium.',
    features: [
      '1 Lavagem Klássica Suprema por mês',
      '1 Lavagem Klássica por mês',
      'Descontaminação de Pintura',
      'Polimento Comercial',
      'Remoção de Chuva Ácida',
      'Cristalização de Vidros',
      'Selante de Longa Duração',
      'Proteção & Valorização do seu veículo',
    ],
    sizes: [
      { label: 'P', price: 'R$ 997'   },
      { label: 'M', price: 'R$ 1.197' },
      { label: 'G', price: 'R$ 1.397' },
    ],
    badge: 'Premium',
    highlight: false,
  },
]
