import { useLanguage } from '@/lib/i18n';
import { Mail, MapPin, Phone, Linkedin, Instagram, Facebook } from 'lucide-react';

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
            <div className="flex items-center gap-3 flex-wrap justify-center">
              <a 
                href="https://www.linkedin.com/company/highest-peak-automotive-company/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                data-testid="link-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://x.com/elitosaudi" 
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
                href="https://www.instagram.com/elitosaudi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                data-testid="link-instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.tiktok.com/@elitosaudi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                data-testid="link-tiktok"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a 
                href="https://www.facebook.com/share/18BAUy1vZ9/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                data-testid="link-facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.threads.com/@elitosaudi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                data-testid="link-threads"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.182.408-2.256 1.332-3.023.88-.73 2.132-1.13 3.628-1.154 1.12-.018 2.152.127 3.082.433-.02-.962-.262-1.7-.73-2.193-.505-.53-1.287-.805-2.322-.817-1.741.022-2.794.662-3.227 1.133l-1.39-1.532c.923-.94 2.534-1.722 4.657-1.72 1.617.007 2.902.458 3.82 1.34.912.877 1.39 2.14 1.42 3.757.013.577-.012 1.204-.076 1.87.706.442 1.282.991 1.703 1.63.606.92.91 2.016.906 3.263-.005 1.613-.585 3.093-1.678 4.28-1.601 1.738-4.016 2.648-7.186 2.708zm.09-7.918c-1.229.023-2.174.305-2.734.817-.477.437-.692.992-.66 1.697.031.66.355 1.2.938 1.561.623.387 1.415.554 2.291.486 1.078-.083 1.89-.493 2.414-1.22.438-.609.718-1.436.831-2.465-.98-.326-2.058-.895-3.08-.876z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
