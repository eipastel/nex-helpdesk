import { Button } from 'primereact/button';

import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'

export default function ConfirmButton() {

    const { pending } = useFormStatus();

    return (
        <button aria-disabled={pending} type="submit"
            className="p-button-raised p-button-rounded p-button-primary">
                {pending ? 'Carregando...' : 'Confirmar'}
        </button>
    )
}