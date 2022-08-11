import React from 'react'

const Contact = () => {
  return (
    <section id='contact'>
      <h2 className=' text-center text-3xl font-bold py-10 text-sky-800'>
        Contacto
      </h2>
      <form
        className=' bg-sky-800 flex items-center flex-col gap-4 p-10 w-10/12 md:w-8/12 m-auto rounded-2xl mb-10'
        action='https://formsubmit.co/cortearielformal@gmail.com'
        method='POST'>
        <input
          className=' bg-sky-500 text-white w-full placeholder:text-zinc-500 p-2 rounded'
          placeholder='Tu mail'
          type='email'
          name='email'
          required
        />
        <input
          className=' bg-sky-500 text-white w-full placeholder:text-zinc-500 p-2 rounded'
          type='hidden'
          placeholder='Subject'
          name='_subject'
          value='Submission from Floodsense'
          required
        />
        <textarea
          className=' bg-sky-500 text-white w-full min-h-[10rem] placeholder:text-zinc-500 p-2 rounded focus:'
          name='message'
          id=''
          cols='30'
          rows='10'
          placeholder='Tu mensaje'
          required></textarea>
        <input
          type='hidden'
          name='_next'
          value='https://floodsense.vercel.app'></input>
        <input type='hidden' name='_captcha' value='false'></input>
        <input
          className='bg-white text-sky-800 px-10 py-2 active:bg-zinc-400 duration-75 rounded-lg'
          type='submit'
          value='Enviar'
        />
      </form>
    </section>
  )
}

export default Contact
