const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border py-12 bg-muted/30 overflow-hidden">
      {/* Subtle top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">KYNOVA<span className="text-muted-foreground/60">.</span></h3>
            <p className="text-muted-foreground">
              Revolutionieren Sie Ihre Lead-Bearbeitung mit KI-gestützter Telefonie.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-muted-foreground hover:text-foreground transition-all hover:translate-x-0.5 inline-block">
                  Home
                </a>
              </li>
              <li>
                <a href="#problem" className="text-muted-foreground hover:text-foreground transition-all hover:translate-x-0.5 inline-block">
                  Problem
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-muted-foreground hover:text-foreground transition-all hover:translate-x-0.5 inline-block">
                  Lösungen
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-muted-foreground hover:text-foreground transition-all hover:translate-x-0.5 inline-block">
                  Kundenstimmen
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Impressum
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Datenschutz
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  AGB
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {currentYear} KYNOVA. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
