import React from 'react'
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className='w-[100%]'>
      <h1 className='text-text'>bem vindos pussyrs</h1>

      <div>
        <Link to='/signin'>
          <button>Entrar</button>
        </Link>
        
        <Link to='/signup'>
          <button>Cadastrar</button>
        </Link>
      </div>
    </div>
  )
}
