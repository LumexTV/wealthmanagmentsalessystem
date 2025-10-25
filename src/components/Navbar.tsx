import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/#hero" },
    { name: "Problem", href: "/#problem" },
    { name: "Lösungen", href: "/#solutions" },
    { name: "Über Uns", href: "/#about" },
    { name: "Kontakt", href: "/#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-xl border-b border-border/50" style={{ boxShadow: 'var(--shadow-sm)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Navigation Links - Left side */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Logo and CTA Button - Right side */}
          <div className="flex-1 md:flex-none flex items-center justify-end gap-4">
            <Button 
              size="sm" 
              className="hidden md:flex text-sm px-4 py-2 rounded-full hover-glow transition-all"
              onClick={() => {
                // Wenn wir auf der Hauptseite sind, scrollen wir direkt
                if (window.location.pathname === '/') {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                } else {
                  // Sonst zur Hauptseite navigieren und dann scrollen
                  window.location.href = '/';
                  // Nach dem Laden der Seite zum Kontakt scrollen
                  setTimeout(() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }, 100);
                }
              }}
            >
              Gratis Beratung
            </Button>
            <a href="/#hero" className="text-2xl tracking-tight">
              <span className="font-bold">KY</span><span className="font-normal">NOVA</span><span className="text-black font-bold">.</span>
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
        <div className="md:hidden border-t border-border animate-fade-in">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button 
              size="sm" 
              className="w-full text-sm px-4 py-2 rounded-full hover-glow transition-all mt-4"
              onClick={() => {
                // Wenn wir auf der Hauptseite sind, scrollen wir direkt
                if (window.location.pathname === '/') {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                } else {
                  // Sonst zur Hauptseite navigieren und dann scrollen
                  window.location.href = '/';
                  // Nach dem Laden der Seite zum Kontakt scrollen
                  setTimeout(() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }, 100);
                }
                setIsOpen(false);
              }}
            >
              Gratis Beratung
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
