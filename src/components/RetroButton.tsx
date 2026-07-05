import React from 'react';

interface PokeButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'red' | 'blue' | 'yellow';
}

export const PokeButton = ({ children, onClick, className = '', variant = 'red' }: PokeButtonProps) => {
  const variants = {
    red: 'bg-poke-red text-white',
    blue: 'bg-poke-blue text-white',
    yellow: 'bg-poke-yellow text-poke-blue-dark',
  };

  return (
    <button
      onClick={onClick}
      className={`
        ${className}
        ${variants[variant]}
        px-6 py-2 rounded-full font-black uppercase tracking-wide
        poke-shadow glass-reflection
      `}
    >
      {children}
    </button>
  );
};
