import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n';
import { Shield, Zap, Scale, HeartHandshake, ArrowUpRight } from 'lucide-react';

export function Values() {
  const { t } = useLanguage();

  const values = [
    { key: 'value1', icon: Shield, colSpan: 'md:col-span-2', bg: 'bg-primary/20' },
    { key: 'value2', icon: Zap, colSpan: 'md:col-span-1', bg: 'bg-secondary' },
    { key: 'value3', icon: Scale, colSpan: 'md:col-span-1', bg: 'bg-secondary' },
    { key: 'value4', icon: HeartHandshake, colSpan: 'md:col-span-2', bg: 'bg-primary/20' },
  ];

  return (
    <section id="values" className="py-24 bg-background relative">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
             <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
               {t('valuesTitle')}
             </h2>
             <p className="text-muted-foreground text-lg">
               The principles that drive our innovation and trust in the market.
             </p>
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent hidden md:block mb-6" />
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {values.map((item, index) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${item.colSpan} group relative overflow-hidden rounded-3xl border border-white/5 bg-card/50 hover:bg-card/80 transition-all duration-500`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="absolute top-6 right-6 p-2 rounded-full border border-white/10 bg-white/5 group-hover:bg-primary group-hover:border-primary transition-colors">
                 <ArrowUpRight className="h-5 w-5 text-white" />
              </div>

              <div className="h-full flex flex-col justify-end p-8 relative z-10">
                <div className={`mb-auto w-12 h-12 rounded-xl flex items-center justify-center ${item.bg} text-white`}>
                  <item.icon className="h-6 w-6" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">
                  {t(`${item.key}Title`)}
                </h3>
                <p className="text-slate-400 leading-relaxed max-w-[90%]">
                  {t(`${item.key}Desc`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
