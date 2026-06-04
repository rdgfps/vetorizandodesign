import Link from 'next/link'
import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import { aboutValues, brand, processSteps, whatsappLink } from '@/content/site'

export const metadata: Metadata = {
  title: `Sobre | ${brand.name} - ${brand.tagline}`,
  description: `Conheça a história, metodologia e valores da ${brand.name} - design profissional em ${brand.region}.`,
}

export default function SobrePage() {
  return (
    <>
      <section className="page-hero" style={{ background: 'var(--navy)', padding: '5rem 0', marginTop: 72 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
          <p className="section-label">Quem somos</p>
          <h1 style={{ fontSize: 'clamp(2.2rem,4vw,3rem)', color: 'white', fontWeight: 700, marginBottom: '1rem', maxWidth: 600 }}>
            Design com propósito.<br />Resultado com método.
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 300, fontSize: '1.05rem', maxWidth: 480, lineHeight: 1.8 }}>
            A história da {brand.name} é a história de cada empresa que ajudamos a crescer.
          </p>
        </div>
      </section>

      <section className="responsive-section" style={{ padding: '6rem 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
          <div className="two-col-grid about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'start' }}>
            <div>
              <p className="section-label">Nossa história</p>
              <h2 style={{ fontSize: '1.9rem', color: 'var(--navy)', fontWeight: 700, marginBottom: '1.5rem' }}>
                Nascemos em Pelotas para servir Pelotas
              </h2>
              <p style={{ color: 'var(--gray-mid)', fontSize: '0.975rem', fontWeight: 300, lineHeight: 1.9, marginBottom: '1.25rem' }}>
                A {brand.name} nasceu da percepção de que muitos negócios locais não tinham acesso a design profissional de verdade - ou achavam que isso era caro demais ou desnecessário.
              </p>
              <p style={{ color: 'var(--gray-mid)', fontSize: '0.975rem', fontWeight: 300, lineHeight: 1.9, marginBottom: '1.25rem' }}>
                Com anos de experiência no mercado, entendemos que design não é um luxo. É uma ferramenta estratégica que diferencia empresas que crescem das que ficam paradas.
              </p>
              <p style={{ color: 'var(--gray-mid)', fontSize: '0.975rem', fontWeight: 300, lineHeight: 1.9, marginBottom: '1.25rem' }}>
                Hoje atendemos empresas, comércios, profissionais liberais e prestadores de serviço em {brand.region}, com um compromisso simples: fazer sua marca trabalhar por você.
              </p>
              <p style={{ color: 'var(--gray-mid)', fontSize: '0.975rem', fontWeight: 300, lineHeight: 1.9 }}>
                Cada projeto é tratado com a seriedade de uma empresa de consultoria e a criatividade de um estúdio de design consolidado.
              </p>
            </div>

            <div style={{ marginTop: '2rem' }}>
              {aboutValues.map((value) => (
                <div key={value.title} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.25rem', padding: '1.25rem', background: 'var(--gray-light)', borderRadius: 4 }}>
                  <div style={{ width: 36, height: 36, background: 'var(--navy)', borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--gold)', fontFamily: 'Manrope, sans-serif', fontWeight: 700 }}>
                    {value.title.slice(0, 1)}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--navy)', marginBottom: '0.25rem', fontFamily: 'DM Sans, sans-serif' }}>{value.title}</h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--gray-mid)', fontWeight: 300, lineHeight: 1.6 }}>{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="responsive-section" style={{ background: 'var(--navy)', padding: '6rem 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p className="section-label centered">Metodologia</p>
            <h2 style={{ fontSize: 'clamp(2rem,3.5vw,2.75rem)', color: 'white', fontWeight: 700, marginBottom: '1rem' }}>Como trabalhamos</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 300, maxWidth: 520, margin: '0 auto', lineHeight: 1.8 }}>
              Um processo claro, transparente e orientado a resultado - do primeiro contato à entrega final.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 0, position: 'relative' }} className="process-line process-grid">
            {processSteps.map((step) => (
              <div key={step.num} style={{ textAlign: 'center', position: 'relative', padding: '0 1rem' }}>
                <div style={{ width: 56, height: 56, border: '1px solid rgba(255,164,0,0.3)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem', fontFamily: 'Manrope, sans-serif', fontSize: '1.2rem', fontWeight: 700, color: 'var(--gold)', background: 'var(--navy)', position: 'relative', zIndex: 1 }}>
                  {step.num}
                </div>
                <div style={{ fontSize: '0.9rem', color: 'white', fontWeight: 500, marginBottom: '0.5rem' }}>{step.name}</div>
                <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', fontWeight: 300, lineHeight: 1.7 }}>{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--navy)', position: 'relative', overflow: 'hidden', borderTop: '1px solid rgba(255,164,0,0.1)' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,164,0,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,164,0,0.03) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="cta-inner" style={{ position: 'relative', textAlign: 'center', maxWidth: 700, margin: '0 auto', padding: '6rem 2rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem,4vw,3.25rem)', color: 'white', marginBottom: '1rem' }}>Vamos trabalhar<br />juntos?</h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 300, marginBottom: '2.5rem', fontSize: '1.05rem' }}>
            Entre em contato e descubra o que a {brand.name} pode fazer pela sua marca.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={whatsappLink('Olá! Gostaria de conversar sobre minha marca.')} target="_blank" rel="noopener noreferrer" className="btn-primary">Falar pelo WhatsApp</a>
            <Link href="/portfolio" className="btn-outline">Ver nosso portfólio</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
