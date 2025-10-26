import type { ImagePlaceholder } from './placeholder-images';

export const NAV_LINKS = [
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const HERO_DATA = {
  subtitle: 'Backend Developer with experience mostly in Python, Django, automation, I transform data and optimize systems to create efficient solutions I am also interested on indie game dev with Python and some pixel art (IG:@pixel.gt_)',
  cta: {
    projects: 'View Projects',
    contact: 'Contact Me',
  },
};

export const SKILLS_DATA = {
  title: '> Loading Arsenal...',
  backend: { title: 'Backend', items: ['Python', 'Django', 'Node.js', 'REST APIs', 'Python Meta-Programming', 'OOP', 'Flask'] },
  ai_data: { title: 'AI & Data', items: ['Langchain', 'Vertex AI'] },
  devops: { title: 'Containers & DevOps', items: ['Docker', 'Docker Compose', 'Git'] },
};

export type Project = {
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

export const PROJECTS_DATA = {
    title: '> Directory: /featured_projects',
    viewCode: 'View Code (GitHub)',
    viewDiagram: 'View Diagram',
    data: [] as Project[],
    emptyState: "New projects will be uploaded soon...",
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string[];
};

export const EXPERIENCE_DATA = {
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
      ]
};


export const CONTACT_DATA = {
    title: '> Initiate_Contact',
    description: "Ready to build something or just want to chat? Send me a message.",
};