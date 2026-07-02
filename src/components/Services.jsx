import { ArrowRight, BadgeCheck, Check, Crown } from 'lucide-react'
import { SERVICES } from '../data/services'

export default function Services() {
  return (
    <section id="servicos" className="relative py-20 md:py-28" aria-label="Nossos Pacotes">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">
            <BadgeCheck className="h-3.5 w-3.5" />
            Pacotes Mensais
          </span>
          <h2 className="section-title mt-4">
            Escolha o pacote <span className="text-gradient">ideal para o seu carro</span>
          </h2>
          <p className="mt-4 text-zinc-400">
            Planos mensais com tudo incluso. Escolha o tamanho do seu veículo
            (Pequeno, Médio ou Grande) e comece hoje.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => {
            const Icon = s.icon
            const isHighlight = s.highlight
            return (
              <article
                key={s.id}
                className={`glass-card glass-card-hover group flex flex-col p-6 relative animate-fade-up ${
                  isHighlight ? 'ring-2 ring-neon-purple/60 lg:scale-[1.02] lg:-translate-y-1' : ''
                }`}
              >
                <div
                  aria-hidden
                  className={`absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br ${s.gradient} blur-3xl opacity-40 transition-opacity group-hover:opacity-80`}
                />

                {/* Header: ícone + badge */}
                <div className="relative flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span
                      className={`grid h-12 w-12 place-items-center rounded-xl bg-white/5 border border-white/10 transition-all ${
                        isHighlight ? 'text-neon-lime shadow-glow-mix' : 'text-neon-purple group-hover:text-neon-lime'
                      }`}
                    >
                      <Icon className="h-6 w-6" />
                    </span>
                    <div className="text-2xl">{s.emoji}</div>
                  </div>
                  <span className={isHighlight ? 'badge-lime' : 'badge-purple'}>
                    {s.badge}
                  </span>
                </div>

                {/* Title + description */}
                <h3 className="mt-5 text-xl font-bold text-white flex items-center gap-2">
                  {s.title}
                  {isHighlight && <Crown className="h-4 w-4 text-neon-lime" />}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{s.description}</p>

                {/* Features */}
                <ul className="mt-4 space-y-1.5">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-zinc-300">
                      <Check className="h-3.5 w-3.5 text-neon-lime flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Pricing (P / M / G) */}
                <div className="mt-6 pt-5 border-t border-white/5">
                  <div className="text-[11px] uppercase tracking-wider text-zinc-500 mb-3 text-center">
                    Valor mensal por porte
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {s.sizes.map((size, idx) => (
                      <div
                        key={size.label}
                        className={`rounded-xl p-2.5 text-center border transition ${
                          idx === 1
                            ? 'border-neon-purple/50 bg-gradient-brand-soft shadow-glow-purple'
                            : 'border-white/10 bg-white/[0.02]'
                        }`}
                      >
                        <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                          {size.label}
                        </div>
                        <div className={`font-display text-sm sm:text-base font-bold mt-0.5 ${idx === 1 ? 'text-gradient' : 'text-neon-lime'}`}>
                          {size.price}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-1.5 text-[10px] text-center text-zinc-500">
                    P: Pequeno · M: Médio · G: Grande
                  </div>
                </div>

                {/* CTA */}
                <a
                  href="#contato"
                  className={`mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 text-xs font-bold uppercase tracking-wider transition ${
                    isHighlight
                      ? 'bg-gradient-brand text-ink-300 shadow-glow-mix hover:scale-[1.02]'
                      : 'border border-white/10 bg-gradient-brand-soft text-white hover:border-neon-purple/50 hover:shadow-glow-purple'
                  }`}
                >
                  Quero este pacote
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </article>
            )
          })}
        </div>

        <p className="mt-8 text-center text-xs text-zinc-500">
          * Valores por mês. Contratos com fidelidade opcional. Desconto progressivo em pacotes anuais.
        </p>
      </div>
    </section>
  )
}