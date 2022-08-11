import React from 'react'

const Navbar = () => {
  return (
    <div className=' h-12 bg-sky-800 text-white flex justify-between items-center px-4 font-display'>
      <div>FloodSense</div>
      <ul className='flex gap-2'>
        <a href='#our-system'>
          <li>Nuestro sistema</li>
        </a>
        <a href='#gallery'>
          <li>Galería</li>
        </a>
        <a href='#contact'>
          <li>Contacto</li>
        </a>
      </ul>
    </div>
  )
}

export default Navbar
