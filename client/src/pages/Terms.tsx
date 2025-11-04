import Section from '@/components/Section';

export default function Terms() {
  return (
    <div>
      <Section className="bg-card">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-semibold text-foreground mb-6">
            Terms of Service
          </h1>
          <p className="text-lg text-muted-foreground">Last updated: October 2025</p>
        </div>
      </Section>

      <Section className="bg-background">
        <div className="max-w-4xl mx-auto prose prose-slate">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using the AMJ Solutions Group website, you agree to be bound by
                these Terms of Service and all applicable laws and regulations.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Professional Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                AMJ Solutions Group provides strategic communications consulting services. All
                professional engagements are governed by separate written agreements that outline
                the scope of work, fees, and terms specific to each engagement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Confidentiality</h2>
              <p className="text-muted-foreground leading-relaxed">
                All client information and communications are treated with the utmost
                confidentiality. We maintain strict professional standards and execute
                confidentiality agreements for all consulting engagements.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Intellectual Property
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The content on this website, including text, graphics, logos, and images, is the
                property of AMJ Solutions Group and is protected by copyright and other
                intellectual property laws.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                AMJ Solutions Group shall not be liable for any indirect, incidental, special, or
                consequential damages arising out of or related to the use of our website or
                services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms of Service, please contact us at{' '}
                <a
                  href="mailto:ana@amjsolutionsgroup.com"
                  className="text-primary hover:underline"
                >
                  ana@amjsolutionsgroup.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
