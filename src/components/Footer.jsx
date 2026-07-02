import { Instagram, Facebook, Youtube, MapPin, Mail, Phone, ArrowUpRight } from 'lucide-react'
import Logo from './Logo'
import {
  SOCIAL_LINKS,
  ADDRESS,
  EMAIL,
  WHATSAPP_DISPLAY,
} from '../data/contact'

const ICONS = { instagram: Instagram}

const NAV = [
  {
    title: 'Serviços',
    links: [
      { label: 'Lavagem Detalhada', href: '#servicos' },
      { label: 'Correção de Pintura', href: '#servicos' },
      { label: 'Vitrificação Cerâmica', href: '#servicos' },
      { label: 'Higienização Interna', href: '#servicos' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Diferenciais',   href: '#diferenciais' },
      { label: 'Avaliações',     href: '#avaliacoes'   },
      { label: 'Agendar',        href: '#contato'      },
      { label: 'Sobre nós',      href: '#'             },
    ],
  },
  {
    title: 'Suporte',
    links: [
      { label: 'Política de Privacidade', href: '#' },
      { label: 'Garantia',                href: '#' },
      { label: 'FAQ',                     href: '#' },
      { label: 'Trabalhe conosco',        href: '#' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink-300">
      <div className="absolute inset-x-0 top-0 h-px neon-divider" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Logo size="md" />
            <p className="mt-4 text-sm text-zinc-400 max-w-xs">
              Estética automotiva premium: detalhamento, vitrificação, lavagem
              técnica e higienização interna. Excelência em cada detalhe.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {SOCIAL_LINKS.map((s) => {
                const Icon = ICONS[s.icon] ?? Instagram
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5
                               text-zinc-300 transition hover:text-white hover:border-neon-purple/50 hover:shadow-glow-purple"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Nav groups */}
          {NAV.map((g) => (
            <div key={g.title}>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-neon-lime">
                {g.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="group inline-flex items-center gap-1 text-sm text-zinc-300 hover:text-white transition"
                    >
                      {l.label}
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact strip */}
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {[
            { icon: MapPin, t: ADDRESS },
            { icon: Phone,  t: WHATSAPP_DISPLAY },
            { icon: Mail,   t: EMAIL },
          ].map((c) => {
            const Icon = c.icon
            return (
              <div key={c.t} className="glass-card flex items-center gap-3 p-4">
                <span
                  className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 text-neon-purple"
                  style={{ background: 'linear-gradient(135deg, rgba(168,85,247,0.18) 0%, rgba(132,204,22,0.12) 100%)' }}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-sm text-zinc-200">{c.t}</span>
              </div>
            )
          })}
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/5 pt-6">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} Klassic Kar — Estética Automotiva Premium. Todos os direitos reservados.
          </p>
          <p className="text-xs text-zinc-500">
            CNPJ 00.000.000/0001-00 · Desenvolvido com <span className="text-gradient font-semibold">♥</span>
          </p>
        </div>
      </div>
    </footer>
  )
}