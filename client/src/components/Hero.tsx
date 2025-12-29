import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import heroBg from '@assets/generated_images/abstract_automotive_technology_background_with_blue_and_metallic_tones.png';

export function Hero() {
  const { t, dir } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Automotive Tech Background" 
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent dark:from-background/95 dark:to-background/40" />
        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 pt-20">
        <div className={`max-w-3xl ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={`text-5xl md:text-7xl font-bold mb-6 text-foreground tracking-tight leading-tight ${dir === 'ltr' ? 'font-en-headings' : ''}`}>
              <span className="text-primary block mb-2">{t('heroTitle')}</span>
              <span className="text-3xl md:text-5xl opacity-90 block">{t('heroTagline')}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              {t('heroDesc')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6">
                {t('contact')}
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-background/50 backdrop-blur-sm">
                {t('about')}
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-3 text-sm font-medium text-foreground/80 bg-background/80 p-3 rounded-lg backdrop-blur-sm border border-border/50">
                  <div className="h-2 w-2 rounded-full bg-primary shrink-0" />
                  {t(`point${i}`)}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block text-primary">
        <ChevronDown className="h-8 w-8" />
      </div>
    </section>
  );
}
