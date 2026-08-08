import { useState } from 'react';
import { AlignLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import Hambugs from './Hambugs';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className='flex justify-between items-center bg-white md:bg-brand-light py-3 px-6 mx-4 mt-4 md:mx-0 md:mt-0 rounded-2xl md:rounded-none border border-brand-primary/30 md:border-none'>
          <div>
              <img src="logo.png" alt="Learned2Hired" width={35} height={35} />
          </div>

          <div>
              <ul className='hidden md:flex gap-12 text-brand-primary text-[16px] font-medium'>
                  <li>
                    <Link to="/" className="relative group pb-1">
                      Home
                      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-brand-primary transition-all duration-300 group-hover:w-full rounded-full"></span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="relative group pb-1">
                      About Us
                      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-brand-primary transition-all duration-300 group-hover:w-full rounded-full"></span>
                    </Link>
                  </li>
                  <li>
                    <a href="/#howitworks" className="relative group pb-1">
                      How it works
                      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-brand-primary transition-all duration-300 group-hover:w-full rounded-full"></span>
                    </a>
                  </li>
                  <li>
                    <Link to="/sponsorship" className="relative group pb-1">
                      Sponsorship
                      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-brand-primary transition-all duration-300 group-hover:w-full rounded-full"></span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/request-talent" className="relative group pb-1">
                      Request Talent
                      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-brand-primary transition-all duration-300 group-hover:w-full rounded-full"></span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="relative group pb-1">
                      Contact Us
                      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-brand-primary transition-all duration-300 group-hover:w-full rounded-full"></span>
                    </Link>
                  </li>
              </ul>
          </div>

          <div className="hidden md:block">
            <Button to="/join-talent-pool" className='px-10 py-3 rounded-xl hover:shadow-lg'>
                Join Talent Pool
            </Button>
          </div>

          <button 
            className="block md:hidden text-brand-primary cursor-pointer hover:opacity-70 transition-opacity"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <AlignLeft size={28} />
          </button>
      </nav>

      <Hambugs isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  )
}

export default Navbar