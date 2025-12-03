import { Button } from "./ui/button";
import { ArrowRight, ArrowDown } from "lucide-react";

const Hero = () => {
  const t = useT();
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-pattern opacity-30 animate-gradient-x" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-muted/40 to-transparent rounded-full blur-3xl animate-float-gentle" />
        <div className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-gradient-to-tl from-muted/30 to-transparent rounded-full blur-3xl animate-float-gentle" />
      </div>

      <div className="w-full px-6 lg:px-8 text-center overflow-visible">
        <div className="flex justify-center animate-fade-in mb-12" style={{ animationDelay: '0s' }}>
          <Button
            variant="secondary"
            size="sm"
            className="rounded-full px-6 py-3 premium-border bg-gradient-to-r from-blue-accent/10 to-primary/10 text-blue-accent hover:from-blue-accent/20 hover:to-primary/20 hover-glow shadow-lg font-semibold"
          >
            {t.hero.badge}
          </Button>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight mb-8 max-w-4xl mx-auto leading-[1.15] pb-1 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          {t.hero.headline}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in leading-relaxed" style={{ animationDelay: '0.2s' }}>
          {t.hero.subline}
        </p>

        <div className="flex items-center justify-center gap-4 mt-10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <Button
            size="lg"
            className="group text-lg px-12 py-8 rounded-full hover-glow transition-all duration-300 hover:scale-105 shadow-premium bg-gradient-to-r from-primary to-primary/80 text-white font-semibold premium-border"
            style={{ boxShadow: 'var(--shadow-md)' }}
            onClick={() => {
              window.location.href = 'https://cal.com/marticsolutions/intro-call-40mins';
            }}
          >
            {t.hero.cta_book}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          <Button
            size="lg"
            variant="secondary"
            className="group text-lg px-12 py-8 rounded-full hover-glow transition-all duration-300 hover:scale-105 shadow-premium bg-white text-primary premium-border"
            style={{ boxShadow: 'var(--shadow-md)' }}
            onClick={() => {
              const element = document.getElementById('mechanism');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            {t.hero.cta_how}
            <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import { useT } from "../hooks/use-t";
