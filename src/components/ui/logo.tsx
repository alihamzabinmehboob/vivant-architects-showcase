import React from 'react';

interface LogoProps {
  variant?: 'wordmark' | 'monogram';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'wordmark', className = '' }) => {
  if (variant === 'monogram') {
    return (
      <img
        src="/lovable-uploads/a53cbd50-cd8f-47da-970f-6b70a2119d28.png"
        alt="Vivant Architectural Consultants Logo"
        className={`w-12 h-12 object-contain ${className}`}
      />
    );
  }

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <img
        src="/lovable-uploads/a53cbd50-cd8f-47da-970f-6b70a2119d28.png"
        alt="Vivant Logo"
        className="w-12 h-12 object-contain"
      />
      <div className="flex flex-col">
        <span 
          className="text-foreground font-bold text-xl leading-tight"
          style={{
            fontFamily: 'var(--font-heading)',
            letterSpacing: '-0.5px'
          }}
        >
          VIVANT
        </span>
        <span 
          className="text-accent text-sm font-medium leading-tight"
          style={{
            fontFamily: 'var(--font-heading)',
            letterSpacing: '1px'
          }}
        >
          ARCHITECTURAL CONSULTANTS
        </span>
      </div>
    </div>
  );
};

export default Logo;