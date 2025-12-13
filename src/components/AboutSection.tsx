import { Card } from "./ui/card";
import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  const t = useT();
  return (
    <section id="offer" className="py-24 lg:py-32 relative overflow-hidden text-white bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      <div className="absolute inset-0 bg-soft-gradient" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl lg:text-6xl mb-6 gradient-text-animate bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">{t.about.title}</h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-10 md:p-12 mb-10 border premium-border border-white/15 shadow-premium">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-accent/20 to-primary/20 rounded-full px-4 py-2 border border-blue-accent/30 mb-4">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-white">{t.about.performance}</span>
              </div>
            </div>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed text-center text-white/90">{t.about.blurb}</p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-blue-accent mt-1 flex-shrink-0" />
                <span className="text-white/90">{t.about.bullets[0]}</span>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-blue-accent mt-1 flex-shrink-0" />
                <span className="text-white/90">{t.about.bullets[1]}</span>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-blue-accent mt-1 flex-shrink-0" />
                <span className="text-white/90">{t.about.bullets[2]}</span>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-white/80 mb-8">{t.about.guarantee}</p>
            <a
              href="https://cal.com/timeslot/intro-call-40mins"
              className="inline-flex items-center justify-center h-14 px-12 rounded-full bg-gradient-to-r from-primary to-primary/80 text-white hover:from-primary/90 hover:to-primary/70 transition-all duration-300 text-lg font-semibold shadow-premium hover-glow premium-border"
            >
              {t.about.cta}
              </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
import { useT } from "../hooks/use-t";
