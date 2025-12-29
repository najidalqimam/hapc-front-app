import { useLanguage } from '@/lib/i18n';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Contact() {
  const { t, dir } = useLanguage();

  return (
    <footer id="contact" className="bg-background border-t border-border">
      {/* Vision 2030 Banner */}
      <div className="bg-emerald-900/10 border-b border-emerald-900/20 py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-8 justify-between">
            <div>
              <h3 className="text-2xl font-bold text-emerald-800 dark:text-emerald-400 mb-4">{t('vision2030Title')}</h3>
              <ul className="space-y-2 text-emerald-900/80 dark:text-emerald-300/80">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  {t('vision2030p1')}
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  {t('vision2030p2')}
                </li>
              </ul>
            </div>
            {/* Vision 2030 Logo Placeholder - purely CSS represented */}
            <div className="h-24 w-32 border-2 border-emerald-500/30 rounded-lg flex items-center justify-center text-emerald-600 font-bold text-xs tracking-widest bg-emerald-500/5">
              VISION 2030
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-primary">{t('contactTitle')}</h2>
            <p className="text-xl text-muted-foreground mb-8">{t('cta')}</p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">{t('contact')}</h4>
                  <p className="text-muted-foreground">{t('address')}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">{t('contact')}</h4>
                  <p className="text-muted-foreground" dir="ltr">+966 552860747</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">{t('contact')}</h4>
                  <a href="mailto:info@hphc-sa.com" className="text-muted-foreground hover:text-primary transition-colors">info@hphc-sa.com</a>
                </div>
              </div>
            </div>
          </div>

          <div className="h-full min-h-[300px] bg-secondary rounded-2xl overflow-hidden relative group">
            <a 
              href="https://maps.app.goo.gl/DTEoSoFj13mcLM9U6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute inset-0 block"
            >
              {/* Fallback Map Image or Iframe if available, otherwise a styled placeholder */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.717637508492!2d46.6719875!3d24.7025816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03673c683707%3A0xe677f5231c57373f!2sAl%20Sanam%20Towers!5e0!3m2!1sen!2ssa!4v1709040000000!5m2!1sen!2ssa" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(100%) invert(90%)' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity dark:invert-0"
              ></iframe>
              
              <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-sm p-4 rounded-xl border border-border flex items-center gap-3 shadow-lg group-hover:scale-[1.02] transition-transform">
                <div className="bg-primary/10 p-2 rounded-full text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-bold text-sm">{t('contact')}</p>
                  <p className="text-xs text-muted-foreground line-clamp-1">{t('address')}</p>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          {t('copyright')}
        </div>
      </div>
    </footer>
  );
}
