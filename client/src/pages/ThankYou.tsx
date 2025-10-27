import Section from '@/components/Section';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import { Link } from 'wouter';

export default function ThankYou() {
  return (
    <div>
      <Section className="bg-background min-h-[60vh] flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
            <CheckCircle className="h-10 w-10 text-primary" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-semibold text-foreground mb-4">
            Thank You for Reaching Out
          </h1>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Your message has been successfully sent to Ana Nelson. We understand the importance
            of timely communication and will respond to your inquiry within 24 hours.
          </p>
          
          <p className="text-base text-muted-foreground leading-relaxed mb-8">
            All consultations are conducted with strict confidentiality. We look forward to
            discussing how AMJ Solutions Group can support your communications needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button size="lg" data-testid="button-home">
                Return to Home
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" data-testid="button-services">
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
