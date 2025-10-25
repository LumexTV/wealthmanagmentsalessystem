import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-muted/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tl from-muted/20 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center animate-fade-in">
        <div className="inline-block px-4 py-2 mb-8 bg-muted rounded-full text-xs font-medium tracking-wide uppercase">
          #1 Telefon-KI für Immobilienmakler
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          KYNOVA
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Reaktivieren Sie bestehende Leads und qualifizieren Sie neue Anfragen automatisch – rund um die Uhr
        </p>

        <Button 
          size="lg" 
          className="group text-base px-8 py-6 rounded-full"
        >
          Erstgespräch vereinbaren
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
