import React from 'react'
import { Link } from 'react-router-dom'
import familyPic from '../images/familyShopping.jpg';

const HeroSection = ({myData}) => {
    const {name} = myData;
  return (
    <div className='flex flex-row justify-between my-24 mx-60 gap-5'>
        <div className='w-96'>
            <p>Welcome to</p>
            <h2 className='text-[#d4af37] text-2xl font-semibold pb-7'>{name}</h2>
            <p className='pb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptas temporibus. Cumque sapiente neque obcaecati? Nemo quae reiciendis nostrum nihil facilis</p>
            <Link to={"/products"} className='bg-[#5a04e5] text-white py-2 px-4 rounded-sm'>Shop Now</Link>
        </div>
        {/* Home page hero section image */}
        <div>
            <img className='shadow-[40px_40px_0px_0px_rgba(109,40,217)] min-w-48' src={familyPic} alt='family_shopping_photo' />
        </div>
    </div>
  )
}

export default HeroSection