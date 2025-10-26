'use client';
import { SKILLS_DATA } from '@/lib/data';

const SkillTag = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-secondary border border-foreground/20 px-3 py-1 font-body text-foreground text-lg rounded-none">
    {children}
  </div>
);

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <h3 className="font-headline text-4xl text-primary mb-8">{SKILLS_DATA.title}</h3>
      <div className="flex flex-col gap-8">
        <div>
          <h4 className="font-headline text-2xl text-accent mb-4">{SKILLS_DATA.backend.title}</h4>
          <div className="flex flex-wrap gap-3">
            {SKILLS_DATA.backend.items.map(skill => <SkillTag key={skill}>{skill}</SkillTag>)}
          </div>
        </div>
        <div>
          <h4 className="font-headline text-2xl text-accent mb-4 mt-8">{SKILLS_DATA.ai_data.title}</h4>
          <div className="flex flex-wrap gap-3">
            {SKILLS_DATA.ai_data.items.map(skill => <SkillTag key={skill}>{skill}</SkillTag>)}
          </div>
        </div>
        <div>
          <h4 className="font-headline text-2xl text-accent mb-4 mt-8">{SKILLS_DATA.devops.title}</h4>
          <div className="flex flex-wrap gap-3">
            {SKILLS_DATA.devops.items.map(skill => <SkillTag key={skill}>{skill}</SkillTag>)}
          </div>
        </div>
      </div>
    </section>
  );
}
