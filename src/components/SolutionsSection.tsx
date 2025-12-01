import { Radar, Filter, CalendarCheck } from "lucide-react";
import { Card } from "./ui/card";

const SolutionsSection = () => {
  return (
    <section id="mechanism" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="grid-soft" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header Section */}
2        <div className="text-center mb-16 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-3xl md:text-5xl lg:text-6xl mb-6 gradient-text-animate bg-gradient-to-r from-slate-900 via-blue-600 to-slate-900 bg-clip-text text-transparent bg-[length:200%_auto]">Programmatic Capital Sourcing.</h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            We don't sell "leads." We build the infrastructure that connects you to the source of wealth.
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
                  <p className="text-muted-foreground leading-relaxed">We monitor Liquidity Events and High-Cash-Flow Sectors</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="tag-modern border-orange-200 text-orange-700">Construction</span>
                    <span className="tag-modern border-blue-200 text-blue-700">HVAC</span>
                    <span className="tag-modern border-green-200 text-green-700">Logistics</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mt-3">to identify founders with immediate capital deployment needs—before they hit the open market.</p>
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
                  <div className="inline-flex items-center gap-2 mt-3 mb-3">
                    <span className="tag-modern border-red-200 text-red-700 text-sm px-4 py-2 rounded-lg">Tax Pain Analysis</span>
                  </div>
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
                  <p className="text-muted-foreground leading-relaxed">We position YOU as the exclusive authority for</p>
                  <div className="flex flex-wrap gap-2 mt-3 mb-3">
                    <span className="tag-modern border-purple-200 text-purple-700">Profit Extraction</span>
                    <span className="tag-modern border-indigo-200 text-indigo-700">Capital Preservation</span>
                  </div>
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
