import React, { useState } from 'react'

import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className='sticky top-0 z-50 w-full bg-white shadow-md'>
      <div className='max-w-7xl mx-auto flex items-center justify-between py-4 px-6'>
      <a href="#" className='flex items-center'>
  <span className='text-2xl font-semibold text-gray-800'>Avula Rohith</span>
</a>


        <nav className='hidden md:flex items-center space-x-4'>
          <a href="#about" className='text-gray-600 hover:text-gray-900'>About</a>
          <a href="#projects" className='text-gray-600 hover:text-gray-900'>Projects</a>
          <a href="#testimonials" className='text-gray-600 hover:text-gray-900'>Education</a>
          <a href="#contact" className='text-gray-600 hover:text-gray-900'>Contact</a>
        </nav>

        <button className='md:hidden' onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className='md:hidden'>
          <div className='space-y-2 px-4 py-2'>
            <a href="#about" className='block text-gray-700 hover:bg-gray-200 py-2'>About</a>
            <a href="#projects" className='block text-gray-700 hover:bg-gray-200 py-2'>Projects</a>
            <a href="#testimonials" className='block text-gray-700 hover:bg-gray-200 py-2'>Testimonials</a>
            <a href="#contact" className='block text-gray-700 hover:bg-gray-200 py-2'>Contact</a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
