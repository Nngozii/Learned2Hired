import { Shield } from 'lucide-react'
import { Input } from '../components/ui/Input'
import { Select } from '../components/ui/Select'
import { Textarea } from '../components/ui/Textarea'
import { Button } from '../components/ui/Button'

function Sponsorship() {
  return (
    <div className="w-full pb-0">
      <div className="max-w-[1400px] mx-auto px-4 md:px-10 lg:px-20 pt-8 md:pt-16 pb-4">
      
      <div className="md:hidden bg-brand-dark text-white rounded-2xl p-8 mb-12">
        <h4 className="text-[13px] font-bold mb-3 tracking-wide">Support Our Mission</h4>
        <h2 className="text-[28px] font-bold leading-[1.3] mb-4">
          Sponsor the Future<br />of Data Talents
        </h2>
        <p className="text-[14px] leading-[1.6] opacity-90">
          Partner with LearnedtoHired by sponsoring initiatives that connect aspiring and experienced data professionals with meaningful career opportunities
        </p>
      </div>

      <div className="hidden md:flex flex-col items-center text-center mb-20 max-w-3xl mx-auto">
        <h2 className="text-brand-dark text-[36px] font-bold mb-4">Support our Mission</h2>
        <p className="text-brand-primary text-[16px] leading-[1.6]">
          Partner with LearnedtoHired by sponsoring initiatives that connect aspiring and experienced data professionals with meaningful career opportunities.
        </p>
      </div>

      <div className="mb-16">
        <div className="inline-block bg-[#F8FBFF] border border-[#D2DCF6] text-brand-dark px-4 py-1.5 rounded-full text-[11px] font-bold mb-6 md:mb-8">
          Why Sponsor Us
        </div>
        <div className="flex overflow-x-auto md:grid md:grid-cols-4 gap-4 md:gap-6 pb-4 md:pb-0 scrollbar-hide snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {[1, 2, 3, 4].map((item) => (
            <div key={`why-${item}`} className="min-w-[70%] sm:min-w-[45%] md:min-w-0 snap-center bg-brand-dark h-[240px] md:h-[280px] rounded-2xl shadow-sm">
            </div>
          ))}
        </div>
      </div>

      <div className="mb-20">
        <div className="inline-block bg-[#F8FBFF] border border-[#D2DCF6] text-brand-dark px-4 py-1.5 rounded-full text-[11px] font-bold mb-6 md:mb-8">
          How to Support Us
        </div>
        <div className="flex overflow-x-auto md:grid md:grid-cols-4 gap-4 md:gap-6 pb-4 md:pb-0 scrollbar-hide snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {[1, 2, 3, 4].map((item) => (
            <div key={`how-${item}`} className="min-w-[70%] sm:min-w-[45%] md:min-w-0 snap-center bg-brand-dark h-[240px] md:h-[280px] rounded-2xl shadow-sm">
            </div>
          ))}
        </div>
      </div>

      </div>

      <div className="w-full bg-white md:bg-brand-dark flex flex-col md:flex-row mt-12 md:mt-16">
        
        <div className="hidden md:flex w-[30%] lg:w-[35%] shrink-0 items-center justify-center p-10 py-20">
          <h2 className="text-white text-[28px] lg:text-[32px] font-bold leading-[1.3] text-center max-w-sm">
            Join a Curated Talent Network
          </h2>
        </div>

        <div className="w-full md:w-[70%] lg:w-[65%] bg-white md:rounded-l-[48px] lg:rounded-l-[64px] flex flex-col justify-center px-4 py-12 md:px-16 lg:px-24 md:py-24">
          
          <div className="inline-block bg-[#F8FBFF] border border-[#D2DCF6] text-brand-dark px-4 py-1.5 rounded-full text-[11px] font-bold mb-8 w-max">
            Become a Sponsor
          </div>

          <form className="flex flex-col gap-5 max-w-3xl">
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
                <option value="" disabled>Sponsorship Interest</option>
                <option value="events">Events</option>
                <option value="training">Training Programs</option>
                <option value="scholarships">Scholarships</option>
                <option value="general">General Support</option>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Input placeholder="Phone Number" type="tel" />
              <Input placeholder="Estimated Budget (Optional)" type="text" />
            </div>

            <Textarea placeholder="Message (Optional)" rows={5} className="resize-none" />

            <div className="mt-2 bg-[#F4F7FC] rounded-lg p-4 flex items-center gap-3">
              <Shield className="text-brand-dark shrink-0" size={20} strokeWidth={2} />
              <p className="text-brand-dark text-[13px] font-medium leading-snug">
                We'll review your inquiry and contact you to discuss sponsorship opportunities.
              </p>
            </div>

            <Button type="button" className="w-full md:w-[220px] mt-4 bg-brand-dark text-white font-medium py-3.5 px-8 rounded-xl text-[14px]">
              Become a Sponsor
            </Button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Sponsorship
