import React from 'react'
import systemDiagram from '../assets/system-diagram.png'

const OurSystem = () => {
  return (
    <>
      <section>
        <h2 className=' text-center text-3xl font-bold pb-10 text-sky-800'>
          Our System
        </h2>
        <img src={systemDiagram} alt='system diagram' />
      </section>
      <section className='mt-16'>
        <div className='bg-sky-800 p-10'>
          <div className='text-2xl font-bold pb-2'>High distance sensors</div>
          <p className='text-white'>
            Our sensor uses LoraWAN, an RF for long range transmission to reach
            far away places
          </p>
        </div>
        <div className='bg-sky-500 p-10'>
          <div className='text-2xl font-bold pb-2'>Safety for people</div>
          <p className='text-white'>
            Our system ensures safety for people who lives near river bank or
            just go for tourism
          </p>
        </div>
        <div className='bg-sky-800 p-10'>
          <div className='text-2xl font-bold pb-2'>Data anywhere</div>
          <p className='text-white'>
            Since it mixes RF transmission with 4G transmission, our system can
            upload the data to be available anywhere, anytime
          </p>
        </div>
      </section>
    </>
  )
}

export default OurSystem
