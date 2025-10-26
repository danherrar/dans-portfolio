'use client';

import Link from 'next/link';
import { NAV_LINKS } from '@/lib/data';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const sections = NAV_LINKS.map(link => document.getElementById(link.href.substring(1)));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="font-headline text-2xl text-foreground" onClick={() => setIsMenuOpen(false)}>
          Daniel Herrarte
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                'font-body text-lg text-foreground hover:text-primary transition-colors',
                activeSection === link.href.substring(1) ? 'text-primary' : ''
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-secondary">
           <div className="flex flex-col items-center gap-4 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  'font-body text-lg text-foreground hover:text-primary transition-colors',
                  activeSection === link.href.substring(1) ? 'text-primary' : ''
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
      <div className="h-1 bg-brand-purple" />
    </header>
  );
}
