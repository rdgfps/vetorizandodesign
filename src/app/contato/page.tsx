'use client'

import { useState } from 'react'
import Footer from '@/components/Footer'
import { brand, services, whatsappLink } from '@/content/site'

const serviceOptions = [
  ...services.map((service) => service.name),
  'Não sei ainda / quero conversar',
]

export default function ContatoPage() {
  const [nome, setNome] = useState('')
  const [empresa, setEmpresa] = useState('')
  const [telefone, setTelefone] = useState('')
  const [servico, setServico] = useState('')
  const [mensagem, setMensagem] = useState('')

  function handleSubmit() {
    const text = `Olá! Meu nome é ${nome || 'não informado'}.${empresa ? `\nEmpresa: ${empresa}.` : ''}${telefone ? `\nWhatsApp: ${telefone}.` : ''}\nTenho interesse em: ${servico || 'não informado'}.${mensagem ? `\nMensagem: ${mensagem}` : ''}`
    window.open(whatsappLink(text), '_blank')
  }

  return (
    <>
      <section className="page-hero" style={{ background: 'var(--navy)', padding: '5rem 0', marginTop: 72, textAlign: 'center' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
          <p className="section-label centered">Fale conosco</p>
          <h1 style={{ fontSize: 'clamp(2.2rem,4vw,3rem)', color: 'white', fontWeight: 700, marginBottom: '1rem' }}>
            Entre em contato
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 300, fontSize: '1.05rem', maxWidth: 480, margin: '0 auto', lineHeight: 1.8 }}>
            Estamos prontos para conversar sobre o seu projeto. Sem compromisso, sem pressão.
          </p>
        </div>
      </section>

      <div className="page-content" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
        <div className="two-col-grid contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', padding: '5rem 0' }}>
          <div>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--navy)', marginBottom: '1rem' }}>Como prefere falar?</h3>
            <p style={{ color: 'var(--gray-mid)', fontSize: '0.925rem', fontWeight: 300, lineHeight: 1.8, marginBottom: '2rem' }}>
              Escolha o canal mais conveniente para você. Nossa resposta é rápida - geralmente no mesmo dia.
            </p>

            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.25rem 1.5rem', border: '1px solid var(--border)', borderRadius: 4, marginBottom: '0.75rem', cursor: 'pointer', textDecoration: 'none' }}>
              <div style={{ width: 44, height: 44, borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, background: '#25D366' }}>
                <span style={{ color: 'white', fontWeight: 700 }}>W</span>
              </div>
              <div>
                <div style={{ fontSize: '0.7rem', color: 'var(--gray-mid)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.2rem', fontWeight: 400 }}>WhatsApp</div>
                <div style={{ fontSize: '0.95rem', color: 'var(--navy)', fontWeight: 500 }}>{brand.whatsappDisplay}</div>
              </div>
              <div style={{ marginLeft: 'auto', color: 'var(--gray-mid)', fontSize: '1.2rem' }}>→</div>
            </a>

            <a href={brand.instagramUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.25rem 1.5rem', border: '1px solid var(--border)', borderRadius: 4, marginBottom: '0.75rem', cursor: 'pointer', textDecoration: 'none' }}>
              <div style={{ width: 44, height: 44, borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, background: 'linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)' }}>
                <span style={{ color: 'white', fontWeight: 700 }}>IG</span>
              </div>
              <div>
                <div style={{ fontSize: '0.7rem', color: 'var(--gray-mid)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.2rem', fontWeight: 400 }}>Instagram</div>
                <div style={{ fontSize: '0.95rem', color: 'var(--navy)', fontWeight: 500 }}>{brand.instagramHandle}</div>
              </div>
              <div style={{ marginLeft: 'auto', color: 'var(--gray-mid)', fontSize: '1.2rem' }}>→</div>
            </a>

            <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'var(--gray-light)', borderRadius: 4 }}>
              <div style={{ fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gray-mid)', marginBottom: '0.5rem', fontWeight: 500 }}>Atendimento</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--navy)', fontWeight: 400 }}>{brand.region}</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--gray-mid)', fontWeight: 300, marginTop: '0.25rem' }}>{brand.businessHours}</div>
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--navy)', marginBottom: '0.5rem' }}>Envie uma mensagem</h3>
            <p style={{ color: 'var(--gray-mid)', fontSize: '0.9rem', fontWeight: 300, marginBottom: '2rem', lineHeight: 1.7 }}>
              Conta para nós sobre seu projeto e retornamos com uma proposta personalizada.
            </p>

            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gray-dark)', fontWeight: 500, marginBottom: '0.5rem' }}>Nome</label>
              <input className="form-input" type="text" placeholder="Seu nome completo" value={nome} onChange={(e) => setNome(e.target.value)} />
            </div>
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gray-dark)', fontWeight: 500, marginBottom: '0.5rem' }}>Empresa</label>
              <input className="form-input" type="text" placeholder="Nome da sua empresa (opcional)" value={empresa} onChange={(e) => setEmpresa(e.target.value)} />
            </div>
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gray-dark)', fontWeight: 500, marginBottom: '0.5rem' }}>WhatsApp</label>
              <input className="form-input" type="tel" placeholder={brand.whatsappDisplay} value={telefone} onChange={(e) => setTelefone(e.target.value)} />
            </div>
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gray-dark)', fontWeight: 500, marginBottom: '0.5rem' }}>Serviço de interesse</label>
              <select className="form-input" value={servico} onChange={(e) => setServico(e.target.value)} style={{ appearance: 'none' }}>
                <option value="">Selecione um serviço</option>
                {serviceOptions.map((option) => <option key={option} value={option}>{option}</option>)}
              </select>
            </div>
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gray-dark)', fontWeight: 500, marginBottom: '0.5rem' }}>Mensagem</label>
              <textarea className="form-input" placeholder="Conte brevemente sobre seu projeto ou necessidade..." value={mensagem} onChange={(e) => setMensagem(e.target.value)} />
            </div>

            <button className="btn-primary" style={{ width: '100%' }} onClick={handleSubmit}>
              Enviar pelo WhatsApp
            </button>
            <p style={{ fontSize: '0.75rem', color: 'var(--gray-mid)', fontWeight: 300, marginTop: '0.75rem', textAlign: 'center' }}>
              Ao enviar, você será direcionado ao WhatsApp para confirmar.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
