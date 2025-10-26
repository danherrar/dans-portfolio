'use client';
import ProjectCard from './project-card';
import { PROJECTS_DATA } from '@/lib/data';

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <h3 className="font-headline text-4xl text-accent mb-8">{PROJECTS_DATA.title}</h3>
      {PROJECTS_DATA.data.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS_DATA.data.map(project => <ProjectCard key={project.title} project={project} />)}
        </div>
      ) : (
        <div className="text-center text-foreground/80 font-body text-xl border-2 border-dashed border-placeholder-border rounded-none py-20 bg-black/20">
          <p>{PROJECTS_DATA.emptyState}</p>
        </div>
      )}
    </section>
  );
}
