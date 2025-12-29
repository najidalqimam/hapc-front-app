import { useLanguage } from '@/lib/i18n';
import { Mail, MapPin, Phone, Linkedin, Instagram } from 'lucide-react';

export function Contact() {
  const { t, dir } = useLanguage();

  return (
    <footer id="contact" className="bg-background border-t border-border">
      {/* Vision 2030 Banner - Redesigned */}
      <div className="relative overflow-hidden bg-gradient-to-r from-emerald-950 to-background border-b border-emerald-900/20 py-16">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12 justify-between">
            <div className="flex-1 text-center md:text-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-500 text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                {t('vision2030Title')}
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600"></span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-background/40 backdrop-blur-md border border-emerald-500/10 p-4 rounded-xl hover:border-emerald-500/30 transition-colors">
                    <div className="h-2 w-2 rounded-full bg-emerald-500 mb-3" />
                    <p className="text-sm text-foreground/80 font-medium leading-relaxed">
                      {t(`vision2030p${i}`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Vision 2030 Logo Card - Removed as requested */}
            {/* <div className="shrink-0 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-emerald-900 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative flex items-center justify-center p-8 bg-background/80 backdrop-blur-xl rounded-xl border border-white/10 w-[280px] h-[180px] shadow-2xl">
                <img 
                  src="/attached_assets/Saudi_Vision_2030_logo.svg_1766996095753.png" 
                  alt="Saudi Vision 2030" 
                  className="w-full h-full object-contain dark:invert drop-shadow-lg"
                />
              </div>
            </div> */}
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
                  <p className="text-muted-foreground">{t('address')}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-muted-foreground" dir="ltr">+966 552860747</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
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

        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-sm text-muted-foreground">{t('copyright')}</p>
            <div className="flex items-center gap-4">
              <a 
                href="https://www.linkedin.com/company/highest-peak-automotive-company/posts/?feedView=all" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                data-testid="link-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://x.com/hpacsa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                data-testid="link-x"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/hpacsa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                data-testid="link-instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.tiktok.com/@hpacsa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                data-testid="link-tiktok"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
