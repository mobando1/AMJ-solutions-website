import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
}

export default function Testimonial({ quote, author, role }: TestimonialProps) {
  return (
    <Card className="border-l-4 border-l-primary">
      <CardContent className="pt-6">
        <div className="flex flex-col gap-4">
          <Quote className="h-8 w-8 text-primary/20" />
          <blockquote className="text-lg leading-relaxed text-foreground italic">
            "{quote}"
          </blockquote>
          <div className="flex flex-col gap-1">
            <cite className="not-italic text-sm font-semibold text-foreground">{author}</cite>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
