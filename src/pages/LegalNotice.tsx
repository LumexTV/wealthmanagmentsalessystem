import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const LegalNotice = () => {
  useEffect(() => {
    document.title = "Legal Notice — Martic Solutions";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Information according to § 5 TMG for Martic Solutions, including contact, VAT ID, and legal disclaimers.");
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", "https://www.marticsolutions.com/legal-notice");
  }, []);
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="py-24 lg:py-32">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.15] pb-1">Legal Notice</h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Information required under § 5 TMG (German Telemedia Act)
              </p>
            </div>
            <div className="prose prose-lg max-w-none animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="bg-muted/30 rounded-lg p-8 space-y-8">
                <div className="space-y-2">
                  <p><span className="font-semibold text-foreground">Company Name:</span> Luka Martic (Sole Proprietor)</p>
                  <p><span className="font-semibold text-foreground">Registered Address:</span> Wesselstraße 10, 22399 Hamburg, Germany</p>
                  <p><span className="font-semibold text-foreground">Represented by:</span> Luka Martic</p>
                  <p><span className="font-semibold text-foreground">Contact Email:</span> <a href="mailto:luka@marticsolutions.com" className="text-primary hover:underline">luka@marticsolutions.com</a></p>
                  <p><span className="font-semibold text-foreground">Phone:</span> +49 176 47663929</p>
                  <p><span className="font-semibold text-foreground">Website:</span> <a href="https://www.marticsolutions.com" className="text-primary hover:underline" target="_blank" rel="noreferrer">www.marticsolutions.com</a></p>
                  <p><span className="font-semibold text-foreground">Register Court & Number:</span> Not applicable (sole proprietorship; no commercial register entry)</p>
                  <p><span className="font-semibold text-foreground">VAT ID (USt-IdNr.):</span> DE455607026</p>
                </div>
                <div className="space-y-2">
                  <p><span className="font-semibold text-foreground">Responsible for Content (§ 55(2) RStV):</span> Luka Martic</p>
                  <p>Wesselstraße 10, 22399 Hamburg, Germany</p>
                </div>
                <div className="space-y-2">
                  <p><span className="font-semibold text-foreground">Governing Law:</span> German law applies</p>
                  <p><span className="font-semibold text-foreground">Jurisdiction:</span> Hamburg, Germany</p>
                </div>

                <hr />
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Disclaimers</h3>
                  <div className="space-y-3">
                    <p>
                      <span className="font-semibold text-foreground">EU Dispute Resolution:</span> The European Online Dispute Resolution (ODR) platform was discontinued on 20 July 2025 (Regulation (EU) 2024/3228). A list of consumer dispute resolution bodies in EU Member States, Norway and Iceland is available at
                      {" "}
                      <a href="https://consumer-redress.ec.europa.eu/dispute-resolution-bodies" className="text-primary hover:underline" target="_blank" rel="noreferrer">consumer-redress.ec.europa.eu/dispute-resolution-bodies</a>.
                      {" "}
                      We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.
                    </p>
                    <p>
                      <span className="font-semibold text-foreground">Liability for Content:</span> As a service provider, we are responsible for our own content on these pages according to general laws (§ 7(1) TMG). According to §§ 8–10 TMG, we are not obliged to monitor transmitted or stored external information or to investigate circumstances indicating unlawful activity. Obligations to remove or block use of information under general laws remain unaffected. Liability is only possible from the time we become aware of a specific infringement. Upon becoming aware, we will remove such content immediately.
                    </p>
                    <p>
                      <span className="font-semibold text-foreground">Liability for Links:</span> Our offer contains links to external third‑party websites (e.g., appointment booking tools). We have no influence over their content, and thus cannot assume liability for such external content. The respective provider or operator is responsible. The linked pages were checked for possible legal violations at the time of linking; unlawful content was not recognizable then. Permanent monitoring is not reasonable without concrete evidence. Upon becoming aware of infringements, we will remove such links immediately.
                    </p>
                    <p>
                      <span className="font-semibold text-foreground">Copyright:</span> The content and works created by the site operator on these pages are subject to German copyright law. Duplication, processing, distribution and any kind of exploitation outside the limits of copyright require the written consent of the respective author. Downloads and copies of this page are permitted only for private, non‑commercial use. Third‑party content is respected and marked as such. If you become aware of a copyright infringement, please notify us. Upon becoming aware, we will remove such content immediately.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LegalNotice;

