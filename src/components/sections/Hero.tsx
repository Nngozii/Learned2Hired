import { UserPlus, Briefcase } from 'lucide-react'


function Hero() {
  return (
    <section className='items-center bg-brand-white px-8'>
       
        <div className='grid grid-cols-1 md:grid-cols-12 max-w-7xl mx-auto py-13 gap-12'>
            
        <div className='col-span-1 md:col-span-7'>

            <p className='text-brand-primary bg-brand-light mb-6 font-semibold text-[14px] px-4 py-2 rounded-full w-fit'>
            Connecting Data Talents with Oppourtunities
            </p>

            <h1 className='text-[36px] md:text-[56px] font-bold text-brand-dark leading-[1.2]'>
                Your Next Oppourtunity <br /> Starts
                <span className='text-brand-primary'> Here</span>
            </h1>

            <p className='text-[14px] md:text-[18px] text-brand-dark font-medium max-w-[421px]'>
                We connect skilled Data Professionals <br /> with companies looking for top analytical talents. <br />
                Join our growing talent pool and get discovered.
            </p>

            <div className='flex flex-col md:flex-row items-center gap-5 mt-8'>
                <button className='flex items-center gap-2 bg-brand-primary text-white px-6 py-2 rounded-lg cursor-pointer hover:opacity-90 transition-all'>
                    <UserPlus size={19} strokeWidth={2.5}/>
                    Join Talent Pool
                </button>
                
                <button className='flex items-center gap-2 bg-brand-light text-brand-primary border-brand-primary border px-6 py-2 rounded-lg cursor-pointer hover:opacity-90 transition-all'>
                    <Briefcase size={19} strokeWidth={2.5}/>
                    Request Talent
                </button>
            </div>
        </div>

        <div className='col-span-1 md:col-span-5'>
            <img src="hero_image.png" alt="Learned2Hired" />
        </div>
        </div>

        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-[24px] text-brand-dark font-bold'>
                8000+
            </h1>
            <p className='text-[14px] text-brand-dark font-bold'>Data Professionals in Our Community</p>
        </div>
    </section>
  )
}

export default Hero