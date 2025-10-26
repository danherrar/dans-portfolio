import type { ImagePlaceholder } from './placeholder-images';

export const SKILLS_DATA = {
  backend: ['Python', 'Django', 'Node.js', 'REST APIs'],
  ai_data: ['Langchain', 'Vertex AI'],
  devops: ['Docker', 'Docker Compose', 'Git'],
};

export type Project = {
  title: string;
  description: string;
  stack: string[];
  links: {
    github: string;
    diagram: string;
  };
  image: ImagePlaceholder;
};

export const PROJECTS_DATA: Project[] = [
  {
    title: 'Sistema de Verificación de Trabajadores',
    description: 'Sistema en Node.js para prevenir registros duplicados y asegurar la integridad de los datos de los trabajadores mediante un proceso de validación robusto.',
    stack: ['Node.js', 'REST APIs', 'Docker'],
    links: {
      github: 'https://github.com',
      diagram: '#',
    },
    image: {
      id: 'project1',
      description: 'Architecture diagram for the worker verification system.',
      imageUrl: 'https://picsum.photos/seed/project1/600/400',
      imageHint: 'architecture diagram'
    },
  },
  {
    title: 'App de Transformación de Datos con IA',
    description: 'Aplicación con Python y Langchain para automatizar la reestructuración y limpieza de grandes volúmenes de datos, mejorando la eficiencia del análisis posterior.',
    stack: ['Python', 'Langchain', 'Vertex AI', 'Streamlit'],
    links: {
      github: 'https://github.com',
      diagram: '#',
    },
    image: {
      id: 'project2',
      description: 'Data flow diagram for the AI data transformation app.',
      imageUrl: 'https://picsum.photos/seed/project2/600/400',
      imageHint: 'data flow'
    },
  },
];

export const EXPERIENCE_DATA = [
  {
    role: 'Software Engineer',
    company: 'Zubale',
    period: 'SEP 2021 - PRESENTE',
    description: [
      'Diseño de 3+ herramientas de automatización clave.',
      'Optimización de BBDD y queries en Django (mejora del 25% en APIs).',
      'Liderazgo en herramienta interna usada por +50 empleados.',
    ],
  },
];

export const NAV_LINKS = [
  { name: 'Proyectos', href: '#projects' },
  { name: 'Experiencia', href: '#experience' },
  { name: 'Contacto', href: '#contact' },
];
