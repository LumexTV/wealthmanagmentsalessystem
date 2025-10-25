import { Card } from "./ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 hover:scale-105 transition-transform duration-500">
            Über Uns
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Das Team hinter KYNOVA - Ihre Experten für KI-gestützte Lead-Bearbeitung
          </p>
        </div>

        {/* First Block - Image Left, Text Right */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="order-2 lg:order-1">
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 group">
              <div className="aspect-square bg-gradient-to-br from-muted to-muted/60 flex items-center justify-center">
                <img 
                  src="/images/DanielSchmuch_blackwhite.jpg" 
                  alt="Daniel Schmuch - Geschäftsführer & Gründer" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </Card>
          </div>
          
          <div className="order-1 lg:order-2 space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold hover:text-primary transition-colors duration-300">
              Daniel Schmuch - CEO & Co-Founder
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Daniel kombiniert 15 Jahre Erfahrung in Führung, Prozess- und Projektmanagement 
              mit einem starken Gespür für KI und Automatisierung – er denkt die Immobilienwelt 
              strategisch, effizient und zukunftsorientiert.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 group">
                <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                <span className="text-base">Sales & Vertriebsleitung</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                <span className="text-base">Strategische Unternehmensführung</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                <span className="text-base">Lead-Generierung & Management</span>
              </div>
            </div>
          </div>
        </div>

        {/* Second Block - Text Left, Image Right */}
        <div className="grid lg:grid-cols-2 gap-12 items-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold hover:text-primary transition-colors duration-300">
              Luka Martic - CTO & Co-Founder
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Als technischer Visionär und KI-Experte entwickelt Luka die innovativen 
              Lösungen, die KYNOVA zu einem führenden Anbieter für automatisierte 
              Lead-Bearbeitung in der Immobilienbranche machen.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 group">
                <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                <span className="text-base">KI-Entwicklung & Technologie</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                <span className="text-base">Software-Architektur & Systeme</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                <span className="text-base">Innovation & Produktentwicklung</span>
              </div>
            </div>
          </div>
          
          <div>
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 group">
              <div className="aspect-square bg-gradient-to-br from-muted to-muted/60 flex items-center justify-center">
                <img 
                  src="/images/LukaMartic_blackwhite.png" 
                  alt="Luka Martic - Unser Geschäftsführer" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
