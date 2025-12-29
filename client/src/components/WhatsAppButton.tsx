import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function WhatsAppButton() {
  const phoneNumber = "966552860747";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-4 duration-1000"
    >
      <Button
        size="lg"
        className="rounded-full w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 p-0"
      >
        <MessageCircle className="h-7 w-7" fill="currentColor" />
        <span className="sr-only">Contact on WhatsApp</span>
      </Button>
    </a>
  );
}
