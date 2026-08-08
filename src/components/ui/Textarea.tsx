import type { TextareaHTMLAttributes } from 'react';

export function Textarea({ className = '', ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea 
      className={`w-full border border-gray-300 rounded-lg px-4 py-3 text-[13px] md:text-sm focus:outline-none focus:border-brand-primary min-h-[120px] ${className}`}
      {...props} 
    />
  );
}
