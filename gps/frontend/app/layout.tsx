import { Navibar } from '@/components/Navibar'
import SocialButtons from '@/components/SocialButton'
import { FooterSitemapLinks } from '@/components/footer1'
import { CartProvider } from '@/styles/CartContext'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Thiết bị định vị ô tô, xe máy, phụ kiện nội thất ô tô',
  description: 'thanhconggps.com',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       {/* add this */}
      <head>
        <link rel='icon' href='/logo.png'/>
      </head>
      
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

