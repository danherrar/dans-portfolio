'use client';
import ProjectCard from './project-card';
import { useI18n } from '@/lib/i18n';

export default function Projects() {
  const { t } = useI18n();
  return (
    <section id="projects" className="py-20">
      <h3 className="font-headline text-4xl text-accent mb-8">{t.projects.title}</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {t.projects.data.map(project => <ProjectCard key={project.title} project={project} />)}
      </div>
    </section>
  );
}
