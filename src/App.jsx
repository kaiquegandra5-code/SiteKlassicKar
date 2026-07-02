import Navbar          from './components/Navbar'
import Hero            from './components/Hero'
import Benefits        from './components/Benefits'
import SingleServices  from './components/SingleServices'
import Services        from './components/Services'
import CTA             from './components/CTA'
import Testimonials    from './components/Testimonials'
import ContactForm     from './components/ContactForm'
import Footer          from './components/Footer'
import FloatingButtons from './components/FloatingButtons'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />

      <main>
        {/* 1. Hero — primeiro impacto + CTA acima da dobra */}
        <Hero />

        {/* 2. Diferenciais — sustenta a promessa logo após o herói */}
        <Benefits />

        {/* 3. Serviços — pagamento único, sem fidelidade */}
        <SingleServices />

        {/* 4. Pacotes Mensais — planos recorrentes, maior valor */}
        <Services />

        {/* 5. CTA intermediário com oferta por tempo limitado */}
        <CTA />

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