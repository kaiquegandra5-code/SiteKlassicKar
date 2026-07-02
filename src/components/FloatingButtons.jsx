import { useEffect, useState } from 'react'
import { MessageCircle, ArrowUp } from 'lucide-react'
import { whatsappLink, WHATSAPP_MSG_GENERAL } from '../data/contact'

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed right-4 sm:right-6 bottom-4 sm:bottom-6 z-40 flex flex-col items-end gap-3">
      <a
        href={whatsappLink(WHATSAPP_MSG_GENERAL)}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
        className="group relative inline-flex items-center justify-center h-14 w-14 rounded-full
                   bg-ink-300/95 backdrop-blur border border-white/15 text-neon-lime
                   shadow-glow-mix hover:scale-105 transition animate-pulse-glow"
      >
        <span aria-hidden className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-neon-lime shadow-glow-lime" />
        <MessageCircle className="h-6 w-6" />
        <span
          className="absolute right-full mr-3 hidden sm:flex items-center whitespace-nowrap
                     rounded-full bg-ink-300/95 border border-white/10 px-3 py-1.5 text-xs font-semibold text-white
                     opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
        >
          Falar no WhatsApp
        </span>
      </a>

      <button
        type="button"
        aria-label="Voltar ao topo"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`inline-flex items-center justify-center h-11 w-11 rounded-full
                    bg-white/5 backdrop-blur border border-white/10 text-zinc-200
                    hover:bg-white/10 hover:text-white transition
                    ${showTop ? 'opacity-100 translate-y-0' : 'pointer-events-none opacity-0 translate-y-2'}`}
      >
        <ArrowUp className="h-4 w-4" />
      </button>
    </div>
  )
}