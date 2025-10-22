import { Link } from 'wouter';
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigation = {
    company: [
      { name: 'About', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'Clients', href: '/clients' },
      { name: 'Contact', href: '/contact' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
  };

  return (
    <footer className="bg-card border-t border-card-border">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">AMJ Solutions Group</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Strategic communications for high-stakes moments. Expert crisis management and
              reputation counsel.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} data-testid={`link-footer-${item.name.toLowerCase().replace(' ', '-')}`}>
                    <span className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:contact@amjsolutionsgroup.com" className="hover:text-primary transition-colors" data-testid="link-email">
                  contact@amjsolutionsgroup.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+15615550123" className="hover:text-primary transition-colors" data-testid="link-phone">
                  +1 (561) 555-0123
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>Boca Raton, Florida</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} data-testid={`link-footer-${item.name.toLowerCase().replace(' ', '-')}`}>
                    <span className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <a
                href="https://linkedin.com/company/amj-solutions-group"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-linkedin"
              >
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} AMJ Solutions Group. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground text-center sm:text-right">
              All client engagements conducted under strict confidentiality.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
