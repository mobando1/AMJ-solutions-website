// Home page - AMJ Solutions Group
import Section from '@/components/Section';
import ServiceCard from '@/components/ServiceCard';
import LogoWall from '@/components/LogoWall';
import LogoMarquee from '@/components/LogoMarquee';
import Testimonial from '@/components/Testimonial';
import { Button } from '@/components/ui/button';
import { Shield, Award, Users, Lock, Star, Mic, TrendingUp, Sunrise, CloudRain, UserCheck, Target, BookOpen, AlertTriangle, MessageCircle, LifeBuoy, RefreshCw, Clock, Zap, CheckCircle, Calendar } from 'lucide-react';
import anaPhoto from '@assets/Ana Nelson FluxLoRA Image_1761180719803.jpg';
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
              Guiding leaders through risk, change, and uncertainty so they can protect their brand and regain momentum.
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
              We partner with senior leaders when decisions slow, communication fragments, or critical initiatives stall under pressure. Your organization moves forward with clarity, control, and confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" data-testid="hero-cta">
                  Talk With an Advisor
                </Button>
              </Link>
              <a href="#how-we-work">
                <Button variant="outline" size="lg" data-testid="button-services">
                  See How We Work
                </Button>
              </a>
            </div>
          </div>
        </Section>
      </div>

      <LogoMarquee />

      <Section className="bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-2xl sm:text-3xl font-semibold text-foreground mb-8">
            Risk. Change. Uncertainty. That's where we work.
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

      <Section id="how-we-work" className="relative bg-primary">
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-card to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-card to-transparent pointer-events-none" />
        <div className="mb-12 text-center text-primary-foreground relative">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
            Key Moments to Reach Out
          </h2>
          <p className="text-lg max-w-2xl mx-auto opacity-95">
            Some moments in leadership feel unstable, ambiguous, or simply overwhelming. That's when we step in, to steady teams, restore alignment, and help organizations move forward with certainty.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6">Leaders typically reach out when:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: Clock, text: 'Decisions slow or stall due to risk or uncertainty' },
                { icon: MessageCircle, text: 'Communication becomes scattered or inconsistent' },
                { icon: RefreshCw, text: 'Change creates instability instead of progress' },
                { icon: AlertTriangle, text: 'A crisis is emerging or already underway' },
                { icon: Target, text: 'A critical initiative stalls under pressure' },
                { icon: Users, text: 'Leaders are carrying too much without structure' },
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
              hideButton
            />
          ))}
        </div>
        <div className="text-center">
          <Link href="/services">
            <Button size="lg" variant="default" data-testid="button-view-all-services">
              View All Services
            </Button>
          </Link>
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
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">Experience You Can Rely On</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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
        
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-4xl mx-auto">
          <div className="flex-1 order-2 md:order-1">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a Cuban American, two time military mom, raised by service, accountability, and resilience. Calm under pressure and a strong work ethic are lived values that define who I am.
            </p>
          </div>
          <div className="flex-shrink-0 order-1 md:order-2">
            <img 
              src={anaPhoto} 
              alt="Ana Nelson" 
              className="w-48 h-48 object-cover rounded-full border-4 border-primary/20 shadow-lg"
            />
          </div>
        </div>
      </Section>

      <Section className="bg-card">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
              Executive Stability Advisory Engagement
            </h2>
            <p className="text-lg text-muted-foreground">
              Guiding leaders through risk, change, and uncertainty with clarity and confidence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              { icon: Calendar, text: 'A focused 90 day advisory engagement' },
              { icon: Users, text: 'Fractional executive level support' },
              { icon: Target, text: 'Embedded where decisions are made' },
              { icon: Zap, text: 'Direct access to leadership decision makers' },
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
          
          <div className="text-center">
            <Link href="/contact">
              <Button size="lg" data-testid="button-strategy-call">
                Schedule a Strategy Call
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
