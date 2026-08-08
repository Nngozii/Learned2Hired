import { UserPlus, Briefcase } from 'lucide-react'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'
import { AnimatedCounter } from '../ui/AnimatedCounter'

function Hero() {
  return (
    <section className='items-center bg-transparent px-8 relative z-10'>
       
        <div className='grid grid-cols-1 md:grid-cols-12 max-w-7xl mx-auto py-13 gap-12'>
            
        <div className='col-span-1 md:col-span-7 flex flex-col justify-center'>
            <Reveal direction="down" delay={100}>
                <p className='text-brand-primary bg-brand-light mb-6 font-semibold text-[14px] px-4 py-2 rounded-full w-fit'>
                Connecting Data Talents with Opportunities
                </p>
            </Reveal>

            <Reveal direction="left" delay={300}>
                <h1 className='text-[36px] md:text-[56px] font-bold text-brand-dark leading-[1.2] mb-4 relative'>
                    Your Next Opportunity <br /> Starts
                    <span className='text-brand-primary relative'>
                        {' '}Here
                        <span className="absolute bottom-0 left-0 w-full h-[6px] bg-brand-primary/20 rounded-full animate-pulse"></span>
                    </span>
                    <span className="inline-block ml-1 animate-pulse font-mono font-normal">_</span>
                </h1>
            </Reveal>

            <Reveal direction="left" delay={500}>
                <p className='text-[14px] md:text-[18px] text-brand-dark font-medium max-w-[421px]'>
                    We connect skilled Data Professionals <br /> with companies looking for top analytical talents. <br />
                    Join our growing talent pool and get discovered.
                </p>
            </Reveal>

            <Reveal direction="up" delay={700}>
                <div className='flex flex-col md:flex-row items-center gap-5 mt-8'>
                    <Button to="/join-talent-pool" className='px-6 py-3 rounded-lg shadow-sm'>
                        <UserPlus size={19} strokeWidth={2.5}/>
                        Join Talent Pool
                    </Button>
                    
                    <Button to="/request-talent" className='bg-brand-light text-brand-primary border-brand-primary border px-6 py-3 rounded-lg shadow-sm'>
                        <Briefcase size={19} strokeWidth={2.5}/>
                        Request Talent
                    </Button>
                </div>
            </Reveal>
        </div>

        <div className='col-span-1 md:col-span-5 flex items-center justify-center'>
            <Reveal direction="none" delay={800} className="w-full">
                <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-brand-primary/10 to-brand-primary/5 rounded-full blur-2xl animate-pulse"></div>
                    <img src="hero_image.png" alt="Learned2Hired" className="relative z-10 hover:scale-105 transition-transform duration-700 ease-out" />
                </div>
            </Reveal>
        </div>
        </div>

        <Reveal direction="up" delay={1000}>
            <div className='flex flex-col items-center justify-center py-12'>
                <h1 className='text-[32px] md:text-[40px] text-brand-primary font-bold tracking-tight'>
                    <AnimatedCounter value={8000} duration={2500} formatter={(val) => val.toLocaleString() + '+'} />
                </h1>
                <p className='text-[14px] md:text-[16px] text-brand-dark font-semibold mt-1 bg-brand-light px-4 py-1 rounded-full'>
                    Data Professionals in Our Community
                </p>
            </div>
        </Reveal>
    </section>
  )
}

export default Hero