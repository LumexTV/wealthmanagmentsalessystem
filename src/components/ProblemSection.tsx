import { Card } from "./ui/card";

const ProblemSection = () => {
  return (
    <section id="problem" className="py-24 lg:py-32 relative overflow-hidden text-white bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      <div className="absolute inset-0 bg-soft-gradient" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in overflow-visible">
          <h2 className="text-3xl md:text-5xl lg:text-6xl mb-6 leading-[1.15] pb-1 gradient-text-animate bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">The "Country Club" Era is Over.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          <Card className="p-8 lg:p-10 animate-slide-up border premium-border border-white/15 bg-white/5 backdrop-blur-sm rounded-3xl hover-lift soft-shadow-lg animated-shadow shadow-premium" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-xl md:text-2xl mb-4 text-blue-accent">The Referral Trap</h3>
            <p className="text-white/80 leading-relaxed">
              Waiting for clients to refer their friends is not a strategy; it is hope. To scale Assets Under Management (AUM) predictably, you cannot rely on organic word-of-mouth.
            </p>
          </Card>
          <Card className="p-8 lg:p-10 animate-slide-up border premium-border border-white/15 bg-white/5 backdrop-blur-sm rounded-3xl hover-lift soft-shadow-lg animated-shadow shadow-premium" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl md:text-2xl mb-4 text-blue-accent">The Dry Pipeline</h3>
            <p className="text-white/80 leading-relaxed">
              Most boutique firms have the capacity to manage more capital but lack the internal system to identify it. Your expertise is wasted without consistent deal flow.
            </p>
          </Card>
          <Card className="p-8 lg:p-10 animate-slide-up border premium-border border-white/15 bg-white/5 backdrop-blur-sm rounded-3xl hover-lift soft-shadow-lg animated-shadow shadow-premium" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-xl md:text-2xl mb-4 text-blue-accent">The Wrong Target</h3>
            <p className="text-white/80 leading-relaxed">
              Competing for "Exiting Founders" is crowded. The silent wealth is in High-Margin Operating Businesses that need active profit extraction strategies right now.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
