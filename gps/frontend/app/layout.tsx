"use client"
import { Navibar } from '@/components/Navibar'
import SocialButtons from '@/components/SocialButton'
import { FooterSitemapLinks } from '@/components/footer1'
import { CartProvider } from '@/styles/CartContext'
import type { Metadata } from 'next'
import './globals.css'

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

