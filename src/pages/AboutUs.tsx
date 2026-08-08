

import { SpotlightCard } from '../components/ui/SpotlightCard';
import { AnimatedCounter } from '../components/ui/AnimatedCounter';
import { Button } from '../components/ui/Button';
import { BackgroundGrid } from '../components/ui/BackgroundGrid';
import { Reveal } from '../components/ui/Reveal';

function AboutUs() {
  return (
    <div className="w-full relative overflow-hidden">
      <BackgroundGrid opacity={30} />

      <div className="max-w-[1400px] mx-auto px-3 md:px-10 lg:px-20 pt-8 md:pt-16 pb-16 relative z-10">
        
        <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-center mb-16 md:mb-24">
          <div className="w-full md:w-1/2">
            <Reveal direction="down" delay={100}>
              <h4 className="text-brand-primary text-[12px] md:text-[13px] font-bold mb-3 uppercase tracking-wider">
                About Learned2Hired
              </h4>
            </Reveal>
            <Reveal direction="left" delay={200}>
              <h1 className="text-brand-dark text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-[1.2] mb-6">
                Connecting top Talents<br className="hidden lg:block" /> with Great Opportunities
              </h1>
            </Reveal>
            <Reveal direction="left" delay={300}>
              <p className="text-brand-dark opacity-80 text-[15px] leading-[1.6]">
                Learned 2Hired is a curated talent network for data professionals. We connect skilled individuals with companies looking for high-impact talent.
              </p>
            </Reveal>
          </div>
          <div className="w-full md:w-1/2">
            <Reveal direction="right" delay={400} className="w-full">
              <div className="w-full aspect-[4/3] bg-gray-200 rounded-3xl overflow-hidden shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800" 
                  alt="Professional working on laptop" 
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-center mb-16 md:mb-24 py-12 md:py-16 border-y border-gray-100">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <Reveal direction="left" delay={100} className="w-full">
              <div className="w-full aspect-square md:aspect-[4/3] bg-gray-200 rounded-3xl overflow-hidden shadow-sm">
                <img 
                  src="/office_logo_wall.png" 
                  alt="Learned2Hired Office" 
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <Reveal direction="up" delay={200}>
              <h4 className="text-brand-primary text-[12px] md:text-[13px] font-bold mb-3 uppercase tracking-wider">Our Story</h4>
            </Reveal>
            <Reveal direction="up" delay={300}>
              <h2 className="text-brand-dark text-[28px] lg:text-[36px] font-bold leading-[1.3] mb-6">Why we started Learned2Hired</h2>
            </Reveal>
            <Reveal direction="up" delay={400}>
              <p className="text-brand-dark opacity-80 text-[15px] leading-[1.6]">
                Learned2Hired was founded to bridge the gap between learning data skills and landing meaningful career opportunities. 
                We believe talent deserve visibility, and every aspiring data professionals should have access to the right opportunities to grow.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mb-16 md:mb-24">
          <Reveal direction="down" delay={100}>
            <h4 className="text-brand-primary text-[12px] md:text-[13px] font-bold mb-8 text-center uppercase tracking-wider">Our Purpose</h4>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Reveal direction="left" delay={200} className="h-full">
              <SpotlightCard className="h-full bg-[#F4F7FC]/80 backdrop-blur-sm p-8 md:p-12 border border-brand-primary/5">
                <h3 className="text-brand-dark text-[22px] md:text-[24px] font-bold mb-4">Our Mission</h3>
                <p className="text-brand-dark opacity-80 text-[15px] leading-[1.6]">
                  To bridge the gap between data education and career opportunities by equipping aspiring data professionals with the experience, connections, and support needed to succeed.
                </p>
              </SpotlightCard>
            </Reveal>
            <Reveal direction="right" delay={300} className="h-full">
              <SpotlightCard className="h-full bg-[#F4F7FC]/80 backdrop-blur-sm p-8 md:p-12 border border-brand-primary/5">
                <h3 className="text-brand-dark text-[22px] md:text-[24px] font-bold mb-4">Our Vision</h3>
                <p className="text-brand-dark opacity-80 text-[15px] leading-[1.6]">
                  To create a future where every aspiring data professionals has equal access to opportunities to learn grow, and build a successful career.
                </p>
              </SpotlightCard>
            </Reveal>
          </div>
        </div>

        <div className="mb-16 md:mb-24">
          <Reveal direction="down" delay={100}>
            <h4 className="text-brand-primary text-[12px] md:text-[13px] font-bold mb-8 text-center uppercase tracking-wider">Our Values</h4>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Integrity', text: "We do what's right, always. Trust is the foundation of everything we do." },
              { title: 'Quality', text: "We are committed to excellence in every match we make." },
              { title: 'Community', text: "We grow together by supporting talent and building lasting relationships." },
              { title: 'Growth', text: "We believe in continuous learning and creating opportunities to grow." }
            ].map((val, i) => (
              <Reveal key={i} direction="up" delay={200 + (i * 100)} className="h-full">
                <SpotlightCard className="h-full border border-[#D2DCF6]/60 bg-white/80 backdrop-blur-sm p-8">
                  <h3 className="text-brand-dark text-[20px] font-bold mb-4">{val.title}</h3>
                  <p className="text-brand-dark opacity-80 text-[14px] leading-[1.6]">{val.text}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal direction="up" delay={100}>
          <div className="bg-brand-dark rounded-3xl py-12 md:py-16 px-6 md:px-12 mb-16 md:mb-24 shadow-xl relative overflow-hidden">
            <BackgroundGrid opacity={5} dotColor="#ffffff" />
            
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0 lg:divide-x lg:divide-white/20 text-center">
              <div className="flex flex-col gap-2">
                <h3 className="text-white text-[36px] md:text-[40px] font-bold">
                  <AnimatedCounter value={8000} duration={2500} formatter={(val) => val.toLocaleString() + '+'} />
                </h3>
                <p className="text-white opacity-80 text-[12px] md:text-[13px] uppercase tracking-wider">Data Professional</p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-white text-[36px] md:text-[40px] font-bold">
                  <AnimatedCounter value={100} duration={2000} formatter={(val) => val + '%'} />
                </h3>
                <p className="text-white opacity-80 text-[12px] md:text-[13px] uppercase tracking-wider">Profiles Reviewed</p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-white text-[36px] md:text-[40px] font-bold flex items-center justify-center">
                  <AnimatedCounter value={5} duration={1500} /> <span className="ml-2">Days</span>
                </h3>
                <p className="text-white opacity-80 text-[12px] md:text-[13px] uppercase tracking-wider">Average Hire Time</p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-white text-[36px] md:text-[40px] font-bold">
                  <AnimatedCounter value={500} duration={2000} formatter={(val) => val.toLocaleString() + '+'} />
                </h3>
                <p className="text-white opacity-80 text-[12px] md:text-[13px] uppercase tracking-wider">Companies Trust Us</p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-center">
          <div className="w-full md:w-1/3 shrink-0">
            <Reveal direction="right" delay={100} className="w-full">
              <div className="w-full aspect-[4/5] md:aspect-[3/4] bg-gray-200 rounded-3xl overflow-hidden shadow-sm">
                <img 
                  src="/ceo.png" 
                  alt="Anagu Esther, CEO of Learned2Hired" 
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>
          </div>
          <div className="w-full md:w-2/3">
            <Reveal direction="up" delay={200}>
              <h4 className="text-brand-primary text-[12px] md:text-[13px] font-bold mb-4 uppercase tracking-wider">Meet Our Founder</h4>
            </Reveal>
            <Reveal direction="up" delay={300}>
              <h2 className="text-brand-dark text-[32px] md:text-[40px] font-bold leading-[1.2] mb-6">Anagu Esther</h2>
            </Reveal>
            <Reveal direction="up" delay={400}>
              <p className="text-brand-dark opacity-80 text-[15px] leading-[1.6] mb-8 max-w-2xl">
                Learned2Hired was born from a simple belief: everyone who invests in learning deserves a fair opportunity to succeed.
                We created this platform to bridge the gap between education and employment, giving talented data professionals the visibility they need while helping companies discover the right people.
                <br/><br/>
                Thank you for being a part of our journey.
              </p>
            </Reveal>
            <Reveal direction="up" delay={500}>
              <div className="mb-8">
                <div style={{ fontFamily: "'Brush Script MT', cursive" }} className="text-[32px] text-brand-dark mb-1">
                  Anagu Esther
                </div>
                <p className="text-brand-dark text-[13px] opacity-80 uppercase tracking-wide">Founder, Learned2Hired</p>
              </div>
            </Reveal>
            <Reveal direction="up" delay={600}>
              <Button 
                href="https://www.linkedin.com/in/esther-anagu/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-8 py-3.5 rounded-full shadow-sm text-[14px]"
              >
                Connect on LinkedIn
              </Button>
            </Reveal>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AboutUs
