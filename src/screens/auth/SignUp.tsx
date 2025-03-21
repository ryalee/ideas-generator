import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebase.js';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
      <div>
        <h3>Vem sempre aqui?</h3>
        <h3>Não??</h3>
      </div>
      <h1>Crie sua conta!</h1>

      <form onSubmit={handleSignUp}>
        <input type="text" placeholder='Nome' value={userName} onChange={(e) => setUserName(e.target.value)} required/>
        <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
        <input type="password" placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)} required/>

        <button type="submit">Vamos lá</button>
      </form>

      <p>Já possui uma conta?<Link to="/signin">Entre aqui</Link></p>
    </div>
  )
}

export default SignUp;