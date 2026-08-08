import { type ReactNode, useState, type ButtonHTMLAttributes, type MouseEvent } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  to?: string;
  href?: string;
  className?: string;
  target?: string;
  rel?: string;
}

export function Button({ children, to, href, className = '', target, rel, ...props }: ButtonProps) {
  const isWhiteButton = className.includes('bg-white') || className.includes('bg-brand-light');
  
  const [hoverColor, setHoverColor] = useState(isWhiteButton ? '#244299' : '#FFFFFF');
  const [hoverStyle, setHoverStyle] = useState({ top: '50%', left: '50%' });

  const handleMouseEnter = (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setHoverStyle({ top: `${y}px`, left: `${x}px` });

    // Different palettes based on button background
    const blueColors = [
      '#1E3A8A', // Deep blue
      '#2563EB', // Bright blue
      '#1D4ED8', // Medium blue
      '#244299', // Brand primary
      '#312E81', // Indigo deep
      '#4338CA', // Indigo medium
    ];
    
    const lightColors = [
      '#FFFFFF', // White
      '#F4F6FC', // Brand light
      '#E0E7FF', // Indigo 100
      '#DBEAFE', // Blue 100
      '#F3E8FF', // Purple 100
    ];

    const colors = isWhiteButton ? blueColors : lightColors;
    
    // Pick random color that is different from current if possible
    let newColor;
    do {
      newColor = colors[Math.floor(Math.random() * colors.length)];
    } while (newColor === hoverColor && colors.length > 1);
    
    setHoverColor(newColor);
  };

  const hoverTextColorClass = isWhiteButton ? 'group-hover:text-white' : 'group-hover:text-brand-dark';

  // Extract base button classes, allowing the caller to define padding and rounding
  const baseClasses = `relative overflow-hidden group inline-flex items-center justify-center transition-all duration-300 ${!className.includes('bg-') ? 'bg-brand-primary text-white' : ''} ${className}`;

  const content = (
    <>
      <span 
        className="absolute w-[250%] aspect-square rounded-full transition-transform duration-500 ease-out scale-0 group-hover:scale-100 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" 
        style={{ 
          backgroundColor: hoverColor,
          top: hoverStyle.top,
          left: hoverStyle.left
        }}
      ></span>
      <span className={`relative z-10 flex items-center gap-2 pointer-events-none transition-colors duration-300 ${hoverTextColorClass}`}>{children}</span>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={baseClasses} onMouseEnter={handleMouseEnter}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={baseClasses} onMouseEnter={handleMouseEnter}>
        {content}
      </a>
    );
  }

  return (
    <button className={baseClasses} onMouseEnter={handleMouseEnter} {...props}>
      {content}
    </button>
  );
}