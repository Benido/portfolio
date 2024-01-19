import type { Metadata } from 'next';
import { Roboto_Condensed } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Providers } from './providers'

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
    //suppressHydrationWarning necessary with Next Theme so React doen't send message if server and client render different content
      <html lang="en" suppressHydrationWarning>
        <body className={`${roboto.className} min-h-screen flex flex-col`}>
          <Providers>
            <Header />
            {children}
            <Footer />
          </Providers>
          </body>
      </html>    
  )
}
