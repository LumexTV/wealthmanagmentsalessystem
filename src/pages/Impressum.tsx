import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Impressum = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Main Content */}
      <main className="pt-20">
        <section className="py-24 lg:py-32">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 hover:scale-105 transition-transform duration-500">
                Impressum
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Angaben gemäß § 5 TMG
              </p>
            </div>

            <div className="prose prose-lg max-w-none animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="bg-muted/30 rounded-lg p-8 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">Angaben gemäß § 5 TMG:</h2>
                  
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <p className="font-semibold text-foreground">Luka Martic</p>
                      <p>Einzelunternehmen</p>
                      <p>Wesselstraße 10</p>
                      <p>22399 Hamburg</p>
                      <p>Deutschland</p>
                    </div>
                    
                    <div className="space-y-2">
                      <p><span className="font-semibold text-foreground">Telefon:</span> +49 176 47663929</p>
                      <p><span className="font-semibold text-foreground">E-Mail:</span> <a href="mailto:info@kynova.de" className="text-primary hover:underline">info@kynova.de</a></p>
                      <p><span className="font-semibold text-foreground">Website:</span> <a href="https://kynova.de" className="text-primary hover:underline">WWW.KYNOVA.DE</a></p>
                    </div>
                    
                    <div>
                      <p><span className="font-semibold text-foreground">Vertretungsberechtigter:</span></p>
                      <p>Daniel Schmuch</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-foreground">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</p>
                      <p>Luka Martic</p>
                      <p>Wesselstraße 10</p>
                      <p>22399 Hamburg</p>
                      <p>Deutschland</p>
                    </div>
                    
                    <div>
                      <p><span className="font-semibold text-foreground">Umsatzsteuer-ID</span></p>
                      <p>DE455607026</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">Haftungsausschluss</h2>
                  
                  <div className="space-y-6 text-muted-foreground">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">Haftung für Inhalte</h3>
                      <p>
                        Als Diensteanbieter bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">Haftung für Links</h3>
                      <p>
                        Mein Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Links umgehend entfernen.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">Urheberrecht</h3>
                      <p>
                        Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet und entsprechend gekennzeichnet. Solltest du trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitte ich um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Inhalte umgehend entfernen.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">Information zur Verbraucherstreitbeilegung (VSBG)</h3>
                      <p>
                        Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle nicht verpflichtet und nicht bereit.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">Kontakt für Impressumsanfragen</h3>
                      <p>Luka Martic/Daniel Schmuch</p>
                      <p><span className="font-semibold text-foreground">E-Mail:</span> <a href="mailto:info@kynova.de" className="text-primary hover:underline">info@kynova.de</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20">
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Haben Sie Fragen zu unseren Services?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Vereinbaren Sie ein unverbindliches Erstgespräch und erfahren Sie, 
                  wie KYNOVA Ihre Lead-Bearbeitung optimieren kann.
                </p>
                <Button 
                  size="lg" 
                  className="group text-base px-8 py-6 rounded-full hover-glow transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  onClick={() => {
                    window.location.href = '/#contact';
                  }}
                >
                  Gratis Beratung
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Impressum;
