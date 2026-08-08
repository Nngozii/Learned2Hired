import { useState, type ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  items: ReactNode[];
  desktopGridClasses?: string;
}

export function Carousel({ items, desktopGridClasses = "md:grid md:grid-cols-3 gap-4" }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1 >= items.length ? 0 : prev + 1));
  const prev = () => setCurrentIndex((prev) => (prev - 1 < 0 ? items.length - 1 : prev - 1));

  return (
    <div className="w-full relative">
      {/* Mobile view (Carousel) */}
      <div className="md:hidden overflow-hidden relative w-full pb-2">
        <div 
          className="flex transition-transform duration-500 ease-in-out w-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, idx) => (
            <div key={idx} className="w-full shrink-0 px-2">
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Controls */}
      <div className="md:hidden flex items-center justify-center gap-6 mt-6">
        <button 
          onClick={prev} 
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors focus:outline-none"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} strokeWidth={2.5} />
        </button>
        <div className="flex gap-2">
          {items.map((_, idx) => (
            <button 
              key={idx} 
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-colors focus:outline-none ${idx === currentIndex ? 'bg-brand-primary' : 'bg-gray-300'}`}
            />
          ))}
        </div>
        <button 
          onClick={next} 
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors focus:outline-none"
          aria-label="Next slide"
        >
          <ChevronRight size={20} strokeWidth={2.5} />
        </button>
      </div>

      {/* Desktop view (Grid) */}
      <div className={`hidden ${desktopGridClasses}`}>
        {items.map((item, idx) => (
          <div key={idx} className="h-full">{item}</div>
        ))}
      </div>
    </div>
  );
}
