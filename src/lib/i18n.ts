'use client';
import { createContext, useContext, useState, ReactNode } from 'react';
import type { ImagePlaceholder } from './placeholder-images';

type Project = {
  id: string;
  title: string;
  description: string;
  stack: string[];
  links: {
    github: string;
    diagram: string;
  };
  image: ImagePlaceholder;
};

type Experience = {
  role: string;
  company: string;
  period: string;
  description: string[];
};

type NavLink = {
  name: string;
  href: string;
};

type Translations = {
  navLinks: NavLink[];
  hero: {
    subtitle: string;
    cta: {
      projects: string;
      contact: string;
    };
  };
  skills: {
    title: string;
    backend: { title: string; items: string[] };
    ai_data: { title: string; items: string[] };
    devops: { title: string; items: string[] };
  };
  projects: {
    title: string;
    viewCode: string;
    viewDiagram: string;
    data: Project[];
  };
  experience: {
    title: string;
    jobs: Experience[];
  };
  contact: {
    title: string;
    description: string;
  };
};

const translations: Record<'en' | 'es', Translations> = {
  en: {
    navLinks: [
      { name: 'Projects', href: '#projects' },
      { name: 'Experience', href: '#experience' },
      { name: 'Contact', href: '#contact' },
    ],
    hero: {
      subtitle: 'Backend Developer with experience in Python, Django, Node.js, and automation. I transform data and optimize systems to create efficient solutions.',
      cta: {
        projects: 'View Projects',
        contact: 'Contact Me',
      },
    },
    skills: {
      title: '> Loading Arsenal...',
      backend: { title: 'Backend', items: ['Python', 'Django', 'Node.js', 'REST APIs'] },
      ai_data: { title: 'AI & Data', items: ['Langchain', 'Vertex AI'] },
      devops: { title: 'Containers & DevOps', items: ['Docker', 'Docker Compose', 'Git'] },
    },
    projects: {
      title: '> Directory: /featured_projects',
      viewCode: 'View Code (GitHub)',
      viewDiagram: 'View Diagram',
      data: [
        {
          id: 'project1',
          title: 'Worker Verification System',
          description: 'A Node.js system to prevent duplicate registrations and ensure worker data integrity through a robust validation process.',
          stack: ['Node.js', 'REST APIs', 'Docker'],
          links: {
            github: 'https://github.com/dherrarte/AUTH_API_SW',
            diagram: '#',
          },
          image: {
            id: 'project1',
            description: 'Architecture diagram for the worker verification system.',
            imageUrl: 'https://picsum.photos/seed/project1/600/400',
            imageHint: 'architecture diagram',
          },
        },
        {
          id: 'project2',
          title: 'AI Data Transformation App',
          description: 'An application using Python and Langchain to automate the restructuring and cleaning of large data volumes, improving the efficiency of subsequent analysis.',
          stack: ['Python', 'Langchain', 'Vertex AI', 'Streamlit'],
          links: {
            github: 'https://github.com/dherrarte/Transformaci-n_de_datos',
            diagram: '#',
          },
          image: {
            id: 'project2',
            description: 'Data flow diagram for the AI data transformation app.',
            imageUrl: 'https://picsum.photos/seed/project2/600/400',
            imageHint: 'data flow',
          },
        },
      ],
    },
    experience: {
      title: '> Service_History.log',
      jobs: [
        {
          role: 'Software Engineer',
          company: 'Zubale',
          period: 'SEP 2021 - PRESENT',
          description: [
            'Designed 3+ key automation tools.',
            'Optimized DBs and queries in Django (25% improvement in APIs).',
            'Led an internal tool used by +50 employees.',
          ],
        },
      ],
    },
    contact: {
      title: '> Initiate_Contact',
      description: "Ready to build something or just want to chat? Send me a message.",
    },
  },
  es: {
    navLinks: [
      { name: 'Proyectos', href: '#projects' },
      { name: 'Experiencia', href: '#experience' },
      { name: 'Contacto', href: '#contact' },
    ],
    hero: {
      subtitle: 'Desarrollador Backend con experiencia en Python, Django, Node.js y automatización. Transformo datos y optimizo sistemas para crear soluciones eficientes.',
      cta: {
        projects: 'Ver Proyectos',
        contact: 'Contactar',
      },
    },
    skills: {
      title: '> Cargando Arsenal...',
      backend: { title: 'Backend', items: ['Python', 'Django', 'Node.js', 'REST APIs'] },
      ai_data: { title: 'AI & Data', items: ['Langchain', 'Vertex AI'] },
      devops: { title: 'Containers & DevOps', items: ['Docker', 'Docker Compose', 'Git'] },
    },
    projects: {
      title: '> Directorio: /proyectos_destacados',
      viewCode: 'Ver Código (GitHub)',
      viewDiagram: 'Ver Diagrama',
      data: [
        {
          id: 'project1',
          title: 'Sistema de Verificación de Trabajadores',
          description: 'Sistema en Node.js para prevenir registros duplicados y asegurar la integridad de los datos de los trabajadores mediante un proceso de validación robusto.',
          stack: ['Node.js', 'REST APIs', 'Docker'],
          links: {
            github: 'https://github.com/dherrarte/AUTH_API_SW',
            diagram: '#',
          },
          image: {
            id: 'project1',
            description: 'Architecture diagram for the worker verification system.',
            imageUrl: 'https://picsum.photos/seed/project1/600/400',
            imageHint: 'architecture diagram',
          },
        },
        {
          id: 'project2',
          title: 'App de Transformación de Datos con IA',
          description: 'Aplicación con Python y Langchain para automatizar la reestructuración y limpieza de grandes volúmenes de datos, mejorando la eficiencia del análisis posterior.',
          stack: ['Python', 'Langchain', 'Vertex AI', 'Streamlit'],
          links: {
            github: 'https://github.com/dherrarte/Transformaci-n_de_datos',
            diagram: '#',
          },
          image: {
            id: 'project2',
            description: 'Data flow diagram for the AI data transformation app.',
            imageUrl: 'https://picsum.photos/seed/project2/600/400',
            imageHint: 'data flow',
          },
        },
      ],
    },
    experience: {
      title: '> Historial_de_Servicio.log',
      jobs: [
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
      ],
    },
    contact: {
      title: '> Iniciar_Contacto',
      description: '¿Listo para construir algo o simplemente quieres charlar? Envíame un mensaje.',
    },
  },
};

type Lang = 'en' | 'es';

type I18nContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations[Lang];
};

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');
  const t = translations[lang];

  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === null) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}
