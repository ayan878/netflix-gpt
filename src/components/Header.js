import React from 'react'
import Logo from "../assets/Netflix_Logo_PMS.png"
function Header() {
  return (
    <header className='absolute px-8 py-2 bg-gradient-to-b from-black'>
      <img  className="w-40  ml-4" src={Logo} alt='Logo' />
    </header>
  );
}

export default Header