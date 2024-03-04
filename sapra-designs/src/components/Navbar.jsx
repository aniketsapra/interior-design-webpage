import React from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../assets'

function Navbar() {
  return (
    <nav className=" bg-tcmagenta p-4 ">
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        <div className='flex justify-start'>
        <div className='pl-10'>
        <img src={logo}
          width={90}
          height={90}
          alt='logo'
          className='rounded-full'
        /> 
        </div>
        <div className='hidden lg:block mt-2.5 ml-6 text-4xl font-bold font-playfair text-white'>
        Sapra Designs.
        </div>
        </div>
        
        <div className="text-2xl  font-semibold font-playfair">
        <ul className="flex mr-20">
          <li className='mr-6'>
            <Link to="/" className="textnav">Home</Link>
          </li>
          <li className='mr-6'>
            <Link to="/portfolio" className="textnav">Portfolio</Link>
          </li>
          <li className='mr-6'>
            <Link to="/about" className="textnav">About</Link>
          </li>
          <li className='mr-6'>
            <Link to="/contact" className="textnav">Contact</Link>
          </li>
        </ul>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
