import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Terms = () => {
  useEffect(() => {
    document.title = "Terms of Service & Disclaimer — Martic Solutions";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Terms governing B2B services: no result guarantees, liability limitations, external links, booking & payment, governing law Hamburg.");
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", "https://www.marticsolutions.com/terms");
  }, []);
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="py-24 lg:py-32">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.15] pb-1">Disclaimer & Terms</h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Earnings and liability disclaimer for agency services
              </p>
            </div>
            <div className="prose prose-lg max-w-none animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="bg-muted/30 rounded-lg p-8 space-y-8">
                <h2 className="text-foreground text-2xl font-semibold">1. Scope of Application</h2>
                <p className="text-muted-foreground">These Terms govern the use of marticsolutions.com and the business relationship between Martic Solutions ("Agency") and its business clients ("Client"). Services are provided exclusively B2B.</p>

                <h2 className="text-foreground text-2xl font-semibold">2. Nature of Services (No Guarantee of Results)</h2>
                <p className="text-muted-foreground">The Agency provides lead generation and appointment setting services. We provide the Client with the opportunity to hold sales conversations with potential leads. We expressly do not guarantee closed deals, signed contracts, or specific revenue figures. Conversion depends on the Client’s own sales skills, offer, and market conditions. Unless explicitly agreed in writing, we do not perform sales closing for the Client.</p>

                <h2 className="text-foreground text-2xl font-semibold">3. Earnings Disclaimer</h2>
                <p className="text-muted-foreground">Any case studies, testimonials, or revenue examples are exceptional and not guarantees of future results. You acknowledge the Agency makes no promises or warranties about future prospects or earnings.</p>

                <h2 className="text-foreground text-2xl font-semibold">4. Liability</h2>
                <p className="text-muted-foreground">The Agency is liable for intent or gross negligence under German law. In cases of slight negligence, liability is limited to essential contractual duties (cardinal duties) and to foreseeable, typical damages.</p>
                <p className="text-muted-foreground uppercase">US Specific Disclaimer: TO THE FULLEST EXTENT PERMITTED BY LAW, THE AGENCY DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. THE AGENCY SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES (INCLUDING LOST PROFITS).</p>

                <h2 className="text-foreground text-2xl font-semibold">5. External Links</h2>
                <p className="text-muted-foreground">Our website may contain links to third‑party websites (e.g., booking tools). We have no influence on their content and assume no liability for them.</p>

                <h2 className="text-foreground text-2xl font-semibold">6. Booking & Payment</h2>
                <p className="text-muted-foreground">No binding contract is formed by visiting the website. A binding service agreement is concluded only via a separate contract following a strategy call. Payment terms will be defined in that agreement.</p>

                <h2 className="text-foreground text-2xl font-semibold">7. Governing Law & Jurisdiction</h2>
                <p className="text-muted-foreground">German law applies. Exclusive venue and jurisdiction is Hamburg, Germany.</p>

                <h2 className="text-foreground text-2xl font-semibold">8. Severability Clause</h2>
                <p className="text-muted-foreground">If any provision is invalid, the validity of the remaining provisions remains unaffected.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;

