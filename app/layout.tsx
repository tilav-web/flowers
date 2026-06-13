import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import ScrollProgress from './components/ScrollProgress'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Gullar Olami — Toshkentning eng chiroyli gul do\'koni',
  description: 'Yangi va nafis gul dastalar. Sevgingizni chiroyli gullar orqali ifodalang. Toshkent bo\'ylab 2-3 soat ichida yetkazib beramiz.',
  keywords: 'gullar, gul dasta, Toshkent, gul do\'kon, atirgul, lola, buyurtma',
  openGraph: {
    title: 'Gullar Olami',
    description: 'Har bir lahza uchun chiroyli gullar',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uz" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">
        <ScrollProgress />
        {children}
      </body>
    </html>
  )
}
