import Section from '@/components/Section';
import ContactForm from '@/components/ContactForm';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Linkedin, Calendar, MessageSquare } from 'lucide-react';

export default function Contact() {
  const calendlyUrl = import.meta.env.VITE_CALENDLY_URL || '';

  return (
    <div>
      <Section className="bg-card">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-semibold text-foreground mb-6">
            Let's Talk
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ready to discuss your communications challenges? Schedule a confidential strategy call or send us a message.
          </p>
        </div>
      </Section>

      <Section className="bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Calendar className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-3">
              Schedule a Strategy Call
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Pick a time that works for you. All consultations are confidential and focused on your specific needs.
            </p>
          </div>
          
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              {calendlyUrl ? (
                <iframe
                  src={calendlyUrl}
                  width="100%"
                  height="700"
                  frameBorder="0"
                  title="Schedule a consultation"
                  className="w-full"
                  data-testid="calendly-embed"
                />
              ) : (
                <div className="flex items-center justify-center h-[400px] bg-muted/20 p-8 text-center">
                  <div className="space-y-4">
                    <Calendar className="h-16 w-16 mx-auto text-muted-foreground" />
                    <div>
                      <p className="text-lg font-medium text-foreground mb-2">
                        Calendar Coming Soon
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Online scheduling will be available shortly.
                      </p>
                      <p className="text-sm text-muted-foreground mt-4">
                        In the meantime, please use the contact form below or email us directly.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section className="bg-card">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
              <MessageSquare className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-2">
              Or Send Us a Message
            </h2>
            <p className="text-muted-foreground text-sm">
              Prefer to write first? We'll respond within 24 hours.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <ContactForm />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Contact Information</h3>
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-1">Email</h4>
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
                      <h4 className="text-sm font-semibold text-foreground mb-1">Phone</h4>
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
                      <h4 className="text-sm font-semibold text-foreground mb-1">Location</h4>
                      <p className="text-sm text-muted-foreground">Boca Raton, Florida</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Linkedin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-1">LinkedIn</h4>
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
        </div>
      </Section>

      <Section className="bg-background">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Confidential Consultations
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            All consultations are conducted with strict confidentiality. We understand the
            sensitive nature of communications challenges and provide white-glove service with the
            discretion you expect at the executive level.
          </p>
        </div>
      </Section>
    </div>
  );
}
