
import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ className = "w-8 h-8", size = 32 }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_0_8px_rgba(20,184,166,0.5)]"
      >
        {/* Abstract 3D Cube/Signal Shape */}
        <path
          d="M50 10L85 30V70L50 90L15 70V30L50 10Z"
          className="stroke-accent"
          strokeWidth="6"
          strokeLinejoin="round"
        />
        <path
          d="M50 10V50L85 70"
          className="stroke-accent opacity-50"
          strokeWidth="4"
        />
        <path
          d="M50 50L15 70"
          className="stroke-accent opacity-50"
          strokeWidth="4"
        />
        {/* Core Nexus Dot */}
        <circle cx="50" cy="50" r="8" className="fill-accent animate-pulse" />
        
        {/* Alignment Lines */}
        <path
          d="M30 40H70"
          className="stroke-white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M35 50H65"
          className="stroke-white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M40 60H60"
          className="stroke-white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default Logo;
