import { useState } from 'react'
import ReactDom from 'react-dom'
import LogoImg from './LogoImg'

const ImgModal = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className='cursor-pointer' onClick={() => setIsOpen(true)}>
        {children}
      </div>
      {isOpen
        ? ReactDom.createPortal(
            <div
              className=' fixed top-0 left-0 flex w-full h-full bg-slate-600/60 justify-center items-center'
              onClick={() => setIsOpen(false)}>
              <div
                className='bg-white p-10 rounded-2xl relative w-10/12 md:w-fit'
                onClick={(e) => e.stopPropagation()}>
                <div
                  className='absolute bg-sky-800 text-white p-2 leading-none top-4 right-4 rounded cursor-pointer'
                  onClick={() => setIsOpen(false)}>
                  X
                </div>
                {children}
              </div>
            </div>,
            document.getElementById('portal')
          )
        : null}
    </>
  )
}

export default ImgModal
