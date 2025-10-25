import { Check, X } from "lucide-react";
import { Card } from "./ui/card";

const ProblemSection = () => {
  const beforeItems = [
    "Verpasste Anrufe kosten wertvolle Leads",
    "Manuelle Qualifizierung frisst Zeit",
    "Leads werden nicht schnell genug kontaktiert",
    "Hohe Kosten für zusätzliches Personal",
    "Inkonsistente Anrufqualität",
  ];

  const afterItems = [
    "Automatische Lead-Reaktivierung 24/7",
    "Sofortige Vorqualifizierung aller Anfragen",
    "Kein Lead bleibt unbearbeitet",
    "Skalierbare Lösung ohne Mehrkosten",
    "Konstant professionelle Gesprächsführung",
  ];

  return (
    <section id="problem" className="py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            Die Realität im Immobilienvertrieb
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Diese versteckten Kostentreiber schmälern Ihre Gewinnmarge
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Before */}
          <Card className="p-8 lg:p-10 animate-slide-up border-2 border-border hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                <X className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">Ohne KI</h3>
            </div>
            
            <ul className="space-y-4">
              {beforeItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <X className="h-4 w-4 text-destructive" />
                  </div>
                  <span className="text-base md:text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* After */}
          <Card className="p-8 lg:p-10 animate-slide-up border-2 border-primary hover:shadow-lg transition-shadow" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Check className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">Mit KYNOVA</h3>
            </div>
            
            <ul className="space-y-4">
              {afterItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-0.5 flex-shrink-0">
                    <Check className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <span className="text-base md:text-lg font-medium">{item}</span>
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
