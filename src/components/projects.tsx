import { PROJECTS_DATA } from '@/lib/data';
import ProjectCard from './project-card';

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <h3 className="font-headline text-4xl text-accent mb-8">&gt; Directorio: /proyectos_destacados</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {PROJECTS_DATA.map(project => <ProjectCard key={project.title} project={project} />)}
      </div>
    </section>
  );
}
