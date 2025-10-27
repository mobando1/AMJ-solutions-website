import Section from '@/components/Section';
import { Button } from '@/components/ui/button';
import { Shield, Star, Mic, User, Users, MessageSquare } from 'lucide-react';
import { Link } from 'wouter';

export default function Services() {
  const services = [
    {
      id: 'crisis-communications',
      icon: Shield,
      title: 'Crisis Communications',
      description:
        'Immediate, strategic response when your reputation is on the line. We help organizations navigate data breaches, leadership transitions, regulatory investigations, and public controversies with clarity and confidence.',
      outcomes: [
        'Rapid response protocols activated within hours',
        'Clear, consistent messaging across all channels',
        'Stakeholder confidence maintained through transparency',
        'Brand reputation protected and strengthened',
      ],
    },
    {
      id: 'reputation-management',
      icon: Star,
      title: 'Reputation Management',
      description:
        'Proactive strategies to build, protect, and restore your organization\'s reputation. From executive positioning to corporate narrative development, we ensure your story is told authentically.',
      outcomes: [
        'Enhanced brand credibility and trust',
        'Positive media coverage and thought leadership',
        'Strategic narrative that resonates with key audiences',
        'Long-term reputation resilience',
      ],
    },
    {
      id: 'media-training',
      icon: Mic,
      title: 'Media Training',
      description:
        'Prepare executives and spokespeople to confidently engage with media, investors, and stakeholders. Our hands-on training covers message development, interview techniques, and crisis scenarios.',
      outcomes: [
        'Executives who communicate with clarity and confidence',
        'Consistent on-brand messaging across all interviews',
        'Crisis-ready spokespeople who stay calm under pressure',
        'Reduced risk of off-message communication',
      ],
    },
    {
      id: 'executive-coaching',
      icon: User,
      title: 'Executive Coaching',
      description:
        'One-on-one coaching to help leaders sharpen their communication skills, executive presence, and strategic thinking. Tailored to each executive\'s unique challenges and goals.',
      outcomes: [
        'Enhanced leadership presence and influence',
        'Improved stakeholder engagement',
        'Greater confidence in high-pressure situations',
        'Authentic, compelling communication style',
      ],
    },
    {
      id: 'public-affairs',
      icon: Users,
      title: 'Public Affairs & Stakeholder Engagement',
      description:
        'Navigate complex regulatory environments and build coalitions of support. We help organizations engage effectively with government, community leaders, and key stakeholders.',
      outcomes: [
        'Strong relationships with regulatory and community stakeholders',
        'Successful navigation of policy and legislative challenges',
        'Community support for business initiatives',
        'Proactive issue management',
      ],
    },
    {
      id: 'internal-communications',
      icon: MessageSquare,
      title: 'Internal Communications',
      description:
        'Align your workforce during change, crisis, or transformation. Clear internal communication builds trust, maintains morale, and ensures everyone moves in the same direction.',
      outcomes: [
        'Employees informed and engaged during change',
        'Reduced rumors and uncertainty',
        'Stronger organizational culture',
        'Improved productivity and retention',
      ],
    },
  ];

  return (
    <div>
      <section className="bg-card py-6 sm:py-8">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-semibold text-foreground mb-4">
              Strategic Communications Services
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-3">
              Comprehensive solutions for your most critical communications challenges. Every
              engagement is conducted with the utmost discretion and confidentiality.
            </p>
            <p className="text-sm text-muted-foreground italic">
              All client work is protected by strict confidentiality agreements
            </p>
          </div>
        </div>
      </section>

      {services.map((service, index) => {
        const Icon = service.icon;
        return (
          <Section
            key={service.id}
            className={index % 2 === 0 ? 'bg-background' : 'bg-card'}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={index % 2 === 0 ? 'order-1' : 'order-1 lg:order-2'}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-semibold text-foreground mb-4">{service.title}</h2>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    data-testid={`button-consult-${service.id}`}
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
              <div className={index % 2 === 0 ? 'order-2' : 'order-2 lg:order-1'}>
                <div className="bg-card border border-card-border rounded-lg p-8">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Key Outcomes</h3>
                  <ul className="space-y-3">
                    {service.outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {outcome}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Section>
        );
      })}

      <Section className="bg-primary text-primary-foreground text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
            Let's Discuss Your Communications Needs
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Every organization faces unique challenges. Contact us for a confidential consultation to
            explore how we can help.
          </p>
          <Link href="/contact">
            <Button
              variant="secondary"
              size="lg"
              data-testid="button-contact-cta"
            >
              Get In Touch
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
