import React from 'react'

const Navbar = () => {
  return (
    <div className=' h-12 bg-sky-800 text-white flex justify-between items-center px-4'>
      <div>FloodSense</div>
      <ul className='flex gap-2'>
        <li>Our System</li>
        <li>Gallery</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar
