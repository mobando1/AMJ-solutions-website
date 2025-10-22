import Section from '@/components/Section';
import ServiceCard from '@/components/ServiceCard';
import LogoWall from '@/components/LogoWall';
import LogoMarquee from '@/components/LogoMarquee';
import Testimonial from '@/components/Testimonial';
import CalendlyButtonModal from '@/components/CalendlyButtonModal';
import { Shield, Award, Users, Lock, Star, Mic, TrendingUp } from 'lucide-react';
import heroImage from '@assets/generated_images/Corporate_hero_background_image_882859ed.png';

export default function Home() {
  const services = [
    {
      title: 'Crisis Communications',
      description:
        'Immediate, strategic response when your reputation is on the line. Navigate data breaches, leadership transitions, and public controversies with confidence.',
      outcomes: [
        'Rapid response protocols activated within hours',
        'Clear, consistent messaging across all channels',
        'Brand reputation protected and strengthened',
      ],
      icon: Shield,
    },
    {
      title: 'Reputation Management',
      description:
        'Proactive strategies to build, protect, and restore your organization\'s reputation through executive positioning and narrative development.',
      outcomes: [
        'Enhanced brand credibility and trust',
        'Positive media coverage and thought leadership',
        'Long-term reputation resilience',
      ],
      icon: Star,
    },
    {
      title: 'Media Training',
      description:
        'Prepare executives to confidently engage with media, investors, and stakeholders through hands-on training and scenario planning.',
      outcomes: [
        'Executives who communicate with clarity',
        'Consistent on-brand messaging',
        'Crisis-ready spokespeople',
      ],
      icon: Mic,
    },
    {
      title: 'Executive Coaching',
      description:
        'One-on-one coaching to help leaders sharpen communication skills, executive presence, and strategic thinking.',
      outcomes: [
        'Enhanced leadership presence and influence',
        'Greater confidence in high-pressure situations',
        'Authentic, compelling communication style',
      ],
      icon: TrendingUp,
    },
  ];

  const whyAmj = [
    {
      icon: Award,
      title: '30+ Years Experience',
      description: 'Three decades advising C-suite executives through the most challenging moments in business.',
    },
    {
      icon: Shield,
      title: 'High-Impact Crisis Management',
      description: 'Proven track record managing crises that threatened major corporations\' reputations.',
    },
    {
      icon: Users,
      title: 'Executive-Level Training',
      description: 'Hundreds of executives trained to communicate with confidence and authenticity.',
    },
    {
      icon: Lock,
      title: 'Absolute Confidentiality',
      description: 'White-glove service with the discretion expected at the highest levels.',
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
              Strategic Communications for High-Stakes Moments
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
              Expert crisis communications, reputation management, and executive media training for
              organizations facing their most critical challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CalendlyButtonModal size="lg" data-testid="hero-cta" />
              <a href="/contact">
                <button className="px-6 py-3 text-base font-medium border border-border rounded-md hover-elevate active-elevate-2 transition-all" data-testid="button-contact">
                  Contact Us
                </button>
              </a>
            </div>
          </div>
        </Section>
      </div>

      <LogoMarquee />

      <Section className="bg-background">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive communications solutions for your most critical moments
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              onConsultationClick={() => console.log('Consultation clicked:', service.title)}
            />
          ))}
        </div>
      </Section>

      <Section className="bg-card">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
            Trusted by Leading Organizations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We are honored to serve Fortune 500 companies across industries
          </p>
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
          />
          <Testimonial
            quote="AMJ Solutions Group helped us navigate a complex program transition with clarity and professionalism. Their strategic insight was critical to our success."
            author="Ted Johnson"
            role="Director of Communications"
          />
          <Testimonial
            quote="Ana and her team were essential during our crisis response activation. Their calm leadership and precise messaging kept our stakeholders informed and confident."
            author="Lorena Rodriguez"
            role="Director of Emergency Management"
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
          <CalendlyButtonModal
            variant="secondary"
            size="lg"
            buttonText="Schedule Your Consultation"
          />
        </div>
      </Section>
    </div>
  );
}
