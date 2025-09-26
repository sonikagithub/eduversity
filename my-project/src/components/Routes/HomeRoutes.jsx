import React from 'react'
import Hero from "../Home/Hero"
import Navbar from '../Home/Navbar'
import TopSpecilisation from '../Home/TopSpecilisation'
import Academic from '../Home/Academic'
import GrowSkills from '../Home/GrowSkills'
import Counter from '../Home/Counter'
const HomeRoutes = () => {
  return (
    <div>
      <Hero/>
      <Navbar/>
      <TopSpecilisation/>
      <Academic/>
      <GrowSkills/>
      <Counter/>
    </div>
  )
}

export default HomeRoutes
