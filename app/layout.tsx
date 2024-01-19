import type { Metadata } from 'next';
import { Roboto_Condensed } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

const roboto = Roboto_Condensed({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rémi BESNIÉ, développeur web',
  description: 'Bienvenue sur mon portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} min-h-screen flex flex-col`}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  )
}
