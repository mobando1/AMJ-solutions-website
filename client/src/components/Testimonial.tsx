import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  avatar?: string;
}

export default function Testimonial({ quote, author, role, avatar }: TestimonialProps) {
  return (
    <Card className="border-l-4 border-l-primary">
      <CardContent className="pt-6">
        <div className="flex flex-col gap-4">
          <Quote className="h-8 w-8 text-primary/20" />
          <blockquote className="text-lg leading-relaxed text-foreground italic">
            "{quote}"
          </blockquote>
          <div className="flex items-center gap-3">
            {avatar && (
              <img 
                src={avatar} 
                alt={author} 
                className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
              />
            )}
            <div className="flex flex-col gap-1">
              <cite className="not-italic text-sm font-semibold text-foreground">{author}</cite>
              <p className="text-sm text-muted-foreground">{role}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
