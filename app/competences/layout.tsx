import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rémi BESNIÉ, compétences',
  description: 'Voici les compétences que je met en avant',
}

export default function CompetencesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className='container flex grow flex-col items-start px-4 py-24 mx-auto'>{children}</section>
  )
}
