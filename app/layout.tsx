import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import DiscountNotification from './components/DiscountNotification.tsx/DiscountNotification'
import Header from './components/header/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fashion Ecommerce',
  description: 'Landing page for a fashion ecommerce site used as a demo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">      
      <body className={inter.className}>
        <DiscountNotification />
        <Header />
        {children}
      </body>
    </html>
  )
}
