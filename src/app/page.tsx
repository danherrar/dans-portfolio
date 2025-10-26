import Contact from '@/components/contact';
import Experience from '@/components/experience';
import Hero from '@/components/hero';
import Navbar from '@/components/navbar';
import Projects from '@/components/projects';
import Skills from '@/components/skills';
import { I18nProvider } from '@/lib/i18n.tsx';

export default function Home() {
  return (
    <I18nProvider>
      <div className="flex min-h-screen flex-col bg-background">
        <Navbar />
        <main className="container mx-auto flex-grow px-4 md:px-8">
          <Hero />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
      </div>
    </I18nProvider>
  );
}
