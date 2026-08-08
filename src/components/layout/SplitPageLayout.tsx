import type { ReactNode } from 'react';
import { BackgroundGrid } from '../ui/BackgroundGrid';

interface SplitPageLayoutProps {
  mobileHeader: ReactNode;
  desktopHeader: ReactNode;
  children: ReactNode;
  leftContent?: ReactNode;
}

export default function SplitPageLayout({ mobileHeader, desktopHeader, children, leftContent }: SplitPageLayoutProps) {
  return (
    <div className="w-full max-w-[1440px] mx-auto p-4 md:py-10 md:px-8 lg:px-12">
      <div className="w-full min-h-[calc(100vh-160px)] bg-white md:bg-brand-dark flex flex-col md:flex-row rounded-3xl md:rounded-[40px] overflow-hidden shadow-sm md:shadow-md border border-gray-100">
        
        <div className="hidden md:flex w-[30%] lg:w-[35%] shrink-0 items-center justify-center p-10 relative overflow-hidden">
          {/* Abstract Data-Inspired Background Graphic */}
          <BackgroundGrid 
            opacity={30} 
            dotColor="#ffffff" 
            patternSize={24} 
            fadeEdges={true} 
          />
          {/* Content */}
          <div className="z-10 relative w-full flex justify-center">
            {leftContent}
          </div>
        </div>

        <div className="w-full md:w-[70%] lg:w-[65%] bg-white md:rounded-l-[48px] lg:rounded-l-[64px] flex flex-col justify-center px-4 py-8 md:px-16 lg:px-24 md:py-16">
        
        <div className="md:hidden mb-8">
          {mobileHeader}
        </div>

        <div className="hidden md:block mb-10">
          {desktopHeader}
        </div>

        <div className="w-full max-w-3xl">
          {children}
        </div>

      </div>
    </div>
    </div>
  );
}
