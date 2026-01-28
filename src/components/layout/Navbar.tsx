import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Головна" },
    { href: "/migration", label: "Імміграція" },
    { href: "/students", label: "Студентам" },
    { href: "/support", label: "Супровід" },
    { href: "/prices", label: "Ціни" },
    { href: "/about", label: "Про нас" },
  ];

  const isActive = (path: string) => location === path;

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary/25 transition-transform group-hover:scale-105">
              <span className="font-display font-bold text-xl">A</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg leading-tight text-secondary">Austria</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Move & Study</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`
                  px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                  ${isActive(link.href) 
                    ? "text-primary bg-primary/5 font-semibold" 
                    : "text-gray-600 hover:text-primary hover:bg-gray-50"}
                `}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Globe className="w-4 h-4" />
              <span>UA</span>
            </div>
            <Link href="/contact">
              <Button className="rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/30">
                Зв'язатися
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 animate-in slide-in-from-top-5 fade-in duration-200">
          <div className="container-custom py-4 flex flex-col gap-2">
            {links.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`
                  px-4 py-3 rounded-lg text-base font-medium
                  ${isActive(link.href)
                    ? "bg-primary/5 text-primary"
                    : "text-gray-600 hover:bg-gray-50"}
                `}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="h-px bg-gray-100 my-2" />
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <Button className="w-full">Зв'язатися з нами</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
