import { Shield, Target, TrendingUp, Users, GraduationCap, Calendar, BookOpen, ArrowRight, Handshake } from 'lucide-react'
import { Input } from '../components/ui/Input'
import { Select } from '../components/ui/Select'
import { Textarea } from '../components/ui/Textarea'
import { Button } from '../components/ui/Button'
import { BackgroundGrid } from '../components/ui/BackgroundGrid'
import { Reveal } from '../components/ui/Reveal'
import { SpotlightCard } from '../components/ui/SpotlightCard'
import { AnimatedCounter } from '../components/ui/AnimatedCounter'
import { Carousel } from '../components/ui/Carousel'
import SplitPageLayout from '../components/layout/SplitPageLayout'

function Sponsorship() {
  const whyPartner = [
    {
      title: "Unrivaled Talent Access",
      text: "Fast-track your hiring with priority access to our top 1% of vetted data professionals.",
      icon: Target
    },
    {
      title: "Elevate Your Employer Brand",
      text: "Position your company as a thought leader and champion of data education.",
      icon: TrendingUp
    },
    {
      title: "Drive Diversity & Inclusion",
      text: "Directly support scholarships and initiatives that bring underrepresented voices into tech.",
      icon: Users
    }
  ];

  const partnerAvenues = [
    {
      title: "Offer Trainings",
      text: "Partner with us to provide specialized training, workshops, and bootcamps to upskill aspiring data professionals.",
      icon: BookOpen
    },
    {
      title: "Event Sponsorships",
      text: "Host or sponsor hackathons, webinars, and networking events to build brand visibility in the community.",
      icon: Calendar
    },
    {
      title: "Scholarship Funds",
      text: "Fund a cohort's learning journey and change lives by breaking down financial barriers to tech education.",
      icon: GraduationCap
    }
  ];

  return (
    <div className="w-full pb-0 relative">
      {/* 1. Hero Section */}
      <section className="relative mx-4 md:mx-10 lg:mx-20 max-w-[1400px] xl:mx-auto overflow-hidden bg-brand-dark pt-20 pb-28 md:pt-32 md:pb-40 px-6 mt-4 md:mt-0 rounded-[32px] md:rounded-t-none md:rounded-b-[64px] mb-16 md:mb-24">
        <BackgroundGrid opacity={10} dotColor="#ffffff" patternSize={30} fadeEdges={true} />
        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          <Reveal direction="down" delay={100}>
            <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full text-[12px] font-bold mb-6 tracking-wide">
              PARTNERSHIP OPPORTUNITIES
            </div>
          </Reveal>
          <Reveal direction="up" delay={200}>
            <h1 className="text-white text-[40px] md:text-[56px] lg:text-[72px] font-bold leading-[1.1] mb-6 tracking-tight">
              Empower the Next<br className="hidden md:block" /> Generation of Data Leaders.
            </h1>
          </Reveal>
          <Reveal direction="up" delay={300}>
            <p className="text-white/80 text-[16px] md:text-[20px] max-w-2xl leading-[1.6] mb-10">
              Partner with Learned2Hired to build your talent pipeline while making a lasting impact on the global data community.
            </p>
          </Reveal>
          <Reveal direction="up" delay={400}>
            <Button href="#contact-form" className="bg-white text-brand-dark hover:bg-gray-50 px-8 py-4 rounded-full font-bold text-[16px] shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] transition-shadow">
              Become a Partner
            </Button>
          </Reveal>
        </div>
      </section>

      {/* 2. Why Partner With Us */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-10 lg:px-20 mb-20 md:mb-32">
        <Reveal direction="up">
          <h2 className="text-brand-dark text-[32px] md:text-[40px] font-bold text-center mb-12">Why Partner With Us?</h2>
        </Reveal>
        
        <Reveal direction="up">
          <Carousel
            desktopGridClasses="md:grid md:grid-cols-3 gap-6"
            items={whyPartner.map((item, idx) => (
              <SpotlightCard key={idx} className="h-full border border-[#D2DCF6]/60 bg-white shadow-sm hover:shadow-md p-8 md:p-10 rounded-[32px]">
                <div className="w-14 h-14 rounded-2xl bg-[#F4F7FC] flex items-center justify-center mb-8">
                  <item.icon className="text-brand-primary" size={28} strokeWidth={2} />
                </div>
                <h3 className="text-brand-dark text-[22px] font-bold mb-4">{item.title}</h3>
                <p className="text-brand-dark opacity-80 text-[15px] leading-[1.6]">
                  {item.text}
                </p>
              </SpotlightCard>
            ))}
          />
        </Reveal>
      </section>

      {/* 3. Impact Metrics Banner */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-10 lg:px-20 mb-20 md:mb-32">
        <Reveal direction="up" delay={100}>
          <div className="bg-[#112358] rounded-[32px] md:rounded-[48px] py-16 px-6 md:px-12 shadow-2xl relative overflow-hidden">
            <BackgroundGrid opacity={5} dotColor="#ffffff" patternSize={40} />
            
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/20 text-center">
              <div className="flex flex-col gap-3 pt-6 sm:pt-0 first:pt-0">
                <h3 className="text-white text-[48px] md:text-[56px] font-bold leading-none">
                  <AnimatedCounter value={8000} duration={2500} formatter={(val) => val.toLocaleString() + '+'} />
                </h3>
                <p className="text-white/80 text-[14px] uppercase tracking-wider font-medium">Data Professionals</p>
              </div>
              <div className="flex flex-col gap-3 pt-10 sm:pt-0">
                <h3 className="text-white text-[48px] md:text-[56px] font-bold leading-none">
                  <AnimatedCounter value={500} duration={2000} formatter={(val) => val.toLocaleString() + '+'} />
                </h3>
                <p className="text-white/80 text-[14px] uppercase tracking-wider font-medium">Partner Companies</p>
              </div>
              <div className="flex flex-col gap-3 pt-10 sm:pt-0">
                <h3 className="text-white text-[48px] md:text-[56px] font-bold leading-none flex items-center justify-center">
                  <AnimatedCounter value={5} duration={1500} /> <span className="ml-2 text-[32px] md:text-[40px]">Days</span>
                </h3>
                <p className="text-white/80 text-[14px] uppercase tracking-wider font-medium">Average Hire Time</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 4. Flexible Partnership Avenues */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-10 lg:px-20 mb-20 md:mb-32">
        <Reveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-brand-dark text-[32px] md:text-[40px] font-bold mb-6">Partnership Avenues</h2>
            <p className="text-brand-dark/80 text-[16px] md:text-[18px] leading-[1.6]">
              We don't believe in rigid sponsorship tiers. We build tailored partnerships that align with your organizational goals and maximize your impact.
            </p>
          </div>
        </Reveal>

        <Reveal direction="up">
          <Carousel
            desktopGridClasses="md:grid md:grid-cols-3 gap-6"
            items={partnerAvenues.map((item, idx) => (
              <div key={idx} className="h-full group relative bg-[#F8FBFF] hover:bg-white rounded-[32px] p-8 md:p-10 transition-colors duration-300 border border-[#D2DCF6]/50 hover:shadow-xl hover:shadow-brand-primary/5">
                <div className="mb-8">
                  <item.icon className="text-brand-primary" size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-brand-dark text-[24px] font-bold mb-4 group-hover:text-brand-primary transition-colors">{item.title}</h3>
                <p className="text-brand-dark/80 text-[15px] leading-[1.6]">
                  {item.text}
                </p>
              </div>
            ))}
          />
        </Reveal>
      </section>

      {/* 5. Split Form Section */}
      <div id="contact-form" className="w-full">
        <SplitPageLayout
          mobileHeader={
            <div className="mb-6">
              <h2 className="text-[28px] font-bold text-brand-dark leading-[1.2] mb-3">
                Let's Build Something Great Together
              </h2>
              <p className="text-[15px] text-brand-dark/80 leading-[1.6]">
                Drop us a line, and our partnership team will tailor a package to your specific goals.
              </p>
            </div>
          }
          desktopHeader={
            <div className="mb-10 max-w-xl">
              <h2 className="text-[36px] lg:text-[44px] font-bold text-brand-dark leading-[1.1] mb-4">
                Let's Build Something Great Together
              </h2>
              <p className="text-[16px] text-brand-dark/80 leading-[1.6]">
                Drop us a line, and our partnership team will tailor a package to your specific goals.
              </p>
            </div>
          }
          leftContent={
            <div className="flex flex-col items-center justify-center text-center px-6">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-8 backdrop-blur-sm border border-white/20">
                <Handshake className="text-white" size={32} />
              </div>
              <h3 className="text-white text-[32px] lg:text-[40px] font-bold leading-[1.2] mb-6">
                Become a Catalyst for Tech Talent
              </h3>
              <p className="text-white/80 text-[16px] leading-[1.6] max-w-sm">
                Join industry-leading organizations that are shaping the future of the data workforce.
              </p>
            </div>
          }
        >
          <form className="flex flex-col gap-5 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Input placeholder="Organization Name" type="text" />
              <Input placeholder="Website (Optional)" type="url" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Input placeholder="Contact Person" type="text" />
              <Select defaultValue="">
                <option value="" disabled>Organization Type</option>
                <option value="startup">Startup</option>
                <option value="enterprise">Enterprise</option>
                <option value="agency">Agency</option>
                <option value="nonprofit">Non-Profit</option>
                <option value="other">Other</option>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Input placeholder="Work Email" type="email" />
              <Select defaultValue="">
                <option value="" disabled>Partnership Interest</option>
                <option value="training">Offer Trainings</option>
                <option value="events">Event Sponsorship</option>
                <option value="scholarships">Scholarship Fund</option>
                <option value="general">General Support</option>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Input placeholder="Phone Number" type="tel" />
              <Input placeholder="Estimated Budget (Optional)" type="text" />
            </div>

            <Textarea placeholder="How would you like to partner with us?" rows={4} className="resize-none" />

            <div className="mt-2 bg-[#F8FBFF] border border-[#D2DCF6]/50 rounded-xl p-5 flex items-start gap-4">
              <Shield className="text-brand-primary shrink-0 mt-0.5" size={20} strokeWidth={2} />
              <p className="text-brand-dark/80 text-[14px] leading-[1.6]">
                We'll review your inquiry and our dedicated partnership team will reach out within 24 hours.
              </p>
            </div>

            <Button type="button" className="w-full md:w-auto self-start mt-4 px-10 py-4 rounded-xl text-[15px] font-bold shadow-md hover:-translate-y-1 transition-all">
              Submit Inquiry <ArrowRight className="inline-block ml-2 w-4 h-4" />
            </Button>
          </form>
        </SplitPageLayout>
      </div>
    </div>
  )
}

export default Sponsorship
