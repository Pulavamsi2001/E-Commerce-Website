import React, { useState } from 'react'
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
        <nav className='bg-gray-800 p-4'>
            <div className='container mx-auto flex justify-between items-center'>
                <div>
                    <a href='/' className='text-white text-2xl font-bold'>E-Commerce App</a>
                </div>
                <div className='flex-grow mx-4 flex items-center'>
                    <div className='relative w-full'>
                        <input 
                            type='text' 
                            placeholder='Search...' 
                            className='w-full p-2 rounded bg-gray-700 text-white pl-10'
                        />
                        <FaSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-white' />
                    </div>
                    <button className='ml-2 p-2 bg-blue-500 text-white rounded'>
                        Search
                    </button>
                </div>
                <div className='block lg:hidden'>
                    <button onClick={toggleMenu} className='text-white'>
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
                <div className={`lg:flex ${isOpen ? 'block' : 'hidden'} w-full lg:w-auto`}>
                    <ul className='flex flex-col lg:flex-row'>
                        <li>
                            <a href='/' className='text-white p-2'>Home</a>
                        </li>
                        <li>
                            <a href='/products' className='text-white p-2 lg:ml-4'>Products</a>
                        </li>
                        <li>
                            <a href='/cart' className='text-white p-2 lg:ml-4'>Cart</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar