import React from 'react'

const Header = () => {
  return (
    <header className='w-full h-20 bg-gray-200 flex justify-between items-center px-4'>
    <a href='/'><h1 className='text-2xl text-gray-600'>Space X</h1></a>

   <nav className='flex gap-4'>
        <a href='/' className='text-lg text-gray-600 hover:text-blue-700'>Home</a>
        <a href='/about' className='text-lg text-gray-600 hover:text-blue-700'>About</a>
        <a href='/contact' className='text-lg text-gray-600 hover:text-blue-700'>Contact </a>

   </nav>


    </header>
  )
}

export default Header
