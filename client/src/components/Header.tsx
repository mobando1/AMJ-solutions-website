import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import butterflyLogo from '@assets/ChatGPT Image Oct 22 2025 from Crear Prompt_1761182134105.png';

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Clients', href: '/clients' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <nav className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" data-testid="link-home" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img 
                src={butterflyLogo} 
                alt="AMJ Solutions Group - Crisis Communications & Reputation Management" 
                className="h-14 w-14 object-contain" 
              />
              <span className="text-xl font-semibold text-foreground">AMJ Solutions Group</span>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                data-testid={`link-${item.name.toLowerCase()}`}
              >
                <span
                  className={`text-base font-medium transition-colors hover:text-primary ${
                    location === item.href ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            ))}
            <Link href="/contact" data-testid="link-consultation">
              <Button size="default" data-testid="button-consultation">
                Book Consultation
              </Button>
            </Link>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border py-6 space-y-3" role="navigation" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                data-testid={`link-mobile-${item.name.toLowerCase()}`}
              >
                <div
                  className={`block px-4 py-3 text-lg font-medium rounded-md hover-elevate ${
                    location === item.href
                      ? 'text-primary bg-primary/5'
                      : 'text-muted-foreground'
                  }`}
                >
                  {item.name}
                </div>
              </Link>
            ))}
            <div className="px-4 pt-3">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} data-testid="link-mobile-consultation">
                <Button className="w-full" size="default" data-testid="button-mobile-consultation">
                  Book Consultation
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
