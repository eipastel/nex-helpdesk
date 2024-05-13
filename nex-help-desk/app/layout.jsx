import './globals.css'
import { Rubik } from 'next/font/google'

// components
import Navbar from './components/Navbar'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: 'Nex Help Desk',
  description: 'Criado por Thiago Diogo',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={rubik.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
