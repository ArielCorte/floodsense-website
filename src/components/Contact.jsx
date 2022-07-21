import React from 'react'

const Contact = () => {
  return (
    <section>
      <h2 className=' text-center text-3xl font-bold py-10 text-sky-800'>
        Contact
      </h2>
      <form
        className=' bg-sky-800 flex items-center flex-col gap-4 p-10 w-10/12 md:w-8/12 m-auto rounded-2xl mb-10'
        action=''>
        <input
          className=' bg-sky-500 text-white w-full placeholder:text-zinc-500 p-2 rounded'
          type='text'
          placeholder='Your email'
        />
        <input
          className=' bg-sky-500 text-white w-full placeholder:text-zinc-500 p-2 rounded'
          type='text'
          placeholder='Subject'
        />
        <textarea
          className=' bg-sky-500 text-white w-full min-h-[10rem] placeholder:text-zinc-500 p-2 rounded focus:'
          name=''
          id=''
          cols='30'
          rows='10'
          placeholder='Your message'></textarea>
        <input
          className='bg-white text-sky-800 px-10 py-2 active:bg-zinc-400 duration-75 rounded-lg'
          type='submit'
          value='Send'
        />
      </form>
    </section>
  )
}

export default Contact
