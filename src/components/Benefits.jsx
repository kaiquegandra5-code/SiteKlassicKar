import { BadgeCheck } from 'lucide-react'
import { BENEFITS } from '../data/benefits'

export default function Benefits() {
  return (
    <section
      id="diferenciais"
      className="relative py-20 md:py-28"
      aria-label="Diferenciais"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">
            <BadgeCheck className="h-3.5 w-3.5" />
            Por que escolher a Klassic Kar
          </span>
          <h2 className="section-title mt-4">
            Os <span className="text-gradient">4 pilares</span> que fazem a diferença
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
                className="glass-card glass-card-hover relative p-6 sm:p-7 animate-fade-up"
              >
                <span
                  className="grid h-14 w-14 place-items-center rounded-2xl border border-white/10
                             text-neon-purple shadow-glow-purple"
                  style={{ background: 'linear-gradient(135deg, rgba(168,85,247,0.18) 0%, rgba(132,204,22,0.12) 100%)' }}
                >
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-lg sm:text-xl font-semibold text-white">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{b.desc}</p>
              </div>
            )
          })}
        </div>

        {/* Stats bar */}
        <div className="mt-14 glass-card p-6 sm:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { v: '4.9/5',   l: 'Avaliação Google' },
              { v: '+1.200',  l: 'Carros atendidos' },
              { v: '98%',     l: 'Recomendariam'    },
              { v: '12 meses', l: 'Garantia média'  },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-2xl md:text-3xl font-bold text-gradient">{s.v}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-zinc-400">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}