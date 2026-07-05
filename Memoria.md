# Memoria del Proyecto: Portfolio Tomas Larrama

Este documento registra todas las decisiones de diseño y cambios implementados en el portfolio.

## 🎨 Concepto Visual
- **Estilo:** UI inspirada en la estética de Pokémon (colores vibrantes, bordes gruesos, formas redondeadas).
- **Paleta de Colores:**
    - Rojo Pokédex (`#ef5350`) para el Header y acentos.
    - Azul Maestro (`#3b4cca`) para botones primarios.
    - Amarillo Eléctrico (`#ffde00`) para botones secundarios y detalles.
    - Fondo gris neutro con patrón de puntos.

## 🛠️ Implementaciones Técnicas

### 1. Estructura y Layout
- Framework: Next.js 16 (App Router) con Tailwind CSS 4.
- Header: Totalmente sólido (opaco), con tipografía en negrita (`font-black`) y color negro para asegurar el contraste sobre el fondo rojo.
- Footer: Fondo azul oscuro con texto amarillo.

### 2. Componentes Personalizados
- `PokeButton`: Botones con efecto `glass-reflection` (overlay brillante superior), sin animaciones de hover/active para mantener un estilo sólido y estático.
- `PokeCard`: Tarjetas con borde superior grueso basado en el "tipo" del proyecto y fondo coordinado.
- `PokeInput`: Inputs limpios con etiquetas en mayúsculas.

### 3. Secciones y Contenido
- **Sobre Mí:** Nombre "Tomas Larrama", foto de perfil real (`profile.jpg`) y descripción profesional personalizada.
- **Habilidades:** Grid de badges con colores sólidos de Tailwind (ej: React Rojo, TS Celeste, JS Amarillo).
- **Proyectos:** 
    - `Landingar.site`: Botón único "Ver Web →" con enlace directo.
    - `FoxCash`: Botón único "Repositorio 📂" y marca de "Legacy".
    - Placeholders para proyectos futuros.
- **Contacto:** Formulario estilizado dentro de una `PokeCard` tipo agua.

## 🔄 Historial de Cambios Clave
- Migración de estilo "Retro 2010" $\rightarrow$ "UI Inspirada en Pokémon".
- Ajuste de legibilidad en Header: Texto Blanco $\rightarrow$ Negro y botones Azul $\rightarrow$ Amarillo.
- Eliminación de terminología temática (Medallas $\rightarrow$ Habilidades) para mantener el perfil profesional.
- Implementación de imagen de perfil real desde la carpeta de Descargas.
- Optimización de botones de proyectos: Eliminación de botones redundantes y adición de overlay brillante.
- Corrección de errores de sintaxis JSX en la sección de proyectos.

