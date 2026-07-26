import { AlignLeft } from 'lucide-react'


function Navbar() {
  return (
    <nav className='flex justify-between items-center bg-white md:bg-brand-light py-3 px-6 mx-4 mt-4 md:mx-0 md:mt-0 rounded-2xl md:rounded-none border border-brand-primary/30 md:border-none'>
        <div>
            <img src="logo.png" alt="Learned2Hired" width={35} height={35} />
        </div>

        <div>
            <ul className='hidden md:flex gap-12 text-brand-primary text-[16px] font-medium'>
                <li><a href="/">Home</a></li>
                <li><a href="/">About Us</a></li>
                <li><a href="/">Sponsorship</a></li>
                <li><a href="/">Request Talent</a></li>
                <li><a href="/">Contact Us</a></li>
            </ul>
        </div>

        <button className='hidden md:block bg-brand-primary text-brand-light px-10 py-3 rounded-xl cursor-pointer hover:opacity-90 transition-all'>
            Join Talent Pool
        </button>

        <AlignLeft className="block md:hidden text-brand-primary cursor-pointer" size={28} />
    </nav>
  )
}

export default Navbar