import { Card } from "./ui/card";
import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="offer" className="py-24 lg:py-32 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden text-white">
      <div className="absolute inset-0 bg-soft-gradient" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl lg:text-6xl mb-6 text-white">Partner with Martic Solutions.</h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full px-4 py-2 border border-green-500/30 mb-4">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-white">Performance Guarantee</span>
              </div>
            </div>
            <p className="text-xl md:text-2xl mb-6 leading-relaxed text-center">
              We deploy our Owner-Direct Acquisition System to secure <span className="text-blue-accent font-semibold">4-5 Qualified "Profit Extraction" Consultations</span> with 7-Figure Founders within 90 days.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-blue-accent mt-1 flex-shrink-0" />
                <span className="text-white/90">Exclusive territory protection</span>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-blue-accent mt-1 flex-shrink-0" />
                <span className="text-white/90">No retainer risk</span>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-white/70 mb-8">
              If we don't deliver 4-5 qualified consultations in 90 days, we continue at no cost until we do.
            </p>
            <a
              href="https://cal.com/marticsolutions/get-started"
              className="inline-flex items-center justify-center h-14 px-12 rounded-full bg-gradient-to-r from-primary to-primary/80 text-white hover:from-primary/90 hover:to-primary/70 transition-all duration-300 text-lg font-semibold shadow-premium hover-glow"
            >
              Secure Your Territory
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
