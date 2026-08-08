

function AboutUs() {
  return (
    <div className="w-full">
      <div className="max-w-[1400px] mx-auto px-3 md:px-10 lg:px-20 pt-8 md:pt-16 pb-16">
        
        <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-center mb-16 md:mb-24">
          <div className="w-full md:w-1/2">
            <h4 className="text-brand-primary text-[12px] md:text-[13px] font-bold mb-3 uppercase tracking-wider">
              About Learned2Hired
            </h4>
            <h1 className="text-brand-dark text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-[1.2] mb-6">
              Connecting top Talent<br className="hidden lg:block" />with Great Opportunities
            </h1>
            <p className="text-brand-dark opacity-80 text-[15px] leading-[1.6]">
              Learned 2Hired is a curated talent network for data professionals. We connect skilled individuals with companies looking for high-impact talent.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <div className="w-full aspect-[4/3] bg-gray-200 rounded-3xl overflow-hidden shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800" 
                alt="Professional working on laptop" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-center mb-16 md:mb-24 py-12 md:py-16 border-y border-gray-100">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <div className="w-full aspect-square md:aspect-[4/3] bg-gray-200 rounded-3xl overflow-hidden shadow-sm">
              <img 
                src="/office_logo_wall.png" 
                alt="Learned2Hired Office" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <h4 className="text-brand-primary text-[12px] md:text-[13px] font-bold mb-3 uppercase tracking-wider">Our Story</h4>
            <h2 className="text-brand-dark text-[28px] lg:text-[36px] font-bold leading-[1.3] mb-6">Why we started Learned2Hired</h2>
            <p className="text-brand-dark opacity-80 text-[15px] leading-[1.6]">
              Learned2Hired was founded to bridge the gap between learning data skills and landing meaningful career opportunities. 
              We believe talent deserve visibility, and every aspiring data professionals should have access to the right opportunities to grow.
            </p>
          </div>
        </div>

        <div className="mb-16 md:mb-24">
          <h4 className="text-brand-primary text-[12px] md:text-[13px] font-bold mb-8 text-center uppercase tracking-wider">Our Purpose</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#F4F7FC] p-8 md:p-12 rounded-3xl transition-transform hover:-translate-y-1">
              <h3 className="text-brand-dark text-[22px] md:text-[24px] font-bold mb-4">Our Mission</h3>
              <p className="text-brand-dark opacity-80 text-[15px] leading-[1.6]">
                To bridge the gap between data education and career opportunities by equipping aspiring data professionals with the experience, connections, and support needed to succeed.
              </p>
            </div>
            <div className="bg-[#F4F7FC] p-8 md:p-12 rounded-3xl transition-transform hover:-translate-y-1">
              <h3 className="text-brand-dark text-[22px] md:text-[24px] font-bold mb-4">Our Vision</h3>
              <p className="text-brand-dark opacity-80 text-[15px] leading-[1.6]">
                To create a future where every aspiring data professionals has equal access to opportunities to learn grow, and build a successful career.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16 md:mb-24">
          <h4 className="text-brand-primary text-[12px] md:text-[13px] font-bold mb-8 text-center uppercase tracking-wider">Our Values</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Integrity', text: "We do what's right, always. Trust is the foundation of everything we do." },
              { title: 'Quality', text: "We are committed to excellence in every match we make." },
              { title: 'Community', text: "We grow together by supporting talent and building lasting relationships." },
              { title: 'Growth', text: "We believe in continuous learning and creating opportunities to grow." }
            ].map((val, i) => (
              <div key={i} className="border border-[#D2DCF6] bg-white p-8 rounded-3xl transition-shadow hover:shadow-md">
                <h3 className="text-brand-dark text-[20px] font-bold mb-4">{val.title}</h3>
                <p className="text-brand-dark opacity-80 text-[14px] leading-[1.6]">{val.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-brand-dark rounded-3xl py-12 md:py-16 px-6 md:px-12 mb-16 md:mb-24 shadow-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0 lg:divide-x lg:divide-white/20 text-center">
            <div className="flex flex-col gap-2">
              <h3 className="text-white text-[36px] md:text-[40px] font-bold">8000+</h3>
              <p className="text-white opacity-80 text-[12px] md:text-[13px] uppercase tracking-wider">Data Professional</p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-white text-[36px] md:text-[40px] font-bold">100%</h3>
              <p className="text-white opacity-80 text-[12px] md:text-[13px] uppercase tracking-wider">Profiles Reviewed</p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-white text-[36px] md:text-[40px] font-bold">5 Days</h3>
              <p className="text-white opacity-80 text-[12px] md:text-[13px] uppercase tracking-wider">Average Hire Time</p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-white text-[36px] md:text-[40px] font-bold">500+</h3>
              <p className="text-white opacity-80 text-[12px] md:text-[13px] uppercase tracking-wider">Companies Trust Us</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-center">
          <div className="w-full md:w-1/3 shrink-0">
            <div className="w-full aspect-[4/5] md:aspect-[3/4] bg-[#D4F4D6] rounded-3xl"></div>
          </div>
          <div className="w-full md:w-2/3">
            <h4 className="text-brand-primary text-[12px] md:text-[13px] font-bold mb-4 uppercase tracking-wider">Meet Our Founder</h4>
            <h2 className="text-brand-dark text-[32px] md:text-[40px] font-bold leading-[1.2] mb-6">Anagu Esther</h2>
            <p className="text-brand-dark opacity-80 text-[15px] leading-[1.6] mb-8 max-w-2xl">
              Learned2Hired was born from a simple belief: everyone who invests in learning deserves a fair opportunity to succeed.
              We created this platform to bridge the gap between education and employment, giving talented data professionals the visibility they need while helping companies discover the right people.
              <br/><br/>
              Thank you for being a part of our journey.
            </p>
            <div className="mb-8">
              <div style={{ fontFamily: "'Brush Script MT', cursive" }} className="text-[32px] text-brand-dark mb-1">
                Anagu Esther
              </div>
              <p className="text-brand-dark text-[13px] opacity-80 uppercase tracking-wide">Founder, Learned2Hired</p>
            </div>
            <a href="https://www.linkedin.com/in/esther-anagu/" target="_blank" rel="noopener noreferrer" className="inline-block border border-brand-dark text-brand-dark px-8 py-3 rounded-full text-[14px] font-medium hover:bg-brand-dark hover:text-white transition-colors">
              Connect on LinkedIn
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AboutUs
