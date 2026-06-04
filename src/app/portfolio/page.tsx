'use client'

import { useState } from 'react'
import Footer from '@/components/Footer'
import { portfolioFilters, projects, type PortfolioCategory, whatsappLink } from '@/content/site'

export default function PortfolioPage() {
  const [active, setActive] = useState<PortfolioCategory>('all')
  const filtered = projects.filter((p) => active === 'all' || p.cat === active)

  return (
    <>
      <section className="page-hero" style={{ background: 'var(--navy)', padding: '5rem 0', marginTop: 72 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <p className="section-label centered">Nossos projetos</p>
          <h1 style={{ fontSize: 'clamp(2.2rem,4vw,3rem)', color: 'white', fontWeight: 700, marginBottom: '1rem' }}>
            Portfólio
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 300, fontSize: '1.05rem', maxWidth: 560, margin: '0 auto', lineHeight: 1.8 }}>
            Cada projeto é uma história de transformação. Veja como ajudamos empresas a comunicarem seu valor com mais autoridade.
          </p>
        </div>
      </section>

      <div className="page-content" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
        <div className="portfolio-filters" style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap', margin: '3rem 0 4rem' }}>
          {portfolioFilters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActive(filter.key)}
              style={{
                background: active === filter.key ? 'var(--navy)' : 'transparent',
                border: `1px solid ${active === filter.key ? 'var(--navy)' : 'var(--border)'}`,
                color: active === filter.key ? 'white' : 'var(--gray-mid)',
                padding: '0.5rem 1.25rem',
                borderRadius: 2,
                fontSize: '0.8rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.3s',
                fontFamily: 'DM Sans, sans-serif',
              }}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="cards-grid-3 portfolio-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem', marginBottom: '5rem' }}>
          {filtered.map((project) => (
            <div key={project.name} style={{ cursor: 'pointer' }}>
              <div style={{ aspectRatio: '4/3', background: 'var(--gray-light)', borderRadius: 4, overflow: 'hidden', position: 'relative', marginBottom: '1rem' }}>
                <div style={{ width: '100%', height: '100%', background: project.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 700, color: 'rgba(255,255,255,0.9)' }}>{project.logoText}</div>
                    <div style={{ fontSize: '0.55rem', letterSpacing: '0.25em', color: project.logoColor, marginTop: 4 }}>{project.logoSub}</div>
                  </div>
                </div>
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'var(--navy)',
                    opacity: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'opacity 0.35s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '0')}
                >
                  <span style={{ color: 'var(--gold)', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 500 }}>
                    Ver projeto →
                  </span>
                </div>
              </div>
              <div style={{ fontSize: '0.68rem', color: 'var(--gold)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>{project.catLabel}</div>
              <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1rem', color: 'var(--navy)', fontWeight: 600 }}>{project.name}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--gray-mid)', fontWeight: 300, marginTop: 2 }}>{project.type}</div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', padding: '2rem 0 5rem' }}>
          <p style={{ color: 'var(--gray-mid)', fontSize: '0.9rem', fontWeight: 300, marginBottom: '1.5rem' }}>
            Quer ver seu projeto aqui? Entre em contato.
          </p>
          <a href={whatsappLink('Olá! Gostaria de saber mais sobre os serviços.')} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Solicitar orçamento
          </a>
        </div>
      </div>

      <Footer />
    </>
  )
}
