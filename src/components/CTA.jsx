import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react'
import { whatsappLink, WHATSAPP_MSG_PACKAGE } from '../data/contact'

export default function CTA() {
  return (
    <section className="relative py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0c] p-8 sm:p-12">
          <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-300">
                <Sparkles className="h-3.5 w-3.5" />
                Oferta por tempo limitado
              </span>
              <h3 className="mt-4 font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
                Agende esta semana e ganhe{' '}
                <span className="text-lime-500">avaliação técnica gratuita</span>
                {' '}+ brinde de hidratação de plásticos.
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
                className="inline-flex items-center justify-center gap-2 rounded-full bg-lime-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-lime-600"
              >
                <MessageCircle className="h-4 w-4" />
                Chamar no WhatsApp
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contato"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-transparent px-6 py-3 text-sm font-medium text-zinc-100 transition hover:border-white/30 hover:bg-white/[0.04]"
              >
                Ver formulário
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
