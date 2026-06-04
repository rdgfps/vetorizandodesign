import Link from 'next/link'
import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import ServiceIcon from '@/components/ServiceIcon'
import { brand, services, whatsappLink } from '@/content/site'

export const metadata: Metadata = {
  title: `Serviços | ${brand.name} - Designer Gráfico Pelotas`,
  description: `${brand.description} ${brand.region}.`,
}

export default function ServicosPage() {
  return (
    <>
      <section className="page-hero" style={{ background: 'var(--navy)', padding: '5rem 0', marginTop: 72 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <p className="section-label centered">O que fazemos</p>
          <h1 style={{ fontSize: 'clamp(2.2rem,4vw,3rem)', color: 'white', fontWeight: 700, marginBottom: '1rem' }}>
            Soluções em Design Gráfico
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 300, fontSize: '1.05rem', maxWidth: 560, margin: '0 auto', lineHeight: 1.8 }}>
            Do briefing à entrega, cada projeto é desenvolvido com método, estratégia e atenção aos detalhes que fazem a diferença.
          </p>
        </div>
      </section>

      <section className="responsive-section" style={{ padding: '5rem 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
          {services.map((svc, i) => {
            const isReverse = i % 2 !== 0

            return (
              <div
                className="service-detail-grid"
                key={svc.slug}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '5rem',
                  alignItems: 'center',
                  padding: '4rem 0',
                  borderBottom: i < services.length - 1 ? '1px solid var(--border)' : 'none',
                  direction: isReverse ? 'rtl' : 'ltr',
                }}
              >
                <div style={{ direction: 'ltr' }}>
                  <div style={{ background: 'var(--gray-light)', borderRadius: 6, aspectRatio: '4/3', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: 80, height: 80, background: 'rgba(255,164,0,0.1)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <ServiceIcon slug={svc.slug} size={40} />
                    </div>
                  </div>
                </div>

                <div style={{ direction: 'ltr' }}>
                  <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.75rem', fontFamily: 'DM Sans, sans-serif' }}>
                    {svc.num} - Serviço
                  </p>
                  <h2 style={{ fontSize: '1.75rem', color: 'var(--navy)', marginBottom: '1rem' }}>{svc.name}</h2>
                  <p style={{ color: 'var(--gray-mid)', fontSize: '0.95rem', fontWeight: 300, lineHeight: 1.9, marginBottom: '1.5rem' }}>{svc.desc}</p>
                  <ul style={{ listStyle: 'none', marginBottom: '1.75rem' }}>
                    {svc.benefits.map((benefit) => (
                      <li key={benefit} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.875rem', color: 'var(--gray-mid)', fontWeight: 300, marginBottom: '0.6rem' }}>
                        <span style={{ display: 'block', width: 16, height: 16, background: 'var(--gold)', borderRadius: '50%', flexShrink: 0, marginTop: 3, backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3 8l3.5 3.5L13 4.5' stroke='%23061525' stroke-width='2' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")", backgroundSize: 'cover' }} />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <a href={whatsappLink(svc.waMsg)} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    Solicitar orçamento
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section style={{ background: 'var(--navy)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,164,0,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,164,0,0.03) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="cta-inner" style={{ position: 'relative', textAlign: 'center', maxWidth: 700, margin: '0 auto', padding: '6rem 2rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem,4vw,3.25rem)', color: 'white', marginBottom: '1rem' }}>Qual serviço a sua<br />marca precisa?</h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 300, marginBottom: '2.5rem', fontSize: '1.05rem' }}>
            Fale conosco e descubra qual solução faz mais sentido para o seu momento e objetivo.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={whatsappLink('Olá! Vi os serviços e gostaria de um orçamento.')} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Falar pelo WhatsApp
            </a>
            <Link href="/contato" className="btn-outline">Formulário de contato</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
