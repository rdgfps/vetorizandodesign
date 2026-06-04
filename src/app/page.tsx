import Link from 'next/link'
import Footer from '@/components/Footer'
import ServiceIcon from '@/components/ServiceIcon'
import {
  brand,
  differentials,
  instagramTiles,
  projects,
  services,
  stats,
  testimonials,
  whatsappLink,
} from '@/content/site'

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3)

  return (
    <>
      <section className="hero-section" style={{ minHeight: 'calc(100vh - 72px)', background: 'var(--navy)', position: 'relative', display: 'flex', alignItems: 'center', overflow: 'hidden', marginTop: 72 }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,164,0,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,164,0,0.04) 1px,transparent 1px)', backgroundSize: '80px 80px', pointerEvents: 'none' }} />
        <div className="hero-grid" style={{ maxWidth: 1200, margin: '0 auto', padding: '6rem 2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center', width: '100%' }}>
          <div>
            <p className="section-label fade-up" style={{ color: 'var(--gold)' }}>{brand.region}</p>
            <h1 className="fade-up delay-100" style={{ fontSize: 'clamp(2.5rem,4.5vw,3.75rem)', color: 'white', fontWeight: 700, marginBottom: '1.5rem', lineHeight: 1.1 }}>
              Sua marca precisa<br />ser <span style={{ color: 'var(--gold)' }}>lembrada.</span>
            </h1>
            <p className="fade-up delay-200" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.05rem', fontWeight: 300, lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: 480 }}>
              Design estratégico para empresas que entendem que a aparência profissional não é custo - é investimento.
            </p>
            <div className="fade-up delay-300" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-primary">Solicitar Orçamento</a>
              <Link href="/portfolio" className="btn-outline">Ver Portfólio</Link>
            </div>
          </div>

          <div className="fade-up delay-200" style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: 360 }}>
              <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,164,0,0.2)', borderRadius: 8, padding: '2rem' }}>
                <p style={{ fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem', fontWeight: 400 }}>Projeto Recente</p>
                <div style={{ background: 'white', borderRadius: 6, padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 120, marginBottom: '1.5rem' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.6rem', fontWeight: 700, color: 'var(--navy)' }}>{featuredProjects[0]?.logoText}</div>
                    <div style={{ fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 400, marginTop: 4 }}>{featuredProjects[0]?.logoSub}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ background: 'rgba(255,164,0,0.12)', color: 'var(--gold)', fontSize: '0.7rem', padding: '0.25rem 0.6rem', borderRadius: 2, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500 }}>{featuredProjects[0]?.catLabel}</span>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22C55E', boxShadow: '0 0 0 3px rgba(34,197,94,0.2)' }} />
                </div>
              </div>
              <div className="hero-stat-badge" style={{ position: 'absolute', top: -24, right: -24, background: 'rgba(6,21,37,0.95)', border: '1px solid rgba(255,164,0,0.3)', borderRadius: 6, padding: '1rem 1.25rem' }}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 700, color: 'var(--gold)' }}>{stats[0][0]}</div>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{stats[0][1]}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="responsive-section" style={{ background: 'var(--gray-light)', padding: '7rem 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
          <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <p className="section-label">Sobre a {brand.name}</p>
              <h2 style={{ fontSize: 'clamp(1.8rem,3vw,2.5rem)', color: 'var(--navy)', fontWeight: 700, marginBottom: '1.5rem' }}>Design que constrói marcas com propósito</h2>
              <p style={{ color: 'var(--gray-mid)', fontSize: '0.975rem', fontWeight: 300, lineHeight: 1.9, marginBottom: '1.25rem' }}>
                A {brand.name} nasce da convicção de que toda empresa merece uma identidade visual que a represente com seriedade. Atuamos em {brand.region} com foco em entregar soluções de design que geram resultado real.
              </p>
              <p style={{ color: 'var(--gray-mid)', fontSize: '0.975rem', fontWeight: 300, lineHeight: 1.9, marginBottom: '2rem' }}>
                Não vendemos arquivos. Entregamos marcas que comunicam, posicionam e convertem - desde o primeiro contato do seu cliente com a sua empresa.
              </p>
              <Link href="/sobre" className="btn-primary" style={{ display: 'inline-block' }}>Conheça nossa história</Link>
            </div>
            <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              {stats.map(([num, desc]) => (
                <div key={desc} style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 4, padding: '1.75rem', position: 'relative', overflow: 'hidden' }} className="stat-box-accent">
                  <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.5rem', fontWeight: 700, color: 'var(--navy)', lineHeight: 1 }}>{num}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--gray-mid)', marginTop: '0.5rem', letterSpacing: '0.02em' }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="responsive-section" style={{ padding: '7rem 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p className="section-label centered">O que fazemos</p>
            <h2 style={{ fontSize: 'clamp(2rem,3.5vw,2.75rem)', color: 'var(--navy)', fontWeight: 700, marginBottom: '1rem' }}>Soluções criativas em design gráfico</h2>
            <p style={{ color: 'var(--gray-mid)', fontSize: '1rem', fontWeight: 300, maxWidth: 580, margin: '0 auto', lineHeight: 1.8 }}>Do conceito à entrega, cada projeto é tratado com a atenção e o rigor que a sua marca merece.</p>
          </div>
          <div className="cards-grid-3 service-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5px', background: 'var(--border)', border: '1px solid var(--border)' }}>
            {services.map((svc) => (
              <Link key={svc.slug} href="/servicos" style={{ background: 'white', padding: '2.5rem 2rem', cursor: 'pointer', position: 'relative', overflow: 'hidden', transition: 'background 0.35s', display: 'block' }} className="svc-card-line">
                <div style={{ width: 44, height: 44, background: 'rgba(255,164,0,0.1)', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}><ServiceIcon slug={svc.slug} /></div>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', fontWeight: 600, color: 'var(--navy)', marginBottom: '0.75rem' }}>{svc.name}</div>
                <div style={{ fontSize: '0.875rem', color: 'var(--gray-mid)', fontWeight: 300, lineHeight: 1.8 }}>{svc.shortDesc}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--gold)', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 500, marginTop: '1.25rem' }}>Saiba mais →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="responsive-section" style={{ background: 'var(--navy)', padding: '7rem 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '4rem' }}>
            <div>
              <p className="section-label">Portfólio</p>
              <h2 style={{ fontSize: 'clamp(2rem,3.5vw,2.75rem)', color: 'white', fontWeight: 700 }}>Trabalhos que falam<br />por si mesmos</h2>
            </div>
            <Link href="/portfolio" className="btn-outline">Ver todos os projetos</Link>
          </div>
          <div className="cards-grid-3 portfolio-preview-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1px', background: 'rgba(255,255,255,0.08)' }}>
            {featuredProjects.map((p) => (
              <div key={p.name} style={{ background: 'var(--navy)', padding: '2.5rem', cursor: 'pointer' }}>
                <div style={{ height: 140, borderRadius: 4, marginBottom: '1.5rem', background: p.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.6rem', fontWeight: 700, color: 'rgba(255,255,255,0.9)' }}>{p.logoText}</div>
                    <div style={{ fontSize: '0.55rem', letterSpacing: '0.3em', color: 'var(--gold)', marginTop: 4 }}>{p.logoSub}</div>
                  </div>
                </div>
                <div style={{ fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.5rem' }}>{p.catLabel}</div>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', color: 'white', marginBottom: '0.35rem', fontWeight: 600 }}>{p.name}</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)', fontWeight: 300 }}>{p.type}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="responsive-section" style={{ padding: '7rem 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p className="section-label centered">Por que a {brand.name}</p>
            <h2 style={{ fontSize: 'clamp(2rem,3.5vw,2.75rem)', color: 'var(--navy)', fontWeight: 700, marginBottom: '1rem' }}>Diferenciais que fazem<br />a diferença</h2>
            <p style={{ color: 'var(--gray-mid)', fontSize: '1rem', fontWeight: 300, maxWidth: 580, margin: '0 auto', lineHeight: 1.8 }}>Não somos mais uma agência. Somos parceiros de imagem que entendem o seu negócio.</p>
          </div>
          <div className="two-col-grid differentials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '2rem' }}>
            {differentials.map((d) => (
              <div key={d.num} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '3rem', fontWeight: 700, color: 'rgba(255,164,0,0.15)', lineHeight: 1, flexShrink: 0, width: 60, textAlign: 'right' }}>{d.num}</div>
                <div>
                  <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', fontWeight: 600, color: 'var(--navy)', marginBottom: '0.5rem' }}>{d.title}</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--gray-mid)', fontWeight: 300, lineHeight: 1.8 }}>{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="responsive-section" style={{ background: 'var(--navy)', padding: '7rem 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="section-label centered">Acompanhe no Instagram</p>
            <h2 style={{ fontSize: 'clamp(2rem,3.5vw,2.75rem)', color: 'white', fontWeight: 700, marginBottom: '1rem' }}>Trabalhos, bastidores<br />e inspirações</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', fontWeight: 300, maxWidth: 480, margin: '0 auto' }}>Veja de perto a qualidade e o cuidado em cada projeto.</p>
          </div>
          <div className="instagram-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 3, marginBottom: '2rem' }}>
            {instagramTiles.map((label) => (
              <div key={label} style={{ aspectRatio: '1', background: 'rgba(255,255,255,0.05)', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, color: 'rgba(255,255,255,0.08)', fontSize: '0.7rem', textAlign: 'center', padding: '0.5rem' }}>{label}</span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a href={brand.instagramUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">Ver Instagram</a>
            <a href={brand.instagramUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">{brand.instagramHandle}</a>
          </div>
        </div>
      </section>

      <section className="responsive-section" style={{ padding: '7rem 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p className="section-label centered">Depoimentos</p>
            <h2 style={{ fontSize: 'clamp(2rem,3.5vw,2.75rem)', color: 'var(--navy)', fontWeight: 700, marginBottom: '1rem' }}>O que nossos clientes dizem</h2>
            <p style={{ color: 'var(--gray-mid)', fontSize: '1rem', fontWeight: 300, maxWidth: 480, margin: '0 auto' }}>A credibilidade da {brand.name} é construída pelos resultados dos nossos clientes.</p>
          </div>
          <div className="cards-grid-3 testimonials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem' }}>
            {testimonials.map((d) => (
              <div key={d.nome} style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 4, padding: '2rem', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '1rem', right: '1.5rem', fontFamily: 'Playfair Display, serif', fontSize: '4rem', color: 'var(--gold)', opacity: 0.2, lineHeight: 1 }}>"</div>
                <p style={{ fontSize: '0.9rem', color: 'var(--gray-mid)', fontWeight: 300, lineHeight: 1.8, marginBottom: '1.5rem', fontStyle: 'italic' }}>{d.texto}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(6,21,37,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Playfair Display, serif', fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy)' }}>{d.initials}</div>
                  <div>
                    <div style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--navy)' }}>{d.nome}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--gray-mid)', fontWeight: 300 }}>{d.cargo}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--navy)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,164,0,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,164,0,0.03) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="cta-inner" style={{ position: 'relative', textAlign: 'center', maxWidth: 700, margin: '0 auto', padding: '6rem 2rem' }}>
          <p className="section-label centered">Próximo passo</p>
          <h2 style={{ fontSize: 'clamp(2rem,4vw,3.25rem)', color: 'white', marginBottom: '1rem' }}>Pronto para elevar<br />sua marca?</h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 300, marginBottom: '2.5rem', fontSize: '1.05rem' }}>Vamos conversar sobre o seu projeto. O primeiro contato é sem compromisso - e pode ser o início de algo que transforma o seu negócio.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={whatsappLink('Olá! Gostaria de conversar sobre minha marca.')} target="_blank" rel="noopener noreferrer" className="btn-primary">Falar pelo WhatsApp</a>
            <Link href="/contato" className="btn-outline">Outras formas de contato</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
