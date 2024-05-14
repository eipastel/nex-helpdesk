import { SignupFormSchema } from '@/app/lib/definitions'
import { deleteSession } from '@/app/lib/session'

export async function signup(state, formData) {

    const validatedFields = SignupFormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
      })
   
    // Prepara e valida as informações para enviar pro banco
    const { name, email, password } = validatedFields.data
    
    // Caso a validação não funcione
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    // Cria o hash da senha
    const hashedPassword = await bcrypt.hash(password, 10)
   
    // aqui-------------------------------
    // Faz a requisição para API <- DEVE SER FEITO AQUI!!
    let allUsers = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
    let userAlreadyExists = false;

    for (const user of allUsers) {
        if(user.email === newUser.email) {
            userAlreadyExists = true;
            break;
        }
    }

    if(!userAlreadyExists) {
        allUsers.push(newUser);
        localStorage.setItem('users', JSON.stringify(allUsers));
        alert("Usuário cadastrado com sucesso!");
    } else {
        alert("Usuário já cadastrado!");
    }
    // aqui-------------------------------

    router.push('/');

    // AINDA FALTA:

    // 1. CRIAR A SESSÃO DO USUÁRIO

    // 2. REDIRECIONAR O USUÁRIO
}

export async function logout() {
  deleteSession()
  redirect('/login')
}