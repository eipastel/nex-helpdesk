"use client"

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function CreateForm() {
  
    const router = useRouter();

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [priority, setPriority] = useState('low');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);

        const newTicket = {
            title,
            body,
            priority,
            user_email: "pastel@pastel.com"
        }

        const res = await fetch("http://localhost:8080/tickets", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newTicket)
        })

        if(res.status === 201) {
            router.refresh()
            router.push("/tickets");
        }
    }
    
    return (
        <form onSubmit={handleSubmit} className='w-1/2'>
            <label>
                <span>Título:</span>
                <input
                    type="text"
                    required
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
            </label>
            <label>
                <span>Conteúdo:</span>
                <textarea
                    required
                    onChange={(e) => setBody(e.target.value)}
                    value={body}
                />
            </label>
            <label>
                <span>Prioridade:</span>
                <select
                    required
                    onChange={(e) => setPriority(e.target.value)}
                    value={priority}
                >
                    <option value="low">Baixa</option>    
                    <option value="medium">Média</option>    
                    <option value="high">Alta</option>    
                </select>
            </label>
            <button
                className='btn-primary'
                disabled={isLoading}
            >
                {isLoading && <span>Adicionando...</span>}
                {!isLoading && <span>Abrir Chamado</span>}
            </button>
        </form>

    )
}
