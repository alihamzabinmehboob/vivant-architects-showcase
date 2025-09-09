import React from 'react';

interface LogoProps {
  variant?: 'wordmark' | 'monogram';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'wordmark', className = '' }) => {
  if (variant === 'monogram') {
    return (
      <svg
        viewBox="0 0 48 48"
        className={`w-8 h-8 ${className}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Vivant Architectural Consultants Monogram"
      >
        {/* Monogram - V and A in architectural style */}
        <rect width="48" height="48" rx="8" fill="hsl(var(--primary))" />
        <path
          d="M12 35 L18 15 L22 15 L28 35 L24 35 L22.5 30 L17.5 30 L16 35 Z M18.5 26 L21.5 26 L20 20 Z"
          fill="hsl(var(--accent-gold))"
        />
        <path
          d="M30 15 L34 15 L40 35 L36 35 L32 18 L30 25 L28 35 L24 35 L30 15 Z"
          fill="hsl(var(--primary-foreground))"
          opacity="0.9"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 240 48"
      className={`h-8 w-auto ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Vivant Architectural Consultants"
    >
      {/* Wordmark */}
      <text
        x="0"
        y="32"
        className="fill-current"
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '24px',
          fontWeight: '600',
          letterSpacing: '-0.5px'
        }}
      >
        VIVANT
      </text>
      <text
        x="0"
        y="44"
        className="fill-gold opacity-80"
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '9px',
          fontWeight: '400',
          letterSpacing: '2px'
        }}
      >
        ARCHITECTURAL CONSULTANTS
      </text>
      {/* Architectural accent line */}
      <rect x="110" y="20" width="2" height="16" className="fill-gold" />
      <rect x="115" y="18" width="8" height="2" className="fill-gold opacity-60" />
      <rect x="115" y="34" width="12" height="1" className="fill-gold opacity-40" />
    </svg>
  );
};

export default Logo;