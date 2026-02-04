import Section from '@/components/Section';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import headshotImage from '@assets/Profile Pic from Mateo\'s Team_1761590706734.jpg';
import butterflyImage from '@assets/ChatGPT Image Oct 22 2025 from Crear Prompt_1761182134105.png';

export default function About() {
  const methodology = [
    {
      step: '1',
      title: 'Assess & Stabilize',
      description: 'Rapidly understand the situation, risks, leadership dynamics, and decision constraints. Immediate priorities are clarified and early stabilization begins.',
    },
    {
      step: '2',
      title: 'Align Leadership Direction',
      description: 'Establish clear decision pathways, leadership alignment, and consistent communication to reduce friction and regain control.',
    },
    {
      step: '3',
      title: 'Guide Execution',
      description: 'Support leaders as direction is translated into action—ensuring communication, risk management, and execution move together.',
    },
    {
      step: '4',
      title: 'Prepare Leadership',
      description: 'Strengthen executive readiness through scenario planning, leadership coaching, and decision-making support under pressure.',
    },
    {
      step: '5',
      title: 'Reinforce & Prepare Forward',
      description: 'Confirm stability, capture lessons learned, and leave leaders better prepared for what comes next.',
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
              More than 25 years of combined leadership experience guiding organizations through their most critical moments
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
              Trusted Executive Counsel
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Ana Nelson brings more than 25 years of senior-level advisory and leadership experience supporting executives through risk, change, and uncertainty. She is trusted by C-suite leaders when decisions carry consequence, communication must be precise, and execution cannot falter.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Her work spans financial services, energy, technology, healthcare, higher education, and government-adjacent environments. Ana's approach is grounded in clarity, discretion, and disciplined execution—helping leaders stabilize situations, align direction, and move forward with confidence.
            </p>
            <p className="text-base font-medium text-foreground pt-2">
              She has been relied upon to:
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  [Punto 1 - por agregar]
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  [Punto 2 - por agregar]
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  [Punto 3 - por agregar]
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-card py-6 sm:py-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
            How We Work
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="hidden md:block absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20" />
            
            <div className="space-y-8">
              {methodology.map((item, index) => (
                <div key={index} className="relative flex gap-6">
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground font-bold text-xl flex items-center justify-center shadow-lg">
                      {item.step}
                    </div>
                  </div>
                  
                  <Card className="flex-1 hover-elevate transition-all duration-200">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
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
