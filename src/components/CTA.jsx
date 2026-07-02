import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react'
import { whatsappLink, WHATSAPP_MSG_PACKAGE } from '../data/contact'

export default function CTA() {
  return (
    <section className="relative py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink-100 p-8 sm:p-12 animate-fade-up">
          {/* Glows */}
          <div aria-hidden className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-neon-purple/30 blur-3xl" />
          <div aria-hidden className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-neon-lime/25 blur-3xl" />
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
              maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
            }}
          />

          <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="section-eyebrow">
                <Sparkles className="h-3.5 w-3.5" />
                Oferta por tempo limitado
              </span>
              <h3 className="mt-4 font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                <span className="text-white">Agende esta semana e ganhe</span>{' '}
                <span className="text-gradient">avaliação técnica gratuita</span>
                <span className="text-white"> + brinde de hidratação de plásticos.</span>
              </h3>
              <p className="mt-3 text-zinc-400">
                Vagas limitadas. Resposta em até 30 minutos pelo WhatsApp.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <a
                href={whatsappLink(WHATSAPP_MSG_PACKAGE)}
                target="_blank"
                rel="noreferrer"
                className="btn-primary animate-pulse-glow whitespace-nowrap"
              >
                <MessageCircle className="h-4 w-4" />
                Chamar no WhatsApp
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contato" className="btn-secondary whitespace-nowrap">
                Ver formulário
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
