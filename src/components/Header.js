import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='py-0 px-8 flex justify-between items-center relative bg-slate-200'>
        <Link to="/">
            <img src='./images/logo.png' className='w-28 h-10 mix-blend-multiply' alt='my logo img'/>
        </Link>
        <Navbar/>
    </div>
  )
}

export default Header