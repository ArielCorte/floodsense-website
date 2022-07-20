import React from 'react'
import LogoImg from './LogoImg'

const Gallery = () => {
  return (
    <section>
      <h2 className=' text-center text-3xl font-bold py-10 text-sky-800'>
        Gallery
      </h2>
      <div className='grid gap-4 grid-cols-3 w-10/12 m-auto'>
        <LogoImg />
        <LogoImg />
        <LogoImg />
        <LogoImg />
        <LogoImg />
        <LogoImg />
      </div>
    </section>
  )
}

export default Gallery
