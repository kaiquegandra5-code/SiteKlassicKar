import { ArrowRight, BadgeCheck, Check, Crown, Star } from 'lucide-react'
import { SERVICES } from '../data/services'

export default function Services() {
  return (
    <section id="servicos" className="relative py-20 md:py-28" aria-label="Nossos Pacotes">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-300">
            <BadgeCheck className="h-3.5 w-3.5" />
            Planos Mensais
          </span>
          <h2 className="mt-5 font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Lave mais, <span className="text-emerald-400">pague menos</span> e mantenha seu carro sempre impecável
          </h2>
          <p className="mt-4 text-zinc-400">
            Planos mensais com tudo incluso. Escolha o tamanho do seu veículo
            (Pequeno, Médio ou Grande) e comece hoje.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => {
            const Icon = s.icon
            const isHighlight = s.highlight
            return (
              <article
                key={s.id}
                className={`rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04] relative ${
                  isHighlight ? 'ring-1 ring-emerald-500/30 lg:scale-[1.02]' : ''
                }`}
              >
                {/* Header: ícone + badge */}
                <div className="relative flex items-start justify-between gap-3">
                  <span className={`grid h-12 w-12 place-items-center rounded-xl bg-white/5 border border-white/10 transition-all ${isHighlight ? 'text-emerald-400' : 'text-zinc-300'}`}>
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider ${isHighlight ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-white/5 text-zinc-400 border border-white/10'}`}>
                    {isHighlight ? <><Star className="inline h-3 w-3 mr-0.5" /> {s.badge}</> : s.badge}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{s.description}</p>

                <ul className="mt-4 space-y-1.5 flex-1">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-zinc-300">
                      <Check className="h-3.5 w-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

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
                            ? 'border-emerald-500/40 bg-emerald-500/5'
                            : 'border-white/10 bg-white/[0.02]'
                        }`}
                      >
                        <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">{size.label}</div>
                        <div className={`font-display text-sm sm:text-base font-bold mt-0.5 ${idx === 1 ? 'text-emerald-400' : 'text-emerald-300'}`}>
                          {size.price}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-1.5 text-[10px] text-center text-zinc-500">P: Pequeno | M: Médio | G: Grande</div>
                </div>

                <a
                  href="#contato"
                  className={`mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 text-xs font-bold uppercase tracking-wider transition ${
                    isHighlight
                      ? 'bg-emerald-500 text-black hover:bg-emerald-400'
                      : 'border border-white/10 bg-white/[0.03] text-white hover:border-white/20 hover:bg-white/[0.05]'
                  }`}
                >
                  Quero este plano
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </article>
            )
          })}
        </div>

        <p className="mt-8 text-center text-xs text-zinc-500">
          * Valores por mês. Contratos com fidelidade opcional. Desconto progressivo em planos anuais.
        </p>
      </div>
    </section>
  )
}
