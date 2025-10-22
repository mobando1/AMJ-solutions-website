import { Card } from '@/components/ui/card';
import truistLogo from '@assets/stock_images/truist_bank_financia_99e1f1b4.jpg';
import ibmLogo from '@assets/stock_images/ibm_technology_compa_bde72d60.jpg';
import usaaLogo from '@assets/stock_images/usaa_insurance_compa_d800a311.jpg';
import cpsEnergyLogo from '@assets/stock_images/cps_energy_utility_c_2774b4ff.jpg';

interface LogoWallProps {
  className?: string;
}

export default function LogoWall({ className = '' }: LogoWallProps) {
  const clients = [
    { name: 'Truist Financial', alt: 'Truist Financial logo', logo: truistLogo },
    { name: 'IBM', alt: 'IBM logo', logo: ibmLogo },
    { name: 'USAA', alt: 'USAA logo', logo: usaaLogo },
    { name: 'CPS Energy', alt: 'CPS Energy logo', logo: cpsEnergyLogo },
    { name: 'Harland Clarke', alt: 'Harland Clarke logo', logo: null },
    { name: 'Texas A&M University', alt: 'Texas A&M University logo', logo: null },
    { name: 'UT Health San Antonio', alt: 'UT Health San Antonio logo', logo: null },
    { name: 'Argonaut Group', alt: 'Argonaut Group logo', logo: null },
  ];

  return (
    <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ${className}`}>
      {clients.map((client, index) => (
        <Card
          key={index}
          className="flex items-center justify-center p-8 transition-all duration-200 grayscale hover:grayscale-0 hover-elevate"
          data-testid={`logo-${client.name.toLowerCase().replace(/\s+/g, '-')}`}
        >
          <div className="flex items-center justify-center h-16 w-full">
            {client.logo ? (
              <img
                src={client.logo}
                alt={client.alt}
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
