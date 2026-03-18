import PageMeta from '@/components/PageMeta';
import Section from '@/components/Section';
import LogoWall from '@/components/LogoWall';
import Testimonial from '@/components/Testimonial';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import hannahAvatar from '@assets/generated_images/Hannah_natural_portrait_bcd615dc.webp';
import tedAvatar from '@assets/generated_images/Ted_natural_portrait_6c2bab24.webp';
import lorenaAvatar from '@assets/generated_images/Lorena_hyperrealistic_portrait_7d19e8ed.webp';

export default function Clients() {
  const caseStudies = [
    {
      title: 'Leadership Alignment & Executive Advisory',
      subtitle: 'Aligned to: Executive Leadership Transition',
      challenge: 'A CEO transition during a period of organizational uncertainty created misalignment across leadership, inconsistent communication, and risk to operational continuity.',
      approach: 'Aligned leadership priorities, clarified decision pathways, and established structured communication across internal and external stakeholders to maintain consistency and control.',
      result: 'Transition executed smoothly with sustained employee confidence, stable operations, and consistent external perception—avoiding disruption during a critical leadership moment.',
    },
    {
      title: 'Risk & Operational Resilience',
      subtitle: 'Aligned to: Crisis Response & Leadership Stabilization | Financial Services',
      challenge: 'A major data security incident created immediate risk to customer trust, regulatory compliance, and executive decision-making under pressure.',
      approach: 'Centralized leadership response, established clear decision frameworks, and aligned communication across stakeholders to stabilize operations and maintain control.',
      result: 'Incident contained without long-term reputational impact. Customer confidence recovered to pre-incident levels within one quarter.',
    },
    {
      title: 'Strategic Communications & Stakeholder Alignment',
      subtitle: 'Aligned to: Reputation Stabilization | Healthcare System',
      challenge: 'Negative media coverage and quality-of-care concerns led to fragmented messaging, declining stakeholder trust, and increased external scrutiny.',
      approach: 'Aligned leadership messaging, established communication discipline, and coordinated stakeholder engagement to restore clarity and consistency.',
      result: 'Media sentiment improved significantly, stakeholder confidence increased, and the organization regained a stable external position.',
    },
    {
      title: 'Technology Risk, AI Governance & Leadership Alignment',
      subtitle: 'Aligned to: Technology Governance & Risk Alignment | Enterprise Environment',
      challenge: 'A critical technology initiative introduced regulatory exposure, unclear governance, and misalignment between leadership and technical teams—creating risk to execution and oversight.',
      approach: 'Established governance structure, clarified roles and decision authority, and aligned leadership, risk, and technology teams to ensure disciplined oversight and execution.',
      result: 'Improved alignment across leadership and technical stakeholders, reduced risk exposure, and restored confidence—allowing the initiative to move forward with control.',
    },
    {
      title: 'Program & Execution Stabilization',
      subtitle: 'Aligned to: Program Recovery & Execution Realignment | Enterprise Program',
      challenge: 'A large-scale initiative stalled due to unclear governance, fragmented communication, and lack of accountability across teams.',
      approach: 'Led a program reset—clarifying roles, establishing reporting cadence, and aligning leadership, operations, and execution priorities.',
      result: 'Momentum restored, accountability strengthened, and the program met revised milestones with renewed executive confidence.',
    },
  ];

  const testimonials = [
    {
      quote:
        'AMJ has done a great job bringing structure and order to a challenging group of stakeholders. We are happy with all that they have accomplished with our company.',
      author: 'Hannah Morales',
      role: 'Senior Director',
      avatar: hannahAvatar,
    },
    {
      quote:
        'AMJ Solutions Group helped us navigate a complex program transition with clarity and professionalism. Their strategic insight was critical to our success.',
      author: 'Ted Johnson',
      role: 'Director of Communications',
      avatar: tedAvatar,
    },
    {
      quote:
        'Ana and her team were essential during our crisis response activation. Their calm leadership and precise messaging kept our stakeholders informed and confident.',
      author: 'Lorena Rodriguez',
      role: 'Director of Emergency Management',
      avatar: lorenaAvatar,
    },
  ];

  return (
    <div>
      <PageMeta title="Clients & Case Studies" description="Trusted by leading organizations in financial services, technology, healthcare, energy, insurance and education." />
      <Section className="bg-card">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-semibold text-foreground mb-6">
            Trusted by Leading Organizations
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            In financial services, technology, healthcare, energy, insurance and education.
          </p>
        </div>
      </Section>

      <Section className="bg-background">
        <LogoWall />
      </Section>

      <Section className="bg-card">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
            Case Studies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real challenges, strategic approaches, measurable results
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <Card key={index} className="hover-elevate transition-all duration-200">
              <CardHeader>
                <CardTitle className="text-xl">{study.title}</CardTitle>
                <p className="text-sm text-primary font-medium">{study.subtitle}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                    <span className="text-primary">Challenge</span>
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {study.challenge}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                    <span className="text-primary">Approach</span>
                    <ArrowRight className="h-3 w-3 text-primary" />
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{study.approach}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                    <span className="text-primary">Result</span>
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{study.result}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-background">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
            What Clients Say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </Section>
    </div>
  );
}
