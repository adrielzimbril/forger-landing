import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  isFooter?: boolean;
}

export default function Logo({ className = "", size = 32, showText = true, isFooter = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 group ${className}`}>
      <div
        className="relative flex items-center justify-center overflow-hidden shrink-0 rounded-xl group-hover:shadow-lg group-hover:shadow-orange-500/20 transition-all duration-500 ease-out"
        style={{ 
          width: size, 
          height: size,
          background: 'linear-gradient(135deg, #1a1a1a 0%, #333 100%)',
          boxShadow: '0 4px 12px -2px rgba(0,0,0,0.1), inset 0 0 0 1px rgba(255,255,255,0.1)'
        }}
      >
        <svg 
          width={size * 0.55} 
          height={size * 0.55} 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 transition-transform duration-500 group-hover:scale-110"
        >
          {/* Main Document Shape */}
          <path 
            d="M19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H14L21 10V19C21 20.1046 20.1046 21 19 21Z" 
            fill="#F47A2C"
          />
          {/* Folded Corner */}
          <path 
            d="M14 3V10H21L14 3Z" 
            fill="white" 
            fillOpacity="0.3"
          />
          {/* Forged Lines */}
          <path 
            d="M7 8H12" 
            stroke="white" 
            strokeWidth="1.5" 
            strokeLinecap="round"
          />
          <path 
            d="M7 12H17" 
            stroke="white" 
            strokeWidth="1.5" 
            strokeLinecap="round"
          />
          <path 
            d="M7 16H17" 
            stroke="white" 
            strokeWidth="1.5" 
            strokeLinecap="round"
          />
        </svg>
        
        {/* Animated Glow */}
        <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Shine Sweep */}
        <div className="absolute top-0 left-[-150%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] group-hover:left-[150%] transition-all duration-1000 ease-in-out" />
      </div>
      
      {showText && (
        <span className={`text-xl font-bold tracking-tight flex items-center ${isFooter ? 'text-white' : 'text-neutral-900'}`} style={{ fontFamily: 'var(--font-serif), serif' }}>
          Resume<span className="text-[#F47A2C]">Forge</span>
        </span>
      )}
    </div>
  );
}

