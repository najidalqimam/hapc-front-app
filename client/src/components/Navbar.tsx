import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n';
import { useTheme } from '@/lib/theme';
import { Button } from '@/components/ui/button';
import { Globe, Menu, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import hpacLogo from '@assets/_شركة_هايست_بيك_أوتوموتيف__1766994137275.png';
import { ContactModal } from '@/components/ContactModal';

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'values', href: '#values' },
    { key: 'partners', href: '#partners' },
    // Removed direct href for contact to handle via modal
  ];

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsContactOpen(true);
    setIsOpen(false); // Close mobile menu if open
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/90 backdrop-blur-md border-b border-border py-2' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <img 
              src={hpacLogo} 
              alt="HPAC Logo" 
              className="h-10 w-auto object-contain dark:brightness-0 dark:invert" 
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center bg-background/50 backdrop-blur-sm rounded-full px-6 py-2 border border-border">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary px-4 py-1 transition-colors relative group"
              >
                {t(item.key)}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all group-hover:w-1/2" />
              </a>
            ))}
            {/* Contact Link triggering Modal */}
            <button
              onClick={handleContactClick}
              className="text-sm font-medium text-foreground/80 hover:text-primary px-4 py-1 transition-colors relative group cursor-pointer"
            >
              {t('contact')}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all group-hover:w-1/2" />
            </button>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hidden md:flex rounded-full text-foreground hover:bg-muted"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="hidden md:flex gap-2 items-center rounded-full border-border bg-transparent text-foreground hover:bg-muted"
            >
              <Globe className="h-4 w-4" />
              <span>{language === 'ar' ? 'English' : 'عربي'}</span>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden text-foreground">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side={language === 'ar' ? 'right' : 'left'} className="w-[300px] border-l-border bg-background/95 backdrop-blur-xl">
                <div className="flex flex-col gap-8 mt-8">
                  <div className="flex flex-col gap-4">
                    {navItems.map((item) => (
                      <a
                        key={item.key}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {t(item.key)}
                      </a>
                    ))}
                    <button
                      onClick={handleContactClick}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors text-start"
                    >
                      {t('contact')}
                    </button>
                  </div>
                  <div className="h-px bg-border" />
                  <div className="flex gap-2">
                    <Button variant="outline" onClick={toggleLanguage} className="flex-1 justify-start gap-2 border-border text-foreground hover:bg-muted">
                      <Globe className="h-4 w-4" />
                      {language === 'ar' ? 'English' : 'عربي'}
                    </Button>
                    <Button variant="outline" onClick={toggleTheme} className="px-4 border-border text-foreground hover:bg-muted">
                      {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      <ContactModal open={isContactOpen} onOpenChange={setIsContactOpen} />
    </>
  );
}
