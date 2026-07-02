import { Star, Quote, BadgeCheck } from 'lucide-react'
import { TESTIMONIALS } from '../data/testimonials'

const GOOGLE_LOGO = (
  <svg viewBox="0 0 48 48" className="h-4 w-4" aria-hidden>
    <path
      fill="#4285F4"
      d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
    />
    <path
      fill="#34A853"
      d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"
    />
    <path
      fill="#FBBC05"
      d="M11.69 28.18c-.44-1.32-.69-2.73-.69-4.18s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z"
    />
    <path
      fill="#EA4335"
      d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"
    />
  </svg>
)

export default function Testimonials() {
  return (
    <section
      id="avaliacoes"
      className="relative py-20 md:py-28"
      aria-label="Avaliações de clientes"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">
            <Star className="h-3.5 w-3.5 fill-current" />
            Avaliações do Google
          </span>
          <h2 className="section-title mt-4">
            <span className="text-gradient">5,0</span> de 5 estrelas
          </h2>

          {/* Card de destaque com a nota do Google */}
          <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 text-neon-lime fill-neon-lime drop-shadow-[0_0_6px_rgba(132,204,22,0.5)]"
                />
              ))}
            </div>
            <span className="text-sm font-semibold text-white">5,0</span>
            <span className="text-xs text-zinc-400">· 5 avaliações no Google</span>
            {GOOGLE_LOGO}
          </div>

          <p className="mt-4 text-zinc-400 text-sm">
            Klassic Kar Estética Automotiva · R. Mário Linhares, 561 - Jardim Inga, São Paulo - SP
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <article
              key={t.name}
              className="glass-card glass-card-hover relative p-6 sm:p-8 animate-fade-up"
            >
              <Quote className="absolute -top-3 -left-3 h-8 w-8 text-neon-purple/40" aria-hidden />

              {/* Stars + badge Google */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-neon-lime fill-neon-lime drop-shadow-[0_0_6px_rgba(132,204,22,0.5)]"
                    />
                  ))}
                </div>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-zinc-300">
                  {GOOGLE_LOGO}
                  <span>Avaliação Google</span>
                </span>
              </div>

              <p className="mt-4 text-zinc-200 leading-relaxed">“{t.text}”</p>

              <div className="mt-6 flex items-center justify-between pt-5 border-t border-white/5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-neon-purple to-neon-violet text-sm font-bold text-white">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{t.name}</div>
                    <div className="text-xs text-zinc-400">{t.time}</div>
                  </div>
                </div>
                <span className="badge-purple">
                  <BadgeCheck className="mr-1 inline h-3 w-3" />
                  Verificada
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
