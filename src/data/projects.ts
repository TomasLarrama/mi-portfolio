export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  repo: string;
  type: 'web' | 'mobile';
}

export const projects: Project[] = [
  {
    id: 1,
    title: "App de Gestión Mobile",
    description: "Aplicación móvil desarrollada con Expo y React Native con integración a PostgreSQL.",
    tags: ["React Native", "Expo", "TypeScript", "PostgreSQL"],
    repo: "https://github.com/tu-usuario/proyecto-mobile",
    type: 'mobile'
  },
  {
    id: 2,
    title: "Dashboard Web",
    description: "Interfaz administrativa para control de datos en tiempo real.",
    tags: ["Next.js", "TypeScript", "TailwindCSS"],
    link: "https://tusitio.com",
    repo: "https://github.com/tu-usuario/proyecto-web",
    type: 'web'
  }
];