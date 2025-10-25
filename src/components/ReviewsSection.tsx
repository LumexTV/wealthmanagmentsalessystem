import { Star, Quote } from "lucide-react";
import { Card } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Thomas Müller",
      company: "Müller Immobilien GmbH",
      role: "Geschäftsführer",
      content: "KYNOVA hat unsere Lead-Bearbeitung komplett verändert. Wir reaktivieren jetzt 40% mehr Leads und sparen dabei noch Zeit.",
      rating: 5,
      initials: "TM",
    },
    {
      name: "Sandra Weber",
      company: "Weber & Partner",
      role: "Maklerin",
      content: "Die automatische Vorqualifizierung ist Gold wert. Ich konzentriere mich nur noch auf die wirklich interessierten Kunden.",
      rating: 5,
      initials: "SW",
    },
    {
      name: "Michael Schmidt",
      company: "Schmidt Immobilien",
      role: "Vertriebsleiter",
      content: "Beste Investition des Jahres! Die KI arbeitet professioneller als manch menschlicher Mitarbeiter und ist dabei 24/7 verfügbar.",
      rating: 5,
      initials: "MS",
    },
  ];

  return (
    <section id="reviews" className="py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            Was unsere Kunden sagen
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Immobilienmakler, die bereits auf KYNOVA vertrauen
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card 
              key={index} 
              className="p-8 hover:shadow-lg transition-all duration-300 animate-slide-up relative"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <Quote className="absolute top-6 right-6 h-10 w-10 text-muted opacity-20" />
              
              <div className="flex items-center gap-4 mb-6">
                <Avatar className="h-14 w-14 border-2 border-border">
                  <AvatarFallback className="bg-primary text-primary-foreground text-lg font-semibold">
                    {review.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-bold text-lg">{review.name}</h4>
                  <p className="text-sm text-muted-foreground">{review.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-base leading-relaxed mb-4">
                "{review.content}"
              </p>

              <p className="text-sm font-medium text-muted-foreground">
                {review.company}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
