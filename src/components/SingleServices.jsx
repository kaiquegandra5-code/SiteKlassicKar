import { ArrowRight, BadgeCheck, Check, Droplets } from 'lucide-react'
import { SINGLE_SERVICES } from '../data/services'

export default function SingleServices() {
  return (
    <section
      id="servicos-avulsos"
      className="relative py-20 md:py-28"
      aria-label="Serviços"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">
            <Droplets className="h-3.5 w-3.5" />
            Serviços
          </span>
          <h2 className="section-title mt-4">
            Precisa de um serviço <span className="text-gradient">pontual</span>?
          </h2>
          <p className="mt-4 text-zinc-400">
            Pagamento único, sem fidelidade. Ideal para quem quer cuidar do carro
            em uma ocasião especial ou experimentar nossos serviços.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {SINGLE_SERVICES.map((s) => {
            const Icon = s.icon
            return (
              <article
                key={s.id}
                className="glass-card glass-card-hover group flex flex-col p-6 relative animate-fade-up"
              >
                <div
                  aria-hidden
                  className={`absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br ${s.gradient} blur-3xl opacity-40 transition-opacity group-hover:opacity-80`}
                />

                <div className="relative flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/5 border border-white/10 text-neon-purple transition-all group-hover:text-neon-lime group-hover:shadow-glow-mix">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="badge-lime">
                    <BadgeCheck className="h-3.5 w-3.5" /> {s.badge}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {s.description}
                </p>

                <ul className="mt-4 space-y-1.5">
                  {s.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-xs text-zinc-300"
                    >
                      <Check className="h-3.5 w-3.5 text-neon-lime flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-5 border-t border-white/5">
                  <div className="flex items-end justify-between mb-4">
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-zinc-500">
                        A partir de
                      </div>
                      <div className="font-display text-2xl font-bold text-neon-lime">
                        {s.priceFrom}
                      </div>
                    </div>
                  </div>
                  <a
                    href="#contato"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full
                               bg-gradient-brand-soft border border-white/10 px-4 py-2.5
                               text-xs font-bold uppercase tracking-wider text-white
                               transition hover:border-neon-purple/50 hover:shadow-glow-purple"
                  >
                    Agendar este serviço
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
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