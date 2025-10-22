import { Card } from '@/components/ui/card';

interface LogoWallProps {
  className?: string;
}

export default function LogoWall({ className = '' }: LogoWallProps) {
  const clients = [
    { name: 'Truist Financial', alt: 'Truist Financial logo' },
    { name: 'IBM', alt: 'IBM logo' },
    { name: 'USAA', alt: 'USAA logo' },
    { name: 'Harland Clarke', alt: 'Harland Clarke logo' },
    { name: 'Texas A&M University - Corpus Christi', alt: 'Texas A&M University Corpus Christi logo' },
    { name: 'CPS Energy', alt: 'CPS Energy logo' },
    { name: 'UT Health San Antonio', alt: 'UT Health San Antonio logo' },
    { name: 'Argo Group', alt: 'Argo Group logo' },
  ];

  return (
    <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ${className}`}>
      {clients.map((client, index) => (
        <Card
          key={index}
          className="flex items-center justify-center p-8 transition-all duration-200 grayscale hover:grayscale-0"
          data-testid={`logo-${client.name.toLowerCase().replace(/\s+/g, '-')}`}
        >
          <div className="flex items-center justify-center h-16">
            <span className="text-2xl font-bold text-muted-foreground text-center">
              {client.name}
            </span>
          </div>
        </Card>
      ))}
    </div>
  );
}
