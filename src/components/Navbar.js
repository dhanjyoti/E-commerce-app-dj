import React from 'react'
import { Link } from 'react-router-dom'
import { GrCart } from "react-icons/gr";

const Navbar = () => {
  return (
    <div>
        <ul className='flex items-center gap-[76px]'>
            <li className='visited:inline-block text-7 font-medium hover:text-[#9c33ff]'>
                <Link to="/">Home</Link>
            </li>
            <li className='visited:inline-block text-7 font-medium hover:text-[#9c33ff]'>
                <Link to="/about">About</Link>
            </li>
            <li className='visited:inline-block text-7 font-medium hover:text-[#9c33ff]'>
                <Link to="/products">Products</Link>
            </li>
            <li className='visited:inline-block text-7 font-medium hover:text-[#9c33ff]'>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
                <Link to="/cart" className='flex items-center gap-2'>
                    <GrCart className='text-red-400'/>
                    <span>20</span>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar