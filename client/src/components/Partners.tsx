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
    { key: 'partner1', icon: Battery, color: 'text-yellow-500' },
    { key: 'partner2', icon: Lock, color: 'text-cyan-500' },
    { key: 'partner3', icon: Plane, color: 'text-sky-500' },
  ];

  return (
    <section id="partners" className="py-24 bg-secondary/5 border-y border-white/5">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-bold tracking-widest uppercase mb-2 block">Our Network</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            {t('partnersTitle')}
          </h2>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto" dir={dir}>
          <CarouselContent className="-ml-1">
            {partners.map((item, index) => (
              <CarouselItem key={item.key} className="pl-1 md:basis-1/2 lg:basis-1/3 p-4">
                <div className="p-1">
                  <Card className="bg-card border-white/5 h-[350px] flex flex-col justify-between group hover:border-primary/50 transition-colors duration-500">
                    <CardContent className="flex flex-col items-center justify-center p-8 h-full text-center">
                      <div className={`h-20 w-20 rounded-2xl bg-white/5 flex items-center justify-center mb-6 ${item.color} group-hover:scale-110 transition-transform duration-500`}>
                        <item.icon className="h-10 w-10" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 font-en-headings tracking-wide text-white">{t(`${item.key}Title`)}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {t(`${item.key}Desc`)}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-8">
             <CarouselPrevious className="static translate-y-0 bg-transparent border-white/20 text-white hover:bg-primary hover:border-primary hover:text-white" />
             <CarouselNext className="static translate-y-0 bg-transparent border-white/20 text-white hover:bg-primary hover:border-primary hover:text-white" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
