import React from 'react'
import Hero from "../Home/Hero"
import Navbar from '../Home/Navbar'
import TopSpecilisation from '../Home/TopSpecilisation'
import Academic from '../Home/Academic'
import GrowSkills from '../Home/GrowSkills'
import Counter from '../Home/Counter'
import CallExperts from '../Home/CallExperts'
import Testmonials from '../Home/Testmonials'
import Blog from '../Home/Blog'
import Footer from '../Home/Footer'
import TopCourses from '../Home/TopCourses'
const HomeRoutes = () => {
  return (
    <div>
      <Hero/>
      <Navbar/>
      <Counter/>
      <TopSpecilisation/>
      
    
       <GrowSkills/>
       {/* <TopCourses/>  */}
      <Academic/>
     
      <CallExperts/>
      <Testmonials/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default HomeRoutes
