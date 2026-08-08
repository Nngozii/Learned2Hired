import { useState } from 'react'
import { Button } from '../components/ui/Button'
import SplitPageLayout from '../components/layout/SplitPageLayout'
import { Input } from '../components/ui/Input'
import { Textarea } from '../components/ui/Textarea'
import { Mail, Phone, MapPin, Briefcase, UserPlus, HeartHandshake, HelpCircle, MessageCircle } from 'lucide-react'

export default function ContactUs() {
  const [intent, setIntent] = useState<'hire' | 'candidate' | 'sponsor' | 'general' | ''>('')

  const mobileHeader = (
    <div className="bg-[#244299] text-white p-6 md:p-8 rounded-2xl">
      <h4 className="text-[14px] font-bold mb-4 tracking-wide uppercase">Contact Us</h4>
      <h2 className="text-[26px] font-medium mb-4 leading-[1.1]">Let's Start a <br /> Conversation</h2>
      <p className="text-[16px] leading-[1.3] text-white opacity-90">
        Have questions? We're here to help. Select a topic below or reach out directly.
      </p>
    </div>
  )

  const desktopHeader = (
    <>
      <h2 className="text-brand-dark text-3xl font-bold mb-4">How can we help you today?</h2>
      <p className="text-brand-dark text-[15px] font-medium leading-[1.4] max-w-lg">
        Please select the option that best describes your needs so we can point you in the right direction.
      </p>
    </>
  )

  const leftContent = (
    <div className="flex flex-col gap-10 w-full text-white">
      <div>
        <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
        <div className="flex flex-col gap-4">
          <a href="#" className="flex items-center gap-3 hover:text-brand-light transition-colors">
            <Mail className="shrink-0" size={20} />
            <span className="text-[14px] font-medium">hello@learned2hired.com</span>
          </a>
          <a href="#" className="flex items-center gap-3 hover:text-brand-light transition-colors">
            <Phone className="shrink-0" size={20} />
            <span className="text-[14px] font-medium">+234 9078632032</span>
          </a>
          <div className="flex items-center gap-3">
            <MapPin className="shrink-0" size={20} />
            <span className="text-[14px] font-medium">Lagos, Nigeria</span>
          </div>
          <a href="https://whatsapp.com/channel/0029VazWeLyKLaHlKsDfoe0H" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-brand-light transition-colors">
            <MessageCircle className="shrink-0" size={20} />
            <span className="text-[14px] font-medium">WhatsApp Channel</span>
          </a>
          <a href="https://www.linkedin.com/company/l2h-learned-to-hired/" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-brand-light transition-colors mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect width="4" height="12" x="2" y="9"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
            <span className="text-[14px] font-medium">Follow us on LinkedIn</span>
          </a>
        </div>
      </div>


    </div>
  )

  return (
    <SplitPageLayout mobileHeader={mobileHeader} desktopHeader={desktopHeader} leftContent={leftContent}>
      
      {/* Intent Selection Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        <button 
          onClick={() => setIntent('hire')}
          className={`flex flex-col items-center justify-center p-6 rounded-xl border-2 transition-all cursor-pointer ${intent === 'hire' ? 'border-brand-primary bg-[#F8FBFF]' : 'border-gray-100 hover:border-brand-primary/30 bg-white'}`}
        >
          <Briefcase size={28} className={intent === 'hire' ? 'text-brand-primary mb-3' : 'text-gray-400 mb-3'} />
          <span className={`text-[14px] font-bold ${intent === 'hire' ? 'text-brand-primary' : 'text-gray-600'}`}>I want to hire talent</span>
        </button>

        <button 
          onClick={() => setIntent('candidate')}
          className={`flex flex-col items-center justify-center p-6 rounded-xl border-2 transition-all cursor-pointer ${intent === 'candidate' ? 'border-brand-primary bg-[#F8FBFF]' : 'border-gray-100 hover:border-brand-primary/30 bg-white'}`}
        >
          <UserPlus size={28} className={intent === 'candidate' ? 'text-brand-primary mb-3' : 'text-gray-400 mb-3'} />
          <span className={`text-[14px] font-bold ${intent === 'candidate' ? 'text-brand-primary' : 'text-gray-600'}`}>I'm a candidate</span>
        </button>

        <button 
          onClick={() => setIntent('sponsor')}
          className={`flex flex-col items-center justify-center p-6 rounded-xl border-2 transition-all cursor-pointer ${intent === 'sponsor' ? 'border-brand-primary bg-[#F8FBFF]' : 'border-gray-100 hover:border-brand-primary/30 bg-white'}`}
        >
          <HeartHandshake size={28} className={intent === 'sponsor' ? 'text-brand-primary mb-3' : 'text-gray-400 mb-3'} />
          <span className={`text-[14px] font-bold ${intent === 'sponsor' ? 'text-brand-primary' : 'text-gray-600'}`}>Sponsorships</span>
        </button>

        <button 
          onClick={() => setIntent('general')}
          className={`flex flex-col items-center justify-center p-6 rounded-xl border-2 transition-all cursor-pointer ${intent === 'general' ? 'border-brand-primary bg-[#F8FBFF]' : 'border-gray-100 hover:border-brand-primary/30 bg-white'}`}
        >
          <HelpCircle size={28} className={intent === 'general' ? 'text-brand-primary mb-3' : 'text-gray-400 mb-3'} />
          <span className={`text-[14px] font-bold ${intent === 'general' ? 'text-brand-primary' : 'text-gray-600'}`}>General Inquiry</span>
        </button>
      </div>

      {/* Dynamic Content Area */}
      <div className="min-h-[300px]">
        {intent === '' && (
          <div className="flex items-center justify-center h-full text-gray-400 text-[14px]">
            Please select an option above to continue.
          </div>
        )}

        {intent === 'hire' && (
          <div className="bg-[#F8FBFF] p-8 rounded-2xl flex flex-col items-center text-center border border-brand-light">
            <div className="bg-brand-primary/10 p-4 rounded-full mb-4">
              <Briefcase size={32} className="text-brand-primary" />
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-3">Looking to build your data team?</h3>
            <p className="text-[14px] text-gray-600 mb-8 max-w-sm">
              We have a dedicated, streamlined process to match you with vetted data professionals fast. Submit a hiring request and we'll take care of the rest.
            </p>
            <Button to="/request-talent" className="px-8 py-3 rounded-lg font-medium">
              Go to Request Talent
            </Button>
          </div>
        )}

        {intent === 'candidate' && (
          <div className="bg-[#F8FBFF] p-8 rounded-2xl flex flex-col items-center text-center border border-brand-light">
            <div className="bg-brand-primary/10 p-4 rounded-full mb-4">
              <UserPlus size={32} className="text-brand-primary" />
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-3">Ready to advance your career?</h3>
            <p className="text-[14px] text-gray-600 mb-8 max-w-sm">
              Join our exclusive talent pool. We connect skilled Data Professionals with top companies looking for analytical talents.
            </p>
            <Button to="/join-talent-pool" className="px-8 py-3 rounded-lg font-medium">
              Join Talent Pool
            </Button>
          </div>
        )}

        {intent === 'sponsor' && (
          <div className="bg-[#F8FBFF] p-8 rounded-2xl flex flex-col items-center text-center border border-brand-light">
            <div className="bg-brand-primary/10 p-4 rounded-full mb-4">
              <HeartHandshake size={32} className="text-brand-primary" />
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-3">Become a Sponsor</h3>
            <p className="text-[14px] text-gray-600 mb-8 max-w-sm">
              Partner with Learned2Hired to empower the next generation of data talents. Discover our sponsorship tiers and impact.
            </p>
            <Button to="/sponsorship" className="px-8 py-3 rounded-lg font-medium">
              Explore Sponsorships
            </Button>
          </div>
        )}

        {intent === 'general' && (
          <div className="md:bg-[#F8FBFF] md:p-8 md:rounded-2xl md:border md:border-brand-light animate-in fade-in duration-300">
            <h3 className="text-xl font-bold text-brand-dark mb-6 hidden md:block">Send us a message</h3>
            <form className="flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
              </div>
              <Input type="email" placeholder="Email Address" />
              <Input placeholder="Subject" />
              <Textarea placeholder="How can we help you?" className="min-h-[120px]" />
              
              <Button type="button" className="w-full md:w-[200px] mt-2 font-medium py-3 px-8 rounded-lg text-[14px]">
                Send Message
              </Button>
            </form>
          </div>
        )}
      </div>

    </SplitPageLayout>
  )
}
