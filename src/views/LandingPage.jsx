import React from 'react'
import Activities from '../components/Activities'
import Header from  "../components/Header"
import Hero from  "../components/Hero"
import LandingFooter from '../components/LandingFooter'
import Mint from '../components/Mint'
const LandingPage = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Activities/>
      <Mint/>
      <LandingFooter />
    </div>
  )
}

export default LandingPage