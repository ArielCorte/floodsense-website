import React, { useState } from 'react'
import ImgModal from './ImgModal'
import LogoImg from './LogoImg'
import LoraWAN from '../assets/LoraWAN.jpg'
import redDiagram from '../assets/red-diagram.png'
import reedSwitch from '../assets/reed-switch.jpg'
import instalacionDiagrama from '../assets/instalacion-diagrama.png'
import test from '../assets/test.png'
import instalado from '../assets/instalado.png'

const Gallery = () => {
  return (
    <section id='gallery'>
      <h2 className=' text-center text-3xl font-bold py-10 text-sky-800'>
        Gallery
      </h2>
      <div className='grid gap-4 grid-cols-3 w-10/12 md:w-8/12 m-auto'>
        <ImgModal>
          <img src={LoraWAN} alt='' />
        </ImgModal>
        <ImgModal>
          <img src={redDiagram} alt='' />
        </ImgModal>
        <ImgModal>
          <img src={reedSwitch} alt='' />
        </ImgModal>
        <ImgModal>
          <img src={instalacionDiagrama} alt='' />
        </ImgModal>
        <ImgModal>
          <img src={test} alt='' />
        </ImgModal>
        <ImgModal>
          <img src={instalado} alt='' />
        </ImgModal>
      </div>
    </section>
  )
}

export default Gallery
