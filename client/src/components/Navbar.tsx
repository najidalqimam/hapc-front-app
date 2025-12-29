import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { Globe, Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import hpacLogo from '@assets/_شركة_هايست_بيك_أوتوموتيف__1766994137275.png';

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'values', href: '#values' },
    { key: 'partners', href: '#partners' },
    { key: 'contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/90 backdrop-blur-md border-b border-white/10 py-2' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <img 
            src={hpacLogo} 
            alt="HPAC Logo" 
            className="h-10 w-auto object-contain brightness-0 invert" 
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center bg-white/5 backdrop-blur-sm rounded-full px-6 py-2 border border-white/10">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-sm font-medium text-slate-300 hover:text-white px-4 py-1 transition-colors relative group"
            >
              {t(item.key)}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all group-hover:w-1/2" />
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={toggleLanguage}
            className="hidden md:flex gap-2 items-center rounded-full border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white hover:border-white/40"
          >
            <Globe className="h-4 w-4" />
            <span>{language === 'ar' ? 'English' : 'عربي'}</span>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side={language === 'ar' ? 'right' : 'left'} className="w-[300px] border-l-white/10 bg-background/95 backdrop-blur-xl">
              <div className="flex flex-col gap-8 mt-8">
                <div className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <a
                      key={item.key}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-slate-200 hover:text-primary transition-colors"
                    >
                      {t(item.key)}
                    </a>
                  ))}
                </div>
                <div className="h-px bg-white/10" />
                <Button variant="outline" onClick={toggleLanguage} className="justify-start gap-2 border-white/20 text-white hover:bg-white/10">
                  <Globe className="h-4 w-4" />
                  {language === 'ar' ? 'English' : 'عربي'}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
