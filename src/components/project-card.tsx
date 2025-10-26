'use client';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import Image from 'next/image';
import type { Project } from '@/lib/data';
import { useI18n } from '@/lib/i18n';

const WindowButton = ({ color }: { color: string }) => (
  <div className={`w-3.5 h-3.5 ${color} rounded-none`} />
);

export default function ProjectCard({ project }: { project: Project }) {
  const { t } = useI18n();
  return (
    <div className="bg-secondary border-4 border-border rounded-none flex flex-col shadow-lg">
      <div className="bg-brand-purple flex items-center justify-between px-3 py-1.5 border-b-4 border-border">
        <p className="font-body text-foreground">{project.title}</p>
        <div className="flex items-center gap-1.5">
          <WindowButton color="bg-brand-orange" />
          <WindowButton color="bg-primary" />
          <WindowButton color="bg-destructive" />
        </div>
      </div>

      <div className="p-4 flex-grow flex flex-col">
        <div className="relative w-full aspect-[4/3] border-2 border-dashed border-placeholder-border mb-4 flex items-center justify-center bg-black/20">
            <Image 
              src={project.image.imageUrl}
              alt={project.image.description}
              fill
              className="object-cover"
              data-ai-hint={project.image.imageHint}
            />
             <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
                <p className="text-foreground/80 font-body bg-black/50 px-2 py-1">(placeholder: {project.title.toLowerCase().replace(/ /g, '_')}.png)</p>
            </div>
        </div>
        <p className="font-body text-foreground/90 flex-grow text-lg">{project.description}</p>
        <div className="flex flex-wrap gap-2 my-4">
          {project.stack.map(tech => (
            <Badge key={tech} variant="default" className="rounded-none bg-accent text-accent-foreground font-body text-sm">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex gap-4 mt-auto pt-4">
          <Button asChild variant="outline" className="rounded-none font-body border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors w-full">
            <Link href={project.links.github} target="_blank" rel="noopener noreferrer">{t.projects.viewCode}</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-none font-body border-muted-foreground text-muted-foreground hover:bg-muted-foreground hover:text-secondary transition-colors w-full">
            <Link href={project.links.diagram}>{t.projects.viewDiagram}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
