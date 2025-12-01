const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-slate-50 to-white border-t border-slate-200 overflow-hidden">
      {/* CTA Section */}
      <div id="contact" className="py-20 lg:py-24 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            Your Pipeline Starts Here.
          </h3>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join the exclusive network of wealth managers who've already discovered the power of programmatic capital sourcing.
          </p>
          <a
            href="https://cal.com/marticsolutions/get-started"
            className="inline-flex items-center justify-center h-14 px-12 rounded-full bg-gradient-to-r from-primary to-primary/80 text-white hover:from-primary/90 hover:to-primary/70 transition-all duration-300 text-lg font-semibold shadow-premium hover-glow"
          >
            Book a Strategy Call
          </a>
          <div className="mt-6">
            <div className="inline-flex items-center gap-2 text-sm text-slate-500">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Next Available: This Week</span>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>

      {/* Footer Links Section */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company */}
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Martic Solutions</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Connecting Independent Wealth Managers with Cash-Rich Business Owners through Programmatic Capital Sourcing.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#mechanism" className="text-slate-600 hover:text-slate-900 transition-colors">Infrastructure</a></li>
                <li><a href="#problem" className="text-slate-600 hover:text-slate-900 transition-colors">The Problem</a></li>
                <li><a href="#offer" className="text-slate-600 hover:text-slate-900 transition-colors">Partnership</a></li>
              </ul>
            </div>

            {/* Company Info */}
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/impressum" className="text-slate-600 hover:text-slate-900 transition-colors">Impressum</a></li>
                <li><a href="/datenschutz" className="text-slate-600 hover:text-slate-900 transition-colors">Privacy Policy</a></li>
                <li><a href="mailto:hello@marticsolutions.com" className="text-slate-600 hover:text-slate-900 transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://cal.com/marticsolutions/get-started" className="text-slate-600 hover:text-slate-900 transition-colors">Strategy Call</a></li>
                <li><a href="mailto:hello@marticsolutions.com" className="text-slate-600 hover:text-slate-900 transition-colors">hello@marticsolutions.com</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-600">
              Copyright © {currentYear} Martic Solutions. All Rights Reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="/impressum" className="text-slate-600 hover:text-slate-900 transition-colors">Impressum</a>
              <a href="/datenschutz" className="text-slate-600 hover:text-slate-900 transition-colors">Privacy</a>
              <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
