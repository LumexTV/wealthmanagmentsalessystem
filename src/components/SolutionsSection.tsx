import { Phone, CheckCircle, Clock, TrendingUp } from "lucide-react";
import { Card } from "./ui/card";

const SolutionsSection = () => {
  const solutions = [
    {
      icon: Phone,
      title: "Lead-Reaktivierung",
      description: "Unsere KI ruft bestehende Leads automatisch an und reaktiviert sie durch professionelle, personalisierte Gespräche.",
    },
    {
      icon: CheckCircle,
      title: "Automatische Vorqualifizierung",
      description: "Neue Anfragen werden sofort analysiert und qualifiziert, damit Sie sich nur auf die vielversprechendsten Leads konzentrieren.",
    },
    {
      icon: Clock,
      title: "24/7 Verfügbarkeit",
      description: "Kein Lead wird mehr verpasst. Unsere Telefon-KI ist rund um die Uhr für Ihre Kunden erreichbar.",
    },
    {
      icon: TrendingUp,
      title: "Skalierbare Effizienz",
      description: "Bearbeiten Sie mehr Leads ohne zusätzliche Personalkosten. Wachsen Sie ohne Ihre Kosten proportional zu erhöhen.",
    },
  ];

  return (
    <section id="solutions" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            Unsere Lösungen
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            KI-gestützte Telefonie, die Ihre Lead-Bearbeitung revolutioniert
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {solutions.map((solution, index) => (
            <Card 
              key={index} 
              className="p-8 lg:p-10 hover:shadow-lg transition-all duration-300 animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <solution.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                {solution.title}
              </h3>
              
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {solution.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
