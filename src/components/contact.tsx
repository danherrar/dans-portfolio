import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Contact() {
  return (
    <section id="contact" className="py-20 text-center border-t-4 border-secondary mt-12">
      <h3 className="font-headline text-4xl text-primary mb-4">&gt; Iniciar_Contacto</h3>
      <p className="text-lg text-foreground/80 mb-8 max-w-md mx-auto">¿Listo para construir algo o simplemente quieres charlar? Envíame un mensaje.</p>
      
      <Button asChild className="h-auto rounded-none bg-action-red-dark text-foreground font-body text-xl px-8 py-4 transition-transform hover:-translate-y-0.5">
        <a href="mailto:danielherrarte90@gmail.com">
          <Mail className="mr-3 h-6 w-6" />
          danielherrarte90@gmail.com
        </a>
      </Button>

      <div className="mt-12 flex justify-center gap-8">
        <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Github className="h-10 w-10" />
           <span className="sr-only">GitHub</span>
        </Link>
        <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Linkedin className="h-10 w-10" />
           <span className="sr-only">LinkedIn</span>
        </Link>
      </div>
    </section>
  );
}
