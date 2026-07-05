import React from 'react';

interface PokeCardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  type?: 'fire' | 'water' | 'grass' | 'electric' | 'normal';
}

const typeColors = {
  fire: 'border-poke-red bg-red-50',
  water: 'border-poke-blue bg-blue-50',
  grass: 'border-green-500 bg-green-50',
  electric: 'border-poke-yellow bg-yellow-50',
  normal: 'border-gray-400 bg-gray-50',
};

export const PokeCard = ({ children, className = '', title, type = 'normal' }: PokeCardProps) => {
  return (
    <div className={`
      rounded-2xl p-6 poke-card-shadow border-t-8 ${typeColors[type]}
      ${className}
    `}>
      {title && (
        <h3 className="text-xl font-black mb-4 text-gray-800 uppercase tracking-tight flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-gray-400"></span>
          {title}
        </h3>
      )}
      {children}
    </div>
  );
};
