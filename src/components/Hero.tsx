import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

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

      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center animate-fade-in">
        <div className="inline-block px-4 py-2 mb-8 bg-muted rounded-full text-xs font-medium tracking-wide uppercase">
          #1 Telefon-KI für Immobilienmakler
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6" style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.03)' }}>
          KYNOVA<span className="text-muted-foreground/50">.</span>
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Reaktivieren Sie bestehende Leads und qualifizieren Sie neue Anfragen automatisch – rund um die Uhr
        </p>

        <Button 
          size="lg" 
          className="group text-base px-8 py-6 rounded-full hover-glow transition-all"
          style={{ boxShadow: 'var(--shadow-md)' }}
        >
          Erstgespräch vereinbaren
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
