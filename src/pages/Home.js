import React from 'react'
import HeroSection from '../components/HeroSection'

const Home = () => {
  const data = {
    name: "Star Shopping"
  }
  return (
    <div className=''>
        <HeroSection myData={data}/>
    </div>
  )
}


export default Home