import { Card } from '@/components/ui/card';
import truistLogo from '@assets/Truist Logo Horizontal_1761095018160.png';
import ibmLogo from '@assets/IBM Official Logo HD_1761094996486.jpeg';
import usaaLogo from '@assets/USAA Logo Horizontal_1761095018160.png';
import harlandClarkeLogo from '@assets/Harland Clarke Bank Cheque Service_1761094996485.png';
import tamuccLogo from '@assets/TAMUCC Logo_1761095018159.png';
import utHealthLogo from '@assets/pngfind.com-university-of-texas-logo-6451175_1761095426091.png';
import argoLogo from '@assets/New Argo Logo_1761094996486.png';
import cpsEnergyLogo from '@assets/CPS Energy Logo_1761095488278.png';

interface LogoWallProps {
  className?: string;
}

export default function LogoWall({ className = '' }: LogoWallProps) {
  const clients = [
    { name: 'Truist Financial', alt: 'Truist Financial logo', logo: truistLogo },
    { name: 'IBM', alt: 'IBM logo', logo: ibmLogo },
    { name: 'USAA', alt: 'USAA logo', logo: usaaLogo },
    { name: 'Harland Clarke', alt: 'Harland Clarke logo', logo: harlandClarkeLogo },
    { name: 'Texas A&M University', alt: 'Texas A&M University Corpus Christi logo', logo: tamuccLogo },
    { name: 'UT Health San Antonio', alt: 'UT Health San Antonio logo', logo: utHealthLogo },
    { name: 'Argo Group', alt: 'Argo Group logo', logo: argoLogo },
    { name: 'CPS Energy', alt: 'CPS Energy logo', logo: cpsEnergyLogo },
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
            {client.logo ? (
              <img
                src={client.logo}
                alt={client.alt}
                loading="lazy"
                className="max-h-16 max-w-full object-contain"
              />
            ) : (
              <span className="text-lg md:text-xl font-semibold text-muted-foreground text-center">
                {client.name}
              </span>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
}
