import LandingNavbar from "../Components/LandingNavbar"
import Hero from "../Components/Hero"
import Badges from "../Components/Badges"
import FeaturedProducts from "../Components/FeaturedProducts"
import AboutSection from "../Components/AboutSection"
import CallToAction from "../Components/CallToAction"
import Testimonials from "../Components/Testimonials"
import Footer from "../Components/Footer"

const Home = () => {
  return (
    <div>
        <LandingNavbar/>
        <Hero/>
        <Badges/>
        <FeaturedProducts/>
        <AboutSection/>
        <CallToAction/>
        <Testimonials/>
        <Footer/>
        

      
    </div>
  )
}

export default Home
