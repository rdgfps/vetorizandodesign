import Link from 'next/link'
import { brand, navLinks, services, whatsappLink } from '@/content/site'

export default function Footer() {
  return (
    <footer style={{ background: 'rgba(6,21,37,0.98)', borderTop: '1px solid rgba(255,164,0,0.1)' }}>
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '4rem 2rem 2rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '3rem',
        }}
      >
        <div>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div
              style={{
                width: 32,
                height: 32,
                background: 'var(--gold)',
                borderRadius: 4,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'Playfair Display, serif',
                fontWeight: 700,
                fontSize: 16,
                color: 'var(--navy)',
              }}
            >
              {brand.initials}
            </div>
            <div>
              <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', fontWeight: 600, color: 'white' }}>
                {brand.name}
              </div>
              <span style={{ fontSize: '0.65rem', color: 'var(--gold)', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 300 }}>
                {brand.tagline}
              </span>
            </div>
          </Link>
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.85rem', fontWeight: 300, lineHeight: 1.8, maxWidth: 260 }}>
            {brand.description} {brand.region}.
          </p>
        </div>

        <div>
          <h5 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1.25rem' }}>
            Navegação
          </h5>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} style={{ display: 'block', fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', marginBottom: '0.6rem', fontWeight: 300 }}>
              {link.label}
            </Link>
          ))}
        </div>

        <div>
          <h5 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1.25rem' }}>
            Serviços
          </h5>
          {services.map((service) => (
            <Link key={service.slug} href="/servicos" style={{ display: 'block', fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', marginBottom: '0.6rem', fontWeight: 300 }}>
              {service.name}
            </Link>
          ))}
        </div>

        <div>
          <h5 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1.25rem' }}>
            Contato
          </h5>
          <a href={whatsappLink('Olá! Vim pelo site e gostaria de solicitar um orçamento.')} target="_blank" rel="noopener noreferrer" style={{ display: 'block', fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', marginBottom: '0.6rem', fontWeight: 300 }}>WhatsApp</a>
          <a href={brand.instagramUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'block', fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', marginBottom: '0.6rem', fontWeight: 300 }}>Instagram</a>
          <Link href="/contato" style={{ display: 'block', fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', marginBottom: '0.6rem', fontWeight: 300 }}>Formulário</Link>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.25)', marginTop: '0.75rem', fontWeight: 300 }}>{brand.region}</p>
        </div>
      </div>

      <div
        className="footer-bottom"
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '1.5rem 2rem',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.5rem',
        }}
      >
        <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.25)', fontWeight: 300 }}>
          © {new Date().getFullYear()} {brand.name} - {brand.tagline}. Todos os direitos reservados.
        </p>
        <a
          className="footer-credit-link"
          href={brand.developerUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.25)', fontWeight: 300 }}
        >
          {brand.developerCredit}
        </a>
      </div>
    </footer>
  )
}
