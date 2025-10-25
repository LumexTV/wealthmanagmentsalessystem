import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Datenschutz = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Main Content */}
      <main className="pt-20">
        <section className="py-24 lg:py-32">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 hover:scale-105 transition-transform duration-500">
                Datenschutzerklärung
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Informationen zum Datenschutz gemäß DSGVO
              </p>
            </div>

            <div className="prose prose-lg max-w-none animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="bg-muted/30 rounded-lg p-8 space-y-8">
                <div className="text-center mb-8">
                  <p className="text-sm text-muted-foreground">Stand: 25. Oktober 2025</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">1. Verantwortlicher</h2>
                  <div className="text-muted-foreground space-y-2">
                    <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
                    <div className="space-y-1">
                      <p className="font-semibold text-foreground">Luka Martic</p>
                      <p>kynova.de</p>
                      <p>Wesselstraße 10</p>
                      <p>22399 Hamburg</p>
                      <p>Deutschland</p>
                      <p><span className="font-semibold text-foreground">E-Mail:</span> <a href="mailto:info@kynova.de" className="text-primary hover:underline">info@kynova.de</a></p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">2. Allgemeines zur Datenverarbeitung</h2>
                  <div className="text-muted-foreground space-y-4">
                    <p>
                      Wir nehmen den Schutz Ihrer personenbezogenen Daten sehr ernst. Ihre Daten werden von uns vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung verarbeitet.
                    </p>
                    <p>
                      Die Nutzung dieser Website ist grundsätzlich ohne Angabe personenbezogener Daten möglich. Technische Zugriffsdaten werden automatisch erhoben (siehe Punkt 3). Weitere Daten werden nur verarbeitet, wenn Sie uns diese aktiv übermitteln – z. B. über das Kontaktformular.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">3. Hosting und Server-Logfiles</h2>
                  <div className="text-muted-foreground space-y-4">
                    <p>Diese Website wird betrieben auf Servern der:</p>
                    <div className="space-y-1">
                      <p className="font-semibold text-foreground">Hetzner Online GmbH</p>
                      <p>Industriestr. 25</p>
                      <p>91710 Gunzenhausen</p>
                      <p>Deutschland</p>
                    </div>
                    <p>Ein Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO wurde abgeschlossen.</p>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">Automatisch verarbeitete Daten beim Websitebesuch:</h3>
                      <ul className="list-disc list-inside space-y-1">
                        <li>IP-Adresse (anonymisiert durch Kürzung des letzten Oktetts)</li>
                        <li>Datum und Uhrzeit des Zugriffs</li>
                        <li>Name der abgerufenen Datei</li>
                        <li>Referrer-URL</li>
                        <li>Browsertyp und -version</li>
                        <li>Betriebssystem</li>
                        <li>Übertragene Datenmenge</li>
                      </ul>
                    </div>
                    
                    <p>Diese Daten werden ausschließlich zur Sicherstellung eines störungsfreien Betriebs der Website und zur Verbesserung unseres Angebots ausgewertet. Eine Zusammenführung mit anderen Datenquellen erfolgt nicht.</p>
                    
                    <div className="space-y-2">
                      <p><span className="font-semibold text-foreground">Rechtsgrundlage:</span> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an technischer Sicherheit und Stabilität)</p>
                      <p><span className="font-semibold text-foreground">Speicherdauer:</span> 3 Monate</p>
                      <p><span className="font-semibold text-foreground">Drittlandübermittlung:</span> Findet nicht statt. Alle Daten werden ausschließlich innerhalb der EU verarbeitet.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">4. Kontaktformular</h2>
                  <div className="text-muted-foreground space-y-4">
                    <p>Wenn Sie uns über das Kontaktformular kontaktieren, werden folgende Daten verarbeitet:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Name (Pflichtfeld)</li>
                      <li>Firmenname (Pflichtfeld)</li>
                      <li>E-Mail-Adresse (Pflichtfeld)</li>
                      <li>Telefonnummer (Pflichtfeld)</li>
                      <li>Nachricht (Optional)</li>
                    </ul>
                    <p>Diese Angaben werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.</p>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">Rechtsgrundlagen:</h3>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Art. 6 Abs. 1 lit. a DSGVO – Einwilligung durch Absenden</li>
                        <li>Art. 6 Abs. 1 lit. b DSGVO – zur Durchführung vorvertraglicher Maßnahmen</li>
                      </ul>
                    </div>
                    
                    <p><span className="font-semibold text-foreground">Speicherdauer:</span> Die Daten werden für bis zu 3 Monate gespeichert, um auf Rückfragen oder Folgeanfragen reagieren zu können. Auf Wunsch löschen wir Ihre Daten früher, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">5. Empfänger der Daten</h2>
                  <div className="text-muted-foreground space-y-4">
                    <p>Ihre personenbezogenen Daten werden grundsätzlich nicht an Dritte weitergegeben. Eine Weitergabe erfolgt nur:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>an unseren Hosting-Dienstleister Hetzner Online GmbH (siehe Punkt 3)</li>
                      <li>wenn Sie eingewilligt haben (Art. 6 Abs. 1 lit. a DSGVO)</li>
                      <li>wenn dies zur Erfüllung eines Vertrags erforderlich ist (Art. 6 Abs. 1 lit. b DSGVO)</li>
                      <li>wenn eine gesetzliche Verpflichtung besteht (Art. 6 Abs. 1 lit. c DSGVO)</li>
                    </ul>
                    <p>Weitere Empfänger oder Datenübermittlungen an Drittländer finden nicht statt.</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">6. Sicherheit Ihrer Daten</h2>
                  <div className="text-muted-foreground space-y-4">
                    <p>
                      Unsere Website nutzt eine verschlüsselte Verbindung via SSL/TLS („https"). Darüber hinaus setzen wir gemeinsam mit unserem Hosting-Anbieter technische und organisatorische Maßnahmen ein, um Ihre Daten bestmöglich zu schützen.
                    </p>
                    <p>
                      <span className="font-semibold text-foreground">Informationen zu den Maßnahmen von Hetzner:</span><br />
                      <a href="#" className="text-primary hover:underline">🔗 Technische und organisatorische Maßnahmen</a>
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">7. Cookies und Tracking-Technologien</h2>
                  <div className="text-muted-foreground space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">7.1 Verwendung von Cookies</h3>
                      <p>
                        Diese Website verwendet keine Cookies für Tracking oder Analyse-Zwecke. Es werden ausschließlich technisch notwendige Cookies eingesetzt, die für die Grundfunktionen der Website erforderlich sind.
                      </p>
                      
                      <div>
                        <p className="font-semibold text-foreground">Technisch notwendige Cookies:</p>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Session-Cookies zur Aufrechterhaltung Ihrer Sitzung</li>
                          <li>Sicherheits-Cookies zum Schutz vor Angriffen</li>
                        </ul>
                      </div>
                      
                      <div className="space-y-2">
                        <p><span className="font-semibold text-foreground">Rechtsgrundlage:</span> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der technischen Funktionsfähigkeit)</p>
                        <p><span className="font-semibold text-foreground">Speicherdauer:</span> Diese Cookies werden nach Ende Ihrer Browser-Sitzung automatisch gelöscht.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">8. Ihre Rechte</h2>
                  <div className="text-muted-foreground space-y-4">
                    <p>Sie haben als betroffene Person gemäß DSGVO folgende Rechte:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                      <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                      <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                      <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                      <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                      <li>Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
                      <li>Recht auf Widerruf Ihrer Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
                      <li>Recht auf Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)</li>
                    </ul>
                    
                    <div>
                      <p className="font-semibold text-foreground">Zuständige Aufsichtsbehörde für Hamburg:</p>
                      <div className="space-y-1">
                        <p>Der Hamburgische Beauftragte für Datenschutz und Informationsfreiheit</p>
                        <p>Ludwig-Erhard-Str. 22, 20459 Hamburg</p>
                        <p>Telefon: +49 40 428 54 – 4040</p>
                        <p><span className="font-semibold text-foreground">E-Mail:</span> <a href="mailto:mailbox@datenschutz.hamburg.de" className="text-primary hover:underline">mailbox@datenschutz.hamburg.de</a></p>
                        <p><a href="#" className="text-primary hover:underline">🔗 datenschutz-hamburg.de</a></p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">9. Datenschutz bei externen Links</h2>
                  <div className="text-muted-foreground">
                    <p>
                      Unsere Website enthält Links zu externen Websites. Beim Klick auf solche Links verlassen Sie unsere Seite. Für die dort geltenden Datenschutzbestimmungen übernehmen wir keine Verantwortung. Bitte prüfen Sie die Datenschutzhinweise der jeweiligen Anbieter.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">10. Änderungen dieser Datenschutzerklärung</h2>
                  <div className="text-muted-foreground space-y-4">
                    <p>
                      Diese Datenschutzerklärung kann jederzeit an geänderte gesetzliche, technische oder organisatorische Anforderungen angepasst werden. Die jeweils aktuelle Version finden Sie stets auf dieser Seite.
                    </p>
                    <p><span className="font-semibold text-foreground">Stand dieser Erklärung:</span> 25. Oktober 2025</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">Kontakt für Datenschutzanfragen</h2>
                  <div className="text-muted-foreground space-y-2">
                    <p className="font-semibold text-foreground">Luka Martic</p>
                    <p><span className="font-semibold text-foreground">E-Mail:</span> <a href="mailto:info@kynova.de" className="text-primary hover:underline">info@kynova.de</a></p>
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

export default Datenschutz;
