import Section from '@/components/Section';
import ServiceCard from '@/components/ServiceCard';
import LogoWall from '@/components/LogoWall';
import LogoMarquee from '@/components/LogoMarquee';
import Testimonial from '@/components/Testimonial';
import { Button } from '@/components/ui/button';
import { Shield, Award, Users, Lock, Star, Mic, TrendingUp, Sunrise, CloudRain, UserCheck, Target, BookOpen, AlertTriangle, MessageCircle, LifeBuoy, RefreshCw } from 'lucide-react';
import { Link } from 'wouter';
import heroImage from '@assets/generated_images/Corporate_hero_background_image_882859ed.png';
import hannahAvatar from '@assets/generated_images/Hannah_natural_portrait_bcd615dc.png';
import tedAvatar from '@assets/generated_images/Ted_natural_portrait_6c2bab24.png';
import lorenaAvatar from '@assets/generated_images/Lorena_hyperrealistic_portrait_7d19e8ed.png';

export default function Home() {
  const services = [
    {
      title: 'Crisis Communications',
      description: 'Immediate response when reputation is on the line',
      icon: Shield,
    },
    {
      title: 'Reputation Management',
      description: 'Proactive strategies to build and protect your brand',
      icon: Star,
    },
    {
      title: 'Media Training',
      description: 'Prepare executives to engage with confidence',
      icon: Mic,
    },
    {
      title: 'Executive Coaching',
      description: 'Sharpen leadership presence and strategic thinking',
      icon: TrendingUp,
    },
  ];

  const whyAmj = [
    {
      icon: Award,
      title: '25+ Years Experience',
      description: 'More than 25 years of combined leadership experience across federal, state, local government, and private sectors.',
    },
    {
      icon: Shield,
      title: '18+ Departments',
      description: 'Designed enterprise-wide crisis protocols for 18+ departments across multiple organizations.',
    },
    {
      icon: Users,
      title: '$1.4M in Community Impact',
      description: '$1.4M in giving across 19 community programs, demonstrating commitment to social responsibility.',
    },
    {
      icon: TrendingUp,
      title: '6 Major Integrations',
      description: 'Led cultural integration of 6 companies under unified brand across 25 locations post-acquisition.',
    },
  ];

  return (
    <div>
      <div
        className="relative bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/80" />
        <Section className="relative py-20 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
              Helping Leaders Get Ahead of Risk—Or Lead Through It
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
              AMJ Solutions Group helps you lead with purpose, whether you're getting ahead of risk or navigating it in real time. We are the trusted advisors leaders call before the storm hits and when the pressure is on.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" data-testid="hero-cta">
                  Contact Us Now
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" data-testid="button-services">
                  View Our Services
                </Button>
              </Link>
            </div>
          </div>
        </Section>
      </div>

      <LogoMarquee />

      <Section className="bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-2xl sm:text-3xl font-semibold text-foreground mb-8">
            Complexity. Change. Crisis. That's our zone.
          </p>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
            Founded by Ana Nelson with more than 25 years of strategic leadership across defense, government, and private sectors.
          </p>
          <Link href="/about">
            <Button variant="outline" size="lg" data-testid="button-meet-ana">
              Meet Ana Nelson
            </Button>
          </Link>
        </div>
      </Section>

      <Section className="relative bg-primary">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-card to-transparent pointer-events-none" />
        <div className="mb-12 text-center text-primary-foreground relative">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
            Key Moments to Reach Out
          </h2>
          <p className="text-lg max-w-2xl mx-auto opacity-95">
            Whether you're planning ahead or responding in real time, we're here to help you lead with confidence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 text-foreground">
          <div className="bg-card border border-border rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                <Sunrise className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Before the Storm</h3>
            </div>
            <div className="space-y-4">
              {[
                { icon: UserCheck, title: 'Leadership Transitions', description: 'Onboarding support, messaging alignment, executive coaching' },
                { icon: Target, title: 'Strategic Planning and Growth', description: 'Communications audit and strategy, stakeholder mapping' },
                { icon: BookOpen, title: 'Program or Initiative Launches', description: 'Project setup, risk audits, success frameworks' },
                { icon: Shield, title: 'Policy, Compliance or Regulatory Shifts', description: 'Communication protocols, change management' },
                { icon: AlertTriangle, title: 'Crisis Prevention and Scenario Planning', description: 'Playbooks, tabletop exercises, executive training' },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                <CloudRain className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">To Guide You Through It</h3>
            </div>
            <div className="space-y-4">
              {[
                { icon: Shield, title: 'Crisis Response', description: 'Real-time communications, media management, incident strategy' },
                { icon: MessageCircle, title: 'Communication Breakdowns', description: 'Stakeholder re-engagement, message restructuring' },
                { icon: LifeBuoy, title: 'Off-track Programs', description: 'Program rescue and reset, delivery oversight' },
                { icon: AlertTriangle, title: 'Reputational Risk Exposure', description: 'Risk mitigation plans' },
                { icon: RefreshCw, title: 'Organizational Change or Uncertainty', description: 'Executive advisory, strategic repositioning' },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-card">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive communications solutions for your most critical moments
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              learnMoreUrl="/services"
            />
          ))}
        </div>
        <div className="text-center">
          <a href="/services">
            <Button size="lg" variant="default" data-testid="button-view-all-services">
              View All Services
            </Button>
          </a>
        </div>
      </Section>

      <Section className="bg-card">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
            Trusted by Leading Organizations
          </h2>
        </div>
        <LogoWall />
      </Section>

      <Section className="bg-background">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">Why AMJ</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyAmj.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section className="bg-card">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
            Real Results. Real Impact.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Testimonial
            quote="AMJ has done a great job bringing structure and order to a challenging group of stakeholders. We are happy with all that they have accomplished with our company."
            author="Hannah Morales"
            role="Senior Director"
            avatar={hannahAvatar}
          />
          <Testimonial
            quote="AMJ Solutions Group helped us navigate a complex program transition with clarity and professionalism. Their strategic insight was critical to our success."
            author="Ted Johnson"
            role="Director of Communications"
            avatar={tedAvatar}
          />
          <Testimonial
            quote="Ana and her team were essential during our crisis response activation. Their calm leadership and precise messaging kept our stakeholders informed and confident."
            author="Lorena Rodriguez"
            role="Director of Emergency Management"
            avatar={lorenaAvatar}
          />
        </div>
      </Section>

      <Section className="bg-primary text-primary-foreground text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
            Ready to Protect Your Reputation?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Get expert strategic communications counsel for your organization
          </p>
          <Link href="/contact">
            <Button
              variant="secondary"
              size="lg"
              data-testid="button-contact-cta"
            >
              Contact Us Today
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
