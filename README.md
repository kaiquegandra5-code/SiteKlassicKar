# 🚗 Klassic Kar — Landing Page Premium

Site institucional + agendamento para a **Klassic Kar**, estética automotiva premium. Visual cyberpunk/premium com paleta **Preto profundo**, **Roxo Neon** e **Verde Lima**.

> Stack: **React 18 + Vite + Tailwind CSS + Lucide React**. Single Page Application com scroll suave entre seções.

---

## ✨ Funcionalidades

- **Hero** com headline de impacto, CTAs duplos e KPIs animados
- **Serviços** em cards com ícones, features e preço inicial em verde neon
- **Diferenciais** em grid responsivo com barra de estatísticas
- **Galeria Antes & Depois** com comparador interativo (arrastar/controlado por teclado)
- **Depoimentos** de clientes com 5 estrelas
- **Formulário de agendamento** com validação, escolha de serviço, data e hora + integração WhatsApp
- **CTA intermediário**, **Footer** completo e **botões flutuantes** (WhatsApp + voltar ao topo)
- **Navbar** sticky com menu mobile animado
- **Totalmente responsivo** (Mobile-first) — testado em breakpoints `sm` `md` `lg`

## 🎨 Identidade visual

| Token              | Valor                  | Uso                                |
| ------------------ | ---------------------- | ---------------------------------- |
| `bg-ink`           | `#0B0B0C`              | Fundo principal                    |
| `bg-ink-100/200/300` | tons escuros         | Cards e camadas                    |
| `neon-purple`      | `#A855F7`              | Destaques primários, gradientes   |
| `neon-violet`      | `#7C3AED`              | Gradientes profundos               |
| `neon-lime`        | `#A3E635`              | Preços, badges e CTAs secundários  |
| `neon-green`       | `#84CC16`              | Fim do gradiente da marca          |
| `font-display`     | Space Grotesk          | Títulos                            |
| `font-sans`        | Inter                  | Corpo                              |

## 📁 Estrutura

```
SiteKlassicKar/
├─ public/
│  └─ favicon.svg
├─ src/
│  ├─ components/
│  │  ├─ Benefits.jsx
│  │  ├─ ContactForm.jsx
│  │  ├─ CTA.jsx
│  │  ├─ FloatingButtons.jsx
│  │  ├─ Footer.jsx
│  │  ├─ Gallery.jsx
│  │  ├─ Hero.jsx
│  │  ├─ Logo.jsx
│  │  ├─ Navbar.jsx
│  │  ├─ Services.jsx
│  │  └─ Testimonials.jsx
│  ├─ data/
│  │  ├─ benefits.js
│  │  ├─ services.js
│  │  └─ testimonials.js
│  ├─ App.jsx
│  ├─ index.css
│  └─ main.jsx
├─ index.html
├─ package.json
├─ postcss.config.js
├─ tailwind.config.js
└─ vite.config.js
```

## 🚀 Como rodar

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em modo dev (abre http://localhost:5173)
npm run dev

# 3. Build de produção
npm run build

# 4. Preview da build
npm run preview
```

## 🔌 Integração real (opcional)

O formulário (`ContactForm.jsx`) hoje simula o envio com `setTimeout`. Para produção:

- **WhatsApp Business API** — troque o `setTimeout` por um `fetch` para seu endpoint, ou use o link `wa.me` que já é gerado dinamicamente.
- **Backend próprio / Firebase / Supabase** — basta substituir o bloco `setStatus('loading')` por sua chamada.
- **Analytics** — adicione GA4, Meta Pixel ou Clarity no `index.html`.

## 🖼️ Trocando imagens

As imagens de hero e galeria usam URLs do Unsplash. Substitua pelos seus próprios ensaios fotográficos:

- `Hero.jsx` → `backgroundImage` no backdrop
- `Gallery.jsx` → array `SLIDES`

## 📞 Contato demo no site

- WhatsApp: `+55 (11) 99999-9999`
- E-mail: `contato@klassickar.com.br`
- Endereço: `Av. Premium, 1234 — São Paulo / SP`

> Edite esses números diretamente em `Footer.jsx` e `ContactForm.jsx`.

---

Feito com ♥ para a Klassic Kar — *Excelência em cada detalhe*.