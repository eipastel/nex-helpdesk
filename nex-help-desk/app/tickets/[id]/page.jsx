import TicketUtils from "@/app/utils/TicketUtils";
import { notFound } from 'next/navigation';

export const dynamicParams = true;

export async function generateStaticParams() {
    const res = await fetch("http://localhost:8080/tickets");

    const tickets = await res.json();

    return tickets.map((ticket) => ({
        id: ticket.id
    }));
}

async function getTicket(url) {
    const res = await fetch(url, {
        next: {
            revalidate: 60
        }
    })

    if(!res.ok) {
        notFound();
    }

    return res.json();
}

export default async function TicketDetails({ params }) {

    const id = params.id;
    const url = `http://localhost:8080/tickets/${id}`;
    const ticket = await getTicket(url);
    
    return (
        <>
            <main>
                <nav>
                    <h2>Detalhes do Chamado</h2>
                </nav>
                <div className="card">
                    <h3>{ ticket.title }</h3>
                    <small>Criado por { ticket.user_email }</small>
                    <p>{ ticket.body }</p>
                    <div className={`pill ${ticket.priority}`}>
                        {TicketUtils.getPriorityTranslated(ticket.priority)} prioridade
                    </div>
                </div>
            </main>
        </>
    )
}