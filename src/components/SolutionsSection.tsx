import { Radar, Filter, CalendarCheck } from "lucide-react";
import { Card } from "./ui/card";

const SolutionsSection = () => {
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
          <h2 className="inline-block text-3xl md:text-5xl lg:text-6xl mb-6 leading-[1.2] pb-2 gradient-text-animate bg-gradient-to-r from-slate-900 via-blue-600 to-slate-900 bg-clip-text text-transparent bg-[length:200%_auto]">Programmatic Capital Sourcing.</h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            We don’t sell lists. We build infrastructure that connects you to the source of capital.
          </p>
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
                    <h3 className="text-xl md:text-2xl text-blue-accent">The Signal</h3>
                    <span className="px-3 py-1 bg-gradient-to-r from-primary/10 to-blue-accent/10 text-primary text-sm font-medium rounded-full border border-primary/20">Identify</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">We monitor liquidity events and high‑cash‑flow sectors</p>
                  <p className="text-muted-foreground leading-relaxed mt-3">to identify founder‑operators with immediate capital deployment needs—before they hit the open market.</p>
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
                    <h3 className="text-xl md:text-2xl text-blue-accent">The Filter</h3>
                    <span className="px-3 py-1 bg-gradient-to-r from-primary/10 to-blue-accent/10 text-primary text-sm font-medium rounded-full border border-primary/20">Qualify</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">We do not rely on cold lists. We verify asset potential and specific</p>
                  <p className="text-muted-foreground leading-relaxed">levels to ensure every introduction is a qualified opportunity, not a tire-kicker.</p>
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
                    <h3 className="text-xl md:text-2xl text-blue-accent">The Handoff</h3>
                    <span className="px-3 py-1 bg-gradient-to-r from-primary/10 to-blue-accent/10 text-primary text-sm font-medium rounded-full border border-primary/20">Connect</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">We position you as the exclusive authority for</p>
                  <p className="text-muted-foreground leading-relaxed">You receive the introduction only when the business owner is ready to discuss strategy.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <div className="inline-flex items-center gap-4 glass-modern rounded-full px-8 py-4 border border-white/20">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-blue-accent">System Active • Monitoring 847 Potential Opportunities</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
