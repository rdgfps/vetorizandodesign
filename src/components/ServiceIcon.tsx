type ServiceIconProps = {
  slug: string
  size?: number
}

export default function ServiceIcon({ slug, size = 22 }: ServiceIconProps) {
  const common = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'var(--gold)',
    strokeWidth: 1.5,
    width: size,
    height: size,
  }

  if (slug === 'artes-para-redes') {
    return (
      <svg {...common}>
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    )
  }

  if (slug === 'materiais-graficos') {
    return (
      <svg {...common}>
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      </svg>
    )
  }

  if (slug === 'comunicacao-visual') {
    return (
      <svg {...common}>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    )
  }

  if (slug === 'logotipos') {
    return (
      <svg {...common}>
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
      </svg>
    )
  }

  if (slug === 'consultoria-design') {
    return (
      <svg {...common}>
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    )
  }

  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="3" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  )
}
