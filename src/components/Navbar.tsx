'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { brand, navLinks, whatsappLink } from '@/content/site'

const WA_LINK = whatsappLink()

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: 'rgba(6,21,37,0.96)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255,164,0,0.12)',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 72,
        }}
      >
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ width: 40, height: 40, position: 'relative' }}>
            <Image
              src="/logo-vetorizando.jpeg"
              alt="Logo Vetorizando"
              fill
              style={{ objectFit: 'contain', borderRadius: 6 }}
              priority
            />
          </div>
          <div>
            <div
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: '1.2rem',
                fontWeight: 600,
                color: 'white',
                letterSpacing: '0.02em',
              }}
            >
              {brand.name}
            </div>
            <span
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.7rem',
                color: 'var(--gold)',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                fontWeight: 300,
                display: 'block',
                lineHeight: 1,
                marginTop: 1,
              }}
            >
              {brand.tagline}
            </span>
          </div>
        </Link>

        <div className="hidden md:flex" style={{ alignItems: 'center', gap: '2.5rem' }}>
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                color: pathname === l.href ? 'white' : 'rgba(255,255,255,0.7)',
                fontSize: '0.875rem',
                fontWeight: 400,
                letterSpacing: '0.04em',
                transition: 'color 0.3s',
              }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'var(--gold)',
              color: 'var(--navy)',
              padding: '0.5rem 1.25rem',
              borderRadius: 3,
              fontWeight: 500,
              fontSize: '0.875rem',
              letterSpacing: '0.03em',
              transition: 'background 0.3s',
              whiteSpace: 'nowrap',
            }}
          >
            Solicitar Orçamento
          </a>
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white' }}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div
          style={{
            background: 'var(--navy)',
            borderTop: '1px solid rgba(255,164,0,0.1)',
            padding: '1.5rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: 0,
          }}
        >
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                color: 'rgba(255,255,255,0.75)',
                fontSize: '0.95rem',
                padding: '0.875rem 0',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--gold)', fontSize: '0.95rem', padding: '0.875rem 0' }}
          >
            Solicitar Orçamento →
          </a>
        </div>
      )}
    </nav>
  )
}
