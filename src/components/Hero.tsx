import { Button } from "./ui/button";
import { ArrowRight, ArrowDown, Lock, Shield, ShieldCheck } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Layered background with depth */}
      <div className="absolute inset-0 -z-10">
        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-40" />
        
        {/* Multiple blur layers for depth */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-muted/40 to-transparent rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-gradient-to-tl from-muted/30 to-transparent rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite_reverse]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-transparent via-muted/10 to-transparent rounded-full blur-3xl animate-[pulse-glow_6s_ease-in-out_infinite]" />
        
        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background/30" />
      </div>

      <div className="w-full px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-xs font-medium tracking-wide uppercase hover:scale-105 transition-transform duration-300 hover:shadow-lg">
            <ShieldCheck className="w-5 h-5 animate-pulse" />
            DSGVO KONFORM
          </div>
        </div>   

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-8 max-w-4xl mx-auto leading-tight animate-fade-in" style={{ textShadow: '0 2px 10px rgb(184, 182, 182)', animationDelay: '0.2s' }}>
          Wir reaktivieren und qualifizieren die <span className="drop-shadow-lg bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent animate-gradient-x">Leads</span> von Immobilienmaklern.
        </h1>

        <div className="flex items-center justify-center mb-10 text-lg md:text-xl font-medium animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center group">
            <span className="absolute left-1/2 transform -translate-x-24 -translate-y-0.5 group-hover:scale-105 transition-transform duration-300">Mehr Zeit</span>
            <span className="transform translate-y-[-2px] animate-pulse">|</span>
            <span className="absolute right-1/2 transform translate-x-32 -translate-y-0.5 group-hover:scale-105 transition-transform duration-300">Mehr Umsatz</span>
          </div>
        </div>




        <div className="flex items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button 
            size="lg" 
            className="group text-base px-8 py-6 rounded-full hover-glow transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{ boxShadow: 'var(--shadow-md)' }}
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            Erstgespräch vereinbaren
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="group text-base px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-primary/50"
            onClick={() => {
              const element = document.getElementById('problem');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            Mehr ansehen
            <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
