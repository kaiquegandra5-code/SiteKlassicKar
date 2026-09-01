import { BadgeCheck, ShieldCheck, Clock, Award, Sparkles, Truck } from 'lucide-react'

const BENEFITS = [
  {
    icon: ShieldCheck,
    title: 'Garantia de 12 meses',
    desc: 'Em vitrificação e PPF. Documentação oficial e cobertura em rede credenciada.',
  },
  {
    icon: Award,
    title: 'Equipe certificada',
    desc: 'Profissionais treinados com certificação ICR/IDR e produtos premium internacionais.',
  },
  {
    icon: Truck,
    title: 'Leva e traz grátis',
    desc: 'Buscamos e entregamos seu carro na região. Você não precisa se preocupar com nada.',
  },
  {
    icon: Clock,
    title: 'Atendimento ágil',
    desc: 'Confirmação em até 30 minutos pelo WhatsApp. Respeitamos seu tempo.',
  },
]

const STATS = [
  { v: '4.9/5',   l: 'Avaliação Google' },
  { v: '+1.200',  l: 'Carros atendidos' },
  { v: '98%',     l: 'Recomendariam'    },
  { v: '12 meses', l: 'Garantia média'  },
]

export default function Benefits() {
  return (
    <section
      id="diferenciais"
      className="relative py-20 md:py-28"
      aria-label="Diferenciais"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-300">
            <BadgeCheck className="h-3.5 w-3.5" />
            Por que escolher a Klassic Kar
          </span>
          <h2 className="mt-5 font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Nossos <span className="text-emerald-500">diferenciais</span>
          </h2>
          <p className="mt-4 text-zinc-400">
            Não somos mais um. Somos a referência em estética automotiva premium
            da região.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:gap-5 sm:grid-cols-2">
          {BENEFITS.map((b) => {
            const Icon = b.icon
            return (
              <div
                key={b.title}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-7 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/5 text-emerald-400">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg sm:text-xl font-semibold text-white">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{b.desc}</p>
              </div>
            )
          })}
        </div>

        {/* Stats bar */}
        <div className="mt-14 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {STATS.map((s) => (
              <div key={s.l}>
                <div className="font-display text-2xl md:text-3xl font-bold text-emerald-400">{s.v}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-zinc-400">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
