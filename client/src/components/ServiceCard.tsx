import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, LucideIcon, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

interface ServiceCardProps {
  title: string;
  description: string;
  outcomes?: string[];
  icon?: LucideIcon;
  onConsultationClick?: () => void;
  learnMoreUrl?: string;
  hideButton?: boolean;
}

export default function ServiceCard({
  title,
  description,
  outcomes = [],
  icon: Icon,
  onConsultationClick,
  learnMoreUrl,
  hideButton = false,
}: ServiceCardProps) {
  const hasOutcomes = outcomes.length > 0;
  const showLearnMore = !!learnMoreUrl;
  
  return (
    <Card className="h-full flex flex-col hover-elevate transition-all duration-200">
      <CardHeader className="space-y-4">
        {Icon && (
          <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/10 shadow-lg animate-pulse" style={{ animationDuration: '3s' }}>
            <Icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
          </div>
        )}
        <CardTitle className="text-xl text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 space-y-4">
        <p className={`text-sm text-muted-foreground leading-relaxed ${showLearnMore ? 'text-center' : ''}`}>{description}</p>
        {hasOutcomes && (
          <ul className="space-y-2">
            {outcomes.map((outcome, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{outcome}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
      {!hideButton && (
        <CardFooter>
          {showLearnMore ? (
            <Link href={learnMoreUrl} className="w-full">
              <Button
                variant="outline"
                size="sm"
                className="w-full group"
                data-testid={`button-learn-more-${title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                Learn More
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          ) : (
            <Button
              variant="outline"
              size="sm"
              className="w-full"
              onClick={onConsultationClick}
              data-testid={`button-consult-${title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              Schedule Consultation
            </Button>
          )}
        </CardFooter>
      )}
    </Card>
  );
}
