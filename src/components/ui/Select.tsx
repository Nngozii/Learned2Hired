import type { SelectHTMLAttributes } from 'react';

export function Select({ className = '', children, ...props }: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select 
      className={`w-full border border-gray-300 rounded-lg px-4 py-3 text-[13px] md:text-sm text-gray-500 focus:outline-none focus:border-brand-primary bg-white ${className}`}
      {...props}
    >
      {children}
    </select>
  );
}
