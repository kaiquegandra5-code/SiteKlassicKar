import { useState } from 'react'
import {
  CalendarCheck,
  CheckCircle2,
  Car,
  Loader2,
  Phone,
  User,
  Package,
  Droplets,
  MessageCircle,
  Shield,
} from 'lucide-react'
import { SERVICES, SINGLE_SERVICES } from '../data/services'
import {
  WHATSAPP_DISPLAY,
  WHATSAPP_NUMBER,
  WHATSAPP_MSG_PACKAGE,
  whatsappLink,
} from '../data/contact'

const initialForm = {
  name: '',
  phone: '',
  carModel: '',
  service: SERVICES[0].id,
  size: 'M',
}

export default function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const validate = () => {
    const er = {}
    if (!form.name.trim()) er.name = 'Informe seu nome.'
    if (!form.phone.trim() || form.phone.replace(/\D/g, '').length < 10)
      er.phone = 'Informe um WhatsApp válido com DDD.'
    if (!form.carModel.trim()) er.carModel = 'Informe o modelo do carro.'
    setErrors(er)
    return Object.keys(er).length === 0
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('loading')
    setTimeout(() => setStatus('sent'), 1000)
  }

  // Detecta se é pacote (mensal) ou serviço avulso (único)
  const isPackage = SERVICES.some((s) => s.id === form.service)
  const selectedPackage = SERVICES.find((s) => s.id === form.service)
  const selectedSingle = SINGLE_SERVICES.find((s) => s.id === form.service)
  const selectedService = selectedPackage || selectedSingle

  const selectedPrice = isPackage
    ? selectedPackage?.sizes.find((p) => p.label === form.size)?.price ?? '—'
    : selectedSingle?.priceFrom ?? '—'

  const formWhatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    isPackage
      ? `Olá! Sou ${form.name}, tenho um ${form.carModel} (porte ${form.size}) e gostaria de assinar o ${selectedService?.title} (${selectedPrice}/mês).`
      : `Olá! Sou ${form.name}, tenho um ${form.carModel} e gostaria de agendar o serviço avulso: ${selectedService?.title} (${selectedPrice}).`
  )}`

  return (
    <section id="contato" className="relative py-20 md:py-28" aria-label="Agendar serviço">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] items-start">
          {/* Copy lateral */}
          <div>
            <span className="section-eyebrow">
              <CalendarCheck className="h-3.5 w-3.5" />
              Assine um pacote
            </span>
            <h2 className="section-title mt-4">
              Comece hoje seu <span className="text-gradient">plano mensal</span>
            </h2>
            <p className="mt-4 text-zinc-400 max-w-lg">
              Preencha os dados abaixo e nossa equipe confirmará sua assinatura
              pelo WhatsApp em até 30 minutos.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                { icon: '⚡', t: 'Ativação em até 24 horas' },
                { icon: '🛡️', t: 'Sem fidelidade — cancele quando quiser' },
                { icon: '🚗', t: 'Leva e traz disponível na região' },
              ].map((it) => (
                <li
                  key={it.t}
                  className="flex items-center gap-3 text-sm text-zinc-200"
                >
                  <span
                    className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-neon-lime text-lg"
                    style={{ background: 'linear-gradient(135deg, rgba(168,85,247,0.18) 0%, rgba(132,204,22,0.12) 100%)' }}
                  >
                    {it.icon}
                  </span>
                  {it.t}
                </li>
              ))}
            </ul>

            <div className="mt-8 glass-card p-5">
              <div className="text-xs uppercase tracking-wider text-zinc-400">
                Atendimento direto
              </div>
              <a
                href={whatsappLink(WHATSAPP_MSG_PACKAGE)}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-2 text-lg font-semibold text-gradient"
              >
                <MessageCircle className="h-5 w-5" />
                {WHATSAPP_DISPLAY}
              </a>
              <p className="mt-1 text-xs text-zinc-500">Seg–Sáb · 08h às 19h</p>
            </div>
          </div>

          {/* Formulário */}
          <form
            onSubmit={onSubmit}
            className="glass-card p-6 sm:p-8 relative animate-fade-up"
            noValidate
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full blur-3xl"
              style={{ background: 'linear-gradient(135deg, rgba(168,85,247,0.18) 0%, rgba(132,204,22,0.12) 100%)' }}
            />

            {status === 'sent' ? (
              <div className="text-center py-8">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gradient-brand shadow-glow-mix">
                  <CheckCircle2 className="h-7 w-7 text-ink-300" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold text-white">
                  Pedido enviado!
                </h3>
                <p className="mt-2 text-zinc-400">
                  Confirmaremos sua assinatura pelo WhatsApp em até 30 minutos.
                  Para acelerar, toque no botão abaixo:
                </p>
                <a
                  href={formWhatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary mt-6 animate-pulse-glow"
                >
                  <MessageCircle className="h-4 w-4" />
                  Falar no WhatsApp agora
                </a>
                <button
                  type="button"
                  onClick={() => { setStatus('idle'); setForm(initialForm) }}
                  className="block mx-auto mt-4 text-sm text-zinc-400 hover:text-white underline-offset-4 hover:underline"
                >
                  Enviar novo pedido
                </button>
              </div>
            ) : (
              <div className="relative">
                <div className="mb-5 flex items-center gap-2 text-xs text-zinc-400">
                  <Shield className="h-3.5 w-3.5 text-neon-lime" />
                  Seus dados estão seguros. Não enviamos spam.
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="field-label flex items-center gap-1.5">
                      <User className="h-3.5 w-3.5" /> Nome
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Seu nome"
                      value={form.name}
                      onChange={handleChange}
                      className="field-input"
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className="field-label flex items-center gap-1.5">
                      <Phone className="h-3.5 w-3.5" /> WhatsApp
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      placeholder="(11) 99378-4778"
                      value={form.phone}
                      onChange={handleChange}
                      className="field-input"
                    />
                    {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone}</p>}
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="carModel" className="field-label flex items-center gap-1.5">
                      <Car className="h-3.5 w-3.5" /> Modelo do carro
                    </label>
                    <input
                      id="carModel"
                      name="carModel"
                      type="text"
                      placeholder="Ex.: HB20 2022, Onix Plus, Jeep Compass..."
                      value={form.carModel}
                      onChange={handleChange}
                      className="field-input"
                    />
                    {errors.carModel && <p className="mt-1 text-xs text-red-400">{errors.carModel}</p>}
                  </div>

                  <div>
                    <label htmlFor="service" className="field-label flex items-center gap-1.5">
                      <Package className="h-3.5 w-3.5" /> Pacote ou serviço
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="field-input"
                    >
                      <optgroup label="📦 Pacotes Mensais (assinatura)">
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.id} className="bg-ink-200">
                            {s.emoji} {s.title} — a partir de {s.sizes[0].price}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="💧 Serviços">
                        {SINGLE_SERVICES.map((s) => (
                          <option key={s.id} value={s.id} className="bg-ink-200">
                            {s.title} — a partir de {s.priceFrom}
                          </option>
                        ))}
                      </optgroup>
                    </select>
                  </div>

                  {isPackage ? (
                    <div>
                      <label htmlFor="size" className="field-label flex items-center gap-1.5">
                        <Car className="h-3.5 w-3.5" /> Porte do veículo
                      </label>
                      <select
                        id="size"
                        name="size"
                        value={form.size}
                        onChange={handleChange}
                        className="field-input"
                      >
                        <option value="P" className="bg-ink-200">P — Pequeno (HB20, Onix, Mobi)</option>
                        <option value="M" className="bg-ink-200">M — Médio (Cruze, Corolla, Compass)</option>
                        <option value="G" className="bg-ink-200">G — Grande (Hilux, Ranger, SUVs grandes)</option>
                      </select>
                    </div>
                  ) : (
                    <div>
                      <label className="field-label flex items-center gap-1.5">
                        <Droplets className="h-3.5 w-3.5" /> Tipo
                      </label>
                      <div className="field-input flex items-center justify-between cursor-not-allowed opacity-80">
                        <span className="text-zinc-400">Pagamento único</span>
                        <span className="badge-lime">Sem fidelidade</span>
                      </div>
                    </div>
                  )}

                  {/* Resumo do preço */}
                  <div className="sm:col-span-2 rounded-xl border border-white/10 bg-gradient-brand-soft p-4 flex items-center justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-wider text-zinc-400">
                        {isPackage ? 'Valor mensal estimado' : 'Valor do serviço'}
                      </div>
                      <div className="font-display text-2xl font-bold text-gradient">
                        {selectedPrice}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[11px] text-zinc-400">
                        {isPackage
                          ? `${selectedService?.emoji} ${selectedService?.title}`
                          : selectedService?.title}
                      </div>
                      <div className="text-[11px] text-zinc-400">
                        {isPackage ? `Porte ${form.size}` : 'Serviço avulso'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA principal */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary mt-6 w-full text-base py-4 animate-pulse-glow disabled:opacity-70"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Enviando…
                    </>
                  ) : (
                    <>
                      <MessageCircle className="h-5 w-5" />
                      {isPackage ? 'Quero assinar agora' : 'Quero agendar agora'}
                    </>
                  )}
                </button>

                <div className="my-5 flex items-center gap-3 text-xs text-zinc-500">
                  <div className="h-px flex-1 bg-white/10" />
                  ou, se preferir
                  <div className="h-px flex-1 bg-white/10" />
                </div>

                <a
                  href={whatsappLink(WHATSAPP_MSG_PACKAGE)}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary w-full text-sm"
                >
                  <MessageCircle className="h-4 w-4" />
                  Falar direto no WhatsApp
                </a>

                <p className="mt-4 text-[11px] text-zinc-500 text-center">
                  Ao enviar, você concorda com nossa política de privacidade.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}