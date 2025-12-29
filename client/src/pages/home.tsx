import { LanguageProvider } from '@/lib/i18n';
import { ThemeProvider } from '@/lib/theme';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Values } from '@/components/Values';
import { Partners } from '@/components/Partners';
import { Contact } from '@/components/Contact';
import { WhatsAppButton } from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="hpac-theme">
      <LanguageProvider>
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20 transition-colors duration-300">
          <Navbar />
          <Hero />
          <About />
          <Values />
          <Partners />
          <Contact />
          <WhatsAppButton />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
