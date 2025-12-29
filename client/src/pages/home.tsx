import { LanguageProvider } from '@/lib/i18n';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Values } from '@/components/Values';
import { Partners } from '@/components/Partners';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
        <Navbar />
        <Hero />
        <About />
        <Values />
        <Partners />
        <Contact />
      </div>
    </LanguageProvider>
  );
}
