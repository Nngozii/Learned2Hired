import { Mail, Phone, MapPin, Copyright } from 'lucide-react'

function Footer() {
  return (
    <footer className='bg-brand-light py-12 px-20'>

    <div className='grid grid-cols-4 gap-8'>
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
            <ul className='text-brand-primary flex flex-col gap-1'>
                <li><a href="#">Join Talent Pool</a></li>
                <li><a href="#">How it works</a></li>
            </ul>
        </div>
        
        <div>
            <h4 className='text-brand-dark font-bold mb-4'>For Companies</h4>
            <ul className='text-brand-primary flex flex-col gap-1'>
                <li><a href="#">Hire Talent</a></li>
                <li><a href="#">How it works</a></li>
                <li><a href="#">Why Partner with Us</a></li>
            </ul>
        </div>
        
        <div>
            <h4 className='text-brand-dark font-bold mb-4'>Contact Us</h4>
            <ul className='text-brand-primary flex flex-col gap-1'>
                <li><a href="#" className="flex items-center gap-2"><Mail size={16} strokeWidth={3}/> [EMAIL_ADDRESS]</a></li>
                <li><a href="#" className="flex items-center gap-2"><Phone size={16} strokeWidth={3}/> +234 9078632032</a></li>
                <li><a href="#" className="flex items-center gap-2"><MapPin size={16} strokeWidth={3}/> Lagos, Nigeria</a></li>
            </ul>
        </div>
        </div>

        <p className='text-brand-primary flex items-center justify-center gap-1 mt-12'><Copyright size={19} strokeWidth={2.5}/> 2026 Learned2Hired. All rights reserved.</p>
        
    </footer>
  )
}

export default Footer