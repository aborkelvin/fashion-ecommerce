
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReduxProvider } from './store/provider'

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
        <ReduxProvider>                    
          {children}          
        </ReduxProvider> 
      </body>
    </html>
  )
}
