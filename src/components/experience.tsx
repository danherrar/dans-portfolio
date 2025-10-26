'use client';
import { useI18n } from '@/lib/i18n';

export default function Experience() {
  const { t } = useI18n();

  return (
    <section id="experience" className="py-20">
      <h3 className="font-headline text-4xl text-accent mb-12">{t.experience.title}</h3>
      <div className="relative pl-8 border-l-4 border-muted">
        {t.experience.jobs.map((job, index) => (
          <div key={index} className="mb-12 relative">
            <div className="absolute -left-[22px] top-1 w-6 h-6 bg-accent rounded-none border-4 border-background flex items-center justify-center" style={{ transform: 'rotate(45deg)'}}>
               <div className="w-2 h-2 bg-background" style={{ transform: 'rotate(-45deg)'}} />
            </div>
            <h4 className="font-headline text-2xl text-accent">{job.role}</h4>
            <p className="font-body text-md text-foreground/80 mt-1">@ {job.company} | {job.period}</p>
            <ul className="mt-4 space-y-2 font-body text-foreground text-lg">
              {job.description.map((item, i) => 
                <li key={i} className="flex items-start">
                  <span className="text-accent mr-3 mt-1.5 text-xl">•</span>
                  <span>{item}</span>
                </li>
              )}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
