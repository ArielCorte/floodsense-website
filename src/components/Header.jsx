import React from 'react'
import LogoImg from './LogoImg'

const Header = () => {
  return (
    <header className='bg-sky-100 w-full py-12 mb-12 md:flex md:items-center md:justify-between md:px-24'>
      <div className='hidden md:block text-5xl font-display text-sky-800'>
        Secured, sensed rivers
      </div>
      <div className='px-12'>
        <LogoImg />
      </div>
    </header>
  )
}

export default Header
