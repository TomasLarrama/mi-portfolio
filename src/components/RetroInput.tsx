import React from 'react';

interface PokeInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const PokeInput = ({ label, ...props }: PokeInputProps) => {
  return (
    <div className="flex flex-col gap-1 mb-4">
      <label className="font-black text-xs uppercase text-gray-500 tracking-wider">{label}</label>
      <input
        {...props}
        className="
          px-4 py-2 rounded-lg border-2 border-gray-300 
          focus:border-poke-blue focus:ring-2 focus:ring-poke-blue/20
          outline-none transition-all
          bg-white
        "
      />
    </div>
  );
};
