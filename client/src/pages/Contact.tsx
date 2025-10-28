import Section from '@/components/Section';
import ContactForm from '@/components/ContactForm';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <div>
      <Section className="bg-card">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-semibold text-foreground mb-6">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ready to discuss your communications challenges? Reach out for a confidential
            consultation.
          </p>
        </div>
      </Section>

      <Section className="bg-background">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h2>
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-1">Email</h3>
                    <a
                      href="mailto:ana@amjsolutionsgroup.com"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      data-testid="link-contact-email"
                    >
                      ana@amjsolutionsgroup.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-1">Phone</h3>
                    <a
                      href="tel:+12106063073"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      data-testid="link-contact-phone"
                    >
                      (210) 606-3073
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-1">Location</h3>
                    <p className="text-sm text-muted-foreground">Boca Raton, Florida</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-1">LinkedIn</h3>
                    <a
                      href="https://linkedin.com/in/ana-joanicot-nelson-42a63718"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      data-testid="link-contact-linkedin"
                    >
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      <Section className="bg-card">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Confidential Consultations
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            All initial consultations are conducted with strict confidentiality. We understand the
            sensitive nature of communications challenges and provide white-glove service with the
            discretion you expect at the executive level.
          </p>
        </div>
      </Section>
    </div>
  );
}
