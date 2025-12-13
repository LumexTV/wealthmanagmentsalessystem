const Footer = () => {
  const currentYear = new Date().getFullYear();
  const t = useT();

  return (
    <footer className="relative bg-gradient-to-b from-slate-50 to-white border-t border-slate-200 overflow-hidden">
      {/* CTA Section */}
      <div id="contact" className="py-20 lg:py-24 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center overflow-visible">
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] pb-1 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">{t.footer.heading}</h3>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">{t.footer.subheading}</p>
          <a
            href="https://cal.com/timeslot/intro-call-40mins"
            className="inline-flex items-center justify-center h-14 px-12 rounded-full bg-gradient-to-r from-primary to-primary/80 text-white hover:from-primary/90 hover:to-primary/70 transition-all duration-300 text-lg font-semibold shadow-premium hover-glow"
          >
            {t.footer.cta}
          </a>
          <div className="mt-6">
            <div className="inline-flex items-center gap-2 text-sm text-slate-500">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>{t.footer.nextAvailable}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10 lg:gap-12">
            {/* Connect (Left) */}
            <div className="text-center">
              <h4 className="font-semibold text-slate-900 mb-5">{t.footer.connect}</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="mailto:luka@marticsolutions.com" className="text-slate-600 hover:text-slate-900 transition-colors">{t.footer.contactUs}</a></li>
                <li><a href="https://cal.com/timeslot/intro-call-40mins" className="text-slate-600 hover:text-slate-900 transition-colors">{t.footer.strategyCall}</a></li>
              </ul>
            </div>
            {/* Martic Solutions (Middle) */}
            <div className="text-center md:border-l md:border-slate-200 md:pl-10">
              <h4 className="font-semibold text-slate-900 mb-5">{t.footer.company}</h4>
              <p className="text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">{t.footer.companyDesc}</p>
            </div>
            {/* Services (Right) */}
            <div className="text-center md:border-l md:border-slate-200 md:pl-10">
              <h4 className="font-semibold text-slate-900 mb-5">{t.footer.services}</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="/#mechanism" className="text-slate-600 hover:text-slate-900 transition-colors">{t.footer.infrastructure}</a></li>
                <li><a href="/#problem" className="text-slate-600 hover:text-slate-900 transition-colors">{t.footer.problem}</a></li>
                <li><a href="/#offer" className="text-slate-600 hover:text-slate-900 transition-colors">{t.footer.partnership}</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-600">{t.footer.copyright(currentYear)}</p>
            <div className="flex gap-6 text-sm">
              <a href="/legal-notice" className="text-slate-600 hover:text-slate-900 transition-colors">{t.footer.legal}</a>
              <a href="/privacy-policy" className="text-slate-600 hover:text-slate-900 transition-colors">{t.footer.privacy}</a>
              <a href="/terms" className="text-slate-600 hover:text-slate-900 transition-colors">{t.footer.terms}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { useT } from "../hooks/use-t";
