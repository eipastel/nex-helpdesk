"use client"

import { useState } from 'react';
import { signup } from './actions/auth/auth';
import ConfirmButton from '../components/ConfirmButton';

export default function SignUpForm() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [state, actions] = useActionState(signup, undefined);

  return (
    <div>
        <form action={signup}>
            <h2>Registre-se!</h2>

            <div>
              <label for>Nome</label>
              <input 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text" />
            </div>
            {state.errors.name && <p>{state.errors.name}</p>}

            <div>
              <label for>E-mail</label>
              <input 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text" />
            </div>
            {state.errors.email && <p>{state.errors.email}</p>}

            <div>
              <label>Senha</label>
              <input 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password" />
            </div>
            {state.errors.password && (
                <div>
                    <p>Password must:</p>
                    <ul>
                        {state.errors.password.map((error) => (
                        <li key={error}>- {error}</li>
                        ))}
                    </ul>
                </div>)}

            <ConfirmButton />
        </form>
    </div>
  )
}
