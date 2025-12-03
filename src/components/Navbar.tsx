import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";
import { useLocale } from "../hooks/use-locale";
import { useT } from "../hooks/use-t";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { locale, setLocale } = useLocale();
  const t = useT();

  const navLinks = [
    { name: t.navbar.home, href: "/#hero" },
    { name: t.navbar.infrastructure, href: "/#mechanism" },
    { name: t.navbar.partnership, href: "/#offer" },
    { name: t.navbar.contact, href: "/#contact" },
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
            <div className="hidden md:flex items-center gap-2">
              <span className="text-xs font-medium text-gray-600">EN</span>
              <Switch
                checked={locale === "de"}
                onCheckedChange={(checked) => setLocale(checked ? "de" : "en")}
                className="h-6 w-11 data-[state=unchecked]:bg-gray-900 data-[state=checked]:bg-primary"
              />
              <span className="text-xs font-medium text-gray-600">DE</span>
            </div>
            <Button 
              size="sm" 
              className="hidden md:flex h-9 w-28 justify-center whitespace-nowrap text-sm px-4 rounded-full hover-glow transition-all bg-gradient-to-r from-primary to-primary/80 text-white hover:from-primary/90 hover:to-primary/70"
              onClick={() => {
                window.location.href = 'https://cal.com/marticsolutions/intro-call-40mins';
              }}
            >
              {t.navbar.cta}
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
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-gray-600">EN</span>
                <Switch
                  checked={locale === "de"}
                  onCheckedChange={(checked) => setLocale(checked ? "de" : "en")}
                  className="h-6 w-11 data-[state=unchecked]:bg-gray-900 data-[state=checked]:bg-primary"
                />
                <span className="text-xs font-medium text-gray-600">DE</span>
              </div>
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
