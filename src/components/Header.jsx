import React from 'react';

const Header = () => (
  <header className='w-full h-20 bg-red-200 flex justify-between items-center px-4'>
    <div className='flex items-center gap-2'>
      <img src='/images/Logomark.png' alt='Logo' />
      <a href='/'><h3 className='text-2xl text-gray-600'>Ecommerce</h3></a>
    </div>
    
    <div className='flex items-center gap-9 ml-16'> 
      <nav className='flex space-x-4'>
        <a href='/' className='text-lg text-gray-600 hover:text-blue-700'>Home</a>
        <a href='/categories' className='text-lg text-gray-600 hover:text-blue-700'>Categories</a>
        <a href='/about' className='text-lg text-gray-600 hover:text-blue-700'>About</a>
        <a href='/contact' className='text-lg text-gray-600 hover:text-blue-700'>Contact</a>
      </nav>
    </div>
  </header>
);

export default Header;
