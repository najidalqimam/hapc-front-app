import { useState, useEffect, createContext, useContext, ReactNode } from 'react';

type Language = 'ar' | 'en';

interface Translations {
  [key: string]: {
    ar: string;
    en: string;
  };
}

export const content: Translations = {
  // Navigation
  home: { ar: 'الرئيسية', en: 'Home' },
  about: { ar: 'من نحن', en: 'About Us' },
  values: { ar: 'قيمنا', en: 'Values' },
  partners: { ar: 'الشركاء', en: 'Partners' },
  contact: { ar: 'تواصل معنا', en: 'Contact' },

  // Hero
  heroTitle: { ar: 'هايست بيك أوتوموتيف', en: 'Highest Peak Automotive' },
  heroTagline: { ar: 'القوة التي تدفع التنقل… والتقنية التي تحمي المستقبل', en: 'The power driving mobility... and the technology protecting the future' },
  heroDesc: { ar: 'شركة سعودية متقدمة، نربط أحدث التقنيات العالمية باحتياجات السوق السعودي لنقدم حلولاً موثوقة.', en: 'A leading Saudi company connecting global technologies with local market needs to deliver reliable solutions.' },
  
  // Stats/Points
  point1: { ar: 'موزعون حصريون لعلامات عالمية', en: 'Exclusive distributors for global brands' },
  point2: { ar: 'حلول مصممة للبيئة السعودية', en: 'Solutions designed for the Saudi environment' },
  point3: { ar: 'شراكات استراتيجية طويلة الأمد', en: 'Long-term strategic partnerships' },

  // About
  aboutTitle: { ar: 'من نحن', en: 'Who We Are' },
  aboutText: { ar: 'تعد شركة هايست بيك أوتوموتيف إحدى الشركات السعودية الرائدة في توزيع حلول السيارات والتقنيات المتقدمة. انطلقت الشركة من إرث تجاري عائلي يتمتع بسمعة راسخة مبنية على الثقة والنزاهة، وتدار اليوم برؤية حديثة تواكب تطلعات المستقبل.', en: 'Highest Peak Automotive is a leading Saudi distributor of automotive solutions and advanced technologies. Built on a family commercial legacy of trust and integrity, we are managed today with a modern vision for the future.' },
  visionTitle: { ar: 'رؤيتنا', en: 'Our Vision' },
  visionText: { ar: 'أن نكون القوة الرائدة في قطاعات السيارات والتقنيات المتقدمة في المملكة العربية السعودية، وأن نُعرف بتقديم منتجات عالمية المستوى تدعم الابتكار والاستدامة.', en: 'To be the leading force in Saudi Arabia’s automotive and advanced tech sectors, known for delivering world-class products that support innovation and sustainability.' },
  missionTitle: { ar: 'رسالتنا', en: 'Our Mission' },
  missionText: { ar: 'نسعى إلى تمكين السوق السعودي من خلال توفير منتجات عالية الجودة من علامات تجارية عالمية، مدعومة بخبرة تقنية، وخدمة عملاء استثنائية.', en: 'We empower the Saudi market by providing high-quality products from global brands, supported by technical expertise and exceptional customer service.' },

  // Values
  valuesTitle: { ar: 'قيمنا الأساسية', en: 'Core Values' },
  value1Title: { ar: 'أداء على القمة', en: 'Peak Performance' },
  value1Desc: { ar: 'نلتزم بأعلى معايير الجودة والموثوقية.', en: 'Committing to the highest standards of quality and reliability.' },
  value2Title: { ar: 'قيادة الابتكار', en: 'Leading Innovation' },
  value2Desc: { ar: 'نواكب أحدث التقنيات وننقلها للسوق المحلي.', en: 'Adopting latest technologies and bringing them to the local market.' },
  value3Title: { ar: 'إرث من النزاهة', en: 'Legacy of Integrity' },
  value3Desc: { ar: 'نعمل بشفافية وثقة ممتدة لعقود.', en: 'Working with transparency and trust spanning decades.' },
  value4Title: { ar: 'تمكين العملاء', en: 'Empowering Customers' },
  value4Desc: { ar: 'نؤمن بأن نجاح عملائنا هو امتداد لنجاحنا.', en: 'We believe our customers’ success is an extension of our own.' },

  // Partners
  partnersTitle: { ar: 'شركاؤنا الاستراتيجيون', en: 'Strategic Partners' },
  partner1Title: { ar: 'ELITO Batteries', en: 'ELITO Batteries' },
  partner1Desc: { ar: 'بطاريات عالية التحمل مصممة خصيصًا لتناسب المناخ القاسي في المملكة.', en: 'High-endurance batteries designed specifically for the Kingdom’s harsh climate.' },
  partner2Title: { ar: 'CYBERTEQ', en: 'CYBERTEQ' },
  partner2Desc: { ar: 'حلول أمن المركبات والتقنيات الذكية وأنظمة الحماية المتقدمة.', en: 'Vehicle security solutions, smart technologies, and advanced protection systems.' },
  partner3Title: { ar: 'DRONE VOLT', en: 'DRONE VOLT' },
  partner3Desc: { ar: 'طائرات بدون طيار احترافية للأمن والتفتيش ورسم الخرائط.', en: 'Professional drones for security, inspection, and mapping.' },

  // Markets
  marketsTitle: { ar: 'أسواقنا وعملاؤنا', en: 'Markets & Clients' },
  market1: { ar: 'ورش السيارات وتجار التجزئة', en: 'Auto Workshops & Retailers' },
  market2: { ar: 'الجهات الحكومية والقطاعات الدفاعية', en: 'Government & Defense Sectors' },
  market3: { ar: 'الشركات ومشغلي الأساطيل', en: 'Companies & Fleet Operators' },
  market4: { ar: 'شركات دمج الأنظمة والحلول التقنية', en: 'System Integrators & Tech Solutions' },

  // USP
  uspTitle: { ar: 'نقطة تميزنا', en: 'Our Unique Edge' },
  uspText: { ar: 'ما يميز هايست بيك أوتوموتيف هو الجمع بين الاستقرار المالي والخبرة العميقة، مع عقلية مرنة تشبه الشركات التقنية الحديثة.', en: 'What sets HPAC apart is combining financial stability and deep expertise with the agile mindset of modern tech companies.' },

  // Vision 2030
  vision2030Title: { ar: 'التزامنا برؤية 2030', en: 'Commitment to Vision 2030' },
  vision2030p1: { ar: 'إدخال تقنيات متقدمة تدعم تنويع الاقتصاد', en: 'Introducing advanced technologies supporting economic diversification' },
  vision2030p2: { ar: 'خلق فرص عمل نوعية للكفاءات الوطنية', en: 'Creating quality job opportunities for national talent' },
  vision2030p3: { ar: 'تعزيز قدرات المملكة في مجالات الأمن والتنقل', en: 'Enhancing the Kingdom’s capabilities in security and mobility' },

  // Contact
  contactTitle: { ar: 'تواصل معنا', en: 'Contact Us' },
  address: { ar: 'الرياض – طريق الملك سعود – أبراج السنام، الطابق الثالث، مكتب رقم 37', en: 'Al Sanam Towers, 3rd Floor, Office Number 37, King Saud Road, Riyadh' },
  cta: { ar: 'شارك النجاح مع الأفضل. قوِّ مشاريعك معنا.', en: 'Share success with the best. Power your projects with us.' },
  copyright: { ar: '© 2025 هايست بيك أوتوموتيف. جميع الحقوق محفوظة.', en: '© 2025 Highest Peak Automotive. All rights reserved.' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'rtl' | 'ltr';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ar');

  const t = (key: string) => {
    return content[key]?.[language] || key;
  };

  const dir = language === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
  }, [dir, language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
