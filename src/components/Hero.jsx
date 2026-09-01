import { ArrowRight, MessageCircle, Star } from 'lucide-react'
import { whatsappLink, WHATSAPP_MSG_GENERAL } from '../data/contact'

export default function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden pt-28 md:pt-36 pb-20 md:pb-28"
      aria-label="Apresentação Klassic Kar"
    >
      {/* Backdrop: imagem real + overlay escuro para legibilidade */}
      <div className="absolute inset-0 -z-10" aria-hidden>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/background2.png')",
          }}
        />
        {/* Overlay escuro garantindo 100% de contraste */}
        <div className="absolute inset-0 bg-[#0a0a0c]/75" />
        {/* Gradientes radiais sutis para profundidade */}
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_30%,rgba(34,197,94,0.06),transparent_70%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge superior: estilo corporativo, sem neon */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur px-3.5 py-1.5 text-xs font-medium tracking-wide text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden />
            São Paulo - SP • Estética Automotiva Especializada
          </div>

          {/* H1: destaque em cor sólida, sem gradiente */}
          <h1 className="mt-7 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            <span className="text-white">Seu carro. Seu estilo.</span>{' '}
            <span className="text-emerald-500">Nossa paixão.</span>
          </h1>

          {/* Subtítulo: copy direta e humanizada */}
          <p className="mt-6 mx-auto max-w-2xl text-base sm:text-lg leading-relaxed text-zinc-300">
            Especialistas em lavagem técnica, detalhamento, vitrificação, PPF e
            insulfilm. Cuidado de alto padrão, produtos premium e acabamento
            impecável para o seu veículo.
          </p>

          {/* CTAs: botão sólido verde + secundário outline */}
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={whatsappLink(WHATSAPP_MSG_GENERAL)}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-emerald-500 px-7 py-3.5 text-base font-semibold text-black transition-all duration-200 hover:bg-emerald-400 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0c]"
            >
              <MessageCircle className="h-5 w-5" />
              Agendar pelo WhatsApp
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-transparent px-7 py-3.5 text-base font-medium text-zinc-100 transition-all duration-200 hover:border-white/30 hover:bg-white/[0.04] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0c]"
            >
              Ver Serviços
            </a>
          </div>

          {/* Prova social: badge estruturado com nota do Google */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Logo do Google */}
            <div className="flex items-center gap-2.5">
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="text-sm font-medium text-zinc-300">Google</span>
            </div>

            {/* Divisor vertical */}
            <div className="hidden sm:block h-5 w-px bg-white/10" aria-hidden />

            {/* Avaliação estruturada */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-0.5" aria-label="Avaliação 4.9 de 5 estrelas">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>
              <div className="text-sm text-zinc-300">
                <span className="font-semibold text-white">4.9 / 5.0</span>
                <span className="mx-1.5 text-zinc-500">•</span>
                <span>+1.200 clientes satisfeitos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
