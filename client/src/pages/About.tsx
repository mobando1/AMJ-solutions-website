import PageMeta from '@/components/PageMeta';
import Section from '@/components/Section';
import FadeIn from '@/components/FadeIn';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import headshotImage from '@assets/Profile Pic from Mateo\'s Team_1761590706734.webp';
import butterflyImage from '@assets/ChatGPT Image Oct 22 2025 from Crear Prompt_1761182134105.webp';

export default function About() {
  const methodology = [
    {
      step: '1',
      title: 'Assess & Stabilize',
      description: 'Rapidly assess the situation, risks, leadership dynamics, and decision constraints. Immediate priorities are clarified, and structure is established to restore control and early stability.',
    },
    {
      step: '2',
      title: 'Align Leadership Direction',
      description: 'Establish clear decision pathways, leadership alignment, and consistent communication, reducing friction and ensuring leaders operate with shared direction and control.',
    },
    {
      step: '3',
      title: 'Guide Execution',
      description: 'Translate leadership direction into disciplined action; ensuring communication, risk management, and execution remain aligned and moving together.',
    },
    {
      step: '4',
      title: 'Prepare Leadership',
      description: 'Strengthen executive readiness through scenario planning, structured decision support, and leadership guidance across risk, technology, and AI-driven environments.',
    },
    {
      step: '5',
      title: 'Reinforce & Prepare Forward',
      description: 'Confirm stability, reinforce operational discipline, and position leadership to move forward with clarity, alignment, and confidence.',
    },
  ];

  return (
    <div>
      <PageMeta title="About Ana Nelson" description="Executive Advisor & Fractional COO — aligning leadership, communication, risk, technology, and AI governance to maintain stability." />
      <section className="bg-card pt-6 pb-4 sm:pt-8 sm:pb-4">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-semibold text-foreground mb-2">
                About Ana Nelson
              </h1>
              <p className="text-lg text-primary font-medium mb-2">
                Executive Advisor & Fractional COO
              </p>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                Aligning leadership, communication, risk, technology, and AI governance to maintain stability and move forward with clarity
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <Section className="bg-background pt-4 pb-6 sm:pt-4 sm:pb-8">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src={headshotImage}
                alt="Ana Nelson, Founder of AMJ Solutions Group"
                loading="lazy"
                className="rounded-lg shadow-lg w-full max-w-md mx-auto"
                data-testid="img-ana-nelson"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-foreground">
                Trusted Executive Counsel
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Ana Nelson brings more than 25 years of experience advising C-suite leaders across energy, financial services, education, government, and defense-adjacent environments—where decisions carry consequence and execution must hold under pressure. She has led mission-critical initiatives, stabilized complex programs, and supported executives through crisis, transformation, and operational strain, including aligning leadership and governance across enterprise technology, data, and AI-driven environments.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Respected for her execution rigor, sound judgment, and clear, candid counsel, Ana brings the structure and perspective leaders rely on to maintain alignment and make decisions that hold under pressure. Her approach is grounded in resilience and discipline, shaped by her family's journey from Cuba to the United States—informing how she helps organizations move forward with clarity and confidence when it matters most.
              </p>
              <div className="space-y-3 pt-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    Fortune 500 and Regulated Industry Experience
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    Executive Crisis and Risk Leadership
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    Executive Communication, Media Readiness and Stakeholder Alignment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      <Section className="bg-card py-6 sm:py-8">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
              How We Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              This is how we bring structure and alignment to leadership in practice
            </p>
          </div>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="hidden md:block absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20" />

            <div className="space-y-8">
              {methodology.map((item, index) => (
                <FadeIn key={index} delay={index * 100}>
                  <div className="relative flex gap-6">
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary text-primary-foreground font-bold text-lg sm:text-xl flex items-center justify-center shadow-lg">
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
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-background py-6 sm:py-8">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-4">
              <img
                src={butterflyImage}
                alt="Transformation symbol"
                loading="lazy"
                className="h-16 w-16 sm:h-24 sm:w-24 opacity-80"
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
        </FadeIn>
      </Section>
    </div>
  );
}
