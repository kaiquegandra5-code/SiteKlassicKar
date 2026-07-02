import { useEffect, useState } from 'react'
import { Menu, X, CalendarCheck } from 'lucide-react'
import Logo from './Logo'
import { whatsappLink, WHATSAPP_MSG_GENERAL } from '../data/contact'

const LINKS = [
  { href: '#servicos',         label: 'Pacotes'         },
  { href: '#servicos-avulsos', label: 'Serviços' },
  { href: '#diferenciais',     label: 'Diferenciais'    },
  { href: '#avaliacoes',       label: 'Avaliações'      },
  { href: '#contato',          label: 'Contato'         },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header
      id="top"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-xl bg-ink/85 border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.35)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16 md:h-20">
        <Logo />

        <ul className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="nav-link">{l.label}</a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={whatsappLink(WHATSAPP_MSG_GENERAL)}
            target="_blank"
            rel="noreferrer"
            className="btn-primary text-sm"
          >
            <CalendarCheck className="h-4 w-4" />
            Agendar Agora
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl
                     border border-white/10 bg-white/5 text-zinc-100 hover:bg-white/10 transition"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mx-4 mb-4 rounded-2xl border border-white/10 bg-ink/90 backdrop-blur-xl p-4 shadow-card">
          <ul className="flex flex-col gap-1">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-sm font-medium text-zinc-200
                             hover:bg-white/5 hover:text-white transition"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="btn-primary mt-3 w-full text-sm"
          >
            <CalendarCheck className="h-4 w-4" />
            Agendar Agora
          </a>
        </div>
      </div>
    </header>
  )
}