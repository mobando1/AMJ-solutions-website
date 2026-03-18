import PageMeta from '@/components/PageMeta';
import Section from '@/components/Section';
import FadeIn from '@/components/FadeIn';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, MessageCircle, Target, CheckCircle2, Users, Cpu } from 'lucide-react';
import { Link } from 'wouter';

export default function Services() {
  const services = [
    {
      id: 'leadership-alignment',
      icon: Users,
      title: 'Leadership Alignment & Executive Advisory',
      tagline: 'Clear direction, aligned leadership, and disciplined decision-making.',
      description:
        'We support senior leaders in maintaining alignment, clarifying priorities, and ensuring decisions move with structure and consistency; especially when pressure tests leadership.',
      outcomes: [
        'Aligned leadership direction and priorities',
        'Clear, confident executive decision-making',
        'Reduced friction across leadership teams',
        'Strengthened accountability at the executive level',
      ],
    },
    {
      id: 'risk-resilience',
      icon: Shield,
      title: 'Risk & Operational Resilience',
      tagline: 'Structure and control when risk threatens stability.',
      description:
        'We support leaders in maintaining control during disruption—ensuring response, recovery, and continuity are managed with discipline.',
      outcomes: [
        'Stabilized leadership response during disruption',
        'Reduced escalation and avoidable risk',
        'Strengthened operational resilience',
        'Protection of continuity and reputation',
      ],
    },
    {
      id: 'strategic-communications',
      icon: MessageCircle,
      title: 'Strategic Communications & Stakeholder Alignment',
      tagline: 'Clear, consistent communication that reinforces leadership control.',
      description:
        'We align communication across leadership and stakeholders; ensuring clarity, consistency, and confidence at every level.',
      outcomes: [
        'Unified leadership messaging and direction',
        'Clear communication structures across teams',
        'Strengthened stakeholder confidence',
        'Disciplined communication in critical moments',
      ],
    },
    {
      id: 'technology-ai-governance',
      icon: Cpu,
      title: 'Technology Risk & AI Governance',
      tagline: 'Ensuring technology and AI are governed with the same discipline as leadership, risk, and operations; aligning innovation with risk oversight, regulatory expectations, and business priorities.',
      description:
        'We support leaders in maintaining control across enterprise systems, data environments, and AI-driven initiatives; ensuring governance, accountability, and decision-making remain aligned as complexity increases.',
      outcomes: [
        'Clear governance over technology, data, and AI risk',
        'Alignment between executive leadership and technical teams',
        'Reduced regulatory, operational, and reputational exposure',
        'Technology and AI initiatives that support—not disrupt—execution',
        'Increased confidence in decision-making across data-driven environments',
      ],
    },
    {
      id: 'program-stabilization',
      icon: Target,
      title: 'Program & Execution Stabilization',
      tagline: 'Restoring momentum and reinforcing execution discipline.',
      description:
        'We bring structure to execution; ensuring initiatives remain aligned to leadership priorities and move forward with accountability and control.',
      outcomes: [
        'Reestablished program direction and control',
        'Strengthened accountability and execution discipline',
        'Restored stakeholder confidence',
        'Measurable forward progress on critical initiatives',
      ],
    },
  ];

  return (
    <div>
      <PageMeta title="Services" description="Executive Stability Advisory — maintaining stability across leadership, communication, risk, technology, and AI-enabled environments." />
      <section className="bg-card py-8 sm:py-12">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-semibold text-foreground mb-4 text-center">
                Executive Stability Advisory
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Maintaining stability across leadership, communication, risk, technology, and AI-enabled environments, so organizations move forward with clarity.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                We operate at the executive level to align leadership, communication, and execution; ensuring stability holds, decisions carry through, and organizations continue moving forward under pressure.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                All support is delivered through Executive Stability Advisory engagement; structured, embedded, and applied based on the level of risk, complexity, and organizational need.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {services.map((service, index) => {
        const Icon = service.icon;
        return (
          <Section
            key={service.id}
            className={index % 2 === 0 ? 'bg-background' : 'bg-card'}
          >
            <FadeIn>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className={index % 2 === 0 ? 'order-1' : 'order-1 lg:order-2'}>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-semibold text-foreground mb-2">{service.title}</h2>
                  <p className="text-lg text-primary font-medium mb-4">{service.tagline}</p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
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
            </FadeIn>
          </Section>
        );
      })}

      <Section id="engagement-timeline" className="bg-background">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
                How Engagements Work
              </h2>
              <p className="text-lg text-muted-foreground mb-2">
                We operate as embedded executive advisors, working alongside leadership to maintain alignment across leadership, communication, risk, technology, and execution.
              </p>
              <p className="text-base text-muted-foreground">
                Including oversight of technology risk, data governance, and AI-driven environments impacting leadership decisions and execution.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-foreground text-center mb-8">
                Executive Stability Advisory Engagement Options
              </h3>

              <div className="mb-10">
                <h4 className="text-xl font-semibold text-primary text-center mb-6">90-Day Stabilization Sprint</h4>
                <div className="relative">
                  <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card className="relative hover-elevate transition-all duration-200">
                      <CardContent className="pt-8 text-center">
                        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg">
                          <span className="text-xl font-bold">1-30</span>
                        </div>
                        <h4 className="text-xl font-semibold text-foreground mb-2">Days 1 to 30</h4>
                        <p className="text-sm text-muted-foreground">
                          Stabilize leadership, risk, and operational alignment
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="relative hover-elevate transition-all duration-200">
                      <CardContent className="pt-8 text-center">
                        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg">
                          <span className="text-xl font-bold">31-60</span>
                        </div>
                        <h4 className="text-xl font-semibold text-foreground mb-2">Days 31 to 60</h4>
                        <p className="text-sm text-muted-foreground">
                          Align leadership, governance, and decision structures
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="relative hover-elevate transition-all duration-200">
                      <CardContent className="pt-8 text-center">
                        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg">
                          <span className="text-xl font-bold">61-90</span>
                        </div>
                        <h4 className="text-xl font-semibold text-foreground mb-2">Days 61 to 90</h4>
                        <p className="text-sm text-muted-foreground">
                          Strengthen execution and operational resilience to move forward
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              <div className="relative my-12">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-background px-4 text-sm font-medium text-muted-foreground uppercase tracking-wide">Or</span>
                </div>
              </div>

              <div className="max-w-2xl mx-auto">
                <h4 className="text-xl font-semibold text-primary text-center mb-6">Ongoing Executive Advisory Retainer</h4>
                <Card className="hover-elevate transition-all duration-200 border-primary/30">
                  <CardContent className="pt-8 text-center">
                    <p className="text-muted-foreground">
                      Continued support to maintain alignment, oversee risk, and sustain execution over time.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section className="bg-primary text-primary-foreground text-center">
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
              Let's Talk Through What You Are Facing
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Confidential, executive-level advisory embedded where decisions are made.
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
        </FadeIn>
      </Section>
    </div>
  );
}
