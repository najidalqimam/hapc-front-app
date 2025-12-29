import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n';
import { Shield, Zap, Scale, HeartHandshake } from 'lucide-react';

export function Values() {
  const { t } = useLanguage();

  const values = [
    { key: 'value1', icon: Shield },
    { key: 'value2', icon: Zap },
    { key: 'value3', icon: Scale },
    { key: 'value4', icon: HeartHandshake },
  ];

  return (
    <section id="values" className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('valuesTitle')}
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((item, index) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 rounded-2xl bg-secondary/20 hover:bg-primary/5 transition-colors duration-300 border border-transparent hover:border-primary/20"
            >
              <div className="mb-6 p-4 rounded-xl bg-background shadow-sm w-fit group-hover:scale-110 transition-transform duration-300 text-primary">
                <item.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                {t(`${item.key}Title`)}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t(`${item.key}Desc`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
