import { ArrowRight, MessageCircle, ShieldCheck, Sparkles, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden pt-28 md:pt-36 pb-20 md:pb-28"
      aria-label="Apresentação Klassic Kar"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 -z-10" aria-hidden>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50 md:opacity-70"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/70 to-ink" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_40%,rgba(168,85,247,0.20),transparent_70%)]" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
            backgroundSize: '44px 44px',
            maskImage: 'radial-gradient(ellipse at center, black 50%, transparent 85%)',
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow com gatilho de autoridade + escassez */}
          <div className="inline-flex items-center gap-2 rounded-full border border-neon-lime/30 bg-neon-lime/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-neon-lime backdrop-blur animate-fade-up">
            <Sparkles className="h-3.5 w-3.5" />
            Agenda aberta · Apenas 6 vagas esta semana
          </div>

          <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight animate-fade-up">
            <span className="text-white">TESTE</span>{' '}
            <span className="text-white">um dia vira</span>{' '}
            <span className="text-gradient">Klassic.</span>
          </h1>

          <p className="mt-6 mx-auto max-w-2xl text-base sm:text-lg text-zinc-300 animate-fade-up">
            Detalhamento profissional, vitrificação cerâmica e lavagem técnica
            executados por <strong className="text-white">especialistas certificados</strong>.
            Produtos premium internacionais, leva-e-traz e garantia documentada.
          </p>

          {/* CTA principal + secundário lado a lado */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-up">
            <a
              href="#contato"
              className="btn-primary group text-base px-7 py-3.5 animate-pulse-glow"
            >
              <MessageCircle className="h-5 w-5" />
              Agendar pelo WhatsApp
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#servicos" className="btn-secondary text-base px-7 py-3.5">
              Ver Serviços
            </a>
          </div>

          {/* Prova social inline (CRO clássico: logo após o CTA) */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-fade-up">
            <div className="flex -space-x-2">
              {['#A855F7', '#84CC16', '#7C3AED', '#A3E635'].map((c, i) => (
                <span
                  key={i}
                  className="grid h-8 w-8 place-items-center rounded-full border-2 border-ink-300 text-[11px] font-bold text-ink-300"
                  style={{ background: c }}
                >
                  {['R', 'C', 'D', 'L'][i]}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2 text-sm text-zinc-300">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 text-neon-lime fill-neon-lime" />
                ))}
              </div>
              <span>
                <strong className="text-white">4.9/5</strong> · +1.200 clientes satisfeitos
              </span>
            </div>
          </div>

          {/* Trust badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 animate-fade-up">
            <span className="badge-purple">
              <ShieldCheck className="h-3.5 w-3.5" /> Garantia 12 meses
            </span>
            <span className="badge-lime">Certificação ICR / IDR</span>
            <span className="badge-purple">Leva e Traz Grátis*</span>
          </div>
        </div>

        {/* KPI strip */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {[
            { v: '+8',    l: 'anos de mercado'  },
            { v: '1.200+', l: 'carros atendidos' },
            { v: '100%',  l: 'satisfação'        },
            { v: '12m',   l: 'garantia'          },
          ].map((kpi) => (
            <div key={kpi.l} className="glass-card glass-card-hover p-4 sm:p-5 text-center animate-fade-up">
              <div className="font-display text-2xl sm:text-3xl font-bold text-gradient">{kpi.v}</div>
              <div className="mt-1 text-[11px] sm:text-xs uppercase tracking-wider text-zinc-400">{kpi.l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-ink" />
    </section>
  )
}
