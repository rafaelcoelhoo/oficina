import type { Metadata, Viewport } from 'next'
import { Barlow, Barlow_Condensed } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { site } from '@/lib/site'
import './globals.css'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-barlow',
  display: 'swap',
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-barlow-condensed',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Oficina de reparação automóvel em ${site.address.city}`,
    template: `%s | ${site.shortName}`,
  },
  description: `Oficina automóvel multimarca em ${site.address.city}. Revisões, diagnóstico eletrónico, travões, embraiagens, pneus, ar condicionado e preparação para inspeção. Orçamento sem compromisso.`,
  keywords: [
    'oficina',
    'mecânico',
    site.address.city,
    'revisão automóvel',
    'diagnóstico',
    'travões',
    'inspeção',
  ],
  openGraph: {
    type: 'website',
    locale: 'pt_PT',
    siteName: site.name,
    url: site.url,
  },
  alternates: { canonical: '/' },
  icons: { icon: '/favicon.svg' },
}

export const viewport: Viewport = {
  themeColor: '#2a3f5f',
  width: 'device-width',
  initialScale: 1,
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  name: site.name,
  telephone: site.phone,
  email: site.email,
  url: site.url,
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    postalCode: site.address.postalCode,
    addressLocality: site.address.city,
    addressCountry: 'PT',
  },
  openingHours: ['Mo-Fr 08:30-12:30', 'Mo-Fr 14:00-19:00', 'Sa 09:00-13:00'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-PT"
      className={`${barlow.variable} ${barlowCondensed.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-3 focus:font-semibold focus:text-accent-foreground"
        >
          Saltar para o conteúdo principal
        </a>
        <SiteHeader />
        <main id="conteudo" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </body>
    </html>
  )
}
