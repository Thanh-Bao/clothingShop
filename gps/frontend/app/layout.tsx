
import { Navibar } from '@/components/Navibar'
import SocialButtons from '@/components/SocialButton'
import { FooterSitemapLinks } from '@/components/footer1'
import { CartProvider } from '@/styles/CartContext'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My App',
  description: 'This is the best app created',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative -z-50'>
      <CartProvider>
        <Navibar/>
        {children}
        <SocialButtons/>
        <FooterSitemapLinks/>
      </CartProvider>
      </body>
    </html>
  )
}
