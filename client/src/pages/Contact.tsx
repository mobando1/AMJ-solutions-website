import PageMeta from '@/components/PageMeta';
import Section from '@/components/Section';
import FadeIn from '@/components/FadeIn';
import ContactForm from '@/components/ContactForm';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Linkedin, Calendar, MessageSquare, CheckCircle2, Clock, Shield, Users } from 'lucide-react';

export default function Contact() {
  const calendlyUrl = 'https://calendly.com/ana-amjsolutionsgroup/new-meeting';

  return (
    <div>
      <PageMeta title="Contact" description="Schedule a confidential strategy call or send a message. Let's discuss how AMJ Solutions Group can help your organization." />
      <section className="bg-card py-4 sm:py-6">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl sm:text-4xl font-semibold text-foreground mb-3">
                Let's Talk
              </h1>
              <p className="text-base text-muted-foreground leading-relaxed">
                Schedule a confidential strategy call or send us a message.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-background py-6 sm:py-8">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            <div className="lg:col-span-2 order-2 lg:order-1">
              <FadeIn direction="left">
                <div className="lg:sticky lg:top-24">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    Schedule a Strategy Call
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    A 30-minute confidential conversation to understand your situation and explore how we can help.
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">What to Expect</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground">Discuss your current challenges and priorities</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground">Get an honest assessment of how we might help</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground">Explore potential engagement approaches</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground">No pressure, no obligation — just a conversation</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>30 minutes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-primary" />
                      <span>Confidential</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span>With Ana Nelson</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
            
            <div className="lg:col-span-3 order-1 lg:order-2">
              <FadeIn direction="right" delay={200}>
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  {calendlyUrl ? (
                    <iframe
                      src={calendlyUrl}
                      width="100%"
                      frameBorder="0"
                      title="Schedule a consultation"
                      className="w-full h-[450px] sm:h-[580px]"
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
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <Section className="bg-card">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
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
          </FadeIn>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <FadeIn delay={100}>
                <ContactForm />
              </FadeIn>
            </div>

            <div>
              <FadeIn delay={200}>
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
              </FadeIn>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-background">
        <FadeIn>
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
        </FadeIn>
      </Section>
    </div>
  );
}
