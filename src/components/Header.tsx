import React from 'react'
import Greeting from './Greeting';
import { CgLock } from 'react-icons/cg';

export default function Header() {
  return (
    <header className='absolute py-2 border-b-2 w-[100%] flex items-center'>
      <h1 className='ml-[20%] text-[14pt] title'>{<Greeting/>} userName! O que iremos produzir hoje?</h1>
      
      <div className='flex flex-col ml-[35%]'>
        <CgLock className='absolute text-[20pt] flex justify-center text-secondary top-5'/>
        <button className='bg-slate-500 p-5 text-slate-200 rounded-[10%]'>Baixe nosso app</button>
        <p>(disponível em breve)</p>
      </div>
    </header>
  )
}
