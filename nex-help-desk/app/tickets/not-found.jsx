import Link from "next/link";

export default function NotFound() {
  return (
    <main className="text-center">
        <h2 className="text-3xl">Não encontrado.</h2>
        <p>Não encontramos o chamado que você está procurando.</p>
        <p>Retornar para todos os <Link href={"/tickets"}>Chamados</Link></p>
    </main>
  )
}
