import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import { brand } from '@/content/site'

export const metadata: Metadata = {
  title: `${brand.name} - ${brand.tagline} | Designer Gráfico Pelotas`,
  description:
    `${brand.tagline}. ${brand.description} ${brand.region}.`,
  keywords: [
    'designer em Pelotas',
    'designer gráfico Pelotas',
    'identidade visual Pelotas',
    'artes para redes Pelotas',
    'consultoria de design Pelotas',
    'materiais gráficos Pelotas',
    'comunicação visual Pelotas RS',
  ],
  openGraph: {
    title: `${brand.name} - ${brand.tagline}`,
    description: `Design profissional para empresas que querem crescer. ${brand.region}.`,
    type: 'website',
    locale: 'pt_BR',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        <main>{children}</main>
        <WhatsAppFloat />
      </body>
    </html>
  )
}
