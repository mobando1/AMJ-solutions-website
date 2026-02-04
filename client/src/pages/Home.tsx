import Section from '@/components/Section';
import ServiceCard from '@/components/ServiceCard';
import LogoMarquee from '@/components/LogoMarquee';
import Testimonial from '@/components/Testimonial';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Shield, 
  Star, 
  Mic, 
  TrendingUp, 
  AlertTriangle,
  Target,
  Users,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  Calendar,
  Zap,
  Award,
  BarChart3,
  MessageSquare,
  FileText,
  Lightbulb,
  HeartHandshake
} from 'lucide-react';
import { Link } from 'wouter';
import heroImage from '@assets/generated_images/Corporate_hero_background_image_882859ed.png';
import hannahAvatar from '@assets/generated_images/Hannah_natural_portrait_bcd615dc.png';
import tedAvatar from '@assets/generated_images/Ted_natural_portrait_6c2bab24.png';
import lorenaAvatar from '@assets/generated_images/Lorena_hyperrealistic_portrait_7d19e8ed.png';

export default function Home() {
  return (
    <div>
      {/* HERO SECTION - Optimizado pero manteniendo texto exacto */}
      <div
        className="relative bg-cover bg-center min-h-[600px] lg:min-h-[700px] flex items-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/97 via-background/93 to-background/85" />
        <Section className="relative w-full">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-foreground leading-tight mb-8">
              Helping Leaders Get Ahead of Risk—Or Lead Through It
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground leading-relaxed mb-12 max-w-3xl">
              AMJ Solutions Group helps you lead with purpose, whether you're getting ahead of risk or navigating it in real time. We are the trusted advisors leaders call before the storm hits and when the pressure is on.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-lg">
              <Link href="/contact" data-testid="link-hero-contact">
                <Button size="lg" data-testid="hero-cta">
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Us Now
                </Button>
              </Link>
              <Link href="/services" data-testid="link-hero-services">
                <Button variant="outline" size="lg" data-testid="button-services">
                  View Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </Section>
      </div>

      {/* LOGOS DE CLIENTES - Para credibilidad inmediata */}
      <LogoMarquee />

      {/* SECCIÓN: KEY MOMENTS TO REACH OUT */}
      <Section className="bg-slate-50 dark:bg-slate-900/50">
        <div className="text-center mb-16">
          <Badge className="mb-6" variant="secondary">
            Strategic Support
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Key moments to reach out
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Some moments in leadership feel unstable, ambiguous, or simply overwhelming. That’s when we step in, to steady teams, restore alignment, and help organizations move forward with certainty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="hover-elevate transition-all border-none bg-background shadow-sm">
            <CardContent className="pt-8 pb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <AlertTriangle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Crisis & Risk Escalation</h3>
                  <p className="text-muted-foreground">Immediate support when reputation or operations are under threat.</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover-elevate transition-all border-none bg-background shadow-sm">
            <CardContent className="pt-8 pb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Organizational Transition</h3>
                  <p className="text-muted-foreground">Navigating leadership changes, mergers, or structural shifts.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-elevate transition-all border-none bg-background shadow-sm">
            <CardContent className="pt-8 pb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Strategic Misalignment</h3>
                  <p className="text-muted-foreground">Restoring clarity when internal or external messaging loses focus.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* SECCIÓN: EL PROBLEMA QUE RESOLVEMOS */}
      <Section className="bg-background">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <Badge className="mb-6" variant="secondary">
            The Challenge
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-8">
            When Reputation and Results Are on the Line
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
            Executive leaders face high-stakes moments where communication missteps can derail years of progress. Whether it's a crisis, regulatory change, or organizational transition, you need clarity, confidence, and a trusted advisor who understands the pressure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="border-2 hover-elevate transition-all">
            <CardContent className="pt-8 pb-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-destructive/10 flex items-center justify-center">
                <AlertTriangle className="h-8 w-8 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Crisis Without a Plan</h3>
              <p className="text-muted-foreground leading-relaxed">
                When an unexpected event hits, leaders without crisis protocols face chaos, confusion, and reputational damage.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover-elevate transition-all">
            <CardContent className="pt-8 pb-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <MessageSquare className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Stakeholder Disconnect</h3>
              <p className="text-muted-foreground leading-relaxed">
                Misaligned messaging and poor communication strategies create mistrust, delays, and lost opportunities.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover-elevate transition-all">
            <CardContent className="pt-8 pb-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Reactive Leadership</h3>
              <p className="text-muted-foreground leading-relaxed">
                Operating without proactive strategy leaves leaders constantly firefighting instead of leading with confidence.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* SECCIÓN: STABILITY FOCUSED ADVISORY SUPPORT */}
      <Section className="bg-card">
        <div className="text-center mb-16">
          <Badge className="mb-6" variant="secondary">
            Our Solutions
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Stability Focused Advisory Support
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We don't solve in silos. We stabilize leadership, communication, risk, and execution together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="hover-elevate transition-all h-full">
            <CardContent className="pt-8 pb-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Executive Crisis & Risk Advisory</h3>
              <p className="text-muted-foreground leading-relaxed">
                Structure, judgment, and control when risk escalates.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-elevate transition-all h-full">
            <CardContent className="pt-8 pb-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Strategic Communications & Leadership Alignment</h3>
              <p className="text-muted-foreground leading-relaxed">
                Consistent messaging that strengthens trust and clarity.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-elevate transition-all h-full">
            <CardContent className="pt-8 pb-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Change Leadership & Organizational Stability</h3>
              <p className="text-muted-foreground leading-relaxed">
                Guiding transitions with confidence and continuity.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-elevate transition-all h-full">
            <CardContent className="pt-8 pb-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Program & Execution Stabilization</h3>
              <p className="text-muted-foreground leading-relaxed">
                Restoring momentum to stalled or strained initiatives.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* ROADMAP 1-90 DAYS */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-foreground text-center mb-4">
            How Engagements Work
          </h3>
          <p className="text-lg text-muted-foreground text-center mb-10">
            Early engagement brings control and clarity
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 text-center">
              <div className="text-sm font-medium text-primary uppercase tracking-wide mb-2">Days 1–30</div>
              <h4 className="text-lg font-semibold text-foreground">Stabilize & Clarify</h4>
            </div>
            <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 text-center">
              <div className="text-sm font-medium text-primary uppercase tracking-wide mb-2">Days 31–60</div>
              <h4 className="text-lg font-semibold text-foreground">Align Leadership Direction</h4>
            </div>
            <div className="bg-primary/15 border border-primary/40 rounded-lg p-6 text-center">
              <div className="text-sm font-medium text-primary uppercase tracking-wide mb-2">Days 61–90</div>
              <h4 className="text-lg font-semibold text-foreground">Strengthen Execution & Prepare Forward</h4>
            </div>
          </div>

          <p className="text-lg text-center text-foreground font-semibold">
            Outcome: Control, confidence, and forward momentum.
          </p>
        </div>

        <div className="text-center text-lg mt-12">
          <Link href="/services" data-testid="link-view-all-services">
            <Button size="lg" data-testid="button-view-all-services">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </Section>

      {/* SECCIÓN: NUESTRO MÉTODO - Proceso en 4 pasos */}
      <Section className="bg-background">
        <div className="text-center mb-16">
          <Badge className="mb-6" variant="secondary">
            Our Approach
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            How We Work With You
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A proven methodology refined through more than 25 years of experience
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                icon: Lightbulb,
                title: 'Discovery & Assessment',
                description: 'We begin by understanding your context, challenges, and stakeholders. Through strategic interviews and analysis, we identify risks and opportunities.'
              },
              {
                step: '02',
                icon: FileText,
                title: 'Strategy Development',
                description: 'We craft a tailored communications strategy aligned with your goals, including messaging frameworks, crisis protocols, and stakeholder maps.'
              },
              {
                step: '03',
                icon: Users,
                title: 'Implementation & Training',
                description: 'We execute the strategy alongside your team, providing hands-on training, media coaching, and real-time guidance during critical moments.'
              },
              {
                step: '04',
                icon: BarChart3,
                title: 'Monitor & Optimize',
                description: 'We continuously track outcomes, refine approaches based on feedback, and ensure sustained success through ongoing advisory support.'
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="relative">
                  <div className="text-center">
                    <div className="inline-block mb-6">
                      <div className="relative">
                        <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                          <Icon className="h-10 w-10 text-primary" />
                        </div>
                        <Badge className="absolute -top-2 -right-2 rounded-full">
                          {item.step}
                        </Badge>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-10 -right-4 w-8 h-0.5 bg-border" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* SECCIÓN: CASOS Y RESULTADOS - Con métricas cuantificables */}
      <Section className="bg-card">
        <div className="text-center mb-16">
          <Badge className="mb-6" variant="secondary">
            Proven Results
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Real Impact for Leading Organizations
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Measurable results across Fortune 500 companies and complex organizations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <Card className="text-center hover-elevate transition-all">
            <CardContent className="pt-10 pb-10">
              <div className="mb-4">
                <Award className="h-12 w-12 text-primary mx-auto" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">25+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Years Experience</div>
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                Combined leadership across defense, government, and private sectors
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover-elevate transition-all">
            <CardContent className="pt-10 pb-10">
              <div className="mb-4">
                <Shield className="h-12 w-12 text-primary mx-auto" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">18+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Departments Served</div>
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                Enterprise-wide crisis protocols designed across multiple organizations
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover-elevate transition-all">
            <CardContent className="pt-10 pb-10">
              <div className="mb-4">
                <HeartHandshake className="h-12 w-12 text-primary mx-auto" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">$1.4M</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Community Impact</div>
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                In giving across 19 community programs demonstrating social responsibility
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover-elevate transition-all">
            <CardContent className="pt-10 pb-10">
              <div className="mb-4">
                <TrendingUp className="h-12 w-12 text-primary mx-auto" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">6</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Major Integrations</div>
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                Companies unified under one brand across 25 locations post-acquisition
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* SECCIÓN: TESTIMONIOS */}
      <Section className="bg-background">
        <div className="text-center mb-16">
          <Badge className="mb-6" variant="secondary">
            Client Success Stories
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Trusted by Leaders in Critical Moments
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

      {/* SECCIÓN: SOBRE NOSOTROS */}
      <Section className="bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6" variant="secondary">
            Leadership
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-8">
            Founded by Ana Nelson
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            More than 25 years of strategic leadership across defense, government, and private sectors.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            Ana has led high-stakes communications for Fortune 500 companies, designed enterprise-wide crisis protocols, and coached executives through complex organizational changes. Her expertise spans crisis management, stakeholder engagement, and strategic communications planning.
          </p>
          <Link href="/about" data-testid="link-meet-ana">
            <Button variant="outline" size="lg" data-testid="button-meet-ana">
              Meet Ana Nelson
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </Section>

      {/* SECCIÓN: CTA FINAL DE CONTACTO */}
      <Section className="bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6">
            Ready to Protect Your Reputation?
          </h2>
          <p className="text-xl mb-10 opacity-95 leading-relaxed">
            Some moments in leadership feel unstable, ambiguous, or simply overwhelming. That's when we step in, to steady teams, restore alignment, and help organizations move forward with certainty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center text-lg">
            <Link href="/contact" data-testid="link-final-contact">
              <Button
                variant="secondary"
                size="lg"
                data-testid="button-contact-cta"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Us Today
              </Button>
            </Link>
            <a 
              href={import.meta.env.VITE_CALENDLY_URL || '#'} 
              target="_blank" 
              rel="noopener noreferrer"
              data-testid="link-schedule-call"
            >
              <Button
                variant="outline"
                size="lg"
                data-testid="button-schedule-call"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule a Call
              </Button>
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}
