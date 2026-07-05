import React from 'react';
import Link from 'next/link';

export const Header = () => {
  const navItems = [
    { label: 'Sobre Mí', href: '#about' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Contacto', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-poke-red shadow-xl border-b-8 border-poke-red-dark">
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-full border-4 border-black flex items-center justify-center relative shadow-inner">
            <div className="absolute w-full h-1 bg-black top-1/2 -translate-y-1/2"></div>
            <div className="absolute w-3 h-3 bg-white border-2 border-black rounded-full top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10"></div>
          </div>
          <div className="text-black font-black text-2xl uppercase tracking-tighter">
            TOMAS<span className="text-black font-black"> LARRAMA</span>
          </div>
        </div>
        <nav className="hidden md:flex gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="
                px-4 py-2 rounded-lg text-black font-black text-xs uppercase tracking-widest
                bg-poke-yellow hover:bg-yellow-300 transition-all
                poke-shadow
              "
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="md:hidden text-black font-black">
          ☰
        </div>
      </div>
    </header>
  );
};
