import Link from 'next/link'
import Image from 'next/image'
import Logo from './nex-logo.png'

export default function Navbar() {
  return (
    <nav>
      <Image
        src={Logo}
        alt='Nex Help Desk logo'
        width={70}
        placeholder='blur'
        quality={100}
      />
      <h1>Nex Helpdesk</h1>
      <Link href="/">Tela Inicial</Link>
      <Link href="/tickets">Chamados</Link>
    </nav>
  )
}