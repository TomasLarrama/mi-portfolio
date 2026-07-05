import React from 'react';
import { Header } from '@/src/components/Header';
import { Footer } from '@/src/components/Footer';
import { PokeCard } from '@/src/components/RetroCard';
import { PokeButton } from '@/src/components/RetroButton';
import { PokeInput } from '@/src/components/RetroInput';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow max-w-6xl mx-auto px-4 py-12 w-full">
        {/* Hero / Sobre Mí */}
        <section id="about" className="mb-20 scroll-mt-20">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="relative">
              <div className="w-48 h-48 rounded-full border-8 border-white poke-card-shadow overflow-hidden bg-gray-300 flex-shrink-0 relative z-10">
                <img 
                  src="/profile.jpg" 
                  alt="Tomas Larrama" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-5xl font-black text-gray-800 mb-4 uppercase tracking-tighter">
                Hola, soy <span className="text-poke-red italic">Tomas Larrama</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mb-6 font-medium">
                Desarrollador especializado en la creacion de Saas, paginas web y aplicaciones. Busco siempre estar actualizado con las nuevas tecnologias
              </p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mb-20 scroll-mt-20">
          <h2 className="text-3xl font-black text-center text-gray-800 mb-10 uppercase tracking-widest italic">
            Habilidades
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'React', color: 'bg-red-500' },
              { name: 'Next.js', color: 'bg-blue-600' },
              { name: 'JavaScript', color: 'bg-yellow-400 text-gray-900' },
              { name: 'TypeScript', color: 'bg-sky-400 text-gray-900' },
              { name: 'Tailwind CSS', color: 'bg-green-500' },
              { name: 'Node.js', color: 'bg-red-600' },
              { name: 'Python', color: 'bg-blue-500' },
              { name: 'PostgreSQL', color: 'bg-indigo-600' },
              { name: 'SQLite', color: 'bg-blue-400' },
              { name: 'Git', color: 'bg-gray-500' },
              { name: 'UI/UX Design', color: 'bg-yellow-500 text-gray-900' },
            ].map((skill) => (
              <div 
                key={skill.name} 
                className={`p-4 rounded-xl text-white font-black text-center poke-shadow transition-transform hover:scale-105 shadow-md ${skill.color}`}
              >
                {skill.name}
              </div>
            ))}
          </div>
        </section>

        {/* Proyectos */}
        <section id="projects" className="mb-20 scroll-mt-20">
          <h2 className="text-3xl font-black text-center text-gray-800 mb-10 uppercase tracking-widest italic">
            Proyectos
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <PokeCard title="Landingar.site" type="electric">
              <p className="text-gray-600 mb-6 font-medium">
                Proyecto actual desplegado. Optimizado para velocidad y conversión, enfocándose en una experiencia de usuario fluida.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="https://www.landingar.site" target="_blank" rel="noopener noreferrer" className="flex-1">
                  <PokeButton variant="yellow" className="w-full">
                    Ver Web →
                  </PokeButton>
                </a>
              </div>
            </PokeCard>

            <PokeCard title="FoxCash (abandonado)" type="fire">
              <p className="text-gray-600 mb-6 font-medium">
                Aplicación de finanzas personales. Un proyecto fundamental en mi aprendizaje de arquitectura de software y gestión de estado.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="https://github.com/TomasLarrama/foxcash">
                  <PokeButton variant="yellow" className="flex-1">
                  Repositorio 📂
                  </PokeButton>
                </a>
              </div>
              <div className="mt-3 text-center">
                <span className="text-xs text-gray-400 italic font-bold uppercase">Legacy</span>
              </div>
            </PokeCard>

            {/* Placeholder Projects */}
            {[1, 2].map((i) => (
              <PokeCard key={i} title={`Proyecto en Desarrollo ${i}`} type="normal">
                <a href=''>
                  <div className="h-32 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 italic font-bold">
                    Próximamente...
                  </div>
                </a>
              </PokeCard>
            ))}
          </div>
        </section>

        {/* Contacto */}
        <section id="contact" className="mb-20 scroll-mt-20">
          <h2 className="text-3xl font-black text-center text-gray-800 mb-10 uppercase tracking-widest italic">
            Contacto
          </h2>
          <div className="max-w-2xl mx-auto">
            <PokeCard type="water">
              <form name="contact" method="POST" data-netlify="true" className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                <input type="hidden" name="form-name" value="contact" />
                <PokeInput label="Nombre" name="nombre" placeholder="Tu nombre" required />
                <PokeInput label="Email" type="email" name="email" placeholder="tu@email.com" required />
                <div className="md:col-span-2">
                  <PokeInput label="Mensaje" name="mensaje" placeholder="Hola, me gustaría trabajar contigo..." required />
                </div>
                <div className="md:col-span-2 flex justify-center mt-4">
                  <PokeButton type="submit" variant="red" className="w-full md:w-auto px-12 py-3 text-lg">
                    Enviar Mensaje
                  </PokeButton>
                </div>
              </form>
            </PokeCard>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
