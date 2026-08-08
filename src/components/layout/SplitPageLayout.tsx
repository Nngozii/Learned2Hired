import type { ReactNode } from 'react';

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
          <div className="absolute inset-0 w-full h-full opacity-30 pointer-events-none z-0">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="dotGrid" width="24" height="24" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.5" fill="#ffffff" />
                </pattern>
                <radialGradient id="gradFade" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="white" stopOpacity="1" />
                  <stop offset="80%" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <mask id="fadeMask">
                  <rect width="100%" height="100%" fill="url(#gradFade)" />
                </mask>
              </defs>
              <rect width="100%" height="100%" fill="url(#dotGrid)" mask="url(#fadeMask)" />
            </svg>
          </div>
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
