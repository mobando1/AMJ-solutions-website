import { Card } from '@/components/ui/card';

interface LogoWallProps {
  className?: string;
}

export default function LogoWall({ className = '' }: LogoWallProps) {
  const clients = [
    { name: 'Truist Financial', alt: 'Truist Financial logo' },
    { name: 'IBM', alt: 'IBM logo' },
    { name: 'USAA', alt: 'USAA logo' },
    { name: 'CPS Energy', alt: 'CPS Energy logo' },
    { name: 'Harland Clarke', alt: 'Harland Clarke logo' },
    { name: 'Texas A&M University', alt: 'Texas A&M University logo' },
    { name: 'UT Health San Antonio', alt: 'UT Health San Antonio logo' },
    { name: 'Argonaut Group', alt: 'Argonaut Group logo' },
  ];

  return (
    <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ${className}`}>
      {clients.map((client, index) => (
        <Card
          key={index}
          className="flex items-center justify-center p-8 transition-all duration-200 hover-elevate"
          data-testid={`logo-${client.name.toLowerCase().replace(/\s+/g, '-')}`}
        >
          <div className="flex items-center justify-center h-16 w-full">
            <span className="text-lg md:text-xl font-semibold text-muted-foreground text-center">
              {client.name}
            </span>
          </div>
        </Card>
      ))}
    </div>
  );
}
