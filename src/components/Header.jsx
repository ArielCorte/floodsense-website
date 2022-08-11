import React from 'react'
import LogoImg from './LogoImg'
import Waves from './Waves'

const Header = () => {
  return (
    <>
      <header className='bg-sky-100 w-full py-12 md:flex md:items-center md:justify-between md:px-24'>
        <div className='hidden md:block text-5xl font-display text-sky-800'>
          Ríos medidos y seguros
        </div>
        <div className='px-12'>
          <LogoImg />
        </div>
      </header>
      <div className='text-sky-100'>
        <Waves inv />
      </div>
    </>
  )
}

export default Header
