import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <div className='h-[34vh] flex flex-col items-center justify-center'>
      <h2 className='pt-36 font-semibold md:text-3xl pb-4'>404 Error, This page is not found</h2>
      <NavLink to="/">
        <button className='bg-[#3f3cdc] w-48 text-white py-2 px-3 text-center rounded-lg mb-28'>Go back to Home page</button>
      </NavLink>
    </div>
  )
}

export default Error