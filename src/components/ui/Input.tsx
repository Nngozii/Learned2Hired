import type { InputHTMLAttributes } from 'react';

export function Input({ className = '', ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input 
      className={`w-full border border-gray-300 rounded-lg px-4 py-3 text-[13px] md:text-sm focus:outline-none focus:border-brand-primary ${className}`}
      {...props} 
    />
  );
}
