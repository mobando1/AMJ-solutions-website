import truistLogo from '@assets/Truist Logo Horizontal_1761095018160.png';
import ibmLogo from '@assets/IBM Official Logo HD_1761094996486.jpeg';
import usaaLogo from '@assets/USAA Logo Horizontal_1761095018160.png';
import harlandClarkeLogo from '@assets/Harland Clarke Bank Cheque Service_1761094996485.png';
import tamuccLogo from '@assets/TAMUCC Logo_1761095018159.png';
import utHealthLogo from '@assets/pngfind.com-university-of-texas-logo-6451175_1761095426091.png';
import argoLogo from '@assets/New Argo Logo_1761094996486.png';
import cpsEnergyLogo from '@assets/CPS Energy Logo_1761095488278.png';

export default function LogoMarquee() {
  const clients = [
    { name: 'Truist Financial', logo: truistLogo },
    { name: 'IBM', logo: ibmLogo },
    { name: 'USAA', logo: usaaLogo },
    { name: 'Harland Clarke', logo: harlandClarkeLogo },
    { name: 'Texas A&M University', logo: tamuccLogo },
    { name: 'UT Health San Antonio', logo: utHealthLogo },
    { name: 'Argo Group', logo: argoLogo },
    { name: 'CPS Energy', logo: cpsEnergyLogo },
  ];

  return (
    <div className="w-full overflow-hidden bg-muted/30 py-8 border-y border-border">
      <div className="relative flex gap-12">
        <div className="flex animate-marquee gap-12 items-center min-w-full shrink-0">
          {clients.map((client, index) => (
            <div
              key={`first-${index}`}
              className="flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex-shrink-0 w-32"
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="h-8 w-auto max-w-full object-contain"
              />
            </div>
          ))}
        </div>
        <div className="flex animate-marquee gap-12 items-center min-w-full shrink-0" aria-hidden="true">
          {clients.map((client, index) => (
            <div
              key={`second-${index}`}
              className="flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex-shrink-0 w-32"
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="h-8 w-auto max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
