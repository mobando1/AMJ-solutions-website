// Home page - AMJ Solutions Group
import PageMeta from '@/components/PageMeta';
import Section from '@/components/Section';
import ServiceCard from '@/components/ServiceCard';
import LogoWall from '@/components/LogoWall';
import LogoMarquee from '@/components/LogoMarquee';
import Testimonial from '@/components/Testimonial';
import FadeIn from '@/components/FadeIn';
import { Button } from '@/components/ui/button';
import { Shield, Award, Users, TrendingUp, Target, MessageCircle, RefreshCw, Clock, Zap, Calendar, Cpu, Server, AlertTriangle } from 'lucide-react';
import anaPhoto from '@assets/Ana Nelson FluxLoRA Image_1761180719803.webp';
import { Link } from 'wouter';
import heroImage from '@assets/generated_images/Corporate_hero_background_image_882859ed.webp';
import hannahAvatar from '@assets/generated_images/Hannah_natural_portrait_bcd615dc.webp';
import tedAvatar from '@assets/generated_images/Ted_natural_portrait_6c2bab24.webp';
import lorenaAvatar from '@assets/generated_images/Lorena_hyperrealistic_portrait_7d19e8ed.webp';

export default function Home() {
  const services = [
    {
      title: 'Leadership Alignment & Executive Advisory',
      description: 'Clear direction, aligned leadership, and disciplined decision-making.',
      icon: Users,
    },
    {
      title: 'Risk & Operational Resilience',
      description: 'Maintaining control and continuity when risk threatens stability.',
      icon: Shield,
    },
    {
      title: 'Strategic Communications & Stakeholder Alignment',
      description: 'Consistent communication that reinforces leadership control.',
      icon: MessageCircle,
    },
    {
      title: 'Technology Risk & AI Governance',
      description: 'Ensuring technology and AI are governed with the same discipline as leadership, risk, and operations, so innovation does not introduce instability or unmanaged risk.',
      icon: Cpu,
    },
    {
      title: 'Program & Execution Stabilization',
      description: 'Restoring momentum and reinforcing execution discipline.',
      icon: Target,
    },
  ];

  const whyAmj = [
    {
      icon: Award,
      title: '25+ Years Executive Experience',
      description: 'Supporting leadership across financial services, enterprise technology, energy, government, and mission-critical operational environments.',
    },
    {
      icon: Shield,
      title: 'Enterprise Risk & Incident Leadership',
      description: 'Designed and supported leadership coordination during high-impact operational and technology disruption events across complex organizations.',
    },
    {
      icon: Cpu,
      title: 'Technology, Data, & Governance Experience',
      description: 'Supporting governance across enterprise data environments, analytics programs, and AI-enabled decision systems.',
    },
    {
      icon: TrendingUp,
      title: 'Enterprise Coordination & Execution',
      description: 'Led cross-functional alignment across large-scale programs, enterprise systems, and multi-organization environments.',
    },
  ];

  return (
    <div>
      <PageMeta title="Executive Stability Advisory" description="Aligning leadership, risk, operations, and technology governance to maintain stability and control during disruption." />
      <div
        className="relative bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/80" />
        <Section className="relative py-20 lg:py-32">
          <FadeIn direction="left" duration={800}>
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-4">
                Protect what you've built.
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-foreground/80 mb-4">
                Aligning Leadership and Operations to Strengthen Execution
              </p>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
                Bringing structure to risk, communication, and technology environments, including AI and enterprise systems, so leaders make clear decisions, reduce exposure, and sustain momentum during disruption.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" data-testid="hero-cta">
                    Let's Talk
                  </Button>
                </Link>
                <a href="#services-section">
                  <Button variant="default" size="lg" data-testid="button-services">
                    See How We Work
                  </Button>
                </a>
              </div>
            </div>
          </FadeIn>
        </Section>
      </div>

      <LogoMarquee />

      <Section className="bg-card">
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl sm:text-2xl font-semibold text-foreground mb-8 leading-relaxed">
              We partner with senior leaders when risk, technology, and operations, including AI-enabled systems, begin to strain decisions, fragment communication, or stall execution; restoring clarity, alignment, and control so the organization moves forward with confidence.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
              AMJ Solutions Group was founded by Ana Nelson after more than 25 years of experience supporting leadership teams across financial services, enterprise technology, energy, government, and mission-critical operational environments.
            </p>
            <Link href="/about">
              <Button variant="outline" size="lg" data-testid="button-meet-ana">
                Meet Ana Nelson
              </Button>
            </Link>
          </div>
        </FadeIn>
      </Section>

      <Section id="how-we-work" className="relative bg-primary">
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-card to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-card to-transparent pointer-events-none" />
        <FadeIn>
          <div className="mb-12 text-center text-primary-foreground relative">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
              Key Moments to Reach Out
            </h2>
            <p className="text-lg max-w-2xl mx-auto opacity-95">
              Leaders typically engage when:
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: Server, text: 'Enterprise technology platforms become unstable or disrupted' },
                  { icon: Cpu, text: 'AI, data, or technology initiatives introduce governance gaps, risk exposure, or leadership misalignment' },
                  { icon: MessageCircle, text: 'Leadership coordination breaks down during high-visibility events' },
                  { icon: RefreshCw, text: 'Operational Resilience is not aligned across complex environments' },
                  { icon: AlertTriangle, text: 'Disaster Recovery requires clear leadership structure following disruption' },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex gap-4 items-start">
                      <div className="flex-shrink-0">
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                      <p className="text-foreground leading-relaxed pt-2">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      <Section id="services-section" className="bg-card">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
              Executive Stability Advisory
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Maintaining stability across leadership, communication, risk, technology, and execution—so organizations move forward with clarity.
            </p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 100}>
              <ServiceCard
                {...service}
                hideButton
              />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={200}>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-muted-foreground mb-8">
              Click below to view each engagement offering:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services#engagement-timeline">
                <Button size="lg" variant="default">
                  90-Day Stabilization Sprint
                </Button>
              </Link>
              <Link href="/services#engagement-timeline">
                <Button size="lg" variant="outline">
                  Annual Retainer for Executive Stability Advisory
                </Button>
              </Link>
            </div>
          </div>
        </FadeIn>
      </Section>

      <Section className="bg-card">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
              Trusted by Leading Organizations
            </h2>
          </div>
          <LogoWall />
        </FadeIn>
      </Section>

      <Section className="bg-background">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">Experience You Can Rely On</h2>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {whyAmj.map((item, index) => {
            const Icon = item.icon;
            return (
              <FadeIn key={index} delay={index * 100}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={200}>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-4xl mx-auto">
            <div className="flex-1 order-2 md:order-1">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a Cuban-American and proud mom to two military kids. My career has been shaped by service, accountability, and resilience. Leadership clarity, calm under pressure and a strong work ethic are not concepts to me, they are the foundation on which I have built AMJ Solutions Group.
              </p>
            </div>
            <div className="flex-shrink-0 order-1 md:order-2">
              <img
                src={anaPhoto}
                alt="Ana Nelson"
                loading="lazy"
                className="w-32 h-32 sm:w-48 sm:h-48 object-cover object-top rounded-full border-4 border-primary/20 shadow-lg"
              />
            </div>
          </div>
        </FadeIn>
      </Section>

      <Section className="bg-card">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
                Executive Stability Advisory Engagement
              </h2>
              <p className="text-lg text-muted-foreground">
                Aligning leadership, risk, operations, and technology governance to maintain stability and control during disruption, change, and ongoing operational demands.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                { icon: Calendar, text: '90-day advisory engagement or ongoing executive retainer support' },
                { icon: Shield, text: 'Executive-level oversight across enterprise risk, technology, and operations' },
                { icon: Target, text: 'Embedded alongside leadership where decisions are made—without disrupting ongoing work' },
                { icon: Zap, text: 'Continuous alignment, escalation support, and decision guidance during disruption and steady-state operations' },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <p className="text-foreground leading-relaxed pt-3">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </FadeIn>

          <div className="text-center">
            <Link href="/contact">
              <Button size="lg" data-testid="button-strategy-call">
                Let's Talk
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      <Section className="bg-background">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
            Real Results. Real Impact.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FadeIn delay={0}>
            <Testimonial
              quote="AMJ has done a great job bringing structure and order to a challenging group of stakeholders. We are happy with all that they have accomplished with our company."
              author="Hannah Morales"
              role="Senior Director"
              avatar={hannahAvatar}
            />
          </FadeIn>
          <FadeIn delay={150}>
            <Testimonial
              quote="AMJ Solutions Group helped us navigate a complex program transition with clarity and professionalism. Their strategic insight was critical to our success."
              author="Ted Johnson"
              role="Director of Communications"
              avatar={tedAvatar}
            />
          </FadeIn>
          <FadeIn delay={300}>
            <Testimonial
              quote="Ana and her team were essential during our crisis response activation. Their calm leadership and precise messaging kept our stakeholders informed and confident."
              author="Lorena Rodriguez"
              role="Director of Emergency Management"
              avatar={lorenaAvatar}
            />
          </FadeIn>
        </div>
      </Section>

      <Section className="bg-primary text-primary-foreground text-center">
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
              Ready to Maintain Stability and Control?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Engage executive advisory support to align leadership, risk, operations, and technology governance during disruption, change, or ongoing operational demands.
            </p>
            <Link href="/contact">
              <Button
                variant="secondary"
                size="lg"
                data-testid="button-contact-cta"
              >
                Let's Talk
              </Button>
            </Link>
          </div>
        </FadeIn>
      </Section>
    </div>
  );
}
