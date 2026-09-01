import { ArrowRight, BadgeCheck, Check, Droplets } from 'lucide-react'
import { SINGLE_SERVICES } from '../data/services'
import { whatsappLink, WHATSAPP_MSG_SINGLE } from '../data/contact'

export default function SingleServices() {
  return (
    <section
      id="servicos-avulsos"
      className="relative py-20 md:py-28"
      aria-label="Lavagens avulsas"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-300">
            <Droplets className="h-3.5 w-3.5" />
            Lavagens Avulsas
          </span>
          <h2 className="mt-5 font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Precisa de uma <span className="text-emerald-400">lavagem pontual</span>?
          </h2>
          <p className="mt-4 text-zinc-400">
            Pagamento único, sem fidelidade. Escolha a lavagem ideal para o seu
            carro e porte do veículo.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:gap-6 lg:grid-cols-3">
          {SINGLE_SERVICES.map((s) => {
            const Icon = s.icon
            return (
              <article
                key={s.id}
                className={`rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04] ${
                  s.highlight ? 'ring-1 ring-emerald-500/30 lg:scale-[1.02]' : ''
                }`}
              >
                <div className="relative flex items-center justify-between">
                  <span
                    className={`grid h-12 w-12 place-items-center rounded-xl bg-white/5 border border-white/10 transition-all ${
                      s.highlight ? 'text-emerald-400' : 'text-zinc-300'
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider ${s.highlight ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-white/5 text-zinc-400 border border-white/10'}`}>
                    {s.highlight ? <><BadgeCheck className="inline h-3.5 w-3.5 mr-0.5" /> {s.badge}</> : s.badge}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{s.description}</p>

                <ul className="mt-4 space-y-1.5">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-zinc-300">
                      <Check className="h-3.5 w-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-5 border-t border-white/5">
                  <div className="text-[11px] uppercase tracking-wider text-zinc-500 mb-3 text-center">
                    Valor por porte do veículo
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
                  href={whatsappLink(WHATSAPP_MSG_SINGLE)}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 text-xs font-bold uppercase tracking-wider transition ${
                    s.highlight
                      ? 'bg-emerald-500 text-black hover:bg-emerald-400'
                      : 'border border-white/10 bg-white/[0.03] text-white hover:border-white/20 hover:bg-white/[0.05]'
                  }`}
                >
                  Agendar lavagem
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </article>
            )
          })}
        </div>

        <p className="mt-8 text-center text-xs text-zinc-500">
          * Valores de referência. Orçamento personalizado conforme modelo e estado do veículo.
        </p>
      </div>
    </section>
  )
}
