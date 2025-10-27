import React from 'react'
import { BiLogoReact } from 'react-icons/bi'

const Footer = () => {
  return (
      <footer className="relative bottom-0 flex flex-col leading-10 w-screen items-center justify-center border-b border-b-gray-800 bg-black/50 px-8 py-6">
        <h3 className='text-gray-300 text-sm'>Copyright &copy; 2025  |  <a href="/" className='bg-gradient-to-r from-blue-300 to-pink-500 bg-clip-text text-transparent opacity-80'>saishnaik.dev</a> </h3>
        
      <div className="flex justify-center align-middle pt-3 gap-2">
        <p className='text-slate-300 text-sm'>Powered by </p>
        <a href="https://react.dev/" target='_blank' className='text-blue-500 flex justify-center align-middle self-center'>
          <BiLogoReact className='text-2xl'/></a>
      </div>
      </footer>
  )
}

export default Footer
