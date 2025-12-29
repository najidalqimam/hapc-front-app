import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n';
import { Battery, Lock, Plane, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function Partners() {
  const { t, dir } = useLanguage();

  const partners = [
    { key: 'partner1', icon: Battery, color: 'text-red-600 bg-red-600/10', href: 'https://store.hpacsa.com/' },
    { key: 'partner2', icon: Lock, color: 'text-cyan-500 bg-cyan-500/10' },
    { key: 'partner3', icon: Plane, color: 'text-blue-500 bg-blue-500/10', href: 'https://www.dronevolt.com/en/', logo: '/attached_assets/_شركة_هايست_بيك_أوتوموتيف_(2)_1766999640808.png' },
  ];

  return (
    <section id="partners" className="py-24 bg-muted/30 border-y border-border transition-colors duration-300">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-bold tracking-widest uppercase mb-2 block">Our Network</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            {t('partnersTitle')}
          </h2>
        </div>

        <Carousel 
          className="w-full max-w-5xl mx-auto" 
          dir={dir}
          opts={{
            align: "start",
            loop: true,
            direction: dir === 'rtl' ? 'rtl' : 'ltr'
          }}
        >
          <CarouselContent className="-ml-1">
            {partners.map((item, index) => {
              const CardBody = (
                <Card className="bg-card border-border h-[350px] flex flex-col justify-between group hover:border-primary/50 hover:shadow-lg transition-all duration-500 cursor-pointer">
                  <CardContent className="flex flex-col items-center justify-center p-8 h-full text-center">
                    {item.logo ? (
                      <div className="h-20 w-40 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                        <img src={item.logo} alt={t(`${item.key}Title`)} className="max-h-full max-w-full object-contain" />
                      </div>
                    ) : (
                      <div className={`h-20 w-20 rounded-2xl flex items-center justify-center mb-6 ${item.color} group-hover:scale-110 transition-transform duration-500`}>
                        <item.icon className="h-10 w-10" />
                      </div>
                    )}
                    <h3 className={`text-2xl font-bold mb-4 tracking-wide text-foreground group-hover:text-primary transition-colors ${dir === 'ltr' ? 'font-en-headings' : ''}`}>{t(`${item.key}Title`)}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {t(`${item.key}Desc`)}
                    </p>
                  </CardContent>
                </Card>
              );

              return (
                <CarouselItem key={item.key} className="pl-1 md:basis-1/2 lg:basis-1/3 p-4">
                  <div className="p-1">
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="block h-full">
                        {CardBody}
                      </a>
                    ) : (
                      CardBody
                    )}
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-8">
             <CarouselPrevious className="static translate-y-0 bg-background border-border text-foreground hover:bg-primary hover:border-primary hover:text-primary-foreground rtl:rotate-180" />
             <CarouselNext className="static translate-y-0 bg-background border-border text-foreground hover:bg-primary hover:border-primary hover:text-primary-foreground rtl:rotate-180" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
