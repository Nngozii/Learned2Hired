import { UserPlus, Briefcase } from 'lucide-react'
import { Button } from '../ui/Button'
function CTABanner() {
  return (
    <section className="py-8 md:py-12 px-4 md:px-10 max-w-7xl mx-auto">
      <div className='flex flex-col items-center gap-6 md:grid md:grid-cols-2 md:gap-0 md:bg-brand-dark md:text-white md:rounded-[32px] md:p-16 relative overflow-hidden z-0'>
        
        <div className="hidden md:block absolute left-[50%] -translate-x-[110%] top-1/2 -translate-y-1/2 -z-10 pointer-events-none">
          <svg width="200" height="240" viewBox="-10 -10 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#D9D9D9" d="M123.6,13.2C167.3,27.1,208.9,59.3,217.1,101.4C225.4,143.5,200.3,195.4,157.9,210.6C115.5,225.7,55.9,204.1,25.4,166C-5.1,127.9,-6.4,73.1,18.8,36.9C44.1,0.6,95.9,-0.6,123.6,13.2Z"/>
          </svg>
        </div>

        <div className="hidden md:block absolute right-[50px] translate-x-[15%] top-1/2 -translate-y-1/2 -z-10 pointer-events-none">
          <svg width="200" height="260" viewBox="-50 -30 280 260" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#D9D9D9" d="M185.3,31.7C214.1,65.3,222.1,118.9,202.9,159.2C183.7,199.5,137.3,226.4,90.2,223.7C43.1,221.1,-4.7,188.8,-24.1,146C-43.5,103.2,-34.4,50,-1.4,17.2C31.6,-15.6,88.4,-28,136.9,-16.9C185.3,-5.7,223.9,-1.9,185.3,31.7Z"/>
          </svg>
        </div>

      <div className='w-full bg-brand-dark text-brand-white p-5 rounded-2xl md:bg-transparent md:p-0 md:rounded-none md:pr-12 md:border-r md:border-white/20 z-10'>
        <h3 className='text-[22px] font-bold mb-4 leading-tight'>
Looking for Your Next Role?
        </h3>

        <p className='mb-4 max-w-[300px] text-[16px]'>
Take the next steps in your career. Upload your CV and become part of our growing community.
        </p>

        <Button to="/join-talent-pool" className='mt-3 bg-brand-light text-brand-primary px-6 py-2.5 rounded-lg shadow-sm font-semibold'>
          <UserPlus size={19} strokeWidth={2.5}/>
Join Talent Pool
        </Button>
      </div>

      <div className='w-full bg-brand-light text-brand-primary p-5 rounded-2xl md:bg-transparent md:border-none md:text-white md:p-0 md:rounded-none md:pl-12'>
<h3 className='text-[22px] font-bold mb-4 leading-tight'>
Need to Hire Data Talents?
        </h3>

        <p className='mb-4 max-w-[300px] text-[16px] text-brand-dark md:text-gray-300'>
 We connect you with the right Data Professional for your team. Fast and stress-free.
        </p>

        <Button to="/request-talent" className='mt-3 px-6 py-2.5 rounded-lg shadow-sm font-semibold'>
          <Briefcase size={19} strokeWidth={2.5}/>
          Request Talent
        </Button>
      </div>
      </div>
    </section>
  )
}

export default CTABanner