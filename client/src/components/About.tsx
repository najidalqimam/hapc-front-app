import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Lightbulb, Users } from 'lucide-react';

export function About() {
  const { t } = useLanguage();

  const features = [
    { icon: Users, title: 'aboutTitle', text: 'aboutText' },
    { icon: Target, title: 'visionTitle', text: 'visionText' },
    { icon: Lightbulb, title: 'missionTitle', text: 'missionText' },
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow bg-background/50 backdrop-blur-sm">
                <CardContent className="p-8 flex flex-col items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {t(feature.title)}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(feature.text)}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 p-8 md:p-12 bg-primary text-primary-foreground rounded-2xl overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold">{t('uspTitle')}</h3>
              <p className="text-primary-foreground/90 text-lg leading-relaxed max-w-2xl">
                {t('uspText')}
              </p>
            </div>
            <div className="shrink-0">
               {/* Decorative element or secondary CTA */}
               <div className="h-16 w-16 rounded-full border-2 border-white/20 flex items-center justify-center">
                 <Target className="h-8 w-8 text-white/80" />
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
