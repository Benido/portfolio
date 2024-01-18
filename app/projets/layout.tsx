import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rémi BESNIÉ, projets',
  description: 'Voici les projets que j\'ai réalisé',
}

export default function ProjetsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>{children}</section>
  )
}
