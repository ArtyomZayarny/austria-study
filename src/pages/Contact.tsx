import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { ContactForm } from "@/components/shared/ContactForm";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-secondary text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-display font-bold">Контакти</h1>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-display font-bold text-secondary mb-6">Наш офіс у Відні</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white shadow-sm rounded-lg flex items-center justify-center shrink-0 text-primary">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Адреса</h4>
                    <p className="text-gray-600">Kärntner Straße 1<br/>1010 Wien, Austria</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white shadow-sm rounded-lg flex items-center justify-center shrink-0 text-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Email</h4>
                    <a href="mailto:info@austria-move.com" className="text-gray-600 hover:text-primary transition-colors">info@austria-move.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white shadow-sm rounded-lg flex items-center justify-center shrink-0 text-primary">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Телефон</h4>
                    <a href="tel:+43123456789" className="text-gray-600 hover:text-primary transition-colors">+43 1 234 56 789</a>
                    <p className="text-sm text-gray-400 mt-1">Доступний у WhatsApp / Telegram</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white shadow-sm rounded-lg flex items-center justify-center shrink-0 text-primary">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Години роботи</h4>
                    <p className="text-gray-600">Пн - Пт: 09:00 - 18:00<br/>Сб - Нд: Вихідний</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-2xl h-64 w-full relative overflow-hidden">
               {/* This would be an interactive map in production */}
               <img 
                 src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2070&auto=format&fit=crop" 
                 alt="Карта Відня"
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                 <Button variant="secondary" className="shadow-lg">Відкрити карту</Button>
               </div>
            </div>
          </div>

          <div>
             <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
