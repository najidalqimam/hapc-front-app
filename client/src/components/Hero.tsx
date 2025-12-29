import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { ChevronRight, ArrowRight } from 'lucide-react';
import heroBg from '@assets/generated_images/futuristic_geometric_mountain_peak_wireframe_in_dark_blue_and_silver.png';

export function Hero() {
  const { t, dir } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Dynamic Geometric Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Geometric Peak" 
          className="w-full h-full object-cover opacity-60 dark:opacity-60 mix-blend-luminosity"
        />
        {/* Light mode gradient overlay: White to transparent */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent dark:from-background dark:via-background/80" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: dir === 'rtl' ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={`max-w-2xl ${dir === 'rtl' ? 'text-right' : 'text-left'}`}
          >
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              {t('heroTitle')}
            </div>

            <h1 className={`text-5xl md:text-7xl font-bold mb-6 text-foreground tracking-tight leading-[1.1] ${dir === 'ltr' ? 'font-en-headings uppercase' : ''}`}>
              {dir === 'ltr' ? (
                <>
                  THE POWER <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">DRIVING</span><br />
                  MOBILITY
                </>
              ) : (
                <>
                  القوة التي <span className="text-transparent bg-clip-text bg-gradient-to-l from-primary to-blue-400">تدفع</span><br />
                  المستقبل
                </>
              )}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed border-l-4 border-primary pl-6 py-1">
              {t('heroDesc')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-14 text-lg px-8 rounded-none skew-x-[-10deg] border border-primary bg-primary hover:bg-primary/90 text-primary-foreground transition-all group shadow-lg shadow-primary/20">
                <span className="skew-x-[10deg] flex items-center gap-2">
                  {t('contact')}
                  {dir === 'rtl' ? <ChevronRight className="h-5 w-5 group-hover:-translate-x-1 transition-transform" /> : <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />}
                </span>
              </Button>
              <Button size="lg" variant="ghost" className="h-14 text-lg px-8 rounded-none skew-x-[-10deg] text-foreground hover:bg-foreground/5 border border-foreground/10">
                <span className="skew-x-[10deg]">{t('about')}</span>
              </Button>
            </div>
          </motion.div>

          {/* Abstract Visual Elements - Only show on dark mode or adjust color for light */}
          <div className="hidden lg:block relative h-[600px]">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-primary/20 rounded-full animate-[spin_60s_linear_infinite]" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-foreground/10 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
             
             {/* Floating Cards */}
             <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute top-20 right-10 p-6 bg-card/80 backdrop-blur-md border border-border w-64 skew-x-[-5deg] shadow-xl"
             >
                <div className="skew-x-[5deg]">
                  <h4 className="text-primary font-bold mb-1">ELITO</h4>
                  <p className="text-xs text-muted-foreground">Power & Performance</p>
                </div>
             </motion.div>

             <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute bottom-40 left-10 p-6 bg-card/80 backdrop-blur-md border border-border w-64 skew-x-[-5deg] shadow-xl"
             >
                <div className="skew-x-[5deg]">
                  <h4 className="text-primary font-bold mb-1">DRONE VOLT</h4>
                  <p className="text-xs text-muted-foreground">Aerial Surveillance</p>
                </div>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
