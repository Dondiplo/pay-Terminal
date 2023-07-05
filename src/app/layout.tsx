import './globals.css'
import { Inter } from 'next/font/google'
import Nav from '../components/nav'

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
      <Nav/>
        {children}</body>
    </html>
  )
}