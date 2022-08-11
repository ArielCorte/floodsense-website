import React from 'react'
import systemDiagram from '../assets/system-diagram.png'

const SystemGrid = () => {
  return (
    <section id='our-system'>
      <h2 className=' text-center text-3xl font-bold pb-10 text-sky-800 font-display'>
        Nuestro sistema
      </h2>
      <div className='grid grid-cols-3 grid-rows-2 grid-flow-col items-center'>
        <div className='pl-24'>
          <h3 className='text-2xl font-bold row-span-1'>Receptor</h3>
          <ul>
            <li>-Panel Solar</li>
            <li>-Bateria independiente</li>
            <li>-Display de relevamiento</li>
            <li>-Transmisión 4G</li>
          </ul>
        </div>
        <div className='pl-24'>
          <h3 className='text-2xl font-bold row-span-1'>
            Flotadores reed switch
          </h3>
          <ul>
            <li>-Larga duración</li>
            <li>-Confiables</li>
            <li>-Display de relevamiento</li>
          </ul>
        </div>
        <img
          src={systemDiagram}
          alt='system diagram'
          className='m-auto row-span-full'
        />
        <div className='pl-24'>
          <h3 className='text-2xl font-bold row-span-1'>Transmisor</h3>
          <ul>
            <li>-RF Lora para largas distancias</li>
            <li>-Diferentes niveles de relevamiento</li>
            <li>-Instalación segura</li>
            <li>-Medición 24/7</li>
          </ul>
        </div>
        <div className='pl-24'>
          <h3 className='text-2xl font-bold row-span-1'>
            Materiales de calidad
          </h3>
          <ul>
            <li>-Sensores de última tecnología</li>
            <li>-Transmisión codificada</li>
            <li>-Resistente al mal clima</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default SystemGrid
