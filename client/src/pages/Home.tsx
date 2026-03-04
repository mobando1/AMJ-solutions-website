// Home page - AMJ Solutions Group
import Section from '@/components/Section';
import ServiceCard from '@/components/ServiceCard';
import LogoWall from '@/components/LogoWall';
import LogoMarquee from '@/components/LogoMarquee';
import Testimonial from '@/components/Testimonial';
import FadeIn from '@/components/FadeIn';
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
      title: 'Executive Crisis & Risk Advisory',
      description: 'Structure, judgment, and control when risk escalates.',
      icon: Shield,
    },
    {
      title: 'Strategic Communications & Leadership Alignment',
      description: 'Consistent messaging that strengthens trust and clarity.',
      icon: MessageCircle,
    },
    {
      title: 'Change Leadership & Organizational Stability',
      description: 'Guiding transitions with confidence and continuity.',
      icon: RefreshCw,
    },
    {
      title: 'Program & Execution Stabilization',
      description: 'Restoring momentum to stalled or strained initiatives.',
      icon: Target,
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
          <FadeIn direction="left" duration={800}>
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
                Risk. Change. Uncertainty. That's where we work.
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
                Guiding leaders through risk, change, and uncertainty so they can protect their brand and regain momentum.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" data-testid="hero-cta">
                    Talk With an Advisor
                  </Button>
                </Link>
                <a href="#services-section">
                  <Button variant="outline" size="lg" data-testid="button-services">
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
              We partner with senior leaders when decisions slow, communication breaks down, or critical initiatives stall under pressure. Your organization moves forward with clarity, control, and confidence.
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
              Some moments in leadership feel unstable, ambiguous, or simply overwhelming. That's when we step in, to steady teams, restore alignment, and help organizations move forward with certainty.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
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
        </FadeIn>
      </Section>

      <Section id="services-section" className="bg-card">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
              Stability Focused Advisory Support
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We don't solve in silos. We stabilize leadership, communication, risk, and execution together.
            </p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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
          <div className="max-w-4xl mx-auto mb-12">
            <h3 className="text-xl font-semibold text-foreground text-center mb-8">
              Early engagement brings control and clarity:
            </h3>
            <div className="relative">
              <div className="hidden md:block absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="relative bg-card border border-border rounded-lg p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    1-30
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Days 1 to 30</h4>
                  <p className="text-sm text-muted-foreground">Stabilize and clarify</p>
                </div>
                <div className="relative bg-card border border-border rounded-lg p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    31-60
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Days 31 to 60</h4>
                  <p className="text-sm text-muted-foreground">Align leadership direction</p>
                </div>
                <div className="relative bg-card border border-border rounded-lg p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    61-90
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Days 61 to 90</h4>
                  <p className="text-sm text-muted-foreground">Strengthen execution and prepare forward</p>
                </div>
              </div>
            </div>
            <p className="text-center text-lg font-medium text-foreground mt-8">
              Outcome: Control, confidence, and forward momentum.
            </p>
          </div>
        </FadeIn>
        
        <div className="text-center">
          <Link href="/services">
            <Button size="lg" variant="default" data-testid="button-view-all-services">
              View All Services
            </Button>
          </Link>
        </div>
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
                I'm a Cuban American, two time military mom, raised by service, accountability, and resilience. Calm under pressure and a strong work ethic are lived values that define who I am.
              </p>
            </div>
            <div className="flex-shrink-0 order-1 md:order-2">
              <img 
                src={anaPhoto} 
                alt="Ana Nelson" 
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
                Guiding leaders through risk, change, and uncertainty with clarity and confidence.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={200}>
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
          </FadeIn>
          
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
        </FadeIn>
      </Section>
    </div>
  );
}
