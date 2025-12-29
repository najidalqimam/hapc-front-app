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

          <div className="h-full min-h-[300px] bg-secondary rounded-2xl flex items-center justify-center text-muted-foreground">
            {/* Map Placeholder */}
            <div className="text-center p-8">
              <MapPin className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Map Integration Placeholder</p>
              <p className="text-sm opacity-60 mt-2">{t('address')}</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          {t('copyright')}
        </div>
      </div>
    </footer>
  );
}
