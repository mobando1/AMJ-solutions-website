import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  outcomes: string[];
  onConsultationClick?: () => void;
}

export default function ServiceCard({
  title,
  description,
  outcomes,
  onConsultationClick,
}: ServiceCardProps) {
  return (
    <Card className="h-full flex flex-col hover-elevate transition-all duration-200">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        <ul className="space-y-2">
          {outcomes.map((outcome, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-muted-foreground">{outcome}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          variant="outline"
          size="sm"
          className="w-full"
          onClick={onConsultationClick}
          data-testid={`button-consult-${title.toLowerCase().replace(/\s+/g, '-')}`}
        >
          Schedule Consultation
        </Button>
      </CardFooter>
    </Card>
  );
}
