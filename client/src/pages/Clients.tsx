import Section from '@/components/Section';
import LogoWall from '@/components/LogoWall';
import Testimonial from '@/components/Testimonial';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import hannahAvatar from '@assets/generated_images/Hannah_natural_portrait_bcd615dc.png';
import tedAvatar from '@assets/generated_images/Ted_natural_portrait_6c2bab24.png';
import lorenaAvatar from '@assets/generated_images/Lorena_hyperrealistic_portrait_7d19e8ed.png';

export default function Clients() {
  const caseStudies = [
    {
      title: 'Financial Services Crisis Response',
      challenge: 'Major data security incident threatening customer trust and regulatory compliance',
      approach:
        'Rapid crisis team activation, stakeholder mapping, transparent communication strategy, and 24/7 response coordination',
      result:
        'Successfully managed incident with zero long-term reputation impact. Customer trust scores recovered to pre-incident levels within 90 days.',
    },
    {
      title: 'Healthcare System Reputation Recovery',
      challenge: 'Negative media coverage following quality of care concerns',
      approach:
        'Comprehensive reputation audit, leadership messaging development, media engagement strategy, and community stakeholder outreach',
      result:
        'Positive media sentiment increased 65% within six months. Community trust scores improved significantly.',
    },
    {
      title: 'Executive Leadership Transition',
      challenge:
        'CEO transition during period of organizational uncertainty requiring careful stakeholder management',
      approach:
        'Internal and external communications strategy, executive messaging, stakeholder engagement plan, and media relations',
      result:
        'Smooth leadership transition with minimal market disruption. Positive analyst coverage and maintained employee confidence.',
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
      <Section className="bg-card">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-semibold text-foreground mb-6">
            Trusted by Leading Organizations
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Across multiple industries such as: financial services, healthcare, energy, technology, insurance and higher education
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
