import Section from '@/components/Section';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import headshotImage from '@assets/Ana Nelson FluxLoRA Image_1761180719803.jpg';
import butterflyImage from '@assets/ChatGPT Image Oct 22 2025 from Crear Prompt_1761182134105.png';

export default function About() {
  const methodology = [
    {
      step: '1',
      title: 'Discovery',
      description: 'Deep dive into your situation, stakeholders, and objectives',
    },
    {
      step: '2',
      title: 'Strategy',
      description: 'Craft a comprehensive communications plan tailored to your needs',
    },
    {
      step: '3',
      title: 'Execution',
      description: 'Implement messaging, stakeholder engagement, and crisis protocols',
    },
    {
      step: '4',
      title: 'Training',
      description: 'Prepare executives through media training and scenario planning',
    },
    {
      step: '5',
      title: 'Evaluation',
      description: 'Measure impact and refine approach for continuous improvement',
    },
  ];

  return (
    <div>
      <section className="bg-card pt-6 pb-4 sm:pt-8 sm:pb-4">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-semibold text-foreground mb-2">
              About Ana Nelson
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Over 25 years of combined leadership experience guiding organizations through their most critical moments
            </p>
          </div>
        </div>
      </section>

      <Section className="bg-background pt-4 pb-6 sm:pt-4 sm:pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src={headshotImage}
              alt="Ana Nelson, Founder of AMJ Solutions Group"
              className="rounded-lg shadow-lg w-full max-w-md mx-auto"
              data-testid="img-ana-nelson"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-foreground">
              Trusted Counsel for High-Stakes Communications
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Ana Nelson brings over 25 years of combined leadership experience in corporate communications, crisis
              management, and media relations. She has advised C-suite executives at Fortune 500
              companies through high-stakes situations including corporate crises, reputation
              threats, regulatory challenges, and transformative business moments.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Her expertise spans financial services, healthcare, energy, technology, and higher
              education sectors. Ana's approach combines strategic counsel with practical execution,
              ensuring clients navigate complex situations with confidence and clarity.
            </p>
            <div className="space-y-3 pt-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  Advised executives at Truist, IBM, USAA, and other leading organizations
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  Managed crisis situations with potential multi-million dollar impact
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  Trained hundreds of executives in media relations and crisis communication
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-card py-6 sm:py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
            Our Methodology
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven five-step approach to strategic communications
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {methodology.map((item, index) => (
            <Card key={index} className="hover-elevate transition-all duration-200">
              <CardContent className="pt-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-background py-6 sm:py-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-4">
            <img
              src={butterflyImage}
              alt="Transformation symbol"
              className="h-24 w-24 opacity-80"
              data-testid="img-butterfly"
            />
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-3">
            Transformation Through Communication
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Just as a butterfly emerges transformed, we help organizations navigate change and
            crisis to emerge stronger, more resilient, and better positioned for the future. Our
            approach focuses on authentic transformation—not just managing the moment, but building
            lasting capabilities that serve you well beyond the immediate challenge.
          </p>
        </div>
      </Section>
    </div>
  );
}
