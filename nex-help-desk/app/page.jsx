import Link from 'next/link'

export default function Home() {

  return (
    <main>
      <h2>Tela Inicial</h2>
      <p>Esclarecer dúvidas, relate problemas e dê sugestões de implementações! Estamos aqui para ajudar. Nosso objetivo é garantir que suas experiências com o sistema sejam sempre fluidas e livres de problemas. Explore as opções disponíveis e abra um chamado sempre que houver algo de incorreto no sistema.</p>

      <div className="flex justify-center my-8">
        <Link href="/tickets">
          <button className="btn-primary">Chamados</button>
        </Link>
      </div>

      <h2>Novidades do Sistema</h2>

      <div className="card">
        <h3><strong>Nova funcionalidade:</strong> Relatório de Horas Extras Automático</h3>
        <p>Agora você pode gerar relatórios de horas extras de forma automática no nosso sistema de controle de ponto! Com essa nova funcionalidade, você terá mais agilidade e precisão na gestão do tempo de trabalho da sua equipe. Basta acessar a seção de relatórios e selecionar a opção de horas extras automáticas para visualizar e exportar os dados. Simplificamos ainda mais o seu dia a dia com essa atualização!</p>
      </div>
      <div className="card">
        <h3><strong>Novidade:</strong> Lançamento do Sistema de Chamados!</h3>
        <p>Estamos felizes em anunciar que o nosso sistema de chamados está oficialmente pronto e disponível para uso! Agora você pode abrir chamados, relatar problemas e solicitar suporte técnico de forma rápida e conveniente através do Nex Help Desk. Com esta nova ferramenta, estamos mais preparados do que nunca para resolver suas questões e garantir uma experiência de suporte excepcional para todos os nossos clientes. Experimente agora mesmo e nos informe sobre sua experiência!</p>
      </div>
    </main>
  )
}
