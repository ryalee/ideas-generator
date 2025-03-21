import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebase.js';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Bem vindo de volta!');
      navigate('/');
    } catch (error) {
      alert('Erro ao fazer login.')
      console.error(error)
    }
  };

  return (
    <div>
      <h3>Já possui uma conta?</h3>
      <h1>Entrar</h1>

      <form onSubmit={handleLogin}>
        <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
        <input type="password" placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)} required/>

        <button type="submit">Vamos lá</button>
      </form>

      <p>Ainda não possui uma conta?<Link to="/signup">Cadastre-se!</Link></p>
    </div>
  )
}

export default SignIn;