import { Check, X } from "lucide-react";
import { Card } from "./ui/card";

const ProblemSection = () => {
  const beforeItems = [
    "Verpasste Anrufe kosten wertvolle Leads",
    "Manuelle Qualifizierung frisst Zeit",
    "Leads werden nicht schnell genug kontaktiert",
    "Hohe Kosten für zusätzliches Personal",
    "Inaktive und vergessene Leads",
  ];

  const afterItems = [
    "Automatische Lead-Reaktivierung 24/7",
    "Sofortige Vorqualifizierung aller Anfragen",
    "Kein Lead bleibt unbearbeitet",
    "Skalierbare Lösung ohne Mehrkosten",
    "Reaktivierung von neuen Kunden",
  ];

  return (
    <section id="problem" className="py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 hover:scale-105 transition-transform duration-500">
            Die Realität im Immobilienvertrieb
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Diese versteckten Kostentreiber schmälern Ihre Gewinnmarge
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Before */}
          <Card className="p-8 lg:p-10 animate-slide-up border-2 border-border hover-lift group hover:border-destructive/30 transition-all duration-300 hover:shadow-lg" style={{ boxShadow: 'var(--shadow-sm)', animationDelay: '0.1s' }}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <X className="h-6 w-6 text-destructive group-hover:rotate-90 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold group-hover:text-destructive transition-colors duration-300">Ohne KI</h3>
            </div>
            
            <ul className="space-y-4">
              {beforeItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-300" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                  <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                    <X className="h-4 w-4 text-destructive group-hover/item:rotate-90 transition-transform duration-300" />
                  </div>
                  <span className="text-base md:text-lg group-hover/item:text-destructive transition-colors duration-300">{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* After */}
          <Card className="p-8 lg:p-10 animate-slide-up border-2 border-primary hover-lift gradient-border group hover:border-green-300 transition-all duration-300 hover:shadow-xl" style={{ animationDelay: "0.2s", boxShadow: 'var(--shadow-md)' }}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center border border-green-200 group-hover:scale-110 group-hover:bg-green-100 transition-all duration-300">
                <Check className="h-6 w-6 text-green-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold group-hover:text-green-700 transition-colors duration-300">Mit KYNOVA</h3>
            </div>
            
            <ul className="space-y-4">
              {afterItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-300" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                  <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center mt-0.5 flex-shrink-0 border border-green-200 group-hover/item:scale-110 group-hover/item:bg-green-100 transition-all duration-300">
                    <Check className="h-4 w-4 text-green-600 group-hover/item:scale-110 transition-transform duration-300" />
                  </div>
                  <span className="text-base md:text-lg font-medium group-hover/item:text-green-700 transition-colors duration-300">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
