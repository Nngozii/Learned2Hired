import { Mail, Phone, MapPin, Copyright, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <footer className='px-4 py-5 md:py-8 md:bg-brand-light md:py-12 md:px-20'>
             <div className="md:hidden bg-brand-light rounded-t-[2rem] pt-8 pb-8 px-6 flex flex-col items-center">
        <h3 className="text-brand-dark text-xl font-bold mb-6">Contact Us</h3>
        <div className="flex justify-between w-full px-2">
          <a href="mailto:hello@learned2hired.com" className="flex flex-col items-center gap-2 text-brand-dark font-semibold">
            <Mail size={24} strokeWidth={2.5} className="text-[#2D459D]" />
            <span className="text-[13px]">Email</span>
          </a>
          <a href="https://whatsapp.com/channel/0029VazWeLyKLaHlKsDfoe0H" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-2 text-brand-dark font-semibold">
            <MessageCircle size={24} strokeWidth={2.5} className="text-[#2D459D]" />
            <span className="text-[13px]">Whatsapp</span>
          </a>
          <a href="tel:+2349078632032" className="flex flex-col items-center gap-2 text-brand-dark font-semibold">
            <Phone size={24} strokeWidth={2.5} className="text-[#2D459D]" />
            <span className="text-[13px]">Call</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-2 text-brand-dark font-semibold">
            <MapPin size={24} strokeWidth={2.5} className="text-[#2D459D]" />
            <span className="text-[13px]">Location</span>
          </a>
        </div>
      </div>

<div className='md:hidden bg-brand-dark rounded-b-[2rem] pt-8 px-6 pb-6'>
    <div className='grid grid-cols-2 gap-2'>
        <div className='flex flex-col gap-1'>
            <div className='flex items-center justify-start gap-1'>
                <img src="logo.png" alt="Learned2Hired" width={30} height={30} className='brightness-0 invert'/>
                <span className="text-white font-semibold text-[14px] uppercase tracking-wider">
                    Learned2Hired
                </span>
            </div>

            <p className="text-white text-xs font-semibold mt-2">
                Turning skills into career
            </p>
        </div>
        
        <div className="pl-4">
            <h4 className='font-semibold text-white text-base'>Quick Link</h4>
            <ul className='flex flex-col gap-2'>
                <li><Link to="/about" className='text-brand-light text-[13px]'>About Us</Link></li>
                <li><Link to="/request-talent" className='text-brand-light text-[13px]'>Hire Talent</Link></li>
                <li><Link to="/join-talent-pool" className='text-brand-light text-[13px]'>Join Talent Pool</Link></li>
                <li><Link to="/sponsorship" className='text-brand-light text-[13px]'>Sponsorship</Link></li>
            </ul>
        </div>
    </div>
    <p className='flex text-white text-[11px] items-center justify-center gap-1 mt-8 whitespace-nowrap'><Copyright size={14} strokeWidth={2.5} /> 2026 Learned to Hired. All rights reserved</p>
</div>

           <div className='hidden md:grid grid-cols-4 gap-8'>
                <div>
                    <div className="flex items-center gap-1">
                        <img src="logo.png" alt="Learned2Hired" width={35} height={35} />
                        <span className="text-brand-dark font-semibold text-[24px] uppercase tracking-wider">
                            Learned2Hired
                        </span>
                    </div>
                    <p className="text-brand-dark text-sm font-semibold mt-2">
                        Turning skills into career
                    </p>
                </div>

                <div>
                    <h4 className='text-brand-dark font-bold mb-4'>For Candidates</h4>
                    <ul className='text-brand-dark/80 flex flex-col gap-2 text-[15px]'>
                        <li><Link to="/join-talent-pool" className="hover:text-brand-primary hover:underline hover:font-bold transition-all">Join Talent Pool</Link></li>
                        <li><a href="/#howitworks" className="hover:text-brand-primary hover:underline hover:font-bold transition-all">How it works</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className='text-brand-dark font-bold mb-4'>For Companies</h4>
                    <ul className='text-brand-dark/80 flex flex-col gap-2 text-[15px]'>
                        <li><Link to="/request-talent" className="hover:text-brand-primary hover:underline hover:font-bold transition-all">Hire Talent</Link></li>
                        <li><a href="/#howitworks" className="hover:text-brand-primary hover:underline hover:font-bold transition-all">How it works</a></li>
                        <li><Link to="/sponsorship" className="hover:text-brand-primary hover:underline hover:font-bold transition-all">Sponsorship</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className='text-brand-dark font-bold mb-4'>Contact Us</h4>
                    <ul className='text-brand-dark/80 flex flex-col gap-2 text-[15px]'>
                        <li><a href="mailto:hello@learned2hired.com" className="flex items-center gap-2 hover:text-brand-primary hover:underline hover:font-bold transition-all"><Mail size={16} strokeWidth={2.5} /> hello@learned2hired.com</a></li>
                        <li><a href="tel:+2349078632032" className="flex items-center gap-2 hover:text-brand-primary hover:underline hover:font-bold transition-all"><Phone size={16} strokeWidth={2.5} /> +234 9078632032</a></li>
                        <li><a href="https://whatsapp.com/channel/0029VazWeLyKLaHlKsDfoe0H" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-brand-primary hover:underline hover:font-bold transition-all"><MessageCircle size={16} strokeWidth={2.5} /> WhatsApp Channel</a></li>
                        <li><a href="#" className="flex items-center gap-2 hover:text-brand-primary hover:underline hover:font-bold transition-all"><MapPin size={16} strokeWidth={2.5} /> Lagos, Nigeria</a></li>
                    </ul>
                </div>
            </div>

            <p className='hidden md:flex text-brand-primary flex items-center justify-center gap-1 mt-12'><Copyright size={19} strokeWidth={2.5} /> 2026 Learned2Hired. All rights reserved.</p>
        </footer>
    )
}

export default Footer