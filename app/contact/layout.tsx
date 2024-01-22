import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rémi BESNIÉ, contact',
  description: 'Échangeons !',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className='container container-flex-centered'>{children}</section>
  )
}
