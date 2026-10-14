import LandingNavbar from "../Components/LandingNavbar"
import Hero from "../Components/Hero"
import Badges from "../Components/Badges"
import FeaturedProducts from "../Components/FeaturedProducts"
import AboutSection from "../Components/AboutSection"
import CallToAction from "../Components/CallToAction"
import Testimonials from "../Components/Testimonials"
import Footer from "../Components/Footer"
import VisitUs from "../Components/VisitUs"
import WhatWeSell from "../Components/WhatWeSell"
import Delivery from "../Components/Delivery"
import HowItWorks from "../Components/HowItWorks"

import Faq from "../Components/Faq"
const Home = () => {
  return (
    <div>
        <LandingNavbar/>
        <Hero/>
        <Badges/>
         <WhatWeSell/>
        
        <FeaturedProducts/>
         <Delivery/>
        <HowItWorks/>
         
       
        <AboutSection/>
        <Faq/>

        <VisitUs/>  
        <CallToAction/>
        <Testimonials/>
        <Footer/>
        

      
    </div>
  )
}

export default Home
