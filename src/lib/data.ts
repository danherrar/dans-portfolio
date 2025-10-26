import type { ImagePlaceholder } from './placeholder-images';

export const SKILLS_DATA = {
  backend: ['Python', 'Django', 'Node.js', 'REST APIs'],
  ai_data: ['Langchain', 'Vertex AI'],
  devops: ['Docker', 'Docker Compose', 'Git'],
};

export type Project = {
  id: string,
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
      imageHint: 'architecture diagram'
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
      imageHint: 'data flow'
    },
  },
];

export const EXPERIENCE_DATA = [
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
];

export const NAV_LINKS = [
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];
