import PageMeta from '@/components/PageMeta';
import Section from '@/components/Section';

export default function Privacy() {
  return (
    <div>
      <PageMeta title="Privacy Policy" description="AMJ Solutions Group privacy policy. Learn how we collect, use, and protect your information." />
      <Section className="bg-card">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-2xl sm:text-4xl font-semibold text-foreground mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground">Last updated: October 2025</p>
        </div>
      </Section>

      <Section className="bg-background">
        <div className="max-w-4xl mx-auto prose prose-slate">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                AMJ Solutions Group ("we," "our," or "us") is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your
                information when you visit our website or use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Information We Collect
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Contact us through our website forms</li>
                <li>Schedule a consultation</li>
                <li>Subscribe to our communications</li>
                <li>Engage our professional services</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                How We Use Your Information
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Respond to your inquiries and provide requested services</li>
                <li>Communicate with you about our services</li>
                <li>Improve our website and service offerings</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Confidentiality and Security
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational security measures to protect
                your personal information. All client engagements are conducted under strict
                confidentiality agreements, and we maintain the highest standards of professional
                discretion.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at{' '}
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
