import { Link } from "wouter";
import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white">
                <span className="font-display font-bold">A</span>
              </div>
              <span className="font-display font-bold text-lg">Austria Move & Study</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Ваш надійний партнер для переїзду, навчання та адаптації в Австрії. Ми робимо складні бюрократичні процеси простими.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Навігація</h4>
            <ul className="space-y-3">
              <li><Link href="/migration" className="text-gray-400 hover:text-primary transition-colors">Імміграція</Link></li>
              <li><Link href="/students" className="text-gray-400 hover:text-primary transition-colors">Навчання</Link></li>
              <li><Link href="/support" className="text-gray-400 hover:text-primary transition-colors">Супровід</Link></li>
              <li><Link href="/prices" className="text-gray-400 hover:text-primary transition-colors">Ціни</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-primary transition-colors">Про компанію</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Послуги</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">Червоно-біло-червона картка</li>
              <li className="text-gray-400">Студентська віза</li>
              <li className="text-gray-400">Возз'єднання сім'ї</li>
              <li className="text-gray-400">Пошук житла</li>
              <li className="text-gray-400">Бізнес-імміграція</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Контакти</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span>Kärntner Str. 1,<br/>1010 Wien, Austria</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:info@austria-move.com" className="hover:text-white">info@austria-move.com</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+43123456789" className="hover:text-white">+43 1 234 56 789</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Austria Move & Study. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
