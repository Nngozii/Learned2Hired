interface BackgroundGridProps {
  className?: string;
  dotColor?: string;
  opacity?: number;
  patternSize?: number;
  fadeEdges?: boolean;
}

export function BackgroundGrid({ 
  className = '', 
  dotColor = '#1E3A8A', 
  opacity = 10,
  patternSize = 40,
  fadeEdges = false
}: BackgroundGridProps) {
  const safeColorId = dotColor.replace(/[^a-zA-Z0-9]/g, '');

  return (
    <div className={`absolute inset-0 w-full h-full pointer-events-none z-0 opacity-${opacity} ${className}`}>
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={`dotGrid-${safeColorId}`} width={patternSize} height={patternSize} patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill={dotColor} />
          </pattern>
          {fadeEdges && (
            <>
              <radialGradient id="gradFade" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="white" stopOpacity="1" />
                <stop offset="80%" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <mask id="fadeMask">
                <rect width="100%" height="100%" fill="url(#gradFade)" />
              </mask>
            </>
          )}
        </defs>
        <rect 
          width="100%" 
          height="100%" 
          fill={`url(#dotGrid-${safeColorId})`} 
          mask={fadeEdges ? "url(#fadeMask)" : undefined} 
        />
      </svg>
    </div>
  );
}
