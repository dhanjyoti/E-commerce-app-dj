import React from 'react'
import { Link } from 'react-router-dom'
import { GrCart } from "react-icons/gr";

const Navbar = () => {
  return (
    <div>
        <ul className='flex items-center gap-[76px]'>
            <li className='visited:inline-block text-7 font-medium hover:text-[#a647ff]'>
                <Link to="/">Home</Link>
            </li>
            <li className='visited:inline-block text-7 font-medium hover:text-[#a647ff]'>
                <Link to="/about">About</Link>
            </li>
            <li className='visited:inline-block text-7 font-medium hover:text-[#a647ff]'>
                <Link to="/products">Products</Link>
            </li>
            <li className='visited:inline-block text-7 font-medium hover:text-[#a647ff]'>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
                <Link to="/cart" className='flex items-center gap-2 relative'>
                    <GrCart className='relative hover:text-[#a647ff]'/>
                    <span className='absolute w-4 h-4 text-[10px] text-white font-medium top-[-20%] left-[70%] bg-[#9c33ff] grid place-items-center rounded-[50%]'>20</span>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar