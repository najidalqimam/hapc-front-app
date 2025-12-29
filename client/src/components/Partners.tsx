import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n';
import { Battery, Lock, Plane, Building2, ShieldCheck, Truck, Cpu } from 'lucide-react';

export function Partners() {
  const { t } = useLanguage();

  const partners = [
    { key: 'partner1', icon: Battery },
    { key: 'partner2', icon: Lock },
    { key: 'partner3', icon: Plane },
  ];

  const markets = [
    { key: 'market1', icon: Truck },
    { key: 'market2', icon: ShieldCheck },
    { key: 'market3', icon: Building2 },
    { key: 'market4', icon: Cpu },
  ];

  return (
    <section id="partners" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} 
      />

      <div className="container relative z-10 px-4 md:px-6">
        {/* Partners */}
        <div className="mb-24">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center"
          >
            {t('partnersTitle')}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partners.map((item, index) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors"
              >
                <div className="h-12 w-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-6 text-blue-400">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-en-headings tracking-wide">{t(`${item.key}Title`)}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {t(`${item.key}Desc`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Markets */}
        <div>
          <h3 className="text-3xl font-bold mb-10 text-center opacity-90">{t('marketsTitle')}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {markets.map((item, index) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5"
              >
                <item.icon className="h-10 w-10 mb-4 text-blue-400" />
                <span className="font-medium text-slate-200">{t(`${item.key}`)}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
