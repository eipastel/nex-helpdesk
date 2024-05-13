import Link from "next/link";
import TicketUtils from "../utils/TicketUtils";

async function getTickets(url) {
    try {
        const res = await fetch(url, {
            next: {
                revalidate: 5
            }
        });
    
        if (!res.ok) {
            throw new Error('Erro ao obter tickets');
        }
        const tickets = await res.json();
        return tickets;
    } catch (error) {
        console.error('Erro na requisição:', error);
        return [];
    }
}

export default async function TicketList() {

    const url = 'http://localhost:8080/tickets';
    let tickets = await getTickets(url);

    return (
        <>
            {tickets.map((ticket) => (
                <div key={ticket.id} className="card my-5">
                    <Link href={`/tickets/${ticket.id}`}>
                        <h3>{ ticket.title }</h3>
                        <p>{ ticket.body.slice(0,200)}...</p>
                        <div className={`pill ${ticket.priority}`}>
                            { TicketUtils.getPriorityTranslated(ticket.priority) } prioridade
                        </div>
                    </Link>
                </div>
            ))}
            
            {tickets.length === 0 && (
                <p className="text-center">Não tem nenhum chamado aberto!</p>
            )}
        </>
    )
}
