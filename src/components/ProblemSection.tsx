import { Card } from "./ui/card";

const ProblemSection = () => {
  const t = useT();
  return (
    <section id="problem" className="py-24 lg:py-32 relative overflow-hidden text-white bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      <div className="absolute inset-0 bg-soft-gradient" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in overflow-visible">
          <h2 className="text-3xl md:text-5xl lg:text-6xl mb-6 leading-[1.15] pb-1 gradient-text-animate bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">{t.problem.title}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          <Card className="p-8 lg:p-10 animate-slide-up border premium-border border-white/15 bg-white/5 backdrop-blur-sm rounded-3xl hover-lift soft-shadow-lg animated-shadow shadow-premium" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-xl md:text-2xl mb-4 text-blue-accent">{t.problem.cards.referral_title}</h3>
            <p className="text-white/80 leading-relaxed">{t.problem.cards.referral_body}</p>
          </Card>
          <Card className="p-8 lg:p-10 animate-slide-up border premium-border border-white/15 bg-white/5 backdrop-blur-sm rounded-3xl hover-lift soft-shadow-lg animated-shadow shadow-premium" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl md:text-2xl mb-4 text-blue-accent">{t.problem.cards.dry_title}</h3>
            <p className="text-white/80 leading-relaxed">{t.problem.cards.dry_body}</p>
          </Card>
          <Card className="p-8 lg:p-10 animate-slide-up border premium-border border-white/15 bg-white/5 backdrop-blur-sm rounded-3xl hover-lift soft-shadow-lg animated-shadow shadow-premium" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-xl md:text-2xl mb-4 text-blue-accent">{t.problem.cards.target_title}</h3>
            <p className="text-white/80 leading-relaxed">{t.problem.cards.target_body}</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
import { useT } from "../hooks/use-t";
