import React from 'react';

interface CoaLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  textColor?: 'dark' | 'light';
}

export const CoaLogo: React.FC<CoaLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  textColor = 'dark',
}) => {
  const iconSize = size === 'sm' ? 'w-10 h-10' : size === 'lg' ? 'w-16 h-16' : 'w-12 h-12';
  const titleSize = size === 'sm' ? 'text-base' : size === 'lg' ? 'text-2xl' : 'text-lg';
  const tagSize = size === 'sm' ? 'text-[10px]' : size === 'lg' ? 'text-xs' : 'text-[11px]';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div
        className={`${iconSize} rounded-2xl bg-white p-1.5 shadow-sm border border-slate-200/80 flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-105`}
        title="Classes of Academia"
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-sm"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Dynamic Red Human Silhouette Leaping in Triumph */}
          <circle cx="50" cy="16" r="6" fill="#DC2626" />
          <path
            d="M 50,25 C 38,22 28,31 24,37 C 33,34 43,30 48,32 C 45,38 43,46 45,51 C 49,43 51,35 52,32 C 57,30 67,34 76,37 C 72,31 62,22 50,25 Z"
            fill="#DC2626"
          />

          {/* Open Book - Outer Spine & Base in Deep Royal Blue */}
          <path
            d="M 12,78 C 30,68 46,73 50,81 C 54,73 70,68 88,78 L 82,42 C 68,34 53,39 50,45 C 47,39 32,34 18,42 Z"
            fill="#0284C7"
            fillOpacity="0.12"
            stroke="#0369A1"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />

          {/* Center Spine dividing left and right pages */}
          <path d="M 50,45 L 50,81" stroke="#0369A1" strokeWidth="3" strokeLinecap="round" />

          {/* Cyan / Sky Blue Inner Page Contour Lines */}
          <path
            d="M 18,52 C 30,44 44,48 48,54"
            stroke="#0EA5E9"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          <path
            d="M 16,62 C 29,54 44,58 48,64"
            stroke="#38BDF8"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M 82,52 C 70,44 56,48 52,54"
            stroke="#0EA5E9"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          <path
            d="M 84,62 C 71,54 56,58 52,64"
            stroke="#38BDF8"
            strokeWidth="2.2"
            strokeLinecap="round"
          />

          {/* Centered Bold Letters: C O A */}
          <text
            x="24"
            y="66"
            fontSize="11"
            fontWeight="900"
            fill="#0284C7"
            fontFamily="Outfit, system-ui, sans-serif"
            letterSpacing="0.5"
          >
            C
          </text>
          <text
            x="44"
            y="68"
            fontSize="11"
            fontWeight="900"
            fill="#0284C7"
            fontFamily="Outfit, system-ui, sans-serif"
            letterSpacing="0.5"
          >
            O
          </text>
          <text
            x="64"
            y="66"
            fontSize="11"
            fontWeight="900"
            fill="#0284C7"
            fontFamily="Outfit, system-ui, sans-serif"
            letterSpacing="0.5"
          >
            A
          </text>

          {/* Base Curved Accent */}
          <path
            d="M 44,81 C 48,78 52,78 56,81"
            stroke="#DC2626"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <div
            className={`font-heading font-extrabold tracking-tight leading-none ${titleSize} ${
              textColor === 'light' ? 'text-white' : 'text-slate-900'
            }`}
          >
            CLASSES OF ACADEMIA
          </div>
          <div
            className={`font-bold tracking-wider uppercase mt-1 flex items-center gap-1.5 ${tagSize} ${
              textColor === 'light' ? 'text-amber-300' : 'text-rose-600'
            }`}
          >
            <span>Futuristic</span>
            <span className="opacity-60">•</span>
            <span>Join For Success</span>
          </div>
        </div>
      )}
    </div>
  );
};
