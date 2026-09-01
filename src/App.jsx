import Navbar            from './components/Navbar'
import Hero              from './components/Hero'
import Benefits          from './components/Benefits'
import SingleServices    from './components/SingleServices'
import PremiumProtection from './components/PremiumProtection'
import Services          from './components/Services'
import Testimonials      from './components/Testimonials'
import ContactForm       from './components/ContactForm'
import Footer            from './components/Footer'
import FloatingButtons   from './components/FloatingButtons'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />

      <main>
        {/* 1. Hero — primeiro impacto + CTA acima da dobra */}
        <Hero />

        {/* 2. Diferenciais — sustenta a promessa logo após o herói */}
        <Benefits />

        {/* 3. Lavagens avulsas — pagamento único, sem fidelidade */}
        <SingleServices />

        {/* 4. Proteção Premium — insulfilm, envelopamento, PPF */}
        <PremiumProtection />

        {/* 5. Planos Mensais — assinaturas recorrentes, maior valor */}
        <Services />

        {/* 6. Prova social — depoimentos que quebram objeção de preço */}
        <Testimonials />

        {/* 7. CTA final / formulário de conversão */}
        <ContactForm />
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  )
}