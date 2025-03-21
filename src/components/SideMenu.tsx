import React from 'react';
import { IoAlbumsOutline, IoBookmarkOutline, IoHomeOutline, IoPersonOutline, IoSettingsOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

export default function SideMenu() {
  return (
    <div className='flex flex-col justify-between p-10 border-1 w-[15%] h-[100%] fixed z-10 bg-slate-100 rounded-lg border-r-2'>
      {/* LOGO */}
      <div className='self-center cursor-default flex flex-col'>
        <h1 className='text-[30pt] font-raleway font-regular'>Gen</h1>
        <h1 className='text-[25pt] font-raleway font-regular ml-10 mt-[-20%] flex flex-row items-center'><IoAlbumsOutline className='text-[14pt] text-secondary'/>ideas</h1>
      </div>

      <hr/>
 
      {/* NAV */}
      <nav>
        <ul className='flex flex-col gap-9 font-raleway font-semibold'>
          <li className='menuItem'>
            <IoHomeOutline className='menuIcon'/>
            <Link to='/' className='text-[13pt]'>Home</Link>
          </li>

          <li className='menuItem'>
            <IoBookmarkOutline className='menuIcon'/>
            <Link to="/gallery" className='text-[13pt]'>Galeria</Link>
          </li>

          <li className='menuItem'>
            <IoPersonOutline className='menuIcon'/>
            <Link to="/profile" className='text-[13pt]'>Perfil</Link>
          </li>
        </ul>
      </nav>

      <hr/>

      <div className=''>
        <Link to='/premiumplan' className='hover:text-yellow-400 text-[13pt] text-secondary font-semibold animate-premium'>Premium</Link>
      </div>

      {/* MENU FOOTER */}
      <div className='menuItem'>
        <IoSettingsOutline className='menuIcon'/>
        <Link to="/settings" className='text-[13pt]'>Configurações</Link>
      </div>
    </div>
  )
}