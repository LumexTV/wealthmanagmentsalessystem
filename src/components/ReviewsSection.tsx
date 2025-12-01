import { Card } from "./ui/card";

const ReviewsSection = () => {
  const mandates = [
    {
      title: "The Construction Exit",
      target: "Target: HVAC Founder ($8M Rev)",
      strategy: "Strategy: Liquidity Sourcing",
      outcome: "Outcome: $1.2M Profit Extraction Event",
      timeline: "Timeline: 45 Days"
    },
    {
      title: "The Medical Group",
      target: "Target: Multi-Practice Dental Group",
      strategy: "Strategy: Private Client Acquisition",
      outcome: "Outcome: $15M Net New AUM",
      timeline: "Timeline: 90 Days"
    },
    {
      title: "The Logistics Scale-Up",
      target: "Target: Regional Trucking Fleet",
      strategy: "Strategy: Corporate Treasury",
      outcome: "Outcome: 5 Qualified Consultations",
      timeline: "Timeline: 30 Days"
    }
  ];

  return (
    <section id="reviews" className="py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-soft-gradient" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            Recent Mandates.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {mandates.map((mandate, index) => (
            <Card 
              key={index} 
              className="p-8 hover-lift transition-all duration-300 animate-slide-up relative group soft-shadow-lg animated-shadow"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <h3 className="text-xl md:text-2xl mb-4 text-blue-accent font-bold">{mandate.title}</h3>
              
              <div className="space-y-3">
                <p className="text-sm font-medium text-muted-foreground">
                  {mandate.target}
                </p>
                <p className="text-sm font-medium text-muted-foreground">
                  {mandate.strategy}
                </p>
                <p className="text-sm font-medium text-blue-accent">
                  {mandate.outcome}
                </p>
                <p className="text-sm font-medium text-muted-foreground">
                  {mandate.timeline}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
