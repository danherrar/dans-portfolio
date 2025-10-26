'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { HERO_DATA } from '@/lib/data';

export default function Hero() {
  return (
    <section id="hero" className="flex min-h-[calc(100vh-85px)] flex-col items-center justify-center text-center py-20">
      <h1 className="font-headline text-7xl md:text-9xl text-foreground">
        Daniel Herrarte
      </h1>
      <h2 className="font-body text-2xl md:text-4xl text-accent mt-4 flex items-center">
        &gt; Software Developer
        <span className="blinking-cursor ml-2">_</span>
      </h2>
      <p className="max-w-3xl mt-6 text-lg md:text-xl text-foreground">
        {HERO_DATA.subtitle}
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <Button asChild className="font-body text-lg rounded-none bg-action-blue text-foreground px-6 h-12 transition-transform hover:-translate-y-0.5 border-2 border-transparent">
          <Link href="#projects">{HERO_DATA.cta.projects}</Link>
        </Button>
        <Button asChild variant="outline" className="font-body text-lg rounded-none border-2 border-destructive text-destructive px-6 h-12 transition-transform hover:-translate-y-0.5 hover:bg-destructive/10">
          <Link href="#contact">{HERO_DATA.cta.contact}</Link>
        </Button>
      </div>
    </section>
  );
}
