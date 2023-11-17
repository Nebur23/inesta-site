import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import './globals.css'
import Link from 'next/link'



const urbanist = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'inesta',
  description: 'inesta',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  
  return (
    <html lang="en">
      <body className={urbanist.className}>
      {/* tu vas ajouter le navbar component ici */}
      <nav>This is a navabar <Link  href="/femme" >Femme</Link> </nav>
        {children}
      {/* tu vas ajouter le footer component ici */}  
      <footer>This a footer</footer>
        </body>
    </html>
  )
}
