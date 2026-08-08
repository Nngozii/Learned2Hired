import Hero from '../components/sections/Hero'
import CTABanner from '../components/sections/CTABanner'
import Partners from '../components/sections/Partners'
import FAQ from '../components/sections/FAQ'
import HowItWorks from '../components/sections/HowItWorks'
import Footer from '../components/sections/Footer'

function Home() {
  return (
    <div className="bg-data-grid min-h-screen relative">
      <div className="absolute inset-0 bg-white/40 pointer-events-none z-0"></div>
      <div className="relative z-10">
        <Hero />
        <HowItWorks />
        <CTABanner />
        <Partners />
        <FAQ />
        <Footer />
      </div>
    </div>
  )
}

export default Home