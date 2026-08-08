import { X, UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HambugsProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Hambugs({ isOpen, onClose }: HambugsProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-white flex flex-col px-10 py-12 animate-in fade-in slide-in-from-right-8 duration-300">
        
      <button 
        onClick={onClose}
        className="text-[#2D459D] hover:opacity-70 transition-opacity mb-16 -ml-2"
        aria-label="Close menu"
      >
        <X size={32} strokeWidth={1.5} />
      </button>

      <nav className="flex flex-col gap-8 flex-1">
        <Link to="/" className="text-[#2D459D] text-[17px] font-medium hover:opacity-70 transition-opacity" onClick={onClose}>
          Home
        </Link>
        <Link to="/about" className="text-[#2D459D] text-[17px] font-medium hover:opacity-70 transition-opacity" onClick={onClose}>
          About Us
        </Link>
        <Link to="/sponsorship" className="text-[#2D459D] text-[17px] font-medium hover:opacity-70 transition-opacity" onClick={onClose}>
          Sponsorship
        </Link>
        <Link to="/request-talent" className="text-[#2D459D] text-[17px] font-medium hover:opacity-70 transition-opacity" onClick={onClose}>
          Request Talent
        </Link>
        <Link to="/contact" className="text-[#2D459D] text-[17px] font-medium hover:opacity-70 transition-opacity" onClick={onClose}>
          Contact Us
        </Link>
      </nav>

      <div className="pb-10 flex justify-center">
        <Link 
          to="/join-talent-pool" 
          onClick={onClose}
          className="flex items-center justify-center gap-2 bg-[#2D459D] text-white px-8 py-3.5 rounded-xl font-medium hover:bg-[#1E3A8A] transition-colors"
        >
          <UserPlus size={20} strokeWidth={2} />
          Join Talent Pool
        </Link>
      </div>
    </div>
  );
}
