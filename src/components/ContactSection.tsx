import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Card } from "./ui/card";
import { Mail, Globe, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Fehler",
        description: "Bitte füllen Sie alle Pflichtfelder aus.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Nachricht gesendet!",
      description: "Wir melden uns in Kürze bei Ihnen.",
    });

    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 hover:scale-105 transition-transform duration-500">
            Kontaktieren Sie uns
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Bereit, Ihre Lead-Bearbeitung zu revolutionieren? Lassen Sie uns sprechen.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="p-8 lg:p-10 animate-slide-up group hover:shadow-xl transition-all duration-500" style={{ boxShadow: 'var(--shadow-md)', animationDelay: '0.1s' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="group/field">
                <Label htmlFor="name" className="group-focus/field:text-primary transition-colors duration-300">Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ihr vollständiger Name"
                  className="mt-2 focus:scale-105 transition-transform duration-300 focus:shadow-lg"
                  required
                />
              </div>

              <div className="group/field">
                <Label htmlFor="email" className="group-focus/field:text-primary transition-colors duration-300">E-Mail *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ihre@email.de"
                  className="mt-2 focus:scale-105 transition-transform duration-300 focus:shadow-lg"
                  required
                />
              </div>

              <div className="group/field">
                <Label htmlFor="phone" className="group-focus/field:text-primary transition-colors duration-300">Telefon</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+49 123 456789"
                  className="mt-2 focus:scale-105 transition-transform duration-300 focus:shadow-lg"
                />
              </div>

              <div className="group/field">
                <Label htmlFor="message" className="group-focus/field:text-primary transition-colors duration-300">Nachricht *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Erzählen Sie uns von Ihrem Projekt..."
                  className="mt-2 min-h-32 focus:scale-105 transition-transform duration-300 focus:shadow-lg"
                  required
                />
              </div>

              <Button type="submit" className="w-full hover-glow hover:scale-105 transition-all duration-300 hover:shadow-xl" size="lg" style={{ boxShadow: 'var(--shadow-sm)' }}>
                Nachricht senden
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Sprechen wir über Ihre Ziele
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Vereinbaren Sie ein unverbindliches Erstgespräch und erfahren Sie, 
                wie KYNOVA Ihre Lead-Bearbeitung optimieren kann.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors" style={{ boxShadow: 'var(--shadow-xs)' }}>
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold mb-1">E-Mail</p>
                  <a 
                    href="mailto:info@kynova.de" 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    info@kynova.de
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors" style={{ boxShadow: 'var(--shadow-xs)' }}>
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Website</p>
                  <a 
                    href="https://kynova.de" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    kynova.de
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors" style={{ boxShadow: 'var(--shadow-xs)' }}>
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Standort</p>
                  <p className="text-muted-foreground">
                    Hamburg, Deutschland
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
