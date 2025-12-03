import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import { useLocale } from "../hooks/use-locale";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { locale, setLocale } = useLocale();

  const labels = {
    en: { home: "Home", infrastructure: "Infrastructure", partnership: "Partnership", contact: "Contact", cta: "Get Started" },
    de: { home: "Start", infrastructure: "Infrastruktur", partnership: "Partnerschaft", contact: "Kontakt", cta: "Loslegen" },
  } as const;

  const navLinks = [
    { name: labels[locale].home, href: "/#hero" },
    { name: labels[locale].infrastructure, href: "/#mechanism" },
    { name: labels[locale].partnership, href: "/#offer" },
    { name: labels[locale].contact, href: "/#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200" style={{ boxShadow: 'var(--shadow-sm)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Navigation Links - Left side */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/#hero" className="flex items-center">
              <img src="/images/biglogonobg.png" alt="Martic Solutions" className="h-6 w-auto" />
            </a>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Logo and CTA Button - Right side */}
          <div className="flex-1 md:flex-none flex items-center justify-end gap-4">
            <ToggleGroup type="single" value={locale} onValueChange={(v) => v && setLocale(v as "en" | "de")} variant="outline" size="sm" className="hidden md:flex bg-white rounded-full p-1 border">
              <ToggleGroupItem value="en" className="rounded-full">EN</ToggleGroupItem>
              <ToggleGroupItem value="de" className="rounded-full">DE</ToggleGroupItem>
            </ToggleGroup>
            <Button 
              size="sm" 
              className="hidden md:flex text-sm px-4 py-2 rounded-full hover-glow transition-all bg-gradient-to-r from-primary to-primary/80 text-white hover:from-primary/90 hover:to-primary/70"
              onClick={() => {
                window.location.href = 'https://cal.com/marticsolutions/intro-call-40mins';
              }}
            >
              {labels[locale].cta}
            </Button>
            <a href="/#hero" className="flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">Martic Solutions</span>
            </a>
          </div>

          {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 animate-fade-in">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center justify-center py-2">
              <ToggleGroup type="single" value={locale} onValueChange={(v) => v && setLocale(v as "en" | "de")} variant="outline" size="sm" className="w-full">
                <ToggleGroupItem value="en" className="flex-1">English</ToggleGroupItem>
                <ToggleGroupItem value="de" className="flex-1">Deutsch</ToggleGroupItem>
              </ToggleGroup>
            </div>
            <Button 
              size="sm" 
              className="w-full text-sm px-4 py-2 rounded-full hover-glow transition-all mt-4 bg-gradient-to-r from-primary to-primary/80 text-white hover:from-primary/90 hover:to-primary/70"
              onClick={() => {
                window.location.href = 'https://cal.com/marticsolutions/intro-call-40mins';
                setIsOpen(false);
              }}
            >
              {labels[locale].cta}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
