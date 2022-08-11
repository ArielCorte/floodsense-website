import React, { useEffect, useRef } from 'react'
import Waves from './Waves'
import SystemGrid from './SystemGrid'

const OurSystem = () => {
  return (
    <>
      <SystemGrid />
      <section className='mt-16'>
        <div className='text-sky-800'>
          <Waves />
        </div>
        <div className='bg-sky-800 px-10 pb-10'>
          <div className='text-2xl font-bold pb-2 font-display'>
            Sensores de alta distancia
          </div>
          <p className='text-white'>
            Nuestro sensor utiliza LoraWAN, un módulo RF para transmisión de
            largas distancias para llegar a lugares lejanos
          </p>
        </div>
        <div className='bg-sky-500 p-10'>
          <div className='text-2xl font-bold pb-2 font-display'>
            Seguridad para las personas
          </div>
          <p className='text-white'>
            Nuestro sistema asegura la protección de las personas que viven
            cerca del río o que sólo va por turismo
          </p>
        </div>
        <div className='bg-sky-800 px-10 pt-10'>
          <div className='text-2xl font-bold pb-2 font-display'>
            Datos en cualquier lugar
          </div>
          <p className='text-white'>
            Debido a que mezclamos transmisión por radiofrecuencia con
            transmisión 4G, nuestro sistema puede subir los datos a la nube para
            que estén disponibles en cualquier lado, a cualquier momento.
          </p>
        </div>
        <div className='text-sky-800'>
          <Waves inv />
        </div>
      </section>
    </>
  )
}

export default OurSystem
