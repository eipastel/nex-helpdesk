import Link from "next/link";

export default function NotFound() {
  return (
    <main className="text-center">
        <h2 className="text-3xl">Houve um problema.</h2>
        <p>Não encontramos a página que você está procurando.</p>
        <p>Retornar para a <Link href={"/"}>Tela Inicial</Link></p>
    </main>
  )
}
