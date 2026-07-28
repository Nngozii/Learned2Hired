import React from 'react'
import Hero from '../components/sections/Hero'
import CTABanner from '../components/sections/CTABanner'
import Partners from '../components/sections/Partners'
import HowItWorks from '../components/sections/HowItWorks'
import Footer from '../components/sections/Footer'

function Home() {
  return (
    <div>
      <Hero />
      <HowItWorks />
      <CTABanner />
      <Partners />
      <Footer />
    </div>
  )
}

export default Home