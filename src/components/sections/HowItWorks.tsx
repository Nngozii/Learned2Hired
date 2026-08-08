
import { FileUp, UserSearch, HeartHandshake, ClipboardList, Users, Briefcase, UserCheck, ShieldCheck, Clock, Handshake } from 'lucide-react'
import { Reveal } from '../ui/Reveal'
import { SpotlightCard } from '../ui/SpotlightCard'
import { Carousel } from '../ui/Carousel'

function HowItWorks() {
  const candidatesSteps = [
    { title: "Submit your CV", text: "Fill out the form and upload your CV to join our talent pool.", icon: FileUp },
    { title: "We Review Your Profile", text: "Our team reviews your experience and skills to understand your strengths.", icon: UserSearch },
    { title: "Get Matched with Opportunities", text: "We connect you with top companies hiring for roles that perfectly align with your expertise.", icon: HeartHandshake }
  ];

  const companiesSteps = [
    { title: "Tell Us Your Need", text: "Share your requirements and the type of Data Analyst you're looking for", icon: ClipboardList },
    { title: "We Shortlist Qualified Talent Profile", text: "We handpick and match you with the best candidates from our pool.", icon: Users },
    { title: "You interview & Hire", text: "You meet the candidates we recommend and make the best hiring decisions.", icon: Briefcase }
  ];

  const whyWorkWithUs = [
    { title: "Curated Talent Pool", text: "We carefully screen and curate skilled Data Professionals.", icon: UserCheck },
    { title: "Verified Professionals", text: "Access a network of pre-vested and qualified data professionals.", icon: ShieldCheck },
    { title: "Save Time and Resources", text: "We handle the search so you can focus on what matters.", icon: Clock },
    { title: "Trusted by Many", text: "Startups, SMEs, and organizations trust us for their hiring needs.", icon: Handshake }
  ];

  return (
    <section id="howitworks" className="py-10 md:py-20 px-4 md:px-10 lg:px-20 max-w-[1400px] mx-auto">
      <Reveal>
        <h2 className="text-center text-brand-dark text-[28px] md:text-3xl font-bold mb-10 md:mb-16">
          How It Works
        </h2>
      </Reveal>

      <div className="relative mb-8">
        <Reveal direction="left" className="relative z-20">
          <div className="md:absolute md:-top-[12px] md:left-6 inline-block bg-white border border-[#B3C0E7] text-[#2D459D] px-3 py-[2px] rounded-full text-[10px] md:text-[11px] font-bold mb-3 md:mb-0 z-10">
            For Candidates
          </div>
        </Reveal>
        
        <Carousel 
          desktopGridClasses="md:grid md:grid-cols-3 gap-4"
          items={candidatesSteps.map((step, idx) => (
            <SpotlightCard key={idx} className="h-full bg-[#F8FBFF] border-[#D2DCF6] p-6 shadow-sm">
              <div className="flex items-start gap-3 mb-3">
                <step.icon className="text-brand-dark shrink-0 mt-0.5" size={20} strokeWidth={2} />
                <h4 className="text-brand-dark font-bold text-[15px] leading-tight pr-4">{step.title}</h4>
              </div>
              <p className="text-brand-primary text-[13px] leading-[1.6] opacity-90 pl-8 md:pl-0">
                {step.text}
              </p>
            </SpotlightCard>
          ))} 
        />
      </div>

      <div className="relative mb-10">
        <Reveal direction="left" className="relative z-20">
          <div className="md:absolute md:-top-[12px] md:left-6 inline-block bg-white border border-[#B3C0E7] text-[#2D459D] px-3 py-[2px] rounded-full text-[10px] md:text-[11px] font-bold mb-3 md:mb-0 z-10">
            For Companies
          </div>
        </Reveal>
        
        <Carousel 
          desktopGridClasses="md:grid md:grid-cols-3 gap-4"
          items={companiesSteps.map((step, idx) => (
            <SpotlightCard key={idx} className="h-full bg-[#F8FBFF] border-[#D2DCF6] p-6 shadow-sm">
              <div className="flex items-start gap-3 mb-3">
                <step.icon className="text-brand-dark shrink-0 mt-0.5" size={20} strokeWidth={2} />
                <h4 className="text-brand-dark font-bold text-[15px] leading-tight pr-4">{step.title}</h4>
              </div>
              <p className="text-brand-primary text-[13px] leading-[1.6] opacity-90 pl-8 md:pl-0">
                {step.text}
              </p>
            </SpotlightCard>
          ))}
        />
      </div>

      <Reveal direction="up" delay={200}>
        <div className="bg-[#F8FBFF] rounded-[24px] md:rounded-[32px] p-1 md:p-12 lg:p-16">
          <h2 className="text-center text-brand-dark text-[24px] md:text-3xl font-bold mb-8 md:mb-12">
            Why Work With Us?
          </h2>
          
          <Carousel 
            desktopGridClasses="md:grid md:grid-cols-2 lg:grid-cols-4 gap-4"
            items={whyWorkWithUs.map((item, idx) => (
              <SpotlightCard 
                key={idx}
                spotlightColor="rgba(255,255,255,0.15)"
                className="h-full bg-[#112358] border-transparent text-white p-6 flex flex-col items-center text-center shadow-lg"
              >
                <div className="mb-5 flex justify-center">
                  <item.icon size={36} strokeWidth={1.5} className="text-white" />
                </div>
                <h4 className="font-bold text-[16px] mb-3 text-center">{item.title}</h4>
                <p className="text-[13px] opacity-80 leading-[1.6] max-w-[200px] mx-auto text-center">
                  {item.text}
                </p>
              </SpotlightCard>
            ))}
          />
        </div>
      </Reveal>
    </section>
  )
}

export default HowItWorks
