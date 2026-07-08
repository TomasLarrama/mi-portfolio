import React from 'react';

export const Footer = () => {
  return (
    <footer className="w-full bg-poke-blue-dark py-8 border-t-8 border-poke-blue mt-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-white font-black uppercase tracking-widest">
          2026 <span className="text-poke-yellow">Tomas Larrama</span> | Desarrollador Full-Stack
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="https://www.linkedin.com/in/tomas-larrama-sosa-a49b57345/" target="_blank" rel="noopener noreferrer" className="text-poke-yellow hover:underline font-black uppercase text-xs">LinkedIn</a>
          <a href="https://github.com/TomasLarrama" target="_blank" rel="noopener noreferrer" className="text-poke-yellow hover:underline font-black uppercase text-xs">GitHub</a>
          <a href="https://www.instagram.com/tomi.mf16/" target="_blank" rel="noopener noreferrer" className="text-poke-yellow hover:underline font-black uppercase text-xs">Instagram</a>
        </div>
      </div>
    </footer>
  );
};
