import { ArrowRight, Check, Shield } from 'lucide-react'
import { PROTECTION_SERVICES } from '../data/protection'
import { whatsappLink, WHATSAPP_MSG_SINGLE } from '../data/contact'

export default function PremiumProtection() {
  return (
    <section
      className="relative py-20 md:py-28"
      aria-label="Proteção e Estilo Premium"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">
            <Shield className="h-3.5 w-3.5" />
            Proteção e Estilo
          </span>
          <h2 className="section-title mt-4">
            Proteção <span className="text-gradient">Premium</span> para o seu carro
          </h2>
          <p className="mt-4 text-zinc-400">
            Estilo, proteção e valorização. Films, envelopamentos e PPF executados
            com materiais de primeira linha e acabamento profissional.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROTECTION_SERVICES.map((s) => {
            const Icon = s.icon
            return (
              <article
                key={s.id}
                className="glass-card glass-card-hover group flex flex-col p-6 relative animate-fade-up"
              >
                {/* Glow decorativo */}
                <div
                  aria-hidden
                  className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br from-neon-purple/20 to-neon-lime/15 blur-3xl opacity-50 group-hover:opacity-80 transition duration-300"
                />

                <div className="relative flex items-start justify-between gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/5 border border-white/10 text-neon-purple group-hover:text-neon-lime group-hover:shadow-glow-mix transition-all">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="badge-purple">{s.badge}</span>
                </div>

                <h3 className="mt-5 text-xl font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{s.description}</p>

                <ul className="mt-4 space-y-1.5 flex-1">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-zinc-300">
                      <Check className="h-3.5 w-3.5 text-neon-lime flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {s.note && (
                  <p className="mt-3 text-[11px] text-zinc-500 italic">{s.note}</p>
                )}

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
                    href={whatsappLink(WHATSAPP_MSG_SINGLE)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand-soft border border-white/10 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:border-neon-purple/50 hover:shadow-glow-purple"
                  >
                    Solicitar orçamento
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
