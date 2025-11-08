import { Link } from 'wouter';
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import butterflyLogo from '@assets/ChatGPT Image Oct 22 2025 from Crear Prompt_1761182134105.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigation = {
    company: [
      { name: 'About', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'Clients', href: '/clients' },
      { name: 'Contact', href: '/contact' },
    ],
    services: [
      { name: 'Crisis Communications', href: '/services#crisis' },
      { name: 'Reputation Management', href: '/services#reputation' },
      { name: 'Media Training', href: '/services#media-training' },
      { name: 'Executive Coaching', href: '/services#coaching' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Brand Column */}
            <div className="lg:col-span-4">
              <Link href="/" data-testid="link-footer-home">
                <div className="flex items-center gap-3 mb-6 hover:opacity-80 transition-opacity">
                  <img 
                    src={butterflyLogo} 
                    alt="AMJ Solutions Group Logo" 
                    className="h-12 w-12 object-contain" 
                  />
                  <span className="text-lg font-semibold text-foreground">
                    AMJ Solutions Group
                  </span>
                </div>
              </Link>
              <p className="text-base text-muted-foreground leading-relaxed mb-6 max-w-md">
                Strategic communications and crisis management for leaders who need trusted counsel in high-stakes moments.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <a
                  href="mailto:ana@amjsolutionsgroup.com"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
                  data-testid="link-footer-email"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <span>ana@amjsolutionsgroup.com</span>
                </a>

                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <span>Boca Raton, Florida</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <a
                  href="https://linkedin.com/in/ana-joanicot-nelson-42a63718"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
                  data-testid="link-linkedin"
                  aria-label="Connect with Ana Nelson on LinkedIn"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium">Connect on LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Company Links */}
            <div className="lg:col-span-2">
              <h3 className="text-base font-semibold text-foreground mb-6">Company</h3>
              <ul className="space-y-4" role="list">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      data-testid={`link-footer-${item.name.toLowerCase()}`}
                    >
                      <span className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        {item.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div className="lg:col-span-3">
              <h3 className="text-base font-semibold text-foreground mb-6">Services</h3>
              <ul className="space-y-4" role="list">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      data-testid={`link-footer-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <span className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        {item.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div className="lg:col-span-3">
              <h3 className="text-base font-semibold text-foreground mb-6">Legal</h3>
              <ul className="space-y-4" role="list">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      data-testid={`link-footer-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <span className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        {item.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Confidentiality Guarantee:</strong> All client engagements are conducted under strict confidentiality agreements.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              © {currentYear} AMJ Solutions Group. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground text-center sm:text-right">
              Professional communications consulting services
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
