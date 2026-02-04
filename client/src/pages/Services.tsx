import Section from '@/components/Section';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, MessageCircle, RefreshCw, Target, CheckCircle2 } from 'lucide-react';
import { Link } from 'wouter';

export default function Services() {
  const services = [
    {
      id: 'crisis-risk-advisory',
      icon: Shield,
      title: 'Executive Crisis & Risk Advisory',
      tagline: 'Structure, judgment, and control when risk escalates.',
      description:
        'When stakes are high and decisions carry consequence, we provide the structure, judgment, and steady hand leaders need. Our crisis and risk advisory support helps executives navigate uncertainty with clarity and control.',
      outcomes: [
        'Rapid situation assessment and stabilization',
        'Clear decision frameworks under pressure',
        'Stakeholder confidence maintained through disciplined communication',
        'Risk mitigation strategies that protect reputation and operations',
      ],
    },
    {
      id: 'strategic-communications',
      icon: MessageCircle,
      title: 'Strategic Communications & Leadership Alignment',
      tagline: 'Consistent messaging that strengthens trust and clarity.',
      description:
        'Fragmented communication erodes trust. We help leadership teams align on message, establish consistent communication protocols, and strengthen stakeholder relationships through clarity and precision.',
      outcomes: [
        'Unified messaging across leadership and teams',
        'Strengthened trust with key stakeholders',
        'Clear communication protocols for critical moments',
        'Enhanced executive presence and credibility',
      ],
    },
    {
      id: 'change-leadership',
      icon: RefreshCw,
      title: 'Change Leadership & Organizational Stability',
      tagline: 'Guiding transitions with confidence and continuity.',
      description:
        'Change creates instability when poorly managed. We guide organizations through transitions—leadership changes, restructuring, cultural shifts—ensuring continuity, alignment, and forward momentum.',
      outcomes: [
        'Smooth leadership and organizational transitions',
        'Reduced uncertainty and resistance to change',
        'Maintained productivity during periods of change',
        'Stronger organizational alignment and culture',
      ],
    },
    {
      id: 'program-stabilization',
      icon: Target,
      title: 'Program & Execution Stabilization',
      tagline: 'Restoring momentum to stalled or strained initiatives.',
      description:
        'Critical initiatives stall when execution falters. We step in to restore momentum, clarify direction, and ensure programs deliver results—getting stalled initiatives back on track.',
      outcomes: [
        'Stalled programs restarted with clear direction',
        'Improved execution and accountability',
        'Stakeholder confidence restored',
        'Measurable progress toward strategic goals',
      ],
    },
  ];

  return (
    <div>
      <section className="bg-card py-8 sm:py-12">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-semibold text-foreground mb-4">
              Stability Focused Advisory Support
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              We don't solve in silos. We stabilize leadership, communication, risk, and execution together.
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
                <h2 className="text-3xl font-semibold text-foreground mb-2">{service.title}</h2>
                <p className="text-lg text-primary font-medium mb-4">{service.tagline}</p>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    data-testid={`button-consult-${service.id}`}
                  >
                    Discuss This Service
                  </Button>
                </Link>
              </div>
              <div className={index % 2 === 0 ? 'order-2' : 'order-2 lg:order-1'}>
                <div className="bg-card border border-border rounded-lg p-8">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Key Outcomes</h3>
                  <ul className="space-y-3">
                    {service.outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
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

      <Section className="bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
              How Engagements Work
            </h2>
            <p className="text-lg text-muted-foreground">
              Early engagement brings control and clarity
            </p>
          </div>
          
          <div className="relative">
            <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="relative hover-elevate transition-all duration-200">
                <CardContent className="pt-8 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg">
                    <span className="text-xl font-bold">1-30</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Days 1 to 30</h3>
                  <p className="text-lg font-medium text-primary mb-2">Stabilize & Clarify</p>
                  <p className="text-sm text-muted-foreground">
                    Rapidly understand the situation, risks, and decision constraints. Begin early stabilization.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="relative hover-elevate transition-all duration-200">
                <CardContent className="pt-8 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg">
                    <span className="text-xl font-bold">31-60</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Days 31 to 60</h3>
                  <p className="text-lg font-medium text-primary mb-2">Align Direction</p>
                  <p className="text-sm text-muted-foreground">
                    Establish clear decision pathways and leadership alignment. Reduce friction and regain control.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="relative hover-elevate transition-all duration-200">
                <CardContent className="pt-8 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg">
                    <span className="text-xl font-bold">61-90</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Days 61 to 90</h3>
                  <p className="text-lg font-medium text-primary mb-2">Strengthen & Prepare</p>
                  <p className="text-sm text-muted-foreground">
                    Reinforce execution, capture lessons learned, and prepare leadership for what comes next.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <div className="inline-block bg-card border border-border rounded-lg px-8 py-4">
              <p className="text-xl font-semibold text-foreground">
                Outcome: Control, confidence, and forward momentum.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-primary text-primary-foreground text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
            Let's Discuss Your Needs
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
              Schedule a Strategy Call
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
