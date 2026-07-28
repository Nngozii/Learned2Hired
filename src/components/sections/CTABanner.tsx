import { UserPlus, Briefcase } from 'lucide-react'

function CTABanner() {
  return (
    <section className="py-8 md:py-12 px-4 md:px-10 max-w-7xl mx-auto">
      <div className='flex flex-col items-center gap-6 md:grid md:grid-cols-2 md:gap-0 md:bg-brand-dark md:text-white md:rounded-[32px] md:p-17'>

      <div className='w-full bg-brand-dark text-brand-white p-5 rounded-2xl md:bg-transparent md:p-0 md:rounded-none md:pr-12 md:border-r md:border-white/20'>
        <h3 className='text-[22px] font-bold mb-4 leading-tight'>
Looking for Your Next Role?
        </h3>

        <p className='mb-4 max-w-[300px] text-[16px]'>
Take the next steps in your career. Upload your CV and become part of our growing community.
        </p>

        <button className='flex items-center gap-2 mt-3 text-semibold bg-brand-light text-brand-primary px-6 py-2 rounded-lg cursor-pointer hover:opacity-90 transition-all'>
          <UserPlus size={19} strokeWidth={2.5}/>
Join Talent Pool
        </button>
      </div>

      <div className='w-full bg-brand-light text-brand-primary p-5 rounded-2xl md:bg-transparent md:border-none md:text-white md:p-0 md:rounded-none md:pl-12'>
<h3 className='text-[22px] font-bold mb-4 leading-tight'>
Need to Hire Data Talents?
        </h3>

        <p className='mb-4 max-w-[300px] text-[16px] text-brand-dark md:text-gray-300'>
 We connect you with the right Data Professional for your team. Fast and stress-free.
        </p>

        <button className='flex items-center gap-2 mt-3 text-semibold bg-brand-primary text-white px-6 py-2 rounded-lg cursor-pointer hover:opacity-90 transition-all'>
          <Briefcase size={19} strokeWidth={2.5}/>
          Request Talent
        </button>
      </div>
      </div>
    </section>
  )
}

export default CTABanner