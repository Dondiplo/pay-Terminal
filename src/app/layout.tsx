import './globals.css'
import { Inter } from 'next/font/google'

import Hero2 from '@/components/hero2'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'pay terminal',
  description: ' a payment service app for you.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en">
      <body className={inter.className}>
    
        {children}
        <Hero2/>
        </body>
    </html>
  )
}
