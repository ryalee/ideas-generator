import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebase.js';
import { useNavigate } from 'react-router-dom';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Sua conta foi criada, seja muito bem vindo! :)');
      navigate('/');
    } catch (error) {
      alert('Erro ao criar conta.')
      console.error(error)
    }
  };

  return (
    <div>
      <h3>Já possui uma conta?</h3>
      <h1>Entrar</h1>

      <form onSubmit={handleSignUp}>
        <input type="text" placeholder='Nome' value={userName} onChange={(e) => setUserName(e.target.value)} required/>
        <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
        <input type="password" placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)} required/>

        <button type="submit">Vamos lá</button>
      </form>

      <p>Ainda não possui uma conta?<a href="/signup">Cadastre-se!</a></p>
    </div>
  )
}

export default SignUp;