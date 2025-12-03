import { Radar, Filter, CalendarCheck } from "lucide-react";
import { Card } from "./ui/card";

const SolutionsSection = () => {
  const t = useT();
  return (
    <section id="mechanism" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />
        <div 
          className="absolute inset-0 opacity-5 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(3px) brightness(1.2)'
          }}
        />
        <div className="absolute inset-0 grid-pattern opacity-30 animate-gradient-x" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-transparent rounded-full blur-3xl animate-float-gentle" />
        <div className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-gradient-to-tl from-primary/10 to-transparent rounded-full blur-3xl animate-float-gentle" />
      </div>
      
      <div className="grid-soft" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center mb-16 animate-slide-up overflow-visible pt-1" style={{ animationDelay: '0.1s' }}>
          <h2 className="inline-block text-3xl md:text-5xl lg:text-6xl mb-6 leading-[1.2] pb-2 gradient-text-animate bg-gradient-to-r from-slate-900 via-blue-600 to-slate-900 bg-clip-text text-transparent bg-[length:200%_auto]">{t.solutions.title}</h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">{t.solutions.subtitle}</p>
        </div>

        {/* Process Flow */}
        <div className="space-y-8 animate-slide-up relative" style={{ animationDelay: '0.2s' }}>
          <svg className="absolute left-1/2 top-0 h-full w-24 flow-connector -translate-x-1/2 hidden lg:block" viewBox="0 0 100 600" preserveAspectRatio="none">
            <path d="M50,0 C20,60 80,120 50,200 C20,260 80,320 50,400 C20,460 80,520 50,600" />
          </svg>
          
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 relative">
            {/* Step 1 */}
            <Card className="p-8 border hover-lift soft-shadow-lg animated-shadow premium-border shadow-premium text-center lg:text-left bg-gradient-to-br from-white to-slate-50/50 backdrop-blur-sm">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center soft-shadow animate-bounce-gentle flex-shrink-0">
                  <Radar className="h-7 w-7 text-primary-foreground" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl md:text-2xl text-blue-accent">{t.solutions.steps.signal.title}</h3>
                    <span className="px-3 py-1 bg-gradient-to-r from-primary/10 to-blue-accent/10 text-primary text-sm font-medium rounded-full border border-primary/20">{t.solutions.steps.signal.tag}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{t.solutions.steps.signal.p1}</p>
                  <p className="text-muted-foreground leading-relaxed mt-3">{t.solutions.steps.signal.p2}</p>
                </div>
              </div>
            </Card>

            {/* Step 2 */}
            <Card className="p-8 border hover-lift soft-shadow-lg animated-shadow premium-border shadow-premium text-center lg:text-left bg-gradient-to-br from-white to-slate-50/50 backdrop-blur-sm">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center soft-shadow animate-bounce-gentle flex-shrink-0">
                  <Filter className="h-7 w-7 text-primary-foreground" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl md:text-2xl text-blue-accent">{t.solutions.steps.filter.title}</h3>
                    <span className="px-3 py-1 bg-gradient-to-r from-primary/10 to-blue-accent/10 text-primary text-sm font-medium rounded-full border border-primary/20">{t.solutions.steps.filter.tag}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{t.solutions.steps.filter.p1}</p>
                  <p className="text-muted-foreground leading-relaxed">{t.solutions.steps.filter.p2}</p>
                </div>
              </div>
            </Card>

            {/* Step 3 */}
            <Card className="p-8 border hover-lift soft-shadow-lg animated-shadow premium-border shadow-premium text-center lg:text-left bg-gradient-to-br from-white to-slate-50/50 backdrop-blur-sm">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center soft-shadow animate-bounce-gentle flex-shrink-0">
                  <CalendarCheck className="h-7 w-7 text-primary-foreground" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl md:text-2xl text-blue-accent">{t.solutions.steps.handoff.title}</h3>
                    <span className="px-3 py-1 bg-gradient-to-r from-primary/10 to-blue-accent/10 text-primary text-sm font-medium rounded-full border border-primary/20">{t.solutions.steps.handoff.tag}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{t.solutions.steps.handoff.p1}</p>
                  <p className="text-muted-foreground leading-relaxed">{t.solutions.steps.handoff.p2}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <div className="inline-flex items-center gap-4 glass-modern rounded-full px-8 py-4 border border-white/20">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-blue-accent">{t.solutions.systemActive}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
import { useT } from "../hooks/use-t";
