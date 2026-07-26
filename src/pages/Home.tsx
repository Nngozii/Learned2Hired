import React from 'react'
import Hero from '../components/sections/Hero'
import CTABanner from '../components/sections/CTABanner'
import Partners from '../components/sections/Partners'
import Footer from '../components/sections/Footer'

function Home() {
  return (
    <div>
        <Hero />
      <CTABanner />
      <Partners />
      <Footer />
    </div>
  )
}

export default Home