import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy — Martic Solutions";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Privacy policy covering hosting logs, appointment scheduling providers, international data transfers, and GDPR/CCPA rights.");
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", "https://www.marticsolutions.com/privacy-policy");
  }, []);
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="py-24 lg:py-32">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.15] pb-1">Privacy Policy</h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
                How we process personal data in connection with this website and appointment scheduling.
              </p>
            </div>
            <div className="prose prose-lg max-w-none animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="bg-muted/30 rounded-lg p-8 space-y-8">
                <p className="text-sm text-muted-foreground">Effective Date: July 17, 2025</p>

                <h2 className="text-foreground text-2xl font-semibold">1. General Information</h2>
                <p className="text-muted-foreground">We take the protection of your personal data seriously. This Privacy Policy explains how we collect, use, and protect your information when you visit our website. As a German company, we adhere to the GDPR and respect applicable US privacy laws (such as the CCPA/CPRA).</p>

                <h2 className="text-foreground text-2xl font-semibold">2. Controller</h2>
                <p className="text-muted-foreground">Luka Martic (Martic Solutions), Wesselstraße 10, 22399 Hamburg, Germany, <a href="mailto:luka@marticsolutions.com" className="text-primary hover:underline">luka@marticsolutions.com</a></p>

                <h2 className="text-foreground text-2xl font-semibold">3. No Tracking Cookies & No Analytics</h2>
                <p className="text-muted-foreground">We do not use third‑party tracking cookies, advertising pixels (e.g., Meta Pixel), or analytics software (e.g., Google Analytics) on this website.</p>

                <h2 className="text-foreground text-2xl font-semibold">4. Server Log Files (Hosting)</h2>
                <p className="text-muted-foreground">Our website is hosted by Hetzner Online GmbH (Germany). When you visit our site, the server automatically collects and stores information in server log files:</p>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>IP address (anonymized)</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Referrer URL</li>
                  <li>Time of the server request</li>
                </ul>
                <p className="text-muted-foreground">This data is not combined with other sources. Collection is necessary for stability and security (Legal basis: Art. 6(1)(f) GDPR).</p>

                <h2 className="text-foreground text-2xl font-semibold">5. Contact & Appointment Booking</h2>
                <p className="text-muted-foreground">If you contact us via email or click a link to book a strategy call, personal data will be processed.</p>
                <p className="text-muted-foreground"><span className="font-semibold text-foreground">Email Contact:</span> If you send us an email, your email address and message will be stored to process your inquiry.</p>
                <p className="text-muted-foreground"><span className="font-semibold text-foreground">External Booking Tools:</span> Our links redirect to third‑party scheduling providers. Any data you enter there (name, email, phone) is processed by that provider under its own privacy policy and used to organize the call.</p>

                <h2 className="text-foreground text-2xl font-semibold">6. Data Transfer to the USA</h2>
                <p className="text-muted-foreground">We serve clients in the USA and may use US‑based tools (e.g., Zoom, Google Workspace). Appropriate safeguards (EU‑US DPF or Standard Contractual Clauses) apply to any transfers.</p>

                <h2 className="text-foreground text-2xl font-semibold">7. Your Rights (GDPR & CCPA)</h2>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>Access, deletion, correction, restriction, portability, and objection (GDPR Articles 15–21)</li>
                  <li>California (CCPA/CPRA): right to know and delete; we do not sell personal information</li>
                </ul>
                <p className="text-muted-foreground">To exercise rights, contact us at <a href="mailto:luka@marticsolutions.com" className="text-primary hover:underline">luka@marticsolutions.com</a>.</p>

                <h2 className="text-foreground text-2xl font-semibold">8. Security</h2>
                <p className="text-muted-foreground">This site uses SSL/TLS encryption to protect the transmission of confidential content.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

