import HeroSection from '../components/HeroSection'

const About = () => {
  const data = {
    name: "Our Services"
  }
  return (
    <div>
      <HeroSection myData={data}/>
    </div>
  )
}

export default About