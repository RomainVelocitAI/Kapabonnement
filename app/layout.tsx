import type { Metadata } from 'next'
import { Montserrat, Inter, Lora } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const lora = Lora({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-lora',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Kapabonnement',
  description: 'Kapabonnement - Votre solution digitale',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${montserrat.variable} ${inter.variable} ${lora.variable} ${montserrat.className}`}>
        <Header />
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  )
}